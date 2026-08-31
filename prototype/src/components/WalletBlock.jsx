import { useRef } from 'react'
import Wallet from './Wallet.jsx'
import './WalletBlock.css'

/*
  Кошелёк шаговых экранов: чип с балансом + свечение + строка снизу
  («+€X.XX» или «Ready to be withdrawn»). Строка ВЫЕЗЖАЕТ из-под виджета
  и уезжает обратно под него (маска + translateY), плавный transition.
  beam — опциональный BorderBeam поверх обводки.
*/
export default function WalletBlock({ walletRef, amount, pulse, plus, note, beam }) {
  const content = plus != null ? `+€${plus.toFixed(2)}` : note ?? null
  const isNote = plus == null && note != null
  const visible = content != null

  // держим последний непустой контент, чтобы доиграть уезд под виджет
  const last = useRef({ text: '', note: false })
  if (content != null) last.current = { text: content, note: isNote }
  const shown = last.current

  return (
    <div className="wallet-block">
      <span className="wallet-block-glow" />
      <Wallet ref={walletRef} amount={amount} pulse={pulse} beam={beam} />
      <div className={`wallet-reveal-slot ${visible ? 'is-visible' : ''}`}>
        <span className={`wallet-reveal ${shown.note ? 'wallet-note' : 'wallet-plus'}`}>
          {shown.text}
        </span>
      </div>
    </div>
  )
}
