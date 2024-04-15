// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.player.player-model

export {};

declare global {
  namespace sc {
    interface FavoriteElementGui extends ig.GuiElementBase {
      gfx: ig.Image;
      text: sc.TextGui;
      id: sc.ItemID;

      setItem(this: this, item: sc.ItemID): void;
    }
    interface FavoriteElementGuiConstructor extends ImpactClass<FavoriteElementGui> {
      new (): FavoriteElementGui;
    }
    var FavoriteElementGui: FavoriteElementGuiConstructor;

    interface ItemStatusFavorites extends sc.HeaderMenuPanel, sc.Model.Observer {
      gfx: ig.Image;
      line: ig.Image;
      maxFavs: sc.NumberGui;
      currentFavs: sc.NumberGui;
      _favs: sc.FavoriteElementGui[];

      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this): void;
      exitMenu(this: this): void;
      updateFavorites(this: this): void;
    }
    interface ItemStatusFavoritesConstructor extends ImpactClass<ItemStatusFavorites> {
      new (): ItemStatusFavorites;
    }
    var ItemStatusFavorites: ItemStatusFavoritesConstructor;
  }
}
