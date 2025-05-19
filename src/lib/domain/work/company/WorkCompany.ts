export enum WorkCompanyId {
  Chatbooks = 'Chatbooks',
  SlingTV = 'Sling TV',
  MasterControl = 'MasterControl',
  TriVir = 'TriVir LLC',
}

const companyIdToPathParam: Record<WorkCompanyId, string> = {
  [WorkCompanyId.Chatbooks]: 'chatbooks',
  [WorkCompanyId.SlingTV]: 'slingTv',
  [WorkCompanyId.MasterControl]: 'masterControl',
  [WorkCompanyId.TriVir]: 'triVir',
};

/**
 * Gets a job entry from the content collection by company ID
 * @param companyId The WorkCompanyId to fetch the job for
 * @returns A promise that resolves to the job entry or undefined if not found
 */
export async function getJobByCompanyId(companyId: WorkCompanyId) {
  const { getEntry } = await import('astro:content');
  const jobId = companyIdToPathParam[companyId];

  if (!jobId) {
    return undefined;
  }

  return getEntry('jobs', jobId);
}
