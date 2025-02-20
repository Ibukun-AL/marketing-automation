import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar()
  ],
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
  },
})