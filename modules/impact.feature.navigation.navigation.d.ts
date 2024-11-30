// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface NavPath extends ig.Class {
      mapVersion: number;
      searcher: unknown;
      startRelativeVel: number;
      targetEntity: ig.Entity;
      targetPos: Vec3;
      retargetPos: Vec3;
      retargetNode: unknown;
      maxDistance: number;
      precise: boolean;
      options: unknown;
      path: unknown;
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
    }
    interface NavPathConstructor extends ImpactClass<NavPath> {
      new (searcher: unknown): NavPath;
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
