import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // относительные пути: сборка одинаково работает и с корня домена,
  // и из подпапки (GitHub Pages project page и т.п.)
  base: './',
  plugins: [react()],
  server: { host: true, port: 5173 },
})
