import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pavan-techno-constructions/',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})