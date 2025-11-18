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
      buffer: HTMLCanvasElement;
      context: CanvasRenderingContext2D;
      backBuffer: HTMLCanvasElement;
      backContext: CanvasRenderingContext2D;
      systemBuffer: HTMLCanvasElement;
      systemContext: CanvasRenderingContext2D;
      minAlpha: number;
      maxAlpha: number;
      repeatTimer: number;
      repeatCycle: number;
      firstDraw: boolean;
      timer: ig.WeightTimer;
      zooms: ig.ZoomBlurHandle[];
      namedZooms: Record<string, ig.ZoomBlurHandle>;
      preDrawOrder: number;
      postDrawOrder: number;

      setAlpha(this: this, alpha: number): void;
      clear(this: this): void;
      clearZooms(this: this): void;
      addZoom(this: this, handle: ig.ZoomBlurHandle): void;
      fadeOutZoom(this: this, name: string, fadeOutTime?: number): void;
      onPostUpdate(this: this): void;
      onPreDraw(this: this): void;
      onPostDraw(this: this): void;
      onReset(this: this): void;
      _getAlpha(this: this): number;
    }
    interface ScreenBlurConstructor extends ImpactClass<ScreenBlur> {
      new (): ScreenBlur;
    }
    var ScreenBlur: ScreenBlurConstructor;
    var screenBlur: ScreenBlur;

    interface ZoomBlurHandle extends ig.Class, ig.ActorEntity.ActionAttachedListener {
      name: Nullable<string>;
      config: ig.BLUR_ZOOM_CONFIG.Base;
      alphaStep: number;
      fullTimer: ig.WeightTimer;
      repeatTimer: ig.WeightTimer;
      fadeInTime: number;
      duration: number;
      fadeOutTime: number;
      target: Nullable<ig.Entity>;
      align: ig.ENTITY_ALIGN;
      offset: Nullable<Vec3>;
      state: number;

      update(this: this): boolean;
      setFadeOut(this: this, time: number): void;
      draw(
        this: this,
        buffer: HTMLCanvasElement,
        realWidth: number,
        realHeight: number,
        contextWidth: number,
        contextHeight: number,
      ): void;
    }
    interface ZoomBlurHandleConstructor extends ImpactClass<ZoomBlurHandle> {
      new (
        configKey: keyof typeof ig.BLUR_ZOOM_CONFIG,
        duration: number,
        fadeInTime: number,
        fadeOutTime: number,
        name?: Nullable<string>,
        target?: Nullable<ig.Entity>,
        align?: Nullable<ig.ENTITY_ALIGN>,
        offset?: Nullable<Vec3>,
      ): ZoomBlurHandle;
    }
    var ZoomBlurHandle: ZoomBlurHandleConstructor;
  }
}
