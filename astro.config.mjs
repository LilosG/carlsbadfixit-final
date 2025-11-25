// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Canonical production URL (used by Astro for sitemap, canonical helpers, etc.)
  site: 'https://www.carlsbadfixit.com',
  // Match your /services/, /contact/, etc. URL style
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
