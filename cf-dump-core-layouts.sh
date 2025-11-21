set -e

echo '=== FILE: src/layouts/BaseLayout.astro ==='
if [ -f src/layouts/BaseLayout.astro ]; then
  cat src/layouts/BaseLayout.astro
else
  echo 'NOT FOUND'
fi

echo
echo '=== FILE: src/components/QuickEstimateCard.astro ==='
if [ -f src/components/QuickEstimateCard.astro ]; then
  cat src/components/QuickEstimateCard.astro
else
  echo 'NOT FOUND'
fi

echo
echo '=== FILE: src/pages/services/[service].astro ==='
if [ -f 'src/pages/services/[service].astro' ]; then
  cat 'src/pages/services/[service].astro'
else
  echo 'NOT FOUND'
fi

echo
echo '=== FILE: src/pages/service-areas/[city]/index.astro ==='
if [ -f 'src/pages/service-areas/[city]/index.astro' ]; then
  cat 'src/pages/service-areas/[city]/index.astro'
else
  echo 'NOT FOUND'
fi

echo
echo '=== FILE: src/pages/service-areas/[city]/[service].astro ==='
if [ -f 'src/pages/service-areas/[city]/[service].astro' ]; then
  cat 'src/pages/service-areas/[city]/[service].astro'
else
  echo 'NOT FOUND'
fi
