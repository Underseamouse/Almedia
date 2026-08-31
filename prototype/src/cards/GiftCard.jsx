import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'
import GlassCard from '../components/GlassCard.jsx'
import TiltCard from '../components/TiltCard.jsx'
import medal from '../assets/medal.png'
import stars from '../assets/gift-stars.png'
import './cards.css'

/*
  Карточка подарка (Figma 291-8284): стекло rgba(51,51,77,.5),
  звёздное поле (mix-blend-lighten, 54%), большое мягкое свечение,
  медаль 222px сверху (top 14). Конфетти — 2 залпа, лёгкий 3D-тилт.
*/
export default function GiftCard({ active, onEarn }) {
  const host = useRef(null)
  const fired = useRef(false)

  useEffect(() => {
    if (!active || fired.current) return
    fired.current = true
    const canvas = document.createElement('canvas')
    canvas.className = 'gift-confetti'
    host.current.appendChild(canvas)
    const shoot = confetti.create(canvas, { resize: true, useWorker: false })
    const base = { disableForReducedMotion: true }
    const ts = []
    ts.push(setTimeout(() => shoot({ ...base, particleCount: 75, spread: 65, origin: { x: 0.5, y: 0.5 } }), 420))
    ts.push(setTimeout(() => shoot({ ...base, particleCount: 45, spread: 110, startVelocity: 30, origin: { x: 0.5, y: 0.46 } }), 720))
    ts.push(setTimeout(() => onEarn?.(10), 900))
    return () => { ts.forEach(clearTimeout); shoot.reset(); canvas.remove() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active])


  return (
    <div className="card-wrap">
      <GlassCard
        className="glass-card--gift"
        tint="rgba(51, 51, 77, 0.5)"
        blobA="rgba(205, 145, 255, 0.3)"
        blobB="rgba(255, 165, 65, 0.24)"
        bottom="+€10 added to your balance"
        under={<img className="gift-stars" src={stars} alt="" />}
      >
        <div className="gift-stage" ref={host}>
          <span className="gift-glow" />
          <div className="gift-pop">
            <TiltCard className="gift-tilt" max={12}>
              <img src={medal} alt="€10 reward" className="gift-medal" />
            </TiltCard>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}
