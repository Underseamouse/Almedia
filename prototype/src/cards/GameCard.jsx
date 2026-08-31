import { useRef } from 'react'
import GlassCard from '../components/GlassCard.jsx'
import Board from '../components/Board.jsx'
import CoinsLayer from '../components/CoinsLayer.jsx'
import { useGame } from '../game/useGame.js'
import badge from '../assets/game/badge.png'
import './cards.css'

/*
  Карточка игры (Figma 283-4649): зелёное стекло, аватар игры сверху,
  доска 4×4 и подпись. Логика match-3 прежняя — useGame.
*/
export default function GameCard({ walletRef, active, onEarn }) {
  const boardRef = useRef(null)
  const { tiles, coins } = useGame({ boardRef, walletRef, enabled: active, onEarn })

  return (
    <div className="card-wrap">
      <img className="card-badge" src={badge} alt="" />
      <GlassCard
        className="glass-card--game"
        tint="rgba(1, 214, 118, 0.65)"
        blobA="rgba(170, 255, 215, 0.34)"
        blobB="rgba(0, 45, 30, 0.55)"
        bottom="Play on your own pace"
      >
        <Board ref={boardRef} tiles={tiles} />
      </GlassCard>
      <CoinsLayer coins={coins} />
    </div>
  )
}
