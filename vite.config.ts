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
            pattern: /^https:\/\/scripture-together.netlify.app\/api/
          }),
          getCache({
            name: 'api-cache-2',
            pattern: /^https:\/\/scripture-together\.netlify\.app\/.*/i
          }),
          {
            urlPattern: ({ url }) => {
              return url.pathname.startsWith("/api");
            },
            handler: "CacheFirst" as const,
            options: {
              cacheName: "api-cache-3",
              cacheableResponse: {
                // statuses: [0, 200],
              },
            },
          },
          // {
          //   handler: 'NetworkOnly',
          //   urlPattern: /\/api\/.*\/*.json/,
          //   method: 'POST',
          //   options: {
          //     backgroundSync: {
          //       name: 'myQueueName',
          //       options: {
          //         maxRetentionTime: 24 * 60
          //       }
          //     }
          //   }
          // }
        ],
      },
    })
  ]
})
