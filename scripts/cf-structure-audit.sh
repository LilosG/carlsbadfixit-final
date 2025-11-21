set -euo pipefail

echo "=== CARLSBAD FIX IT – PROJECT STRUCTURE AUDIT ==="
echo "Generated at:"
date
echo

echo "=== NODE / NPM VERSIONS (if available) ==="
if command -v node >/dev/null 2>&1; then
  node -v || true
else
  echo "node not found on PATH"
fi
if command -v npm >/dev/null 2>&1; then
  npm -v || true
else
  echo "npm not found on PATH"
fi
echo

echo "=== GIT STATUS (if this is a git repo) ==="
if command -v git >/dev/null 2>&1 && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git status --short || true
else
  echo "not a git repository or git not available"
fi
echo

echo "=== PACKAGE.JSON ==="
if [ -f package.json ]; then
  cat package.json
else
  echo "package.json not found in this directory"
fi
echo

echo "=== ASTRO CONFIG FILES (names only) ==="
if compgen -G "astro.config.*" >/dev/null 2>&1; then
  ls astro.config.*
else
  echo "no astro.config.* files found"
fi
echo

echo "=== TAILWIND CONFIG FILES (names only) ==="
if compgen -G "tailwind.config.*" >/dev/null 2>&1; then
  ls tailwind.config.*
else
  echo "no tailwind.config.* files found"
fi
echo

echo "=== SRC/PAGES TREE (depth <= 5) ==="
if [ -d src/pages ]; then
  find src/pages -maxdepth 5 -type f | sort
else
  echo "src/pages directory not found"
fi
echo

echo "=== SRC/LAYOUTS TREE (depth <= 5) ==="
if [ -d src/layouts ]; then
  find src/layouts -maxdepth 5 -type f | sort
else
  echo "src/layouts directory not found"
fi
echo

echo "=== SRC/DATA TREE (depth <= 5) ==="
if [ -d src/data ]; then
  find src/data -maxdepth 5 -type f | sort
else
  echo "src/data directory not found"
fi
echo

echo "=== OTHER TOP-LEVEL SRC DIRECTORIES ==="
if [ -d src ]; then
  find src -maxdepth 2 -mindepth 1 -type d | sort
else
  echo "src directory not found"
fi
echo

echo "=== USAGE OF getStaticPaths IN SRC ==="
if [ -d src ]; then
  grep -R "getStaticPaths" src 2>/dev/null || echo "no getStaticPaths references found"
else
  echo "src directory not found"
fi
echo

echo "=== USAGE OF <title> TAGS IN SRC ==="
if [ -d src ]; then
  grep -R "<title" src 2>/dev/null | head -n 80 || echo "no <title> tags found in first 80 matches"
else
  echo "src directory not found"
fi
echo

echo "=== END OF AUDIT ==="
