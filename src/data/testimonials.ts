export interface Testimonial {
  name: string;
  location: string;
  text: string;
  source: string;
}

export const homeTestimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Carlsbad, CA",
    text: "Showed up on time, fixed our drywall and a few small items in one visit. Very easy to work with.",
    source: "Homeowner",
  },
  {
    name: "David R.",
    location: "Encinitas, CA",
    text: "Clear estimate, no surprises, and everything was cleaned up before they left. Highly recommend.",
    source: "Homeowner",
  },
  {
    name: "Rachel K.",
    location: "Vista, CA",
    text: "Our go-to for small repairs and maintenance between tenants. Reliable and professional.",
    source: "Small landlord",
  },
];
