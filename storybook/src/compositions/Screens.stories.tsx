import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TrustScreen, Stage } from './TrustScreen';

const meta: Meta<typeof TrustScreen> = {
  title: 'Screens/Trust cold-open',
  component: TrustScreen,
  parameters: { layout: 'centered' }
};
export default meta;

export const Autoplay: StoryObj<typeof TrustScreen> = {
  name: 'Staged reveal (autoplay)',
  parameters: {
    docs: {
      description: {
        story:
          'The whole first screen as three beats on one surface: the mark while the app wakes, then what this is, then the evidence and the action. Reload the story to replay.'
      }
    }
  },
  render: () => <TrustScreen autoPlay />
};

export const Manual: StoryObj = {
  name: 'Step through the beats',
  render: () => {
    const [stage, setStage] = useState<Stage>(0);
    return (
      <div style={{ display: 'grid', gap: 'var(--space-4)', justifyItems: 'center' }}>
        <TrustScreen stage={stage} autoPlay={false} />
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          {([0, 1, 2] as Stage[]).map((s) => (
            <button
              key={s}
              onClick={() => setStage(s)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--rounded-02)',
                cursor: 'pointer',
                font: '600 13px/20px var(--font)',
                border: '1px solid var(--border-default)',
                background: stage === s ? 'var(--action-primary)' : 'var(--surface-container)',
                color: stage === s ? 'var(--text-on-primary)' : 'var(--text-primary)'
              }}
            >
              Beat {s + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
};

export const SideBySide: StoryObj = {
  name: 'All three beats',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: 'var(--space-8)',
        padding: 'var(--space-8)',
        background: '#0d0e18',
        overflowX: 'auto'
      }}
    >
      {([0, 1, 2] as Stage[]).map((s) => (
        <TrustScreen key={s} stage={s} autoPlay={false} />
      ))}
    </div>
  )
};
