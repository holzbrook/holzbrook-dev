import { defineCollection, z } from 'astro:content';

export const familyMembersCollectionSchema = defineCollection({
  type: 'content',
  schema: z.object({
    memberId: z.string(),
    order: z.number(),
    emoji: z.string(),
    firstName: z.string(),
    middleName: z.string(),
    lastName: z.string(),
    nickName: z.string().optional(),
    role: z.string(),
    bio: z.string(),
    interests: z.array(z.string()),
  }),
});
