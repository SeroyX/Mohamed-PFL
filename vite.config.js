import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ })
  ],
  // Automatically use correct base path:
  // - Development: '/' (for local testing)
  // - Production build: '/' (for Vercel deployment)
  base: '/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
}))
