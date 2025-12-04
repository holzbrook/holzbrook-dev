import { defineCollection, z } from 'astro:content';

const researchConceptSchema = z.object({
  title: z.string(),
  description: z.string(),
  details: z.array(z.string()).optional(),
});

const researchExampleSchema = z.object({
  title: z.string(),
  description: z.string(),
  code: z.string(),
  explanation: z.string(),
});

export const researchCollectionSchema = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
    intro: z.union([z.string(), z.array(z.string())]).optional(),
    githubUrl: z.string().url().optional(),
    status: z.enum(['research', 'development', 'patent-pending', 'published']),
    disclosureDate: z.string(),
    concepts: z.array(researchConceptSchema),
    technicalDomains: z.array(z.string()),
    keyInnovations: z.array(z.string()),
    potentialApplications: z.array(z.string()).optional(),
    notes: z.string().optional(),
    example: researchExampleSchema.optional(),
  }),
});

