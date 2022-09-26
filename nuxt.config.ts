import { defineNuxtConfig } from 'nuxt'
import { quasar } from '@quasar/vite-plugin'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', 
        'mdi/css/materialdesignicons.min.css',
        'primevue/resources/themes/saga-blue/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        '@quasar/extras/material-icons/material-icons.css',
        '~/assets/styles/quasar.sass' 
      ],
  build: {
    transpile: ['vuetify', 'primevue', ''],
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar.variables.sass',
      }),
    ],
  },
})
