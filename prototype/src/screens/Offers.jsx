import { useState } from 'react'
import { BorderBeam } from 'border-beam'
import { ImageGeneration } from 'img-fx'
import Logo from '../components/Logo.jsx'
import Drawer from '../components/Drawer.jsx'
import Quiz from './Quiz.jsx'
import { UNLOCKED } from './quizData.js'
import disney from '../assets/offers/disney.jpg'
import dice from '../assets/offers/dice.jpg'
import candy from '../assets/offers/candy.jpg'
import './Offers.css'

/*
  Экран офферов (Figma 293-8540 / 293-11385).

  До опросника: гарантированный оффер (border-beam sunset) + заблокированная
  карточка, у которой картинка ВСЕГДА в шейдере Pixel Organic — читается как
  вечная загрузка. «Answer now» открывает шторку с опросником; после
  «Analysing your answers» (2 c) шторка закрывается и офферы разблокированы.
*/
const ART = { disney, dice, candy }

export default function Offers({ onDone }) {
  const [quizOpen, setQuizOpen] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const finishQuiz = () => {
    setUnlocked(true)
    setQuizOpen(false)      // шторка уезжает вниз
  }

  return (
    <>
    <div className="offers">
      <div className="offers-logo"><Logo /></div>

      <div className="offers-body">
        <div className="offers-copy">
          <h1 className="offers-title">
            {unlocked ? 'Your starter offers!' : 'Your starter offer is ready!'}
          </h1>
          {!unlocked && (
            <p className="offers-sub">
              Start with the guaranteed one, unlock even more offers by answering simple quick questions
            </p>
          )}
        </div>

        {/* --- Гарантированный оффер --- */}
        <BorderBeam
          colorVariant="sunset"
          strength={1}
          size="md"
          borderRadius={18}
          brightness={2.6}
          saturation={1.6}
        >
          <div className="offer-card">
            <div className="offer-hero">
              <img className="offer-img" src={disney} alt="Disney solitaire" />
            </div>
            <div className="offer-row">
              <div className="offer-col">
                <p className="offer-name">Disney solitaire</p>
                <p className="offer-meta">10-20 min per day</p>
              </div>
              <div className="offer-col offer-col--right">
                <p className="offer-price">€2,180</p>
                <p className="offer-tag">Guaranteed!</p>
              </div>
            </div>
            <div className="offer-cta">
              <button className="offer-btn" onClick={onDone}>Play and Earn €2,180</button>
            </div>
          </div>
        </BorderBeam>

        {/* --- До опросника: заблокированная карточка --- */}
        {!unlocked && (
          <div className="offer-card">
            <div className="offer-hero">
              <ImageGeneration preset="pixels-organic" strength={1} theme="dark" />
            </div>
            <div className="offer-row offer-row--locked">
              <p className="offer-name offer-name--wrap">
                Unlock more offers by answering quick questions
              </p>
            </div>
            <div className="offer-cta offer-cta--ghost">
              <button className="offer-btn-ghost" onClick={() => setQuizOpen(true)}>
                Answer now
              </button>
            </div>
          </div>
        )}

        {/* --- После опросника: разблокированные офферы --- */}
        {unlocked &&
          UNLOCKED.slice(1).map((o, i) => (
            <div className="offer-card offer-card--reveal" key={o.id} style={{ '--d': `${i * 0.1}s` }}>
              <div className="offer-hero">
                <img className="offer-img" src={ART[o.id]} alt={o.name} />
              </div>
              <div className="offer-row">
                <div className="offer-col">
                  <p className="offer-name">{o.name}</p>
                  <p className="offer-meta">{o.meta}</p>
                </div>
                <div className="offer-col offer-col--right">
                  <p className="offer-price">{o.prize}</p>
                  <p className="offer-tag">Guaranteed!</p>
                </div>
              </div>
              <div className="offer-cta">
                <button className="offer-btn" onClick={onDone}>{o.cta}</button>
              </div>
            </div>
          ))}
      </div>

    </div>

    {/* Шторка живёт вне .offers: тот блок скроллится, и внутри него шторка
        тянулась бы по высоте контента, а не до низа экрана.
        top=82 — это 142 по фрейму минус статус-бар (Figma 293:8989). */}
    <Drawer open={quizOpen} top={82} showClose={false} onClose={() => setQuizOpen(false)}>
      <Quiz onClose={() => setQuizOpen(false)} onDone={finishQuiz} />
    </Drawer>
    </>
  )
}
