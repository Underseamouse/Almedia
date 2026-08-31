import React from 'react';

export interface AmbientProps {
  /** Grain strength. The Figma comp blurs a noise layer at ~43px; this is its CSS twin. */
  grain?: number;
  /** Drift makes the blobs breathe. Off by default on dense screens. */
  animated?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * The app's ground: near-black navy, a few out-of-focus colour fields, and a
 * fine grain over everything.
 *
 * The grain matters more than it looks. Large flat dark areas band badly on
 * OLED phones; a little noise breaks the gradient into something the panel can
 * actually render, and it stops the glow from looking like a cheap radial.
 */
export const Ambient: React.FC<AmbientProps> = ({
  grain = 0.055,
  animated = true,
  children,
  style,
  className
}) => {
  const noise =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)'/%3E%3C/svg%3E\")";

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--surface-background)',
        ...style
      }}
    >
      <style>{`
        @keyframes fc-drift-a {
          0%,100% { transform: translate3d(0,0,0) scale(1); }
          50%     { transform: translate3d(6%,4%,0) scale(1.08); }
        }
        @keyframes fc-drift-b {
          0%,100% { transform: translate3d(0,0,0) scale(1.05); }
          50%     { transform: translate3d(-5%,-6%,0) scale(1); }
        }
      `}</style>

      {/* brand light, top — sits behind the logo and headline */}
      <div
        style={{
          position: 'absolute',
          top: '-22%',
          left: '-10%',
          width: '85%',
          aspectRatio: '1',
          borderRadius: '50%',
          background: 'var(--main-500)',
          opacity: 0.22,
          filter: 'blur(90px)',
          animation: animated ? 'fc-drift-a 14s var(--ease-inout) infinite' : undefined
        }}
      />
      {/* cool light, middle — gives glass something to refract */}
      <div
        style={{
          position: 'absolute',
          top: '38%',
          right: '-18%',
          width: '70%',
          aspectRatio: '1',
          borderRadius: '50%',
          background: 'var(--info-500)',
          opacity: 0.12,
          filter: 'blur(90px)',
          animation: animated ? 'fc-drift-b 18s var(--ease-inout) infinite' : undefined
        }}
      />
      {/* brand light, bottom — ties the primary action into the field */}
      <div
        style={{
          position: 'absolute',
          bottom: '-14%',
          left: '12%',
          width: '65%',
          aspectRatio: '1',
          borderRadius: '50%',
          background: 'var(--main-500)',
          opacity: 0.14,
          filter: 'blur(90px)',
          animation: animated ? 'fc-drift-a 16s var(--ease-inout) infinite reverse' : undefined
        }}
      />

      {/* grain */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: noise,
          opacity: grain,
          mixBlendMode: 'overlay',
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', height: '100%' }}>{children}</div>
    </div>
  );
};
