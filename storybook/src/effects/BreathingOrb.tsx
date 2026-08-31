import React, { useEffect, useRef } from 'react';

export interface BreathingOrbProps {
  /** Outer diameter in px. */
  size?: number;
  /** Dot colour. Any CSS colour; defaults to the brand green. */
  color?: string;
  /** How many dots sit on the ring. */
  count?: number;
  /** Multiplies the shared clock. 1 = calm, 2 = urgent. */
  speed?: number;
  /** How far the ring expands and contracts, as a fraction of its radius. */
  depth?: number;
  /** Paused orbs hold their shape — useful for docs and reduced motion. */
  paused?: boolean;
  className?: string;
}

/**
 * A ring of dots that breathes in place — it never spins.
 *
 * Spinning reads as "working on it"; breathing reads as "alive and waiting".
 * The splash screen holds for under a second, so the mark has to feel calm
 * immediately rather than build up. Each dot also drifts on its own slow
 * wobble, so the ring never looks mechanically perfect.
 */
export const BreathingOrb: React.FC<BreathingOrbProps> = ({
  size = 96,
  color = 'var(--action-primary)',
  count = 34,
  speed = 1,
  depth = 0.12,
  paused = false,
  className
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  const startRef = useRef<number>(performance.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resolve the CSS variable once — canvas cannot read custom properties.
    const probe = document.createElement('span');
    probe.style.color = color;
    document.body.appendChild(probe);
    const resolved = getComputedStyle(probe).color;
    probe.remove();

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const baseR = size * 0.38;
    const dotR = Math.max(1.1, size * 0.019);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const draw = (now: number) => {
      const t = reduce || paused ? 0 : ((now - startRef.current) / 1000) * speed;
      ctx.clearRect(0, 0, size, size);

      // One breath drives the whole ring, so it reads as a single organism.
      const breath = Math.sin(t * 1.15);
      const r = baseR * (1 + depth * breath);

      for (let i = 0; i < count; i++) {
        const a = (i / count) * Math.PI * 2 - Math.PI / 2;

        // Per-dot wobble on an unrelated frequency — kills the mechanical look.
        const wob = Math.sin(t * 1.9 + i * 0.7) * (size * 0.012);
        const rr = r + wob;

        const x = cx + Math.cos(a) * rr;
        const y = cy + Math.sin(a) * rr;

        // Brightness travels slowly around the ring rather than blinking.
        const shimmer = 0.55 + 0.45 * Math.sin(t * 1.4 - i * 0.28);
        const scale = 0.75 + 0.25 * shimmer;

        ctx.globalAlpha = 0.25 + 0.75 * shimmer;
        ctx.fillStyle = resolved;
        ctx.beginPath();
        ctx.arc(x, y, dotR * scale, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reduce && !paused) frameRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frameRef.current);
  }, [size, color, count, speed, depth, paused]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};
