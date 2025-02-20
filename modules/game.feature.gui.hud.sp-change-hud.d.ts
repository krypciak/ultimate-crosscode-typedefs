// requires impact.feature.gui.gui
// requires game.feature.combat.model.combat-params
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    interface SpChangeHudGui extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      currentSp: number;
      consumedSp: number;
      timer: number;

      _updatePos(this: this): void;
    }
    interface SpChangeHudGuiConstructor extends ImpactClass<SpChangeHudGui> {
      new (): SpChangeHudGui;
    }
    var SpChangeHudGui: SpChangeHudGuiConstructor;
  }
}
