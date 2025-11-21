#!/usr/bin/env bash
set -e

echo "=== Step: Upgrading /service-areas/[city]/[service]/ money pages ==="

cat <<'MONEYPAGE' > src/pages/service-areas/[city]/[service].astro
---
import BaseLayout from "../../../../layouts/BaseLayout.astro";
import { services } from "../../../../data/services";
import { serviceAreas } from "../../../../data/service-areas";

export async function getStaticPaths() {
  const paths: { params: { city: string; service: string }; props: any }[] = [];

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

const siteUrl = Astro.site?.toString() ?? "https://carlsbadfixit.com";
const urlPath = `/service-areas/${area.slug}/${service.slug}/`;
const canonicalUrl = new URL(urlPath, siteUrl).toString();

const serviceJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${service.name} in ${area.label}`,
  description: `${service.shortDescription} Available for homeowners in ${area.label} and nearby neighborhoods.`,
  areaServed: {
    "@type": "Place",
    name: area.label
  },
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Carlsbad Fix It",
    url: siteUrl
  },
  url: canonicalUrl
});

const breadcrumbJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteUrl}/`
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Service areas",
      item: `${siteUrl}/service-areas/`
    },
    {
      "@type": "ListItem",
      position: 3,
      name: area.label,
      item: `${siteUrl}/service-areas/${area.slug}/`
    },
    {
      "@type": "ListItem",
      position: 4,
      name: `${service.name} in ${area.label}`,
      item: canonicalUrl
    }
  ]
});

const examples: string[] = service.examples ?? [];
---
<BaseLayout
  title={`${service.name} in ${area.label} | Carlsbad Fix It`}
  description={`${service.shortDescription} Available for homeowners in ${area.label} and nearby North County San Diego communities.`}
  canonical={canonicalUrl}
>
  <script type="application/ld+json" slot="head">
    {serviceJsonLd}
  </script>
  <script type="application/ld+json" slot="head">
    {breadcrumbJsonLd}
  </script>

  <section class="space-y-8">
    <div class="space-y-3">
      <p class="eyebrow">
        Local handyman service
      </p>
      <h1>
        {service.name} in {area.label}
      </h1>
      <p class="section-subtitle max-w-2xl">
        Focused, local page for homeowners in {area.label} searching for {service.name.toLowerCase()}.
        Clear expectations, tidy work, and small to medium projects that can usually be completed in a single visit.
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-[minmax(0,2fr)_minmax(0,1.25fr)] md:items-start">
      <div class="space-y-8">
        <section class="space-y-4">
          <h2 class="text-h2 font-semibold text-cf-text">
            What is typically included
          </h2>
          <p class="text-body-sm">
            Every home is different, but most {service.name.toLowerCase()} visits in {area.label} include a mix of
            small to medium projects that fit into a single service window. The focus is on careful prep, clean finishes,
            and communicating clearly about what will be completed.
          </p>

          {examples.length > 0 && (
            <ul class="grid gap-2 text-sm text-cf-text sm:grid-cols-2">
              {examples.map((item) => (
                <li class="flex items-start gap-2">
                  <span class="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cf-accentBlueSoft text-[10px] font-semibold text-cf-accentBlue">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section class="space-y-4">
          <h2 class="text-h2 font-semibold text-cf-text">
            How scheduling and pricing work
          </h2>
          <p class="text-body-sm">
            Pricing depends on scope, access, and material choices. Smaller projects may be billed as a minimum service
            visit, while larger or multi-room projects are typically quoted up front.
          </p>
          <p class="text-body-sm">
            When you reach out, include a short list of each task, where in the home it is located, and any helpful
            photos. You will receive clear next steps, timing, and a no-obligation estimate before anything is scheduled.
          </p>
        </section>
      </div>

      <aside class="card-soft space-y-4">
        <p class="eyebrow">
          Book this service
        </p>
        <p class="text-sm text-cf-text">
          Ready to schedule {service.name.toLowerCase()} in {area.label}? Share a few details and photos of your project,
          and Carlsbad Fix It will follow up with clear next steps.
        </p>
        <a href="/contact/" class="btn-primary mt-1 w-full text-xs uppercase tracking-wide">
          Request an estimate
        </a>

        <div class="h-px bg-cf-borderSubtle"></div>

        <p class="text-xs font-semibold uppercase tracking-wide text-cf-textMuted">
          More options
        </p>
        <ul class="space-y-1 text-xs text-cf-textMuted">
          <li>
            <a
              href={`/service-areas/${area.slug}/`}
              class="text-cf-accentBlue underline-offset-2 hover:underline"
            >
              View all handyman services in {area.label}
            </a>
          </li>
          <li>
            <a
              href={`/services/${service.slug}/`}
              class="text-cf-accentBlue underline-offset-2 hover:underline"
            >
              Learn more about {service.name.toLowerCase()}
            </a>
          </li>
        </ul>
      </aside>
    </div>
  </section>
</BaseLayout>
MONEYPAGE

echo "=== Money pages updated. Now run: npm run dev and check /service-areas/carlsbad/carpentry-woodwork/, etc. ==="
