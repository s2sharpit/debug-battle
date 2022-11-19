// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/debug-battle/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        codezone: resolve(__dirname, 'codezone.html'),
      }
    }
  }
})
