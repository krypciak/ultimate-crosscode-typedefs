// requires impact.feature.screen-blur.screen-blur
// requires impact.base.action
// requires impact.base.event
// requires impact.base.entity

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SET_SCREEN_BLUR {
        interface Settings {
          alpha?: number;
        }
      }
      interface SET_SCREEN_BLUR extends ig.EventStepBase {
        alpha: number;
        _wm: ig.Config;
      }
      interface SET_SCREEN_BLUR_CONSTRUCTOR extends ImpactClass<SET_SCREEN_BLUR> {
        new (settings: ig.EVENT_STEP.SET_SCREEN_BLUR.Settings): SET_SCREEN_BLUR;
      }
      var SET_SCREEN_BLUR: SET_SCREEN_BLUR_CONSTRUCTOR;

      namespace CLEAR_SCREEN_BLUR {
        interface Settings {}
      }
      interface CLEAR_SCREEN_BLUR extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_SCREEN_BLUR_CONSTRUCTOR extends ImpactClass<CLEAR_SCREEN_BLUR> {
        new (settings: ig.EVENT_STEP.CLEAR_SCREEN_BLUR.Settings): CLEAR_SCREEN_BLUR;
      }
      var CLEAR_SCREEN_BLUR: CLEAR_SCREEN_BLUR_CONSTRUCTOR;

      namespace SET_ZOOM_BLUR {
        interface Settings {
          zoomType: keyof typeof ig.BLUR_ZOOM_CONFIG;
          fadeIn?: number;
          duration?: number;
          fadeOut?: number;
          name?: string;
          target?: ig.Event.GetEntity;
          align?: keyof typeof ig.ENTITY_ALIGN;
          offset?: Vec3;
        }
      }
      interface SET_ZOOM_BLUR extends ig.EventStepBase {
        zoomType: keyof typeof ig.BLUR_ZOOM_CONFIG;
        fadeIn?: number;
        duration?: number;
        fadeOut?: number;
        name?: string;
        _wm: ig.Config;
        target?: ig.Event.GetEntity;
        align: ig.ENTITY_ALIGN;
        offset?: Vec3;
      }
      interface SET_ZOOM_BLUR_CONSTRUCTOR extends ImpactClass<SET_ZOOM_BLUR> {
        new (settings: ig.EVENT_STEP.SET_ZOOM_BLUR.Settings): SET_ZOOM_BLUR;
      }
      var SET_ZOOM_BLUR: SET_ZOOM_BLUR_CONSTRUCTOR;

      namespace FADE_OUT_ZOOM_BLUR {
        interface Settings {
          name: string;
          fadeOut?: number;
        }
      }
      interface FADE_OUT_ZOOM_BLUR extends ig.EventStepBase {
        name: string;
        fadeOut: number;
        _wm: ig.Config;
      }
      interface FADE_OUT_ZOOM_BLUR_CONSTRUCTOR extends ImpactClass<FADE_OUT_ZOOM_BLUR> {
        new (settings: ig.EVENT_STEP.FADE_OUT_ZOOM_BLUR.Settings): FADE_OUT_ZOOM_BLUR;
      }
      var FADE_OUT_ZOOM_BLUR: FADE_OUT_ZOOM_BLUR_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace SET_ZOOM_BLUR {
        interface Settings {
          zoomType: keyof typeof ig.BLUR_ZOOM_CONFIG;
          fadeIn?: number;
          duration?: number;
          fadeOut?: number;
          name?: string;
          align?: keyof typeof ig.ENTITY_ALIGN;
          offset?: Vec3;
        }
      }
      interface SET_ZOOM_BLUR extends ig.ActionStepBase {
        zoomType: keyof typeof ig.BLUR_ZOOM_CONFIG;
        fadeIn?: number;
        duration?: number;
        fadeOut?: number;
        name?: string;
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
        offset?: Vec3;
      }
      interface SET_ZOOM_BLUR_CONSTRUCTOR extends ImpactClass<SET_ZOOM_BLUR> {
        new (settings: ig.ACTION_STEP.SET_ZOOM_BLUR.Settings): SET_ZOOM_BLUR;
      }
      var SET_ZOOM_BLUR: SET_ZOOM_BLUR_CONSTRUCTOR;

      namespace FADE_OUT_ZOOM_BLUR {
        interface Settings {
          name: string;
          fadeOut?: number;
        }
      }
      interface FADE_OUT_ZOOM_BLUR extends ig.ActionStepBase {
        name: string;
        fadeOut: number;
        _wm: ig.Config;
      }
      interface FADE_OUT_ZOOM_BLUR_CONSTRUCTOR extends ImpactClass<FADE_OUT_ZOOM_BLUR> {
        new (settings: ig.ACTION_STEP.FADE_OUT_ZOOM_BLUR.Settings): FADE_OUT_ZOOM_BLUR;
      }
      var FADE_OUT_ZOOM_BLUR: FADE_OUT_ZOOM_BLUR_CONSTRUCTOR;
    }
  }
}
