import {
  defaultSherpaConfig,
  makeResourcesSherpa,
  type LinkResolver,
  type ResourcesSherpa,
  type SherpaConfig,
} from '@lib/sherpa';
import { path as playPath, makePlaySherpa, type PlaySherpa } from '@lib/domain/play/play.sherpa';
import { path as workPath, makeWorkSherpa, type WorkSherpa } from '@lib/domain/work/_/work.sherpa';
import {
  path as familyPath,
  makeFamilySherpa,
  type FamilySherpa,
} from '@lib/domain/family/family.sherpa';

export const path = '';

export interface HomeSherpa {
  home: LinkResolver;
  [familyPath]: FamilySherpa;
  [playPath]: PlaySherpa;
  [workPath]: WorkSherpa;
  resources: ResourcesSherpa;
}

export function makeHomeSherpa(config: SherpaConfig = defaultSherpaConfig): HomeSherpa {
  return {
    home: () => '/',
    family: makeFamilySherpa('/family', config),
    play: makePlaySherpa('/play', config),
    resources: makeResourcesSherpa('/', config),
    work: makeWorkSherpa('/work', config),
  };
}
