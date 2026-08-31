import React from 'react';

/** The five tile types from the prototype's Match-3, as 3D emoji.
 *  Emoji, not exported PNGs: they render as the platform's own 3D glyphs,
 *  stay same-origin (the pixel sampler in Effects needs that), and never
 *  expire the way a Figma asset URL would. */
export const TILE = {
  W: '🍉', // watermelon
  C: '🍬', // candy (blue)
  P: '🥔', // potato
  E: '🍳', // egg
  R: '🥕'  // carrot
} as const;

export type TileKey = keyof typeof TILE;

/** Default layout — the prototype's opening board (comp 221-9710). */
const DEFAULT: TileKey[][] = [
  ['P', 'W', 'E', 'R', 'W'],
  ['C', 'C', 'P', 'E', 'W'],
  ['E', 'R', 'C', 'W', 'P'],
  ['R', 'P', 'E', 'C', 'R']
];

export interface GameBoardProps {
  /** Rows of tile keys. Defaults to the opening board. */
  layout?: TileKey[][];
  /** Tiles at these "r,c" coords lift and brighten — the scripted match. */
  highlight?: string[];
  /** Idle float, so the board reads as alive rather than a screenshot. */
  animated?: boolean;
  style?: React.CSSProperties;
}

/**
 * The Match-3 board that fills the middle of the game screen.
 *
 * It carries the product's core promise in one glance — *this is a real game,
 * not a wall of survey rows*. The grammar is deliberately minimal: tiles are a
 * flat 10%-white cell (`rounded-02`) with a single 3D emoji, so the emoji does
 * all the talking and the grid never competes with the CTA below it.
 *
 * Geometry is the comp's: 5×4, 8px gutters, a 48px glyph in a 56px cell. In the
 * live prototype these tiles swap and clear on a scripted Match-3; here the
 * board is static, with an optional idle float and a `highlight` set to stage
 * the winning move for documentation.
 */
export const GameBoard: React.FC<GameBoardProps> = ({
  layout = DEFAULT,
  highlight = [],
  animated = true,
  style
}) => {
  const lit = new Set(highlight);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 56px)',
        gap: 'var(--space-2)',
        ...style
      }}
    >
      <style>{`
        @keyframes fc-tile-float {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-3px); }
        }
      `}</style>
      {layout.flatMap((row, r) =>
        row.map((key, c) => {
          const isLit = lit.has(`${r},${c}`);
          return (
            <div
              key={`${r},${c}`}
              style={{
                width: 56,
                height: 56,
                display: 'grid',
                placeItems: 'center',
                background: isLit ? 'rgba(255,255,255,0.16)' : 'var(--white-10)',
                borderRadius: 'var(--rounded-02)',
                boxShadow: isLit ? '0 0 0 2px var(--border-selected)' : undefined,
                transform: isLit ? 'translateY(-3px)' : undefined,
                transition: 'transform var(--dur-base) var(--ease-spring), background var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
                animation:
                  animated && !isLit
                    ? `fc-tile-float 4s var(--ease-inout) ${((r + c) % 5) * 0.3}s infinite`
                    : undefined
              }}
            >
              <span style={{ fontSize: 40, lineHeight: 1 }} role="img" aria-label={key}>
                {TILE[key]}
              </span>
            </div>
          );
        })
      )}
    </div>
  );
};
