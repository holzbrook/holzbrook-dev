import { getCollection } from 'astro:content';

export async function getJobs() {
  const jobs = await getCollection('work/jobs');

  return jobs.sort((a, b) => {
    const aYear = parseInt(a.data.period.split(' - ')[1] || a.data.period.split(' - ')[0]);
    const bYear = parseInt(b.data.period.split(' - ')[1] || b.data.period.split(' - ')[0]);
    return bYear - aYear;
  });
}
