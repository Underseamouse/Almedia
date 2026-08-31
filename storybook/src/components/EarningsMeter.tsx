import React from 'react';
import { AnimatedNumber } from './AnimatedNumber';

export interface EarningsMeterProps {
  /** Earned so far. */
  value: number;
  /** The guaranteed total. Fixed — never derive it from the answers. */
  total?: number;
  currency?: string;
  label?: string;
  /** Full state glows and swaps the label. */
  complete?: boolean;
}

/**
 * Progress toward the guaranteed starter reward.
 *
 * The amount is fixed before the user answers anything; the meter only reveals
 * it in instalments. That distinction is the whole reason this component is
 * careful with its wording — "earned so far" describes a running total, and
 * must never imply the final figure moves with the answers.
 */
export const EarningsMeter: React.FC<EarningsMeterProps> = ({
  value,
  total = 40,
  currency = 'zł',
  label = 'earned so far',
  complete = false
}) => {
  const pct = Math.max(0, Math.min(1, value / total));

  return (
    <div style={{ display: 'grid', gap: 'var(--space-2)', justifyItems: 'center', width: '100%' }}>
      <style>{`
        @keyframes fc-meter-glow {
          0%,100% { box-shadow: 0 0 0 0 rgba(44,252,158,0); }
          50%     { box-shadow: 0 0 18px 0 rgba(44,252,158,0.45); }
        }
      `}</style>

      <div
        style={{
          font: `700 var(--h-sm)/var(--h-sm-lh) var(--font)`,
          letterSpacing: 'var(--tracking)',
          color: complete ? 'var(--main-400)' : 'var(--text-primary)',
          transition: `color var(--dur-base) var(--ease-out)`
        }}
      >
        <AnimatedNumber value={value} suffix={currency} />
      </div>

      <div
        role="progressbar"
        aria-valuenow={Math.round(pct * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          width: '100%',
          height: 'var(--track)',
          borderRadius: 'var(--rounded-full)',
          background: 'var(--gb-300)',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            width: `${pct * 100}%`,
            height: '100%',
            borderRadius: 'var(--rounded-full)',
            background: complete ? 'var(--main-400)' : 'var(--action-primary)',
            // slower than a normal state change: the bar is the reward growing,
            // and it should be watchable rather than instant
            transition: `width var(--dur-slow) var(--ease-out), background var(--dur-base) var(--ease-out)`,
            animation: complete ? 'fc-meter-glow 2.2s var(--ease-inout) infinite' : undefined
          }}
        />
      </div>

      <div
        style={{
          font: `400 var(--t-md)/var(--t-md-lh) var(--font)`,
          letterSpacing: 'var(--tracking)',
          color: 'var(--text-secondary)'
        }}
      >
        {complete ? 'unlocked — all yours' : label}
      </div>
    </div>
  );
};
