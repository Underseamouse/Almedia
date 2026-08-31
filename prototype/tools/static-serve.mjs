/* Отдаёт docs/ по адресу /freecash-onboarding/ — так же, как GitHub Pages
   раздаёт project page. Нужен только для проверки сборки на подпути. */
import { createServer } from 'node:http'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const root = new URL('../../docs/', import.meta.url).pathname
const MOUNT = '/Almedia/'
const TYPES = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css',
  '.jpg':'image/jpeg', '.png':'image/png', '.svg':'image/svg+xml', '.json':'application/json' }

createServer((req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0])
  if (!url.startsWith(MOUNT)) { res.writeHead(404).end('вне подпути'); return }
  let rel = url.slice(MOUNT.length) || 'index.html'
  let file = join(root, rel)
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
  if (!existsSync(file)) { res.writeHead(404).end('нет файла: ' + rel); return }
  res.writeHead(200, { 'Content-Type': TYPES[extname(file)] || 'application/octet-stream' })
  res.end(readFileSync(file))
}).listen(4180, () => console.log('http://localhost:4180' + MOUNT))
