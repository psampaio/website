// @ts-check
import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
  },
  // integrations: [react(), mdx(), ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()])],
  integrations: [react(), mdx()],
});