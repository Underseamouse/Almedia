import { forwardRef, useEffect, useRef } from 'react'
import './Wallet.css'

/*
  Чип баланса (Figma 214:9615). Счётчик — number pop-in на CSS:
  один узел с key={text}, React пересоздаёт его при смене суммы и
  CSS-анимация проигрывает blur + Y-bob.

  Framer здесь был снят намеренно: AnimatePresence в этой версии не
  доигрывал exit, из-за чего в DOM копились узлы (€0 поверх €1.50/€4.00
  с opacity 0) и виджет показывал устаревшую сумму.
*/
function Counter({ value }) {
  const text = value === 0 ? '€0' : `€${value.toFixed(2)}`
  return (
    <span className="wallet-amount-slot">
      {/* невидимый sizer в потоке — задаёт ширину под текущий текст */}
      <span className="wallet-sizer" aria-hidden="true">{text}</span>
      <span className="wallet-amount" key={text}>{text}</span>
    </span>
  )
}

const Wallet = forwardRef(function Wallet({ amount, pulse, beam }, ref) {
  const chip = useRef(null)

  // пружинный «вздох» при приёме монеты — перезапускаем CSS-анимацию
  useEffect(() => {
    const el = chip.current
    if (!el || !pulse) return
    el.classList.remove('is-pulse')
    void el.offsetWidth            // reflow, чтобы анимация стартовала заново
    el.classList.add('is-pulse')
  }, [pulse])

  return (
    <div
      className="wallet-chip"
      ref={(node) => {
        chip.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
    >
      <Counter value={amount} />
      {beam}
    </div>
  )
})

export default Wallet
