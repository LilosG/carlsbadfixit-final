set -e

OUT="cf-audit-v3-$(date +%Y%m%d-%H%M%S).txt"

{
  echo "=== PWD ==="
  pwd
  echo

  echo "=== NODE AND NPM VERSIONS ==="
  node -v 2>/dev/null || echo "node not found"
  npm -v 2>/dev/null || echo "npm not found"
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

  echo "=== FILE: postcss.config.* (if any) ==="
  for f in postcss.config.mjs postcss.config.cjs postcss.config.js postcss.config.ts; do
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

  echo "=== FILE: src/styles/global.css ==="
  if [ -f src/styles/global.css ]; then cat src/styles/global.css; else echo "NOT FOUND"; fi
  echo

  echo "=== TREE: src/layouts ==="
  if [ -d src/layouts ]; then ls -R src/layouts; else echo "NOT FOUND"; fi
  echo

  echo "=== FILE: src/layouts/BaseLayout.astro ==="
  if [ -f src/layouts/BaseLayout.astro ]; then cat src/layouts/BaseLayout.astro; else echo "NOT FOUND"; fi
  echo

  echo "=== TREE: src/data ==="
  if [ -d src/data ]; then ls -R src/data; else echo "NOT FOUND"; fi
  echo

  echo "=== FILE: src/data/services.ts ==="
  if [ -f src/data/services.ts ]; then cat src/data/services.ts; else echo "NOT FOUND"; fi
  echo

  echo "=== FILE: src/data/service-areas.ts ==="
  if [ -f src/data/service-areas.ts ]; then cat src/data/service-areas.ts; else echo "NOT FOUND"; fi
  echo

  echo "=== FILE: src/data/money-content.ts (if any) ==="
  if [ -f src/data/money-content.ts ]; then cat src/data/money-content.ts; else echo "NOT FOUND"; fi
  echo

  echo "=== ANY OTHER DATA FILES IN src/data ==="
  if [ -d src/data ]; then
    for f in src/data/*.*; do
      case "$f" in
        src/data/services.ts|src/data/service-areas.ts|src/data/money-content.ts) ;;
        *) echo "--- $f ---"; cat "$f"; echo ;;
      esac
    done
  else
    echo "NOT FOUND"
  fi
  echo

  echo "=== TREE: src/components ==="
  if [ -d src/components ]; then ls -R src/components; else echo "NOT FOUND"; fi
  echo

  echo "=== KEY COMPONENT FILES ==="
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

  echo "=== KEY PAGES: HOME AND HUBS ==="
  for f in \
    src/pages/index.astro \
    src/pages/services/index.astro \
    "src/pages/services/[service].astro" \
    src/pages/service-areas/index.astro \
    "src/pages/service-areas/[city].astro" \
    "src/pages/service-areas/[city]/[service].astro"
  do
    if [ -f "$f" ]; then
      echo "--- $f ---"
      cat "$f"
      echo
    fi
  done
  echo

  echo "=== SUPPORTING PAGES ==="
  for f in \
    src/pages/about.astro \
    src/pages/faq.astro \
    src/pages/who-we-work-with.astro \
    src/pages/contact.astro \
    src/pages/blog/index.astro \
    "src/pages/blog/[slug].astro" \
    src/pages/404.astro \
    "src/pages/[.404].astro"
  do
    if [ -f "$f" ]; then
      echo "--- $f ---"
      cat "$f"
      echo
    fi
  done
  echo
} > "$OUT"

if command -v pbcopy >/dev/null 2>&1; then
  cat "$OUT" | pbcopy
  echo "Audit written to $OUT and copied to clipboard"
else
  echo "Audit written to $OUT"
fi
