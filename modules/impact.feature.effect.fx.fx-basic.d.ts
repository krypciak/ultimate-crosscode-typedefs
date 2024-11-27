// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace EFFECT_ENTRY {
      namespace PLAY_ANIM_RANGE {
        interface Settings extends ig.EffectStepBase.Settings {
          radius?: number;
          useTargetAngle?: boolean;
          numParticles?: number;
          duration?: number;
          offset?: Vec3;
          alongY?: boolean;
          moveZDist?: number;
          keySpline?: keyof typeof KEY_SPLINES;
        }
      }
      interface PLAY_ANIM_RANGE extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        offset: Vec2;
        radius: number;
        duration: number;
        numParticles: number;
        useTargetAngle: boolean;
        _wm: ig.EffectConfig;

        getDuration(this: this): number;
        start(this: this): { duration: number; particles: number };
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
        ): void;
      }
      interface PLAY_ANIM_RANGEConstructor extends ImpactClass<PLAY_ANIM_RANGE> {
        new (sheet: ig.EffectSheet, settings: ig.EffectStepBase.Settings): PLAY_ANIM_RANGE;
      }
      var PLAY_ANIM_RANGE: PLAY_ANIM_RANGEConstructor;
    }
  }
}
