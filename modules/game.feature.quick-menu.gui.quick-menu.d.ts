// requires impact.base.image
// requires impact.feature.gui.gui
// requires game.feature.quick-menu.gui.quick-screen
// requires game.feature.quick-menu.gui.circle-menu
// requires game.feature.quick-menu.gui.quick-item-menu
// requires game.feature.quick-menu.gui.quick-party
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface QuickMenu extends ig.GuiElementBase, sc.Model.Observer {
      ringmenu: sc.QuickRingMenu;
      items: sc.QuickItemMenu;
      analysis: sc.QuickMenuAnalysis;
      party: sc.QuickPartyStrategyMenu;
      location: sc.QuickLocationBox;
      info: sc.InfoBar;
      buffInfo: sc.BuffInfo;
      buffStats: sc.QuickMenuBuffsGui;
      backButton: null /* unused afaik */;

      _checkBackButtonInput(this: this): boolean;
      _enterMenu(this: this): void;
      _exitMenu(this: this): void;
      _setInfoBarAndLocation(this: this): void;
    }
    interface QuickMenuConstructor extends ImpactClass<QuickMenu> {
      new (): QuickMenu;
    }
    var QuickMenu: QuickMenuConstructor;
  }
}
