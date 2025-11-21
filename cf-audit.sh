#!/usr/bin/env bash
set -e

OUT="cf-audit-$(date +%Y%m%d-%H%M%S).txt"

{
  echo "=== PWD ==="
  pwd
  echo

  echo "=== FILE: package.json ==="
  if [ -f package.json ]; then cat package.json; else echo "NOT FOUND"; fi
  echo

  echo "=== FILE: astro.config.* ==="
  for f in astro.config.mjs astro.config.ts astro.config.js; do
    if [ -f "$f" ]; then
      echo "--- $f ---"
      cat "$f"
      echo
    fi
  done
  echo

  echo "=== FILE: tailwind.config.* ==="
  for f in tailwind.config.mjs tailwind.config.ts tailwind.config.js tailwind.config.cjs; do
    if [ -f "$f" ]; then
      echo "--- $f ---"
      cat "$f"
      echo
    fi
  done
  echo

  echo "=== FILE: src/styles/global.css (or main.css / base.css) ==="
  for f in src/styles/global.css src/styles/main.css src/styles/base.css; do
    if [ -f "$f" ]; then
      echo "--- $f ---"
      cat "$f"
      echo
    fi
  done
  echo

  echo "=== LAYOUTS (src/layouts) ==="
  if [ -d src/layouts ]; then ls -R src/layouts; else echo "NOT FOUND"; fi
  echo

  echo "=== FILE: src/layouts/BaseLayout.astro ==="
  if [ -f src/layouts/BaseLayout.astro ]; then cat src/layouts/BaseLayout.astro; else echo "NOT FOUND"; fi
  echo

  echo "=== DATA MODULES ==="
  echo "--- src/data/services.ts ---"
  if [ -f src/data/services.ts ]; then cat src/data/services.ts; else echo "NOT FOUND"; fi
  echo
  echo "--- src/data/service-areas.ts ---"
  if [ -f src/data/service-areas.ts ]; then cat src/data/service-areas.ts; else echo "NOT FOUND"; fi
  echo

  echo "=== TREE: src/components ==="
  if [ -d src/components ]; then ls -R src/components; else echo "NOT FOUND"; fi
  echo

  echo "=== COMPONENTS (header/footer/cards) ==="
  for f in \
    src/components/SiteHeader.astro \
    src/components/SiteFooter.astro \
    src/components/ServiceCard.astro \
    src/components/AreaCard.astro
  do
    if [ -f "$f" ]; then
      echo "--- $f ---"
      cat "$f"
      echo
    fi
  done
  echo

  echo "=== PAGES: HOME & SERVICES ==="
  echo "--- src/pages/index.astro (HOME) ---"
  if [ -f src/pages/index.astro ]; then cat src/pages/index.astro; else echo "NOT FOUND"; fi
  echo

  echo "--- src/pages/services/index.astro ---"
  if [ -f src/pages/services/index.astro ]; then cat src/pages/services/index.astro; else echo "NOT FOUND"; fi
  echo

  echo "--- src/pages/services/[service].astro ---"
  if [ -f "src/pages/services/[service].astro" ]; then cat "src/pages/services/[service].astro"; else echo "NOT FOUND"; fi
  echo

  echo "=== PAGES: SERVICE AREAS ==="
  echo "--- src/pages/service-areas/index.astro ---"
  if [ -f src/pages/service-areas/index.astro ]; then cat src/pages/service-areas/index.astro; else echo "NOT FOUND"; fi
  echo

  echo "--- src/pages/service-areas/[city].astro ---"
  if [ -f "src/pages/service-areas/[city].astro" ]; then cat "src/pages/service-areas/[city].astro"; else echo "NOT FOUND"; fi
  echo

  echo "--- src/pages/service-areas/[city]/index.astro ---"
  if [ -f "src/pages/service-areas/[city]/index.astro" ]; then cat "src/pages/service-areas/[city]/index.astro"; else echo "NOT FOUND"; fi
  echo

  echo "--- src/pages/service-areas/[city]/[service].astro ---"
  if [ -f "src/pages/service-areas/[city]/[service].astro" ]; then cat "src/pages/service-areas/[city]/[service].astro"; else echo "NOT FOUND"; fi
  echo

  echo "=== PAGES: ABOUT / FAQ / WHO-WE-WORK-WITH / CONTACT ==="
  echo "--- src/pages/about.astro ---"
  if [ -f src/pages/about.astro ]; then cat src/pages/about.astro; else echo "NOT FOUND"; fi
  echo

  echo "--- src/pages/faq.astro ---"
  if [ -f src/pages/faq.astro ]; then cat src/pages/faq.astro; else echo "NOT FOUND"; fi
  echo

  echo "--- src/pages/who-we-work-with.astro ---"
  if [ -f src/pages/who-we-work-with.astro ]; then cat src/pages/who-we-work-with.astro; else echo "NOT FOUND"; fi
  echo

  echo "--- src/pages/contact.astro ---"
  if [ -f src/pages/contact.astro ]; then cat src/pages/contact.astro; else echo "NOT FOUND"; fi
  echo

  echo "=== PAGES: 404 ==="
  echo "--- src/pages/404.astro or src/pages/[...404].astro ---"
  if [ -f src/pages/404.astro ]; then cat src/pages/404.astro; \
  elif [ -f "src/pages/[...404].astro" ]; then cat "src/pages/[...404].astro"; \
  else echo "NOT FOUND"; fi
  echo

  echo "=== TREE: src/lib & src/utils (if any) ==="
  if [ -d src/lib ]; then ls -R src/lib; else echo "src/lib NOT FOUND"; fi
  if [ -d src/utils ]; then ls -R src/utils; else echo "src/utils NOT FOUND"; fi
  echo

  echo "=== ANY SEO/UTILITY FILES (seo.ts / seo.mts / seo.js) ==="
  for f in src/lib/seo.* src/utils/seo.*; do
    if [ -f "$f" ]; then
      echo "--- $f ---"
      cat "$f"
      echo
    fi
  done 2>/dev/null
} > "$OUT"

echo "Wrote audit to: $OUT"

if command -v pbcopy >/dev/null 2>&1; then
  pbcopy < "$OUT"
  echo "Audit copied to clipboard. Paste it into ChatGPT."
else
  echo "pbcopy not found; open or cat $OUT manually and copy/paste it."
fi
