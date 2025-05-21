// requires impact.base.game

export {};

declare global {
  namespace ig {
    namespace BLUR_ZOOM_CONFIG {
      interface Base {
        zoomAdd: number;
        duration: number;
        repeat: number;
        alphaStart: number;
      }
    }
    interface BLUR_ZOOM_CONFIG {
      LIGHTEST: ig.BLUR_ZOOM_CONFIG.Base;
      LIGHTER: ig.BLUR_ZOOM_CONFIG.Base;
      LIGHT: ig.BLUR_ZOOM_CONFIG.Base;
      MEDIUM: ig.BLUR_ZOOM_CONFIG.Base;
      SLOW_INTENSE: ig.BLUR_ZOOM_CONFIG.Base;
      STATIC_LIGHT: ig.BLUR_ZOOM_CONFIG.Base;
    }
    var BLUR_ZOOM_CONFIG: BLUR_ZOOM_CONFIG;

    interface ScreenBlur extends ig.GameAddon {
      onPostUpdate(this: this): void;
      onPreDraw(this: this): void;
      onPostDraw(this: this): void;
      onReset(this: this): void;
    }
    interface ScreenBlurConstructor extends ImpactClass<ScreenBlur> {
      new (): ScreenBlur;
    }
    var ScreenBlur: ScreenBlurConstructor;

    var screenBlur: ScreenBlur;
  }
}
