// requires impact.base.game
// requires game.feature.player.player-model
// requires game.feature.model.game-model

export {};

declare global {
  namespace sc {
    interface PlayerSkinBase extends ig.Class, ig.Loadable.LoadListener {
      skinType: string;
      name: string;

      constructSkin(this: this, settings: unknown): void;
    }
    interface PlayerSkinBaseConstructor extends ImpactClass<PlayerSkinBase> {
      new (type: string, skinName: string, settings: unknown): PlayerSkinBase;
    }
    var PlayerSkinBase: PlayerSkinBaseConstructor;

    interface PlayerSkinLibrary
      extends ig.GameAddon,
        sc.Model,
        sc.Model.Observer,
        ig.ExtensionListener {
      currentSkins: Record<string, sc.PlayerSkinBase>;

      _createSkin(this: this, skinName: string): PlayerSkinBase;
    }
    interface PlayerSkinLibraryConstructor extends ImpactClass<PlayerSkinLibrary> {
      new (): PlayerSkinLibrary;
    }
    var PlayerSkinLibrary: PlayerSkinLibraryConstructor;
    var playerSkins: PlayerSkinLibrary;
  }
}
