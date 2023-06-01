import { addComponentsDir, addImportsDir, createResolver, defineNuxtModule, installModule } from '@nuxt/kit'
import { NaelDlsOptions } from './runtime/types'
import { defaultColors } from './runtime/variables'
import tailwindForms from "@tailwindcss/forms"

// Module options TypeScript interface definition
export default defineNuxtModule<NaelDlsOptions>({
  meta: {
    name: 'nael-dls-nuxt',
    configKey: 'naelDls'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    css: true,
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);

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
              poppins: ["Poppins"],
            },
            colors: { ...defaultColors, ...options.colors }
          },
        },
        plugins: [tailwindForms]
      },
    }, nuxt)

    // css declaration
    if (options.css) {
      nuxt.options.css.push(resolve("./runtime/assets/style.css"));
    }

    // components declaration
    addComponentsDir({
      path: resolve("./runtime/components"),
      prefix: 'Nl',
    });

    // composables declaration
    addImportsDir(resolve('./runtime/composables'))

    // transpile declaration
    nuxt.options.build.transpile.push("nael-dls-nuxt");
    nuxt.options.build.transpile.push("@nuxtjs/tailwindcss");
  }
})
