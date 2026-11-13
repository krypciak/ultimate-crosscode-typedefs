// requires impact.base.loader
// requires game.config

export {};

declare global {
  namespace ig {
    namespace Terrain {
      type TilesetIds = Record<string, number | string>;
    }
    interface Terrain extends ig.SingleLoadable {
      cacheType: 'Terrain';
      idToName: Record<ig.TERRAIN, keyof typeof ig.TERRAIN>;
      nameToId: typeof ig.TERRAIN;
      tilesetIds: ig.Terrain.TilesetIds;
      dangerTerrains: ig.TERRAIN[];
      fallTerrain: ig.TERRAIN[];

      registerDangerTerrain(this: this, terrain: ig.TERRAIN, fallTerrain?: boolean): void;
      isDangerTerrain(this: this, terrain: ig.TERRAIN): boolean;
      isFallTerrain(this: this, terrain: ig.TERRAIN): boolean;
      getTerrain(this: this, coll: ig.CollEntry, precise?: boolean, andBelow?: boolean): ig.TERRAIN;
      getPointTerrain(
        this: this,
        x: number,
        y: number,
        z: number,
        sizeX: number,
        sizeY: number,
      ): ig.TERRAIN;
      getMapTerrain(
        this: this,
        x: number,
        y: number,
        level: number,
        sizeX: number,
        sizeY: number,
      ): ig.TERRAIN;
      _checkMaps(this: this, maps: ig.ChunkedMap[], entityX: number, entityY: number): number;
      getTerrainOfMapTile(this: this, map: ig.ChunkedMap, tile: number): ig.TERRAIN;
      onerror(this: this): void;
      onload(this: this, data: ig.Terrain.TilesetIds): void;
    }
    interface TerrainConstructor extends ImpactClass<Terrain> {
      new (): Terrain;
    }
    var Terrain: TerrainConstructor;
    var terrain: Terrain;
  }
}
