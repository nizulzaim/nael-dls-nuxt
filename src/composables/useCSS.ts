import { createResolver, useNuxt } from "@nuxt/kit";
import { NaelDlsOptions } from "../runtime/types";

/** Register CSS modules */
export const useCSS = (options: NaelDlsOptions) => {
  const { resolve } = createResolver(import.meta.url);
  const nuxt = useNuxt();

  if (options.css) {
    nuxt.options.css.push(resolve("../assets/scss/main.scss"));
  }
};
