import { WorkProjectId, ProjectCategory } from './WorkProject';
import { WorkCompanyId } from '../company/WorkCompany';
import type { WorkProject } from './WorkProject';

const projects: Record<WorkProjectId, WorkProject> = {
  [WorkProjectId.QuickNav]: {
    id: WorkProjectId.QuickNav,
    name: 'QuickNav Tool',
    description:
      'Built a searchable UI to find navigation elements and related config in a legacy application, enabling faster onboarding and debugging.',
    tech: ['ColdFusion', 'Custom search UI'],
    companyId: WorkCompanyId.MasterControl,
    status: 'completed',
    category: ProjectCategory.InternalTooling,
    timeline: {
      startDate: '2018-01-01',
      endDate: '2018-12-31',
      duration: '1 year',
    },
    challenges: [
      'Hard to debug layout/navigation config in legacy app',
      'New devs struggled to know where routes were defined',
    ],
    solutions: [
      'Built searchable UI to find navigation elements and related config',
      'Enabled faster onboarding and debugging',
    ],
    outcomes: [
      {
        metric: 'Debug Time Reduction',
        value: 'Significant',
        description: 'Reduced time to debug screens',
      },
      {
        metric: 'Team Adoption',
        value: 'High',
        description: 'Used by most of the dev team regularly',
      },
    ],
    images: [
      {
        url: '/images/projects/quicknav.png',
        alt: 'QuickNav Tool Interface',
        caption: 'Search interface for navigation elements',
      },
    ],
    teamMembers: [
      {
        name: 'Your Name',
        role: 'Internal Tooling Developer',
        contribution: 'Sole developer and designer',
      },
    ],
    demoUrl: '/demos/quicknav',
    caseStudyUrl: '/case-studies/quicknav',
  },

  [WorkProjectId.DesignerCoversMigration]: {
    id: WorkProjectId.DesignerCoversMigration,
    name: 'Revamped Designer Covers',
    description:
      'Built an indexable, filterable grid of designer covers with dynamic page generation via slugs and config, making the system declarative so marketing could own updates.',
    tech: ['React', 'Next.js', 'Slug-based routing', 'Custom CMS config'],
    companyId: WorkCompanyId.Chatbooks,
    status: 'completed',
    category: ProjectCategory.Migrations,
    timeline: {
      startDate: '2023-01-01',
      endDate: '2023-03-31',
      duration: '3 months',
    },
    challenges: [
      'Hard-coded seasonal landing pages',
      'Weeks of dev work to launch new content',
      'Poor customer experience discovering covers',
    ],
    solutions: [
      'Built an indexable, filterable grid of designer covers',
      'Enabled dynamic page generation via slugs and config',
      'Made system declarative so marketing could own updates',
    ],
    outcomes: [
      {
        metric: 'Launch Time Reduction',
        value: 'Weeks to Minutes',
        description: 'Launches went from weeks to minutes',
      },
      {
        metric: 'SEO Improvement',
        value: 'Significant',
        description: 'SEO visibility improved significantly',
      },
    ],
    images: [
      {
        url: '/images/projects/designer-covers.png',
        alt: 'Designer Covers Grid',
        caption: 'Filterable grid of designer covers',
      },
    ],
    teamMembers: [
      {
        name: 'Your Name',
        role: 'Solo frontend + UX/dev tooling',
        contribution: 'Lead developer and designer',
      },
    ],
    demoUrl: '/demos/designer-covers',
    caseStudyUrl: '/case-studies/designer-covers',
  },

  [WorkProjectId.FlutterDesktop]: {
    id: WorkProjectId.FlutterDesktop,
    name: 'Flutter Desktop',
    description: 'Built responsive Flutter applications for desktop platforms.',
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
    teamMembers: [
      {
        name: 'Your Name',
        role: 'Lead Frontend Developer',
        contribution: 'Lead developer',
      },
    ],
  },

  [WorkProjectId.NextJsMarketingSite]: {
    id: WorkProjectId.NextJsMarketingSite,
    name: 'Greenfield Next.js Marketing Site',
    description: 'Built a modern marketing site using Next.js.',
    tech: ['Next.js', 'React', 'TypeScript'],
    companyId: WorkCompanyId.Chatbooks,
    status: 'completed',
    category: ProjectCategory.WebDevelopment,
    timeline: {
      startDate: '2022-01-01',
      endDate: '2022-06-30',
      duration: '6 months',
    },
    challenges: ['SEO optimization', 'Performance requirements', 'Content management'],
    solutions: ['Implemented SSR', 'Optimized build process', 'Created CMS integration'],
    outcomes: [
      {
        metric: 'Page Speed',
        value: '90+',
        description: 'Lighthouse score',
      },
    ],
    images: [],
    teamMembers: [
      {
        name: 'Your Name',
        role: 'Lead Frontend Developer',
        contribution: 'Lead developer',
      },
    ],
  },

  [WorkProjectId.ReactReduxWebCart]: {
    id: WorkProjectId.ReactReduxWebCart,
    name: 'Web Cart',
    description: 'Built a modern web cart using React and Redux.',
    tech: ['React', 'Redux', 'TypeScript'],
    companyId: WorkCompanyId.Chatbooks,
    status: 'completed',
    category: ProjectCategory.WebDevelopment,
    timeline: {
      startDate: '2021-01-01',
      endDate: '2021-12-31',
      duration: '1 year',
    },
    challenges: ['State management', 'Performance optimization', 'User experience'],
    solutions: ['Implemented Redux', 'Optimized rendering', 'Created intuitive UI'],
    outcomes: [
      {
        metric: 'Conversion Rate',
        value: '+15%',
        description: 'Improved checkout conversion',
      },
    ],
    images: [],
    teamMembers: [
      {
        name: 'Your Name',
        role: 'Lead Frontend Developer',
        contribution: 'Lead developer',
      },
    ],
  },

  [WorkProjectId.WordPressToReactMigration]: {
    id: WorkProjectId.WordPressToReactMigration,
    name: 'WordPress to React with Prismic Migration',
    description: 'Migrated from WordPress to a modern React stack with Prismic CMS.',
    tech: ['React', 'Prismic', 'TypeScript'],
    companyId: WorkCompanyId.Chatbooks,
    status: 'completed',
    category: ProjectCategory.Migrations,
    timeline: {
      startDate: '2022-01-01',
      endDate: '2022-12-31',
      duration: '1 year',
    },
    challenges: ['Content migration', 'SEO preservation', 'Performance improvement'],
    solutions: [
      'Automated content migration',
      'Implemented SEO best practices',
      'Optimized build process',
    ],
    outcomes: [
      {
        metric: 'Build Time',
        value: '-70%',
        description: 'Reduced build time',
      },
    ],
    images: [],
    teamMembers: [
      {
        name: 'Your Name',
        role: 'Lead Frontend Developer',
        contribution: 'Lead developer',
      },
    ],
  },
};

export { projects };
