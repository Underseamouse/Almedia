import { useRef } from 'react'
import './TiltCard.css'

/*
  Card hover tilt (Transitions.dev). Внешняя обёртка .t-tilt — плоская
  зона наведения (сама НЕ трансформируется), внутренняя .t-tilt-card
  наклоняется по указателю, .t-tilt-glare — блик, следующий за курсором.
  JS пишет только 4 кастомных свойства + два класса.
*/
export default function TiltCard({ max = 12, className = '', children }) {
  const outer = useRef(null)
  const card = useRef(null)
  const raf = useRef(0)

  const onMove = (e) => {
    const el = outer.current
    const c = card.current
    if (!el || !c) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty('--tilt-ry', `${(px - 0.5) * 2 * max}deg`)
      el.style.setProperty('--tilt-rx', `${-(py - 0.5) * 2 * max}deg`)
      el.style.setProperty('--tilt-gx', `${px * 100}%`)
      el.style.setProperty('--tilt-gy', `${py * 100}%`)
      c.classList.add('is-tilting')
      el.classList.add('is-hover')
    })
  }

  const onLeave = () => {
    const el = outer.current
    const c = card.current
    if (!el || !c) return
    cancelAnimationFrame(raf.current)
    c.classList.remove('is-tilting')      // вернётся плавно, длинным ease
    el.classList.remove('is-hover')
    el.style.setProperty('--tilt-rx', '0deg')
    el.style.setProperty('--tilt-ry', '0deg')
  }

  return (
    <div
      ref={outer}
      className={`t-tilt ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onPointerCancel={onLeave}
    >
      <div ref={card} className="t-tilt-card">
        {children}
        <div className="t-tilt-glare" />
      </div>
    </div>
  )
}
