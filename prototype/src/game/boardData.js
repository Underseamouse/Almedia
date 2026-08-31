import tileA from '../assets/game/tile-a.png'
import tileB from '../assets/game/tile-b.png'
import tileC from '../assets/game/tile-c.png'
import tileD from '../assets/game/tile-d.png'

// Геометрия доски внутри карточки (Figma 283-4649: 4×4, клетка 48, gap 6)
export const COLS = 4
export const ROWS = 4
export const CELL = 48
export const GAP = 6
export const BOARD_W = COLS * CELL + (COLS - 1) * GAP // 210
export const BOARD_H = ROWS * CELL + (ROWS - 1) * GAP // 210

// Типы фишек: картинка + цвет свечения при уничтожении
export const TYPES = {
  a: { img: tileA, glow: '#ff3d7a' }, // розовое сердце
  b: { img: tileB, glow: '#2f9bff' }, // синий кластер
  c: { img: tileC, glow: '#ff9a3d' }, // оранжевый куб
  d: { img: tileD, glow: '#b34dff' }, // фиолетовый диск
}

// Стартовая раскладка (ряд 0 — сверху). Подобрана так, чтобы оба
// заскриптованных свапа давали чистый матч-3 и не возникало случайных троек.
const INITIAL = [
  ['b', 'a', 'b', 'a'],
  ['a', 'a', 'c', 'd'],
  ['d', 'b', 'a', 'b'],
  ['c', 'd', 'b', 'c'],
]

export function buildInitial() {
  let n = 0
  const tiles = []
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      tiles.push({ id: `t${n++}`, type: INITIAL[r][c], r, c, phase: 'idle' })
    }
  }
  return tiles
}

export const xOf = (c) => c * (CELL + GAP)
export const yOf = (r) => r * (CELL + GAP)

/*
  Хореография — две сцены. Всё детерминировано (без авто-детекта),
  раскладка и доспавн просчитаны так, чтобы после каждой сцены
  на доске не оставалось случайных троек.
*/
export const SCENES = [
  {
    // Сцена 1: свап по вертикали в колонке 2 → горизонтальная тройка 'a' в ряду 1
    swap: [{ r: 1, c: 2 }, { r: 2, c: 2 }],
    match: [{ r: 1, c: 0 }, { r: 1, c: 1 }, { r: 1, c: 2 }],
    matchType: 'a',
    target: 1.5,
    coins: 5,
    // колонки 0,1,2 теряют по фишке → по одной новой сверху.
    // b/d/c подобраны так, чтобы не дать тройку ни в ряду 0, ни в колонках.
    refill: { 0: 'b', 1: 'd', 2: 'c' },
  },
  {
    // Сцена 2: свап по горизонтали в ряду 2 → вертикальная тройка 'b' в колонке 0
    swap: [{ r: 2, c: 0 }, { r: 2, c: 1 }],
    match: [{ r: 0, c: 0 }, { r: 1, c: 0 }, { r: 2, c: 0 }],
    matchType: 'b',
    target: 4.0,
    coins: 6,
    // колонка 0 теряет 3 фишки → 3 новые сверху (ряды 0,1,2)
    refill: { 0: ['a', 'c', 'd'] },
  },
]
