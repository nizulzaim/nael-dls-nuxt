export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxt/content', 'nuxt-icon', '../src/module'],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['~/assets/css/tailwind.css', '~/assets/css/markdown.css'],
})
