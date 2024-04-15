// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.item.item-status-equip
// requires game.feature.menu.gui.item.item-status-default
// requires game.feature.menu.gui.item.item-status-buffs
// requires game.feature.menu.gui.item.item-status-favs
// requires game.feature.menu.gui.item.item-status-trade
// requires game.feature.menu.gui.item.item-list

export {};

declare global {
  namespace sc {
    interface ItemMenu extends sc.BaseMenu, sc.Model.Observer {
      hotkeyHelp: sc.ButtonGui;
      hotkeyFav: sc.ButtonGui;
      hotkeySort: sc.ButtonGui;
      statusEquipBox: sc.ItemStatusEquip;
      statusModifierBox: sc.ItemEquipModifier;
      statusDefaultBox: sc.ItemStatusDefault;
      statusBuffBox: sc.ItemStatusBuffs;
      statusFavs: sc.ItemStatusFavorites;
      statusTrade: sc.ItemStatusTrade;
      listBox: sc.ItemTabbedBox;
      consHelp: sc.ItemBuffHelp;
      sortMenu: sc.ItemSortMenu;
      helpGui: sc.HelpScreen;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this): void;
      hideMenu(this: this): void;
      exitMenu(this: this): void;
      onHotkeyHelpCheck(this: this): boolean;
      onHelpButtonPressed(this: this): void;
      createHelpGui(this: this): void;
      onHotkeyFavoriteCheck(this: this): boolean;
      onFavButtonPress(this: this): void;
      onHotkeySortCheck(this: this): boolean;
      onSortButtonPress(this: this): void;
      onAddHotkeys(this: this, longTransition?: boolean): void;
      commitHotKeysToTopBar(this: this, longTransition?: boolean): void;
      onBackButtonPress(this: this): void;
      _updateSortMenuButton(this: this, text: string): void;
    }
    interface ItemMenuConstructor extends ImpactClass<ItemMenu> {
      new (): ItemMenu;
    }
    var ItemMenu: ItemMenuConstructor;
  }
}
