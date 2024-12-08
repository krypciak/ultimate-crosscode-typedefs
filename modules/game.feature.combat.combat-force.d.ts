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

    interface CircleHitForce extends sc.CombatForce {
      getHitDir(this: this, entity: ig.Entity, dest: Vec2): Vec2;
    }
    interface CircleHitForceConstructor extends ImpactClass<CombatForce> {}
    var CircleHitForce: CircleHitForceConstructor;

    interface DirectHitForce extends sc.CombatForce {
      getHitDir(this: this, entity: ig.Entity, dest: Vec2): Vec2;
    }
    interface DirectHitForceConstructor extends ImpactClass<CombatForce> {}
    var DirectHitForce: DirectHitForceConstructor;

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
