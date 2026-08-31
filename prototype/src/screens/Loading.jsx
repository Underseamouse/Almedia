import { useEffect } from 'react'
import mark from '../assets/logo-mark.svg'
import './Loading.css'

/*
  Экран загрузки (Figma 283-4239): по центру знак Freecash,
  вокруг — вращающаяся зелёная дуга. Через `ms` уходит дальше.
*/
export default function Loading({ onDone, ms = 2000 }) {
  useEffect(() => {
    const t = setTimeout(onDone, ms)
    return () => clearTimeout(t)
  }, [onDone, ms])

  return (
    <div className="loading">
      <div className="loading-mark">
        <svg className="loading-ring" viewBox="0 0 100 100" aria-hidden="true">
          <circle className="loading-ring-track" cx="50" cy="50" r="45" />
          <circle className="loading-ring-arc" cx="50" cy="50" r="45" />
        </svg>
        <img src={mark} alt="Freecash" className="loading-logo" />
      </div>
    </div>
  )
}
