#!/usr/bin/env bash
set -e

echo "=== Step: Update service & service-area collection pages ==="

# --- Update ServiceCard.astro ---
cat <<'SERVICESCARD' > src/components/ServiceCard.astro
---
interface Service {
  slug: string;
  name: string;
  shortDescription: string;
}

interface Props {
  service: Service;
  primaryAreaSlug: string;
  primaryAreaName: string;
}

const { service, primaryAreaSlug, primaryAreaName } = Astro.props;
---
<article class="card flex flex-col">
  <div class="flex items-start justify-between gap-3">
    <h2 class="text-sm font-semibold text-cf-text">
      <a
        href={"/services/" + service.slug + "/"}
        class="hover:text-cf-accentBlue"
      >
        {service.name}
      </a>
    </h2>
    <span
      class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cf-accentBlueSoft text-xs font-semibold text-cf-accentBlue"
      aria-hidden="true"
    >
      ✓
    </span>
  </div>
  <p class="mt-2 flex-1 text-body-sm">
    {service.shortDescription}
  </p>
  <div class="mt-4 flex items-center justify-between text-[11px] text-cf-textMuted">
    <a
      href={"/services/" + service.slug + "/"}
      class="font-semibold text-cf-accentBlue underline-offset-2 hover:underline"
    >
      Learn more
    </a>
    <a
      href={"/service-areas/" + primaryAreaSlug + "/" + service.slug + "/"}
      class="underline-offset-2 hover:underline"
    >
      In {primaryAreaName}
    </a>
  </div>
</article>
SERVICESCARD

# --- Update AreaCard.astro ---
cat <<'AREACARD' > src/components/AreaCard.astro
---
interface ServiceArea {
  slug: string;
  name: string;
  label: string;
  primary?: boolean;
}

interface Props {
  area: ServiceArea;
}

const { area } = Astro.props;
---
<article class="card flex flex-col justify-between text-sm">
  <div class="space-y-1">
    <h2 class="text-sm font-semibold text-cf-text">
      <a
        href={"/service-areas/" + area.slug + "/"}
        class="hover:text-cf-accentBlue"
      >
        {area.label}
      </a>
    </h2>
    <p class="text-body-sm text-xs">
      Handyman services for homeowners in {area.label} and nearby neighborhoods.
    </p>
  </div>
  <div class="mt-3 text-[11px]">
    <a
      href={"/service-areas/" + area.slug + "/"}
      class="font-semibold text-cf-accentBlue underline-offset-2 hover:underline"
    >
      View city page
    </a>
  </div>
</article>
AREACARD

# --- Update /services/index.astro ---
cat <<'SERVICESPAGE' > src/pages/services/index.astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { services } from "../../data/services";
import { serviceAreas } from "../../data/service-areas";
import ServiceCard from "../../components/ServiceCard.astro";

const primaryArea = serviceAreas.find((area) => area.primary) ?? serviceAreas[0];

const collectionUrl = "https://carlsbadfixit.com/services/";
const serviceItems = services.map((service) => ({
  "@type": "Service",
  name: service.name,
  description: service.shortDescription,
  url: `${collectionUrl}${service.slug}/`
}));

const servicesCollectionJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Handyman Services | Carlsbad Fix It",
  url: collectionUrl,
  about:
    "Handyman services including carpentry, electrical, plumbing fixtures, furniture assembly, drywall repair, and punch lists in Carlsbad, California.",
  hasPart: serviceItems
});
---
<BaseLayout
  title="Handyman Services | Carlsbad Fix It"
  description="Browse handyman services from Carlsbad Fix It, including carpentry, electrical, plumbing fixtures, furniture assembly, drywall repair, TV mounting, and honey-do lists."
>
  <script type="application/ld+json" slot="head">
    {servicesCollectionJsonLd}
  </script>

  <section class="space-y-6">
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
  </section>
</BaseLayout>
SERVICESPAGE

# --- Update /service-areas/index.astro ---
cat <<'AREASPAGE' > src/pages/service-areas/index.astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { serviceAreas } from "../../data/service-areas";
import AreaCard from "../../components/AreaCard.astro";

const collectionUrl = "https://carlsbadfixit.com/service-areas/";
const serviceAreaItems = serviceAreas.map((area) => ({
  "@type": "Place",
  name: area.label,
  url: `${collectionUrl}${area.slug}/`,
  address: {
    "@type": "PostalAddress",
    addressLocality: area.name,
    addressRegion: "CA",
    addressCountry: "US"
  }
}));

const serviceAreasCollectionJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Service Areas | Carlsbad Fix It",
  url: collectionUrl,
  about:
    "North County San Diego handyman service areas including Carlsbad, Oceanside, Encinitas, Vista, and San Marcos.",
  hasPart: serviceAreaItems
});
---
<BaseLayout
  title="Service Areas | Carlsbad Fix It"
  description="Carlsbad Fix It provides local handyman services in Carlsbad and nearby North County San Diego communities, including Oceanside, Encinitas, Vista, and San Marcos."
>
  <script type="application/ld+json" slot="head">
    {serviceAreasCollectionJsonLd}
  </script>

  <section class="space-y-6">
    <div class="section-header">
      <p class="eyebrow">
        Service areas
      </p>
      <h1>
        Handyman service areas in North County San Diego
      </h1>
      <p class="section-subtitle max-w-2xl">
        Carlsbad Fix It is based in Carlsbad and focuses on nearby coastal and inland North County communities.
        If you do not see your city listed, you can still get in touch to ask about availability.
      </p>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      {serviceAreas.map((area) => (
        <AreaCard area={area} />
      ))}
    </div>
  </section>
</BaseLayout>
AREASPAGE

echo "=== Done. Now run: npm run dev and check /services/ and /service-areas/. ==="
