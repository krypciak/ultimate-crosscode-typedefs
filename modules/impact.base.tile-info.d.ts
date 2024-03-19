export {};

declare global {
  namespace ig {
    interface TileInfo extends ig.Class {
      animatedTiles: Record<number, [number, number, number, number]>;
      animSpeed: number;

      getAnimTiles(this: this, index: number): Nullable<[number, number, number, number]>;
    }
    interface TileInfoConstructor extends ImpactClass<TileInfo> {
      new (tileset: string): TileInfo;
    }
    var TileInfo: TileInfoConstructor;
  }
}
