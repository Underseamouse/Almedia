import React from 'react';
import visa from '../assets/onboarding/visa.png';
import amazon from '../assets/onboarding/amazon.png';
import paypal from '../assets/onboarding/paypal.png';

/**
 * The three payout logos from the "fast withdraw to" card.
 *
 * These are the exact assets exported from the Figma frame (VISA / Amazon /
 * PayPal), committed into the repo rather than hot-linked — the Figma asset
 * URLs expire in ~7 days, and brand marks have to be pixel-right. Each sits at
 * the slight rotation the comp gives it, so the row reads as a loose fan rather
 * than a toolbar. A gentle idle sway keeps the card alive without pulling focus.
 */
const LOGOS: { src: string; alt: string; rot: number; z: number }[] = [
  { src: visa, alt: 'VISA', rot: -3, z: 1 },
  { src: amazon, alt: 'Amazon', rot: 6, z: 3 },
  { src: paypal, alt: 'PayPal', rot: -7, z: 2 }
];

export interface PaymentLogosProps {
  size?: number;
  animated?: boolean;
}

export const PaymentLogos: React.FC<PaymentLogosProps> = ({ size = 68, animated = true }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
    <style>{`
      @keyframes fc-pay-sway {
        0%,100% { transform: rotate(var(--r)) translateY(0); }
        50%     { transform: rotate(var(--r)) translateY(-3px); }
      }
    `}</style>
    {LOGOS.map((l, i) => (
      <div
        key={l.alt}
        style={
          {
            '--r': `${l.rot}deg`,
            width: size,
            height: size,
            borderRadius: 12,
            overflow: 'hidden',
            zIndex: l.z,
            transform: `rotate(${l.rot}deg)`,
            boxShadow: '0 6px 14px -4px rgba(0,0,0,0.35)',
            animation: animated ? `fc-pay-sway 4s var(--ease-inout) ${i * 0.4}s infinite` : undefined
          } as React.CSSProperties
        }
      >
        <img src={l.src} alt={l.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    ))}
  </div>
);
