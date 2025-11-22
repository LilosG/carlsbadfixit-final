export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  primary?: boolean;
  examples?: string[];
}

export const services: Service[] = [
  {
    slug: "carpentry-woodwork",
    name: "Carpentry & Woodwork",
    shortDescription: "Framing, pergolas, fences, gates, trim, doors, sheds, and other small structures.",
    primary: true,
    examples: [
      "Repair or replace damaged fence sections",
      "Install new interior or exterior doors",
      "Build or repair wood gates",
      "Install baseboards, casing, and trim",
      "Assemble and install small sheds or storage structures"
    ]
  },
  {
    slug: "electrical",
    name: "Electrical",
    shortDescription: "Lighting, outlets, switches, and small electrical projects around the home.",
    examples: [
      "Replace light fixtures and ceiling fans",
      "Install dimmers, switches, and smart controls",
      "Add or replace standard outlets",
      "Swap old vanity or kitchen lighting",
      "Troubleshoot simple non-code electrical issues"
    ]
  },
  {
    slug: "furniture-assembly-installation",
    name: "Furniture Assembly & Installations",
    shortDescription: "Assembly and installation for home and office furniture, shelves, and wall décor.",
    examples: [
      "Assemble beds, dressers, and nightstands",
      "Assemble desks, office chairs, and shelving",
      "Install wall shelves and floating shelves",
      "Hang artwork, mirrors, and framed photos",
      "Install TV stands, media consoles, and storage units"
    ]
  },
  {
    slug: "plumbing-fixtures-repairs",
    name: "Plumbing Fixtures & Repairs",
    shortDescription: "Small plumbing projects like faucets, sinks, disposals, toilets, and shower heads.",
    examples: [
      "Replace faucets in kitchens and bathrooms",
      "Install or replace garbage disposals",
      "Replace toilets and wax rings",
      "Swap shower heads and hand showers",
      "Fix minor leaks at visible supply connections"
    ]
  },
  {
    slug: "honey-do-lists-small-repairs",
    name: "Honey-Do Lists & Small Repairs",
    shortDescription: "Tackle a list of small projects and fixes around the house in a single visit.",
    examples: [
      "Tighten loose hinges, knobs, and handles",
      "Patch small wall dings and nail holes",
      "Adjust sticky doors and cabinets",
      "Replace vent covers, registers, and door stops",
      "Mix-and-match tasks into one service visit"
    ]
  },
  {
    slug: "drywall-repair",
    name: "Drywall Repair",
    shortDescription: "Patching holes, cracks, and dents in walls and ceilings with blending texture and paint.",
    examples: [
      "Patch small to medium drywall holes",
      "Repair cracks along seams and corners",
      "Fix door knob holes behind doors",
      "Blend new texture into existing walls",
      "Prep repaired areas for painting"
    ]
  },
  {
    slug: "tv-mounting",
    name: "TV Mounting",
    shortDescription: "Safe, clean wall mounting for flat-screen TVs and media setups with hidden cabling when possible.",
    examples: [
      "Mount TVs on drywall or above consoles",
      "Install tilt or full-motion TV mounts",
      "Route and conceal surface wiring where possible",
      "Set up basic soundbars and small speakers",
      "Secure cables and components for a tidy look"
    ]
  }
];
