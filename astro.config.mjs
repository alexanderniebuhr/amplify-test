// @ts-check
import { defineConfig } from 'astro/config';
import amplify from "@craftlions/astro-adapter";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: amplify(),
  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()]
  }
});