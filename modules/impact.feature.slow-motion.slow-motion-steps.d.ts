// requires impact.feature.slow-motion.slow-motion
// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace ADD_SLOW_MOTION {
        interface Settings {
          name: string;
          factor: number;
          time: number;
        }
      }
      interface ADD_SLOW_MOTION extends ig.EventStepBase {
        name: string;
        factor: number;
        time: number;
        _wm: ig.Config;
      }
      interface ADD_SLOW_MOTION_CONSTRUCTOR extends ImpactClass<ADD_SLOW_MOTION> {
        new (settings: ig.EVENT_STEP.ADD_SLOW_MOTION.Settings): ADD_SLOW_MOTION;
      }
      var ADD_SLOW_MOTION: ADD_SLOW_MOTION_CONSTRUCTOR;

      namespace CLEAR_SLOW_MOTION {
        interface Settings {
          name: string;
          time: number;
        }
      }
      interface CLEAR_SLOW_MOTION extends ig.EventStepBase {
        name: string;
        time: number;
        _wm: ig.Config;
      }
      interface CLEAR_SLOW_MOTION_CONSTRUCTOR extends ImpactClass<CLEAR_SLOW_MOTION> {
        new (settings: ig.EVENT_STEP.CLEAR_SLOW_MOTION.Settings): CLEAR_SLOW_MOTION;
      }
      var CLEAR_SLOW_MOTION: CLEAR_SLOW_MOTION_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace ADD_SLOW_MOTION {
        interface Settings {
          factor: number;
          time: number;
          keepEntityStatic: boolean;
          inversAccelerate: boolean;
        }
      }
      interface ADD_SLOW_MOTION extends ig.ActionStepBase {
        factor: number;
        time: number;
        _wm: ig.Config;
        keepEntityStatic: boolean;
        inversAccelerate: boolean;
      }
      interface ADD_SLOW_MOTION_CONSTRUCTOR extends ImpactClass<ADD_SLOW_MOTION> {
        new (settings: ig.ACTION_STEP.ADD_SLOW_MOTION.Settings): ADD_SLOW_MOTION;
      }
      var ADD_SLOW_MOTION: ADD_SLOW_MOTION_CONSTRUCTOR;

      namespace CLEAR_SLOW_MOTION {
        interface Settings {
          time: number;
          removeEntityStatic: boolean;
        }
      }
      interface CLEAR_SLOW_MOTION extends ig.ActionStepBase {
        time: number;
        _wm: ig.Config;
        removeEntityStatic: boolean;
      }
      interface CLEAR_SLOW_MOTION_CONSTRUCTOR extends ImpactClass<CLEAR_SLOW_MOTION> {
        new (settings: ig.ACTION_STEP.CLEAR_SLOW_MOTION.Settings): CLEAR_SLOW_MOTION;
      }
      var CLEAR_SLOW_MOTION: CLEAR_SLOW_MOTION_CONSTRUCTOR;
    }
  }
}
