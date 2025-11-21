set -euo pipefail

print_file() {
  FILE_PATH="$1"
  echo "===== FILE: $FILE_PATH ====="
  if [ -f "$FILE_PATH" ]; then
    cat "$FILE_PATH"
  else
    echo "File not found: $FILE_PATH"
  fi
  echo
}

echo "=== CARLSBAD FIX IT – FULL ASTRO/TAILWIND/SEO AUDIT ==="
echo "Generated at:"
date
echo

echo "=== BASIC INFO ==="
if command -v node >/dev/null 2>&1; then
  echo "node:"
  node -v || true
fi
if command -v npm >/dev/null 2>&1; then
  echo "npm:"
  npm -v || true
fi
echo

echo "=== PACKAGE.JSON ==="
print_file "package.json"

echo "=== ASTRO CONFIG ==="
print_file "astro.config.mjs"

echo "=== TAILWIND CONFIG ==="
print_file "tailwind.config.mjs"

echo "=== GLOBAL STYLES ==="
print_file "src/styles/global.css"

echo "=== LAYOUTS ==="
print_file "src/layouts/BaseLayout.astro"

echo "=== SITE CHROME COMPONENTS ==="
print_file "src/components/SiteHeader.astro"
print_file "src/components/SiteFooter.astro"

echo "=== KEY PAGES ==="
print_file "src/pages/index.astro"
print_file "src/pages/services/index.astro"
print_file "src/pages/services/[service].astro"
print_file "src/pages/service-areas/index.astro"
print_file "src/pages/service-areas/[city]/index.astro"
print_file "src/pages/service-areas/[city]/[service].astro"
print_file "src/pages/about.astro"
print_file "src/pages/faq.astro"
print_file "src/pages/contact.astro"
print_file "src/pages/who-we-work-with.astro"
print_file "src/pages/404.astro"

echo "=== END OF AUDIT ==="
