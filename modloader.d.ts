import * as semver from './semver-ext';
import * as modM from './modloader/mod';
import * as modDataStorageM from './modloader/mod-data-storage';
import * as configM from './modloader/config';
import * as manifestFT from './file-types/mod-manifest';

export {};

declare global {
  namespace modloader {
    const name: string;
    const version: semver.SemVer;
    const gameVersion: semver.SemVer;
    const gameVersionHotfix: number;
    const installedMods: ReadonlyMap<ModID, Mod>;
    const loadedMods: ReadonlyMap<ModID, Mod>;
    const virtualPackages: ReadonlyMap<string, semver.SemVer>;
    const serviceWorker: ServiceWorker;

    export import ModID = modM.ModID;

    namespace config {
      export import gameAssetsDir = configM.gameAssetsDir;
      export import modsDirs = configM.modsDirs;
      export import stylesheetURLs = configM.stylesheetURLs;
      export import scriptURLs = configM.scriptURLs;
      export import gameScriptURL = configM.gameScriptURL;
      export import impactConfig = configM.impactConfig;

      export import onGameDOMCreated = configM.onGameDOMCreated;
    }

    namespace modDataStorage {
      export import FileData = modDataStorageM.FileData;

      export import FILE_NAME = modDataStorageM.FILE_NAME;
      export import fileDir = modDataStorageM.fileDir;
      export import data = modDataStorageM.data;

      export import readImmediately = modDataStorageM.readImmediately;
      export import writeImmediately = modDataStorageM.writeImmediately;
      export import write = modDataStorageM.write;

      export import isModEnabled = modDataStorageM.isModEnabled;
      export import setModEnabled = modDataStorageM.setModEnabled;
    }

    export type Mod = modM.Mod;
    namespace Mod {
      export import Dependency = modM.Dependency;
      export import LoadingStage = modM.LoadingStage;
      export import PluginClass = modM.PluginClass;
      export import LegacyPluginClass = modM.LegacyPluginClass;
    }

    export import Manifest = manifestFT.Manifest;
    export import LegacyManifest = manifestFT.LegacyManifest;
  }
}
