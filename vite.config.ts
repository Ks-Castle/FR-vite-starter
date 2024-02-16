/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { VitePWA } from 'vite-plugin-pwa'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      injectRegister: 'auto'
    }),
    svgr()
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/*.test.(ts|tsx)']
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        sw: './sw.js'
      }
    }
  }
})
