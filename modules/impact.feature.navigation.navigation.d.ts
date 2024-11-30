// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface NavDodgeType {
      deltas: number[];
      start: number;
    }
    interface NAV_DODGE_TYPE {
      NEUTRAL: ig.NavDodgeType;
      PASSIVE: ig.NavDodgeType;
      GET_AWAY: ig.NavDodgeType;
      AGGRESSIVE: ig.NavDodgeType;
    }
    var NAV_DODGE_TYPE: NAV_DODGE_TYPE;

    namespace NavPath {
      interface Options {
        posOffset: number;
      }
      interface Path {
        nodes: ig.NavPath.Node[];
        distance: number;
        multiLevel: number;
        jumpCount: number;
      }
      interface Node {
        node: ig.PathNodeConnect;
        connection: ig.PathNodeConnect;
      }
    }
    interface NavPath extends ig.Class {
      mapVersion: number;
      searcher: sc.ActorEntity;
      startRelativeVel: number;
      targetEntity: ig.Entity;
      targetPos: Vec3;
      retargetPos: Vec3;
      retargetNode?: number;
      maxDistance: number;
      precise: boolean;
      options?: ig.NavPath.Options;
      path: Nullable<ig.NavPath.Path>;
      pathIdx: number;
      pathLength: number;
      nextNodeData: { startPos: Vec2; endPos: Vec2; jump: boolean; height: number };
      overNodePass: boolean;
      pathComplete: boolean;
      triedNodePassChange: boolean;
      triedRandom: number;
      doBackUp: boolean;
      triedBackUp: number;
      avoidTarget: Vec2;
      avoidTarget2: Vec2;
      firstMovement: boolean;
      targetDir: Vec2;
      targetDist: number;
      failCount: number;
      wrongNodeTimer: number;
      lastSideWayDir: Vec2;

      toEntity(
        this: this,
        targetEntity: ig.Entity,
        maxDistance?: number,
        options?: ig.NavPath.Options,
        precise?: boolean,
      ): void;
      toPoint(this: this, pos: Vec2, maxDistance?: number, precise?: number): void;
      redoPathDeferred(this: this): void;
      sideways(
        this: this,
        actor: ig.ActorEntity,
        distance: number,
        variance: number,
        throwing: number,
        keepDir: number,
        forceMinDistance: number,
        forceMaxDistance: number,
        precise?: boolean,
      ): void;
      dodge(
        this: this,
        actor: ig.ActorEntity,
        minDist: number,
        dodgeType?: ig.NAV_DODGE_TYPE,
      ): void;
      moveRange(
        this: this,
        actor: ig.ActorEntity,
        b: number,
        e: number,
        f: number,
        throwing?: boolean,
        i?: boolean,
      ): boolean;
      runAway(this: this, actor: ig.ActorEntity, minDist: number, throwing?: boolean): void;
      runToFace(
        this: this,
        actor: ig.ActorEntity,
        faceRotate: number,
        minDist: number,
        maxDist: number,
        throing?: boolean,
      ): boolean;
      _moveCircle(
        this: this,
        targetNode: ig.MAP.Navigation,
        point1: Vec2,
        point2: Vec2,
        distance: number,
        throwing: boolean,
        minLength?: number,
        maxLength?: number,
        keepDirection?: boolean,
        precise?: boolean,
      ): boolean;
      getDistance(this: this): number;
      getJumpCount(this: this): number;
      isDestReachable(this: this): boolean;
      redoPath(this: this): void;
      redoPath(this: this, pathNode: ig.PathNode, pos: Vec3): void;
      interrupt(this: this): void;
      isCurrentNodeInvalid(this: this): boolean;
      moveEntity(this: this): boolean;
      avoidEntities(this: this): void;
      runPath(this: this): void;
      selectNextTargetPos(this: this): void;
    }
    interface NavPathConstructor extends ImpactClass<NavPath> {
      new (searcher: sc.ActorEntity): NavPath;
    }
    var NavPath: NavPathConstructor;

    enum NAV_BLOCKER_TYPE {
      REGULAR = 0,
      NO_BLOCK = 1,
      NO_TOP = 2,
    }

    interface NAV_CLOSE_POINT_SERCH {
      RANDOM(vec: Vec2): void;
      BEHIND(): void;
      FRONT(vec: Vec2): void;
      BEHIND_FACE(vec: Vec2, target: ig.ActorEntity): void;
      FRONT_FACE(vec: Vec2, target: ig.ActorEntity): void;
    }
    var NAV_CLOSE_POINT_SEARCH: NAV_CLOSE_POINT_SERCH;

    interface NavBlocker extends ig.Class {
      entity: ig.Entity;
      pos: Vec3;
      size: Vec3;
      blockType: ig.NAV_BLOCKER_TYPE;

      update(this: this, blockType?: ig.NAV_BLOCKER_TYPE): void;
      embedInNavMap(this: this): void;
      removeFromNavMap(this: this): void;
      remove(this: this): void;
    }
    interface NavBlockerConstructor extends ImpactClass<NavBlocker> {
      new (entity: ig.Entity, blockType?: ig.NAV_BLOCKER_TYPE): NavBlocker;
    }
    var NavBlocker: NavBlockerConstructor;
  }
}
