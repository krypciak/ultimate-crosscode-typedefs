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

        updateState(this: this, immediately?: boolean): void;
        varsChanged(this: this): void;
      }
      interface OLPlatformConstructor extends ImpactClass<OLPlatform> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.OLPlatform.Settings): OLPlatform;
      }
      var OLPlatform: OLPlatformConstructor;
    }
  }
}
