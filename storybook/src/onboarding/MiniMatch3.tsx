import React, { useEffect, useRef, useState } from 'react';

/* Same five tiles as the game screen's board, with the prototype's clear-glow
   colour per type — so a match reads as "that colour just paid out". */
const PALETTE = ['🍉', '🍬', '🥔', '🍳', '🥕'] as const;
const GLOW: Record<string, string> = {
  '🍉': '#e0405a',
  '🍬': '#3d7bff',
  '🥔': '#c98a3c',
  '🍳': '#ffd24d',
  '🥕': '#ff7a2f'
};

type Fx = 'swap' | 'pop' | 'drop';

/** Each beat: nudge a pair, resolve a line of three of `type`, clear, refill. */
const SCRIPT: { swap: [number, number]; line: [number, number, number]; type: string }[] = [
  { swap: [4, 5], line: [4, 5, 6], type: '🍉' },
  { swap: [9, 13], line: [1, 5, 9], type: '🍬' },
  { swap: [10, 11], line: [8, 9, 10], type: '🥕' },
  { swap: [2, 6], line: [6, 7, 3], type: '🍳' },
  { swap: [12, 13], line: [12, 13, 14], type: '🥔' },
  { swap: [7, 11], line: [3, 7, 11], type: '🍉' }
];

const INITIAL = ['🥔', '🍉', '🍳', '🥕', '🍬', '🍉', '🍬', '🥔', '🍳', '🥕', '🍉', '🍬', '🥕', '🥔', '🍳', '🍉'];

const useReducedMotion = () => {
  const [r, setR] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setR(mq.matches);
    const on = () => setR(mq.matches);
    mq.addEventListener?.('change', on);
    return () => mq.removeEventListener?.('change', on);
  }, []);
  return r;
};

const rnd = (not: string) => {
  let t = not;
  while (t === not) t = PALETTE[Math.floor(Math.random() * PALETTE.length)];
  return t;
};

export interface MiniMatch3Props {
  /** Tile edge in px. The card sizes it to fill the 208px hero. */
  tile?: number;
}

/**
 * A Match-3 board that plays *itself* — the hero of the "play on your own pace"
 * card.
 *
 * It runs a fixed loop rather than a real solver: each beat nudges a pair,
 * lands three of one type in a line, flashes them out in that tile's payout
 * colour, then drops fresh tiles into the gap. Scripted because the card only
 * needs to *read* as a live game in a two-second glance — a real engine would
 * be motion nobody watches long enough to verify. Honours reduced-motion by
 * holding a still board.
 */
export const MiniMatch3: React.FC<MiniMatch3Props> = ({ tile = 48 }) => {
  const [cells, setCells] = useState<string[]>(INITIAL);
  const [fx, setFx] = useState<Record<number, Fx>>({});
  const [glow, setGlow] = useState<string>('#e0405a');
  const reduced = useReducedMotion();
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    if (reduced) return;
    const timers: number[] = [];
    const wait = (ms: number) => new Promise<void>((res) => timers.push(window.setTimeout(res, ms)));
    const set3 = (idx: number[], t: string) =>
      setCells((c) => c.map((v, i) => (idx.includes(i) ? t : v)));

    (async () => {
      let beat = 0;
      while (alive.current) {
        const { swap, line, type } = SCRIPT[beat % SCRIPT.length];
        setGlow(GLOW[type]);

        setFx({ [swap[0]]: 'swap', [swap[1]]: 'swap' });
        set3([swap[0], swap[1]], type);
        await wait(380);
        if (!alive.current) break;

        setFx({ [line[0]]: 'pop', [line[1]]: 'pop', [line[2]]: 'pop' });
        set3(line, type);
        await wait(440);
        if (!alive.current) break;

        setCells((c) => c.map((v, i) => (line.includes(i) ? rnd(type) : v)));
        setFx({ [line[0]]: 'drop', [line[1]]: 'drop', [line[2]]: 'drop' });
        await wait(440);
        if (!alive.current) break;

        setFx({});
        await wait(520);
        beat++;
      }
    })();

    return () => {
      alive.current = false;
      timers.forEach(clearTimeout);
    };
  }, [reduced]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(4, ${tile}px)`,
        gap: 6
      }}
    >
      <style>{`
        @keyframes fc-m3-drop { from { transform: translateY(-22px); opacity: 0; } to { transform: none; opacity: 1; } }
      `}</style>
      {cells.map((emoji, i) => {
        const f = fx[i];
        return (
          <div
            key={i}
            style={{
              width: tile,
              height: tile,
              display: 'grid',
              placeItems: 'center',
              borderRadius: 'var(--rounded-02)',
              background: 'var(--white-10)',
              transform: f === 'swap' ? 'scale(1.1)' : f === 'pop' ? 'scale(0.2)' : undefined,
              opacity: f === 'pop' ? 0 : 1,
              boxShadow: f === 'pop' ? `0 0 16px 3px ${glow}` : undefined,
              transition: 'transform 320ms var(--ease-spring), opacity 320ms var(--ease-out), box-shadow 320ms var(--ease-out)',
              animation: f === 'drop' ? 'fc-m3-drop 380ms var(--ease-out)' : undefined
            }}
          >
            <span style={{ fontSize: Math.round(tile * 0.62), lineHeight: 1 }} role="img" aria-label="tile">
              {emoji}
            </span>
          </div>
        );
      })}
    </div>
  );
};
