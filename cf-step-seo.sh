#!/usr/bin/env bash
set -euo pipefail

echo "=== Step 1: Standardizing Tailwind config (Tailwind 4) ==="

cat <<'CONFIG' > tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        cf: {
          bg: '#f3f6fb',
          sand: '#ffe8c2',
          sandSoft: '#fff4dd',
          card: '#ffffff',
          primary: '#ff7a1a',
          primarySoft: '#ffe4c4',
          primaryDark: '#f76707',
          accentBlue: '#0070c9',
          accentBlueSoft: '#e3f0ff',
          footer: '#020617',
          footerMuted: '#050816',
          text: '#0f172a',
          textMuted: '#6b7280',
          borderSubtle: '#e2e8f0',
          borderStrong: '#cbd5e1',
          success: '#16a34a',
          warning: '#ffd84f',
          danger: '#dc2626'
        }
      },
      borderRadius: {
        card: '1.5rem',
        pill: '9999px',
        section: '2rem'
      },
      boxShadow: {
        soft: '0 10px 25px rgba(15, 23, 42, 0.06)',
        card: '0 18px 45px rgba(15, 23, 42, 0.08)',
        cta: '0 22px 55px rgba(255, 122, 26, 0.45)'
      },
      spacing: {
        'section-sm': '3.5rem',
        section: '4.5rem',
        'section-lg': '6rem'
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif'
        ]
      },
      fontSize: {
        display: ['2.75rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        h1: ['2.125rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        h2: ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        h3: ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }]
      }
    }
  },
  plugins: []
};
CONFIG

# We keep a single, clear Tailwind config file.
rm -f tailwind.config.mjs || true

echo "=== Step 2: Adding shared SEO helpers (JSON-LD) ==="
mkdir -p src/lib

cat <<'SEO' > src/lib/seo.ts
const SITE_URL = 'https://carlsbadfixit.com';

function withBase(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = SITE_URL.replace(/\/$/, '');
  if (path === '/' || path === '') return base + '/';
  return base + (path.startsWith('/') ? path : `/${path}`);
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: withBase(item.url)
    }))
  };
}

interface BasicService {
  slug: string;
  name: string;
  shortDescription: string;
}

export function getServiceJsonLd(service: BasicService, areaLabel: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.shortDescription,
    areaServed: areaLabel,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'Carlsbad Fix It',
      telephone: '+1-808-226-6681',
      url: withBase('/'),
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3027 Greenwich St.',
        addressLocality: 'Carlsbad',
        addressRegion: 'CA',
        postalCode: '92010',
        addressCountry: 'US'
      }
    }
  };
}

