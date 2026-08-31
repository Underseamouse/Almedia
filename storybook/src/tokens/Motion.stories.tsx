import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Page, Header, Section, Mono } from './_docs';

/**
 * Foundations / Motion
 *
 * The one part of the system with no Figma source — Figma has no motion
 * primitives, so these tokens are new here. The organising idea: durations are
 * grouped by how far a thing travels, not by which component owns it, so
 * unrelated elements animating at once stay in step.
 */
const meta: Meta = {
  title: 'Foundations/Motion',
  parameters: { layout: 'fullscreen' }
};
export default meta;

const DURATIONS: { token: string; ms: number; use: string }[] = [
  { token: '--dur-instant', ms: 90, use: 'Colour / opacity swap on press' },
  { token: '--dur-fast', ms: 160, use: 'Small state changes, icon swaps' },
  { token: '--dur-base', ms: 240, use: 'The default — most enter / exit' },
  { token: '--dur-slow', ms: 400, use: 'Long distances — the meter filling' },
  { token: '--dur-reveal', ms: 600, use: 'Staged screen reveals' }
];

const EASES: { token: string; curve: string; use: string }[] = [
  { token: '--ease-out', curve: 'cubic-bezier(.22,1,.36,1)', use: 'Decelerate — entering' },
  { token: '--ease-in', curve: 'cubic-bezier(.64,0,.78,0)', use: 'Accelerate — leaving' },
  { token: '--ease-inout', curve: 'cubic-bezier(.65,0,.35,1)', use: 'Symmetric — moving in place' },
  { token: '--ease-spring', curve: 'cubic-bezier(.34,1.56,.64,1)', use: 'Overshoot — playful confirmations' }
];

export const Tokens: StoryObj = {
  name: 'Duration & easing',
  parameters: {
    docs: { description: { story: 'Five durations, four curves. Every animated component references these, so the whole app runs on one clock. Reduced-motion is honoured globally in tokens.css — motion is decoration, never the message.' } }
  },
  render: () => (
    <Page>
      <Header
        eyebrow="Foundations · Motion"
        title="Motion"
        lead="New to this system — Figma carries no motion. Durations scale with travel distance; curves carry intent."
      />
      <Section title="Duration">
        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          {DURATIONS.map((d) => (
            <div key={d.token} style={{ display: 'grid', gridTemplateColumns: '150px 60px 1fr', gap: 'var(--space-4)', alignItems: 'center' }}>
              <Mono>{d.token}</Mono>
              <span style={{ font: '400 12px/18px var(--font)', color: 'var(--text-secondary)' }}>{d.ms}ms</span>
              <span style={{ font: '400 13px/19px var(--font)', color: 'var(--text-primary)' }}>{d.use}</span>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Easing" note="Curves are the grammar: things enter with ease-out, leave with ease-in, and confirm with a spring.">
        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          {EASES.map((e) => (
            <div key={e.token} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 'var(--space-4)', alignItems: 'baseline' }}>
              <Mono>{e.token}</Mono>
              <span style={{ font: '400 13px/19px var(--font)', color: 'var(--text-primary)' }}>
                {e.use} <span style={{ color: 'var(--text-secondary)' }}>· {e.curve}</span>
              </span>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  )
};

/* ---------- Live playground -------------------------------------- */

export const Playground: StoryObj = {
  parameters: {
    docs: { description: { story: 'Feel the tokens. Pick a duration and a curve, then trigger — the same 240px travel makes the difference between curves obvious, and shows why the spring is kept for confirmations only.' } }
  },
  render: () => {
    const [dur, setDur] = useState('--dur-base');
    const [ease, setEase] = useState('--ease-out');
    const [on, setOn] = useState(false);
    return (
      <Page>
        <Header eyebrow="Foundations · Motion" title="Playground" lead="Same distance, different tokens." />
        <div style={{ display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap', marginBottom: 'var(--space-8)' }}>
          <label style={{ font: '400 13px/19px var(--font)', color: 'var(--text-secondary)' }}>
            Duration&nbsp;
            <select value={dur} onChange={(e) => setDur(e.target.value)} style={selectStyle}>
              {DURATIONS.map((d) => <option key={d.token} value={d.token}>{d.token} · {d.ms}ms</option>)}
            </select>
          </label>
          <label style={{ font: '400 13px/19px var(--font)', color: 'var(--text-secondary)' }}>
            Easing&nbsp;
            <select value={ease} onChange={(e) => setEase(e.target.value)} style={selectStyle}>
              {EASES.map((e) => <option key={e.token} value={e.token}>{e.token}</option>)}
            </select>
          </label>
          <button onClick={() => setOn((v) => !v)} style={triggerStyle}>Trigger</button>
        </div>
        <div style={{ position: 'relative', height: 64, background: 'var(--surface-container)', borderRadius: 'var(--rounded-03)', border: '1px solid var(--border-subtle)' }}>
          <div
            style={{
              position: 'absolute',
              top: 8,
              left: 8,
              width: 48,
              height: 48,
              borderRadius: 'var(--rounded-02)',
              background: 'var(--action-primary)',
              transform: on ? 'translateX(240px)' : 'translateX(0)',
              transition: `transform var(${dur}) var(${ease})`
            }}
          />
        </div>
      </Page>
    );
  }
};

const selectStyle: React.CSSProperties = {
  marginLeft: 6,
  background: 'var(--surface-input)',
  color: 'var(--text-primary)',
  border: '1px solid var(--border-default)',
  borderRadius: 'var(--rounded-02)',
  padding: '6px 10px',
  font: '400 13px/19px var(--font)'
};
const triggerStyle: React.CSSProperties = {
  background: 'var(--action-primary)',
  color: 'var(--text-on-primary)',
  border: 'none',
  borderRadius: 'var(--rounded-02)',
  padding: '8px 18px',
  font: '600 13px/19px var(--font)',
  cursor: 'pointer'
};
