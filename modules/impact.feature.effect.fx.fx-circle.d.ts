// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace EFFECT_ENTRY {
      namespace EffectStepCircleBase {
        interface Settings extends ig.EffectStepBase.Settings {
          rotOffset?: Vec3;
          numParticles: number;
          random?: boolean;
          uniformRandom?: number;
          centralAngle?: number;
          startAngle?: number;
          startDist: number;
          particleRotate?: boolean;
          flipRightParticles?: boolean;
          collision?: boolean;
          alongZ?: boolean;
          duration: number;
          clockwise?: boolean;
          useTargetAngle?: boolean;
          circleSpline?: keyof typeof KeySpline;
        }
        interface Data {
          duration: number;
          particles: number;
          keySpline: KeySpline;
        }
      }
      interface EffectStepCircleBase extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        offset: Vec3;
        duration: number;
        clockwise: boolean;
        rotOffset: null;
        numParticles: number;
        centralAngle: number;
        startAngle: number;
        random: boolean;
        uniformRandom: number;
        startDist: number;
        particleRotate: boolean;
        flipRightParticles: boolean;
        collision: boolean;
        alongZ: boolean;
        useTargetAngle: boolean;

        start(this: this, entity: ig.ENTITY.Effect): ig.EFFECT_ENTRY.EffectStepCircleBase.Data;
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
          data: ig.EFFECT_ENTRY.EffectStepCircleBase.Data,
        ): void;
        _spawnParticles(
          this: this,
          effect: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
        ): void;
        spawn(
          this: this,
          effect: ig.ENTITY.Effect,
          offset: Vec3,
          config: unknown,
          moveOffset: Vec2,
        ): void;
      }

      namespace OFFSET_PARTICLE_CIRCLE {
        interface Settings extends ig.EFFECT_ENTRY.EffectStepCircleBase.Settings {
          offset?: Vec3;
          moveDist: number;
          moveVariance?: number;
          moveDuration?: number;
          keySpline: keyof typeof KeySpline;
          moveRotate?: number;
          rotateWithTime?: boolean;
          inverse?: boolean;
          normalMoveDist?: number;
        }
      }
      interface OFFSET_PARTICLE_CIRCLE extends ig.EFFECT_ENTRY.EffectStepCircleBase {
        moveDist: number;
        moveVariance: number;
        keySpline: KeySpline;
        moveRotate: number;
        rotateWithTime: boolean;
        inverse: boolean;
        normalMoveDist: number;
        _wm: ig.EffectConfig;
        moveDuration: number;
      }
      interface OFFSET_PARTICLE_CIRCLE_CONSTRUCTOR extends ImpactClass<OFFSET_PARTICLE_CIRCLE> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.OFFSET_PARTICLE_CIRCLE.Settings,
        ): OFFSET_PARTICLE_CIRCLE;
      }
      var OFFSET_PARTICLE_CIRCLE: OFFSET_PARTICLE_CIRCLE_CONSTRUCTOR;

      interface EffectStepCircleSpawnVel {
        spawnVel(this: this, effect: ig.ENTITY.Effect, offset: Vec3, config: unknown): void;
      }

      namespace PARTICLE_CIRCLE {
        interface Settings extends ig.EFFECT_ENTRY.EffectStepCircleBase.Settings {
          offset?: Vec3;
          minSpeed?: number;
          maxSpeed?: number;
        }
      }
      interface PARTICLE_CIRCLE
        extends ig.EFFECT_ENTRY.EffectStepCircleBase,
          EffectStepCircleSpawnVel {
        minSpeed: number;
        maxSpeed: number;
        _wm: ig.EffectConfig;
      }
      interface PARTICLE_CIRCLE_CONSTRUCTOR extends ImpactClass<PARTICLE_CIRCLE> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.PARTICLE_CIRCLE.Settings,
        ): PARTICLE_CIRCLE;
      }
      var PARTICLE_CIRCLE: PARTICLE_CIRCLE_CONSTRUCTOR;

      namespace DEBRIS_CIRCLE {
        interface Settings extends ig.EFFECT_ENTRY.EffectStepCircleBase.Settings {
          offset?: Vec3;
          shadowSize?: number;
          minSpeed?: number;
          maxSpeed?: number;
          minZSpeed?: number;
          maxZSpeed?: number;
          zGravityFactor?: number;
          zBounciness?: number;
          minZVel?: number;
        }
      }
      interface DEBRIS_CIRCLE
        extends ig.EFFECT_ENTRY.EffectStepCircleBase,
          EffectStepCircleSpawnVel {
        minSpeed: number;
        maxSpeed: number;
        minZSpeed: number;
        maxZSpeed: number;
        zGravityFactor: Nullable<number>;
        zBounciness?: number;
        _wm: ig.EffectConfig;
        shadowSize: number;
      }
      interface DEBRIS_CIRCLE_CONSTRUCTOR extends ImpactClass<DEBRIS_CIRCLE> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.DEBRIS_CIRCLE.Settings,
        ): DEBRIS_CIRCLE;
      }
      var DEBRIS_CIRCLE: DEBRIS_CIRCLE_CONSTRUCTOR;
    }
  }
}
