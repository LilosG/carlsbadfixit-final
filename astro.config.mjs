// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://www.carlsbadfixit.com",
  trailingSlash: "always",
  integrations: [
    sitemap({ filter: (page) => !page.includes("404"), changefreq: "weekly", priority: 0.7, lastmod: new Date() }),
    mdx(),
  ],
  vite: { plugins: [tailwindcss()] },
});
