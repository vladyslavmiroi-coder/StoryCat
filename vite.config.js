import { defineConfig } from 'vite'
import istanbul from 'vite-plugin-istanbul'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'cypress'],
      extension: ['.js', '.jsx'],
      requireEnv: false,
    }),
  ],
})
