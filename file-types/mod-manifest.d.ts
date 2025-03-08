import { ModID } from '../modloader/mod';

export { ModID };

export interface Manifest {
  id: ModID;
  version?: SemVer;

  title?: LocalizedString;
  description?: LocalizedString;
  homepage?: string;
  repository?: string;
  tags?: string[];
  authors?: Person[] | Person;
  icons?: ModIcons;

  dependencies?: ModDependencies;

  assets?: FilePath[];
  assetsDir?: FilePath;
  modPrefix?: string;

  plugin?: FilePath;
  preload?: FilePath;
  postload?: FilePath;
  prestart?: FilePath;
  poststart?: FilePath;
}

export interface LegacyManifest {
  name: ModID;
  version?: SemVer;

  ccmodHumanName?: string;
  description?: string;
  license?: SPDXExpression;
  homepage?: string;
  icons?: ModIcons;

  ccmodDependencies?: LegacyModDependencies;
  dependencies?: LegacyModDependencies;

  assets?: FilePath[];

  plugin?: FilePath;
  preload?: FilePath;
  postload?: FilePath;
  prestart?: FilePath;
  main?: FilePath;
}

export type SemVer = string;
export type SemVerConstraint = string;

export type LocalizedString = Record<Locale, string> | string;
export type Locale = string;

export type FilePath = string;

export type ModDependencies = Record<ModID, ModDependency>;
export type LegacyModDependencies = Record<ModID, SemVerConstraint>;
export type ModDependency = SemVerConstraint | ModDependencyDetails;
export interface ModDependencyDetails {
  version: SemVerConstraint;
  optional?: boolean;
}

export type SPDXExpression = string;

export type Person = string;

export type ModIcons = Record<string, FilePath>;
