// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.shop.shop-start
// requires game.feature.menu.gui.shop.shop-list
// requires game.feature.menu.gui.shop.shop-stats
// requires game.feature.menu.gui.shop.shop-cart
// requires game.feature.menu.gui.shop.shop-quantity
// requires game.feature.menu.gui.shop.shop-confirm
// requires game.feature.control.control

export {};

declare global {
  namespace sc {
    interface ShopMenu extends sc.BaseMenu, sc.Model.Observer {
      hotkeyHelp: sc.ButtonGui;
      hotkeySort: sc.ButtonGui;
      hotkeySwitch: sc.ButtonGui;
      shopName: sc.ShopStartTitle;
      start: sc.ShopStartMenu;
      shopList: sc.ShopListMenu;
      pageView: sc.ShopPageCounter;
      stats: sc.ShopEquipStats;
      cart: sc.ShopCart;
      quantity: sc.ShopQuantitySelect;
      confirmDialog: sc.ShopConfirmDialog;
      sortMenu: sc.SortMenu;
      helpGui: sc.HelpScreen;

      openQuantitySelect(this: this, button: sc.ButtonGui): void;
      updateSortMenuButton(this: this, sortName: string): void;
      resolveStateChange(
        this: this,
        prevShopState: Nullable<sc.MENU_SHOP_STATE>,
        skipTransition?: boolean,
      ): void;
      onConfirm(this: this): void;
      buyItems(this: this): boolean;
      sellItems(this: this): boolean;
      onQuantitySubmit(this: this, button:sc.ShopItemButton, amount: number): void;
      onQuantityBack(this: this, button: sc.ShopItemButton): void;
      onHotkeyHelpCheck(this: this): boolean;
      onHelpButtonPressed(this: this): void;
      onHotkeySortCheck(this: this): boolean;
      onHotkeySwitchCheck(this: this): boolean;
      onSortButtonPress(this: this): void;
      onExecuteSort(this: this, button: sc.ButtonGui): void;
      createHelpGui(this: this): void;
      onAddHotkeys(this: this, longTransition?: boolean): void;
      commitHotKeysToTopBar(this: this, longTransition?: boolean): void;
      onBackButtonPress(this: this): void;
    }
    interface ShopMenuConstructor extends ImpactClass<ShopMenu> {
      new (): ShopMenu;
    }

    var ShopMenu: ShopMenuConstructor;
  }
}
