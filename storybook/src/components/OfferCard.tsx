import React from 'react';
import { PixelReveal } from '../effects/PixelReveal';
import { MonoOutline } from '../effects/MonoOutline';

export interface OfferCardProps {
  title: string;
  meta: string;
  amount: string;
  /** guaranteed = the reward is certain · estimated = a ceiling, and must read as one */
  kind?: 'guaranteed' | 'estimated';
  artwork?: string;
  /** Marks the card as the one currently being claimed. */
  live?: boolean;
  onStart?: () => void;
}

/**
 * One offer in the matched list.
 *
 * The badge is the honest part. A guaranteed reward is stated flat ("40.00 zł");
 * an estimated one is always prefixed "up to", because the original app's habit
 * of showing a ceiling as if it were a payout is the single defect this whole
 * redesign is answering.
 */
export const OfferCard: React.FC<OfferCardProps> = ({
  title,
  meta,
  amount,
  kind = 'guaranteed',
  artwork,
  live = false,
  onStart
}) => {
  const guaranteed = kind === 'guaranteed';

  const card = (
    <button
      onClick={onStart}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        width: '100%',
        textAlign: 'left',
        padding: 'var(--space-3)',
        borderRadius: 'var(--rounded-04)',
        background: 'var(--surface-container)',
        border: 0,
        cursor: 'pointer',
        fontFamily: 'var(--font)'
      }}
    >
      {artwork ? (
        <PixelReveal src={artwork} width={64} height={64} cell={8} duration={1.3} radius="var(--rounded-02)" />
      ) : (
        <div
          style={{
            width: 64,
            height: 64,
            flex: 'none',
            borderRadius: 'var(--rounded-02)',
            background: 'var(--surface-input)'
          }}
        />
      )}

      <div style={{ flex: 1, display: 'grid', gap: 2 }}>
        <div
          style={{
            font: `600 var(--t-lg)/var(--t-lg-lh) var(--font)`,
            letterSpacing: 'var(--tracking)',
            color: 'var(--text-primary)'
          }}
        >
          {title}
        </div>
        <div
          style={{
            font: `500 var(--t-sm)/var(--t-sm-lh) var(--font)`,
            letterSpacing: 'var(--tracking)',
            color: 'var(--text-secondary)'
          }}
        >
          {meta}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginTop: 2 }}>
          <span
            style={{
              padding: '2px var(--space-2)',
              borderRadius: 'var(--rounded-full)',
              background: guaranteed ? 'var(--main-25)' : 'var(--surface-elevated-border)',
              color: guaranteed ? 'var(--action-primary)' : 'var(--text-secondary)',
              font: `600 var(--t-sm)/var(--t-sm-lh) var(--font)`,
              letterSpacing: 'var(--tracking)'
            }}
          >
            {guaranteed ? 'Guaranteed' : 'Estimated'}
          </span>
          <span
            style={{
              font: `600 var(--t-lg)/var(--t-lg-lh) var(--font)`,
              letterSpacing: 'var(--tracking)',
              color: 'var(--text-primary)'
            }}
          >
            {guaranteed ? amount : `up to ${amount}`}
          </span>
        </div>
      </div>
    </button>
  );

  return live ? (
    <MonoOutline variant="travel" tone="brand" radius="var(--rounded-04)" speed="3s">
      {card}
    </MonoOutline>
  ) : (
    card
  );
};
