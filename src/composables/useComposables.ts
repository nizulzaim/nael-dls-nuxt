

import { addImportsDir, createResolver } from "@nuxt/kit";

export const useComposables = () => {
  const resolver = createResolver(import.meta.url)
  addImportsDir(resolver.resolve('../runtime/composables'))
};