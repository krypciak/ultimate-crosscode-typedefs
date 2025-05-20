// requires impact.base.utils
// requires impact.base.event
// requires impact.base.action

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SET_TELEPORT_COLOR {
        interface Settings {
          color: ig.RGBColorData | string;
          lighter: boolean;
        }
      }
      interface SET_TELEPORT_COLOR extends ig.EventStepBase {
        color: ig.RGBColor;
        lighter: boolean;
        _wm: ig.Config;
      }
      interface SET_TELEPORT_COLOR_CONSTRUCTOR extends ImpactClass<SET_TELEPORT_COLOR> {
        new (settings: ig.EVENT_STEP.SET_TELEPORT_COLOR.Settings): SET_TELEPORT_COLOR;
      }
      var SET_TELEPORT_COLOR: SET_TELEPORT_COLOR_CONSTRUCTOR;

      namespace SET_TELEPORT_TIME {
        interface Settings {
          fadeIn: number;
          fadeOut: number;
        }
      }
      interface SET_TELEPORT_TIME extends ig.EventStepBase {
        color: unknown;
        lighter: unknown;
        _wm: ig.Config;
        fadeIn: number;
        fadeOut: number;
      }
      interface SET_TELEPORT_TIME_CONSTRUCTOR extends ImpactClass<SET_TELEPORT_TIME> {
        new (settings: ig.EVENT_STEP.SET_TELEPORT_TIME.Settings): SET_TELEPORT_TIME;
      }
      var SET_TELEPORT_TIME: SET_TELEPORT_TIME_CONSTRUCTOR;

      namespace LOAD {
        interface Settings {}
      }
      interface LOAD extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface LOAD_CONSTRUCTOR extends ImpactClass<LOAD> {
        new (settings: ig.EVENT_STEP.LOAD.Settings): LOAD;
      }
      var LOAD: LOAD_CONSTRUCTOR;

      namespace SAVE {
        interface Settings {
          marker?: ig.Event.GetEntity;
        }
      }
      interface SAVE extends ig.EventStepBase {
        marker?: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface SAVE_CONSTRUCTOR extends ImpactClass<SAVE> {
        new (settings: ig.EVENT_STEP.SAVE.Settings): SAVE;
      }
      var SAVE: SAVE_CONSTRUCTOR;

      namespace GOTO_TITLE {
        interface Settings {}
      }
      interface GOTO_TITLE extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface GOTO_TITLE_CONSTRUCTOR extends ImpactClass<GOTO_TITLE> {
        new (settings: ig.EVENT_STEP.GOTO_TITLE.Settings): GOTO_TITLE;
      }
      var GOTO_TITLE: GOTO_TITLE_CONSTRUCTOR;

      namespace ADD_MONEY {
        interface Settings {
          amount?: number;
        }
      }
      interface ADD_MONEY extends ig.EventStepBase {
        amount: number;
        _wm: ig.Config;
      }
      interface ADD_MONEY_CONSTRUCTOR extends ImpactClass<ADD_MONEY> {
        new (settings: ig.EVENT_STEP.ADD_MONEY.Settings): ADD_MONEY;
      }
      var ADD_MONEY: ADD_MONEY_CONSTRUCTOR;

      namespace REMOVE_MONEY {
        interface Settings {
          amount?: number;
        }
      }
      interface REMOVE_MONEY extends ig.EventStepBase {
        amount: number;
        _wm: ig.Config;
      }
      interface REMOVE_MONEY_CONSTRUCTOR extends ImpactClass<REMOVE_MONEY> {
        new (settings: ig.EVENT_STEP.REMOVE_MONEY.Settings): REMOVE_MONEY;
      }
      var REMOVE_MONEY: REMOVE_MONEY_CONSTRUCTOR;

      namespace DROP_ITEM_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
          item: sc.ItemID;
          amount?: number;
        }
      }
      interface DROP_ITEM_ENTITY extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        item: sc.ItemID;
        amount: number;
        _wm: ig.Config;
      }
      interface DROP_ITEM_ENTITY_CONSTRUCTOR extends ImpactClass<DROP_ITEM_ENTITY> {
        new (settings: ig.EVENT_STEP.DROP_ITEM_ENTITY.Settings): DROP_ITEM_ENTITY;
      }
      var DROP_ITEM_ENTITY: DROP_ITEM_ENTITY_CONSTRUCTOR;

      namespace GIVE_ITEM {
        interface Settings {
          item: sc.ItemID;
          amount?: ig.Event.NumberExpression;
          skip?: boolean;
        }
      }
      interface GIVE_ITEM extends ig.EventStepBase {
        item: sc.ItemID;
        amount: ig.Event.NumberExpression;
        skip: boolean;
        _wm: ig.Config;
      }
      interface GIVE_ITEM_CONSTRUCTOR extends ImpactClass<GIVE_ITEM> {
        new (settings: ig.EVENT_STEP.GIVE_ITEM.Settings): GIVE_ITEM;
      }
      var GIVE_ITEM: GIVE_ITEM_CONSTRUCTOR;

      namespace ADD_CP {
        interface Settings {
          element: keyof typeof sc.ELEMENT;
          amount?: ig.Event.NumberExpression;
        }
      }
      interface ADD_CP extends ig.EventStepBase {
        element: sc.ELEMENT;
        amount: ig.Event.NumberExpression;
        _wm: ig.Config;
      }
      interface ADD_CP_CONSTRUCTOR extends ImpactClass<ADD_CP> {
        new (settings: ig.EVENT_STEP.ADD_CP.Settings): ADD_CP;
      }
      var ADD_CP: ADD_CP_CONSTRUCTOR;

      namespace REMOVE_ITEM {
        interface Settings {
          item: sc.ItemID;
          amount?: ig.Event.NumberExpression;
          unequip?: boolean;
        }
      }
      interface REMOVE_ITEM extends ig.EventStepBase {
        item: sc.ItemID;
        amount: ig.Event.NumberExpression;
        unequip: boolean;
        _wm: ig.Config;
      }
      interface REMOVE_ITEM_CONSTRUCTOR extends ImpactClass<REMOVE_ITEM> {
        new (settings: ig.EVENT_STEP.REMOVE_ITEM.Settings): REMOVE_ITEM;
      }
      var REMOVE_ITEM: REMOVE_ITEM_CONSTRUCTOR;

      namespace TOGGLE_ITEM {
        interface Settings {
          item: sc.ItemID;
        }
      }
      interface TOGGLE_ITEM extends ig.EventStepBase {
        item: sc.ItemID;
        _wm: ig.Config;
      }
      interface TOGGLE_ITEM_CONSTRUCTOR extends ImpactClass<TOGGLE_ITEM> {
        new (settings: ig.EVENT_STEP.TOGGLE_ITEM.Settings): TOGGLE_ITEM;
      }
      var TOGGLE_ITEM: TOGGLE_ITEM_CONSTRUCTOR;

      namespace SET_VAR_ENTITY_STAT {
        interface Settings {
          varName: string;
          entity: ig.Event.GetEntity;
          stat: unknown;
        }
      }
      interface SET_VAR_ENTITY_STAT extends ig.EventStepBase {
        varName: string;
        stat: unknown;
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface SET_VAR_ENTITY_STAT_CONSTRUCTOR extends ImpactClass<SET_VAR_ENTITY_STAT> {
        new (settings: ig.EVENT_STEP.SET_VAR_ENTITY_STAT.Settings): SET_VAR_ENTITY_STAT;
      }
      var SET_VAR_ENTITY_STAT: SET_VAR_ENTITY_STAT_CONSTRUCTOR;
    }
  }
}
