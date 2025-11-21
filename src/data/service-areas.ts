export interface ServiceArea {
  slug: string;
  name: string;
  label: string;
  primary?: boolean;
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "carlsbad",
    name: "Carlsbad",
    label: "Carlsbad, CA",
    primary: true
  },
  {
    slug: "oceanside",
    name: "Oceanside",
    label: "Oceanside, CA"
  },
  {
    slug: "encinitas",
    name: "Encinitas",
    label: "Encinitas, CA"
  },
  {
    slug: "vista",
    name: "Vista",
    label: "Vista, CA"
  },
  {
    slug: "san-marcos",
    name: "San Marcos",
    label: "San Marcos, CA"
  }
];
