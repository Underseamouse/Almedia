import { useCallback, useRef, useState } from 'react'
import StatusBar from './components/StatusBar.jsx'
import HomeIndicator from './components/HomeIndicator.jsx'
import Logo from './components/Logo.jsx'
import StepHeader from './components/StepHeader.jsx'
import WalletBlock from './components/WalletBlock.jsx'
import CardDeck from './components/CardDeck.jsx'
import BorderBeam from './components/BorderBeam.jsx'
import Loading from './screens/Loading.jsx'
import OnboardingContent from './screens/Onboarding.jsx'
import Signup from './screens/Signup.jsx'
import Offers from './screens/Offers.jsx'
import GameCard from './cards/GameCard.jsx'
import DaysCard from './cards/DaysCard.jsx'
import PayCard from './cards/PayCard.jsx'
import GiftCard from './cards/GiftCard.jsx'
import glow from './assets/glow.jpg'
import './App.css'

/*
  Флоу онбординга (новый дизайн):
    loading → intro → карточки (game/days/pay/gift) → signup → offers
  «Log in» на интро уводит сразу на signup, минуя онбординг.
  Степпер — 4 шага по карточкам (signup в новом дизайне без степпера).
  Баланс живёт здесь: 0 → 4.00 (игра) → 6.00 (стрик) → 16.00 (подарок).
*/
const CARDS = ['game', 'days', 'pay', 'gift']

// Копирайт под карточками — у каждого шага свой (Figma 283-4649 / 291-7429 / 291-7687 / 291-8072)
const COPY = {
  game: {
    title: 'Play games you actually enjoy — and get paid for it',
    sub: 'Every task and action turns into real money in your wallet.',
  },
  days: {
    title: 'Play daily, keep your streak and earn more',
    sub: 'The more you play, the more there is waiting for you.',
  },
  pay: {
    title: 'Cash out your way, whenever you want',
    sub: 'PayPal, Bank transfer, Visa or Gift cards in Amazon — your choice.',
  },
  gift: {
    title: 'Your starter reward is ready!',
    sub: 'Added straight to your current balance',
  },
}
const round2 = (n) => Math.round(n * 100) / 100

export default function App() {
  const [phase, setPhase] = useState('loading')   // loading | intro | cards | signup | offers
  const [cardIdx, setCardIdx] = useState(0)
  const [balance, setBalance] = useState(0)
  const [pulse, setPulse] = useState(0)
  const [plus, setPlus] = useState(null)
  const [note, setNote] = useState(null)

  const walletRef = useRef(null)
  const hideTimer = useRef(null)

  /*
    Начисление: «+€X» выезжает из-под виджета, через 1.3с уезжает обратно.
    После подарка на его место встаёт «Ready to be withdrawn» (Figma 291-8072).
  */
  const earn = useCallback((delta, { thenNote } = {}) => {
    if (!delta) return
    setBalance((b) => round2(b + delta))
    setPulse((p) => p + 1)
    setPlus(delta)
    if (hideTimer.current) clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => {
      setPlus(null)
      if (thenNote) setTimeout(() => setNote(thenNote), 420)
    }, 1300)
  }, [])

  const earnGift = useCallback(
    (delta) => earn(delta, { thenNote: 'Ready to be withdrawn' }),
    [earn],
  )

  const step = cardIdx + 1

  const next = () => {
    if (phase === 'cards') {
      if (cardIdx < CARDS.length - 1) setCardIdx((i) => i + 1)
      else setPhase('signup')
    }
  }
  const back = () => {
    if (phase === 'signup') { setPhase('cards'); setCardIdx(CARDS.length - 1); return }
    if (cardIdx > 0) setCardIdx((i) => i - 1)
    else setPhase('intro')
  }
  const skip = () => setPhase('signup')

  // Перезапуск флоу: обнуляем всё, иначе следующий «Get started»
  // открывал последнюю просмотренную карточку с накопленным балансом.
  const restart = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    setCardIdx(0)
    setBalance(0)
    setPulse(0)
    setPlus(null)
    setNote(null)
    setPhase('loading')
  }
  const startCards = () => { setCardIdx(0); setPhase('cards') }

  const deck = [
    { key: 'game', node: <GameCard walletRef={walletRef} active={cardIdx === 0} onEarn={earn} /> },
    { key: 'days', node: <DaysCard active={cardIdx === 1} onEarn={earn} /> },
    { key: 'pay', node: <PayCard active={cardIdx === 2} /> },
    { key: 'gift', node: <GiftCard active={cardIdx === 3} onEarn={earnGift} /> },
  ]

  return (
    <div className="stage">
      <div className="frame">
        <div className="shell">
          <div className="shell-glow" style={{ backgroundImage: `url(${glow})` }} />
          <StatusBar />

          {phase === 'loading' && (
            <div className="shell-middle">
              <Loading onDone={() => setPhase("intro")} />
            </div>
          )}

          {phase === 'intro' && (
            <>
              <div className="shell-logo"><Logo /></div>
              <div className="shell-middle">
                <div className="screen-layer screen-enter"><OnboardingContent /></div>
              </div>
              <div className="shell-cta shell-cta--ob">
                <p className="shell-login shell-login-anim">
                  Already have an account?{' '}
                  <button className="shell-login-link" onClick={() => setPhase('signup')}>Log in</button>
                </p>
                <button className="btn-primary" onClick={startCards}>
                  <span className="btn-label btn-label-anim">Get started</span>
                </button>
              </div>
            </>
          )}

          {phase === 'signup' && (
            <div className="shell-middle">
              <div className="screen-layer screen-enter"><Signup onDone={() => setPhase('offers')} /></div>
            </div>
          )}

          {phase === 'offers' && (
            <div className="shell-middle">
              <div className="screen-layer screen-enter"><Offers onDone={restart} /></div>
            </div>
          )}

          {phase === 'cards' && (
            <>
              <StepHeader step={step} total={CARDS.length} onBack={back} onSkip={skip} />

              <div className="shell-wallet">
                <WalletBlock
                  walletRef={walletRef}
                  amount={balance}
                  pulse={pulse}
                  plus={plus}
                  note={cardIdx === 3 ? note : null}
                />
              </div>

              <div className="shell-middle">
                <div className="cards-screen">
                  <CardDeck cards={deck} active={cardIdx} />
                  <div className="step-spacer" />
                  <div className="step-copy" key={cardIdx}>
                    <h1 className="step-title">{COPY[CARDS[cardIdx]].title}</h1>
                    <p className="step-sub">{COPY[CARDS[cardIdx]].sub}</p>
                  </div>
                </div>
              </div>

              <div className="shell-cta">
                <button className={`btn-primary${cardIdx === 3 ? ' btn-glow' : ''}`} onClick={next}>
                  <span className="btn-label btn-label-anim">Next</span>
                  {cardIdx === 3 && (
                    <BorderBeam color="var(--primary-500)" hi="#c9ffe8" size="md" duration={4} />
                  )}
                </button>
              </div>
            </>
          )}

          <HomeIndicator />
        </div>
      </div>
    </div>
  )
}
