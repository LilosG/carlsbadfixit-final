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

function getBusinessAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: "3027 Greenwich St.",
    addressLocality: "Carlsbad",
    addressRegion: "CA",
    postalCode: "92010",
    addressCountry: "US"
  };
}

function getBusinessProvider() {
  return {
    "@type": "LocalBusiness",
    name: "Carlsbad Fix It",
    url: SITE_URL,
    address: getBusinessAddress(),
    telephone: "+1-808-226-6681"
  };
}

export function getLocalBusinessJsonLd(areaLabels: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Carlsbad Fix It",
    url: SITE_URL,
    telephone: "+1-808-226-6681",
    description:
      "Local handyman for home repairs, installations, and maintenance in Carlsbad and nearby North County San Diego communities.",
    address: getBusinessAddress(),
    areaServed: areaLabels
  };
}

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

export function getServiceJsonLd(service: Service, area: ServiceArea) {
  const url = new URL(`/services/${service.slug}/`, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    url,
    areaServed: area.label,
    provider: getBusinessProvider()
  };
}

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
    provider: getBusinessProvider()
  };
}

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
