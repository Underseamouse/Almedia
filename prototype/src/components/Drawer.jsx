import { useEffect, useRef, useState } from 'react'
import './Drawer.css'

/*
  Шторка (Figma 293-11481): затемнение с блюром + лист #141a26 со
  скруглённым верхом, выезжает снизу.

  Открытие/закрытие — на CSS-анимациях, а не на transition + флаг в стейте:
  флагу нужен второй тик (rAF), который замораживается при скрытой вкладке,
  и шторка тогда «появлялась» без анимации. CSS-анимация стартует сама
  на монтировании класса.
*/
export default function Drawer({ open, top = 108, onClose, showClose = true, children }) {
  const [mounted, setMounted] = useState(open)
  const [closing, setClosing] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    clearTimeout(timer.current)
    if (open) { setClosing(false); setMounted(true); return }
    if (!mounted) return
    setClosing(true)
    timer.current = setTimeout(() => { setMounted(false); setClosing(false) }, 400)
    return () => clearTimeout(timer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  useEffect(() => () => clearTimeout(timer.current), [])

  if (!mounted) return null

  return (
    <div className={`drawer${closing ? ' is-closing' : ''}`}>
      <div className="drawer-scrim" onClick={onClose} />
      <div className="drawer-sheet" style={{ top }} role="dialog" aria-modal="true">
        {showClose && (
          <button className="drawer-close" onClick={onClose} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}
        {children}
      </div>
    </div>
  )
}
