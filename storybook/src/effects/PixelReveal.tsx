import React, { useEffect, useRef, useState } from 'react';

export interface PixelRevealProps {
  src: string;
  width?: number;
  height?: number;
  /** Cell edge in px. Bigger cells read as chunkier "generating". */
  cell?: number;
  /** Seconds from first paint to fully revealed. */
  duration?: number;
  radius?: string;
  /** Replay whenever this changes — handy for the Storybook control. */
  replayKey?: number;
  className?: string;
}

/**
 * Image loader that generates rather than fades.
 *
 * The picture arrives as a grid of colour cells sampled from itself, which
 * flicker briefly and then dissolve along a diagonal wavefront. Because the
 * cells are the image's own palette, the placeholder already looks like the
 * artwork — the reveal reads as focusing, not as a swap.
 *
 * Offer artwork is the slowest thing on the matched-offers screen; this makes
 * the wait feel deliberate instead of broken.
 */
export const PixelReveal: React.FC<PixelRevealProps> = ({
  src,
  width = 240,
  height = 160,
  cell = 12,
  duration = 1.6,
  radius = 'var(--rounded-04)',
  replayKey = 0,
  className
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onerror = () => setFailed(true);
    img.onload = () => {
      const cols = Math.ceil(width / cell);
      const rows = Math.ceil(height / cell);

      // Sample the image once at grid resolution — this is the placeholder palette.
      const sampler = document.createElement('canvas');
      sampler.width = cols;
      sampler.height = rows;
      const sctx = sampler.getContext('2d', { willReadFrequently: true });
      if (!sctx) return;
      sctx.drawImage(img, 0, 0, cols, rows);
      const data = sctx.getImageData(0, 0, cols, rows).data;

      // Each cell gets its own place in the queue: a diagonal wavefront plus
      // enough jitter that the edge never looks like a ruler.
      const thresholds: number[] = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const diagonal = (x / cols) * 0.55 + (y / rows) * 0.35;
          thresholds.push(diagonal + Math.random() * 0.22);
        }
      }
      const maxT = Math.max(...thresholds);

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const start = performance.now();

      const frame = (now: number) => {
        const p = reduce ? 1 : Math.min((now - start) / (duration * 1000), 1);

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        if (p < 1) {
          let i = 0;
          for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++, i++) {
              const t = thresholds[i] / maxT;
              if (p >= t) continue; // this cell has already dissolved

              const o = i * 4;
              // Cells flicker on their own clock right before they clear.
              const flicker = 0.55 + 0.45 * Math.sin(now / 90 + i * 1.7);
              const near = 1 - Math.min((t - p) / 0.22, 1); // fade as its turn approaches
              ctx.globalAlpha = Math.max(0, 1 - near * 0.85) * flicker;
              ctx.fillStyle = `rgb(${data[o]},${data[o + 1]},${data[o + 2]})`;
              ctx.fillRect(x * cell, y * cell, cell + 0.5, cell + 0.5);
            }
          }
          ctx.globalAlpha = 1;
          rafRef.current = requestAnimationFrame(frame);
        }
      };
      rafRef.current = requestAnimationFrame(frame);
    };

    img.src = src;
    return () => cancelAnimationFrame(rafRef.current);
  }, [src, width, height, cell, duration, replayKey]);

  if (failed) {
    return (
      <div
        style={{
          width,
          height,
          borderRadius: radius,
          background: 'var(--surface-input)',
          display: 'grid',
          placeItems: 'center',
          color: 'var(--text-secondary)',
          font: '500 12px/18px var(--font)'
        }}
      >
        artwork unavailable
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ borderRadius: radius, display: 'block' }}
    />
  );
};
