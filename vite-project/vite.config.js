import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Base dla GitHub Pages
  base: '/Toapp/',
  plugins: [react()],
})
