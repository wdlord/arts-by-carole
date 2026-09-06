import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

// artwork
const artwork = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/artwork',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    size: z.string().optional(),
    medium: z.string().optional(),
    categories: z
    .array(
      z.string().transform(value =>
        value.trim().toLowerCase()
      )
    )
    .default([]),
    available: z.boolean().default(false),
    featured: z.boolean().default(false),
    image: image(),
    description: z.string().optional(),
  }),
});

// ephemera
const ephemera = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/ephemera',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    categories: z
    .array(
      z.string().transform(value =>
        value.trim().toLowerCase()
      )
    )
    .default([]),
    available: z.boolean().default(false),
    image: image(),
    description: z.string().optional(),
  }),
});

// autograph
const autograph = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/autographs',
  }),
  schema: ({ image }) => z.object({
    title: z.string(),
    categories: z
    .array(
      z.string().transform(value =>
        value.trim().toLowerCase()
      )
    )
    .default([]),
    image: image(),
    description: z.string().optional(),
  }),
});

// past exhibits
const pastExhibits = defineCollection({
  loader: file('src/content/past-exhibits/exhibits.json', {
    parser: (text) => {
      const { exhibits } = JSON.parse(text) as {
        exhibits: { title: string; description?: string }[];
      };
      return Object.fromEntries(
        exhibits.map((entry, index) => [String(index), entry])
      );
    },
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { artwork, ephemera, autograph, pastExhibits };