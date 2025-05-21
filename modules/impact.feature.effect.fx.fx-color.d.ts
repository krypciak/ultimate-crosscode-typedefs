// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace EFFECT_ENTRY {
      namespace FLASH_COLOR {
        interface Settings {
          color: string;
          alpha: number;
          duration: number;
          keepDuration: number;
          noLighter: boolean;
        }
        interface Data {
          duration: number;
          overlay: ig.ColorOverlay;
        }
      }
      interface FLASH_COLOR extends ig.EffectStepBase {
        color: string;
        alpha: number;
        keepDuration: number;
        duration: number;
        _wm: ig.EffectConfig;

        start(this: this, entity: ig.ENTITY.Effect): ig.EFFECT_ENTRY.FLASH_COLOR.Data;
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
          data: ig.EFFECT_ENTRY.FLASH_COLOR.Data,
        ): void;
        finish(this: this, entity: ig.ENTITY.Effect, data: ig.EFFECT_ENTRY.FLASH_COLOR.Data): void;
      }
      interface FLASH_COLOR_CONSTRUCTOR extends ImpactClass<FLASH_COLOR> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.FLASH_COLOR.Settings): FLASH_COLOR;
      }
      var FLASH_COLOR: FLASH_COLOR_CONSTRUCTOR;

      namespace BLINK_COLOR {
        interface Settings {
          color: string;
          maxAlpha: number;
          minAlpha: number;
          blinkDuration: number;
          blinkCount: number;
          noLighter: boolean;
        }
        interface Data {
          duration: number;
          overlay: ig.ColorOverlay;
        }
      }
      interface BLINK_COLOR extends ig.EffectStepBase {
        color: string;
        maxAlpha: number;
        minAlpha: number;
        blinkDuration: number;
        blinkCount: number;
        _wm: ig.EffectConfig;

        start(this: this, entity: ig.ENTITY.Effect): ig.EFFECT_ENTRY.BLINK_COLOR.Data;
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
          data: ig.EFFECT_ENTRY.BLINK_COLOR.Data,
        ): void;
        finish(this: this, entity: ig.ENTITY.Effect, data: ig.EFFECT_ENTRY.BLINK_COLOR.Data): void;
        cancel(
          this: this,
          entity: ig.ENTITY.Effect,
          timer: number,
          data: ig.EFFECT_ENTRY.BLINK_COLOR.Data,
        ): void;
      }
      interface BLINK_COLOR_CONSTRUCTOR extends ImpactClass<BLINK_COLOR> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.BLINK_COLOR.Settings): BLINK_COLOR;
      }
      var BLINK_COLOR: BLINK_COLOR_CONSTRUCTOR;

      namespace FADE_COLOR {
        interface Settings {
          color: string;
          alpha: number;
          fadeIn: number;
          fadeOut: number;
          duration: number;
          noLighter: boolean;
        }
        interface Data {
          duration: number;
          overlay: ig.ColorOverlay;
        }
      }
      interface FADE_COLOR extends ig.EffectStepBase {
        color: string;
        alpha: number;
        fadeIn: number;
        fadeOut: number;
        duration: number;
        _wm: ig.EffectConfig;

        start(this: this, entity: ig.ENTITY.Effect): ig.EFFECT_ENTRY.FADE_COLOR.Data;
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
          data: ig.EFFECT_ENTRY.FADE_COLOR.Data,
        ): void;
        finish(this: this, entity: ig.ENTITY.Effect, data: ig.EFFECT_ENTRY.FADE_COLOR.Data): void;
        cancel(
          this: this,
          entity: ig.ENTITY.Effect,
          timer: number,
          data: ig.EFFECT_ENTRY.FADE_COLOR.Data,
        ): void;
      }
      interface FADE_COLOR_CONSTRUCTOR extends ImpactClass<FADE_COLOR> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.FADE_COLOR.Settings): FADE_COLOR;
      }
      var FADE_COLOR: FADE_COLOR_CONSTRUCTOR;

      namespace CHANGE_ALPHA {
        interface Settings {
          alpha: number;
          duration: number;
        }
        type Data =
          | undefined
          | {
              duration: number;
              startAlpha: number;
            };
      }
      interface CHANGE_ALPHA extends ig.EffectStepBase {
        alpha: number;
        duration: number;
        _wm: ig.EffectConfig;

        start(this: this, entity: ig.ENTITY.Effect): ig.EFFECT_ENTRY.CHANGE_ALPHA.Data;
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
          data: ig.EFFECT_ENTRY.CHANGE_ALPHA.Data,
        ): void;
        finish(this: this, entity: ig.ENTITY.Effect, data: ig.EFFECT_ENTRY.CHANGE_ALPHA.Data): void;
      }
      interface CHANGE_ALPHA_CONSTRUCTOR extends ImpactClass<CHANGE_ALPHA> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.CHANGE_ALPHA.Settings): CHANGE_ALPHA;
      }
      var CHANGE_ALPHA: CHANGE_ALPHA_CONSTRUCTOR;

      namespace CHANGE_SCALE {
        interface Settings {
          scaleX?: number;
          scaleY?: number;
          duration: number;
          spline?: unknown;
        }
        type Data =
          | undefined
          | {
              duration: number;
              startScaleX: number;
              startScaleY: number;
            };
      }
      interface CHANGE_SCALE extends ig.EffectStepBase {
        scaleX: number;
        scaleY: number;
        duration: number;
        spline: KeySpline;
        _wm: ig.EffectConfig;

        start(this: this, entity: ig.ENTITY.Effect): ig.EFFECT_ENTRY.CHANGE_SCALE.Data;
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
          data: ig.EFFECT_ENTRY.CHANGE_SCALE.Data,
        ): void;
        finish(this: this, entity: ig.ENTITY.Effect, data: ig.EFFECT_ENTRY.CHANGE_SCALE.Data): void;
      }
      interface CHANGE_SCALE_CONSTRUCTOR extends ImpactClass<CHANGE_SCALE> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.CHANGE_SCALE.Settings): CHANGE_SCALE;
      }
      var CHANGE_SCALE: CHANGE_SCALE_CONSTRUCTOR;
    }
  }
}
