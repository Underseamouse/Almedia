import { useEffect, useState } from 'react'
import GlassCard from '../components/GlassCard.jsx'
import LottieCoins from '../components/LottieCoins.jsx'
import day1 from '../assets/coins-day1.json'
import day2 from '../assets/coins-day2.json'
import day3 from '../assets/coins-day3.json'
import './cards.css'

/*
  Карточка стрика (Figma 291-7429 / 291-7600). Стопки монет появляются ОДИН
  раз и по очереди: Day 1 → Day 2 → Day 3.

  Никакой подмены рендера: монеты всё время рисует Lottie. Свечение
  включается в тот же момент, когда стопка начинает падать, а искры
  всплывают по ходу падения (со сдвигом), — поэтому ничего не «прыгает».
  Позиции искр повторяют Figma: Day 1 — слева, Day 2 — сверху,
  Day 3 — слева и справа над двумя стопками.
*/
/*
  Искры привязаны к ВЕРХУ своей стопки (у всех общая «земля», поэтому верх
  разный): day1 +7.5px от центра бокса, day2 −5, day3 −17.5.
  Раскладка как в Figma 291-7600: day1 — слева, day2 — сверху,
  day3 — слева и справа над двумя стопками.
*/
const DAYS = [
  {
    label: 'Day 1', data: day1, reward: 0.5,
    sparks: [
      { x: -15, y: 2, s: 7, d: 0.34 },
      { x: -19, y: 11, s: 5, d: 0.46 },
      { x: -9, y: -5, s: 5, d: 0.4 },
    ],
  },
  {
    label: 'Day 2', data: day2, reward: 0.5,
    sparks: [
      { x: -1, y: -14, s: 7, d: 0.42 },
      { x: 9, y: -10, s: 5, d: 0.54 },
      { x: -11, y: -8, s: 5, d: 0.48 },
    ],
  },
  {
    label: 'Day 3', data: day3, reward: 1.0,
    sparks: [
      { x: -17, y: 4, s: 6, d: 0.46 },
      { x: -12, y: -5, s: 5, d: 0.58 },
      { x: 12, y: -25, s: 7, d: 0.52 },
      { x: 20, y: -17, s: 5, d: 0.64 },
    ],
  },
]

export default function DaysCard({ active, onEarn }) {
  const [step, setStep] = useState(-1)

  useEffect(() => {
    if (!active || step !== -1) return
    const t = setTimeout(() => setStep(0), 420)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])

  const handleDone = (i) => {
    onEarn?.(DAYS[i].reward)
    if (i < DAYS.length - 1) setTimeout(() => setStep(i + 1), 260)
  }

  return (
    <div className="card-wrap">
      <GlassCard
        tint="rgba(3, 94, 191, 0.65)"
        blobA="rgba(120, 195, 255, 0.32)"
        blobB="rgba(0, 16, 50, 0.55)"
        top="The longer you play"
        bottom="The more you get"
      >
        <div className="days-row">
          {DAYS.map((d, i) => {
            const on = step >= i
            return (
              <div className="days-col" key={d.label}>
                <div className={`days-coin${on ? ' is-on' : ''}`}>
                  <span className="days-coin-glow" />
                  <LottieCoins data={d.data} play={on} size={60} onDone={() => handleDone(i)} />
                  <span className="days-sparks">
                    {d.sparks.map((s, k) => (
                      <i
                        key={k}
                        style={{
                          '--sx': `${s.x}px`,
                          '--sy': `${s.y}px`,
                          '--ss': `${s.s}px`,
                          '--sd': `${s.d}s`,
                        }}
                      />
                    ))}
                  </span>
                </div>
                <span className={`days-label${on ? ' on' : ''}`}>{d.label}</span>
              </div>
            )
          })}
        </div>
      </GlassCard>
    </div>
  )
}
