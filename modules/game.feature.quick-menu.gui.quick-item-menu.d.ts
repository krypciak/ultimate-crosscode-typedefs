// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.interact.button-group
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface QuickItemArrow extends ig.GuiElementBase {
      gfx: ig.Image;
      flipX: boolean;
      flipY: boolean;
      bottomAnchor: boolean;

      setPosition(
        this: this,
        x: number,
        y: number,
        flipX?: boolean,
        flipY?: boolean,
        bottomAnchor?: boolean,
      ): void;
    }
    interface QuickItemArrowConstructor extends ImpactClass<QuickItemArrow> {
      new (): QuickItemArrow;
    }
    var QuickItemArrow: QuickItemArrowConstructor;

    interface QuickItemMenu extends ig.BoxGui, sc.Model.Observer {
      gfx: ig.Image;
      ninepatch: ig.NinePatch;
      base: ig.GuiHook;
      anchor: ig.GuiHook;
      list: sc.ButtonListBox;
      arrow: sc.QuickItemArrow;
      buttongroup: sc.ButtonGroup;
      _hidden: boolean;

      updateList(this: this, skipSounds?: boolean): void;
      addFavoriteOverlay(this: this, button: sc.ItemBoxButton): void;
      onSelection(this: this, button: sc.ItemBoxButton): void;
      onPress(this: this, button: sc.ItemBoxButton): void;
    }
    interface QuickItemMenuConstructor extends ImpactClass<QuickItemMenu> {
      new (baseGui: ig.GuiElementBase, anchorGui: ig.GuiElementBase): QuickItemMenu;
    }
    var QuickItemMenu: QuickItemMenuConstructor;
  }
}
