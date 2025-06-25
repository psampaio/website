// @ts-check
import {defineConfig} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import mdx from "@astrojs/mdx";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    output: "server",
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [react(), mdx(), keystatic()],
    adapter: node({
        mode: "standalone"
    })
});