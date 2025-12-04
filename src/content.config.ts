import { candidatesCollectionSchema } from './content/work/candidates/schema';
import { jobsCollectionSchema } from './content/work/jobs/schema';
import { skillsCollectionSchema } from './content/work/skills/schema';
import { researchCollectionSchema } from './content/work/research/schema';
import { hobbiesCollectionSchema } from './content/play/hobbies/schema';
import { familyMembersCollectionSchema } from './content/family/members/schema';
import { familyInterestsCollectionSchema } from './content/family/interests/schema';

export const collections = {
  'work/candidates': candidatesCollectionSchema,
  'work/jobs': jobsCollectionSchema,
  'work/skills': skillsCollectionSchema,
  'work/research': researchCollectionSchema,
  'play/hobbies': hobbiesCollectionSchema,
  'family/members': familyMembersCollectionSchema,
  'family/interests': familyInterestsCollectionSchema,
};
