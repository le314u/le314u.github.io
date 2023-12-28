import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/dist', // ou '/Games/perfil/dist/' se necessário
  plugins: [react()],
})