// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    enum BOX_PARTICLE_SIDE {
      ALL = 15,
      NORTH = 1,
      EAST = 2,
      SOUTH = 4,
      WEST = 8,
      NO_NORTH = 14,
      NO_EAST = 13,
      NO_SOUTH = 11,
      NO_WEST = 7,
    }
    namespace EFFECT_ENTRY {
      namespace PARTICLE_BOX {
        interface Settings extends ig.EffectStepBase.Settings {
          boxSide: keyof typeof ig.BOX_PARTICLE_SIDE;
          padding: Vec2;
          collision: boolean;
          numParticles?: number;
          random?: number;
          flipRightParticles?: boolean;
          minSpeed?: number;
          maxSpeed?: number;
          moveZ?: number;
          moveZVariance?: number;
        }
      }
      interface PARTICLE_BOX extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        boxSide: ig.BOX_PARTICLE_SIDE;
        numParticles?: number;
        flipRightParticles: boolean;
        minSpeed: number;
        maxSpeed: number;
        collision: boolean;
        random: number;
        moveZ: number;
        moveZVariance: number;
        _wm: ig.EffectConfig;

        spawnBoxLine(
          this: this,
          entity: ig.ENTITY.Effect,
          targetColl: ig.CollEntry,
          config: { x: number; y: number; w: number; h: number; flag: number },
        ): void;
      }
      interface PARTICLE_BOX_CONSTRUCTOR extends ImpactClass<PARTICLE_BOX> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.PARTICLE_BOX.Settings): PARTICLE_BOX;
      }
      var PARTICLE_BOX: PARTICLE_BOX_CONSTRUCTOR;
    }
  }
}
