import { WorkCompanyId } from '@lib/domain/work/company/WorkCompany';
import { WorkProjectId, type WorkProject } from '@lib/domain/work/project/WorkProject';

export const workProjectsById: Record<WorkProjectId, WorkProject> = {
  [WorkProjectId.FlutterDesktop]: {
    id: WorkProjectId.FlutterDesktop,
    name: 'Flutter Desktop',
    description:
      'Optimized Flutter codebase by transitioning a mobile-first design to a fully responsive, desktop-ready solution, significantly improving cross-device performance.',
    tech: ['Flutter', 'Dart', 'Responsive Design'],
    companyId: WorkCompanyId.Chatbooks,
  },
  [WorkProjectId.DesignerCoversMigration]: {
    id: WorkProjectId.DesignerCoversMigration,
    name: 'Designer Covers Migration',
    description:
      'Migrated designer covers from a legacy system to a new, more scalable platform, improving user experience and reducing maintenance costs.',
    tech: ['React', 'TypeScript', 'Builder.io', 'Next.js', 'Node.js'],
    companyId: WorkCompanyId.Chatbooks,
  },
  [WorkProjectId.NextJsMarketingSite]: {
    id: WorkProjectId.NextJsMarketingSite,
    name: 'Next.js Marketing Site',
    description:
      'Launched a greenfield Next.js project, making key architectural decisions for scalable state management and form handling, laying the foundation for future development.',
    tech: ['Next.js', 'React', 'TypeScript', 'React Query', 'Chakra UI'],
    companyId: WorkCompanyId.Chatbooks,
  },
  [WorkProjectId.ReactReduxWebCart]: {
    id: WorkProjectId.ReactReduxWebCart,
    name: 'Web Cart',
    description:
      'Delivered a web cart, driving cross-functional collaboration and delivering a seamless shopping experience with improved performance.',
    tech: ['React', 'Redux', 'Sass'],
    companyId: WorkCompanyId.Chatbooks,
  },
  [WorkProjectId.WordPressToReactMigration]: {
    id: WorkProjectId.WordPressToReactMigration,
    name: 'WordPress to React Migration',
    description:
      'Transitioned marketing site from WordPress to React + Prismic, modernizing the user experience and optimizing content management workflows.',
    tech: ['React', 'Prismic CMS', 'Express.js', 'AngularJS'],
    companyId: WorkCompanyId.Chatbooks,
  },
  [WorkProjectId.QuickNav]: {
    id: WorkProjectId.QuickNav,
    name: 'QuickNav',
    description:
      'Received an Innovation award by utilizing JQuery, iframes, fuzzy filtering, and keyboard input to vastly improve efficiency of QA, Developers, and even the customer.',
    tech: ['JQuery', 'TypeScript', 'CSS'],
    companyId: WorkCompanyId.MasterControl,
  },
};
