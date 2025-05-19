import { defineCollection, z } from 'astro:content';

export const familyInterestsCollectionSchema = defineCollection({
  type: 'content', // or 'data' if you don't have markdown body
  schema: z.object({
    id: z.string(),
    name: z.string(),
    emoji: z.string(),
    color: z.string(),
  }),
});
