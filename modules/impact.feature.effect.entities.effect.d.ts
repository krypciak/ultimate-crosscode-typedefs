// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace ig {
    enum EFFECT_STATE {
      RUNNING = 0,
      POST_LOOP = 1,
      ENDED = 2,
    }
    namespace ENTITY {
      namespace Effect {
        interface Settings extends ig.Entity.Settings, ig.EffectSheet.SpawnSettings {
          effect?: Nullable<ig.Effect>;
          target?: Nullable<ig.Entity>;
        }
      }
      interface Effect extends ig.Entity {
        offset: Vec3;
        rotOffset?: Nullable<Vec2>;
        angle: number;
        flipX: boolean;
        duration: number;
        state: ig.EFFECT_STATE;
        effect?: Nullable<ig.Effect>;
        target?: Nullable<ig.Entity>;
        spriteFilter: number[];
        timelineIndex: number;
        timer: number;
        looped: boolean;
        particles: unknown[];
        runners: (ig.EffectParticleRunner | ig.EffectTimeRunner)[];
        align: ig.ENTITY_ALIGN;
        target2: {
          point?: Nullable<Vec3>;
          entity?: Nullable<ig.Entity>;
          align?: Nullable<ig.ENTITY_ALIGN>;
          offset: Vec3;
        };
        attachGroup: string;
        callback: Nullable<ig.EffectSheet.EventCallback>;
        rotateFace: number;
        flipLeftFace: boolean;
        noMultiGroup: boolean;

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
