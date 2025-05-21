// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace EFFECT_ENTRY {
      namespace MOVE_OFFSET {
        interface Settings {
          start: Vec3;
          end: Vec3;
          relative: boolean;
          duration: number;
          keySpline: unknown;
        }
        type Data =
          | undefined
          | {
              duration: number;
            };
      }
      interface MOVE_OFFSET extends ig.EffectStepBase {
        _wm: ig.EffectConfig;
        startValue: Vec3;
        endValue: Vec3;
        relative: boolean;
        duration: number;
        keySpline: KeySpline;

        start(this: this, entity: ig.ENTITY.Effect): ig.EFFECT_ENTRY.MOVE_OFFSET.Data;
        finish(this: this): void;
        setEntityOffset(this: this, a: unknown, b: unknown, d: unknown): void;
      }
      interface MOVE_OFFSET_CONSTRUCTOR extends ImpactClass<MOVE_OFFSET> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.MOVE_OFFSET.Settings): MOVE_OFFSET;
      }
      var MOVE_OFFSET: MOVE_OFFSET_CONSTRUCTOR;

      namespace WIPE {
        interface Settings {
          dir: keyof typeof ig.WIPE_DIRECTION;
          startValue: number;
          endValue: number;
          duration: number;
          setOnlyOneSide: boolean;
        }
        type Data =
          | undefined
          | {
              duration: number;
              left: number;
              right: number;
              top: number;
              bottom: number;
            };
      }
      interface WIPE extends ig.EffectStepBase {
        dir: ig.WIPE_DIRECTION;
        startValue: number;
        endValue: number;
        duration: number;
        _wm: ig.EffectConfig;
        setOnlyOneSide: boolean;

        finish(this: this, entity: ig.ENTITY.Effect): void;
        setEntityClipping(
          this: this,
          a: unknown,
          b: unknown,
          d: unknown,
          g: unknown,
          h: unknown,
          i: unknown,
          j: unknown,
        ): void;
      }
      interface WIPE_CONSTRUCTOR extends ImpactClass<WIPE> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.WIPE.Settings): WIPE;
      }
      var WIPE: WIPE_CONSTRUCTOR;

      namespace WIPE_PARTICLES {
        interface Settings extends ig.EffectStepBase.Settings {
          dir: keyof typeof ig.WIPE_DIRECTION;
          startValue: number;
          endValue: number;
          duration: number;
          numParticles: number;
          moveOffset?: Vec2;
          inverse?: boolean;
          xScale?: number;
          keySpline?: unknown;
          offset?: Vec3;
        }
        type Data =
          | undefined
          | {
              duration: number;
              particles: number;
              offX: number;
              offY: number;
              width: number;
              height: number;
            };
      }
      interface WIPE_PARTICLES extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        dir: ig.WIPE_DIRECTION;
        startValue: number;
        endValue: number;
        duration: number;
        numParticles: number;
        moveOffset: unknown;
        keySpline: KeySpline;
        inverse: boolean;
        _wm: ig.EffectConfig;
        xScale?: number;
        offset?: Vec3;

        start(this: this, entity: ig.ENTITY.Effect): ig.EFFECT_ENTRY.WIPE_PARTICLES.Data;
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
          data: ig.EFFECT_ENTRY.WIPE_PARTICLES.Data,
        ): void;
      }
      interface WIPE_PARTICLES_CONSTRUCTOR extends ImpactClass<WIPE_PARTICLES> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.WIPE_PARTICLES.Settings,
        ): WIPE_PARTICLES;
      }
      var WIPE_PARTICLES: WIPE_PARTICLES_CONSTRUCTOR;
    }
  }
}
