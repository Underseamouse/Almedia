import React from 'react';
import { Laurel } from './Laurel';

export interface AwardStatProps {
  /** The number that carries the claim. */
  value: string;
  /** What the number is. Two short lines beat one long one. */
  label?: React.ReactNode;
  /** Sits above the value — a star row, a store badge. */
  crest?: React.ReactNode;
  /** Source line under the label. */
  source?: React.ReactNode;
  wreathHeight?: number;
  width?: number | string;
}

/**
 * A verified number, framed by a laurel wreath.
 *
 * The wreath is doing real work: it borrows the visual grammar of an award, so
 * the figure reads as something conferred by other people rather than claimed
 * by the app. That is exactly the job of the first screen — the whole redesign
 * exists because the product's own promises had stopped being believed.
 *
 * Only ever put verifiable public numbers in here.
 */
export const AwardStat: React.FC<AwardStatProps> = ({
  value,
  label,
  crest,
  source,
  wreathHeight = 86,
  width = '100%'
}) => (
  <div
    style={{
      width,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      alignItems: 'center',
      justifyItems: 'center',
      gap: 'var(--space-2)'
    }}
  >
    <Laurel side="left" height={wreathHeight} />

    <div style={{ textAlign: 'center', display: 'grid', gap: 2 }}>
      {crest}
      <div
        style={{
          font: `600 var(--h-sm)/var(--h-sm-lh) var(--font)`,
          letterSpacing: 'var(--tracking)',
          color: 'var(--text-primary)'
        }}
      >
        {value}
      </div>
      {label && (
        <div
          style={{
            font: `400 var(--t-sm)/var(--t-sm-lh) var(--font)`,
            letterSpacing: 'var(--tracking)',
            color: 'var(--text-primary)'
          }}
        >
          {label}
        </div>
      )}
      {source && <div style={{ marginTop: 2 }}>{source}</div>}
    </div>

    <Laurel side="right" height={wreathHeight} />
  </div>
);

/** The five-square Trustpilot rating row. */
export const TrustpilotStars: React.FC<{ rating?: number; size?: number }> = ({
  rating = 4.7,
  size = 18
}) => (
  <div style={{ display: 'flex', gap: 2, justifyContent: 'center' }} aria-label={`${rating} out of 5`}>
    {[0, 1, 2, 3, 4].map((i) => {
      const fill = Math.max(0, Math.min(1, rating - i));
      return (
        <div
          key={i}
          style={{
            width: size,
            height: size,
            borderRadius: 2,
            background: 'var(--gb-300)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              width: `${fill * 100}%`,
              background: 'var(--main-500)'
            }}
          />
          <svg
            viewBox="0 0 24 24"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
            fill="#fff"
          >
            <path d="M12 5.5l2.1 4.3 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7-3.4-3.3 4.7-.7z" />
          </svg>
        </div>
      );
    })}
  </div>
);
