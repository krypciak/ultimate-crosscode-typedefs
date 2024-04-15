// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.item.item-status-default

export {};

declare global {
  namespace sc {
    interface ItemStatusBuffs extends sc.HeaderMenuPanel, sc.Model.Observer {
      gfx: ig.Image;
      maxBuffs: sc.NumberGui;
      currentBuffs: sc.NumberGui;
      _removeStartIndex: number;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this): void;
      exitMenu(this: this): void;
      _createBuffs(this: this): void;
    }
    interface ItemStatusBuffsConstructor extends ImpactClass<ItemStatusBuffs> {
      new (): ItemStatusBuffs;
    }
    var ItemStatusBuffs: ItemStatusBuffsConstructor;

    interface ItemBuffHelp extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      store?: boolean;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this): void;
      exitMenu(this: this, store?: boolean): void;
    }
    interface ItemBuffHelpConstructor extends ImpactClass<ItemBuffHelp> {
      new (): ItemBuffHelp;
    }
    var ItemBuffHelp: ItemBuffHelpConstructor;
  }
}
