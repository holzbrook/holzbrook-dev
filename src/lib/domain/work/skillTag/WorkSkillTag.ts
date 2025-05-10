import type { WorkSkillId } from '@lib/domain/work/skill/WorkSkill';

export enum WorkSkillTagId {
  FrontendDevelopment = 'Frontend Development',
  MobileCrossPlatform = 'Mobile & Cross-Platform',
  StateManagement = 'State Management',
  PerformanceDevOps = 'Performance & DevOps',
  ToolsMethods = 'Tools & Methods',
  Leadership = 'Leadership',
}

export interface WorkSkillTag {
  category: WorkSkillTagId;
  icon: string;
  skillIds: WorkSkillId[];
}
