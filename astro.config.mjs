// @ts-check
import { defineConfig } from 'astro/config';
import amplify from "@craftlions/astro-adapter";
// https://astro.build/config
export default defineConfig({
    adapter: amplify()
});
