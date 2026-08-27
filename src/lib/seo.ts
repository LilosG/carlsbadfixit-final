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
const BUSINESS_ID = `${SITE_URL}#localbusiness`;

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
  };
}

export function getLocalBusinessStubJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
  };
}

const AREA_SAME_AS: Record<string, string> = {
  "Carlsbad, CA": "https://en.wikipedia.org/wiki/Carlsbad,_California",
  "Oceanside, CA": "https://en.wikipedia.org/wiki/Oceanside,_California",
  "Encinitas, CA": "https://en.wikipedia.org/wiki/Encinitas,_California",
  "Vista, CA": "https://en.wikipedia.org/wiki/Vista,_California",
  "San Marcos, CA": "https://en.wikipedia.org/wiki/San_Marcos,_California",
  "Bressi Ranch, CA": "https://en.wikipedia.org/wiki/Bressi_Ranch,_California",
};

export function getLocalBusinessJsonLd(areaLabels: string[]) {
  const business = getBusinessProvider();

  return {
    "@context": "https://schema.org",
    ...business,
    areaServed: areaLabels.map((label) => ({
      "@type": "City",
      name: label,
      ...(AREA_SAME_AS[label] ? { sameAs: AREA_SAME_AS[label] } : {}),
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
      "@type": "City",
      name: area.label,
      ...(AREA_SAME_AS[area.label] ? { sameAs: AREA_SAME_AS[area.label] } : {}),
    },
    provider: {
      "@id": BUSINESS_ID,
    },
  };
}

export function getHowToJsonLd(
  serviceName: string,
  cityLabel: string,
  pageUrl: string,
) {
  const url = pageUrl.startsWith("http")
    ? pageUrl
    : new URL(pageUrl, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to schedule ${serviceName} in ${cityLabel}`,
    description: `A clear 3-step process for ${serviceName.toLowerCase()} visits in ${cityLabel}: share your project list, review the estimate, and get the work done with a final walkthrough.`,
    url,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Share your project list and photos",
        text: `Send a brief description of the work, a few photos, and your location in ${cityLabel} or another North County city. This helps confirm that a handyman visit is the right fit and lets us give you an accurate estimate upfront.`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Review your estimate and schedule",
        text: "You will receive clear expectations on what can be completed, how long the visit will take, and how material costs will be handled before you commit to anything.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "We complete the visit and clean up",
        text: "Work is completed with careful protection, clean work areas, and a final walkthrough so you know what was finished and where to look if any questions come up later.",
      },
    ],
    totalTime: "PT2H",
    performTime: "PT2H",
  };
}

export function getServiceReviewJsonLd(review: {
  quote: string;
  name: string;
  location: string;
  role?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: review.quote,
    author: {
      "@type": "Person",
      name: review.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    itemReviewed: {
      "@id": `${SITE_URL}#localbusiness`,
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

export type TestimonialItem = {
  name: string;
  location: string;
  text: string;
  source?: string;
};

export function getReviewsJsonLd(testimonials: TestimonialItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.text,
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      itemReviewed: {
        "@id": `${SITE_URL}#localbusiness`,
      },
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
