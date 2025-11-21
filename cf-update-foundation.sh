#!/usr/bin/env bash
set -euo pipefail

echo "Updating Astro/Tailwind foundation and global layout…"

##
## 1) astro.config.mjs
##
cat <<'CONFIG' > astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Canonical production URL (used by Astro for sitemap, canonical helpers, etc.)
  site: 'https://carlsbadfixit.com',
  // Match your /services/, /contact/, etc. URL style
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});
CONFIG

##
## 2) src/styles/global.css
##   - Updated for Tailwind v4 (@import "tailwindcss")
##   - Centralized typography + link focus
##   - Shared .btn, .card, .section-* and .text-body-sm utilities
##
mkdir -p src/styles

cat <<'GLOBAL' > src/styles/global.css
@import "tailwindcss";

@layer base {
  :root {
    color-scheme: light;
    scroll-behavior: smooth;
  }

  body {
    @apply min-h-screen bg-cf-bg text-cf-text antialiased font-sans flex flex-col;
  }

  main {
    @apply flex-1;
  }

  h1 {
    @apply text-h1 font-semibold tracking-tight text-cf-text;
  }

  h2 {
    @apply text-h2 font-semibold tracking-tight text-cf-text;
  }

  h3 {
    @apply text-h3 font-semibold tracking-tight text-cf-text;
  }

  h4 {
    @apply text-lg font-semibold tracking-tight text-cf-text;
  }

  p {
    @apply text-base leading-relaxed text-cf-textMuted;
  }

  a {
    @apply text-cf-accentBlue no-underline underline-offset-4 transition-colors duration-150;
  }

  a:hover {
    @apply text-cf-primaryDark underline;
  }

  a:focus-visible {
    @apply outline-none ring-2 ring-offset-2 ring-cf-primaryDark;
  }

  section {
    @apply py-section md:py-section-lg;
  }

  .eyebrow {
    @apply text-xs font-semibold tracking-[0.16em] uppercase text-cf-accentBlue;
  }
}

@layer components {
  .btn {
    @apply inline-flex items-center justify-center gap-2 rounded-pill border border-transparent px-5 py-2.5 text-sm font-semibold tracking-tight shadow-soft transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-cf-primaryDark disabled:cursor-not-allowed disabled:opacity-60;
  }

  .btn-primary {
    @apply btn text-white bg-gradient-to-r from-cf-primary to-cf-warning shadow-cta hover:from-cf-primaryDark hover:to-cf-primaryDark;
  }

  .btn-secondary {
    @apply btn bg-cf-card text-cf-text border border-cf-borderSubtle hover:bg-cf-bg;
  }

  .btn-outline {
    @apply btn bg-transparent text-cf-text border border-cf-borderSubtle hover:bg-cf-card;
  }

  .btn-ghost {
    @apply btn border-none shadow-none bg-transparent text-cf-accentBlue hover:bg-cf-accentBlueSoft;
  }

  .card {
    @apply bg-cf-card rounded-card border border-cf-borderSubtle shadow-soft p-6;
  }

  .card-soft {
    @apply bg-cf-sandSoft rounded-card border border-transparent shadow-soft p-6;
  }

  .section-shell {
    @apply mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8;
  }

  .section-header {
    @apply max-w-2xl space-y-3;
  }

  .section-title {
    @apply text-h1 font-semibold text-cf-text;
  }

  .section-subtitle {
    @apply text-base text-cf-textMuted;
  }

  .badge {
    @apply inline-flex items-center rounded-pill bg-cf-accentBlueSoft px-3 py-1 text-xs font-medium text-cf-accentBlue;
  }

  .badge-muted {
    @apply inline-flex items-center rounded-pill bg-cf-sandSoft px-3 py-1 text-xs font-medium text-cf-textMuted;
  }

  .text-body-sm {
    @apply text-sm leading-relaxed text-cf-textMuted;
  }
}
GLOBAL

##
## 3) src/layouts/BaseLayout.astro
##   - Single source of truth for meta title/description
##   - Canonical URL based on Astro.site + Astro.url
##   - Robots control via noIndex
##   - Basic OG/Twitter tags for sharing
##
mkdir -p src/layouts

cat <<'BASE' > src/layouts/BaseLayout.astro
---
import "../styles/global.css";
import SiteHeader from "../components/SiteHeader.astro";
import SiteFooter from "../components/SiteFooter.astro";

export interface Props {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
}

const {
  title = "Carlsbad Fix It | Handyman Services in Carlsbad, CA",
  description = "Local handyman for home repairs, installations, and maintenance in Carlsbad, California.",
  canonical,
  noIndex = false
} = Astro.props;

