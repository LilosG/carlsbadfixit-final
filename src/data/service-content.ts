export interface ServiceFAQItem {
  question: string;
  answer: string;
}

export interface ServicePageContent {
  intro?: string;
  typicalProjectsHeading?: string;
  typicalProjectsIntro?: string;
  typicalProjectsColumns?: { title: string; items: string[] }[];
  pricingHeading?: string;
  pricingParagraphs?: string[];
  faq?: ServiceFAQItem[];
}

export const serviceContent: Record<string, ServicePageContent> = {
  "carpentry-woodwork": {
    intro:
      "Small to medium carpentry projects that focus on clean, functional repairs: fence sections, gates, trim, doors, and other details that make a home feel finished.",
    typicalProjectsHeading: "Typical carpentry and woodwork projects",
    typicalProjectsIntro:
      "Most visits combine a few of these items so they can be completed in a single service window.",
    typicalProjectsColumns: [
      {
        title: "Exterior repairs and small structures",
        items: [
          "Repair or replace damaged fence sections and gate posts",
          "Adjust or rebuild wood gates that no longer close correctly",
          "Tighten, replace, or add new gate hardware and latches",
          "Assemble and install small sheds or storage cabinets",
          "Replace rotted trim or small exterior wood details"
        ]
      },
      {
        title: "Interior trim and finish carpentry",
        items: [
          "Install or replace baseboards, casing, and simple trim profiles",
          "Replace damaged door jambs, stops, and strike plates",
          "Plane or adjust interior doors that rub or stick",
          "Install new interior or exterior doors where framing allows",
          "Patch, sand, and prep wood surfaces for painting"
        ]
      }
    ],
    pricingHeading: "How pricing works for carpentry and woodwork",
    pricingParagraphs: [
      "Smaller carpentry projects are often billed as a minimum service visit, especially when work is limited to one or two locations around the home.",
      "Larger projects, or work that involves multiple rooms or exterior areas, is typically quoted up front once the full scope is clear.",
      "Photos of the existing conditions are very helpful. When you request an estimate, include close-up photos of any damage along with a wider view that shows how the area fits into the rest of the space."
    ],
    faq: [
      {
        question: "Can you match my existing trim or fence style?",
        answer:
          "In many cases, yes. If the exact material is still available, we will aim to match it closely. When exact matches are not possible, we will suggest options that blend well with your existing style and explain any differences up front."
      },
      {
        question: "Do you build large decks or room additions?",
        answer:
          "No. Carlsbad Fix It focuses on small to medium carpentry projects such as fence repairs, gates, trim, and doors. Larger structural projects are better handled by a general contractor."
      }
    ]
  },

  electrical: {
    intro:
      "Clean, code-conscious help with small electrical projects such as fixture swaps, dimmers, and additional switches so rooms are brighter and easier to use.",
    typicalProjectsHeading: "Typical electrical projects",
    typicalProjectsIntro:
      "Electrical visits focus on small projects that can be safely completed without major rewiring.",
    typicalProjectsColumns: [
      {
        title: "Lighting upgrades",
        items: [
          "Swap outdated ceiling fixtures for new flush-mount or semi-flush lights",
          "Replace vanity lights in bathrooms for better, more even lighting",
          "Install or replace basic ceiling fans where wiring already exists",
          "Update kitchen or dining fixtures to match new finishes",
          "Replace failing or noisy bathroom fans where access allows"
        ]
      },
      {
        title: "Switches, dimmers, and outlets",
        items: [
          "Replace worn or noisy switches and standard dimmers",
          "Install modern rocker-style switches and wall plates",
          "Replace standard outlets in living spaces and bedrooms",
          "Add USB or tamper-resistant outlets where location is suitable",
          "Troubleshoot simple non-code issues such as loose devices or flickering from worn switches"
        ]
      }
    ],
    pricingHeading: "How pricing works for small electrical projects",
    pricingParagraphs: [
      "Pricing depends on access, ceiling height, and how many fixtures or devices are being replaced during the same visit.",
      "Many small swaps can be combined into a single minimum service visit when they are in the same general area of the home.",
      "Electrical work is scoped conservatively. If existing wiring or panels are not in good condition, you may be referred to a licensed electrician who handles larger or more complex projects."
    ],
    faq: [
      {
        question: "Do you run new circuits or upgrade electrical panels?",
        answer:
          "No. Carlsbad Fix It focuses on small fixture, switch, and outlet projects where the existing wiring and panel are in good condition. New circuits, sub-panels, and service upgrades are handled by full-service electrical contractors."
      },
      {
        question: "Can you install smart switches or smart dimmers?",
        answer:
          "Yes, in many cases. As long as the devices are compatible with your wiring and lighting, they can often be installed during a standard visit. Sharing product information and photos of the existing switches ahead of time is helpful."
      }
    ]
  },

  "furniture-assembly-installations": {
    intro:
      "Careful assembly and installation for furniture, shelving, and wall décor so rooms feel organized, balanced, and ready to use.",
    typicalProjectsHeading: "Typical furniture assembly and installation projects",
    typicalProjectsIntro:
      "Most appointments combine a few pieces of furniture or a mix of furniture and wall installations.",
    typicalProjectsColumns: [
      {
        title: "Furniture assembly",
        items: [
          "Assemble beds, dressers, and nightstands from flat-pack kits",
          "Set up desks, bookshelves, and office storage",
          "Assemble dining tables and chairs with all hardware secured",
          "Build storage cabinets for laundry rooms, garages, or hallways",
          "Level and adjust assembled pieces so doors and drawers work smoothly"
        ]
      },
      {
        title: "Wall mounting and décor",
        items: [
          "Install floating shelves and standard wall shelves with appropriate anchors",
          "Hang artwork, framed photos, and mirrors in drywall or over studs",
          "Mount small cabinets, coat racks, and wall hooks",
          "Center groupings of frames or décor along a wall or over furniture",
          "Secure tall furniture to walls with safety straps where helpful"
        ]
      }
    ],
    pricingHeading: "How pricing works for assembly and installations",
    pricingParagraphs: [
      "Pricing is based on the number of pieces, manufacturer complexity, and whether wall mounting is involved.",
      "Flat-pack furniture from different brands can often be combined into one visit as long as the total assembly time remains reasonable.",
      "Sharing product links or clear photos of the boxes and instruction sheets ahead of time helps estimate the time required and confirm that all parts and hardware are on site."
    ],
    faq: [
      {
        question: "Should I open the boxes before the visit?",
        answer:
          "It is not required, but opening boxes enough to confirm the correct items arrived and that no major parts are missing is helpful. If anything seems damaged or incomplete, it is best to address that with the retailer before scheduling assembly."
      },
      {
        question: "Can you move heavy furniture between rooms?",
        answer:
          "Light repositioning as part of an assembly visit is usually fine, but full-house furniture moving is not offered. Large moves are best handled by professional movers with the right equipment."
      }
    ]
  },

  "plumbing-fixtures-repairs": {
    intro:
      "Targeted help with small plumbing fixtures and repairs such as faucets, disposals, toilets, and shower heads where access is straightforward and shutoffs work properly.",
    typicalProjectsHeading: "Typical plumbing fixture projects",
    typicalProjectsIntro:
      "The focus is on visible fixtures and minor leaks, not whole-house plumbing or underground lines.",
    typicalProjectsColumns: [
      {
        title: "Fixture replacements",
        items: [
          "Replace kitchen and bathroom sink faucets with new standard models",
          "Install or replace garbage disposals where outlets and plumbing are in good condition",
          "Swap older shower heads for new fixed or handheld models",
          "Replace angle stops and supply lines at sinks and toilets where accessible",
          "Install new toilet tanks and bowls in the same location"
        ]
      },
      {
        title: "Minor repairs and adjustments",
        items: [
          "Address slow drips at faucet spouts or handles where parts are available",
          "Replace worn flappers, fill valves, and supply lines inside toilet tanks",
          "Tighten loose fixtures and escutcheons at sinks and showers",
          "Reseal around sinks and tubs with fresh caulking where needed",
          "Investigate small, visible leaks at traps or under-sink connections"
        ]
      }
    ],
    pricingHeading: "How pricing works for plumbing fixtures and repairs",
    pricingParagraphs: [
      "Most small plumbing tasks are quoted per fixture with a minimum service visit. Combining several fixtures into one visit helps spread out that minimum.",
      "Pricing assumes accessible shutoff valves, sound supply lines, and no hidden damage. If additional work is needed beyond small repairs, you may be referred to a plumbing specialist.",
      "Clear photos under sinks, behind toilets, and at the shutoff valves make it easier to confirm whether your project is a good fit before anything is scheduled."
    ],
    faq: [
      {
        question: "Do you work on main lines or sewer issues?",
        answer:
          "No. Carlsbad Fix It focuses on visible fixtures and small repairs. Main line, sewer, and major drain problems are best handled by a licensed plumbing company with specialized equipment."
      },
      {
        question: "Can you supply the faucets or fixtures?",
        answer:
          "In many cases, homeowners prefer to choose fixtures themselves to match style and finish. If you would like recommendations, general guidance can be provided, but you will typically purchase the fixtures directly."
      }
    ]
  },

  "honey-do-lists-small-repairs": {
    intro:
      "A flexible visit built around a list of small repairs, touch-ups, and adjustments throughout the home so you can clear several to-dos at once.",
    typicalProjectsHeading: "Typical honey-do and small repair projects",
    typicalProjectsIntro:
      "Each visit is scoped so the most important items on your list are prioritized within the available time.",
    typicalProjectsColumns: [
      {
        title: "Common repair items",
        items: [
          "Tighten or replace loose door and cabinet hardware",
          "Adjust doors that rub, stick, or do not latch correctly",
          "Patch small drywall dings, nail holes, and minor scuffs",
          "Replace missing or damaged trim pieces and transition strips",
          "Install or adjust door stops, bumpers, and basic weatherstripping"
        ]
      },
      {
        title: "Quick improvements",
        items: [
          "Swap out dated light fixtures, faucets, or cabinet pulls",
          "Install curtain rods, blinds, and basic window hardware",
          "Replace vent covers, register grilles, and switch plates",
          "Hang mirrors, artwork, and bulletin boards in living spaces",
          "Tidy up small safety concerns such as loose handrails where feasible"
        ]
      }
    ],
    pricingHeading: "How pricing works for honey-do visits",
    pricingParagraphs: [
      "Honey-do visits are usually booked as a block of time with a clear list of priorities. The list can mix repairs, fixture swaps, and small installations.",
      "Before scheduling, you will be asked to share your full list along with photos of anything that might be more involved. This helps confirm what can realistically be completed within one visit.",
      "If certain items turn out to be larger than expected, they may be separated into a follow-up visit so that small, quick wins still get checked off right away."
    ],
    faq: [
      {
        question: "How many items can you complete in one visit?",
        answer:
          "It depends on the complexity of each task. Several quick items such as hardware swaps, small patches, and installations can often be completed in a single visit. Larger items such as multiple drywall repairs or several fixture replacements will take longer."
      },
      {
        question: "Can I add new items on the day of the visit?",
        answer:
          "If time allows, additional small tasks can sometimes be added. However, the original list is used to plan the visit, so sharing everything up front is the best way to make sure the right tools and materials are on hand."
      }
    ]
  },

  "drywall-repair": {
    intro:
      "Neat, blended repairs for holes, cracks, and dents in walls and ceilings so patched areas disappear as much as possible once painted.",
    typicalProjectsHeading: "Typical drywall repair projects",
    typicalProjectsIntro:
      "Drywall visits are scoped to keep dust under control and leave surfaces ready for primer and paint.",
    typicalProjectsColumns: [
      {
        title: "Wall and ceiling repairs",
        items: [
          "Patch small to medium holes from accidents, anchors, or previous work",
          "Repair cracks along seams, corners, and around doors or windows",
          "Fix door knob holes and impact damage behind doors",
          "Cut out and replace damaged sections around fixtures where framing allows",
          "Skim and smooth minor texture inconsistencies in localized areas"
        ]
      },
      {
        title: "Finishing and preparation",
        items: [
          "Apply joint compound in multiple coats with sanding between steps",
          "Recreate common wall textures in North County homes where possible",
          "Feather edges into surrounding areas to minimize visible transitions",
          "Prime repaired areas so they are ready for paint",
          "Coordinate with your painter or provide basic touch-up guidance"
        ]
      }
    ],
    pricingHeading: "How pricing works for drywall repair",
    pricingParagraphs: [
      "Drywall pricing is based on the number of repair locations, size of each area, and whether ceiling work or ladder work is required.",
      "Multiple small repairs in the same room are often grouped together for efficiency. Repairs spread across several rooms may be broken into phases.",
      "Photos taken straight-on and from a few steps back help determine how involved the repair will be and whether it fits within a standard visit."
    ],
    faq: [
      {
        question: "Do you handle large areas of flood or major water damage?",
        answer:
          "No. Extensive water damage, mold issues, or full-room gut repairs are best handled by a remediation or restoration company. Carlsbad Fix It focuses on localized repairs and patches."
      },
      {
        question: "Can you match my existing wall texture exactly?",
        answer:
          "The goal is always to blend new texture as closely as possible, but perfect matches are not always realistic. You will receive an honest expectation of how well the repair is likely to blend in your specific space."
      }
    ]
  },

  "tv-mounting": {
    intro:
      "Safe, clean mounting for flat-screen TVs with thoughtful cable routing so living rooms and bedrooms feel organized instead of cluttered.",
    typicalProjectsHeading: "Typical TV mounting projects",
    typicalProjectsIntro:
      "Each mounting job is planned around your viewing height, wall construction, and available power and signal connections.",
    typicalProjectsColumns: [
      {
        title: "Standard wall mounting",
        items: [
          "Mount TVs on drywall or over stud framing using appropriate anchors",
          "Install fixed, tilt, or basic full-motion mounts you provide",
          "Center TVs over consoles, fireplaces, or stand-alone walls",
          "Adjust existing mounts to improve viewing height or level",
          "Secure soundbars or small speakers to compatible brackets"
        ]
      },
      {
        title: "Cable management",
        items: [
          "Route and bundle surface cables with raceways where feasible",
          "Tidy up existing power strips and streaming devices near consoles",
          "Advise on locations for future outlets or low-voltage lines",
          "Hide or shorten visible cabling where safe and practical",
          "Label key connections so future changes are easier"
        ]
      }
    ],
    pricingHeading: "How pricing works for TV mounting",
    pricingParagraphs: [
      "Pricing depends on TV size, mounting height, wall construction, and how much cable management is required.",
      "Most standard drywall mounts with nearby power and signal connections can be handled within a typical visit, especially when brackets are on site.",
      "Projects that require fishing wires inside walls, opening drywall, or adding power may require coordination with a licensed electrician and are quoted more cautiously."
    ],
    faq: [
      {
        question: "Do you provide the TV mount and cables?",
        answer:
          "Homeowners often purchase their own mounts so they can choose specific features and compatibility with their TV. Recommendations on common mount types can be provided if needed, but mounts and specialty cables are typically supplied by the homeowner."
      },
      {
        question: "Can you hide all of the wires inside the wall?",
        answer:
          "In some cases, yes, but only when it can be done safely and in line with electrical best practices. Many projects use a mix of in-wall kits and surface raceways. The options for your specific wall and layout will be discussed before work begins."
      }
    ]
  }
};
