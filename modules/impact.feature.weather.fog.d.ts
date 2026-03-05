// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface Fog extends ig.Class {
      patterns: ig.ImagePatternSheet;
      vel: Vec2;
      scroll: Vec2;
      alpha: number;
      prevAlpha: number;
      timer: number;
      shadowOrder: number;
      zoom: number;

      clearFog(this: this, immediately?: boolean): void;
      setFog(
        this: this,
        alpha: number,
        vel: Nullable<Vec2>,
        zoom: number,
        immediately?: boolean,
      ): void;
      update(this: this): void;
      drawShadows(this: this): void;
    }
    interface FogConstructor extends ImpactClass<Fog> {
      new (): Fog;
    }
    var Fog: FogConstructor;
  }
}
