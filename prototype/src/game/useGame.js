import { useEffect, useRef, useState } from 'react'
import {
  buildInitial, SCENES, ROWS, COLS, CELL, GAP,
} from './boardData.js'

const round2 = (n) => Math.round(n * 100) / 100
const rand = (a, b) => a + Math.random() * (b - a)

/*
  Движок хореографии match-3. Владеет доской и летящими монетами,
  проигрывает заскриптованные сцены из boardData → SCENES.
  Баланс живёт выше (в App) — сюда приходит onEarn(delta).
  enabled=false — сцена не стартует (карточка ещё не активна).
*/
export function useGame({ boardRef, walletRef, enabled = true, onEarn }) {
  const [tiles, setTiles] = useState(buildInitial)
  const [coins, setCoins] = useState([])

  const tilesRef = useRef(tiles)
  const earnedRef = useRef(0)
  const timers = useRef([])
  const started = useRef(false)
  const onEarnRef = useRef(onEarn)
  onEarnRef.current = onEarn
  // карточка ушла из центра — сцену дальше не гоняем и монеты не пускаем,
  // иначе они летели бы из-за левого края экрана
  const aliveRef = useRef(enabled)
  aliveRef.current = enabled

  const commit = (arr) => { tilesRef.current = arr; setTiles(arr) }
  const clone = () => tilesRef.current.map((t) => ({ ...t }))
  const at = (arr, r, c) => arr.find((t) => t.r === r && t.c === c && t.phase !== 'destroying')

  const wait = (ms) =>
    new Promise((res) => { timers.current.push(setTimeout(res, ms)) })

  // — экранные координаты центра клетки / кошелька (viewport)
  const cellCenter = (r, c) => {
    const b = boardRef.current.getBoundingClientRect()
    return { x: b.left + c * (CELL + GAP) + CELL / 2, y: b.top + r * (CELL + GAP) + CELL / 2 }
  }
  const walletCenter = () => {
    const w = walletRef.current.getBoundingClientRect()
    return { x: w.left + w.width / 2, y: w.top + w.height / 2 }
  }

  // — свап двух фишек
  const swap = async (a, b) => {
    const arr = clone()
    const ta = at(arr, a.r, a.c)
    const tb = at(arr, b.r, b.c)
    if (ta && tb) {
      ;[ta.r, tb.r] = [tb.r, ta.r]
      ;[ta.c, tb.c] = [tb.c, ta.c]
    }
    commit(arr)
    await wait(460)
  }

  const markDestroy = (cells) => {
    const arr = clone()
    cells.forEach(({ r, c }) => { const t = at(arr, r, c); if (t) t.phase = 'destroying' })
    commit(arr)
  }
  const removeDestroyed = () => commit(clone().filter((t) => t.phase !== 'destroying'))

  // — гравитация + доспавн новых сверху
  const gravityRefill = (refill) => {
    const arr = clone()
    for (let c = 0; c < COLS; c++) {
      const col = arr.filter((t) => t.c === c).sort((p, q) => p.r - q.r)
      let rr = ROWS - 1
      for (let i = col.length - 1; i >= 0; i--) col[i].r = rr--
      const spec = refill[c]
      if (spec != null) {
        const types = Array.isArray(spec) ? spec : [spec]
        for (let i = 0; i < types.length; i++) {
          arr.push({ id: `n${c}-${i}-${Date.now()}`, type: types[i], r: i, c, phase: 'idle', spawn: true })
        }
      }
    }
    commit(arr)
  }

  // — монеты из клеток матча летят по дуге в кошелёк
  const spawnCoins = (cells, count, delta) => {
    if (!aliveRef.current) return
    if (!walletRef.current || !boardRef.current) return
    const wallet = walletCenter()
    const batch = []
    for (let k = 0; k < count; k++) {
      const cell = cells[k % cells.length]
      const from = cellCenter(cell.r, cell.c)
      const dx = wallet.x - from.x
      const dy = wallet.y - from.y
      const bow = rand(30, 66) * (from.x <= wallet.x ? -1 : 1)
      const id = `c${k}-${Date.now()}`
      const delay = k * 70
      batch.push({
        id, x0: from.x, y0: from.y, x1: wallet.x, y1: wallet.y,
        midX: from.x + dx * 0.5 + bow, midY: from.y + dy * 0.42 - rand(10, 40), delay,
      })
      timers.current.push(setTimeout(() => {
        if (k === count - 1) onEarnRef.current?.(delta)
        setCoins((cs) => cs.filter((c) => c.id !== id))
      }, delay + 620))
    }
    setCoins((cs) => [...cs, ...batch])
  }

  const matchDestroy = async (scene) => {
    markDestroy(scene.match)
    await wait(480)
    const delta = round2(scene.target - earnedRef.current)
    earnedRef.current = scene.target
    spawnCoins(scene.match, scene.coins, delta)
    removeDestroyed()
    await wait(scene.coins * 70 + 720)
  }

  useEffect(() => {
    if (!enabled || started.current) return
    started.current = true
    let alive = true
    const run = async () => {
      await wait(700)
      for (let s = 0; s < SCENES.length; s++) {
        if (!alive || !aliveRef.current) return
        const scene = SCENES[s]
        await swap(scene.swap[0], scene.swap[1])
        await wait(240)
        await matchDestroy(scene)
        await gravityRefill(scene.refill)
        await wait(s === 0 ? 1600 : 400)
      }
    }
    run()
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled])

  useEffect(() => () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }, [])

  return { tiles, coins }
}
