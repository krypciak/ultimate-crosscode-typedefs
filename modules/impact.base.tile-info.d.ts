export {};

declare global {
  namespace ig {
    namespace TileInfoList {
      type TileDataRecord = Record<string, TileData>;
      interface TileData {
        settings: ig.TileInfoList.TileDataSettings;
        autoTiles: AutoTile[];
        animations: Anim[];
      }

      type Anim = [number, number, number, number];

      interface TileDataSettings {
        tileAnimSpeed?: number;
      }

      interface AutoTile {
        variation: { prop: number[]; tiles: number[][] };
        joined: number[];
        tiles: number[][];
      }
    }
    interface TileInfoList extends ig.SingleLoadable {
      tiledata: ig.TileInfoList.TileDataRecord;

      onerror(this: this): void;
      onload(this: this, tiledata: ig.TileInfoList.TileDataRecord): void;
    }
    interface TileInfoListConstructor extends ImpactClass<TileInfoList> {
      new (): TileInfoList;
    }
    var TileInfoList: TileInfoListConstructor;
    var tileInfoList: ig.TileInfoList;

    interface TileInfo extends ig.Class {
      animatedTiles: Record<number, ig.TileInfoList.Anim>;
      animSpeed: number;

      getAnimTiles(this: this, index: number): Nullable<ig.TileInfoList.Anim>;
    }
    interface TileInfoConstructor extends ImpactClass<TileInfo> {
      new (tileset: string): TileInfo;
    }
    var TileInfo: TileInfoConstructor;
  }
}
