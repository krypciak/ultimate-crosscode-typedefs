// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SET_OVERLAY {
        interface Settings {
          color: ig.RGBColorData | string;
          alpha: number;
          time: number;
          lighter: boolean;
          overMessage?: boolean;
        }
      }
      interface SET_OVERLAY extends ig.EventStepBase {
        color: ig.RGBColor;
        alpha: number;
        time: number;
        lighter: boolean;
        _wm: ig.Config;
        overMessage: boolean;
      }
      interface SET_OVERLAY_CONSTRUCTOR extends ImpactClass<SET_OVERLAY> {
        new (settings: ig.EVENT_STEP.SET_OVERLAY.Settings): SET_OVERLAY;
      }
      var SET_OVERLAY: SET_OVERLAY_CONSTRUCTOR;

      namespace SET_OVERLAY_CORNER {
        interface Settings {
          color: keyof typeof ig.OVERLAY_CORNER;
          alpha: number;
          time: number;
          blinkAlpha?: number;
        }
      }
      interface SET_OVERLAY_CORNER extends ig.EventStepBase {
        color: keyof typeof ig.OVERLAY_CORNER;
        alpha: number;
        time: number;
        blinkAlpha?: number;
        _wm: ig.Config;
      }
      interface SET_OVERLAY_CORNER_CONSTRUCTOR extends ImpactClass<SET_OVERLAY_CORNER> {
        new (settings: ig.EVENT_STEP.SET_OVERLAY_CORNER.Settings): SET_OVERLAY_CORNER;
      }
      var SET_OVERLAY_CORNER: SET_OVERLAY_CORNER_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace SET_OVERLAY_CORNER {
        interface Settings {
          color: keyof typeof ig.OVERLAY_CORNER;
          alpha: number;
          time: number;
          blinkAlpha?: number;
        }
      }
      interface SET_OVERLAY_CORNER extends ig.EventStepBase {
        color: keyof typeof ig.OVERLAY_CORNER;
        alpha: number;
        time: number;
        blinkAlpha?: number;
        _wm: ig.Config;
      }
      interface SET_OVERLAY_CORNER_CONSTRUCTOR extends ImpactClass<SET_OVERLAY_CORNER> {
        new (settings: ig.ACTION_STEP.SET_OVERLAY_CORNER.Settings): SET_OVERLAY_CORNER;
      }
      var SET_OVERLAY_CORNER: SET_OVERLAY_CORNER_CONSTRUCTOR;
    }
  }
}
