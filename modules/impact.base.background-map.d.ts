// requires impact.base.map
// requires impact.base.image
// requires impact.base.tile-info
// requires game.config

export {};

declare global {
  namespace ig.MAP {
    interface Background extends ig.ChunkedMap {
      tiles: ig.Image;
      tilesetName: string;
      tileInfo: ig.TileInfo;
      hasAnimatedTiles: boolean;
      screenRender: boolean;
      lighter: boolean;
      _wm: ig.Config;

      clearCached(this: this): void;
      checkAnimatedTiles(this: this): void;
      setTileset(this: this, tileset: string): void;
    }
    interface BackgroundConstructor extends ImpactClass<Background> {
      new (data: sc.MapModel.MapLayer, zHeight: number): Background;
    }
  }
}
