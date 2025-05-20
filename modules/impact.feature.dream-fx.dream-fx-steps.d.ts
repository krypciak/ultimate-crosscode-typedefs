// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace START_DREAM_FX {
        interface Settings {
          centerColor: ig.RGBColorData | string;
          borderColor: ig.RGBColorData | string;
          circleSize: number;
          transition: boolean;
        }
      }
      interface START_DREAM_FX extends ig.EventStepBase {
        _wm: ig.Config;
        assets: ig.DreamAssets;
        centerColor: ig.RGBColor;
        borderColor: ig.RGBColor;
        circleSize: number;
        transition: boolean;

        clearCached(this: this): void;
      }
      interface START_DREAM_FX_CONSTRUCTOR extends ImpactClass<START_DREAM_FX> {
        new (settings: ig.EVENT_STEP.START_DREAM_FX.Settings): START_DREAM_FX;
      }
      var START_DREAM_FX: START_DREAM_FX_CONSTRUCTOR;

      namespace CLEAR_DREAM_FX {
        interface Settings {}
      }
      interface CLEAR_DREAM_FX extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_DREAM_FX_CONSTRUCTOR extends ImpactClass<CLEAR_DREAM_FX> {
        new (settings: ig.EVENT_STEP.CLEAR_DREAM_FX.Settings): CLEAR_DREAM_FX;
      }
      var CLEAR_DREAM_FX: CLEAR_DREAM_FX_CONSTRUCTOR;

      namespace SET_DREAM_FX_COLORS {
        interface Settings {
          centerColor: ig.RGBColorData | string;
          borderColor: ig.RGBColorData | string;
          duration: number;
        }
      }
      interface SET_DREAM_FX_COLORS extends ig.EventStepBase {
        _wm: ig.Config;
        centerColor: ig.RGBColor;
        borderColor: ig.RGBColor;
        duration: number;
      }
      interface SET_DREAM_FX_COLORS_CONSTRUCTOR extends ImpactClass<SET_DREAM_FX_COLORS> {
        new (settings: ig.EVENT_STEP.SET_DREAM_FX_COLORS.Settings): SET_DREAM_FX_COLORS;
      }
      var SET_DREAM_FX_COLORS: SET_DREAM_FX_COLORS_CONSTRUCTOR;

      namespace SET_DREAM_FX_CIRCLE_SIZE {
        interface Settings {
          circleSize: number;
          duration: number;
        }
      }
      interface SET_DREAM_FX_CIRCLE_SIZE extends ig.EventStepBase {
        _wm: ig.Config;
        circleSize: number;
        duration: number;
      }
      interface SET_DREAM_FX_CIRCLE_SIZE_CONSTRUCTOR extends ImpactClass<SET_DREAM_FX_CIRCLE_SIZE> {
        new (settings: ig.EVENT_STEP.SET_DREAM_FX_CIRCLE_SIZE.Settings): SET_DREAM_FX_CIRCLE_SIZE;
      }
      var SET_DREAM_FX_CIRCLE_SIZE: SET_DREAM_FX_CIRCLE_SIZE_CONSTRUCTOR;
    }
  }
}
