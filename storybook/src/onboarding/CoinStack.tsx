import React from 'react';

/**
 * A single 3D coin, drawn from the gradients in the provided icons8 Lottie:
 * a flat gold face, a lighter top highlight, and a darker amber rim beneath
 * that gives the disc its thickness. Pure SVG so it scales cleanly.
 */
const Coin: React.FC<{ w: number }> = ({ w }) => {
  const h = w * 0.44; // face ellipse height (Lottie discs are ~2:1)
  const rim = w * 0.16; // side thickness
  const cx = w / 2;
  const rx = w / 2 - 1;
  const ry = h / 2;
  const uid = React.useId();
  return (
    <svg width={w} height={h + rim} viewBox={`0 0 ${w} ${h + rim}`} style={{ display: 'block' }}>
      <defs>
        <linearGradient id={`rim${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e5a505" />
          <stop offset="1" stopColor="#c98600" />
        </linearGradient>
        <linearGradient id={`face${uid}`} x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0" stopColor="#ffe24d" />
          <stop offset="0.55" stopColor="#ffd000" />
          <stop offset="1" stopColor="#f7c000" />
        </linearGradient>
      </defs>
      {/* rim / thickness */}
      <path
        d={`M${cx - rx},${ry + rim / 2} a${rx},${ry} 0 1,0 ${rx * 2},0 v${rim} a${rx},${ry} 0 1,1 -${rx * 2},0 Z`}
        fill={`url(#rim${uid})`}
      />
      {/* top face */}
      <ellipse cx={cx} cy={ry + rim / 2} rx={rx} ry={ry} fill={`url(#face${uid})`} />
      {/* highlight */}
      <ellipse cx={cx} cy={ry + rim / 2 - ry * 0.28} rx={rx * 0.62} ry={ry * 0.42} fill="#fff2a8" opacity={0.55} />
    </svg>
  );
};

export interface CoinStackProps {
  /** How many coins in the stack. This is the custom bit — drive it. */
  count?: number;
  /** Coin width in px. */
  coin?: number;
  /** Replay trigger — bump to re-drop the whole stack. */
  replayKey?: number;
}

/**
 * A growing stack of coins — the hero of the "watch your balance grow" card.
 *
 * The source Lottie hard-codes six coins in two columns; this rebuilds the same
 * motion parametrically so the **count is a prop** (the balance is custom, so
 * the pile has to be). Each coin drops in with a spring and a squash, staggered
 * bottom-to-top, then the whole stack settles into a slow idle bob and the top
 * coin gives a small tilt — the three moves the Lottie reads as "alive". The
 * step between coins is the rim height, so any count stacks cleanly.
 */
export const CoinStack: React.FC<CoinStackProps> = ({ count = 7, coin = 84, replayKey = 0 }) => {
  const rim = coin * 0.16;
  const face = coin * 0.44;
  const step = rim + face * 0.16; // vertical gap between stacked coins
  const stackH = face + rim + step * (count - 1);

  return (
    <div
      key={replayKey}
      style={{
        position: 'relative',
        width: coin + 24,
        height: stackH + 24,
        display: 'grid',
        placeItems: 'end center'
      }}
    >
      <style>{`
        @keyframes fc-coin-drop {
          0%   { transform: translateY(-46px) scaleY(0.7); opacity: 0; }
          60%  { opacity: 1; }
          80%  { transform: translateY(2px) scaleY(1.08); }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        @keyframes fc-coin-bob {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-3px); }
        }
        @keyframes fc-coin-top-tilt {
          0%,100% { transform: rotate(-4deg); }
          50%     { transform: rotate(4deg); }
        }
      `}</style>

      {/* the stack bobs as one, once it has landed */}
      <div
        style={{
          position: 'relative',
          width: coin,
          height: stackH,
          animation: 'fc-coin-bob 3.6s var(--ease-inout) infinite',
          animationDelay: `${count * 0.09 + 0.5}s`
        }}
      >
        {Array.from({ length: count }).map((_, k) => {
          const fromBottom = k; // 0 = bottom
          const isTop = k === count - 1;
          return (
            <div
              key={k}
              style={{
                position: 'absolute',
                left: 0,
                bottom: fromBottom * step,
                width: coin,
                transformOrigin: 'center bottom',
                animation: `fc-coin-drop 620ms var(--ease-spring) both`,
                animationDelay: `${fromBottom * 90}ms`,
                zIndex: fromBottom
              }}
            >
              <div
                style={
                  isTop
                    ? {
                        animation: 'fc-coin-top-tilt 3.6s var(--ease-inout) infinite',
                        animationDelay: `${count * 0.09 + 0.7}s`,
                        transformOrigin: 'center bottom'
                      }
                    : undefined
                }
              >
                <Coin w={coin} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
