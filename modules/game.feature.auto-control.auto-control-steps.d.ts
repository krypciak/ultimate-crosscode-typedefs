// requires impact.base.event
// requires game.feature.auto-control.auto-control

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace START_AUTO_CTRL {
        interface Settings {}
      }
      interface START_AUTO_CTRL extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface START_AUTO_CTRL_CONSTRUCTOR extends ImpactClass<START_AUTO_CTRL> {
        new (settings: ig.EVENT_STEP.START_AUTO_CTRL.Settings): START_AUTO_CTRL;
      }
      var START_AUTO_CTRL: START_AUTO_CTRL_CONSTRUCTOR;

      namespace END_AUTO_CTRL {
        interface Settings {}
      }
      interface END_AUTO_CTRL extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface END_AUTO_CTRL_CONSTRUCTOR extends ImpactClass<END_AUTO_CTRL> {
        new (settings: ig.EVENT_STEP.END_AUTO_CTRL.Settings): END_AUTO_CTRL;
      }
      var END_AUTO_CTRL: END_AUTO_CTRL_CONSTRUCTOR;

      namespace SET_AUTO_CTRL_MOUSE {
        interface Settings {
          pos: Vec2;
          duration: number;
        }
      }
      interface SET_AUTO_CTRL_MOUSE extends ig.EventStepBase {
        pos: unknown;
        duration: number;
        _wm: ig.Config;
      }
      interface SET_AUTO_CTRL_MOUSE_CONSTRUCTOR extends ImpactClass<SET_AUTO_CTRL_MOUSE> {
        new (settings: ig.EVENT_STEP.SET_AUTO_CTRL_MOUSE.Settings): SET_AUTO_CTRL_MOUSE;
      }
      var SET_AUTO_CTRL_MOUSE: SET_AUTO_CTRL_MOUSE_CONSTRUCTOR;

      namespace SET_AUTO_CTRL_STICK {
        interface Settings {
          stick: (typeof sc.AUTO_CTRL_AXIS)[number];
          value: Vec2;
          duration: number;
        }
      }
      interface SET_AUTO_CTRL_STICK extends ig.EventStepBase {
        stick: (typeof sc.AUTO_CTRL_AXIS)[number];
        value: unknown;
        duration: number;
        _wm: ig.Config;
      }
      interface SET_AUTO_CTRL_STICK_CONSTRUCTOR extends ImpactClass<SET_AUTO_CTRL_STICK> {
        new (settings: ig.EVENT_STEP.SET_AUTO_CTRL_STICK.Settings): SET_AUTO_CTRL_STICK;
      }
      var SET_AUTO_CTRL_STICK: SET_AUTO_CTRL_STICK_CONSTRUCTOR;

      namespace SET_AUTO_CTRL_ACTION {
        interface Settings {
          action: (typeof sc.AUTO_CTRL_ACTION)[number];
          value?: number;
          hold: boolean;
          deviceFilter: (typeof sc.AUTO_INPUT_DEVICE)[keyof typeof sc.AUTO_INPUT_DEVICE];
        }
      }
      interface SET_AUTO_CTRL_ACTION extends ig.EventStepBase {
        action: (typeof sc.AUTO_CTRL_ACTION)[number];
        value: number;
        hold: boolean;
        deviceFilter: ig.INPUT_DEVICES;
        _wm: ig.Config;
      }
      interface SET_AUTO_CTRL_ACTION_CONSTRUCTOR extends ImpactClass<SET_AUTO_CTRL_ACTION> {
        new (settings: ig.EVENT_STEP.SET_AUTO_CTRL_ACTION.Settings): SET_AUTO_CTRL_ACTION;
      }
      var SET_AUTO_CTRL_ACTION: SET_AUTO_CTRL_ACTION_CONSTRUCTOR;

      namespace CLEAR_AUTO_CTRL_ACTION {
        interface Settings {
          action: (typeof sc.AUTO_CTRL_ACTION)[number];
          deviceFilter: string;
        }
      }
      interface CLEAR_AUTO_CTRL_ACTION extends ig.EventStepBase {
        action: (typeof sc.AUTO_CTRL_ACTION)[number];
        deviceFilter: ig.INPUT_DEVICES;
        _wm: ig.Config;
      }
      interface CLEAR_AUTO_CTRL_ACTION_CONSTRUCTOR extends ImpactClass<CLEAR_AUTO_CTRL_ACTION> {
        new (settings: ig.EVENT_STEP.CLEAR_AUTO_CTRL_ACTION.Settings): CLEAR_AUTO_CTRL_ACTION;
      }
      var CLEAR_AUTO_CTRL_ACTION: CLEAR_AUTO_CTRL_ACTION_CONSTRUCTOR;
    }
  }
}
