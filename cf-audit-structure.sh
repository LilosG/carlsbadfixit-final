set -e

OUT="cf-audit-structure-$(date +%Y%m%d-%H%M%S).txt"

echo "PWD: $(pwd)" > "$OUT"
echo >> "$OUT"

if [ -f package.json ]; then
  echo "=== package.json ===" >> "$OUT"
  cat package.json >> "$OUT"
  echo >> "$OUT"
fi

if [ -d src ]; then
  echo "=== TREE: src (max depth 3) ===" >> "$OUT"
  find src -maxdepth 3 -type f | sort >> "$OUT"
  echo >> "$OUT"
fi

if [ -d src/layouts ]; then
  echo "=== TREE: src/layouts ===" >> "$OUT"
  find src/layouts -maxdepth 2 -type f | sort >> "$OUT"
  echo >> "$OUT"
fi

if [ -d src/components ]; then
  echo "=== TREE: src/components ===" >> "$OUT"
  find src/components -maxdepth 2 -type f | sort >> "$OUT"
  echo >> "$OUT"
fi

if [ -d src/data ]; then
  echo "=== TREE: src/data ===" >> "$OUT"
  find src/data -maxdepth 2 -type f | sort >> "$OUT"
  echo >> "$OUT"
fi

FILES="
src/layouts/BaseLayout.astro
src/layouts/PageLayout.astro
src/pages/index.astro
src/pages/services/index.astro
src/pages/services/[service].astro
src/pages/service-areas/index.astro
src/pages/service-areas/[city]/index.astro
src/pages/service-areas/[city]/[service].astro
src/pages/about.astro
src/pages/faq.astro
src/pages/blog/index.astro
src/pages/blog/[slug].astro
src/data/services.ts
src/data/services.js
src/data/service-areas.ts
src/data/service-areas.js
src/data/service-content.ts
src/data/service-content.js
src/data/city-content.ts
src/data/city-content.js
src/data/money-content.ts
src/data/money-content.js
"

for f in $FILES
do
  if [ -f "$f" ]; then
    echo "=== FILE: $f ===" >> "$OUT"
    sed -n '1,260p' "$f" >> "$OUT"
    echo >> "$OUT"
  fi
done

echo "Audit file: $OUT"
