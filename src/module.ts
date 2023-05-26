import { defineNuxtModule, installModule } from '@nuxt/kit'
import { NaelDlsOptions } from './runtime/types'
import { defaultColors } from './runtime/variables'
import { useCSS } from './composables/useCSS'
import { useTranspile } from './composables/useTranspile'
import { useComponents } from './composables/useComponents'
import { useComposables } from './composables/useComposables'
// Module options TypeScript interface definition
export default defineNuxtModule<NaelDlsOptions>({
  meta: {
    name: '@nael/dls-nuxt',
    configKey: 'NaelDls'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    css: true,
  },
  setup(options, nuxt) {
    installModule(require('@nuxtjs/tailwindcss'), {
      config: {
        content: ["./**/*.vue", "pages/**/*.vue"],
        darkMode: "class",
        theme: {
          extend: {
            maxWidth: {
              "8xl": "88rem",
            },
            fontFamily: {
              sans: ["Inter"],
              lexend: ["Lexend"],
            },
            colors: { ...defaultColors, ...options.colors }
          },
        },
        plugins: [require("@tailwindcss/forms")]
      },
    }, nuxt)
    useCSS(options)
    useComponents()
    useComposables()
    useTranspile()
  }
})
