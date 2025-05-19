import type { WorkProficiency } from '@lib/domain/work/proficiency/WorkProficiency';
import type { WorkProject } from '@lib/domain/work/project/WorkProject';
import type { WorkSkill, WorkSkillId } from '@lib/domain/work/skill/WorkSkill';
import type { WorkSkillTag } from '@lib/domain/work/skillTag/WorkSkillTag';
import type { WorkJob } from '@lib/domain/work/job/WorkJob';
import type { CollectionEntry } from 'astro:content';

export interface WorkCandidate {
  id: WorkCandidateId;
  name: string;
  title: string;
  email: string;
  phone: string;
  summary: string;
  website?: string;
  linkedIn?: string;
  github?: string;
  jobs: WorkJob[];
  projects: WorkProject[];
  skillTags: WorkSkillTag[];
  proficiencies: WorkProficiency[];
  skills: Record<WorkSkillId, WorkSkill>;
}

// Base candidate data from content collection
export type WorkCandidateBase = CollectionEntry<'work/candidates'>['data'];

export enum WorkCandidateId {
  AndrewHolbrook = 'andrew-holbrook',
}
