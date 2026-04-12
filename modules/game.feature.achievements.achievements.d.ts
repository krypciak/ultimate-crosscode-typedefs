// requires impact.base.game
// requires impact.base.loader
// requires impact.base.vars
// requires impact.feature.database.database
// requires impact.feature.greenworks.greenworks
// requires game.config
// requires game.feature.achievements.stats-model

export {};

declare global {
  namespace sc {
    enum TROPHY_TYPES {
      GENERAL = 'GENERAL',
      COMBAT = 'COMBAT',
      EXPLORATION = 'EXPLORATION',
    }

    namespace TROPHY_SECTIONS {
      interface GENERAL {
        PROGRESS: 'PROGRESS';
        PLAYER: 'PLAYER';
        ITEMS: 'ITEMS';
        SPECIAL: 'SPECIAL';
      }
      interface COMBAT {
        ACTIONS: 'ACTIONS';
        ENEMIES: 'ENEMIES';
        CIRCUITS: 'CIRCUITS';
        CUMULATIVE: 'CUMULATIVE';
      }
      interface EXPLORATION {
        DISCOVERY: 'DISCOVERY';
        AREAS: 'AREAS';
        CHESTS: 'CHESTS';
        QUESTS: 'QUESTS';
      }
    }
    interface TROPHY_SECTIONS {
      GENERAL: sc.TROPHY_SECTIONS.GENERAL;
      COMBAT: sc.TROPHY_SECTIONS.COMBAT;
      EXPLORATION: sc.TROPHY_SECTIONS.EXPLORATION;
    }
    var TROPHY_SECTIONS: TROPHY_SECTIONS;

    enum TROPHY_PROGESS_TYPE {
      VALUE = 'VALUE',
      VALUE_HIDDEN = 'VALUE_HIDDEN',
      PERCENT = 'PERCENT',
      NONE = 'NONE',
      TIME = 'TIME',
      CONDITION = 'CONDITION',
      ENEMY = 'ENEMY',
    }

    interface TrophyIcon {
      index: number;
      cat: 'GENERAL' | 'COMBAT' | 'EXPLORATION';
      hidden?: boolean;
    }
    var TROPHY_ICONS: Record<string, sc.TrophyIcon>;

    enum TROPHY_SORT_TYPES {
      ORDER = 0,
      UNLOCKED = 1,
      NAME = 2,
      POINTS = 3,
    }

    interface TROPHY_STARS {
      1: number;
      2: number;
      3: number;
      4: number;
      5: number;
    }
    var TROPHY_STATS: TROPHY_STARS;

    namespace TrophyManager {
      type CompareOperation = 'min' | 'max' | 'equal';

      interface AchievementStat {
        '0': string;
        key: string;
        mapKey: string;
        value: string | number;
        compare: sc.TrophyManager.CompareOperation;
      }

      type TrophyCategory = keyof sc.TROPHY_SECTIONS;
      type TrophySection = KeysOfUnion<sc.TROPHY_SECTIONS[TrophyCategory]>;
      type TrophyName = string;

      type KeysOfUnion<T> = T extends T ? keyof T : never;

      interface Trophy {
        track: boolean;
        name: ig.LangLabel.Data;
        nameCond?: string;
        description: ig.LangLabel.Data;
        descCond?: string;
        order: number;
        steamID?: string;
        icon: string;
        stars: string;
        points: number;
        condition?: string;
        progType: keyof typeof sc.TROPHY_PROGESS_TYPE;
        section: sc.TrophyManager.TrophySection;
        category: TrophyCategory;
        stats: AchievementStat[];

        triggered?: boolean;
      }

      interface SubLists {
        varConditions: sc.TrophyManager.Trophy[];
        [trophyKey: string]: sc.TrophyManager.Trophy[];
      }
    }
    interface TrophyManager
      extends ig.GameAddon,
        sc.Model,
        sc.Model.Observer,
        ig.Storage.ListenerGlobalSave,
        ig.Vars.Accessor {
      trophies: Record<sc.TrophyManager.TrophyName, sc.TrophyManager.Trophy>;
      totalPoints: number;
      version: number;
      subLists: sc.TrophyManager.SubLists;
      latest: sc.TrophyManager.TrophyName[];

      getTotalTrophiesUnlocked(
        this: this,
        percentage?: boolean,
        category?: sc.TrophyManager.TrophyCategory,
        section?: sc.TrophyManager.TrophySection,
      ): number;
      getTotalTrophies(
        this: this,
        category?: sc.TrophyManager.TrophyCategory,
        section?: sc.TrophyManager.TrophySection,
        dest?: { count?: number; total?: number },
      ): { count: number; total: number };
      onVarsChanged(this: this): void;
      updateAll(this: this): void;
      triggerTrophy(this: this, name: sc.TrophyManager.TrophyName): void;
      clearTrophies(this: this): void;
      validateFeatPoints(this: this): void;
      getTotalPoints(this: this): number;
      getTrophy(this: this, name: sc.TrophyManager.TrophyName): sc.TrophyManager.Trophy;
      getTrophyName(this: this, name: sc.TrophyManager.TrophyName): string;
      isTrophyUnlocked(this: this, name: sc.TrophyManager.TrophyName): boolean;
      _addToLatest(this: this, name: sc.TrophyManager.TrophyName): void;
      _initSubLists(this: this): void;
      _updateSubList(this: this, trohpies: sc.TrophyManager.Trophy[]): void;
      _notifyNewTrophy(this: this, name: sc.TrophyManager.TrophyName): void;
      _compare(
        this: this,
        operation: sc.TrophyManager.CompareOperation,
        x: number,
        y: number,
      ): boolean;
      onStorageGlobalLoad(this: this, globals: ig.Storage.GlobalsData): void;
    }
    interface TrophyManagerConstructor extends ImpactClass<TrophyManager> {
      new (): TrophyManager;
    }
    var TrophyManager: TrophyManagerConstructor;
    var trophies: sc.TrophyManager;
  }
}
