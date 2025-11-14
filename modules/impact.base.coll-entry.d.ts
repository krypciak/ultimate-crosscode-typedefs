export {};

declare global {
  namespace ig {
    enum COLL_UPDATE_TYPE {
      STATIC = 0,
      ON_SCREEN = 1,
      DYNAMIC = 2,
    }
    enum COLL_HEIGHT_SHAPE {
      NONE = 0,
      NORTH_UP = 1,
      EAST_UP = 2,
      WEST_UP = 3,
      SOUTH_UP = 4,
    }
    enum COLL_SHADOW_TYPE {
      DEFAULT = 0,
      STATIC_SIZE = 1,
      RECTANGULAR = 2,
    }
    enum COLL_GROUND_CONNECT {
      LOOSE = 0,
      FIXED = 1,
      IN_EARTH = 2,
      STRONG_FLIGHT = 3,
    }

    namespace CollEntry {
      interface Shadow {
        type: ig.COLL_SHADOW_TYPE;
        size: number;
        scaleY: number;
        offset: Vec2;
      }
      interface HoleInfo {
        mapRes: number;
        mapDir: Vec2;
        entryDir: Vec2;
        entryZ: number;
        entryDist: number;
        entryDanger: boolean;
      }
      interface Data {
        collided: boolean;
        frameVel: Vec3;
        blockDir: Vec2;
        slipped: boolean;
        zBaseUncertain: boolean;
        zPush: boolean;
        skipPhysics: boolean;
        forceMoveFrameVel: boolean;
        groundEntry: Nullable<ig.CollEntry | false>;
        groundEntryOffset: Vec2;
        overlapEntryFactor: number;
        noSlipping: boolean;
        holeInfo: HoleInfo;
      }
      interface Float {
        height: number;
        variance: number;
        maxSpeed: number;
        accel: number;
      }
      interface Friction {
        ground: number;
        air: number;
        terrain: number;
        ignoreTerrain: boolean;
      }
      interface Time {
        factor: number;
        logicFactor: number;
        moveXYFactor: number;
        globalStatic: boolean;
        animStatic: boolean;
        parent: Nullable<ig.CollEntry>;
        parentAnimToGlobal: boolean;
      }
      interface Dot extends Vec2 {
        dot: number;
      }
    }
    interface CollEntry extends ig.Class {
      entity: ig.Entity;
      _active: boolean;
      _inCollisionMap: boolean;
      _killed: boolean;
      type: COLLTYPE;
      updateType: ig.COLL_UPDATE_TYPE;
      shape: ig.COLLSHAPE;
      heightShape: ig.COLL_HEIGHT_SHAPE;
      size: Vec3;
      alwaysRender: boolean;
      ignoreCollision: boolean;
      groundConnect: ig.COLL_GROUND_CONNECT;
      groundSlip: boolean;
      edgeSlipInward: boolean;
      weight: number;
      friction: ig.CollEntry.Friction;
      accelSpeed: number;
      maxVel: number;
      maxZVel: number;
      relativeVel: number;
      bounciness: number;
      zBounciness: number;
      minBounceBelocity: number;
      zGravityFactor: number;
      float: ig.CollEntry.Float;
      time: ig.CollEntry.Time;
      pos: Vec3;
      level: string;
      baseZPos: number;
      shadow: CollEntry.Shadow;
      vel: Vec3;
      pushVel: Vec2;
      accelDir: Vec2;
      parentColl?: ig.CollEntry;
      parentGroup: Nullable<string>;
      subColls: ig.CollEntry[];
      totalBlockTimer: number;
      partlyBlockTimer: number;
      updated: number;
      _collData: ig.CollEntry.Data;
      _collisionList: ig.CollEntry[];
      _collisionListData: ig.CollEntry.Dot[];

      initCollData(this: this): boolean;
      reset(this: this): void;
      setPos(this: this, x?: number, y?: number, z?: number, moveDelta?: Nullable<boolean>): void;
      setType(this: this, type: ig.COLLTYPE): void;
      setUpdateType(this: this, type: ig.COLL_UPDATE_TYPE): void;
      setSize(this: this, x: number, y: number, z: number): void;
      setPadding(this: this, x: number, y: number): void;
      getCenter(this: this, target?: Vec2): Vec2;
      addSubCollEntry(this: this, coll: ig.CollEntry): void;
      getTick(this: this, animFactor: boolean, noTimeLogicFactor?: boolean): number;
      update(this: this): void;
      contains(this: this, x: number, y: number, subtractZ?: boolean): boolean;
      intersectsWith(
        this: this,
        x1: number,
        y1: number,
        z1: number,
        width: number,
        height: number,
        zHeight: number,
        noIgnoreCollision?: boolean,
        shape?: Nullable<ig.COLLSHAPE>,
        forceSameZ?: boolean,
      ): boolean;
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
      getOverlapCenterCoords(this: this, v1: Vec3, output?: Vec3): Vec3;
      setGroundEntry(this: this, groundEntry: Nullable<ig.CollEntry | false>): void;
      getOverlapHeight(
        this: this,
        x: number,
        y: number,
        width: number,
        height: number,
        ignoreExtremeSlope?: boolean,
      ): number;
      handleMovementTrace(this: this, data: ig.CollEntry.Data): void;
    }
    interface CollEntryConstructor extends ImpactClass<CollEntry> {
      new (entity: ig.Entity): CollEntry;
    }
    var CollEntry: CollEntryConstructor;

    interface CollTools {
      isInScreen(entity: ig.Entity, x?: number, y?: number): boolean;
      getDistVec2(coll1: CollEntry, coll2: CollEntry, dest: Vec2): Vec2;
      isPostMoveOverHole(coll: ig.CollEntry, boo: boolean): boolean;
      hasWallCollide(coll: ig.CollEntry, maxAngle: number): boolean;
    }
    var CollTools: CollTools;
  }
}
