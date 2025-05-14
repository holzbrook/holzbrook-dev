import type { WorkCompanyId } from '@lib/domain/work/company/WorkCompany';

export enum WorkProjectId {
  FlutterDesktop = 'Flutter Desktop',
  DesignerCoversMigration = 'Revamped Designer Covers',
  NextJsMarketingSite = 'Greenfield Next.js Marketing Site',
  ReactReduxWebCart = 'Web Cart',
  WordPressToReactMigration = 'WordPress to React with Prismic Migration',
  QuickNav = 'QuickNav',
}

export enum ProjectCategory {
  WebDevelopment = 'Web Development',
  MobileApps = 'Mobile Apps',
  DataScience = 'Data Science',
  InternalTooling = 'Internal Tooling',
  Migrations = 'Migrations',
}

export interface ProjectTimeline {
  startDate: string; // ISO date string
  endDate?: string; // Optional for ongoing projects
  duration?: string; // Human readable duration
}

export interface ProjectImage {
  url: string;
  alt: string;
  caption?: string;
}

export interface ProjectOutcome {
  metric: string;
  value: string | number;
  description?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  contribution?: string;
}

export interface WorkProject {
  id: WorkProjectId;
  name: string;
  description: string;
  tech: string[];
  companyId: WorkCompanyId;
  timeline: ProjectTimeline;
  challenges: string[];
  solutions: string[];
  outcomes: ProjectOutcome[];
  images: ProjectImage[];
  teamMembers: TeamMember[];
  demoUrl?: string;
  caseStudyUrl?: string;
  status: 'completed' | 'ongoing' | 'archived';
  category: ProjectCategory;
}
