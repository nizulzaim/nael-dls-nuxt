import { addComponentsDir, createResolver } from "@nuxt/kit";

export const useComponents = () => {
  const { resolve } = createResolver(import.meta.url);
  addComponentsDir({
    path: resolve("../runtime/components"),
    prefix: 'Nl',
  });
};