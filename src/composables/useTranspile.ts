import { useNuxt } from "@nuxt/kit";

export const useTranspile = () => {
  const nuxt = useNuxt();

  nuxt.options.build.transpile.push("@nael/dls-nuxt");
  nuxt.options.build.transpile.push("@nuxtjs/tailwindcss");
};
