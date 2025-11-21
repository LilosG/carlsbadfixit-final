#!/usr/bin/env bash
set -euo pipefail

echo "=== Step: SEO helpers + /services + /service-areas index upgrades ==="

# 1) Shared SEO helpers (JSON-LD)
mkdir -p src/lib

cat <<'SEO' > src/lib/seo.ts
export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
};

export type ServiceArea = {
  slug: string;
  name: string;
  label: string;
  primary?: boolean;
};

const SITE_URL = "https://carlsbadfixit.com";

/**
 * BreadcrumbList JSON-LD
 */
export function getBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : new URL(item.url, SITE_URL).toString()
    }))
  };
}

/**
 * Service JSON-LD for /services/[service]
 */
export function getServiceJsonLd(service: Service, area: ServiceArea) {
  const url = new URL(`/services/${service.slug}/`, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    url,
    areaServed: area.label,
    provider: {
      "@type": "LocalBusiness",
      name: "Carlsbad Fix It",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "3027 Greenwich St.",
        addressLocality: "Carlsbad",
        addressRegion: "CA",
        postalCode: "92010",
        addressCountry: "US"
      },
      telephone: "+1-808-226-6681"
    }
  };
}

/**
 * Service JSON-LD for /service-areas/[city]/[service]
 */
export function getCityServiceJsonLd(service: Service, area: ServiceArea) {
  const url = new URL(
    `/service-areas/${area.slug}/${service.slug}/`,
    SITE_URL
  ).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service.name} in ${area.label}`,
    description: service.shortDescription,
    url,
    areaServed: area.label,
    provider: {
      "@type": "LocalBusiness",
      name: "Carlsbad Fix It",
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: "3027 Greenwich St.",
        addressLocality: "Carlsbad",
        addressRegion: "CA",
        postalCode: "92010",
        addressCountry: "US"
      },
      telephone: "+1-808-226-6681"
    }
  };
}

/**
 * FAQPage JSON-LD for /faq
 */
export function getFaqPageJsonLd(
  faqs: { question: string; answer: string }[],
  pageUrl: string,
  pageTitle: string
) {
  const url = pageUrl.startsWith("http")
    ? pageUrl
    : new URL(pageUrl, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: pageTitle,
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

/**
 * Generic CollectionPage JSON-LD for list pages
 */
export function getCollectionPageJsonLd(opts: {
  url: string;
  name: string;
  description: string;
  items: { name: string; url: string }[];
}) {
  const url = opts.url.startsWith("http")
    ? opts.url
    : new URL(opts.url, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url,
    hasPart: opts.items.map((item) => ({
      "@type": "WebPage",
      name: item.name,
      url: item.url.startsWith("http")
        ? item.url
        : new URL(item.url, SITE_URL).toString()
    }))
  };
}
SEO

# 2) /services index: stronger content + JSON-LD
cat <<'SERVICES_PAGE' > src/pages/services/index.astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { services } from "../../data/services";
import { serviceAreas } from "../../data/service-areas";
import ServiceCard from "../../components/ServiceCard.astro";
import {
  getBreadcrumbJsonLd,
  getCollectionPageJsonLd
} from "../../lib/seo";

const primaryArea = serviceAreas.find((area) => area.primary) ?? serviceAreas[0];

const servicesCollectionJsonLd = JSON.stringify(
  getCollectionPageJsonLd({
    url: "/services/",
    name: `Handyman services in ${primaryArea.label}`,
    description:
      "Core handyman services from Carlsbad Fix It, focused on the small to medium projects North County homeowners call about most.",
    items: services.map((service) => ({
      name: service.name,
      url: `/services/${service.slug}/`
    }))
  })
);

const servicesBreadcrumbJsonLd = JSON.stringify(
  getBreadcrumbJsonLd([
    { name: "Home", url: "https://carlsbadfixit.com/" },
    { name: "Services", url: "https://carlsbadfixit.com/services/" }
  ])
);
---
<BaseLayout
  title="Handyman Services | Carlsbad Fix It"
  description="Browse handyman services from Carlsbad Fix It, including carpentry, electrical, plumbing fixtures, furniture assembly, TV mounting, drywall repair, and honey-do lists."
>
  <script type="application/ld+json" slot="head">
    {servicesCollectionJsonLd}
  </script>
  <script type="application/ld+json" slot="head">
    {servicesBreadcrumbJsonLd}
  </script>

  <section class="space-y-10">
    <!-- Header + grid -->
    <div class="section-header">
      <p class="eyebrow">
        Services
      </p>
      <h1>
        Handyman services in {primaryArea.label}
      </h1>
      <p class="section-subtitle max-w-2xl">
        Core services focused on the small to medium projects North County homeowners call about most. You can also
        combine several tasks into a single visit.
      </p>
    </div>

    <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          service={service}
          primaryAreaSlug={primaryArea.slug}
          primaryAreaName={primaryArea.name}
        />
      ))}
    </div>

    <!-- How visits work + CTA band -->
    <div
      class="grid gap-8 rounded-section bg-cf-card/70 p-6 shadow-soft md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)] md:p-8"
    >
      <section class="space-y-3">
        <p class="eyebrow">
          How visits work
        </p>
        <h2 class="text-lg font-semibold text-cf-text">
          Small to medium projects, scoped clearly before work begins.
        </h2>
        <p class="text-body-sm">
          Most visits are built around focused punch lists: a mix of repairs, fixture swaps, and small projects that can
          usually be completed in a single service window.
        </p>
        <ul class="space-y-2 text-body-sm">
          <li>
            <span class="font-semibold">Single-day visits</span> for punch lists and small projects whenever possible.
          </li>
          <li>
            <span class="font-semibold">Clear written estimates</span> before work begins on larger or multi-step
            projects.
          </li>
          <li>
            <span class="font-semibold">Respect for your schedule</span> with on-time arrivals and communication if
            anything needs to change.
          </li>
          <li>
            <span class="font-semibold">Tidy job sites</span> with surfaces protected and cleanup before leaving.
          </li>
        </ul>
      </section>

      <aside class="card-soft space-y-4">
        <p class="eyebrow">
          Ready to get started?
        </p>
        <h2 class="text-sm font-semibold text-cf-text">
          Share your list once and check off projects together.
        </h2>
        <p class="text-body-sm">
          Send a short description of each task, where it is in the home, and any helpful photos. You will receive clear
          next steps, timing, and a no-obligation estimate before anything is scheduled.
        </p>
        <a href="/contact/" class="btn-primary w-full text-xs uppercase tracking-wide">
          Request an estimate
        </a>
        <p class="text-[11px] text-cf-textMuted">
          Prefer to talk it through? You can also call or text
          <a href="tel:+18082266681" class="font-semibold text-cf-accentBlue">
            (808) 226-6681
          </a>
          for quick questions about fit or timing.
        </p>
      </aside>
    </div>
  </section>
</BaseLayout>
SERVICES_PAGE

# 3) /service-areas index: trust banner + JSON-LD
cat <<'AREAS_PAGE' > src/pages/service-areas/index.astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { serviceAreas } from "../../data/service-areas";
import AreaCard from "../../components/AreaCard.astro";
import {
  getBreadcrumbJsonLd,
  getCollectionPageJsonLd
} from "../../lib/seo";

const areasCollectionJsonLd = JSON.stringify(
  getCollectionPageJsonLd({
    url: "/service-areas/",
    name: "Handyman service areas in North County San Diego",
    description:
      "Local handyman service areas served by Carlsbad Fix It, including Carlsbad, Oceanside, Encinitas, Vista, and San Marcos.",
    items: serviceAreas.map((area) => ({
      name: `Handyman in ${area.label}`,
      url: `/service-areas/${area.slug}/`
    }))
  })
);

const areasBreadcrumbJsonLd = JSON.stringify(
  getBreadcrumbJsonLd([
    { name: "Home", url: "https://carlsbadfixit.com/" },
    { name: "Service areas", url: "https://carlsbadfixit.com/service-areas/" }
  ])
);
---
<BaseLayout
  title="Service Areas | Carlsbad Fix It"
  description="Carlsbad Fix It provides local handyman services in Carlsbad and nearby North County San Diego communities, including Oceanside, Encinitas, Vista, and San Marcos."
>
  <script type="application/ld+json" slot="head">
    {areasCollectionJsonLd}
  </script>
  <script type="application/ld+json" slot="head">
    {areasBreadcrumbJsonLd}
  </script>

  <section class="space-y-10">
    <!-- Header + grid -->
    <div class="section-header">
      <p class="eyebrow">
        Service areas
      </p>
      <h1>
        Handyman service areas in North County San Diego
      </h1>
      <p class="section-subtitle max-w-2xl">
        Carlsbad Fix It is based in Carlsbad and focuses on nearby coastal and inland North County communities. If you
        do not see your city listed, you can still get in touch to ask about availability.
      </p>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      {serviceAreas.map((area) => (
        <AreaCard area={area} />
      ))}
    </div>

    <!-- Trust + contact banner -->
    <div
      class="card-soft mt-2 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
    >
      <div class="space-y-2 max-w-2xl">
        <p class="eyebrow">
          Licensed, insured, and local
        </p>
        <h2 class="text-lg font-semibold text-cf-text">
          Focused on small home projects across coastal and nearby inland North County.
        </h2>
        <ul class="space-y-2 text-body-sm">
          <li>Local handyman based in Carlsbad, CA with a clear, limited service radius.</li>
          <li>Licensed and insured for small repairs, fixture swaps, and maintenance projects.</li>
          <li>Ideal for homeowners, small landlords, and local businesses that want a reliable point of contact.</li>
        </ul>
      </div>
      <div class="space-y-3 rounded-card bg-cf-card p-5 shadow-soft">
        <p class="text-xs font-semibold uppercase tracking-wide text-cf-textMuted">
          Not sure if your address is covered?
        </p>
        <p class="text-sm text-cf-text">
          If you are just outside the listed cities, you can still reach out to ask about availability for your area.
        </p>
        <a href="/contact/" class="btn-primary w-full text-xs uppercase tracking-wide">
          Check availability
        </a>
        <p class="text-[11px] text-cf-textMuted">
          Or call or text
          <a href="tel:+18082266681" class="font-semibold text-cf-accentBlue">
            (808) 226-6681
          </a>
          with your location and a short description of the work.
        </p>
      </div>
    </div>
  </section>
</BaseLayout>
AREAS_PAGE

echo "=== Done: SEO helpers + /services + /service-areas index upgraded. ==="
