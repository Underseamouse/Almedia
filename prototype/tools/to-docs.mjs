/*
  Кладёт свежую сборку в docs/ — именно её раздаёт GitHub Pages
  (Settings → Pages → Deploy from a branch → main / docs).
  dist/ в гите не лежит, docs/ лежит: Pages читает файлы из ветки, а не из CI.
*/
import { rmSync, cpSync, writeFileSync, existsSync } from 'node:fs'

// docs/ лежит в корне репозитория, на уровень выше prototype/ —
// GitHub Pages раздаёт именно корневую docs/
const proto = new URL('../', import.meta.url).pathname
const dist = proto + 'dist'
const docs = new URL('../../docs', import.meta.url).pathname

if (!existsSync(dist)) {
  console.error('нет dist/ — сначала vite build')
  process.exit(1)
}

rmSync(docs, { recursive: true, force: true })
cpSync(dist, docs, { recursive: true })

// без этого Pages прогоняет папку через Jekyll и режет файлы на _underscore
writeFileSync(docs + '/.nojekyll', '')

console.log('docs/ обновлён из dist/')
