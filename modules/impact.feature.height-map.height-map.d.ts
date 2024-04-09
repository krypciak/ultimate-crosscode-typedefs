// requires impact.base.map
// requires impact.base.game
// requires impact.base.image
// requires game.config

export {};

declare global {
  namespace ig {
    namespace MAP {
      interface HeightMap extends ig.Map {
        _wm: ig.Config;
        noMerge: boolean;

        draw(this: this): void;
        drawTiled(this: this): void;
      }
      interface HeightMapConstructor extends ImpactClass<HeightMap> {
        levelKey: 'heightMap';
        new (data: sc.MapModel.MapLayer, zHeight: number): HeightMap;
      }
      
    }
  }
}
