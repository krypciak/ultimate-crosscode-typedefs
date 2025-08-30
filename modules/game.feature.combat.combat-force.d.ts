// requires impact.base.entity

export {};

declare global {
  namespace sc {
    interface CombatForce
      extends ig.Class,
        sc.GetCombatant,
        sc.GetCombatantRoot,
        sc.Combat.ActionAttached {
      combatant: sc.BasicCombatant;
      combatantRoot: ig.ENTITY.Combatant;

      update(this: this): boolean;
      isRepeating(this: this): boolean;
      onEnd(this: this): void;
    }
    interface CombatForceConstructor extends ImpactClass<CombatForce> {
      new (combatant: sc.BasicCombatant): CombatForce;
    }
    var CombatForce: CombatForceConstructor;

    interface CircleHitForce extends sc.CombatForce, ig.BallLike {
      getHitDir(this: this, entity: ig.Entity, dest: Vec2): Vec2;
    }
    interface CircleHitForceConstructor extends ImpactClass<CombatForce> {}
    var CircleHitForce: CircleHitForceConstructor;

    enum DIRECT_HIT_DIR {
      TOWARD = 1,
      AWAY = 2,
    }

    interface DirectHitForce extends sc.CombatForce {
      getHitDir(this: this, entity: ig.Entity, dest: Vec2): Vec2;
    }
    interface DirectHitForceConstructor extends ImpactClass<CombatForce> {}
    var DirectHitForce: DirectHitForceConstructor;

    enum PUSH_PULL_STRENGTH {
      EASY_ESCAPE = 40,
      WALK_ESCAPE = 100,
      RUN_ESCAPE = 130,
      DASH_ESCAPE = 190,
      NO_ESCAPE = 300,
      SERIOUSLY_GO_AWAY = 500,
    }

    namespace PROXY_GRID_FLOW {
      type Func = (
        weight: number,
        width: number,
        height: number,
        width1: number,
        height1: number,
      ) => number;
    }
    interface PROXY_GRID_FLOW {
      SQUARE: sc.PROXY_GRID_FLOW.Func;
      CIRCLE: sc.PROXY_GRID_FLOW.Func;
    }
    var PROXY_GRID_FLOW: PROXY_GRID_FLOW;

    enum SPAWN_START_DIST_COLLIDE {
      NONE = 0,
      CLOSER = 1,
      DROP = 2,
      ALT_DIR = 3,
    }

    namespace SpawnHelper {
      interface Settings {
        align?: keyof typeof ig.ENTITY_ALIGN;
        offset?: Vec3;
        centralAngle?: number;
        startAngle?: number;
        startDist?: number;
        startDistAdd?: number;
        angleVary?: number;
        count?: number;
        duration?: ig.Event.NumberExpression;
        clockwise?: boolean;
        flipLeftFace?: boolean;
        random?: boolean;
        dir?: Vec2;
        aimAtTarget?: boolean;
        yScale?: number;
        offsetArea?: Vec2;
        uniformDir?: number;
        delay?: number;
        repeat?: boolean;
        maxGroundDistance?: number;
        terrainFilter?: (keyof typeof ig.TERRAIN)[];
        limitRangeOnColl?: number;
      }
      type Callback = (
        x: number,
        y: number,
        z: number,
        vec2: Vec2,
        data: sc.SpawnHelper.Data,
      ) => void;

      interface Data {
        spawned: number;
        count: number;
      }
    }
    interface SpawnHelper extends ig.Class {
      align: ig.ENTITY_ALIGN;
      offset?: Vec3;
      centralAngle: number;
      startAngle: number;
      angleVary: number;
      count: number;
      duration: ig.Event.NumberExpression;
      clockwise: boolean;
      random: boolean;
      flipLeftFace: number;
      dir?: Vec2;
      offsetArea: Vec2;
      circularArea: boolean;
      callback: sc.SpawnHelper.Callback;
      maxGroundDistance: number;
      uniformDir: number;
      delay: number;
      yScale: number;
      repeat: boolean;
      posEntity?: ig.Entity;
      limitRangeOnColl: number;
      terrainFilter?: ig.TERRAIN[];

      initData(this: this, data: sc.SpawnHelper.Data): number;
      spawn(
        this: this,
        entity: ig.ActorEntity,
        time: number,
        data: sc.SpawnHelper.Data,
        width: number,
        height: number,
        z: number,
      ): number;
      _limitRange(
        this: this,
        entity: ig.ActorEntity,
        vec: Vec2,
        x: number,
        y: number,
        z: number,
      ): void;
      _getPos(this: this, entity: ig.ActorEntity, offsetY: number): Vec3;
    }
    interface SpawnHelperConstructor extends ImpactClass<SpawnHelper> {
      new (
        settings: sc.SpawnHelper.Settings,
        callback: sc.SpawnHelper.Callback,
        posEntity?: ig.Entity,
      ): SpawnHelper;
    }
    var SpawnHelper: SpawnHelperConstructor;
  }
}
