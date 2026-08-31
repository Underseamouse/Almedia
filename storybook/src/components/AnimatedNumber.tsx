import React, { useEffect, useRef, useState } from 'react';

export interface AnimatedNumberProps {
  value: number;
  /** Appended verbatim — currency stays outside the animated digits. */
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A number that counts to its new value, with each changed digit flipping.
 *
 * Two things happen at once: the value tweens (so the eye follows the amount
 * going up) and only the digits that actually changed animate (so the ones
 * that didn't stay put and stay readable). Tweening alone feels like a
 * spreadsheet; flipping alone hides how far it moved.
 */
export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  suffix = '',
  decimals = 2,
  duration = 700,
  className,
  style
}) => {
  const [display, setDisplay] = useState(value);
  const prevDigits = useRef<string>(value.toFixed(decimals));
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const from = display;
    const to = value;
    if (from === to) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(to);
      return;
    }

    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      // ease-out: fast off the mark, settles gently on the final figure
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(from + (to - from) * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  const text = display.toFixed(decimals);
  const prev = prevDigits.current;
  prevDigits.current = text;

  return (
    <span className={className} style={{ display: 'inline-flex', ...style }}>
      <style>{`
        @keyframes fc-digit-in {
          from { opacity: 0; transform: translateY(-0.42em); filter: blur(5px); }
          to   { opacity: 1; transform: none;                filter: blur(0); }
        }
        .fc-digit { display: inline-block; font-variant-numeric: tabular-nums; }
        .fc-digit--changed {
          animation: fc-digit-in var(--dur-base) var(--ease-out) both;
        }
      `}</style>
      {text.split('').map((ch, i) => (
        <span
          key={`${i}-${ch}`}
          className={`fc-digit${prev[i] !== ch ? ' fc-digit--changed' : ''}`}
          style={{ animationDelay: `${i * 22}ms` }}
        >
          {ch}
        </span>
      ))}
      {suffix && <span style={{ marginLeft: '0.22em' }}>{suffix}</span>}
    </span>
  );
};
