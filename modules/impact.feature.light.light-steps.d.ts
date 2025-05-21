// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {
      namespace ADD_DARKNESS {
        interface Settings {
          intensity: number;
          duration: number;
          fadeIn: number;
          fadeOut: number;
        }
      }
      interface ADD_DARKNESS extends ig.EventStepBase {
        intensity: number;
        duration: number;
        fadeIn: number;
        fadeOut: number;
        _wm: ig.Config;
      }
      interface ADD_DARKNESS_CONSTRUCTOR extends ImpactClass<ADD_DARKNESS> {
        new (settings: ig.ACTION_STEP.ADD_DARKNESS.Settings): ADD_DARKNESS;
      }
      var ADD_DARKNESS: ADD_DARKNESS_CONSTRUCTOR;

      namespace CLEAR_DARKNESS {
        interface Settings {}
      }
      interface CLEAR_DARKNESS extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_DARKNESS_CONSTRUCTOR extends ImpactClass<CLEAR_DARKNESS> {
        new (settings: ig.ACTION_STEP.CLEAR_DARKNESS.Settings): CLEAR_DARKNESS;
      }
      var CLEAR_DARKNESS: CLEAR_DARKNESS_CONSTRUCTOR;
    }
  }
}
