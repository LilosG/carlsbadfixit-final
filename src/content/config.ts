import { defineCollection, z } from "astro:content";

const serviceAreas = [
  "carlsbad",
  "oceanside",
  "encinitas",
  "vista",
  "san-marcos",
  "bressi-ranch",
] as const;

const services = [
  "carpentry-woodwork",
  "electrical",
  "furniture-assembly-installation",
  "plumbing-fixtures-repairs",
  "honey-do-lists-small-repairs",
  "drywall-repair",
  "tv-mounting",
] as const;

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string().default("Tino"),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    serviceAreas: z.array(z.enum(serviceAreas)).default([]),
    services: z.array(z.enum(services)).default([]),
    featured: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    canonical: z.string().optional(),
  }),
});

export const collections = { blog };
