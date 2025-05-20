// requires game.feature.combat.model.combat-params

export {};

declare global {
  namespace sc {
    namespace COMBAT_POI {
      interface Base<T extends object> {
        initSettings?(settings: T): void;
        getEntities(a: unknown, settings: T): void;
      }
      type Union = keyof typeof sc.COMBAT_POI;

      type AllSettings = {
        [K in Union]: {
          type: K;
        } & Parameters<(typeof sc.COMBAT_POI)[K]['getEntities']>[1];
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
    }

    namespace CombatPoi {
      function initPoiFilter(settings: null): null;
      function initPoiFilter<T extends sc.COMBAT_POI.Union>(
        settings: { type: T } & sc.COMBAT_POI.Setting,
      ): (typeof sc.COMBAT_POI)[T];
    }
  }
}
