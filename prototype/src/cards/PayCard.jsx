import GlassCard from '../components/GlassCard.jsx'
import visa from '../assets/pay/card-visa.png'
import amazon from '../assets/pay/card-amazon.png'
import paypal from '../assets/pay/card-paypal.png'
import './cards.css'

/*
  Карточка вывода (Figma 291-7706): жёлто-золотое стекло
  rgba(255,240,122,.75). Три карты 69.65×63.55 в ряд с gap ~7,
  вся группа повёрнута на 1.81°, карты — на 0 / +6.12 / −7.26°.
*/
const CARDS = [
  { img: visa, label: 'Visa', rot: 0, radius: 7.185, bg: '#122aa4' },
  { img: amazon, label: 'Amazon', rot: 6.12, radius: 10.365 },
  { img: paypal, label: 'PayPal', rot: -7.26, radius: 10.365 },
]

export default function PayCard({ active }) {
  return (
    <div className="card-wrap">
      <GlassCard
        tint="rgba(255, 240, 122, 0.75)"
        blobA="rgba(255, 250, 190, 0.34)"
        blobB="rgba(60, 52, 0, 0.5)"
        top="Fast withdraw to:"
        bottom="or through Bank transfer"
      >
        <div className="pay-fan">
          {CARDS.map((c, i) => (
            <div
              key={c.label}
              className={`pay-fan-card${active ? ' is-in' : ''}`}
              style={{
                '--rot': `${c.rot}deg`,
                '--d': `${0.12 + i * 0.09}s`,
                borderRadius: c.radius,
                background: c.bg || 'transparent',
              }}
            >
              <img src={c.img} alt={c.label} />
            </div>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
