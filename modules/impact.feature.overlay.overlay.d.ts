// requires impact.base.event
// requires impact.base.game
// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    interface OverlayGui extends ig.GuiElementBase {
      color: ig.Overlay.RGBAColorData;
      lighter: boolean;
    }
    interface OverlayGuiConstructor extends ImpactClass<OverlayGui> {
      new (): OverlayGui;
    }
    var OverlayGui: OverlayGuiConstructor;

    interface AlphaTransitionHandler extends ig.Class {
      timer: ig.WeightTimer;
      startAlpha: number;
      targetAlpha: number;
      blinkAlpha?: number;

      update(this: this): boolean;
      getAlpha(this: this): number;
      set(this: this, targetAlpha: number, duration: number, blinkAlpha?: number): void;
    }
    interface AlphaTransitionHandlerConstructor extends ImpactClass<AlphaTransitionHandler> {
      new (): AlphaTransitionHandler;
    }
    var AlphaTransitionHandler: AlphaTransitionHandlerConstructor;

    interface OverlayCornerGui extends ig.GuiElementBase {
      gfx: ig.Image;
      alphaHandler: ig.AlphaTransitionHandler;

      setAlpha(this: this, alpha: number, time: number, blinkAlpha?: number): void;
    }
    interface OverlayCornerGuiConstructor extends ImpactClass<OverlayCornerGui> {
      new (gfx: ig.Image): OverlayCornerGui;
    }
    var OverlayCornerGui: OverlayCornerGuiConstructor;

    enum OVERLAY_CORNER {
      WHITE,
      RED,
      BLACK,
    }
    namespace Overlay {
      interface RGBAColorData extends ig.RGBColorData {
        a: number;
      }
    }
    interface Overlay extends ig.GameAddon {
      colorOld: ig.Overlay.RGBAColorData;
      colorNew: ig.Overlay.RGBAColorData;
      lighter: boolean;
      timer: number;
      max: number;
      gfx: Record<'WHITE' | 'RED' | 'BLACK', ig.Image>;
      colorGui: ig.OverlayGui;
      cornerGui: Record<ig.OVERLAY_CORNER, ig.OverlayCornerGui>;
      deferredUpdateOrder: number;

      onDeferredUpdate(this: this): void;
      onReset(this: this): void;
      setColor(
        this: this,
        r: number,
        g: number,
        b: number,
        a: number,
        max: number,
        lighter?: boolean,
        zIndex?: number,
      ): void;
      setAlpha(this: this, alpha: number, max: number): void;
      setCorner(
        this: this,
        corner: ig.OVERLAY_CORNER | keyof typeof ig.OVERLAY_CORNER,
        alpha: number,
        time: number,
        blinkAlpha?: number,
      ): void;
      _getCurrentColor(this: this): ig.Overlay.RGBAColorData;
    }
    interface OverlayConstructor extends ImpactClass<Overlay> {
      new (): Overlay;
    }
    var Overlay: OverlayConstructor;
    var overlay: Overlay;
  }
}
