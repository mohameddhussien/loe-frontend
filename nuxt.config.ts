import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      jsonData: true,
      baseURL: 'http://192.168.1.23:5000/'
    },
  },
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', href: '/LOEClipped.png' }]
    }
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@sidebase/nuxt-session',
    // 'nuxt-aos',
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
