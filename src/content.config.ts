import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artwork = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/artwork',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    size: z.string().optional(),
    medium: z.string().optional(),
    categories: z.array(z.string()).default([]),
    available: z.boolean().default(false),
    featured: z.boolean().default(false),
    image: image(),
    description: z.string().optional(),
  }),
});

export const collections = { artwork };