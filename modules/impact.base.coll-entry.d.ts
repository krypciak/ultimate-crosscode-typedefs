export {};

declare global {
  namespace ig {
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
        groundEntry: ig.CollEntry | false;
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
    }
    interface CollEntry extends ig.Class {
      entity: ig.Entity;
      _active: boolean;
      _inCollisionMap: boolean;
      _killed: boolean;
      type: COLLTYPE;
      shape: ig.COLLSHAPE;
      heightShape: ig.COLL_HEIGHT_SHAPE;
      size: Vec3;
      alwaysRender: boolean;
      ignoreCollision: boolean;
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
      totalBlockTimer: number;
      partlyBlockTimer: number;
      updated: number;
      _collData: ig.CollEntry.Data;

      setType(this: this, type: ig.COLLTYPE): void;
      setSize(this: this, x: number, y: number, z: number): void;
      setPadding(this: this, x: number, y: number): void;
      getCenter(this: this, target?: Vec2): Vec2;

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
      getOverlapCenterCords(this: this, v1: Vec3, output?: Vec3): Vec3;
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
