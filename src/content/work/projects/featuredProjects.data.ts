import { WorkProjectId } from '@lib/domain/work/project/WorkProject';
import { workProjectsById } from './projectsById.data';

export const workProjects = [
  workProjectsById[WorkProjectId.FlutterDesktop],
  workProjectsById[WorkProjectId.NextJsMarketingSite],
  workProjectsById[WorkProjectId.ReactReduxWebCart],
  workProjectsById[WorkProjectId.WordPressToReactMigration],
  workProjectsById[WorkProjectId.QuickNav],
];
