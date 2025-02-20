// requires impact.feature.gui.gui
// requires game.feature.gui.base.numbers

export {};

declare global {
  namespace sc {
    interface SpMiniHudGui extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      params: sc.CombatParams;
      targetSp: number;
    }
    interface SpMiniHudGuiConstructor extends ImpactClass<SpMiniHudGui> {
      new (params: sc.CombatParams): SpMiniHudGui;
    }
    var SpMiniHudGui: SpMiniHudGuiConstructor;
  }
}
