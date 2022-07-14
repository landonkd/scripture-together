import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        '@/assets/scss/main.css'
    ],
    modules: [
        '@nuxtjs/color-mode',
        'nuxt-progress'],
        progress: {
            // Default: 2px
            height: '2px',
            // Default: #29D
            color: '#1AAB8B',
            // NProgress options: https://www.npmjs.com/package/nprogress#configuration
            options: {
            showSpinner: false
        }
    },
})
