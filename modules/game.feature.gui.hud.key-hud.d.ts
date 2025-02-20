// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.menu.map-model

export {};

declare global {
  namespace sc {
    interface KeyHudGui extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      ninepatch: ig.NinePatch;
      areaItemType: sc.AREA_ITEM_TYPE;
      areaItemTypeMaster: sc.AREA_ITEM_TYPE;
      numberGui: sc.NumberGui;
      hasMaster: boolean;

      updateVisibility(this: this): void;
      updateItemCount(this: this): void;
    }
    interface KeyHudGuiConstructor extends ImpactClass<KeyHudGui> {
      new (): KeyHudGui;
    }
    var KeyHudGui: KeyHudGuiConstructor;
  }
}
