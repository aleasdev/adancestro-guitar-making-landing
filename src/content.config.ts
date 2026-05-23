import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guitars = defineCollection({
  loader: glob({ base: './src/content/guitars', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    specs: z.object({
      model: z.string(),
      topWood: z.string(),
      backSides: z.string(),
      neck: z.string(),
      fingerboard: z.string(),
      year: z.number(),
    }),
    woodNotes: z.string().optional(),
    images: z.array(z.string()),
    featured: z.boolean().optional().default(false),
  }),
});

const instruments = defineCollection({
  loader: glob({ base: './src/content/instruments', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    type: z.string(),
    materials: z.string(),
    images: z.array(z.string()),
    featured: z.boolean().optional().default(false),
  }),
});

const workshop = defineCollection({
  loader: glob({ base: './src/content/workshop', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    images: z.array(z.string()),
    tags: z.array(z.string()).optional().default([]),
  }),
});

const courses = defineCollection({
  loader: glob({ base: './src/content/courses', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    image: z.string(),
    details: z.string(),
    price: z.string().optional(),
    duration: z.string().optional(),
    benefits: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
  }),
});

export const collections = { guitars, instruments, workshop, courses, pages };
