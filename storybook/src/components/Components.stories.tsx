import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { AwardStat, TrustpilotStars } from './AwardStat';
import { EarningsMeter } from './EarningsMeter';
import { SelectorCard } from './SelectorCard';
import { CoinVoice } from './CoinVoice';
import { OfferCard } from './OfferCard';
import { GlassCard } from './GlassCard';
import { Logo } from './Logo';
import { WalletPill } from './WalletPill';
import { GameBoard } from './GameBoard';
import { Ambient } from '../effects/Ambient';
import { artSolitaire, artMonopoly, artSurvey } from '../sampleArt';

const meta: Meta = { title: 'Components' };
export default meta;

const Stack: React.FC<{ w?: number; children: React.ReactNode }> = ({ w = 354, children }) => (
  <div style={{ width: w, display: 'grid', gap: 'var(--space-3)' }}>{children}</div>
);

/* ------------------------------------------------------------------ */

export const Buttons: StoryObj = {
  parameters: {
    docs: {
      description: {
        story:
          'One action per screen. Geometry is measured off freecash.com (38/44 tall, radius 8, px-5). Press scales down instead of shifting colour — invisible under a thumb on dark — and focus is a 2px green ring, the one state that must survive keyboard use. Hover is intentionally absent: mobile-first, so Focus was prioritised over a pointer-only state.'
      }
    }
  },
  render: () => (
    <Stack>
      <Button variant="primary">Let's go</Button>
      <Button variant="secondary">Maybe later</Button>
      <Button variant="outline">See all offers</Button>
      <Button variant="ghost">Skip</Button>
      <Button variant="primary" loading>Loading</Button>
      <Button variant="primary" disabled>Disabled</Button>
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <Button size="small" variant="secondary" block={false}>Sign in</Button>
        <Button size="small" variant="primary" block={false}>Sign up</Button>
      </div>
    </Stack>
  )
};

/* ------------------------------------------------------------------ */

export const Award: StoryObj = {
  name: 'Award stat',
  parameters: {
    docs: {
      description: {
        story:
          'The wreath borrows the grammar of an award, so the number reads as conferred by other people rather than claimed by the app. Verified public figures only.'
      }
    }
  },
  render: () => (
    <Ambient style={{ width: 402, padding: 'var(--space-8) 0', borderRadius: 'var(--rounded-06)' }} animated={false}>
      <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
        <AwardStat
          value="Rated 4.7/5"
          crest={null}
          label={<TrustpilotStars />}
          source={
            <span style={{ font: '500 12px/18px var(--font)', color: 'var(--text-primary)' }}>
              Based on 242,605 reviews
            </span>
          }
        />
        <AwardStat
          value="10,000,000 +"
          label={<>Downloads<br />on Google Play</>}
        />
      </div>
    </Ambient>
  )
};

/* ------------------------------------------------------------------ */

export const Meter: StoryObj = {
  name: 'Earnings meter',
  parameters: {
    docs: {
      description: {
        story:
          'Eight steps of 5.00 zł reach exactly the guaranteed 40.00. Press Next to watch the digits flip and the bar fill — the amount is fixed in advance, the meter only reveals it in instalments.'
      }
    }
  },
  render: () => {
    const [step, setStep] = useState(1);
    const value = Math.min(step * 5, 40);
    const done = value >= 40;
    return (
      <Stack>
        <EarningsMeter value={value} complete={done} />
        <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
          <Button variant="secondary" onClick={() => setStep(1)}>Reset</Button>
          <Button variant="primary" onClick={() => setStep((s) => Math.min(s + 1, 8))} disabled={done}>
            {done ? 'Unlocked' : `Next [+5.00 zł]`}
          </Button>
        </div>
        <p style={{ font: '400 12px/18px var(--font)', color: 'var(--text-secondary)', textAlign: 'center' }}>
          step {Math.min(step, 8)} of 8
        </p>
      </Stack>
    );
  }
};

/* ------------------------------------------------------------------ */

export const Selectors: StoryObj = {
  parameters: {
    docs: {
      description: {
        story:
          'The quiz’s answer control, in two shapes: a full-width card for lists and a pill for yes/no. Selection is carried by a green border, not a fill — the chosen answer reads as marked, not as a new button competing with the CTA. Long labels wrap and grow the height rather than truncating, so a real answer is never clipped.'
      }
    }
  },
  render: () => {
    const [picked, setPicked] = useState('A few times a week');
    const [yn, setYn] = useState<string | null>(null);
    const options = ['Daily', 'A few times a week', 'Once a week', 'Less than once a week'];
    return (
      <Stack>
        {options.map((o) => (
          <SelectorCard key={o} label={o} selected={picked === o} onSelect={() => setPicked(o)} />
        ))}
        <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
          {['Yes', 'No'].map((o) => (
            <SelectorCard key={o} shape="pill" label={o} selected={yn === o} onSelect={() => setYn(o)} />
          ))}
        </div>
        <SelectorCard label="Disabled option" disabled />
      </Stack>
    );
  }
};

/* ------------------------------------------------------------------ */

