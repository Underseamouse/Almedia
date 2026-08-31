import React, { useEffect, useState } from 'react';
import { Ambient } from '../effects/Ambient';
import { BreathingOrb } from '../effects/BreathingOrb';
import { Logo } from '../components/Logo';
import { AwardStat, TrustpilotStars } from '../components/AwardStat';
import { Button } from '../components/Button';

export type Stage = 0 | 1 | 2;

export interface TrustScreenProps {
  /** 0 splash · 1 headline · 2 full. Drive it, or let it run itself. */
  stage?: Stage;
  autoPlay?: boolean;
  onStart?: () => void;
}

/** Fades and lifts its child once `show` flips. Staggered by `delay`. */
const Reveal: React.FC<{ show: boolean; delay?: number; children: React.ReactNode }> = ({
  show,
  delay = 0,
  children
}) => (
  <div
    style={{
      opacity: show ? 1 : 0,
      transform: show ? 'none' : 'translateY(14px)',
      filter: show ? 'blur(0)' : 'blur(6px)',
      transition: `opacity var(--dur-reveal) var(--ease-out) ${delay}ms,
                   transform var(--dur-reveal) var(--ease-out) ${delay}ms,
                   filter var(--dur-reveal) var(--ease-out) ${delay}ms`
    }}
  >
    {children}
  </div>
);

/**
 * The first screen of the first session, as three beats rather than three screens.
 *
 * Beat 1 is the mark alone while the app wakes. Beat 2 says what this is. Beat 3
 * brings the evidence and the action. Nothing navigates — the content arrives on
 * one surface, so the user never feels they are being marched through a funnel
 * before they have been told anything.
 */
export const TrustScreen: React.FC<TrustScreenProps> = ({
  stage: controlled,
  autoPlay = true,
  onStart
}) => {
  const [auto, setAuto] = useState<Stage>(0);
  const stage = controlled ?? auto;

  useEffect(() => {
    if (controlled !== undefined || !autoPlay) return;
    const a = setTimeout(() => setAuto(1), 1100);
    const b = setTimeout(() => setAuto(2), 2100);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [controlled, autoPlay]);

  return (
    <Ambient
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
          gridTemplateRows: 'auto 1fr auto',
          padding: '60px var(--space-6) var(--space-8)'
        }}
      >
        {/* header — the mark moves from the centre to the top as beat 2 lands */}
        <div style={{ display: 'grid', placeItems: 'center', minHeight: 32 }}>
          <Reveal show={stage >= 1}>
            <Logo size={30} />
          </Reveal>
        </div>

        {/* body */}
        <div style={{ display: 'grid', placeItems: 'center', alignContent: 'start', gap: 'var(--space-8)', paddingTop: 'var(--space-6)' }}>
          {stage === 0 ? (
            <div style={{ display: 'grid', placeItems: 'center', height: 420 }}>
              <div style={{ position: 'relative', display: 'grid', placeItems: 'center' }}>
                <BreathingOrb size={120} count={30} />
                <span style={{ position: 'absolute' }}>
                  <Logo variant="mark" size={40} />
                </span>
              </div>
            </div>
          ) : (
            <>
              <Reveal show={stage >= 1} delay={80}>
                <div style={{ textAlign: 'center', display: 'grid', gap: 'var(--space-2)' }}>
                  <h1
                    style={{
                      font: `500 var(--h-sm)/var(--h-sm-lh) var(--font)`,
                      letterSpacing: 'var(--tracking)',
                      color: 'var(--text-primary)',
                      margin: 0
                    }}
                  >
                    Hey! I'm here to help you
                    <br />
                    earn real cash
                  </h1>
                  <p
                    style={{
                      font: `400 var(--t-lg)/var(--t-lg-lh) var(--font)`,
                      letterSpacing: 'var(--tracking)',
                      color: 'var(--text-secondary)',
                      margin: 0
                    }}
                  >
                    Rated by people who actually got paid.
                  </p>
                </div>
              </Reveal>

              <Reveal show={stage >= 2} delay={120}>
                <AwardStat
                  value="Rated 4.7/5"
                  label={<TrustpilotStars />}
                  source={
                    <span style={{ font: '500 12px/18px var(--font)', color: 'var(--text-primary)' }}>
                      Based on 242,605 reviews
                    </span>
                  }
                />
              </Reveal>

              <Reveal show={stage >= 2} delay={260}>
                <AwardStat value="10,000,000 +" label={<>Downloads<br />on Google Play</>} />
              </Reveal>
            </>
          )}
        </div>

        {/* action */}
        <Reveal show={stage >= 2} delay={400}>
          <div style={{ display: 'grid', gap: 'var(--space-3)' }}>
            <Button variant="primary" onClick={onStart}>
              Let's go
            </Button>
            <p
              style={{
                textAlign: 'center',
                margin: 0,
                font: `400 var(--t-md)/var(--t-md-lh) var(--font)`,
                letterSpacing: 'var(--tracking)',
                color: 'var(--text-secondary)'
              }}
            >
              Already have an account?{' '}
              <a href="#" style={{ color: 'var(--action-primary)', fontWeight: 600, textDecoration: 'none' }}>
                Log in
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </Ambient>
  );
};
