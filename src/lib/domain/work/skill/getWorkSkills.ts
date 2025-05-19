import { getCollection } from 'astro:content';
import { type WorkSkill, WorkSkillId } from './WorkSkill';

export async function getWorkSkills(): Promise<WorkSkill[]> {
  const skillsCollection = await getCollection('work/skills');
  return skillsCollection.map(skill => skill.data);
}

export async function getWorkSkillsById(): Promise<Record<WorkSkillId, WorkSkill>> {
  const skillsCollection = await getCollection('work/skills');
  return skillsCollection.reduce((acc, skillEntry) => {
    // The schema ensures skillEntry.data.id is a string.
    // We need to cast it to WorkSkillId if we are sure the strings in the collection match the enum values.
    // Or, ensure WorkSkillId values are used in the content files for the 'id' field.
    const skillId = skillEntry.data.id as WorkSkillId;
    acc[skillId] = skillEntry.data;
    return acc;
  }, {} as Record<WorkSkillId, WorkSkill>);
}
