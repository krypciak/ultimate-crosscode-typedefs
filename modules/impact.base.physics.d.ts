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
        forcePushEntries: ig.CollEntry[];
        forcePushDirs: Vec2[];
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
      groundDangerCallback: Nullable<(coll: ig.CollEntry) => boolean>;
      groundEntityDangerCallback: Nullable<(coll: ig.CollEntry) => boolean>;

      mapCleared(this: this): void;
      mapLoaded(this: this): void;
      update(this: this): void;
      updateCollEntry(this: this, coll: ig.CollEntry, collisionList: ig.CollEntry[]): void;
      getEntitiesInRectangle(
        this: this,
        x: number,
        y: number,
        z: number,
        width: number,
        height: number,
        zHeight: number,
        collType?: ig.COLLTYPE,
        entryException?: Nullable<ig.CollEntry>,
        forceSameZ?: boolean,
      ): ig.Entity[];
      getEntitiesInCircle(
        this: this,
        center: Vec3,
        radius: number,
        yScale: number,
        zHeight: number,
        dir?: Vec2,
        startAngle?: number,
        endAngle?: number,
        exception?: ig.Entity,
        moreExceptions?: ig.Entity[],
        rectangular?: boolean,
        checkCollision?: boolean,
      ): ig.Entity[];
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
      addToUpdateList(this: this, coll: ig.CollEntry): void;
      removeFromUpdateList(this: this, coll: ig.CollEntry): void;
      addToCollMap(this: this, coll: ig.CollEntry): void;
      removeFromCollMap(this: this, coll: ig.CollEntry): void;
      moveEntity(this: this, coll: ig.CollEntry, collisionList: ig.CollEntry[]): void;
      moveEntityXY(
        this: this,
        traceResult: ig.Physics.TraceResult,
        coll: ig.CollEntry,
        frameVel: Vec2,
        collisionList?: ig.CollEntry[],
        noCollDataSet?: boolean,
      ): boolean;
      isGroundDanger(this: this, coll: ig.CollEntry): boolean;
      isGroundEntityDanger(this: this, coll: ig.CollEntry): boolean;
      moveEntityZ(this: this, coll: ig.CollEntry, frameVel: Vec2, prevOnGround: boolean): void;
      forcePushEntry(
        this: this,
        coll1: ig.CollEntry,
        coll2: ig.CollEntry,
        dir: Vec2,
        collisionList?: ig.CollEntry[],
      ): void;
      updateGroundEntity(
        this: this,
        coll: ig.CollEntry,
        pushOffset: Vec2,
        dir: Vec2,
        zVel: number,
        forceSetGroundEntry?: boolean,
      ): void;
      updateBaseZPos(
        this: this,
        coll: ig.CollEntry,
        x: number,
        y: number,
        collData: ig.CollEntry.Data,
      ): ig.CollEntry | undefined;
      getBaseZPos(
        this: this,
        x: number,
        y: number,
        z: number,
        width: number,
        height: number,
      ): number;
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
