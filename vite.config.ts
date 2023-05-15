import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: "CacheFirst" as const,
  options: {
    cacheName: name,
    expiration: {
      maxEntries: 500,
      maxAgeSeconds: 60 * 60 * 24 * 365 * 2 // 2 years
    },
    cacheableResponse: {
      statuses: [200]
    }
  }
});

export default defineConfig({
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          getCache({ 
            pattern: /^https:\/\/scripture-together.netlify.app\/api/, 
            name: "api-cache" 
          }),
        ],
      },
    })
  ]
})
