import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Page, Header, Section, Mono } from './_docs';

/**
 * Foundations / Typography
 *
 * Poppins, one ramp of 11 steps, one tracking value. The page is a specimen,
 * not a spec sheet: every line is set in the real class at its real size, so
 * you read the type, not a description of it. The spec strip sits underneath.
 */
const meta: Meta = {
  title: 'Foundations/Typography',
  parameters: { layout: 'fullscreen' }
};
export default meta;

const SAMPLE = 'Turn spare time into real cash';

type Step = { cls: string; name: string; weight: string; size: number; lh: number; use: string };

const RAMP: Step[] = [
  { cls: 'fc-h-2xl', name: 'Heading 2xl', weight: 'Bold 700', size: 56, lh: 84, use: 'Reserved — a single hero number' },
  { cls: 'fc-h-xl', name: 'Heading xl', weight: 'Bold 700', size: 48, lh: 72, use: 'Splash headline' },
  { cls: 'fc-h-lg', name: 'Heading lg', weight: 'Bold 700', size: 40, lh: 60, use: 'Big reward figure' },
  { cls: 'fc-h-md', name: 'Heading md', weight: 'Bold 700', size: 32, lh: 48, use: 'Screen title' },
  { cls: 'fc-h-sm', name: 'Heading sm', weight: 'SemiBold 600', size: 24, lh: 36, use: 'Section title · meter value · the game headline' },
  { cls: 'fc-h-xs', name: 'Heading xs', weight: 'SemiBold 600', size: 20, lh: 30, use: 'Card title' },
  { cls: 'fc-t-xl', name: 'Text xl', weight: 'Regular 400', size: 18, lh: 27, use: 'Lead paragraph' },
  { cls: 'fc-t-lg', name: 'Text lg', weight: 'Regular 400', size: 16, lh: 24, use: 'Body — the default (447 nodes on freecash.com)' },
  { cls: 'fc-t-md', name: 'Text md', weight: 'Regular 400', size: 14, lh: 21, use: 'Secondary body, captions' },
  { cls: 'fc-t-sm', name: 'Text sm', weight: 'Regular 400', size: 12, lh: 18, use: 'Meta, field labels' },
  { cls: 'fc-t-xs', name: 'Text xs', weight: 'Regular 400', size: 10, lh: 15, use: 'Legal, timestamps' }
];

const Specimen: React.FC<{ step: Step }> = ({ step }) => (
  <div style={{ padding: 'var(--space-5) 0', borderBottom: '1px solid var(--border-subtle)' }}>
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        gap: 'var(--space-4)',
        marginBottom: 'var(--space-3)',
        flexWrap: 'wrap'
      }}
    >
      <span style={{ font: '600 12px/18px var(--font)', color: 'var(--text-primary)' }}>{step.name}</span>
      <span style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
        <Mono dim>.{step.cls}</Mono>
        <Mono dim>{step.weight}</Mono>
        <Mono dim>{step.size}/{step.lh}</Mono>
        <Mono dim>+2%</Mono>
      </span>
    </div>
    <div className={step.cls} style={{ color: 'var(--text-primary)' }}>{SAMPLE}</div>
    <div style={{ font: '400 12px/18px var(--font)', color: 'var(--text-secondary)', marginTop: 'var(--space-2)' }}>
      {step.use}
    </div>
  </div>
);

export const Scale: StoryObj = {
  name: 'Type scale',
  parameters: {
    docs: { description: { story: 'The full ramp, Heading 2xl down to Text xs. Line-height is a flat 1.5 across every step — that is the Freecash spec, and it runs loose on the display sizes; flagged for their team rather than silently corrected. Tracking is the brand’s 2%, on everything.' } }
  },
  render: () => (
    <Page>
      <Header
        eyebrow="Foundations · Typography"
        title="Type scale"
        lead={<>Poppins across 11 steps. Sizes and line-heights are the exact px values from Typographies.pdf, confirmed against freecash.com — 16px carries the body, 14px the support.</>}
      />
      <Section title="Headings" note="Bold at the top of the ramp, SemiBold at sm/xs where weight would otherwise shout.">
        {RAMP.filter((s) => s.cls.startsWith('fc-h')).map((s) => (
          <Specimen key={s.cls} step={s} />
        ))}
      </Section>
      <Section title="Text" note="All Regular. Emphasis inside body copy comes from a heavier weight on the run, not a different step.">
        {RAMP.filter((s) => s.cls.startsWith('fc-t')).map((s) => (
          <Specimen key={s.cls} step={s} />
        ))}
      </Section>
    </Page>
  )
};

/* ---------- Weights ---------------------------------------------- */

const WEIGHTS: { w: number; name: string; note: string }[] = [
  { w: 400, name: 'Regular', note: 'Body, secondary copy' },
  { w: 500, name: 'Medium', note: 'The game headline, quiet emphasis' },
  { w: 600, name: 'SemiBold', note: 'Buttons, headings sm/xs, values' },
  { w: 700, name: 'Bold', note: 'Display headings, hero numbers' }
];

export const Weights: StoryObj = {
  parameters: {
    docs: { description: { story: 'Figma ships each ramp step in four weights (44 styles total). These are the four; Poppins Light 300 is loaded but unused in the flow. A step and a weight are independent choices — pick the size for hierarchy, the weight for emphasis.' } }
  },
  render: () => (
    <Page>
      <Header eyebrow="Foundations · Typography" title="Weights" lead="One size, four weights — the axis of emphasis that sits across the ramp." />
      <div style={{ display: 'grid', gap: 2 }}>
        {WEIGHTS.map((wt) => (
          <div
            key={wt.w}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              alignItems: 'baseline',
              gap: 'var(--space-4)',
              padding: 'var(--space-4) 0',
              borderBottom: '1px solid var(--border-subtle)'
            }}
          >
            <span
              style={{
                font: `${wt.w} 28px/40px var(--font)`,
                letterSpacing: 'var(--tracking)',
                color: 'var(--text-primary)'
              }}
            >
              {wt.name} · {SAMPLE}
            </span>
            <span style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'baseline' }}>
              <span style={{ font: '400 12px/18px var(--font)', color: 'var(--text-secondary)' }}>{wt.note}</span>
              <Mono dim>{wt.w}</Mono>
            </span>
          </div>
        ))}
      </div>
    </Page>
  )
};
