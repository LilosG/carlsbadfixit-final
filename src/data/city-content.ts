export interface CityPopularProject {
  title: string;
  summary: string;
}

export interface CityReviewSnippet {
  quote: string;
  name: string;
  location?: string;
  role?: string;
}

export interface CityContent {
  intro?: string;
  popularProjects?: CityPopularProject[];
  neighborhoods?: string[];
  propertyTypes?: string[];
  landlordNote?: string;
  businessNote?: string;
  reviewSnippet?: CityReviewSnippet;
}

export const cityContent: Record<string, CityContent> = {
  carlsbad: {
    intro:
      "Local handyman services for homeowners in Carlsbad, CA and nearby neighborhoods. Typical visits combine carpentry, drywall repair, fixture swaps, and small repair items into a single, tidy service window.",
    popularProjects: [
      {
        title: "Fence and gate repairs",
        summary:
          "Replacing damaged fence sections, tightening hardware, and tuning gates so they close smoothly again.",
      },
      {
        title: "Drywall and trim touch-ups",
        summary:
          "Patching wall dings and holes, repairing corners, and updating baseboards or casing where needed.",
      },
      {
        title: "Lighting, fan, and TV updates",
        summary:
          "Swapping light fixtures and fans, adding dimmers, and mounting TVs with cables organized where possible.",
      },
    ],
    neighborhoods: [
      "Olde Carlsbad",
      "Village area",
      "La Costa",
      "Bressi Ranch",
      "Calavera Hills",
      "Aviara and nearby communities",
    ],
    propertyTypes: [
      "Single-family homes",
      "Townhomes and condos",
      "Smaller rental homes",
      "Home offices and studios",
    ],
    landlordNote:
      "Helpful for small rental portfolios that need occasional drywall repairs, fixture swaps, or honey-do style lists between longer tenancies.",
    businessNote:
      "Light repairs and small improvement projects for Carlsbad offices, studios, and storefronts that want a tidy result with minimal disruption.",
    reviewSnippet: {
      quote:
        "They handled drywall repairs, a few trim fixes, and a new light in one visit. Everything looked great and was cleaned up before they left.",
      name: "Sarah M.",
      location: "Carlsbad, CA",
      role: "Homeowner",
    },
  },

  oceanside: {
    intro:
      "Handyman visits for small to medium home projects in Oceanside, CA and nearby coastal neighborhoods. Visits are scoped so work can be completed in a clear service window with realistic timing.",
    popularProjects: [
      {
        title: "Coastal wear-and-tear repairs",
        summary:
          "Tightening loose exterior hardware, replacing rusted fasteners, and addressing small patches of wood rot before they spread.",
      },
      {
        title: "Lighting and electrical updates",
        summary:
          "Swapping tired light fixtures and fans, adding dimmers and smart switches, and troubleshooting simple non-code issues.",
      },
      {
        title: "Rental turnover punch lists",
        summary:
          "Touching up paint, adjusting doors, and taking care of small repairs between tenants or short-term rental guests.",
      },
    ],
    neighborhoods: [
      "Fire Mountain",
      "South Oceanside",
      "Downtown Oceanside",
      "Rancho Del Oro",
      "Ocean Hills",
      "North Valley and nearby communities",
    ],
    propertyTypes: [
      "Single-family homes and cottages",
      "Townhomes and condos",
      "Small rental homes and ADUs",
      "Duplexes and small multifamily buildings",
    ],
    landlordNote:
      "Good fit for small punch lists between guests or tenants—tightening up loose items, touching up paint, and handling minor repairs so the property is ready for the next stay.",
    businessNote:
      "Light improvement projects for Oceanside storefronts, studios, and small offices, scheduled to minimize disruption to daily operations.",
    reviewSnippet: {
      quote:
        "Communication was clear, they arrived on time, and our Oceanside rental was ready for the next guests without any loose ends.",
      name: "Josh T.",
      location: "Oceanside, CA",
      role: "Small landlord",
    },
  },

  encinitas: {
    intro:
      "Handyman services for small and medium projects across Encinitas communities. Visits are planned around realistic timing, tidy work areas, and clear expectations on what will be completed.",
    popularProjects: [
      {
        title: "Interior carpentry and woodwork",
        summary:
          "Repairing trim, casing, and baseboards; installing shelves; and tightening up small framing details that make rooms feel finished.",
      },
      {
        title: "Fixture swaps and small repairs",
        summary:
          "Updating faucets, swapping hardware, and taking care of the small fixes that pile up in busy homes.",
      },
      {
        title: "Drywall patches and paint touch-ups",
        summary:
          "Patching nail pops, repairing cracks, and blending in paint so patched areas do not draw attention.",
      },
    ],
    neighborhoods: [
      "Leucadia",
      "Old Encinitas",
      "New Encinitas",
      "Cardiff-by-the-Sea",
      "Olivenhain",
    ],
    propertyTypes: [
      "Single-family homes",
      "Townhomes and condos",
      "Smaller rental properties",
      "Home offices and creative studios",
    ],
    landlordNote:
      "Useful for investors and small landlords who need occasional touch-ups and repairs between longer tenancies without engaging a full remodel contractor.",
    businessNote:
      "Light repairs and adjustments for Encinitas boutiques, studios, and professional offices that want work completed cleanly and on a predictable schedule.",
    reviewSnippet: {
      quote:
        "They worked neatly around our family schedule, kept us in the loop, and left everything looking finished and put together.",
      name: "Emily R.",
      location: "Encinitas, CA",
      role: "Homeowner",
    },
  },

  vista: {
    intro:
      "Handyman visits focused on small to medium home projects in Vista, CA and nearby neighborhoods. Many projects can be combined into a single visit wherever possible.",
    popularProjects: [
      {
        title: "Honey-do lists and small repairs",
        summary:
          "Tackling a mixed list of small repairs—doors that stick, hardware that needs tightening, and fixtures that need attention.",
      },
      {
        title: "Drywall and ceiling patches",
        summary:
          "Repairing small ceiling stains after plumbing fixes, patching holes, and blending in texture and paint.",
      },
      {
        title: "Fence and yard structures",
        summary:
          "Repairing fence panels and gates, tuning up small outdoor structures, and replacing worn hardware.",
      },
    ],
    neighborhoods: [
      "Shadowridge",
      "Vista Village area",
      "Buena Creek",
      "Twin Oaks Valley",
      "North Vista neighborhoods",
    ],
    propertyTypes: [
      "Single-family homes",
      "Townhomes and condos",
      "Small rental homes and duplexes",
      "Manufactured homes and cottages",
    ],
    landlordNote:
      "Helpful for small portfolios where each visit needs to handle a list of issues in one trip—ideal for move-in and move-out touch-ups.",
    businessNote:
      "Service for Vista offices, service businesses, and studios that need basic repairs handled without a large project crew.",
    reviewSnippet: {
      quote:
        "They knocked out a full list of little issues in one visit and left the house in much better shape than when they arrived.",
      name: "Carlos G.",
      location: "Vista, CA",
      role: "Homeowner",
    },
  },

  "san-marcos": {
    intro:
      "Handyman services for townhomes, condos, and single-family homes in San Marcos, CA. Visits are scheduled to keep travel efficient and maximize time spent on actual repairs.",
    popularProjects: [
      {
        title: "TV mounting and media walls",
        summary:
          "Mounting TVs, organizing basic cabling where possible, and making sure brackets are safely anchored into framing.",
      },
      {
        title: "Furniture assembly and installation",
        summary:
          "Assembling flat-pack furniture, anchoring shelves and cabinets, and securing tall pieces to walls for safety.",
      },
      {
        title: "Fixture and hardware updates",
        summary:
          "Swapping faucets, replacing dated hardware, and updating small details that make newer homes feel customized.",
      },
    ],
    neighborhoods: [
      "San Elijo Hills",
      "Discovery Hills",
      "Lake San Marcos",
      "Twin Oaks Valley",
      "Old Creek Ranch and nearby communities",
    ],
    propertyTypes: [
      "Single-family homes",
      "Townhomes and condos",
      "Student and faculty rentals",
      "Small commercial suites and offices",
    ],
    landlordNote:
      "Useful for owners of student and faculty rentals who need periodic touch-ups, fixture swaps, and small repairs between tenants.",
    businessNote:
      "Light repairs and improvements for professional offices and studios in San Marcos that prefer small, clearly scoped visits.",
    reviewSnippet: {
      quote:
        "Scheduling was easy, the work was tidy, and everything was wrapped up within the service window they promised.",
      name: "Lauren P.",
      location: "San Marcos, CA",
      role: "Homeowner",
    },
  },

  "bressi-ranch": {
    intro:
      "Handyman visits for homes in Bressi Ranch and nearby parts of Carlsbad. Typical visits combine fixture swaps, drywall touch-ups, and small repairs into a single, tidy service window.",
    popularProjects: [
      {
        title: "Punch-list visits between life stages",
        summary:
          "Clearing a mixed list of repairs before new babies, guests, or busy seasons so the house feels caught up and ready to enjoy.",
      },
      {
        title: "Fixture and hardware updates",
        summary:
          "Swapping dated faucets, lights, and cabinet hardware so builder-grade spaces feel more finished without a full remodel.",
      },
      {
        title: "Fence, gate, and exterior touch-ups",
        summary:
          "Tuning up small fence sections, gate latches, and other obvious exterior wear so front and side yards feel tidy again.",
      },
    ],
    neighborhoods: [
      "Bressi Ranch",
      "Robertson Ranch",
      "La Costa Greens and nearby communities",
    ],
    propertyTypes: [
      "Single-family homes",
      "Townhomes and condos",
      "Smaller rental homes",
      "Home offices and studios",
    ],
    landlordNote:
      "Useful for owners of a few Bressi Ranch rentals who need punch-list style visits between tenants instead of coordinating a full remodel crew.",
    businessNote:
      "Light repairs and presentation-focused updates for nearby offices and studios that prefer small, clearly scoped visits over large construction projects.",
    reviewSnippet: {
      quote:
        "They helped us knock out a list of small repairs and fixture upgrades so the house felt ready for company again.",
      name: "Megan D.",
      location: "Bressi Ranch, CA",
      role: "Homeowner",
    },
  },
};
