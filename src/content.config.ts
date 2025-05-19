import { candidatesCollectionSchema } from './content/work/candidates/schema';
import { jobsCollectionSchema } from './content/work/jobs/schema';
import { skillsCollectionSchema } from './content/work/skills/schema';
import { hobbiesCollectionSchema } from './content/play/hobbies/schema';
import { familyMembersCollectionSchema } from './content/family/members/schema';
import { familyInterestsCollectionSchema } from './content/family/interests/schema';

export const collections = {
  'work/candidates': candidatesCollectionSchema,
  'work/jobs': jobsCollectionSchema,
  'work/skills': skillsCollectionSchema,
  'play/hobbies': hobbiesCollectionSchema,
  'family/members': familyMembersCollectionSchema,
  'family/interests': familyInterestsCollectionSchema,
};
