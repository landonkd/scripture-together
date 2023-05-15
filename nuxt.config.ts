// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Scripture Together',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#111518' },
        { name: 'description', content: 'Read scripture together.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg', href: 'favicon.svg' },
        { rel: 'apple-touch-icon', href: '/pwa-512x512.png', sizes: '512x512' },
        { rel: 'mask-icon', type: 'image/svg', href: 'favicon.svg', color: '#FFF' }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
	css: [
		'@/assets/css/main.css'
	],
	modules: [
		'@vite-pwa/nuxt'
	],
	pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Scripture Together',
      short_name: 'ScriptureTogether',
      start_url: '/',
      display: 'standalone',
      background_color: "#111518",
      theme_color: '#111518',
      lang: 'en',
      scope: '/',
      description: 'Read scripture together.',
      icons: [
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
      ],
      dir: 'ltr',
      orientation: 'portrait',
      categories: [
        'lifestyle'
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg}'],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 86400,
			// registerPlugin: false, // Disables this plugin
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  }
})