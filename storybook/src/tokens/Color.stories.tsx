import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  Page, Header, Section, Mono,
  readVar, hexOf, contrast, rating, readableInk, useResolved
} from './_docs';

/**
 * Foundations / Color
 *
 * Three views of one palette, in the order you actually reach for them:
 *   Palette   — the raw scales, the material.
 *   Semantic  — the ~25 aliases screens are allowed to touch.
 *   Contrast  — proof the text/surface pairings are legible, computed not guessed.
 *
 * Every hex on these pages is read live from tokens.css. Nothing is restated
 * by hand, so the reference can never drift from the tokens.
 */
const meta: Meta = {
  title: 'Foundations/Color',
  parameters: { layout: 'fullscreen' }
};
export default meta;

/* ---------- Palette ---------------------------------------------- */

const FAMILIES: { name: string; role: string; tokens: string[] }[] = [
  {
    name: 'Main',
    role: 'Brand green. The single action, links, selected and success states.',
    tokens: ['--main-25', '--main-50', '--main-100', '--main-200', '--main-300', '--main-400', '--main-500', '--main-600', '--main-700', '--main-800', '--main-900']
  },
  {
    name: 'Gray Blue',
    role: 'The neutral spine — every surface, most text and every border in the dark theme.',
    tokens: ['--gb-25', '--gb-50', '--gb-100', '--gb-200', '--gb-300', '--gb-400', '--gb-500', '--gb-600', '--gb-700', '--gb-800', '--gb-900', '--gb-transparent']
  },
  { name: 'Error', role: 'Destructive and invalid.', tokens: ['--error-25', '--error-300', '--error-500'] },
  { name: 'Warning', role: 'Caution, and the wallet’s gold rim.', tokens: ['--warning-25', '--warning-500', '--warning-600'] },
  { name: 'Info', role: 'Neutral information, links on light.', tokens: ['--info-25', '--info-400', '--info-500'] },
  { name: 'Special', role: 'Reward accents — gold and the laurel yellow.', tokens: ['--gold', '--gold-light', '--laurel'] },
  { name: 'Base', role: 'Absolutes and the 10% white hairline.', tokens: ['--white', '--white-10', '--black'] }
];

const stepOf = (token: string) => token.replace(/^--(main|gb|error|warning|info)-?/, '').replace(/^--/, '') || token;

const Chip: React.FC<{ token: string }> = ({ token }) => {
  const value = readVar(token);
  const hex = hexOf(value);
  const ink = readableInk(value);
  return (
    <div style={{ width: 82 }}>
      <div
        style={{
          height: 60,
          borderRadius: 'var(--rounded-02)',
          background: `var(${token})`,
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'flex-end',
          padding: 6
        }}
      >
        <span style={{ font: `600 13px/1 var(--font)`, color: ink, opacity: 0.9 }}>Aa</span>
      </div>
      <div style={{ marginTop: 6 }}>
        <div style={{ font: '600 11px/16px var(--font)', color: 'var(--text-primary)' }}>{stepOf(token)}</div>
        <code
          style={{
            font: '400 10px/14px ui-monospace, SFMono-Regular, Menlo, monospace',
            color: 'var(--text-secondary)',
            wordBreak: 'break-all'
          }}
        >
          {hex}
        </code>
      </div>
    </div>
  );
};

export const Palette: StoryObj = {
  parameters: {
    docs: { description: { story: 'The raw scales — 131 primitives live in Figma; these are the families the onboarding flow actually wires up. Primitives are hidden from pickers in Figma on purpose: screens compose from the semantic aliases below, never from a step number.' } }
  },
  render: () => {
    const ready = useResolved();
    if (!ready) return <Page><Header eyebrow="Foundations" title="Color" /></Page>;
    return (
      <Page>
        <Header
          eyebrow="Foundations · Palette"
          title="Color"
          lead="Named scales lifted 1:1 from the Figma Colors collection. The step is the label — 500 is each family’s anchor, lower steps lighten, higher steps deepen."
        />
        {FAMILIES.map((f) => (
          <Section key={f.name} title={f.name} note={f.role}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
              {f.tokens.map((t) => (
                <Chip key={t} token={t} />
              ))}
            </div>
          </Section>
        ))}
      </Page>
    );
  }
};

