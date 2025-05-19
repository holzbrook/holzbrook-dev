import { defineCollection, z } from 'astro:content';

export const jobsCollectionSchema = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    company: z.string(),
    title: z.string(),
    period: z.string(),
    description: z.string(),
    highlights: z.array(z.string()),
  }),
});
