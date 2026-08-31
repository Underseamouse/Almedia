/*
  Кладёт свежую сборку в docs/ — именно её раздаёт GitHub Pages
  (Settings → Pages → Deploy from a branch → main / docs).
  dist/ в гите не лежит, docs/ лежит: Pages читает файлы из ветки, а не из CI.
*/
import { rmSync, cpSync, writeFileSync, existsSync, renameSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

// docs/ лежит в корне репозитория, на уровень выше prototype/ —
// GitHub Pages раздаёт именно корневую docs/
const proto = new URL('../', import.meta.url).pathname
const dist = proto + 'dist'
const docs = new URL('../../docs', import.meta.url).pathname

if (!existsSync(dist)) {
  console.error('нет dist/ — сначала vite build')
  process.exit(1)
}

/* Сносим docs целиком, но сначала уводим в сторону docs/storybook:
   он собирается отдельной командой и к этой сборке отношения не имеет. */
const sb = docs + '/storybook'
let parked = null
if (existsSync(sb)) {
  parked = join(mkdtempSync(join(tmpdir(), 'sb-')), 'storybook')
  renameSync(sb, parked)
}

rmSync(docs, { recursive: true, force: true })
cpSync(dist, docs, { recursive: true })

if (parked) renameSync(parked, sb)

// без этого Pages прогоняет папку через Jekyll и режет файлы на _underscore
writeFileSync(docs + '/.nojekyll', '')

console.log(parked ? 'docs/ обновлён из dist/ (storybook сохранён)' : 'docs/ обновлён из dist/')
