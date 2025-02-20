// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.gui.base.button

export {};

declare global {
  namespace sc {
    interface ShopStartMenu extends ig.BoxGui {
      ninepatch: ig.NinePatch;
      buy: sc.ButtonGui;
      sell: sc.ButtonGui;
      buttongroup: sc.ButtonGroup;

      onButtonPress(this: this, button: sc.ButtonGui): void;
    }
    interface ShopStartMenuConstructor extends ImpactClass<ShopStartMenu> {
      new (): ShopStartMenu;
    }
    var ShopStartMenu: ShopStartMenuConstructor;

    interface ShopStartTitle extends ig.BoxGui {
      ninepatch: ig.NinePatch;
      text: sc.TextGui;
    }
    interface ShopStartTitleConstructor extends ImpactClass<ShopStartTitle> {
      new (): ShopStartTitle;
    }
    var ShopStartTitle: ShopStartTitleConstructor;
  }
}
