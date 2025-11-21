#!/usr/bin/env bash
set -e

echo "=== Upgrading /service-areas/[city]/ city hub pages ==="

cat <<'CITY_PAGE' > src/pages/service-areas/[city]/index.astro
---
import BaseLayout from "../../../layouts/BaseLayout.astro";
import { services } from "../../../data/services";
import { serviceAreas } from "../../../data/service-areas";

export async function getStaticPaths() {
  return serviceAreas.map((area) => {
    return {
      params: { city: area.slug },
      props: { area }
    };
  });
}

const { area } = Astro.props;

// Simple featured list for this city page
const featuredServices = services.slice(0, 4);
---

<BaseLayout
  title={`Handyman in ${area.label} | Carlsbad Fix It`}
  description={`Local handyman services for homeowners in ${area.label} and nearby neighborhoods.`}
>
  <section class="space-y-10">
    <!-- HERO / INTRO -->
    <div class="space-y-4 max-w-3xl">
      <p class="eyebrow">
        Service area
      </p>
      <h1>
        Handyman in {area.label}
      </h1>
      <p class="text-body-sm">
        Carlsbad Fix It provides reliable small home repairs and improvements for homeowners in {area.label}. Most
        visits are focused on single-day projects and punch lists, so you can see real progress in one visit without
        a long, drawn-out project.
      </p>
      <p class="text-body-sm">
        Typical projects include drywall repair, fixture swaps, furniture assembly, carpentry touch-ups, and punch
        lists before guests arrive or a move-in. The goal is simple: tidy work, clear communication, and results that
        feel right at home in your space.
      </p>
    </div>

    <!-- POPULAR SERVICES + LOCAL COVERAGE ASIDE -->
    <div class="grid gap-8 md:grid-cols-[minmax(0,1.8fr)_minmax(0,1.2fr)] md:items-start">
      <section class="space-y-4">
        <p class="text-xs font-semibold uppercase tracking-wide text-cf-textMuted">
          Popular handyman services in {area.name}
        </p>
        <div class="grid gap-4 md:grid-cols-2">
          {featuredServices.map((service) => (
            <article class="card flex flex-col justify-between">
              <div class="space-y-2">
                <h2 class="text-sm font-semibold text-cf-text">
                  <a
                    href={`/service-areas/${area.slug}/${service.slug}/`}
                    class="text-cf-text hover:text-cf-accentBlue"
                  >
                    {service.name} in {area.name}
                  </a>
                </h2>
                <p class="text-body-sm">
                  {service.shortDescription}
                </p>
              </div>
              <div class="mt-3 text-[11px] text-cf-textMuted">
                <a
                  href={`/service-areas/${area.slug}/${service.slug}/`}
                  class="font-semibold text-cf-accentBlue underline-offset-2 hover:underline"
                >
                  View service in {area.name}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside class="card-soft space-y-4">
        <p class="eyebrow">
          Local coverage
        </p>
        <p class="text-body-sm text-cf-text">
          Most projects are within a short drive of {area.name}. This keeps travel time reasonable and lets more of
          the day stay focused on actual repair and improvement work.
        </p>
        <ul class="space-y-2 text-body-sm">
          <li>
            Primary focus is on coastal North County communities like Carlsbad, Oceanside, and Encinitas, with select
            availability in nearby inland areas.
          </li>
          <li>
            Great fit for single-family homes, townhomes, condos, and small rentals needing punch lists or recurring
            small repairs.
          </li>
          <li>
            Borderline ZIP codes and nearby neighborhoods can often be accommodated if scheduling and scope are a good fit.
          </li>
        </ul>
        <a href="/contact/" class="btn-primary mt-1 w-full text-xs uppercase tracking-wide">
          Ask about availability
        </a>
        <p class="text-[11px] text-cf-textMuted">
          Prefer to double-check by phone? Call or text <span class="font-semibold text-cf-text">(808) 226-6681</span>
          with your address and a short list of tasks.
        </p>
      </aside>
    </div>

    <!-- HOW VISITS WORK / TRUST SECTION -->
    <div class="grid gap-8 md:grid-cols-[minmax(0,1.7fr)_minmax(0,1.3fr)] md:items-start">
      <section class="space-y-3">
        <p class="text-xs font-semibold uppercase tracking-wide text-cf-textMuted">
          How visits work in {area.name}
        </p>
        <h2 class="text-lg font-semibold text-cf-text">
          Small to medium projects, scoped clearly before work begins.
        </h2>
        <p class="text-body-sm">
          Each visit is built around a focused punch list: a mix of repairs, fixture swaps, and small projects that can
          usually be completed in a single service window. Larger or multi-room projects are broken into clear phases
          so you always know what is scheduled.
        </p>
        <ul class="mt-2 space-y-2 text-body-sm">
          <li>
            Clear expectations before arrival, including which rooms will be worked in and what prep is recommended.
          </li>
          <li>
            Respect for your schedule with on-time arrivals and communication if anything changes.
          </li>
          <li>
            Tidy job sites with surfaces protected and cleanup before leaving.
          </li>
        </ul>
      </section>

      <aside class="card space-y-3">
        <p class="eyebrow">
          Ready to get started?
        </p>
        <p class="text-body-sm">
          Share your location in {area.label}, a short list of tasks, and any helpful photos. You will receive clear
          next steps and a no-obligation estimate before anything is scheduled.
        </p>
        <a href="/contact/" class="btn-primary w-full text-xs uppercase tracking-wide">
          Request your free estimate
        </a>
        <p class="text-[11px] text-cf-textMuted">
          Not sure which service your project fits into? That is normal. Just describe what you need done and Carlsbad
          Fix It will group tasks into the right visit.
        </p>
      </aside>
    </div>
  </section>
</BaseLayout>
CITY_PAGE

echo "City hub pages updated. Check e.g. /service-areas/carlsbad/ in your browser."
