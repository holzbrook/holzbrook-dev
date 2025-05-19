import { WorkSkillId } from '@lib/domain/work/skill/WorkSkill';
import { WorkSkillTagId } from '@lib/domain/work/skillTag/WorkSkillTag';

export const workSkillTags = [
  {
    category: WorkSkillTagId.FrontendDevelopment,
    icon: '🎨',
    skillIds: [
      WorkSkillId.React,
      WorkSkillId.TypeScript,
      WorkSkillId.NextJs,
      WorkSkillId.ChakraUI,
      WorkSkillId.TailwindCSS,
      WorkSkillId.HTML5CSS3,
    ],
  },
  {
    category: WorkSkillTagId.MobileCrossPlatform,
    icon: '📱',
    skillIds: [WorkSkillId.Flutter, WorkSkillId.Dart, WorkSkillId.ResponsiveDesign],
  },
  {
    category: WorkSkillTagId.StateManagement,
    icon: '🔄',
    skillIds: [
      WorkSkillId.Redux,
      WorkSkillId.ReactQuery,
      WorkSkillId.NgrxStore,
      WorkSkillId.ContextAPI,
    ],
  },
  {
    category: WorkSkillTagId.PerformanceDevOps,
    icon: '⚡',
    skillIds: [
      WorkSkillId.Webpack,
      WorkSkillId.SEO,
      WorkSkillId.CICD,
      WorkSkillId.Testing,
      WorkSkillId.CodeOptimization,
    ],
  },
  {
    category: WorkSkillTagId.ToolsMethods,
    icon: '🛠',
    skillIds: [
      WorkSkillId.Git,
      WorkSkillId.AgileScrum,
      WorkSkillId.TDD,
      WorkSkillId.CodeReview,
      WorkSkillId.TechnicalWriting,
    ],
  },
  {
    category: WorkSkillTagId.Leadership,
    icon: '👥',
    skillIds: [WorkSkillId.Mentoring, WorkSkillId.ProjectPlanning, WorkSkillId.TechnicalLeadership],
  },
];
