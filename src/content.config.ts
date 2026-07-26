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

const albums = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/albums' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    artist: z.string(),
    releaseDate: z.string(),
    year: z.number(),
    category: z.enum(['SHINHWI ORIGINALS', 'PROJECT UNAC OST']),
    genre: z.string(),
    cover: z.string(),
    description: z.string(),
    catalogNumber: z.string().optional(),
    spotifyUrl: z.url().optional(),
    appleMusicUrl: z.url().optional(),
    amazonMusicUrl: z.url().optional(),
    youtubeMusicUrl: z.url().optional(),
    morePlatformUrl: z.url().optional(),
    featured: z.boolean().default(false),
    relatedWorld: z.string().optional(),
    relatedStory: z.string().optional(),
    bookletImages: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string()
    })).default([])
  })
});

const tracks = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tracks' }),
  schema: z.object({
    album: z.string(),
    number: z.number().int().positive(),
    title: z.string(),
    duration: z.string(),
    credits: z.array(z.object({
      role: z.string(),
      name: z.string()
    })).default([]),
    lyrics: z.string().optional(),
    commentary: z.string().optional()
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

export const collections = { story, albums, tracks, gallery, world };
