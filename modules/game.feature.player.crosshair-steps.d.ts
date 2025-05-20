// requires impact.base.animation
// requires impact.base.action
// requires impact.base.entity

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace ACTIVATE_CROSSHAIR {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface ACTIVATE_CROSSHAIR extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface ACTIVATE_CROSSHAIR_CONSTRUCTOR extends ImpactClass<ACTIVATE_CROSSHAIR> {
        new (settings: ig.EVENT_STEP.ACTIVATE_CROSSHAIR.Settings): ACTIVATE_CROSSHAIR;
      }
      var ACTIVATE_CROSSHAIR: ACTIVATE_CROSSHAIR_CONSTRUCTOR;

      namespace DEACTIVATE_CROSSHAIR {
        interface Settings {}
      }
      interface DEACTIVATE_CROSSHAIR extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface DEACTIVATE_CROSSHAIR_CONSTRUCTOR extends ImpactClass<DEACTIVATE_CROSSHAIR> {
        new (settings: ig.EVENT_STEP.DEACTIVATE_CROSSHAIR.Settings): DEACTIVATE_CROSSHAIR;
      }
      var DEACTIVATE_CROSSHAIR: DEACTIVATE_CROSSHAIR_CONSTRUCTOR;

      namespace SET_CROSSHAIR_TARGET {
        interface Settings {
          pos: Vec2;
        }
      }
      interface SET_CROSSHAIR_TARGET extends ig.EventStepBase {
        pos: Vec2;
        _wm: ig.Config;
      }
      interface SET_CROSSHAIR_TARGET_CONSTRUCTOR extends ImpactClass<SET_CROSSHAIR_TARGET> {
        new (settings: ig.EVENT_STEP.SET_CROSSHAIR_TARGET.Settings): SET_CROSSHAIR_TARGET;
      }
      var SET_CROSSHAIR_TARGET: SET_CROSSHAIR_TARGET_CONSTRUCTOR;

      namespace SET_CROSSHAIR_SPEED {
        interface Settings {
          value: number;
        }
      }
      interface SET_CROSSHAIR_SPEED extends ig.EventStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_CROSSHAIR_SPEED_CONSTRUCTOR extends ImpactClass<SET_CROSSHAIR_SPEED> {
        new (settings: ig.EVENT_STEP.SET_CROSSHAIR_SPEED.Settings): SET_CROSSHAIR_SPEED;
      }
      var SET_CROSSHAIR_SPEED: SET_CROSSHAIR_SPEED_CONSTRUCTOR;

      namespace REDUCE_CROSSHAIR_PRECISION {
        interface Settings {
          value: number;
        }
      }
      interface REDUCE_CROSSHAIR_PRECISION extends ig.EventStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface REDUCE_CROSSHAIR_PRECISION_CONSTRUCTOR
        extends ImpactClass<REDUCE_CROSSHAIR_PRECISION> {
        new (
          settings: ig.EVENT_STEP.REDUCE_CROSSHAIR_PRECISION.Settings,
        ): REDUCE_CROSSHAIR_PRECISION;
      }
      var REDUCE_CROSSHAIR_PRECISION: REDUCE_CROSSHAIR_PRECISION_CONSTRUCTOR;

      namespace GET_CROSSHAIR_DIR {
        interface Settings {
          variable: string;
        }
      }
      interface GET_CROSSHAIR_DIR extends ig.EventStepBase {
        variable: string;
        _wm: ig.Config;
      }
      interface GET_CROSSHAIR_DIR_CONSTRUCTOR extends ImpactClass<GET_CROSSHAIR_DIR> {
        new (settings: ig.EVENT_STEP.GET_CROSSHAIR_DIR.Settings): GET_CROSSHAIR_DIR;
      }
      var GET_CROSSHAIR_DIR: GET_CROSSHAIR_DIR_CONSTRUCTOR;
    }
  }
}
