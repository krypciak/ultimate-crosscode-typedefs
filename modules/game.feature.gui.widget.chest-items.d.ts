// requires impact.base.image
// requires impact.feature.gui.gui
// requires game.feature.inventory.inventory

export {};

declare global {
  namespace sc {
    interface ItemGuiLayer extends ig.GuiElementBase {
      addItem(this: this, entity: ig.Entity, item: sc.ItemID, count: number): void;
    }
    interface ItemGuiLayerConstructor extends ImpactClass<ItemGuiLayer> {
      new (): ItemGuiLayer;
    }
    var ItemGuiLayer: ItemGuiLayerConstructor;
  }
}
