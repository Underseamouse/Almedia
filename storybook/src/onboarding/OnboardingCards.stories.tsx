import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OnboardingCard, CARD_THEME } from './OnboardingCard';
import { MiniMatch3 } from './MiniMatch3';
import { CoinStack } from './CoinStack';
import { PaymentLogos } from './PaymentLogos';
import { RewardBadge } from './RewardBadge';

/**
 * Onboarding / Cards
 *
 * The four value-prop cards from the onboarding carousel (Figma 283-5134,
 * 283-5260, 291-7670, 291-8062). Each is the same OnboardingCard shell with a
 * different animated hero — ported with its logic, not as a flat picture.
 */
const meta: Meta = {
  title: 'Onboarding/Cards',
  parameters: { layout: 'centered' }
};
export default meta;

/* ---------- 1 · Play on your own pace ---------------------------- */

export const Play: StoryObj = {
  name: '1 · Play on your own pace',
  parameters: {
    docs: {
      description: {
        story:
          'The game promise, made literal — a Match-3 board that plays itself. The hero (MiniMatch3) runs a scripted swap → match → clear → refill loop in each tile’s payout colour, so in a glance the card says “this is a real game you’d play anyway”. Scripted, not solved: nobody watches an onboarding card long enough to audit real match logic, so the budget goes to the feel. Holds still under reduced-motion.'
      }
    }
  },
  render: () => (
    <OnboardingCard {...CARD_THEME.play} bottom="Play on your own pace">
      <MiniMatch3 />
    </OnboardingCard>
  )
};

/* ---------- 2 · Watch your balance grow -------------------------- */

export const Balance: StoryObj = {
  name: '2 · Watch your balance grow',
  parameters: {
    docs: {
      description: {
        story:
          'The blue card is an empty placeholder in Figma — the coins were always meant to be added in code. This rebuilds the icons8 coin Lottie parametrically: same drop-with-squash, settle and idle bob, but the coin count is a prop, because the balance is custom. Use the control to change how tall the pile grows and replay the drop.'
      }
    }
  },
  render: (args: { count: number }) => {
    const [k, setK] = useState(0);
    return (
      <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'center' }}>
        <OnboardingCard {...CARD_THEME.balance} bottom="Watch your balance grow">
          <CoinStack count={args.count} replayKey={k} />
        </OnboardingCard>
        <button onClick={() => setK((n) => n + 1)} style={btn}>Replay drop</button>
      </div>
    );
  },
  args: { count: 7 },
  argTypes: { count: { control: { type: 'range', min: 1, max: 12, step: 1 } } }
};

/* ---------- 3 · Fast withdraw ------------------------------------ */

export const Withdraw: StoryObj = {
  name: '3 · Fast withdraw to',
  parameters: {
    docs: {
      description: {
        story:
          'The trust-in-payout card. The three logos are the exact Figma exports (VISA / Amazon / PayPal), committed into the repo — brand marks have to be pixel-right and the Figma URLs expire in a week. Each keeps the comp’s slight rotation so the row fans rather than lines up, with a soft idle sway. Two labels frame it: the promise on top, the fallback (“or through Bank transfer”) below.'
      }
    }
  },
  render: () => (
    <OnboardingCard {...CARD_THEME.withdraw} top="Fast withdraw to:" bottom="or through Bank transfer">
      <PaymentLogos />
    </OnboardingCard>
  )
};

/* ---------- 4 · Starter reward ----------------------------------- */

export const Reward: StoryObj = {
  name: '4 · Starter reward',
  parameters: {
    docs: {
      description: {
        story:
          'The payoff card, closing the carousel. The €10 rosette is the committed Figma export; the amount is baked into the artwork because in onboarding it is a fixed, verified number, not a variable. The only motion is a slow float and a light sweep across the medallion — the grammar of a prize being handed over.'
      }
    }
  },
  render: () => (
    <OnboardingCard {...CARD_THEME.reward} bottom="Here is your starter reward.">
      <RewardBadge />
    </OnboardingCard>
  )
};

/* ---------- All four --------------------------------------------- */

export const AllFour: StoryObj = {
  name: 'All four',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { story: 'The set side by side — one shell, four heroes, four measured tints. Read left to right it is the pitch: play · earn · cash out · get rewarded.' } }
  },
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-6)', padding: 'var(--space-8)', background: '#0d0e18', flexWrap: 'wrap', justifyContent: 'center' }}>
      <OnboardingCard {...CARD_THEME.play} bottom="Play on your own pace"><MiniMatch3 /></OnboardingCard>
      <OnboardingCard {...CARD_THEME.balance} bottom="Watch your balance grow"><CoinStack count={7} /></OnboardingCard>
      <OnboardingCard {...CARD_THEME.withdraw} top="Fast withdraw to:" bottom="or through Bank transfer"><PaymentLogos /></OnboardingCard>
      <OnboardingCard {...CARD_THEME.reward} bottom="Here is your starter reward."><RewardBadge /></OnboardingCard>
    </div>
  )
};

/* ---------- Carousel --------------------------------------------- */

export const Carousel: StoryObj = {
  parameters: {
    docs: { description: { story: 'The cards as the user meets them — one at a time, with dots and next/back. This is the composition the four cards are built for: a paced walk through the value props before the first action.' } }
  },
  render: () => {
    const slides = [
      <OnboardingCard key="p" {...CARD_THEME.play} bottom="Play on your own pace"><MiniMatch3 /></OnboardingCard>,
      <OnboardingCard key="b" {...CARD_THEME.balance} bottom="Watch your balance grow"><CoinStack count={7} /></OnboardingCard>,
      <OnboardingCard key="w" {...CARD_THEME.withdraw} top="Fast withdraw to:" bottom="or through Bank transfer"><PaymentLogos /></OnboardingCard>,
      <OnboardingCard key="r" {...CARD_THEME.reward} bottom="Here is your starter reward."><RewardBadge /></OnboardingCard>
    ];
    const [i, setI] = useState(0);
    return (
      <div style={{ display: 'grid', gap: 'var(--space-5)', justifyItems: 'center' }}>
        <div style={{ width: 270, height: 290, overflow: 'hidden', borderRadius: 'var(--rounded-06)' }}>
          <div style={{ display: 'flex', width: 270 * slides.length, transform: `translateX(-${i * 270}px)`, transition: 'transform var(--dur-slow) var(--ease-out)' }}>
            {slides.map((s, k) => (
              <div key={k} style={{ width: 270 }}>{s}</div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {slides.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Card ${k + 1}`}
              style={{
                width: k === i ? 22 : 8,
                height: 8,
                borderRadius: 'var(--rounded-full)',
                border: 'none',
                cursor: 'pointer',
                background: k === i ? 'var(--action-primary)' : 'var(--gb-300)',
                transition: 'width var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)'
              }}
            />
          ))}
        </div>
        <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
          <button onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0} style={btn}>Back</button>
          <button onClick={() => setI((v) => Math.min(slides.length - 1, v + 1))} disabled={i === slides.length - 1} style={{ ...btn, background: 'var(--action-primary)', color: 'var(--text-on-primary)', borderColor: 'transparent' }}>Next</button>
        </div>
      </div>
    );
  }
};

const btn: React.CSSProperties = {
  padding: '8px 18px',
  borderRadius: 'var(--rounded-02)',
  border: '1px solid var(--border-default)',
  background: 'var(--surface-container)',
  color: 'var(--text-primary)',
  font: '600 13px/20px var(--font)',
  cursor: 'pointer'
};
