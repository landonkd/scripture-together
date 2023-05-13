// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	app: {
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
      theme_color: '#1D2123',
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
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
			registerPlugin: false, // Disables this plugin
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  }
})