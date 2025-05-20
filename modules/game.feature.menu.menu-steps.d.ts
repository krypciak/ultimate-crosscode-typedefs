// requires impact.base.utils
// requires impact.base.event
// requires impact.base.action
// requires game.feature.menu.menu-model
// requires game.feature.menu.map-model
// requires game.feature.menu.lore-model

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace ADD_PLANT {
        interface Settings {
          plant: ig.Database.DropKey;
        }
      }
      interface ADD_PLANT extends ig.EventStepBase {
        key: ig.Database.DropKey;
        anim: string;
        _wm: ig.Config;
      }
      interface ADD_PLANT_CONSTRUCTOR extends ImpactClass<ADD_PLANT> {
        new (settings: ig.EVENT_STEP.ADD_PLANT.Settings): ADD_PLANT;
      }
      var ADD_PLANT: ADD_PLANT_CONSTRUCTOR;

      namespace UNLOCK_ENEMY {
        interface Settings {
          enemy: string;
          asSpecial?: boolean;
        }
      }
      interface UNLOCK_ENEMY extends ig.EventStepBase {
        enemy: string;
        asSpecial: boolean;
        _wm: ig.Config;
      }
      interface UNLOCK_ENEMY_CONSTRUCTOR extends ImpactClass<UNLOCK_ENEMY> {
        new (settings: ig.EVENT_STEP.UNLOCK_ENEMY.Settings): UNLOCK_ENEMY;
      }
      var UNLOCK_ENEMY: UNLOCK_ENEMY_CONSTRUCTOR;

      namespace UNLOCK_LORE {
        interface Settings {
          lore: string;
          notify?: boolean;
        }
      }
      interface UNLOCK_LORE extends ig.EventStepBase {
        lore: string;
        notify: boolean;
        _wm: ig.Config;
      }
      interface UNLOCK_LORE_CONSTRUCTOR extends ImpactClass<UNLOCK_LORE> {
        new (settings: ig.EVENT_STEP.UNLOCK_LORE.Settings): UNLOCK_LORE;
      }
      var UNLOCK_LORE: UNLOCK_LORE_CONSTRUCTOR;

      namespace UNLOCK_LORE_ALL {
        interface Settings {}
      }
      interface UNLOCK_LORE_ALL extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface UNLOCK_LORE_ALL_CONSTRUCTOR extends ImpactClass<UNLOCK_LORE_ALL> {
        new (settings: ig.EVENT_STEP.UNLOCK_LORE_ALL.Settings): UNLOCK_LORE_ALL;
      }
      var UNLOCK_LORE_ALL: UNLOCK_LORE_ALL_CONSTRUCTOR;

      namespace UNLOCK_LORE_FIRST_TIME {
        interface Settings {}
      }
      interface UNLOCK_LORE_FIRST_TIME extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface UNLOCK_LORE_FIRST_TIME_CONSTRUCTOR extends ImpactClass<UNLOCK_LORE_FIRST_TIME> {
        new (settings: ig.EVENT_STEP.UNLOCK_LORE_FIRST_TIME.Settings): UNLOCK_LORE_FIRST_TIME;
      }
      var UNLOCK_LORE_FIRST_TIME: UNLOCK_LORE_FIRST_TIME_CONSTRUCTOR;

      namespace UNLOCK_LORE_ENTRY {
        interface Settings {
          lore: string;
          entry: string;
          notify?: boolean;
        }
      }
      interface UNLOCK_LORE_ENTRY extends ig.EventStepBase {
        lore: string;
        entry: string;
        notify: boolean;
        _wm: ig.Config;
      }
      interface UNLOCK_LORE_ENTRY_CONSTRUCTOR extends ImpactClass<UNLOCK_LORE_ENTRY> {
        new (settings: ig.EVENT_STEP.UNLOCK_LORE_ENTRY.Settings): UNLOCK_LORE_ENTRY;
      }
      var UNLOCK_LORE_ENTRY: UNLOCK_LORE_ENTRY_CONSTRUCTOR;

      namespace UNLOCK_LORE_LIST {
        interface Settings {
          lories: string[];
          notify?: boolean;
        }
      }
      interface UNLOCK_LORE_LIST extends ig.EventStepBase {
        lories: string[];
        entry: unknown;
        notify: boolean;
        _wm: ig.Config;
      }
      interface UNLOCK_LORE_LIST_CONSTRUCTOR extends ImpactClass<UNLOCK_LORE_LIST> {
        new (settings: ig.EVENT_STEP.UNLOCK_LORE_LIST.Settings): UNLOCK_LORE_LIST;
      }
      var UNLOCK_LORE_LIST: UNLOCK_LORE_LIST_CONSTRUCTOR;

      namespace ACTIVATE_LANDMARK {
        interface Settings {
          area: string;
          landmark: string;
        }
      }
      interface ACTIVATE_LANDMARK extends ig.EventStepBase {
        area: string;
        landmark: string;
        _wm: ig.Config;
      }
      interface ACTIVATE_LANDMARK_CONSTRUCTOR extends ImpactClass<ACTIVATE_LANDMARK> {
        new (settings: ig.EVENT_STEP.ACTIVATE_LANDMARK.Settings): ACTIVATE_LANDMARK;
      }
      var ACTIVATE_LANDMARK: ACTIVATE_LANDMARK_CONSTRUCTOR;

      namespace SET_LANDMARK_ACTIVE_STATE {
        interface Settings {
          area: string;
          landmark?: string;
          state: boolean;
        }
      }
      interface SET_LANDMARK_ACTIVE_STATE extends ig.EventStepBase {
        area: string;
        landmark?: string;
        _wm: ig.Config;
        state: boolean;
      }
      interface SET_LANDMARK_ACTIVE_STATE_CONSTRUCTOR
        extends ImpactClass<SET_LANDMARK_ACTIVE_STATE> {
        new (settings: ig.EVENT_STEP.SET_LANDMARK_ACTIVE_STATE.Settings): SET_LANDMARK_ACTIVE_STATE;
      }
      var SET_LANDMARK_ACTIVE_STATE: SET_LANDMARK_ACTIVE_STATE_CONSTRUCTOR;

      namespace UNDO_OPENED_CHEST_TRACK {
        interface Settings {
          map: string;
          area: string;
          chestId: number;
          variable?: string;
        }
      }
      interface UNDO_OPENED_CHEST_TRACK extends ig.EventStepBase {
        _wm: ig.Config;
        map: string;
        area: string;
        chestId: number;
        variable: string;
      }
      interface UNDO_OPENED_CHEST_TRACK_CONSTRUCTOR extends ImpactClass<UNDO_OPENED_CHEST_TRACK> {
        new (settings: ig.EVENT_STEP.UNDO_OPENED_CHEST_TRACK.Settings): UNDO_OPENED_CHEST_TRACK;
      }
      var UNDO_OPENED_CHEST_TRACK: UNDO_OPENED_CHEST_TRACK_CONSTRUCTOR;

      namespace OPEN_SHOP {
        interface Settings {
          shop: string;
        }
      }
      interface OPEN_SHOP extends ig.EventStepBase {
        shop: string;
        _wm: ig.Config;

        start(this: this): void;
      }
      interface OPEN_SHOP_CONSTRUCTOR extends ImpactClass<OPEN_SHOP> {
        new (settings: ig.EVENT_STEP.OPEN_SHOP.Settings): OPEN_SHOP;
      }
      var OPEN_SHOP: OPEN_SHOP_CONSTRUCTOR;

      namespace OPEN_QUEST_HUB {
        interface Settings {
          hub: string;
        }
      }
      interface OPEN_QUEST_HUB extends ig.EventStepBase {
        hub: string;
        _wm: ig.Config;
      }
      interface OPEN_QUEST_HUB_CONSTRUCTOR extends ImpactClass<OPEN_QUEST_HUB> {
        new (settings: ig.EVENT_STEP.OPEN_QUEST_HUB.Settings): OPEN_QUEST_HUB;
      }
      var OPEN_QUEST_HUB: OPEN_QUEST_HUB_CONSTRUCTOR;

      namespace UNDO_VISITED_AREA {
        interface Settings {
          area: string;
        }
      }
      interface UNDO_VISITED_AREA extends ig.EventStepBase {
        hub: unknown;
        _wm: ig.Config;
        area: string;
        areaLoadable: sc.AreaLoadable;

        clearCached(this: this): void;
      }
      interface UNDO_VISITED_AREA_CONSTRUCTOR extends ImpactClass<UNDO_VISITED_AREA> {
        new (settings: ig.EVENT_STEP.UNDO_VISITED_AREA.Settings): UNDO_VISITED_AREA;
      }
      var UNDO_VISITED_AREA: UNDO_VISITED_AREA_CONSTRUCTOR;
    }
  }
}
