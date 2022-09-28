import { VuesticPlugin } from 'vuestic-ui'
import 'vuestic-ui/css'
import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(VuesticPlugin)
})