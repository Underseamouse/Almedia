import React from 'react';

export interface OnboardingCardProps {
  /** Full CSS background — the composited tint measured off each Figma card. */
  tint: string;
  /** Colour of the two soft glow blobs (bottom-left + top-right), as in the comp. */
  glow: string;
  /** Optional label pinned near the top (card 3). */
  top?: React.ReactNode;
  /** Optional label pinned near the bottom (all cards). */
  bottom?: React.ReactNode;
  /** The hero, centred. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * The shared shell for the four onboarding cards (Figma frames 79 / 93 / 94 …).
 *
 * Every card in the set is the same object: a 270×290 rounded-24 tile, a
 * translucent colour wash, two out-of-focus glow blobs bleeding in from
 * opposite corners, and a caption. Only the hero in the middle changes. Pulling
 * that skeleton into one component is what lets the four cards read as a family
 * and keeps each story down to *just* its hero.
 *
 * The tint is the colour as it actually composites in the comp (the Figma card
 * sits a #d9d9d9 multiply scrim over a saturated fill; rather than reproduce
 * that stack, each tint is sampled from the rendered frame — same result, half
 * the DOM).
 */
export const OnboardingCard: React.FC<OnboardingCardProps> = ({
  tint,
  glow,
  top,
  bottom,
  children,
  style
}) => (
  <div
    style={{
      position: 'relative',
      width: 270,
      height: 290,
      borderRadius: 'var(--rounded-06)',
      overflow: 'hidden',
      background: tint,
      isolation: 'isolate',
      ...style
    }}
  >
    {/* glow blobs — bottom-left and top-right, matching the comp's ellipses */}
    <span
      aria-hidden
      style={{
        position: 'absolute',
        bottom: '-38%',
        left: '-34%',
        width: 258,
        height: 258,
        borderRadius: '50%',
        background: `radial-gradient(closest-side, ${glow}, transparent 70%)`,
        opacity: 0.6,
        pointerEvents: 'none'
      }}
    />
    <span
      aria-hidden
      style={{
        position: 'absolute',
        top: '-34%',
        right: '-30%',
        width: 258,
        height: 258,
        borderRadius: '50%',
        background: `radial-gradient(closest-side, ${glow}, transparent 70%)`,
        opacity: 0.5,
        pointerEvents: 'none'
      }}
    />

    <div
      style={{
        position: 'relative',
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
        alignItems: 'center',
        padding: 'var(--space-6)',
        textAlign: 'center'
      }}
    >
      <div style={{ minHeight: top ? 21 : 0 }}>
        {top && <div style={labelStyle}>{top}</div>}
      </div>
      <div style={{ display: 'grid', placeItems: 'center' }}>{children}</div>
      <div style={{ minHeight: bottom ? 21 : 0 }}>
        {bottom && <div style={labelStyle}>{bottom}</div>}
      </div>
    </div>
  </div>
);

const labelStyle: React.CSSProperties = {
  font: '600 var(--t-md)/var(--t-md-lh) var(--font)',
  letterSpacing: 'var(--tracking)',
  color: 'var(--text-primary)'
};

/** The four cards' measured tints and glows, in flow order. */
export const CARD_THEME = {
  play: {
    tint: 'linear-gradient(155deg, #269866 0%, #147a4c 45%, #0f6f44 100%)',
    glow: 'rgba(64, 220, 150, 0.55)'
  },
  balance: {
    tint: 'linear-gradient(160deg, #144a80 0%, #144375 50%, #143f6d 100%)',
    glow: 'rgba(41, 150, 250, 0.5)'
  },
  withdraw: {
    tint: 'linear-gradient(160deg, #bbb262 0%, #ada35d 55%, #a49d5d 100%)',
    glow: 'rgba(255, 231, 122, 0.55)'
  },
  reward: {
    tint: 'linear-gradient(160deg, #373743 0%, #302f3b 55%, #2b2a36 100%)',
    glow: 'rgba(150, 110, 210, 0.45)'
  }
} as const;
