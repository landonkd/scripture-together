import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'

const getCache = ({ name, pattern }: any) => ({
  urlPattern: pattern,
  handler: "CacheFirst" as const,
  options: {
    cacheName: name,
    cacheableResponse: {
      statuses: [200]
    }
  }
});

export default defineConfig({
  plugins: [
    VitePWA({ 
      workbox: {
        runtimeCaching: [
          getCache({ 
            name: 'api-cache',
            pattern: /^https:\/\/scripture-together.netlify.app\/api\/api\/.*/i
          }),
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith("/api");
            },
            handler: "CacheFirst" as const,
            options: {
              cacheName: "api-cache-2",
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
    })
  ]
})
