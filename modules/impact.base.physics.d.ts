// requires impact.base.entity
// requires impact.base.coll-entry

export {};

declare global {
  namespace ig {
    namespace Physics {
      interface TraceResult {
        dir: Vec2;
        dist: number;
        levelUp: boolean;
        forcePushEntries: unknown;
        forcePushDirs: unknown;
      }
      interface CollEntry {
        _inCollisionMap: boolean;
        type: ig.COLLTYPE;
        pos: Vec2;
        size: Vec2;
        padding: Vec2;
        parentColl: CollEntry;
        ignoreCollision: boolean;
        weight: number;
        entity: ig.Entity;
      }
    }
    interface Physics extends ig.Class {
      cellSize: number;
      collUpdateList: ig.CollEntry[];
      collOutOfScreenList: ig.CollEntry[];
      collEntryMap: ig.CollEntry[][][] & {
        width: number;
        height: number;
      };
      _updateCount: number;
      _trackEntityTouch: boolean;

      mapLoaded(this: this): void;
      update(this: this): void;
      updateCollEntry(this: this, coll: ig.CollEntry, array: unknown[]): void;
      initTraceResult(this: this, empty: { dir?: Vec2 }): ig.Physics.TraceResult;
      trace(
        this: this,
        res: ig.Physics.TraceResult,
        x: number,
        y: number,
        z: number,
        vx: number,
        vy: number,
        width: number,
        height: number,
        zHeight: number,
        collType: ig.COLLTYPE,
        entryException?: Nullable<ig.CollEntry>,
        collisionList?: Nullable<ig.CollEntry[]>,
        onGround?: boolean,
      ): boolean;
      addCollEntry(this: this, coll: ig.CollEntry): void;
      removeCollEntry(this: this, coll: ig.CollEntry): void;
      moveEntity(this: this, coll: ig.CollEntry, collisionList: ig.CollEntry[]): void;
      moveEntityZ(this: this, coll: ig.CollEntry, fVel: Vec2, prevOnGround: boolean): void;
      traceOnEntryMap(
        this: this,
        res: ig.Physics.TraceResult,
        x: number,
        y: number,
        z: number,
        vx: number,
        vy: number,
        width: number,
        height: number,
        zHeight: number,
        collType: ig.COLLTYPE,
        entryException?: Nullable<ig.CollEntry>,
        collisionList?: Nullable<ig.CollEntry[]>,
        onGround?: boolean,
      ): boolean;
      getGroundEntry(
        this: this,
        x: number,
        y: number,
        width: number,
        height: number,
        zHeight: number,
        currentZ: number,
        minZ: number,
        exception: ig.CollEntry,
        collData?: ig.CollEntry,
      ): ig.CollEntry | undefined;
    }
    interface PhysicsConstructor extends ImpactClass<Physics> {
      new (): Physics;
    }
    var Physics: PhysicsConstructor;
  }
}
