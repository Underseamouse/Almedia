/*
  Собирает dist/ в один самодостаточный HTML: CSS и JS уезжают внутрь тегами,
  ассеты — в data: URI. Нужен, чтобы прототип открывался с любого хоста
  (и просто с диска), без сервера и без относительных путей.
  Шрифт Poppins остаётся ссылкой на Google Fonts — единственная внешняя зависимость.
*/
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname, basename } from 'node:path'

const dist = new URL('../dist/', import.meta.url).pathname
const assetsDir = join(dist, 'assets')

const MIME = {
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png',
  '.svg': 'image/svg+xml', '.gif': 'image/gif', '.webp': 'image/webp',
  '.json': 'application/json', '.woff2': 'font/woff2', '.woff': 'font/woff',
}

// имя файла → data: URI
const dataUri = new Map()
for (const f of readdirSync(assetsDir)) {
  const ext = extname(f)
  if (ext === '.js' || ext === '.css') continue
  const mime = MIME[ext]
  if (!mime) { console.warn('пропущен (неизвестный тип):', f); continue }
  const b64 = readFileSync(join(assetsDir, f)).toString('base64')
  dataUri.set(f, `data:${mime};base64,${b64}`)
}

const jsFile = readdirSync(assetsDir).find((f) => f.endsWith('.js'))
const cssFile = readdirSync(assetsDir).find((f) => f.endsWith('.css'))

let js = readFileSync(join(assetsDir, jsFile), 'utf8')
let css = readFileSync(join(assetsDir, cssFile), 'utf8')

/* Vite ссылается на ассеты через new URL("file.jpg", import.meta.url).href.
   В инлайновом модуле import.meta.url — это адрес самой страницы, поэтому
   такие ссылки надо заменить на data: URI целиком, а не только базу. */
let hits = 0
js = js.replace(
  /new URL\(\s*[`'"]([^`'"]+)[`'"]\s*,\s*import\.meta\.url\s*\)\.href/g,
  (whole, file) => {
    const uri = dataUri.get(basename(file))
    if (!uri) { console.warn('нет ассета для', file); return whole }
    hits++
    return JSON.stringify(uri)
  },
)

// то же самое для url(...) в CSS
css = css.replace(/url\(\s*["']?\.?\/?([A-Za-z0-9_.-]+\.(?:jpg|jpeg|png|svg|gif|webp|woff2?))["']?\s*\)/g,
  (whole, file) => {
    const uri = dataUri.get(basename(file))
    return uri ? `url("${uri}")` : whole
  })

/* Подставляем через функцию-замену, а не строкой: в строковом replace
   последовательности $`, $&, $' — управляющие, а минифицированный JS полон
   и долларов, и бэктиков. Строкой это молча резало бандл на куски. */
const put = (text) => () => text

const html = readFileSync(join(dist, 'index.html'), 'utf8')
  .replace(/\s*<script type="module"[^>]*><\/script>/, '')
  .replace(/\s*<link rel="stylesheet"[^>]*href="\.\/assets\/[^"]*"[^>]*>/, '')
  .replace('</head>', put(`    <style>\n${css}\n    </style>\n  </head>`))
  .replace('</body>', put(`  <script type="module">\n${js}\n  </script>\n  </body>`))

const out = join(dist, '..', 'freecash-onboarding.html')
writeFileSync(out, html)
console.log(`ассетов вшито: ${dataUri.size}, ссылок заменено в JS: ${hits}`)
console.log(`${out} — ${(Buffer.byteLength(html) / 1048576).toFixed(2)} MB`)
