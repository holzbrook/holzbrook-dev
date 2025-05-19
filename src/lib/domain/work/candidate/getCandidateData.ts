import { getCollection } from 'astro:content';
import { workProficiencies } from '@/content/work/proficiencies/proficiencies.data';
import { workProjects } from '@/content/work/projects/featuredProjects.data';
import { getWorkSkillsById } from '@lib/domain/work/skill/getWorkSkills';
import { workSkillTags } from '@/content/work/skillTags/skillTags.data';
import { WorkCandidateId, type WorkCandidate } from '@lib/domain/work/candidate/WorkCandidate';
import type { WorkCandidateBase } from '@lib/domain/work/candidate/WorkCandidate';
import { getJobs } from '../job/getJobs';

// Get candidate base data from content collection
export const getCandidateBase = async (id: WorkCandidateId): Promise<WorkCandidateBase | null> => {
  const candidates = await getCollection('work/candidates');
  const candidate = candidates.find(c => c.data.id === id);
  return candidate ? candidate.data : null;
};

// Get full candidate data combining content collection with other data sources
export const getFullCandidate = async (id: WorkCandidateId): Promise<WorkCandidate> => {
  const candidateBase = await getCandidateBase(id);

  if (!candidateBase) {
    throw new Error(`Candidate with ID ${id} not found in content collection`);
  }

  const jobsCollection = await getJobs();
  const skillsById = await getWorkSkillsById();

  return {
    id: id,
    name: candidateBase.name,
    title: candidateBase.title,
    email: candidateBase.email,
    phone: candidateBase.phone,
    website: candidateBase.website,
    linkedIn: candidateBase.linkedIn,
    github: candidateBase.github,
    summary: candidateBase.summary,
    jobs: jobsCollection.map(jobItem => jobItem.data),
    projects: workProjects,
    skillTags: workSkillTags,
    proficiencies: workProficiencies,
    skills: skillsById,
  };
};
