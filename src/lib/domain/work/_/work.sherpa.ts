import {
  defaultSherpaConfig,
  makeLinkResolver,
  type LinkResolver,
  type SherpaConfig,
} from '../../../sherpa';
import { type WorkProjectSherpa, makeWorkProjectSherpa } from '../project/workProjects.sherpa';

export const path = 'work';

export interface WorkSherpa {
  index: LinkResolver;
  internalResumePage: LinkResolver;
  resumePdf: () => string;
  projects: WorkProjectSherpa;
}

export function makeWorkSherpa(
  path: string,
  config: SherpaConfig = defaultSherpaConfig
): WorkSherpa {
  return {
    index: props => makeLinkResolver(`${path}`, props, config),
    internalResumePage: props => makeLinkResolver(`${path}/_internal/resume`, props, config),
    resumePdf: () => '/files/andrew-holbrook-resume.pdf',
    projects: makeWorkProjectSherpa(path, config),
  };
}
