// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace NUDGE_PROP {
        interface Settings {
          prop: ig.Event.GetEntity;
          playSound: boolean;
        }
      }
      interface NUDGE_PROP extends ig.EventStepBase {
        prop: ig.Event.GetEntity;
        playSound: boolean;
        _wm: ig.Config;
      }
      interface NUDGE_PROP_CONSTRUCTOR extends ImpactClass<NUDGE_PROP> {
        new (settings: ig.EVENT_STEP.NUDGE_PROP.Settings): NUDGE_PROP;
      }
      var NUDGE_PROP: NUDGE_PROP_CONSTRUCTOR;

      namespace OPEN_DOOR {
        interface Settings {
          door: ig.Event.GetEntity;
          openTime?: number;
        }
      }
      interface OPEN_DOOR extends ig.EventStepBase {
        door: ig.Event.GetEntity;
        _wm: ig.Config;
        openTime?: number;
      }
      interface OPEN_DOOR_CONSTRUCTOR extends ImpactClass<OPEN_DOOR> {
        new (settings: ig.EVENT_STEP.OPEN_DOOR.Settings): OPEN_DOOR;
      }
      var OPEN_DOOR: OPEN_DOOR_CONSTRUCTOR;

      namespace CLOSE_DOOR {
        interface Settings {
          door: ig.Event.GetEntity;
        }
      }
      interface CLOSE_DOOR extends ig.EventStepBase {
        door: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface CLOSE_DOOR_CONSTRUCTOR extends ImpactClass<CLOSE_DOOR> {
        new (settings: ig.EVENT_STEP.CLOSE_DOOR.Settings): CLOSE_DOOR;
      }
      var CLOSE_DOOR: CLOSE_DOOR_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace ENTER_DOOR {
        interface Settings {
          door: ig.Event.GetEntity;
        }
      }
      interface ENTER_DOOR extends ig.ActionStepBase {
        door: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface ENTER_DOOR_CONSTRUCTOR extends ImpactClass<ENTER_DOOR> {
        new (settings: ig.ACTION_STEP.ENTER_DOOR.Settings): ENTER_DOOR;
      }
      var ENTER_DOOR: ENTER_DOOR_CONSTRUCTOR;
    }
  }
}
