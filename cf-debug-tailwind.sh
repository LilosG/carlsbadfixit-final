#!/usr/bin/env bash
set -euo pipefail

OUT="cf-tailwind-debug-$(date +%Y%m%d-%H%M%S).txt"

{
  echo "=== TAILWIND CONFIG FILES ==="
  ls tailwind.config.* 2>/dev/null || echo "NO TAILWIND CONFIG FOUND"
  echo

  for f in tailwind.config.*; do
    if [ -f "$f" ]; then
      echo "--- $f ---"
      cat "$f"
      echo
    fi
  done

  echo "=== GLOBAL CSS ==="
  if [ -f src/styles/global.css ]; then
    cat src/styles/global.css
  else
    echo "src/styles/global.css NOT FOUND"
  fi
} > "$OUT"

echo "Wrote Tailwind debug to: $OUT"

if command -v pbcopy >/dev/null 2>&1; then
  pbcopy < "$OUT"
  echo "Debug file copied to clipboard. Paste it into ChatGPT."
else
  echo "pbcopy not found; open or cat $OUT manually and copy/paste it here."
fi
