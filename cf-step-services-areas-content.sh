#!/usr/bin/env bash
set -euo pipefail

echo "=== Step: Expanding /services and /service-areas content sections ==="

########################################
# /services/index.astro
########################################
cat <<'SERVICES' > src/pages/services/index.astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { services } from "../../data/services";
import { serviceAreas } from "../../data/service-areas";
import ServiceCard from "../../components/ServiceCard.astro";

const primaryArea = serviceAreas.find((area) => area.primary) ?? serviceAreas[0];

const visitHighlights = [
  "Single-day visits for punch lists and small projects whenever possible.",
  "Clear, written estimates before work begins on larger or multi-step projects.",
  "Respect for your schedule with on-time arrivals and communication if anything changes.",
  "Tidy job sites with surfaces protected and cleanup before leaving."
];
---
<BaseLayout
  title="Handyman Services | Carlsbad Fix It"
  description="Browse handyman services from Carlsbad Fix It, including carpentry, electrical, plumbing fixtures, furniture assembly, and honey-do lists."
>
  <!-- MAIN SERVICES GRID -->
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

  <!-- HOW VISITS WORK + CTA -->
  <section class="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] md:items-start">
    <div class="space-y-4">
      <p class="eyebrow">
        How visits work
      </p>
      <h2 class="text-lg font-semibold text-cf-text">
        Small to medium projects, scoped clearly before work begins.
      </h2>
      <p class="text-body-sm">
        Most visits are built around a focused punch list: a mix of repairs, fixture swaps, and small projects that can
        usually be completed in a single service window. Larger or multi-room projects are broken into clear phases so
        you always know what is scheduled.
      </p>
      <ul class="grid gap-2 text-sm text-cf-textMuted sm:grid-cols-2">
        {visitHighlights.map((item) => (
          <li class="flex items-start gap-2">
            <span class="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cf-accentBlueSoft text-[10px] font-semibold text-cf-accentBlue">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <aside class="card space-y-4">
      <p class="eyebrow">
        Ready to get started?
      </p>
      <h2 class="text-base font-semibold text-cf-text">
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
        <span class="font-semibold text-cf-accentBlue"> (808) 226-6681</span> for quick questions about fit or timing.
      </p>
    </aside>
  </section>
</BaseLayout>
SERVICES

########################################
# /service-areas/index.astro
########################################
cat <<'AREAS' > src/pages/service-areas/index.astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { serviceAreas } from "../../data/service-areas";
import AreaCard from "../../components/AreaCard.astro";

const travelNotes = [
  "Primary focus on coastal North County communities like Carlsbad, Oceanside, and Encinitas.",
  "Select availability for nearby inland areas such as Vista and San Marcos.",
  "Most visits are for single-family homes, townhomes, and small rentals.",
  "Borderline areas are considered when the project scope and timing are a good fit."
];
---
<BaseLayout
  title="Service Areas | Carlsbad Fix It"
  description="Carlsbad Fix It provides local handyman services in Carlsbad and nearby North County San Diego communities."
>
  <!-- SERVICE AREAS GRID -->
  <section class="space-y-6">
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
  </section>

  <!-- COVERAGE DETAILS + TRUST ASIDE -->
  <section class="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] md:items-start">
    <div class="space-y-4">
      <p class="eyebrow">
        Coverage
      </p>
      <h2 class="text-lg font-semibold text-cf-text">
        Local handyman coverage across coastal and nearby inland communities.
      </h2>
      <p class="text-body-sm">
        Most projects are within a short drive of Carlsbad. This keeps travel time reasonable, which helps protect your
        schedule and keeps visits focused on actual repair and improvement work. If you are just outside the listed
        areas, you can still reach out with details.
      </p>
      <ul class="grid gap-2 text-sm text-cf-textMuted sm:grid-cols-2">
        {travelNotes.map((item) => (
          <li class="flex items-start gap-2">
            <span class="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cf-accentBlueSoft text-[10px] font-semibold text-cf-accentBlue">
              ✓
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <aside class="card-soft space-y-4">
      <p class="eyebrow">
        Not sure if you are in range?
      </p>
      <p class="text-sm text-cf-text">
        Borderline ZIP codes and nearby communities are often possible, especially for projects that can be completed in
        a single visit. The best way to check is to share your location, a short list of tasks, and timing.
      </p>
      <a href="/contact/" class="btn-primary mt-1 w-full text-xs uppercase tracking-wide">
        Ask about availability
      </a>
      <p class="text-[11px] text-cf-textMuted">
        You can also call or text
        <span class="font-semibold text-cf-accentBlue"> (808) 226-6681</span> to quickly confirm whether your address is
        within the current service area.
      </p>
    </aside>
  </section>
</BaseLayout>
AREAS

echo "All done. Now run: npm run dev"
