import { WorkCompanyId } from '@lib/domain/work/company/WorkCompany';
import {
  WorkProjectId,
  type WorkProject,
  ProjectCategory,
} from '@lib/domain/work/project/WorkProject';

export const workProjectsById: Record<WorkProjectId, WorkProject> = {
  // ... (content of workProjectsById.data.ts) ...
  // (I'll use the content from the previous read_file call)
  [WorkProjectId.FlutterDesktop]: {
    id: WorkProjectId.FlutterDesktop,
    name: 'Flutter Desktop',
    description:
      'Optimized Flutter codebase by transitioning a mobile-first design to a fully responsive, desktop-ready solution, significantly improving cross-device performance.',
    tech: ['Flutter', 'Dart', 'Responsive Design'],
    companyId: WorkCompanyId.Chatbooks,
    status: 'completed',
    category: ProjectCategory.MobileApps,
    timeline: {
      startDate: '2021-01-01',
      endDate: '2022-12-31',
      duration: '2 years',
    },
    challenges: [
      'Adapting mobile-first design to desktop',
      'Performance optimization for larger screens',
      'Complex state management across platforms',
    ],
    solutions: [
      'Implemented responsive design patterns',
      'Optimized rendering for desktop',
      'Created unified state management',
    ],
    outcomes: [
      {
        metric: 'Performance',
        value: '60fps',
        description: 'Consistent frame rate across platforms',
      },
    ],
    images: [],
    teamMembers: [],
  },
  [WorkProjectId.DesignerCoversMigration]: {
    id: WorkProjectId.DesignerCoversMigration,
    name: 'Designer Covers Migration',
    description:
      'Migrated designer covers from a legacy system to a new, more scalable platform, improving user experience and reducing maintenance costs.',
    tech: ['React', 'TypeScript', 'Builder.io', 'Next.js', 'Node.js'],
    companyId: WorkCompanyId.Chatbooks,
    status: 'completed',
    category: ProjectCategory.Migrations,
    timeline: {
      startDate: '2021-01-01',
      endDate: '2022-12-31',
      duration: '2 years',
    },
    challenges: [],
    solutions: [],
    outcomes: [],
    images: [],
    teamMembers: [],
  },
  [WorkProjectId.NextJsMarketingSite]: {
    id: WorkProjectId.NextJsMarketingSite,
    name: 'Next.js Marketing Site',
    description:
      'Launched a greenfield Next.js project, making key architectural decisions for scalable state management and form handling, laying the foundation for future development.',
    tech: ['Next.js', 'React', 'TypeScript', 'React Query', 'Chakra UI'],
    companyId: WorkCompanyId.Chatbooks,
    status: 'completed',
    category: ProjectCategory.WebDevelopment,
    timeline: {
      startDate: '2021-01-01',
      endDate: '2022-12-31',
      duration: '2 years',
    },
    challenges: [],
    solutions: [],
    outcomes: [],
    images: [],
    teamMembers: [],
  },
  [WorkProjectId.ReactReduxWebCart]: {
    id: WorkProjectId.ReactReduxWebCart,
    name: 'Web Cart',
    description:
      'Delivered a web cart, driving cross-functional collaboration and delivering a seamless shopping experience with improved performance.',
    tech: ['React', 'Redux', 'Sass'],
    companyId: WorkCompanyId.Chatbooks,
    status: 'completed',
    category: ProjectCategory.WebDevelopment,
    timeline: {
      startDate: '2021-01-01',
      endDate: '2022-12-31',
      duration: '2 years',
    },
    challenges: [],
    solutions: [],
    outcomes: [],
    images: [],
    teamMembers: [],
  },
  [WorkProjectId.WordPressToReactMigration]: {
    id: WorkProjectId.WordPressToReactMigration,
    name: 'WordPress to React Migration',
    description:
      'Transitioned marketing site from WordPress to React + Prismic, modernizing the user experience and optimizing content management workflows.',
    tech: ['React', 'Prismic CMS', 'Express.js', 'AngularJS'],
    companyId: WorkCompanyId.Chatbooks,
    status: 'completed',
    category: ProjectCategory.Migrations,
    timeline: {
      startDate: '2021-01-01',
      endDate: '2022-12-31',
      duration: '2 years',
    },
    challenges: [],
    solutions: [],
    outcomes: [],
    images: [],
    teamMembers: [],
  },
  [WorkProjectId.QuickNav]: {
    id: WorkProjectId.QuickNav,
    name: 'QuickNav',
    description:
      'Received an Innovation award by utilizing JQuery, iframes, fuzzy filtering, and keyboard input to vastly improve efficiency of QA, Developers, and even the customer.',
    tech: ['JQuery', 'TypeScript', 'CSS'],
    companyId: WorkCompanyId.MasterControl,
    status: 'completed',
    category: ProjectCategory.InternalTooling,
    timeline: {
      startDate: '2021-01-01',
      endDate: '2022-12-31',
      duration: '2 years',
    },
    challenges: [],
    solutions: [],
    outcomes: [],
    images: [],
    teamMembers: [],
  },
};
