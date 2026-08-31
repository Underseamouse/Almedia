import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { GameScreen } from './GameScreen';
import { GameBoard } from '../components/GameBoard';
import { WalletPill } from '../components/WalletPill';
import { Ambient } from '../effects/Ambient';

const meta: Meta<typeof GameScreen> = {
  title: 'Screens/Game screen',
  component: GameScreen,
  parameters: { layout: 'centered' }
};
export default meta;

export const Default: StoryObj<typeof GameScreen> = {
  name: 'Full screen',
  parameters: {
    docs: {
      description: {
        story:
          'Comp 181-8798, the visual target for the whole flow, assembled from library parts only — Ambient · Logo · WalletPill · GameBoard · Button on the token grid, no bespoke values. The board sits dead centre; the wordmark, the gold wallet and the one green CTA frame it without competing. That’s the job of a storybook screen: proof the components compose into the real thing.'
      }
    }
  },
  render: () => <GameScreen />
};

export const Anatomy: StoryObj = {
  name: 'Anatomy',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story:
          'The same screen pulled apart into the three framing pieces and their tokens. Reading top to bottom: trust (wordmark), stakes (wallet), play (board) — then the promise in words and the way forward.'
      }
    }
  },
  render: () => (
    <div style={{ display: 'flex', gap: 'var(--space-8)', padding: 'var(--space-8)', background: '#0d0e18', alignItems: 'center', flexWrap: 'wrap' }}>
      <GameScreen animated={false} />
      <div style={{ display: 'grid', gap: 'var(--space-8)' }}>
        <Ambient animated={false} style={{ padding: 'var(--space-8) var(--space-10)', borderRadius: 'var(--rounded-06)' }}>
          <div style={{ display: 'grid', placeItems: 'center' }}>
            <WalletPill balance="€0" animated={false} />
          </div>
        </Ambient>
        <Ambient animated={false} style={{ padding: 'var(--space-6)', borderRadius: 'var(--rounded-06)' }}>
          <GameBoard animated={false} highlight={['1,0', '1,1', '2,2']} />
        </Ambient>
      </div>
    </div>
  )
};
