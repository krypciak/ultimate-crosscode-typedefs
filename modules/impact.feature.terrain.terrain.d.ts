// requires impact.base.loader
// requires game.config

export { }

declare global {
    namespace ig {
        interface Terrain extends ig.SingleLoadable {
            isFallTerrain(this: this, terrain: ig.TERRAIN): boolean
            getTerrain(this: this, coll: ig.CollEntry, precise?: boolean, andBelow?: boolean): ig.TERRAIN
        }
        interface TerrainConstructor extends ImpactClass<Terrain> {
            new(): Terrain
        }
        var Terrain: TerrainConstructor
        var terrain: Terrain
    }
}