const siteUrl = Astro.site?.toString() ?? "https://carlsbadfixit.com";
const defaultCanonical = new URL(Astro.url.pathname, siteUrl).toString();
const canonicalUrl = canonical ?? defaultCanonical;
const robots = noIndex ? "noindex,nofollow" : "index,follow";
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="robots" content={robots} />
    <link rel="canonical" href={canonicalUrl} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalUrl} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />

    <slot name="head" />
  </head>
  <body>
    <SiteHeader />
    <main class="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-10">
      <slot />
    </main>
    <SiteFooter />
  </body>
</html>
BASE

##
## 4) src/components/SiteHeader.astro
##   - Uses cf.* tokens instead of slate/sky palette
##   - Uses .btn-primary for the main CTA
##
mkdir -p src/components

cat <<'HEADER' > src/components/SiteHeader.astro
---
---
<header class="border-b border-cf-borderSubtle bg-cf-card/90 backdrop-blur">
  <div class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4">
    <a href="/" class="flex items-center gap-3">
      <div class="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-cf-primary to-cf-warning text-xs font-semibold text-white">
        CF
      </div>
      <div class="flex flex-col">
        <span class="text-sm font-semibold tracking-tight text-cf-text">
          Carlsbad Fix It
        </span>
        <span class="text-xs text-cf-textMuted">
          Local handyman in Carlsbad, CA
        </span>
      </div>
    </a>
    <div class="flex items-center gap-4">
      <nav class="hidden items-center gap-6 text-sm font-medium text-cf-textMuted md:flex">
        <a href="/services/" class="hover:text-cf-accentBlue">
          Services
        </a>
        <a href="/service-areas/" class="hover:text-cf-accentBlue">
          Service areas
        </a>
        <a href="/about/" class="hover:text-cf-accentBlue">
          About
        </a>
        <a href="/faq/" class="hover:text-cf-accentBlue">
          FAQ
        </a>
      </nav>
      <div class="flex items-center gap-3">
        <a
          href="tel:+18082266681"
          class="hidden text-xs font-medium text-cf-textMuted sm:inline"
        >
          (808) 226-6681
        </a>
        <a href="/contact/" class="btn-primary text-xs">
          Request a quote
        </a>
      </div>
    </div>
  </div>
</header>
HEADER

##
## 5) src/components/SiteFooter.astro
##   - Uses cf.footer/cf.footerMuted tokens
##   - Typography unified with design system
##
cat <<'FOOTER' > src/components/SiteFooter.astro
---
---
<footer class="border-t border-cf-footerMuted bg-cf-footer text-cf-textMuted">
  <div class="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between">
    <div class="space-y-3">
      <p class="text-sm font-semibold tracking-wide text-cf-accentBlue">
        Carlsbad Fix It
      </p>
      <p class="max-w-xs text-sm text-cf-textMuted">
        Local handyman serving Carlsbad and nearby North County San Diego communities with small home repairs and improvements.
      </p>
      <p class="text-xs text-cf-textMuted">
        3027 Greenwich St, Carlsbad, CA 92010
      </p>
    </div>
    <div class="flex flex-1 flex-wrap gap-10 text-sm">
      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-wide text-cf-textMuted">
          Site
        </p>
        <a href="/services/" class="block text-cf-textMuted hover:text-white">
          Services
        </a>
        <a href="/service-areas/" class="block text-cf-textMuted hover:text-white">
          Service areas
        </a>
        <a href="/about/" class="block text-cf-textMuted hover:text-white">
          About
        </a>
        <a href="/contact/" class="block text-cf-textMuted hover:text-white">
          Contact
        </a>
      </div>
      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-wide text-cf-textMuted">
          Support
        </p>
        <a href="/faq/" class="block text-cf-textMuted hover:text-white">
          FAQ
        </a>
        <a href="/who-we-work-with/" class="block text-cf-textMuted hover:text-white">
          Who we work with
        </a>
      </div>
      <div class="space-y-2">
        <p class="text-xs font-semibold uppercase tracking-wide text-cf-textMuted">
          Contact
        </p>
        <p class="text-sm text-cf-textMuted">
          Call or text:
          <a href="tel:+18082266681" class="ml-1 hover:text-white">
            (808) 226-6681
          </a>
        </p>
        <p class="text-sm text-cf-textMuted">
          Email:
          <a href="mailto:carlsbadfixit@gmail.com" class="ml-1 hover:text-white">
            carlsbadfixit@gmail.com
          </a>
        </p>
        <p class="text-xs text-cf-textMuted">
          Typical response during normal business hours.
        </p>
      </div>
    </div>
  </div>
  <div class="border-t border-cf-footerMuted">
    <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-cf-textMuted md:flex-row">
      <p>
        © {new Date().getFullYear()} Carlsbad Fix It. All rights reserved.
      </p>
      <p>
        Website for Carlsbad Fix It.
      </p>
    </div>
  </div>
</footer>
FOOTER

echo "Done. Astro config, global styles, BaseLayout, SiteHeader, and SiteFooter updated."
