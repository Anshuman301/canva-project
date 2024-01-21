import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/canva-project/',
  plugins: [react()],
  server: {
    port: 9000,
    open: true
  }
})
