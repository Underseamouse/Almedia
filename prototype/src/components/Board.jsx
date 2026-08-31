import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { TYPES, CELL, BOARD_W, BOARD_H, xOf, yOf } from '../game/boardData.js'
import './Board.css'

// Разлёт осколков при уничтожении (масштаб под клетку 48px)
const PARTICLES = [
  { dx: -24, dy: -24, rot: -160, gold: false },
  { dx: 24, dy: -24, rot: 160, gold: true },
  { dx: -34, dy: -5, rot: -120, gold: false },
  { dx: 34, dy: -5, rot: 120, gold: false },
  { dx: -27, dy: 16, rot: -200, gold: true },
  { dx: 27, dy: 16, rot: 200, gold: false },
  { dx: -11, dy: -32, rot: -90, gold: false },
  { dx: 11, dy: -32, rot: 90, gold: true },
]
const SPARKLES = [
  { x: -17, y: -16 }, { x: 19, y: -11 }, { x: -13, y: 17 }, { x: 16, y: 16 },
]

function Tile({ t, index }) {
  const def = TYPES[t.type]
  const destroying = t.phase === 'destroying'
  return (
    <motion.div
      className={`tile ${destroying ? 'tile--destroy' : ''}`}
      style={{ width: CELL, height: CELL }}
      initial={t.spawn ? { x: xOf(t.c), y: yOf(t.r) - CELL * 1.8, opacity: 0 } : false}
      animate={{ x: xOf(t.c), y: yOf(t.r), opacity: 1 }}
      transition={{ type: 'spring', stiffness: 380, damping: 24, mass: 0.8 }}
    >
      <div
        className={`tile-face ${destroying ? 'is-destroy' : ''}`}
        style={{ animationDelay: `${(index % 7) * 0.35}s` }}
      >
        <div
          className="tile-glow"
          style={{ background: `radial-gradient(circle, ${def.glow}, transparent 70%)` }}
        />
        <img className="tile-img" src={def.img} alt="" draggable="false" />
      </div>

      {destroying && (
        <div className="burst" style={{ '--glow': def.glow }}>
          <span className="burst-ring" />
          <span className="burst-flash" />
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className={`spark ${p.gold ? 'spark--gold' : ''}`}
              style={{ '--dx': `${p.dx}px`, '--dy': `${p.dy}px`, '--rot': `${p.rot}deg` }}
            />
          ))}
          {SPARKLES.map((s, i) => (
            <span key={`s${i}`} className="sparkle" style={{ '--sx': `${s.x}px`, '--sy': `${s.y}px` }} />
          ))}
        </div>
      )}
    </motion.div>
  )
}

const Board = forwardRef(function Board({ tiles }, ref) {
  return (
    <div className="board" ref={ref} style={{ width: BOARD_W, height: BOARD_H }}>
      {tiles.map((t, i) => (
        <Tile key={t.id} t={t} index={i} />
      ))}
    </div>
  )
})

export default Board
