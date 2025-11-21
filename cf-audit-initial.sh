set -e

OUT="audit-$(date +%Y%m%d-%H%M).txt"

{
  echo "=== PWD ==="
  pwd
  echo

  echo "=== NODE AND NPM VERSIONS ==="
  node -v 2>/dev/null || echo "node not found"
  npm -v 2>/dev/null || echo "npm not found"
  echo

  echo "=== PROJECT TREE (selected paths) ==="
  for dir in src src/layouts src/components src/pages src/content src/data; do
    if [ -d "$dir" ]; then
      echo "--- TREE FOR: $dir ---"
      find "$dir" -maxdepth 4 -type f | sort
    else
      echo "--- $dir (not found) ---"
    fi
    echo
  done

  echo "=== ROOT CONFIG FILES ==="
  for f in package.json astro.config.mjs astro.config.ts astro.config.js tailwind.config.mjs tailwind.config.ts tailwind.config.js tailwind.config.cjs postcss.config.mjs postcss.config.cjs postcss.config.js postcss.config.ts tsconfig.json jsconfig.json; do
    if [ -f "$f" ]; then
      echo "--- FILE: $f ---"
      cat "$f"
      echo
    fi
  done

  echo "=== LAYOUT FILES (src/layouts) ==="
  if [ -d src/layouts ]; then
    find src/layouts -maxdepth 4 -type f -name "*.astro" | sort | while read -r f; do
      echo "--- FILE: $f ---"
      cat "$f"
      echo
    done
  else
    echo "src/layouts not found"
  fi
  echo

  echo "=== DATA / CONTENT BLOBS (src/data, src/content) ==="
  if [ -d src/data ]; then
    find src/data -maxdepth 4 -type f | sort | while read -r f; do
      echo "--- FILE: $f ---"
      cat "$f"
      echo
    done
  fi
  if [ -d src/content ]; then
    find src/content -maxdepth 6 -type f | sort | while read -r f; do
      echo "--- FILE: $f ---"
      cat "$f"
      echo
    done
  fi
  echo

  echo "=== ALL PAGES (src/pages) ==="
  if [ -d src/pages ]; then
    find src/pages -maxdepth 6 -type f | sort | while read -r f; do
      echo "--- FILE: $f ---"
      cat "$f"
      echo
    done
  else
    echo "src/pages not found"
  fi
  echo
} > "$OUT"

if command -v pbcopy >/dev/null 2>&1; then
  cat "$OUT" | pbcopy
  echo "Audit written to $OUT and copied to clipboard"
else
  echo "Audit written to $OUT"
fi
