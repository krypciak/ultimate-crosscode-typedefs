// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.circuit.circuit-misc
// requires game.feature.menu.gui.circuit.circuit-detail-elements

export {};

declare global {
  namespace sc {
    namespace CircuitSwapBranches {
      interface Button extends ig.FocusGui {
        gfx: ig.Image;
        submitSound: ig.Sound;
        blockedSound: ig.Sound;
        startUID: number;
        element: sc.ELEMENT;

        getDistanceToCursor(this: this): number;
      }
      interface ButtonConstructor extends ImpactClass<Button> {
        new (x: number, y: number, startUID: number, element: sc.ELEMENT): Button;
      }
      var Button: ButtonConstructor;
    }
  }
}
