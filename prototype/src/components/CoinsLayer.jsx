import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import './CoinsLayer.css'

// Монеты летят в координатах вьюпорта → портал в body, чтобы их не
// обрезал overflow телефона и не смещал transform родителей.
export default function CoinsLayer({ coins }) {
  return createPortal(
    <div className="coins-layer">
      {coins.map((c) => (
        <motion.div
          key={c.id}
          className="coin"
          initial={{ x: c.x0, y: c.y0, scale: 0.5, opacity: 0 }}
          animate={{
            x: [c.x0, c.midX, c.x1],
            y: [c.y0, c.midY, c.y1],
            scale: [0.45, 1, 0.4],
            opacity: [0, 1, 0.85],
          }}
          transition={{
            duration: 0.62,
            delay: c.delay / 1000,
            ease: [0.35, 0, 0.25, 1],
            times: [0, 0.42, 1],
          }}
        >
          <span className="coin-face">€</span>
        </motion.div>
      ))}
    </div>,
    document.body,
  )
}
