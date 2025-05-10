import { WorkCompanyId } from '@lib/domain/work/company/WorkCompany';

export const workJobs = [
  {
    id: WorkCompanyId.Chatbooks,
    company: 'Chatbooks',
    title: 'Senior Frontend Engineer',
    period: 'March 2019 - December 2024',
    description: 'Supported web and cross-platform initiatives.',
    highlights: [
      'Optimized Flutter codebase by transitioning a mobile-first design to a fully responsive, desktop-ready solution, significantly improving cross-device performance.',
      'Implemented Swagger/OpenAPI for streamlined code generation with React Query, simplifying mutation handling and improving API integration efficiency.',
      'Launched a greenfield Next.js project, making key architectural decisions for scalable state management and form handling, laying the foundation for future development.',
      'Led the development of a web cart, driving cross-functional collaboration and delivering a seamless shopping experience with improved performance.',
      'Transitioned marketing site from WordPress to React + Prismic, modernizing the user experience and optimizing content management workflows.',
    ],
  },
  {
    id: WorkCompanyId.SlingTV,
    company: 'Sling TV',
    title: 'Senior Software Engineer',
    period: 'February 2018 - March 2019',
    description: 'Developed core features using AngularJS, SASS, and Redux',
    highlights: [
      'Developed core features using AngularJS, SASS, and Redux, driving increased user engagement.',
      'Consolidated AngularJS libraries, improving maintainability and reducing bundle size.',
      'Modernized state management by transitioning to Redux, reducing bugs and improving application consistency.',
    ],
  },
  {
    id: WorkCompanyId.MasterControl,
    company: 'MasterControl',
    title: 'Software Engineer II',
    period: 'January 2014 - February 2018',
    description: 'Individual contributor taking on a variety of software development tasks.',
    highlights: [
      'Received Innovation Award for the QuickNav feature, significantly reducing task completion time.',
      'Designed stateful UI architecture using ngrx/store, optimizing user experience and system performance.',
      'Led a team of junior developers, boosting team velocity and ensuring high code quality.',
    ],
  },
];
