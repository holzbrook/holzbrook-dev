import { defineCollection, z } from 'astro:content';

export const hobbiesCollectionSchema = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    hobbyId: z.string(),
    description: z.string(),
    icon: z.string(),
    sections: z.array(
      z.object({
        title: z.string(),
        content: z.array(z.string()),
      })
    ),
  }),
});
