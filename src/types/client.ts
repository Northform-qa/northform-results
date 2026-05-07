export type SuiteType = 'playwright' | 'lighthouse' | 'api' | 'accessibility' | 'load';

export interface RunHistory {
  passed: number;
  total: number;
}

export interface Suite {
  name: string;
  type: SuiteType;
  reportUrl: string;
  lastRun: string; // ISO 8601
  passed: number;
  failed: number;
  total: number;
  history?: RunHistory[]; // last N runs, oldest first
}

export interface ClientConfig {
  slug: string;
  displayName: string;
  logoUrl?: string;
  brandColour: string;
  suites: Suite[];
}
