import { defineCollection, z } from 'astro:content';

export const skillsCollectionSchema = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().optional(),
    recruiterValue: z.number().min(0).max(10),
    parentSkillId: z.string().optional(),
  }),
});
