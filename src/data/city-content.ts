export interface CityContent {
  intro?: string;
  popularProjects?: {
    title: string;
    summary: string;
  }[];
  neighborhoods?: string[];
  propertyTypes?: string[];
  landlordNote?: string;
  businessNote?: string;
  reviewSnippet?: {
    quote: string;
    name: string;
    location: string;
    role?: string;
  };
}

export const cityContent: Record<string, CityContent> = {
  carlsbad: {
    intro:
      "Local handyman services for homeowners in Carlsbad, CA and nearby neighborhoods. Typical visits combine carpentry, drywall repair, fixture swaps, and small repair items into a single, tidy service window.",
    popularProjects: [
      {
        title: "Fence and gate repairs",
        summary:
          "Repairing damaged fence sections, tightening hardware, and tuning gates so they close smoothly again."
      },
      {
        title: "Drywall and trim touch-ups",
        summary:
          "Patching wall dings and holes, repairing corners, and updating baseboards or casing where needed."
      },
      {
        title: "Lighting, fan, and TV updates",
        summary:
          "Swapping light fixtures and fans, adding dimmers, and mounting TVs with cables organized where possible."
      }
    ],
    neighborhoods: [
      "Olde Carlsbad",
      "Village area",
      "La Costa",
      "Bressi Ranch",
      "Calavera Hills",
      "Aviara and nearby communities"
    ],
    propertyTypes: [
      "Single-family homes",
      "Townhomes and condos",
      "Smaller rental homes",
      "Home offices and studios"
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
      role: "Homeowner"
    }
  },

  oceanside: {
    intro:
      "Handyman visits in Oceanside often focus on carpentry and woodwork, lighting and fan updates, drywall repair, and honey-do style punch lists for coastal homes.",
    popularProjects: [
      {
        title: "Coastal carpentry maintenance",
        summary:
          "Tightening and repairing exterior gates, railings, and small wood structures that see sun and salt exposure."
      },
      {
        title: "Fixture and hardware refresh",
        summary:
          "Replacing faucets, shower heads, and cabinet hardware to freshen up kitchens and baths without a full remodel."
      },
      {
        title: "Small drywall and paint prep",
        summary:
          "Patching drywall around previous fixtures, smoothing small areas, and preparing walls for painting."
      }
    ],
    neighborhoods: [
      "Fire Mountain",
      "South Oceanside",
      "Rancho Del Oro",
      "Arrowood",
      "Downtown Oceanside condos and townhomes"
    ],
    propertyTypes: [
      "Primary homes",
      "Duplexes and smaller rentals",
      "Condos and townhomes",
      "Small commercial suites"
    ],
    landlordNote:
      "Good fit for owners who occasionally need drywall repairs, plumbing fixture swaps, and other small tasks handled in a single visit.",
    businessNote:
      "Minor repairs and improvements for Oceanside offices and storefronts, such as wall repair, shelving installs, and fixture changes."
  },

  encinitas: {
    intro:
      "Encinitas homeowners often use Carlsbad Fix It for fixture updates, drywall repair, small carpentry projects, and TV mounting between larger remodels.",
    popularProjects: [
      {
        title: "Kitchen and bath fixture updates",
        summary:
          "Replacing faucets, disposals, shower heads, and vanity lighting to modernize high-use spaces."
      },
      {
        title: "Built-ins and storage installs",
        summary:
          "Assembling and anchoring shelving, closet systems, and storage cabinets for busy households."
      },
      {
        title: "Wall repair and TV mounting",
        summary:
          "Repairing drywall from previous mounts, patching cable holes, and mounting TVs with a clean final look."
      }
    ],
    neighborhoods: [
      "Leucadia",
      "Cardiff-by-the-Sea",
      "New Encinitas",
      "Olivenhain",
      "Encinitas Ranch"
    ],
    propertyTypes: [
      "Single-family homes",
      "Smaller rentals and ADUs",
      "Condos and townhomes",
      "Home offices and creative studios"
    ],
    landlordNote:
      "Occasional visits for small repair lists, fixture swaps, and drywall patches in Encinitas rental homes.",
    businessNote:
      "Light handyman work for Encinitas offices and studios, including shelving installs and small repairs."
  },

  vista: {
    intro:
      "Vista homeowners rely on Carlsbad Fix It for focused handyman visits that combine drywall repair, fixture swaps, carpentry, and TV mounting into a single service window.",
    popularProjects: [
      {
        title: "Drywall patching and texture blends",
        summary:
          "Repairing holes, cracks, and dents in walls and ceilings with texture blended to match the surrounding area."
      },
      {
        title: "Fan and lighting upgrades",
        summary:
          "Replacing dated fixtures with modern ceiling fans and lights, adding dimmers where appropriate."
      },
      {
        title: "Door, lock, and hardware fixes",
        summary:
          "Adjusting sticky doors, replacing locks, and updating handles or hinges for smoother operation."
      }
    ],
    neighborhoods: [
      "Shadowridge",
      "Vista Village area",
      "Buena Creek",
      "South Vista neighborhoods"
    ],
    propertyTypes: [
      "Single-family homes",
      "Townhomes and condos",
      "Smaller rentals and investment properties"
    ],
    landlordNote:
      "Ideal for small lists of drywall repair, carpentry fixes, and fixture replacements in Vista properties.",
    businessNote:
      "Small handyman projects for Vista offices and workspaces, such as TV mounting, shelving, and minor repairs."
  },

  "san-marcos": {
    intro:
      "In San Marcos, many handyman visits focus on drywall repair, small carpentry and trim projects, lighting and fan updates, and TV mounting for busy households and students.",
    popularProjects: [
      {
        title: "Wall repair in active homes",
        summary:
          "Patching drywall from daily wear, previous shelves, and older mounts, then preparing surfaces for paint."
      },
      {
        title: "Kitchen and bath tune-ups",
        summary:
          "Swapping faucets, disposals, shower heads, and lighting to keep high-use spaces working smoothly."
      },
      {
        title: "TV mounting and media setups",
        summary:
          "Mounting TVs, installing brackets, and organizing cables to keep shared spaces tidy."
      }
    ],
    neighborhoods: [
      "San Elijo Hills",
      "Discovery Hills",
      "Twin Oaks",
      "Lake San Marcos",
      "Neighborhoods near CSUSM"
    ],
    propertyTypes: [
      "Single-family homes",
      "Condos and townhomes",
      "Student rentals",
      "Small landlord portfolios"
    ],
    landlordNote:
      "Good fit for owners who occasionally need drywall repair, lighting or fan swaps, and other small projects in San Marcos homes.",
    businessNote:
      "Light handyman work for San Marcos offices and studios, including carpentry, wall repair, and fixture changes."
  }
};
