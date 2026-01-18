// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  // Canonical production URL (used by Astro for sitemap, canonical helpers, etc.)
  site: "https://www.carlsbadfixit.com",
  // Match your /services/, /contact/, etc. URL style
  trailingSlash: "always",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("404"),
    }),
    partytown({
      config: {
        forward: ["dataLayer.push", "gtag"],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
