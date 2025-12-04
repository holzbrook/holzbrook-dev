export enum WorkResearchId {
  ComputationalFramework = 'semantic-path-fractals',
}

export enum ResearchStatus {
  Research = 'research',
  Development = 'development',
  PatentPending = 'patent-pending',
  Published = 'published',
}

export interface ResearchConcept {
  title: string;
  description: string;
  details?: string[];
}

export interface ResearchExample {
  title: string;
  description: string;
  code: string;
  explanation: string;
}

export interface WorkResearch {
  id: WorkResearchId;
  title: string;
  subtitle?: string;
  description: string;
  intro?: string | string[]; // Introductory explanation that appears after description (can be array for multiple paragraphs)
  githubUrl?: string; // Link to GitHub repository
  status: ResearchStatus;
  disclosureDate: string; // ISO date string
  concepts: ResearchConcept[];
  technicalDomains: string[];
  keyInnovations: string[];
  potentialApplications?: string[];
  notes?: string; // Additional disclosure notes
  example?: ResearchExample;
  developmentHistory?: string; // Brief context about development timeline and implementation
}

