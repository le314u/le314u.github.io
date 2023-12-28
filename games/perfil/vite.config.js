import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/games/perfil/dist', // ou '/Games/perfil/dist/' se necessário
  plugins: [react()],
  build: {
    minify: 'terser', // Use 'esbuild' para esbuild minifier
  },
})
