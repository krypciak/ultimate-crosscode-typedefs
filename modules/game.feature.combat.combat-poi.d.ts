// requires game.feature.combat.model.combat-params

export {};

declare global {
  namespace sc {
    namespace COMBAT_POI {
      interface Base<T extends object> {
        initSettings?(settings: T): void;
        getEntities?(results: ig.Entity[], settings: T, actor: ig.ActorEntity): void;
        filterEntities?(results: ig.Entity[], entities: ig.Entity[], settings: T): void;
      }
      type Union = keyof typeof sc.COMBAT_POI;

      type AllSettings = {
        [K in Union]: {
          type: K;
        } & Parameters<NonNullable<(typeof sc.COMBAT_POI)[K]['initSettings']>>[0];
      };
      type Setting = AllSettings[Union];

      namespace NAMED_ENTITY {
        interface Settings {
          name: ig.Event.StringExpression;
        }
      }
      interface NAMED_ENTITY extends sc.COMBAT_POI.Base<sc.COMBAT_POI.NAMED_ENTITY.Settings> {
        _wm: ig.Config;
      }
      var NAMED_ENTITY: NAMED_ENTITY;

      namespace NAMED_ENTITIES {
        interface Settings {
          namePart: ig.Event.StringExpression;
        }
      }
      interface NAMED_ENTITIES extends sc.COMBAT_POI.Base<sc.COMBAT_POI.NAMED_ENTITIES.Settings> {
        _wm: ig.Config;
      }
      var NAMED_ENTITIES: NAMED_ENTITIES;

      namespace ACTIVE_ENEMIES {
        interface SelfType {
          ACCEPT: number;
          IGNORE: number;
          LAST_RESORT: number;
        }
        interface Settings {
          conditions?: sc.CombatConditions.ConditionConfig[];
          self?: keyof SelfType;
        }
      }
      interface ACTIVE_ENEMIES extends sc.COMBAT_POI.Base<sc.COMBAT_POI.ACTIVE_ENEMIES.Settings> {
        _wm: ig.Config;
      }
      var ACTIVE_ENEMIES: ACTIVE_ENEMIES;
    }

    namespace CombatPoI {
      function initPoiFilter(settings: null): null;
      function initPoiFilter<T extends sc.COMBAT_POI.Union>(
        settings: { type: T } & sc.COMBAT_POI.Setting,
      ): (typeof sc.COMBAT_POI)[T];

      function getClosestPoI<T extends sc.COMBAT_POI.Union>(
        poiFilter: (typeof sc.COMBAT_POI)[T],
        actor: ig.ActorEntity,
        distance: number,
        checkPath?: boolean,
        furthest?: boolean,
      ): Nullable<ig.Entity>;
    }
  }
}
