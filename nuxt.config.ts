import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      jsonData: true,
      baseURL: 'http://192.168.1.30:5000/'
    },
  },
  ssr: false,
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', href: '/LOEClipped.png' }]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'slide-left',
      mode: 'out-in' // default
    }
  },
  components: [
    { path: '~/components', pathPrefix: false },
    { path: '~/components/booking', prefix: 'Booking', pathPrefix: false },
    { path: '~/components/booking/details', prefix: 'BookingDetails', pathPrefix: false },
    { path: '~/components/booking/reservation', prefix: 'Reservation', pathPrefix: false },
    { path: '~/components/booking/reservation/bus', prefix: 'BusReservation', pathPrefix: false },
    { path: '~/components/booking/reservation/bus/types', pathPrefix: false },
    { path: '~/components/booking/reservation/bus/details', prefix: 'Bus', pathPrefix: false },
    { path: '~/components/base', prefix: 'Base', pathPrefix: false },
    { path: '~/components/event components', pathPrefix: false },
    { path: '~/components/global components', pathPrefix: false },
  ],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    '@sidebase/nuxt-session',
    '@nuxtjs/google-fonts',
    //...
  ],
  googleFonts: {
    preload: true,
    preconnect: true,
    display: 'swap',
    useStylesheet: true,
    families: {
      Montserrat: [500],
      'Rethink+Sans': {
        ital: 1,
        wght: [400]
      }
    }
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  session: {
    session: {
      expiryInSeconds: 1000 * 60,
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
})
