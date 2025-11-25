#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const baseUrl = 'https://www.carlsbadfixit.com';

function toTitleCaseFromSlug(slug) {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": baseUrl + "#business",
    "name": "Carlsbad Fix It",
    "url": baseUrl + "/",
    "image": baseUrl + "/images/logo/logo-large.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Carlsbad",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "areaServed": [
      { "@type": "City", "name": "Carlsbad" },
      { "@type": "City", "name": "Oceanside" },
      { "@type": "City", "name": "Encinitas" },
      { "@type": "City", "name": "Vista" },
      { "@type": "City", "name": "San Marcos" },
      { "@type": "City", "name": "Bressi Ranch" }
    ]
  };
}

function getServiceJsonLd({ serviceName, cityName, slug }) {
  const url = `${baseUrl}/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${serviceName} in ${cityName}, CA`,
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "@id": baseUrl + "#business"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityName,
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "url": url
  };
}

function injectJsonLd(filePath, jsonLd) {
  let html = fs.readFileSync(filePath, 'utf8');

  // If any schema.org JSON-LD already exists, skip to avoid duplicates
  if (html.includes('"@context":"https://schema.org"')) {
    console.log(`- Skipping ${filePath}, JSON-LD already present.`);
    return;
  }

  const scriptTag =
    '<script type="application/ld+json">' +
    JSON.stringify(jsonLd) +
    '</script>';

  if (!html.includes('</head>')) {
    console.warn(`- No </head> found in ${filePath}, skipping inject.`);
    return;
  }

  html = html.replace('</head>', `${scriptTag}</head>`);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`- Injected JSON-LD into ${filePath}`);
}

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath, callback);
    } else {
      callback(fullPath);
    }
  }
}

// 1) Inject LocalBusiness on homepage
const homePath = path.join(distDir, 'index.html');
if (fs.existsSync(homePath)) {
  console.log('Adding LocalBusiness JSON-LD to homepage...');
  injectJsonLd(homePath, getLocalBusinessJsonLd());
} else {
  console.warn('dist/index.html not found, skipping homepage JSON-LD.');
}

// 2) Inject Service JSON-LD on service-area pages
const serviceAreasRoot = path.join(distDir, 'service-areas');

console.log('Adding Service JSON-LD to service-area pages (if any)...');

walk(serviceAreasRoot, (filePath) => {
  if (!filePath.endsWith(`${path.sep}index.html`)) return;

  const rel = path.relative(distDir, filePath);
  const parts = rel.split(path.sep);
  // Expect: service-areas/<city>/<service>/index.html
  if (parts.length !== 4 || parts[0] !== 'service-areas') return;

  const citySlug = parts[1];
  const serviceSlug = parts[2];

  const cityName = toTitleCaseFromSlug(citySlug);
  const serviceName = toTitleCaseFromSlug(serviceSlug);
  const slug = `service-areas/${citySlug}/${serviceSlug}/`;

  const jsonLd = getServiceJsonLd({ serviceName, cityName, slug });
  injectJsonLd(filePath, jsonLd);
});

console.log('Done adding structured data.');
