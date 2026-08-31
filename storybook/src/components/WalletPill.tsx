import React from 'react';

export interface WalletPillProps {
  /** Balance, already formatted with its currency. */
  balance?: string;
  /** The gold glow behind the pill. On for the hero, off in a dense header. */
  glow?: boolean;
  /** Breathe the glow. Falls still under prefers-reduced-motion (global). */
  animated?: boolean;
  style?: React.CSSProperties;
}

/**
 * The running balance, carried at the top of the game screen.
 *
 * Two decisions come straight from comp 214-9615 and both are deliberate:
 *
 * 1. The rim is Warning 600 (#d19100), a *darker* gold than the Gold token —
 *    a rim has to read as an edge, and bright gold on the near-black ground
 *    blooms into a glow instead of holding a line. The bright gold is spent on
 *    the soft halo behind the pill, where bloom is the point.
 *
 * 2. The bottom border is heavier than the other three (3px vs 1px). That is
 *    the same physical-edge trick the primary button uses — a lit top and a
 *    shadowed underside — so the pill sits *on* the surface rather than in it.
 *
 * The fill is the 80%-navy token, not a solid, so the ambient light bleeds
 * through and ties the pill to the ground it floats over.
 */
export const WalletPill: React.FC<WalletPillProps> = ({
  balance = '€0',
  glow = true,
  animated = true,
  style
}) => (
  <div style={{ position: 'relative', display: 'inline-flex', ...style }}>
    <style>{`
      @keyframes fc-wallet-glow {
        0%,100% { opacity: 0.55; transform: translate(-50%, -50%) scale(1); }
        50%     { opacity: 0.85; transform: translate(-50%, -50%) scale(1.08); }
      }
    `}</style>

    {glow && (
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '150%',
          height: '260%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(closest-side, rgba(255,199,0,0.45), rgba(255,199,0,0) 72%)',
          filter: 'blur(4px)',
          pointerEvents: 'none',
          animation: animated ? 'fc-wallet-glow 3.4s var(--ease-inout) infinite' : undefined
        }}
      />
    )}

    <div
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        background: 'var(--gb-transparent)',
        border: 'var(--border-thin) solid var(--warning-600)',
        borderBottomWidth: '3px',
        borderRadius: 'var(--rounded-04)',
        padding: 'var(--space-2) var(--space-4)'
      }}
    >
      <span style={{ fontSize: 'var(--icon-lg)', lineHeight: 1 }} role="img" aria-label="coins">
        🪙
      </span>
      <span
        style={{
          font: '600 var(--t-lg)/var(--t-lg-lh) var(--font)',
          letterSpacing: 'var(--tracking)',
          color: 'var(--text-primary)',
          whiteSpace: 'nowrap'
        }}
      >
        {balance}
      </span>
    </div>
  </div>
);