/* ---------- Semantic --------------------------------------------- */

type Sem = { token: string; alias: string; role: string };
const GROUPS: { title: string; note: string; rows: Sem[] }[] = [
  {
    title: 'Surface',
    note: 'The stacking order of the dark theme, darkest at the back.',
    rows: [
      { token: '--surface-background', alias: 'gb-900', role: 'App ground, behind everything' },
      { token: '--surface-container', alias: 'gb-500', role: 'Cards, sheets, raised blocks' },
      { token: '--surface-input', alias: 'gb-400', role: 'Input fields (measured #2F3043, not container)' },
      { token: '--surface-elevated-border', alias: 'gb-200', role: 'Edge of an elevated surface' }
    ]
  },
  {
    title: 'Action',
    note: 'Interactive fills. One primary per screen.',
    rows: [
      { token: '--action-primary', alias: 'main-500', role: 'The CTA' },
      { token: '--action-primary-pressed', alias: 'main-600', role: 'CTA under a thumb' },
      { token: '--action-secondary', alias: 'gb-200', role: 'Secondary button fill' },
      { token: '--action-disabled', alias: 'gb-300', role: 'Inert control' }
    ]
  },
  {
    title: 'Text',
    note: 'Ink, in falling emphasis.',
    rows: [
      { token: '--text-primary', alias: 'white', role: 'Headlines, values, primary body' },
      { token: '--text-secondary', alias: 'gb-50', role: 'Supporting copy, captions' },
      { token: '--text-on-primary', alias: 'gb-900', role: 'Label on a green fill (near-black, not pure)' },
      { token: '--text-disabled', alias: 'gb-100', role: 'Text in a disabled control' },
      { token: '--text-error', alias: 'error-300', role: 'Field error copy' },
      { token: '--text-warning', alias: 'warning-500', role: 'Caution copy' }
    ]
  },
  {
    title: 'Border',
    note: 'Strokes and rings.',
    rows: [
      { token: '--border-default', alias: 'gb-300', role: 'Resting control border' },
      { token: '--border-selected', alias: 'main-500', role: 'Chosen card / focus ring' },
      { token: '--border-subtle', alias: 'white-10', role: 'Hairline dividers on dark' }
    ]
  },
  {
    title: 'Status',
    note: 'Feedback dots and badges.',
    rows: [
      { token: '--status-warning', alias: 'warning-500', role: 'Streak / caution' },
      { token: '--status-error', alias: 'error-500', role: 'Failure' },
      { token: '--status-info', alias: 'info-400', role: 'Neutral note' }
    ]
  }
];

const SemRow: React.FC<{ row: Sem }> = ({ row }) => {
  const value = readVar(row.token);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '40px 1.4fr 1fr 1.6fr',
        gap: 'var(--space-4)',
        alignItems: 'center',
        padding: '10px var(--space-3)',
        borderRadius: 'var(--rounded-02)'
      }}
    >
      <div style={{ height: 28, borderRadius: 6, background: `var(${row.token})`, border: '1px solid var(--border-subtle)' }} />
      <Mono>{row.token}</Mono>
      <span style={{ font: '400 12px/18px var(--font)', color: 'var(--text-secondary)' }}>
        → {row.alias} · {hexOf(value)}
      </span>
      <span style={{ font: '400 13px/19px var(--font)', color: 'var(--text-primary)' }}>{row.role}</span>
    </div>
  );
};

