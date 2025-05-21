// requires impact.feature.env-particles.env-particles
// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SET_ENV_PARTICLES {
        interface Settings {
          particleType: keyof typeof ig.ENV_PARTICLES;
          quantity?: ig.Event.NumberExpression;
          immediately?: boolean;
        }
      }
      interface SET_ENV_PARTICLES extends ig.EventStepBase {
        spawner: ig.EnvParticleSpawner;
        quantity?: ig.Event.NumberExpression;
        _wm: ig.Config;
        immediately: boolean;

        clearCached(this: this): void;
      }
      interface SET_ENV_PARTICLES_CONSTRUCTOR extends ImpactClass<SET_ENV_PARTICLES> {
        new (settings: ig.EVENT_STEP.SET_ENV_PARTICLES.Settings): SET_ENV_PARTICLES;
      }
      var SET_ENV_PARTICLES: SET_ENV_PARTICLES_CONSTRUCTOR;

      namespace CLEAR_ENV_PARTICLES {
        interface Settings {
          particleType: keyof typeof ig.ENV_PARTICLES;
          immediately?: boolean;
        }
      }
      interface CLEAR_ENV_PARTICLES extends ig.EventStepBase {
        spawner: ig.EnvParticleSpawner;
        _wm: ig.Config;
        immediately: boolean;

        clearCached(this: this): void;
      }
      interface CLEAR_ENV_PARTICLES_CONSTRUCTOR extends ImpactClass<CLEAR_ENV_PARTICLES> {
        new (settings: ig.EVENT_STEP.CLEAR_ENV_PARTICLES.Settings): CLEAR_ENV_PARTICLES;
      }
      var CLEAR_ENV_PARTICLES: CLEAR_ENV_PARTICLES_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace SET_ENV_PARTICLES {
        interface Settings {
          particleType: keyof typeof ig.ENV_PARTICLES;
          quantity?: ig.Event.NumberExpression;
          immediately?: boolean;
        }
      }
      interface SET_ENV_PARTICLES extends ig.ActionStepBase {
        spawner: ig.EnvParticleSpawner;
        quantity?: ig.Event.NumberExpression;
        _wm: ig.Config;
        immediately: boolean;

        clearCached(this: this): void;
      }
      interface SET_ENV_PARTICLES_CONSTRUCTOR extends ImpactClass<SET_ENV_PARTICLES> {
        new (settings: ig.ACTION_STEP.SET_ENV_PARTICLES.Settings): SET_ENV_PARTICLES;
      }
      var SET_ENV_PARTICLES: SET_ENV_PARTICLES_CONSTRUCTOR;

      namespace CLEAR_ENV_PARTICLES {
        interface Settings {
          particleType: keyof typeof ig.ENV_PARTICLES;
          immediately?: boolean;
        }
      }
      interface CLEAR_ENV_PARTICLES extends ig.ActionStepBase {
        spawner: ig.EnvParticleSpawner;
        _wm: ig.Config;
        immediately: boolean;

        clearCached(this: this): void;
      }
      interface CLEAR_ENV_PARTICLES_CONSTRUCTOR extends ImpactClass<CLEAR_ENV_PARTICLES> {
        new (settings: ig.ACTION_STEP.CLEAR_ENV_PARTICLES.Settings): CLEAR_ENV_PARTICLES;
      }
      var CLEAR_ENV_PARTICLES: CLEAR_ENV_PARTICLES_CONSTRUCTOR;
    }
  }
}
