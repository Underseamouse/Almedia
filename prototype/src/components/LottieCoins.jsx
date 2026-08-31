import { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

/*
  Стопка монет (Lottie). Данные сгенерированы из присланного icons8-coins.json —
  три варианта с разным количеством монет. play=true проигрывает ОДИН раз.

  Два нюанса, на которых уже спотыкались:
  1. onDone держим в ref — иначе новая функция на каждом рендере пересоздавала
     эффект и снимала слушатель 'complete'.
  2. lottie крутится на requestAnimationFrame, а он замораживается, когда
     вкладка скрыта: событие 'complete' тогда не приходит и цепочка
     Day 1 → Day 2 → Day 3 встаёт навсегда. Поэтому дублируем таймером на
     длительность анимации (op/fr) — что бы ни случилось, onDone придёт один раз.
*/
export default function LottieCoins({ data, play, size = 56, onDone }) {
  const host = useRef(null)
  const anim = useRef(null)
  const started = useRef(false)
  const doneOnce = useRef(false)
  const fallback = useRef(null)
  const doneCb = useRef(onDone)
  doneCb.current = onDone

  const finish = () => {
    if (doneOnce.current) return
    doneOnce.current = true
    if (fallback.current) clearTimeout(fallback.current)
    doneCb.current?.()
  }

  useEffect(() => {
    const a = lottie.loadAnimation({
      container: host.current,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      animationData: data,
    })
    anim.current = a
    a.goToAndStop(0, true)
    const handle = () => finish()
    a.addEventListener('complete', handle)
    return () => {
      a.removeEventListener('complete', handle)
      a.destroy()
      anim.current = null
      if (fallback.current) clearTimeout(fallback.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  useEffect(() => {
    if (!play || !anim.current || started.current) return
    started.current = true
    anim.current.goToAndPlay(0, true)
    // страховка: длительность ролика + запас
    const ms = ((data.op - data.ip) / (data.fr || 24)) * 1000 + 350
    fallback.current = setTimeout(() => {
      // догоняем финальный кадр, если rAF был заморожен
      anim.current?.goToAndStop(Math.max(0, (data.op - data.ip) - 1), true)
      finish()
    }, ms)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [play])

  return <div ref={host} style={{ width: size, height: size }} aria-hidden="true" />
}
