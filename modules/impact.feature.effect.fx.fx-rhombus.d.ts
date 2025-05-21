// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace EFFECT_ENTRY {
      namespace PARTICLE_RHOMBUS {
        interface Settings extends ig.EffectStepBase.Settings {
          numParticles?: number;
          duration: number;
          scale?: number;
          radiusSub?: number;
          moveDistance: number;
          moveVariance?: number;
          randomDirFlip?: boolean;
          zRange?: number;
          keySpline: unknown;
          alongZ?: boolean;
          offset?: Vec3;
        }
        type Data =
          | undefined
          | {
              duration: number;
              particles: number;
              radius: number;
              rhombusLength: number;
            };
      }
      interface PARTICLE_RHOMBUS extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        duration: number;
        numParticles: number;
        scale: number;
        radiusSub: number;
        moveDistance: number;
        moveVariance: number;
        randomDirFlip: boolean;
        keySpline: KeySpline;
        alongZ: unknown;
        zRange: number;
        _wm: ig.EffectConfig;

        start(this: this, entity: ig.ENTITY.Effect): ig.EFFECT_ENTRY.PARTICLE_RHOMBUS.Data;
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
          data: ig.EFFECT_ENTRY.PARTICLE_RHOMBUS.Data,
        ): void;
      }
      interface PARTICLE_RHOMBUS_CONSTRUCTOR extends ImpactClass<PARTICLE_RHOMBUS> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.PARTICLE_RHOMBUS.Settings,
        ): PARTICLE_RHOMBUS;
      }
      var PARTICLE_RHOMBUS: PARTICLE_RHOMBUS_CONSTRUCTOR;
    }
  }
}
