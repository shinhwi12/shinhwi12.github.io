import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const story = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/story' }),
  schema: z.object({
    title: z.string(),
    series: z.string(),
    chapter: z.number(),
    published: z.string(),
    excerpt: z.string(),
    previous: z.string().optional(),
    next: z.string().optional()
  })
});

const music = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/music' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['SHINHWI Originals', 'Project UNAC OST']),
    kind: z.string(),
    catalog: z.string(),
    release: z.string(),
    concept: z.string(),
    platforms: z.array(z.object({ label: z.string(), url: z.string() })).default([])
  })
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['World Art', 'Character Art', 'Music Visuals', 'Archive / Origins']),
    date: z.string(),
    source: z.string(),
    caption: z.string()
  })
});

const world = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/world' }),
  schema: z.object({
    title: z.string(),
    section: z.enum(['Overview', 'Characters', 'Factions', 'Glossary', 'Timeline', 'Archives']),
    order: z.number(),
    summary: z.string()
  })
});

export const collections = { story, music, gallery, world };
