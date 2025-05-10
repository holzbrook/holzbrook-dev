import type { WorkCompanyId } from '@lib/domain/work/company/WorkCompany';

export enum WorkProjectId {
  FlutterDesktop = 'Flutter Desktop',
  DesignerCoversMigration = 'Revamped Designer Covers',
  NextJsMarketingSite = 'Greenfield Next.js Marketing Site',
  ReactReduxWebCart = 'Web Cart',
  WordPressToReactMigration = 'WordPress to React with Prismic Migration',
  QuickNav = 'QuickNav',
}

export interface WorkProject {
  id: WorkProjectId;
  name: string;
  description: string;
  tech: string[];
  companyId: WorkCompanyId;
}
