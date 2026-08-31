import React, { useEffect, useState } from 'react';

export interface CoinVoiceProps {
  children: React.ReactNode;
  mood?: 'neutral' | 'celebrating';
  /** Reveal the line word by word, as if it were being said. */
  typing?: boolean;
  size?: number;
}

/**
 * The narrator of the flow: the brand coin, given a face and a speech bubble.
 *
 * Deliberately built from the existing coin rather than a new mascot — a
 * custom character is an illustration project, and reusing the brand asset
 * keeps the voice on-brand for free.
 *
 * The coin bobs continuously. It is the only thing on a quiz screen that moves
 * while the user is reading, which is what makes the screen feel occupied
 * rather than static.
 */
export const CoinVoice: React.FC<CoinVoiceProps> = ({
  children,
  mood = 'neutral',
  typing = false,
  size = 56
}) => {
  const s = mood === 'celebrating' ? size * 1.35 : size;
  const words = typeof children === 'string' ? children.split(' ') : null;
  const [shown, setShown] = useState(typing && words ? 0 : Infinity);

  useEffect(() => {
    if (!typing || !words) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setShown(Infinity);
      return;
    }
    setShown(0);
    const id = setInterval(() => {
      setShown((n) => {
        if (n >= words.length) {
          clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 55);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typing, typeof children === 'string' ? children : '']);

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
      <style>{`
        @keyframes fc-coin-bob {
          0%,100% { transform: translateY(0) rotate(-2deg); }
          50%     { transform: translateY(-5px) rotate(2deg); }
        }
        @keyframes fc-word-in {
          from { opacity: 0; transform: translateY(3px); filter: blur(3px); }
          to   { opacity: 1; transform: none; filter: blur(0); }
        }
        .fc-word { display: inline-block; animation: fc-word-in var(--dur-base) var(--ease-out) both; }
      `}</style>

      <div
        style={{
          flex: 'none',
          width: s,
          height: s,
          borderRadius: '50%',
          background: 'linear-gradient(160deg, var(--gold-light), var(--gold))',
          animation: `fc-coin-bob ${mood === 'celebrating' ? 1.6 : 3.4}s var(--ease-inout) infinite`,
          position: 'relative',
          boxShadow: '0 6px 18px -4px rgba(255,199,0,0.4)'
        }}
      >
        {/* eyes */}
        <span style={eye(s, 0.3)} />
        <span style={eye(s, 0.62)} />
        {/* smile */}
        <svg
          viewBox="0 0 20 10"
          style={{
            position: 'absolute',
            left: '32%',
            top: '55%',
            width: s * 0.36,
            height: s * 0.18
          }}
          fill="none"
        >
          <path
            d="M1 1 Q10 9 19 1"
            stroke="var(--gb-900)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div
        style={{
          flex: 1,
          background: 'var(--surface-container)',
          borderRadius: 'var(--rounded-03)',
          padding: 'var(--space-3) var(--space-4)',
          font: `500 var(--t-lg)/var(--t-lg-lh) var(--font)`,
          letterSpacing: 'var(--tracking)',
          color: 'var(--text-primary)'
        }}
      >
        {words
          ? words.map((w, i) => (
              <span
                key={i}
                className="fc-word"
                style={{
                  animationDelay: `${i * 45}ms`,
                  visibility: i < shown ? 'visible' : 'hidden'
                }}
              >
                {w}
                {i < words.length - 1 ? ' ' : ''}
              </span>
            ))
          : children}
      </div>
    </div>
  );
};

const eye = (s: number, left: number): React.CSSProperties => ({
  position: 'absolute',
  left: `${left * 100}%`,
  top: '34%',
  width: s * 0.09,
  height: s * 0.12,
  borderRadius: '50%',
  background: 'var(--gb-900)'
});
