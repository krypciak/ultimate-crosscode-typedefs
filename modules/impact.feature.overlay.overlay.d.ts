// requires impact.base.event
// requires impact.base.game
// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    interface Overlay extends ig.GameAddon {
      onDeferredUpdate(this: this): void;
      onReset(this: this): void;
    }
    interface OverlayConstructor extends ImpactClass<Overlay> {
      new (): Overlay;
    }
    var Overlay: OverlayConstructor;
  }
}
