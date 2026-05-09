// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Canonical production URL (used by Astro for sitemap, canonical helpers, etc.)
  site: "https://www.carlsbadfixit.com",
  // Match your /services/, /contact/, etc. URL style
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("404"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
