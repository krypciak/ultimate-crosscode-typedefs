// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface Clouds extends ig.Class, ig.Light.ShadowProvider {
      gfx: ig.Image;
      currentClouds: [];
      density: number;
      vel: Vec2;
      cloudRange: Vec2;
      timer: number;
      maxTime: number;
      alpha: number;

      clearClouds(this: this, immediately?: boolean): void;
      setClouds(this: this, density: number, vel: Vec2, alpha: number, immediately?: boolean): void;
      spawnCloudLine(this: this, immediately?: boolean): void;
      addCloud(this: this, x: number, y: number, timer?: number): void;
      moveClouds(
        this: this,
        x: number,
        y: number,
        startIndex: number,
        dontIncreaseTimer?: boolean,
      ): void;
      update(this: this): void;
    }
    interface CloudsConstructor extends ImpactClass<Clouds> {
      new (): Clouds;
    }
    var Clouds: CloudsConstructor;
  }
}