export const Voice: StoryObj = {
  name: 'Coin voice',
  parameters: {
    docs: {
      description: {
        story:
          'The guide that walks the user through the quiz — the coin, speaking. It types its line on entry so the screen feels answered-to rather than pre-written, and shifts to a celebrating mood at the reward. It talks; it never asks for anything, so it can’t be mistaken for a form field.'
      }
    }
  },
  render: () => (
    <Stack>
      <CoinVoice typing>Hey! I'm here to help you turn spare time into real cash.</CoinVoice>
      <CoinVoice>Got it, Alex. How old are you?</CoinVoice>
      <CoinVoice mood="celebrating">You did it, Alex! Your starter reward is ready.</CoinVoice>
    </Stack>
  )
};

/* ------------------------------------------------------------------ */

export const Offers: StoryObj = {
  parameters: {
    docs: {
      description: {
        story:
          'The reward, told honestly. A guaranteed payout is written flat (“40.00 zł”); an estimate always carries “up to”. Showing a ceiling as if it were the payout is the exact defect this redesign answers — so the distinction is baked into the component, not left to whoever fills it in. Artwork loads through the pixel-reveal so the wait reads as focusing.'
      }
    }
  },
  render: () => (
    <Stack>
      <OfferCard title="Disney Solitaire" meta="~5 min · install & play" amount="40.00 zł" kind="guaranteed" artwork={artSolitaire} live />
      <OfferCard title="Monopoly GO!" meta="~45 min · roll & earn" amount="7,468 zł" kind="estimated" artwork={artMonopoly} />
      <OfferCard title="Survey — 12 questions" meta="~8 min · answer honestly" amount="18 zł" kind="estimated" artwork={artSurvey} />
    </Stack>
  )
};

/* ------------------------------------------------------------------ */

export const Glass: StoryObj = {
  name: 'Glass card',
  parameters: {
    docs: {
      description: {
        story:
          'A frosted panel for the trust stats. It only earns its keep over ambient colour — the gradient edge catches light on the top corner, which is the detail that sells the material. Over flat black it degrades to a lighter rectangle for a repaint, so it is always paired with Ambient.'
      }
    }
  },
  render: () => (
    <Ambient style={{ width: 402, padding: 'var(--space-8)', borderRadius: 'var(--rounded-06)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
        <GlassCard style={{ flex: 1, textAlign: 'center' }}>
          <div className="fc-h-sm">4.7/5</div>
          <div className="fc-t-sm" style={{ color: 'var(--text-secondary)' }}>Trustpilot</div>
        </GlassCard>
        <GlassCard style={{ flex: 1, textAlign: 'center' }}>
          <div className="fc-h-sm">10M+</div>
          <div className="fc-t-sm" style={{ color: 'var(--text-secondary)' }}>Downloads</div>
        </GlassCard>
      </div>
    </Ambient>
  )
};

/* ------------------------------------------------------------------ */

export const Brand: StoryObj = {
  name: 'Logo',
  parameters: {
    docs: {
      description: {
        story:
          'The real lockup, exported from the comp — not an approximation. “FREE” takes the brand green and “CASH” the text ink, as two separate inks, so the mark can be re-coloured for a light surface without redrawing it. Mark-only for the splash and avatars; full lockup in headers.'
      }
    }
  },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)', justifyItems: 'start' }}>
      <Logo size={40} />
      <Logo size={28} />
      <Logo variant="mark" size={40} />
      <div style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center', background: '#fff', padding: 'var(--space-4)', borderRadius: 'var(--rounded-03)' }}>
        <Logo size={28} ink="var(--gb-900)" />
      </div>
      <p style={{ font: '400 12px/18px var(--font)', color: 'var(--text-secondary)', maxWidth: 340 }}>
        The real lockup, exported from the comp. "CASH" takes the text ink, so the
        mark can be re-inked for a light surface without redrawing it.
      </p>
    </div>
  )
};

/* ------------------------------------------------------------------ */

export const Wallet: StoryObj = {
  name: 'Wallet pill',
  parameters: {
    docs: {
      description: {
        story:
          'The running balance from comp 214-9615. The rim is Warning 600 — a darker gold than the Gold token — because a rim must read as an edge, and bright gold on near-black blooms into a glow instead of holding a line. That bright gold is spent instead on the soft halo behind the pill. The bottom border is heavier (3px) so the pill sits on the surface, the same physical-edge trick the primary button uses.'
      }
    }
  },
  render: () => (
    <Ambient style={{ width: 402, padding: 'var(--space-12) 0', borderRadius: 'var(--rounded-06)' }} animated={false}>
      <div style={{ display: 'grid', placeItems: 'center', gap: 'var(--space-8)' }}>
        <WalletPill balance="€0" />
        <WalletPill balance="€12.40" />
        <WalletPill balance="€128.75" glow={false} animated={false} />
      </div>
    </Ambient>
  )
};

/* ------------------------------------------------------------------ */

export const Board: StoryObj = {
  name: 'Game board',
  parameters: {
    docs: {
      description: {
        story:
          'The Match-3 board that anchors the game screen (comp 221-9710). It carries the product’s whole promise in one glance — this is a real game, not a wall of survey rows. Tiles are a flat 10%-white cell with a single 3D emoji so the glyph does the talking and the grid never competes with the CTA. Toggle the highlighted set to stage the winning move.'
      }
    }
  },
  render: () => (
    <Ambient style={{ width: 402, padding: 'var(--space-8) 0', borderRadius: 'var(--rounded-06)' }} animated={false}>
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <GameBoard highlight={['1,0', '1,1', '2,2']} animated={false} />
      </div>
    </Ambient>
  )
};
