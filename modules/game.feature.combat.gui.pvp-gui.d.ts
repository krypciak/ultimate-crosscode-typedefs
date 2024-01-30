// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box

export {};

declare global {
  namespace sc {
    interface PvpRoundGui extends ig.GuiElementBase {
      timer: number;

      remove(this: this): void;
    }
    interface PvpRoundGuiConstructor extends ImpactClass<PvpRoundGui> {
      new (roundNumber: number, autoContinue?: boolean): PvpRoundGui;
    }
    var PvpRoundGui: PvpRoundGuiConstructor;
  }
}