export function getCityServiceJsonLd(service: BasicService, areaLabel: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.name} in ${areaLabel}`,
    description: service.shortDescription,
    areaServed: areaLabel,
    serviceArea: areaLabel,
    provider: {
      '@type': 'HomeAndConstructionBusiness',
      name: 'Carlsbad Fix It',
      telephone: '+1-808-226-6681',
      url: withBase('/'),
      areaServed: areaLabel
    }
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function getFaqPageJsonLd(faqs: FAQItem[], path: string, pageTitle: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    url: withBase(path),
    name: pageTitle,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}
SEO

echo "=== Step 3: Wiring JSON-LD into /services/[service]/ (service detail) ==="

cat <<'SERVICE_PAGE' > src/pages/services/[service].astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { services } from "../../data/services";
import { serviceAreas } from "../../data/service-areas";
import { getServiceJsonLd, getBreadcrumbJsonLd } from "../../lib/seo";

export function getStaticPaths() {
  return services.map((service) => ({
    params: { service: service.slug },
    props: { service }
  }));
}

const { service } = Astro.props;
const primaryArea = serviceAreas.find((area) => area.primary) ?? serviceAreas[0];

const serviceJsonLd = JSON.stringify(
  getServiceJsonLd(service, primaryArea.label)
);

const breadcrumbJsonLd = JSON.stringify(
  getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services/" },
    { name: service.name, url: `/services/${service.slug}/` }
  ])
);
---
<BaseLayout
  title={service.name + " | Carlsbad Fix It"}
  description={service.shortDescription + " Available in " + primaryArea.label + " and nearby North County San Diego areas."}
>
  <script type="application/ld+json" slot="head">
    {serviceJsonLd}
  </script>
  <script type="application/ld+json" slot="head">
    {breadcrumbJsonLd}
  </script>

  <section class="space-y-8">
    <div class="space-y-3">
      <p class="text-xs font-semibold uppercase tracking-wide text-sky-700">
        Service overview
      </p>
      <h1 class="text-3xl font-semibold tracking-tight text-slate-900">
        {service.name}
      </h1>
      <p class="max-w-2xl text-sm text-slate-600">
        {service.shortDescription} Carlsbad Fix It focuses on neat, efficient work that respects your home and your schedule, with clear communication from estimate to final walkthrough.
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)]">
      <div class="space-y-6">
        <div class="space-y-3 rounded-3xl bg-amber-50 p-6">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-800">
            Typical project types
          </h2>
          <p class="text-sm text-slate-600">
            Here are some common examples of {service.name.toLowerCase()} projects. The exact scope is tailored to your home and your priorities.
          </p>
          {service.examples && (
            <ul class="mt-2 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {service.examples.map((example) => (
                <li class="flex items-start gap-2">
                  <span class="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-[10px] font-semibold text-sky-700">
                    ✓
                  </span>
                  <span>{example}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div class="space-y-3">
          <h2 class="text-sm font-semibold uppercase tracking-wide text-slate-800">
            How pricing works
          </h2>
          <p class="text-sm text-slate-600">
            Pricing depends on scope, access, and material choices. Smaller projects may be billed as a minimum service visit, while larger or multi-room projects are typically quoted up front.
          </p>
          <p class="text-sm text-slate-600">
            For the most accurate estimate, include clear photos and a short description of each task when you submit your request.
          </p>
        </div>
      </div>

      <aside class="card space-y-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-sky-700">
          Service area
        </p>
        <p class="text-sm text-slate-700">
          Primary service area is {primaryArea.label}, with select availability in nearby North County communities.
        </p>
        <a
          href="/service-areas/"
          class="text-sm font-semibold text-sky-700 underline-offset-2 hover:underline"
        >
          View all service areas
        </a>
        <div class="h-px bg-slate-200"></div>
        <p class="text-xs font-semibold uppercase tracking-wide text-sky-700">
          Ready to schedule?
        </p>
        <p class="text-sm text-slate-700">
          Share a few details and photos of your {service.name.toLowerCase()} project. You will get clear next steps and a no-obligation estimate.
        </p>
        <a href="/contact/" class="btn-primary w-full text-xs uppercase tracking-wide">
          Request an estimate
        </a>
      </aside>
    </div>
  </section>
</BaseLayout>
SERVICE_PAGE

echo "=== Step 4: Wiring JSON-LD into /service-areas/[city]/[service]/ (money pages) ==="

cat <<'CITY_SERVICE_PAGE' > src/pages/service-areas/[city]/[service].astro
---
import BaseLayout from "../../../../layouts/BaseLayout.astro";
import { services } from "../../../../data/services";
import { serviceAreas } from "../../../../data/service-areas";
import { getCityServiceJsonLd, getBreadcrumbJsonLd } from "../../../../lib/seo";

export async function getStaticPaths() {
  const paths = [];
  for (const area of serviceAreas) {
    for (const service of services) {
      paths.push({
        params: { city: area.slug, service: service.slug },
        props: { area, service }
      });
    }
  }
  return paths;
}

const { area, service } = Astro.props;

const cityServiceJsonLd = JSON.stringify(
  getCityServiceJsonLd(service, area.label)
);

const breadcrumbJsonLd = JSON.stringify(
  getBreadcrumbJsonLd([
    { name: "Home", url: "/" },
    { name: "Service areas", url: "/service-areas/" },
    { name: area.label, url: `/service-areas/${area.slug}/` },
    { name: `${service.name} in ${area.label}`, url: `/service-areas/${area.slug}/${service.slug}/` }
  ])
);
---
<BaseLayout
  title={service.name + " in " + area.label + " | Carlsbad Fix It"}
  description={service.shortDescription + " Available for homeowners in " + area.label + "."}
>
  <script type="application/ld+json" slot="head">
    {cityServiceJsonLd}
  </script>
  <script type="application/ld+json" slot="head">
    {breadcrumbJsonLd}
  </script>

  <section class="space-y-6">
    <p class="text-xs font-semibold uppercase tracking-wide text-sky-700">
      Local handyman service
    </p>
    <h1 class="text-3xl font-semibold tracking-tight text-slate-900">
      {service.name} in {area.label}
    </h1>
    <p class="max-w-2xl text-base text-slate-600">
      This page is designed as a focused landing page for searchers in {area.label} looking for {service.name.toLowerCase()}.
      Over time you can refine the copy, add project photos, and include FAQs specific to this combination.
    </p>
    <div class="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
      <div class="space-y-4">
        <h2 class="text-lg font-semibold text-slate-900">
          What is included
        </h2>
        <p class="text-sm text-slate-600">
          Describe the typical scope of work for this service, how pricing works, and what homeowners in {area.name} can expect on the day of service.
        </p>
        <p class="text-sm text-slate-600">
          You can expand this section with examples of common projects, materials used, and any prep work that makes the visit smoother.
        </p>
      </div>
      <aside class="space-y-4 rounded-2xl border border-slate-200 bg-amber-50 p-4 text-sm text-slate-800">
        <p class="text-xs font-semibold uppercase tracking-wide text-sky-700">
          Book this service
        </p>
        <p>
          Ready to schedule {service.name.toLowerCase()} in {area.name}?
          Share a few details and photos of your project with Carlsbad Fix It.
        </p>
        <a href="/contact/" class="btn-primary mt-3 text-xs uppercase tracking-wide">
          Request an estimate
        </a>
        <div class="h-px bg-slate-200"></div>
        <p class="text-xs font-semibold uppercase tracking-wide text-slate-700">
          More options
        </p>
        <ul class="space-y-1 text-xs text-slate-700">
          <li>
            <a
              href={"/service-areas/" + area.slug + "/"}
              class="underline-offset-2 hover:underline"
            >
              View all handyman services in {area.label}
            </a>
          </li>
          <li>
            <a
              href={"/services/" + service.slug + "/"}
              class="underline-offset-2 hover:underline"
            >
              Learn more about {service.name.toLowerCase()}
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</BaseLayout>
CITY_SERVICE_PAGE

echo "=== Step 5: FAQPage JSON-LD and DRY content ==="

cat <<'FAQ_PAGE' > src/pages/faq.astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
import { getFaqPageJsonLd, type FAQItem } from "../lib/seo";

const faqs: FAQItem[] = [
  {
    question: "What kinds of projects are a good fit for Carlsbad Fix It?",
    answer:
      "Carlsbad Fix It is focused on small to medium sized repair and improvement projects that can usually be completed in a few hours or a single day. Larger projects may be split into multiple visits."
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Yes. Most projects can be estimated from your description and photos. For more complex work, an on-site visit may be recommended before confirming pricing."
  },
  {
    question: "Which areas do you serve?",
    answer:
      "The primary service area is Carlsbad, with select availability in nearby North County communities. Visit the service areas page for a current list."
  },
  {
    question: "Do you work with landlords and small businesses?",
    answer:
      "Yes. Carlsbad Fix It works with homeowners, small landlords, and local businesses that need a reliable point of contact for small repairs and recurring maintenance."
  }
];

const faqJsonLd = JSON.stringify(
  getFaqPageJsonLd(faqs, "/faq/", "Handyman FAQ | Carlsbad Fix It")
);
---
<BaseLayout
  title="Handyman FAQ | Carlsbad Fix It"
  description="Answers to common questions about scheduling, pricing, and scope for Carlsbad Fix It handyman services."
>
  <script type="application/ld+json" slot="head">
    {faqJsonLd}
  </script>

  <section class="space-y-6">
    <div class="space-y-2">
      <p class="text-xs font-semibold uppercase tracking-wide text-sky-700">
        FAQ
      </p>
      <h1 class="text-3xl font-semibold tracking-tight text-slate-900">
        Frequently asked questions
      </h1>
      <p class="max-w-2xl text-sm text-slate-600">
        A quick overview of how Carlsbad Fix It works, what kinds of projects are a good fit, and what to expect when you schedule service.
      </p>
    </div>
    <div class="space-y-4">
      {faqs.map((faq) => (
        <details class="card">
          <summary class="cursor-pointer text-sm font-semibold text-slate-900">
            {faq.question}
          </summary>
          <p class="mt-3 text-sm text-slate-600">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  </section>
</BaseLayout>
FAQ_PAGE

echo "All done. You can now run: npm run dev"
