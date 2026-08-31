import React from 'react';
import { Ambient } from '../effects/Ambient';
import { Logo } from '../components/Logo';
import { WalletPill } from '../components/WalletPill';
import { GameBoard } from '../components/GameBoard';
import { Button } from '../components/Button';

export interface GameScreenProps {
  balance?: string;
  headline?: string;
  body?: string;
  cta?: string;
  animated?: boolean;
  onNext?: () => void;
}

/**
 * The game screen — comp 181-8798, the visual target for the whole flow.
 *
 * Its job is a single promise made visible: *this is a game you'd play anyway,
 * and it pays*. So the composition puts the board dead centre and lets three
 * quieter elements frame it — the wordmark for trust, the gold wallet for the
 * stakes, and one green CTA for the way forward. Nothing else competes.
 *
 * It is assembled entirely from library parts (Ambient · Logo · WalletPill ·
 * GameBoard · Button) on the token grid — no bespoke values — which is the
 * point of a storybook screen: proof the components compose into the real thing.
 */
export const GameScreen: React.FC<GameScreenProps> = ({
  balance = '€0',
  headline = 'Play games you actually enjoy — and get paid for it',
  body = 'Every task and action turns into real money in your wallet.',
  cta = 'Next',
  animated = true,
  onNext
}) => (
  <Ambient
    animated={animated}
    style={{
      width: 402,
      height: 874,
      borderRadius: 44,
      border: '1px solid rgba(255,255,255,0.06)'
    }}
  >
    <div
      style={{
        height: '100%',
        display: 'grid',
        gridTemplateRows: 'auto auto 1fr auto',
        padding: '60px 0 var(--space-8)',
        justifyItems: 'center'
      }}
    >
      {/* wordmark */}
      <div style={{ paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)' }}>
        <Logo size={32} />
      </div>

      {/* stakes */}
      <div style={{ padding: 'var(--space-6) 0' }}>
        <WalletPill balance={balance} animated={animated} />
      </div>

      {/* the game */}
      <div style={{ display: 'grid', placeItems: 'center', width: '100%' }}>
        <GameBoard animated={animated} />
      </div>

      {/* what it is + the way forward */}
      <div style={{ width: '100%', display: 'grid', gap: 'var(--space-6)', padding: '0 var(--space-6)' }}>
        <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
          <h1
            style={{
              font: '500 var(--h-sm)/var(--h-sm-lh) var(--font)',
              letterSpacing: 'var(--tracking)',
              color: 'var(--text-primary)',
              margin: 0
            }}
          >
            {headline}
          </h1>
          <p
            style={{
              font: '400 var(--t-lg)/var(--t-lg-lh) var(--font)',
              letterSpacing: 'var(--tracking)',
              color: 'var(--text-secondary)',
              margin: 0
            }}
          >
            {body}
          </p>
        </div>
        <Button variant="primary" onClick={onNext}>
          {cta}
        </Button>
      </div>
    </div>
  </Ambient>
);
