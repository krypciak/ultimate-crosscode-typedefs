// requires impact.base.map
// requires game.config

export {};

declare global {
  namespace ig {
    namespace MAP {
      interface Collision extends ig.Map {
        _wm: ig.Config;

        prepare(this: this, neighbourCollisionLayer?: ig.MAP.Collision, yDiff?: number): void;
        isTileGround(this: this, entityX: number, entityY: number): boolean;
        isTileAreaBlocked(
          this: this,
          entityX: number,
          entityY: number,
          width: number,
          height: number,
        ): boolean;
        isGridHole(this: this, x: number, y: number): boolean;
        isOverHole(
          this: this,
          entityX: number,
          entityY: number,
          width: number,
          height: number,
          dirToHole?: Vec2,
        ): boolean;
        trace(
          this: this,
          res: ig.Physics.TraceResult,
          x: number,
          y: number,
          vx: number,
          vy: number,
          objectWidth: number,
          objectHeight: number,
          ignoreHoles: boolean,
          groundBlocks: boolean,
        ): boolean;
      }
      interface CollisionConstructor extends ImpactClass<Collision> {
        new (data: sc.MapModel.MapLayer, zHeight: number): Collision;

        levelKey: 'collision';
        staticNoCollision: ig.MAP.Collision;
      }
    }
    var COLLISION: {
      EPS: number;
      SLIP_PIXELS: number;
      HEIGHT_TOLERATE: number;
    };
  }
}
