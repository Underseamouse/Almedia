/* ============================================================
   Foundations doc kit
   Shared building blocks for the Foundations/* pages so every
   page reads as one system. Two ideas hold it together:

   1. Values are read LIVE from tokens.css via getComputedStyle —
      the pages never restate a hex. Change a token, the docs move.
   2. Colour legibility is computed (WCAG contrast), not eyeballed —
      a swatch tells you whether text survives on it.
   ============================================================ */
import React from 'react';

/* ---------- colour resolution ------------------------------------ */

/** Resolve any CSS colour expression (incl. var() chains + rgba) to a
 *  normalised `rgb(a)` string, by letting the browser do the maths. */
export function resolveColor(expr: string): string {
  if (typeof document === 'undefined') return expr;
  const probe = document.createElement('span');
  probe.style.color = expr;
  document.body.appendChild(probe);
  const out = getComputedStyle(probe).color;
  probe.remove();
  return out || expr;
}

/** Read a token (e.g. `--main-500`) as its final rgb(a) value. */
export const readVar = (name: string) => resolveColor(`var(${name})`);

/** Resolve a length token (e.g. `--space-4`) to its px number, live. */
export function readLen(token: string): number {
  if (typeof document === 'undefined') return 0;
  const probe = document.createElement('div');
  probe.style.cssText = `position:absolute;visibility:hidden;width:var(${token})`;
  document.body.appendChild(probe);
  const px = parseFloat(getComputedStyle(probe).width) || 0;
  probe.remove();
  return px;
}

type RGBA = { r: number; g: number; b: number; a: number };

function parse(expr: string): RGBA {
  const m = resolveColor(expr).match(/rgba?\(([^)]+)\)/);
  if (!m) return { r: 0, g: 0, b: 0, a: 1 };
  const [r, g, b, a] = m[1].split(',').map((n) => parseFloat(n));
  return { r, g, b, a: a ?? 1 };
}

/** Uppercase hex for display. Alpha tokens keep their rgba() form,
 *  which is the honest thing to show for a 10%-white rule. */
export function hexOf(expr: string): string {
  const { r, g, b, a } = parse(expr);
  if (a < 1) return `rgba(${r}, ${g}, ${b}, ${round(a)})`;
  const h = (n: number) => n.toString(16).padStart(2, '0');
  return `#${h(r)}${h(g)}${h(b)}`.toUpperCase();
}

const round = (n: number) => Math.round(n * 100) / 100;

function luminance({ r, g, b }: RGBA): number {
  const f = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/** WCAG contrast ratio between two colour expressions (1–21). */
export function contrast(a: string, b: string): number {
  const la = luminance(parse(a));
  const lb = luminance(parse(b));
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return round((hi + 0.05) / (lo + 0.05));
}

/** Which of black / white text is more legible on a fill. */
export const readableInk = (bg: string) =>
  contrast(bg, '#ffffff') >= contrast(bg, '#000000') ? '#ffffff' : '#000000';

/** WCAG rating for body text (AA ≥ 4.5, AA-large / AAA-large ≥ 3). */
export function rating(ratio: number): { label: string; ok: boolean } {
  if (ratio >= 7) return { label: 'AAA', ok: true };
  if (ratio >= 4.5) return { label: 'AA', ok: true };
  if (ratio >= 3) return { label: 'AA large', ok: true };
  return { label: 'fail', ok: false };
}

/* ---------- render-after-mount guard -----------------------------
   getComputedStyle needs the DOM + tokens.css applied, so the colour
   pages paint once on the client. This keeps them from flashing raw
   var() text during the first (style-less) paint. */
export function useResolved(): boolean {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => setReady(true), []);
  return ready;
}

/* ---------- layout primitives ------------------------------------ */

export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      padding: 'var(--space-8)',
      background: 'var(--surface-background)',
      minHeight: '100vh',
      color: 'var(--text-primary)'
    }}
  >
    <div style={{ maxWidth: 860, margin: '0 auto' }}>{children}</div>
  </div>
);

export const Header: React.FC<{ eyebrow: string; title: string; lead?: React.ReactNode }> = ({
  eyebrow,
  title,
  lead
}) => (
  <header style={{ marginBottom: 'var(--space-12)' }}>
    <div
      style={{
        font: '600 12px/18px var(--font)',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--action-primary)',
        marginBottom: 'var(--space-2)'
      }}
    >
      {eyebrow}
    </div>
    <h1 style={{ font: '600 32px/42px var(--font)', letterSpacing: 'var(--tracking)', margin: 0 }}>
      {title}
    </h1>
    {lead && (
      <p
        style={{
          font: '400 16px/26px var(--font)',
          color: 'var(--text-secondary)',
          margin: 'var(--space-4) 0 0',
          maxWidth: 620
        }}
      >
        {lead}
      </p>
    )}
  </header>
);

export const Section: React.FC<{ title: string; note?: React.ReactNode; children: React.ReactNode }> = ({
  title,
  note,
  children
}) => (
  <section style={{ marginBottom: 'var(--space-12)' }}>
    <h2
      style={{
        font: '600 20px/28px var(--font)',
        letterSpacing: 'var(--tracking)',
        margin: '0 0 6px',
        paddingBottom: 'var(--space-3)',
        borderBottom: '1px solid var(--border-subtle)'
      }}
    >
      {title}
    </h2>
    {note && (
      <p
        style={{
          font: '400 14px/22px var(--font)',
          color: 'var(--text-secondary)',
          margin: 'var(--space-3) 0 var(--space-5)',
          maxWidth: 640
        }}
      >
        {note}
      </p>
    )}
    {children}
  </section>
);

export const Mono: React.FC<{ children: React.ReactNode; dim?: boolean }> = ({ children, dim }) => (
  <code
    style={{
      font: '400 12px/18px ui-monospace, SFMono-Regular, Menlo, monospace',
      color: dim ? 'var(--text-secondary)' : 'var(--text-primary)',
      whiteSpace: 'nowrap'
    }}
  >
    {children}
  </code>
);
