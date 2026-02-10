export interface FeaturedProject {
  title: string;
  location: string;
  summary: string;
  url: string;
  image: string;
  imageAlt: string;
}

export const homeFeaturedProjects: FeaturedProject[] = [
  {
    title: "Carlsbad carpentry and drywall refresh",
    location: "Carlsbad",
    summary:
      "Framed a small wall section, patched drywall, and installed new trim for a clean, updated look.",
    url: "/service-areas/carlsbad/carpentry-woodwork/",
    image: "/images/projects/wood-counter-detail.jpg",
    imageAlt: "Finished wood countertop detail in an updated kitchen",
  },
  {
    title: "Oceanside kitchen and lighting refresh",
    location: "Oceanside",
    summary:
      "Updated kitchen lighting and finishes to create a brighter, more open feel that connects to the living area.",
    url: "/service-areas/oceanside/electrical/",
    image: "/images/projects/kitchen-open-plan.jpg",
    imageAlt: "Open plan kitchen and living area with updated lighting",
  },
  {
    title: "Vista electrical panel and outlet updates",
    location: "Vista",
    summary:
      "Updated an aging electrical panel and replaced outlets to safely support new fixtures and appliances.",
    url: "/services/electrical/",
    image: "/images/projects/electrical-panel.jpg",
    imageAlt: "Updated electrical panel with clearly organized circuits",
  },
];
