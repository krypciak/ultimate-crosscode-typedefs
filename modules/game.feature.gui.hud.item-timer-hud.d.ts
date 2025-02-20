// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box

export {};

declare global {
  namespace sc {
    interface ItemTimerHudGui extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      numberGui: sc.NumberGui;
      player: sc.PlayerModel;
      maxTime: number;
    }
    interface ItemTimerHudGuiConstructor extends ImpactClass<ItemTimerHudGui> {
      new (): ItemTimerHudGui;
    }
    var ItemTimerHudGui: ItemTimerHudGuiConstructor;
  }
}
