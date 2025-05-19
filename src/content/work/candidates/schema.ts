import { defineCollection, z } from 'astro:content';

export const candidatesCollectionSchema = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    title: z.string(),
    email: z.string(),
    phone: z.string(),
    summary: z.string(),
    website: z.string().optional(),
    linkedIn: z.string().optional(),
    github: z.string().optional(),
  }),
});
