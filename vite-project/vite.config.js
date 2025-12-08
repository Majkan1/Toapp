import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Ustaw `base` na `/<twoje-repo>/` aby zasoby działały na GitHub Pages
  base: '/<twoje-repo>/',
  plugins: [react()],
})
