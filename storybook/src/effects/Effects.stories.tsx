import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BreathingOrb } from './BreathingOrb';
import { MonoOutline } from './MonoOutline';
import { PixelReveal } from './PixelReveal';
import { Ambient } from './Ambient';
import { Logo } from '../components/Logo';
import { artSolitaire, artMonopoly, artSurvey } from '../sampleArt';

const meta: Meta = { title: 'Effects' };
export default meta;

/* ------------------------------------------------------------------ */

export const Orb: StoryObj = {
  name: 'Breathing orb',
  parameters: {
    docs: {
      description: {
        story:
          'The splash mark. A ring of dots that breathes in place — it never spins, because spinning reads as "working" and this screen is only ever on for a second.'
      }
    }
  },
  render: (args: any) => (
    <div style={{ display: 'flex', gap: 'var(--space-12)', alignItems: 'center' }}>
      <div style={{ position: 'relative', display: 'grid', placeItems: 'center' }}>
        <BreathingOrb {...args} />
        <span style={{ position: 'absolute' }}>
          <Logo variant="mark" size={args.size * 0.34} />
        </span>
      </div>
      <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
        <BreathingOrb size={48} count={22} />
        <BreathingOrb size={32} count={16} color="var(--gold)" />
      </div>
    </div>
  ),
  args: { size: 140, count: 34, speed: 1, depth: 0.12 },
  argTypes: {
    size: { control: { type: 'range', min: 32, max: 260, step: 4 } },
    count: { control: { type: 'range', min: 8, max: 80, step: 1 } },
    speed: { control: { type: 'range', min: 0.2, max: 3, step: 0.1 } },
    depth: { control: { type: 'range', min: 0, max: 0.4, step: 0.01 } }
  }
};

/* ------------------------------------------------------------------ */

const Panel: React.FC<{ label: string; children?: React.ReactNode }> = ({ label, children }) => (
  <div
    style={{
      width: 210,
      height: 116,
      borderRadius: 'var(--rounded-04)',
      background: 'var(--surface-container)',
      display: 'grid',
      placeItems: 'center',
      font: '500 13px/20px var(--font)',
      color: 'var(--text-secondary)'
    }}
  >
    {children ?? label}
  </div>
);

export const Outline: StoryObj = {
  name: 'Mono outline',
  parameters: {
    docs: {
      description: {
        story:
          'A hairline stroke that marks the one live thing on screen. Mono stays achromatic on purpose — it frames content without competing with the brand green, so it can sit on a card that already has a green badge.'
      }
    }
  },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--space-6)' }}>
      {(['travel', 'pulse', 'bloom'] as const).map((variant) => (
        <div key={variant} style={{ display: 'flex', gap: 'var(--space-6)', alignItems: 'center' }}>
          <code style={{ width: 72, font: '400 12px/18px ui-monospace, monospace', color: 'var(--text-secondary)' }}>
            {variant}
          </code>
          {(['mono', 'brand', 'gold'] as const).map((tone) => (
            <MonoOutline key={tone} variant={variant} tone={tone} radius="var(--rounded-04)">
              <Panel label={tone} />
            </MonoOutline>
          ))}
        </div>
      ))}
    </div>
  )
};

/* ------------------------------------------------------------------ */

export const Reveal: StoryObj = {
  name: 'Pixel reveal (image loader)',
  parameters: {
    docs: {
      description: {
        story:
          "Artwork arrives as a grid of colours sampled from itself, flickers, then dissolves along a diagonal. Because the placeholder is the image's own palette, the wait reads as focusing rather than swapping."
      }
    }
  },
  render: (args: any) => {
    const [k, setK] = useState(0);
    return (
      <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'start' }}>
        <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
          {[artSolitaire, artMonopoly, artSurvey].map((src, i) => (
            <PixelReveal key={i} src={src} replayKey={k} {...args} />
          ))}
        </div>
        <button
          onClick={() => setK((n) => n + 1)}
          style={{
            padding: '8px 16px',
            borderRadius: 'var(--rounded-02)',
            border: '1px solid var(--border-default)',
            background: 'var(--surface-container)',
            color: 'var(--text-primary)',
            font: '500 13px/20px var(--font)',
            cursor: 'pointer'
          }}
        >
          Replay
        </button>
      </div>
    );
  },
  args: { width: 168, height: 168, cell: 12, duration: 1.6 },
  argTypes: {
    cell: { control: { type: 'range', min: 4, max: 32, step: 1 } },
    duration: { control: { type: 'range', min: 0.4, max: 4, step: 0.1 } }
  }
};

/* ------------------------------------------------------------------ */

export const Background: StoryObj = {
  name: 'Ambient ground',
  parameters: { layout: 'centered' },
  render: (args: any) => (
    <Ambient {...args} style={{ width: 402, height: 500, borderRadius: 'var(--rounded-06)' }}>
      <div style={{ display: 'grid', placeItems: 'center', height: '100%', gap: 'var(--space-3)' }}>
        <Logo />
        <p style={{ font: '400 14px/21px var(--font)', color: 'var(--text-secondary)' }}>
          drifting light + grain
        </p>
      </div>
    </Ambient>
  ),
  args: { grain: 0.055, animated: true },
  argTypes: { grain: { control: { type: 'range', min: 0, max: 0.2, step: 0.005 } } }
};
