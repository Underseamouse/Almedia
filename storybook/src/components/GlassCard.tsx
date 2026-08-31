import React from 'react';

export interface GlassCardProps {
  children: React.ReactNode;
  padding?: string;
  radius?: string;
  /** Frosting strength. Needs something coloured behind it to be worth having. */
  blur?: number;
  style?: React.CSSProperties;
}

/**
 * A frosted panel.
 *
 * Only reaches for glass when there is ambient colour underneath — over flat
 * black it degrades into a slightly lighter rectangle and costs a repaint for
 * nothing. Pair it with `Ambient`.
 *
 * The edge is a gradient rather than a flat stroke: light collects on the top
 * corner and falls away, which is the detail that actually sells the material.
 */
export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  padding = 'var(--space-5) var(--space-3)',
  radius = 'var(--rounded-05)',
  blur = 28,
  style
}) => (
  <div
    style={{
      position: 'relative',
      padding,
      borderRadius: radius,
      background:
        'linear-gradient(160deg, rgba(255,255,255,0.14), rgba(255,255,255,0.045))',
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      boxShadow: '0 10px 28px -6px rgba(0,0,0,0.3)',
      ...style
    }}
  >
    {/* gradient hairline, drawn as a masked ring so it follows the radius */}
    <span
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 'inherit',
        padding: 1,
        background:
          'linear-gradient(150deg, rgba(255,255,255,0.34), rgba(255,255,255,0.10) 45%, rgba(255,255,255,0.05))',
        WebkitMask:
          'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
        WebkitMaskComposite: 'xor',
        mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
        maskComposite: 'exclude',
        pointerEvents: 'none'
      }}
    />
    {children}
  </div>
);
