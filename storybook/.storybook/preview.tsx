import React from 'react';
import type { Preview } from '@storybook/react';
import '../src/tokens/tokens.css';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: '#141523' },
        { name: 'container', value: '#252539' },
        { name: 'light', value: '#ffffff' }
      ]
    },
    controls: { matchers: { color: /(background|color)$/i } },
    options: {
      storySort: {
        order: [
          'Foundations',
          ['Overview', 'Color', 'Typography', 'Space & Radius', 'Motion'],
          'Effects',
          'Components',
          'Onboarding',
          ['Cards'],
          'Screens',
          ['Game screen', 'Trust cold-open']
        ]
      }
    }
  },
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: 'var(--font)',
          letterSpacing: 'var(--tracking)',
          color: 'var(--text-primary)',
          padding: 'var(--space-6)',
          minWidth: 320
        }}
      >
        <Story />
      </div>
    )
  ]
};

export default preview;
