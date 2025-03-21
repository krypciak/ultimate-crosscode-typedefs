// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace Effect {
        interface Settings extends ig.Entity.Settings {}
      }
      interface Effect extends ig.Entity {
        target: ig.Entity;
        spriteFilter: number[];

        setIgnoreSlowdown(this: this): void;
        stop(this: this): void;
        isDone(this: this): boolean;
        spawnParticle<E extends ig.Entity, S extends ig.Entity.Settings>(
          this: this,
          entity: string | (new (x: number, y: number, z: number, settings: S) => E),
          offset?: Nullable<NullablePartial<Vec3>>,
          settings?: Nullable<S>,
          forceTargetPos?: Nullable<boolean>,
        ): void;
      }
      interface EffectConstructor extends ImpactClass<Effect> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.Effect.Settings): Effect;
      }
      var Effect: EffectConstructor;
    }
    namespace EffectTools {
      function clearEffects(entity: ig.Entity, withTheSameGroup?: ig.ENTITY.Effect): void;
      function getFirstEffect(
        entity: ig.Entity,
        withTheSameGroup?: ig.ENTITY.Effect,
      ): Nullable<ig.ENTITY.Effect>;
    }
  }
}
