// requires impact.feature.light.light
// requires impact.base.map
// requires impact.base.game
// requires impact.base.image
// requires game.config

export {};

declare global {
  namespace ig.MAP {
    interface Light extends ig.ChunkedMap {
      lightmapGfx: ig.Image;
      _wm: ig.Config;
      lightSources: unknown;
      glowSources: unknown;
      noMerge: boolean;
      lightCanvas: unknown;
      shadowOrder: number;

      drawShadows(this: this): void;
      drawGlow(this: this): void;
      draw(this: this): void;
      drawTiled(this: this): void;
    }
    interface LightConstructor extends ImpactClass<Light> {
      new (data: sc.MapModel.MapLayer, zHeight: number): Light;
    }
  }
}
