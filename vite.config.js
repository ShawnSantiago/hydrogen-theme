import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import shopify from 'vite-plugin-shopify'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [shopify(),vue()],
  resolve: {
    alias: {
      'vue@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

