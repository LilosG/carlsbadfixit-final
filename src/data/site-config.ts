export interface PostalAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface BusinessHour {
  dayOfWeek: string;
  opens: string;
  closes: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface DefaultSeoConfig {
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultOgImagePath: string;
  ogLocale: string;
  twitterHandle?: string;
}

export interface FormConfig {
  estimateRequestAction: string;
  subjects: {
    quickEstimate: string;
    contact: string;
  };
}

export interface BusinessProfile {
  name: string;
  tagline: string;
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    phoneE164: string;
    email: string;
  };
  address: PostalAddress;
  mapUrl: string;
  priceRange: string;
  aggregateRating: {
    ratingValue: string;
    reviewCount: number;
  };
  serviceAreaLabel: string;
  hours: BusinessHour[];
  socialLinks: SocialLink[];
}

export const defaultSeo: DefaultSeoConfig = {
  siteUrl: "https://www.carlsbadfixit.com",
  defaultTitle: "Carlsbad Fix It | Handyman Services in Carlsbad, CA",
  defaultDescription:
    "Local handyman for home repairs, installations, and maintenance in Carlsbad, California.",
  defaultOgImagePath: "/images/logo/logo-medium.png",
  ogLocale: "en_US",
  twitterHandle: "@carlsbadfixit",
};

export const forms: FormConfig = {
  estimateRequestAction: "https://formspree.io/f/mdkvzynw",
  subjects: {
    quickEstimate: "New quick estimate request from Carlsbad Fix It",
    contact: "New contact from Carlsbad Fix It contact page",
  },
};

export const businessProfile: BusinessProfile = {
  name: "Carlsbad Fix It",
  tagline: "Local handyman in Carlsbad, CA",
  contact: {
    phoneDisplay: "(808) 226-6681",
    phoneHref: "tel:+18082266681",
    phoneE164: "+1-808-226-6681",
    email: "carlsbadfixit@gmail.com",
  },
  address: {
    streetAddress: "3027 Greenwich St",
    addressLocality: "Carlsbad",
    addressRegion: "CA",
    postalCode: "92010",
    addressCountry: "US",
  },
  mapUrl: "https://maps.app.goo.gl/SLn6g6JEFRTLLWPRA",
  priceRange: "$$",
  aggregateRating: {
    ratingValue: "5.0",
    reviewCount: 4,
  },
  serviceAreaLabel: "Carlsbad and nearby North County San Diego communities",
  hours: [
    {
      dayOfWeek: "Monday",
      opens: "08:00",
      closes: "17:00",
    },
    {
      dayOfWeek: "Tuesday",
      opens: "08:00",
      closes: "17:00",
    },
    {
      dayOfWeek: "Wednesday",
      opens: "08:00",
      closes: "17:00",
    },
    {
      dayOfWeek: "Thursday",
      opens: "08:00",
      closes: "17:00",
    },
    {
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  socialLinks: [
    {
      label: "Google Business Profile",
      href: "https://maps.app.goo.gl/SLn6g6JEFRTLLWPRA",
    },
    {
      label: "Lilos Growth",
      href: "https://lilosgrowth.com",
    },
  ],
};

export const siteConfig = {
  defaultSeo,
  forms,
  businessProfile,
} as const;

export default siteConfig;
