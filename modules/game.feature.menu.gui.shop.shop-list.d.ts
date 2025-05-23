// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires impact.feature.interact.press-repeater
// requires game.feature.gui.base.boxes
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.shop.shop-misc

export {};

declare global {
  namespace sc {
    interface ShopItemButton extends sc.ListBoxButton {
      price: number;
      owned: sc.NumberGui;

      setCountNumber(this: this, value: number, skipTransition?: boolean): void;
    }
    interface ShopItemButtonConstructor extends ImpactClass<ShopItemButton> {
      new (
        itemName: string,
        itemID: sc.ItemID,
        itemDescription: string,
        itemAmount: number,
        cost: number,
        itemEquipLevel: number,
      ): sc.ShopItemButton;
    }
    var ShopItemButton: ShopItemButtonConstructor;

    interface ShopListMenu extends sc.MenuPanel {
      buttongroup: sc.ButtonGroup;
      pagesCache: [];
      list: sc.ItemListBox;
      repeater: ig.PressRepeater;
      _prevSortType: sc.SORT_TYPE;
      _amp: number;
      _ampTimer: number;
      _ampDir: Nullable<-1 | 1>;

      getRepeaterValue(this: this): number;
      getActiveElement(this: this): sc.ShopItemButton;
      stepRight(this: this): void;
      stepLeft(this: this): void;
      changeCount(this: this, direction: 1 | -1): void;
      playSound(this: this, direction: 1 | -1, repeater: boolean): void;
      updateListEntries(this: this, resetCounters?: Nullable<boolean>): void;
      updateShopPage(this: this, sortOrder?: Nullable<sc.SORT_TYPE>): void;
      createBuyList(
        this: this,
        refocus?: Nullable<boolean>,
        fromMouse?: Nullable<boolean>,
        skipSounds?: Nullable<boolean>,
        sortType?: Nullable<sc.SORT_TYPE>,
      ): void;
      scrapSellList(this: this, shopItems: sc.ItemID[]): void;
      scrapBuyList(this: this, shopItems: ig.Database.ShopItem[]): void;
      onPressCallback(this: this, button: sc.ShopItemButton): void;
      onBackButtonPress(this: this): void;
      leaveList(this: this): void;
    }
    interface ShopListMenuConstructor extends ImpactClass<ShopListMenu> {
      new (): ShopListMenu;
    }
    var ShopListMenu: ShopListMenuConstructor;

    interface ShopPageCounter extends sc.MenuPanel {
      pageText: sc.TextGui;
      cycleLeft: sc.ButtonGui;
      cycleRight: sc.ButtonGui;

      show(this: this): void;
      cycleSellPages(this: this, dir: number): void;
    }
    interface ShopPageCounterConstructor extends ImpactClass<ShopPageCounter> {
      new (): ShopListMenu;
    }
    var ShopPageCounter: ShopPageCounterConstructor;
  }
}
