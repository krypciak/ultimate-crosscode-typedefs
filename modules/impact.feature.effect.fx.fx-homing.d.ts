// requires impact.feature.effect.effect-sheet
// requires impact.feature.effect.entities.effect-particle

export {};

declare global {
  namespace sc {
    enum HOMING_ROTATE_TYPE {
      NONE = 0,
      MOVE_DIR = 1,
      AT_TARGET = 2,
    }
  }
  namespace ig {
    namespace EFFECT_ENTRY {
      namespace SHOOT_HOMING_PARTICLE {
        interface Settings extends ig.EffectStepBase.Settings {
          duration: number;
          numParticles: number;
          flyType: keyof typeof ig.FX_HOMING_FLY_TYPE;
          inverse: boolean;
          offsetRadius: ig.Event.NumberVary;
          offRadiusZScale?: number;
          offsetAngle: ig.Event.NumberVary;
          target1Vary?: number;
          target2Vary?: number;
          phaseDurations: number[];
          rotateMoveDir: keyof typeof sc.HOMING_ROTATE_TYPE;
        }
        type Data =
          | undefined
          | {
              duration: number;
              particles: number;
            };
      }
      interface SHOOT_HOMING_PARTICLE extends ig.EffectStepBase {
        _wm: ig.EffectConfig;
        particleData: ig.ParticleData;
        duration: number;
        numParticles: number;
        flyType: keyof typeof ig.FX_HOMING_FLY_TYPE;
        inverse: boolean;
        offsetRadius: ig.Event.NumberVary;
        offRadiusZScale: number;
        offsetAngle: ig.Event.NumberVary;
        phaseDurations: number[];
        rotateMoveDir: sc.HOMING_ROTATE_TYPE;
        target1Vary?: number;
        target2Vary?: number;

        start(
          this: this,
          entity: ig.ENTITY.Effect,
        ): ig.EFFECT_ENTRY.SHOOT_HOMING_PARTICLE.Data;
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
        ): void;
        _spawnParticles(
          this: this,
          effect: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
        ): void;
      }
      interface SHOOT_HOMING_PARTICLE_CONSTRUCTOR extends ImpactClass<SHOOT_HOMING_PARTICLE> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.SHOOT_HOMING_PARTICLE.Settings,
        ): SHOOT_HOMING_PARTICLE;
      }
      var SHOOT_HOMING_PARTICLE: SHOOT_HOMING_PARTICLE_CONSTRUCTOR;
    }
  }
}
