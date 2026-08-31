import React from 'react';
import rosette from '../assets/onboarding/rosette.png';

export interface RewardBadgeProps {
  size?: number;
  /** Idle shine + float. */
  animated?: boolean;
}

/**
 * The award rosette from the "here is your starter reward" card.
 *
 * The medallion is the exact Figma export (a glossy scalloped badge with the
 * €10 figure), committed rather than hot-linked so it survives past the asset
 * URL's 7-day life. The amount is baked into the artwork — if the reward ever
 * needs to be dynamic, that becomes an SVG rebuild; for the onboarding it is a
 * fixed, verified number, so the image is the honest source.
 *
 * The only motion is a slow float and a sweep of light across the badge, which
 * borrows the grammar of a prize being presented.
 */
export const RewardBadge: React.FC<RewardBadgeProps> = ({ size = 200, animated = true }) => (
  <div
    style={{
      position: 'relative',
      width: size,
      height: size,
      animation: animated ? 'fc-badge-float 4.5s var(--ease-inout) infinite' : undefined
    }}
  >
    <style>{`
      @keyframes fc-badge-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
      @keyframes fc-badge-shine { 0% { transform: translateX(-120%) rotate(8deg); } 60%,100% { transform: translateX(220%) rotate(8deg); } }
    `}</style>
    {/* warm glow behind the badge */}
    <span
      aria-hidden
      style={{
        position: 'absolute',
        inset: '8%',
        borderRadius: '50%',
        background: 'radial-gradient(closest-side, rgba(255,180,60,0.5), transparent 70%)',
        filter: 'blur(6px)'
      }}
    />
    <img src={rosette} alt="€10 starter reward" style={{ position: 'relative', width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
    {/* light sweep */}
    {animated && (
      <span
        aria-hidden
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '35%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)',
          animation: 'fc-badge-shine 5s ease-in-out infinite',
          pointerEvents: 'none'
        }}
      />
    )}
  </div>
);