export const Semantic: StoryObj = {
  name: 'Semantic tokens',
  parameters: {
    docs: { description: { story: 'The only colour names a screen is allowed to reference. Each is an alias onto a primitive, so re-theming — or fixing a single decision like "inputs are one step lighter than cards" — happens in one place instead of across every component.' } }
  },
  render: () => {
    const ready = useResolved();
    if (!ready) return <Page><Header eyebrow="Foundations" title="Color" /></Page>;
    return (
      <Page>
        <Header
          eyebrow="Foundations · Semantic"
          title="Semantic tokens"
          lead={<>Screens compose from these ~22 aliases only. The raw scales sit behind them — a palette change lands once, here.</>}
        />
        {GROUPS.map((g) => (
          <Section key={g.title} title={g.title} note={g.note}>
            <div style={{ display: 'grid', gap: 2 }}>
              {g.rows.map((r) => (
                <SemRow key={r.token} row={r} />
              ))}
            </div>
          </Section>
        ))}
      </Page>
    );
  }
};

/* ---------- Contrast --------------------------------------------- */

const PAIRS: { fg: string; bg: string; label: string }[] = [
  { fg: '--text-primary', bg: '--surface-background', label: 'Primary on app ground' },
  { fg: '--text-secondary', bg: '--surface-background', label: 'Secondary on app ground' },
  { fg: '--text-primary', bg: '--surface-container', label: 'Primary on card' },
  { fg: '--text-secondary', bg: '--surface-container', label: 'Secondary on card' },
  { fg: '--text-primary', bg: '--surface-input', label: 'Primary on input' },
  { fg: '--text-on-primary', bg: '--action-primary', label: 'Label on the CTA' },
  { fg: '--text-primary', bg: '--action-secondary', label: 'Label on secondary button' },
  { fg: '--text-disabled', bg: '--action-disabled', label: 'Disabled label on disabled fill' }
];

const ContrastCard: React.FC<{ pair: (typeof PAIRS)[number] }> = ({ pair }) => {
  const ratio = contrast(readVar(pair.fg), readVar(pair.bg));
  const r = rating(ratio);
  return (
    <div style={{ borderRadius: 'var(--rounded-03)', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}>
      <div style={{ background: `var(${pair.bg})`, padding: 'var(--space-4)' }}>
        <div style={{ font: '600 22px/28px var(--font)', letterSpacing: 'var(--tracking)', color: `var(${pair.fg})` }}>
          The quick brown fox
        </div>
        <div style={{ font: '400 13px/19px var(--font)', color: `var(${pair.fg})`, opacity: 0.85, marginTop: 2 }}>
          jumps over the lazy dog
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px var(--space-4)',
          background: 'var(--surface-container)'
        }}
      >
        <span style={{ font: '400 12px/18px var(--font)', color: 'var(--text-secondary)' }}>{pair.label}</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Mono>{ratio}:1</Mono>
          <span
            style={{
              font: '600 11px/16px var(--font)',
              padding: '2px 8px',
              borderRadius: 'var(--rounded-full)',
              color: r.ok ? 'var(--text-on-primary)' : 'var(--white)',
              background: r.ok ? 'var(--action-primary)' : 'var(--status-error)'
            }}
          >
            {r.label}
          </span>
        </span>
      </div>
    </div>
  );
};

export const Contrast: StoryObj = {
  name: 'On-surface contrast',
  parameters: {
    docs: { description: { story: 'The pairings the flow leans on, with their WCAG ratio computed from the live tokens. AA is 4.5:1 for body, 3:1 for large text. This is where a token decision earns its keep — secondary text on the app ground is the pairing worth watching.' } }
  },
  render: () => {
    const ready = useResolved();
    if (!ready) return <Page><Header eyebrow="Foundations" title="Color" /></Page>;
    return (
      <Page>
        <Header
          eyebrow="Foundations · Contrast"
          title="On-surface contrast"
          lead="Every text/surface pairing the onboarding uses, rated against WCAG. Ratios are computed from tokens.css, so this stays true as the palette moves."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
          {PAIRS.map((p) => (
            <ContrastCard key={p.label} pair={p} />
          ))}
        </div>
      </Page>
    );
  }
};
