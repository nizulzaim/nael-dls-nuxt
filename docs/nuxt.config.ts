export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@nuxt/content', 'nuxt-icon', '../src/module'],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  naelDls: {
    colors: {
      primary: {
        DEFAULT: '#00A19C',
        50: '#5AFFFA',
        100: '#45FFF9',
        200: '#1CFFF8',
        300: '#00F3EB',
        400: '#00CAC4',
        500: '#00A19C',
        600: '#006966',
        700: '#00312F',
        800: '#000000',
        900: '#000000',
      }
    }
  },
  css: ['~/assets/css/tailwind.css', '~/assets/css/markdown.css'],
})
