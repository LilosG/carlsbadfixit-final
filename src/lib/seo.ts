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

export type ArticleMeta = {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  tags?: string[];
};

const SITE_URL = "https://www.carlsbadfixit.com";

const BUSINESS_IMAGE_URL = new URL(
  "/images/logo/logo-medium.png",
  SITE_URL,
).toString();

const GBP_URL = "https://maps.app.goo.gl/SLn6g6JEFRTLLWPRA";

const BUSINESS_ID = `${SITE_URL}#local-business`;

function getBusinessAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: "3027 Greenwich St.",
    addressLocality: "Carlsbad",
    addressRegion: "CA",
    postalCode: "92010",
    addressCountry: "US",
  };
}

function getOpeningHoursSpecification() {
  return [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "19:00",
    },
  ];
}

function getBusinessProvider() {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: "Carlsbad Fix It",
    url: SITE_URL,
    address: getBusinessAddress(),
    telephone: "+1-808-226-6681",
    image: BUSINESS_IMAGE_URL,
    logo: BUSINESS_IMAGE_URL,
    hasMap: GBP_URL,
    openingHoursSpecification: getOpeningHoursSpecification(),
    priceRange: "$$",
    sameAs: [GBP_URL],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: 4,
    },
  };
}

export function getLocalBusinessJsonLd(areaLabels: string[]) {
  const business = getBusinessProvider();

  return {
    "@context": "https://schema.org",
    ...business,
    areaServed: areaLabels.map((label) => ({
      "@type": "Place",
      name: label,
    })),
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
        : new URL(item.url, SITE_URL).toString(),
    })),
  };
}

export function getServiceJsonLd(service: Service, area: ServiceArea) {
  const url = new URL(`/services/${service.slug}/`, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: service.name,
    description: service.shortDescription,
    serviceType: service.name,
    url,
    areaServed: {
      "@type": "Place",
      name: area.label,
    },
    provider: {
      "@id": BUSINESS_ID,
    },
  };
}

export function getCityServiceJsonLd(service: Service, area: ServiceArea) {
  const url = new URL(
    `/service-areas/${area.slug}/${service.slug}/`,
    SITE_URL,
  ).toString();

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${service.name} in ${area.label}`,
    description: service.shortDescription,
    serviceType: service.name,
    url,
    areaServed: {
      "@type": "Place",
      name: area.label,
    },
    provider: {
      "@id": BUSINESS_ID,
    },
  };
}

export function getFaqPageJsonLd(
  faqs: { question: string; answer: string }[],
  pageUrl: string,
  pageTitle: string,
) {
  const url = pageUrl.startsWith("http")
    ? pageUrl
    : new URL(pageUrl, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    name: pageTitle,
    url,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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
    "@id": `${url}#collection`,
    name: opts.name,
    description: opts.description,
    url,
    hasPart: opts.items.map((item) => ({
      "@type": "WebPage",
      name: item.name,
      url: item.url.startsWith("http")
        ? item.url
        : new URL(item.url, SITE_URL).toString(),
    })),
  };
}

export function getArticleJsonLd(meta: ArticleMeta) {
  const url = meta.url.startsWith("http")
    ? meta.url
    : new URL(meta.url, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.description,
    url,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified ?? meta.datePublished,
    image: meta.image ? [meta.image] : undefined,
    author: {
      "@id": BUSINESS_ID,
    },
    publisher: {
      "@id": BUSINESS_ID,
    },
    keywords:
      meta.tags && meta.tags.length > 0 ? meta.tags.join(", ") : undefined,
  };
}
