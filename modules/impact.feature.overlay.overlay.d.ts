// requires impact.base.event
// requires impact.base.game
// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
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

    interface Overlay extends ig.GameAddon {
      onDeferredUpdate(this: this): void;
      onReset(this: this): void;
    }
    interface OverlayConstructor extends ImpactClass<Overlay> {
      new (): Overlay;
    }
    var Overlay: OverlayConstructor;
    var overlay: Overlay;
  }
}
