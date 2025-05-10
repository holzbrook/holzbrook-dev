import { type AppFeatureFlags } from '@lib/app/AppFeatureFlags';

export interface SherpaConfig {
  featureFlags?: AppFeatureFlags;
}

export const defaultSherpaConfig: SherpaConfig = {
  featureFlags: {
    testPageEnabled: true,
  },
};
