import { businessProfile, defaultSeo } from "../data/site-config";

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
  authorName?: string;
};

const SITE_URL = defaultSeo.siteUrl;
const BUSINESS_IMAGE_URL = new URL(
  defaultSeo.defaultOgImagePath,
  SITE_URL,
).toString();
const BUSINESS_ID = `${SITE_URL}#local-business`;

function getBusinessAddress() {
  const { address } = businessProfile;

  return {
    "@type": "PostalAddress",
    streetAddress: address.streetAddress,
    addressLocality: address.addressLocality,
    addressRegion: address.addressRegion,
    postalCode: address.postalCode,
    addressCountry: address.addressCountry,
  };
}

function getOpeningHoursSpecification() {
  return businessProfile.hours.map((hour) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [hour.dayOfWeek],
    opens: hour.opens,
    closes: hour.closes,
  }));
}

function getBusinessProvider() {
  return {
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: businessProfile.name,
    url: SITE_URL,
    address: getBusinessAddress(),
    telephone: businessProfile.contact.phoneE164,
    email: businessProfile.contact.email,
    image: BUSINESS_IMAGE_URL,
    logo: BUSINESS_IMAGE_URL,
    hasMap: businessProfile.mapUrl,
    openingHoursSpecification: getOpeningHoursSpecification(),
    priceRange: businessProfile.priceRange,
    sameAs: businessProfile.socialLinks.map((link) => link.href),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessProfile.aggregateRating.ratingValue,
      reviewCount: businessProfile.aggregateRating.reviewCount,
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
    author: meta.authorName
      ? {
          "@type": "Person",
          name: meta.authorName,
        }
      : {
          "@id": BUSINESS_ID,
        },
    publisher: {
      "@id": BUSINESS_ID,
    },
    keywords:
      meta.tags && meta.tags.length > 0 ? meta.tags.join(", ") : undefined,
  };
}
