// requires impact.base.entity
// requires impact.feature.base.entities.object-layer-view

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace OLPlatform {
        interface Settings {}
        interface State {
          condition: ig.VarCondition;
          pos: Vec2;
          maps: [ig.ChunkedMap];
          spline: KeySpline;
        }
      }
      interface OLPlatform extends ig.Entity {
        terrain: ig.TERRAIN;
        maps: [ig.ChunkedMap];
        startPos: Vec3;
        states: ig.ENTITY.OLPlatform.State[];
        speed: number;
        staticSpeed: boolean;
        squishRespawn: boolean;
        usePositionalSound: boolean;
        sound: { move: ig.Sound };
        _lastPos: Vec3;
        timer: ig.WeightTimer;
        currentState: ig.ENTITY.OLPlatform.State;
        spritesInitialized: boolean;
        navBlocker: ig.NavBlocker;
        quickNavUpdate: boolean;

        show(this: this): void /* this also has an "a" argument but it does nothing */;
        onKill(this: this): void;
        updateState(this: this, immediately?: boolean): void;
        update(this: this): void;
        updateSprites(this: this): void;
        varsChanged(this: this): void;
      }
      interface OLPlatformConstructor extends ImpactClass<OLPlatform> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.OLPlatform.Settings): OLPlatform;
      }
      var OLPlatform: OLPlatformConstructor;
    }
  }
}
