import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // racine du projet
  build: {
    outDir: 'dist',
  },
})
