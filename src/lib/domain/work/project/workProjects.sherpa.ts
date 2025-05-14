import {
  defaultSherpaConfig,
  makeLinkResolver,
  type LinkResolver,
  type SherpaConfig,
} from '@/lib/sherpa';

export const path = 'projects';

export interface WorkProjectSherpa {
  index: LinkResolver;
}

export function makeWorkProjectSherpa(
  parentPath: string,
  config: SherpaConfig = defaultSherpaConfig
): WorkProjectSherpa {
  return {
    index: props => makeLinkResolver(`${parentPath}/${path}`, props, config),
  };
}
