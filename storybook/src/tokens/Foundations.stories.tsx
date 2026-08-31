import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Page, Header, Mono } from './_docs';

/**
 * Foundations / Overview
 *
 * The front door. Explains where the tokens come from, the one rule that keeps
 * the system honest, and how the rest of the Foundations pages are laid out.
 */
const meta: Meta = {
  title: 'Foundations/Overview',
  parameters: { layout: 'fullscreen' }
};
export default meta;

const Card: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div
    style={{
      background: 'var(--surface-container)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--rounded-04)',
      padding: 'var(--space-5)'
    }}
  >
    <h3 style={{ font: '600 15px/22px var(--font)', letterSpacing: 'var(--tracking)', margin: '0 0 var(--space-2)' }}>{title}</h3>
    <p style={{ font: '400 13px/20px var(--font)', color: 'var(--text-secondary)', margin: 0 }}>{children}</p>
  </div>
);

export const Overview: StoryObj = {
  render: () => (
    <Page>
      <Header
        eyebrow="Freecash · Onboarding"
        title="Foundations"
        lead={<>The design language for the Freecash onboarding redesign, as a running library. This section is the source of truth for colour, type, space and motion; everything downstream — effects, components, screens — is built from it.</>}
      />

      <div style={{ marginBottom: 'var(--space-12)' }}>
        <h2 style={{ font: '600 20px/28px var(--font)', letterSpacing: 'var(--tracking)', margin: '0 0 var(--space-4)' }}>
          Where the values come from
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap', marginBottom: 'var(--space-4)' }}>
          {['design-system/*.pdf', 'Figma variables', 'tokens.css', 'these pages'].map((s, i, a) => (
            <React.Fragment key={s}>
              <span
                style={{
                  font: '600 13px/19px var(--font)',
                  padding: '8px 14px',
                  borderRadius: 'var(--rounded-full)',
                  background: i === a.length - 1 ? 'var(--action-primary)' : 'var(--surface-container)',
                  color: i === a.length - 1 ? 'var(--text-on-primary)' : 'var(--text-primary)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                {s}
              </span>
              {i < a.length - 1 && <span style={{ color: 'var(--text-secondary)' }}>→</span>}
            </React.Fragment>
          ))}
        </div>
        <p style={{ font: '400 14px/22px var(--font)', color: 'var(--text-secondary)', maxWidth: 640, margin: 0 }}>
          Colour and type trace back to the Freecash PDFs; radius, spacing and size were measured off
          freecash.com (computed styles, not guesses) because the PDFs are silent on them; motion is new,
          added here. <Mono>tokens.css</Mono> mirrors the Figma variable collections 1:1, and every page in
          this section reads its values live from it — the docs can’t drift from the tokens.
        </p>
      </div>

      <div style={{ marginBottom: 'var(--space-12)' }}>
        <h2 style={{ font: '600 20px/28px var(--font)', letterSpacing: 'var(--tracking)', margin: '0 0 var(--space-3)' }}>
          The one rule
        </h2>
        <p style={{ font: '400 15px/24px var(--font)', color: 'var(--text-primary)', maxWidth: 640, margin: 0 }}>
          No value — colour, type, space — exists outside the tokens without a written “why”. Where a
          screen departs from the system, the deviation is documented, not silent. That is what keeps a
          minimal system from quietly accumulating one-off exceptions.
        </p>
      </div>

      <div>
        <h2 style={{ font: '600 20px/28px var(--font)', letterSpacing: 'var(--tracking)', margin: '0 0 var(--space-4)' }}>
          What’s in this section
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'var(--space-4)' }}>
          <Card title="Color">Raw scales, the ~22 semantic aliases screens may touch, and computed WCAG contrast for every text/surface pairing.</Card>
          <Card title="Typography">Poppins, 11 steps as a live specimen, plus the four-weight emphasis axis.</Card>
          <Card title="Space & Radius">The named radius scale, the 4px spacing grid, control heights and border widths — all measured on the live site.</Card>
          <Card title="Motion">Durations grouped by travel distance, four intent-carrying curves, and a playground to feel them.</Card>
        </div>
      </div>
    </Page>
  )
};
