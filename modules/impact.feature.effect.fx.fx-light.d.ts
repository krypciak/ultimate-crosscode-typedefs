// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace EFFECT_ENTRY {
      namespace LIGHT {
        interface Settings {
          size: keyof typeof ig.LIGHT_SIZE;
          fadeIn: number;
          fadeOut: number;
          duration: number;
          maxAlpha?: number;
          glow: boolean;
          offset?: Vec3;
        }
      }
      interface LIGHT extends ig.EffectStepBase {
        size: ig.LIGHT_SIZE;
        fadeIn: number;
        fadeOut: number;
        duration: number;
        maxAlpha: number;
        glow: boolean;
        _wm: ig.EffectConfig;
        offset: Nullable<Vec3>;
      }
      interface LIGHT_CONSTRUCTOR extends ImpactClass<LIGHT> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.LIGHT.Settings): LIGHT;
      }
      var LIGHT: LIGHT_CONSTRUCTOR;

      namespace CLEAR_LIGHT {
        interface Settings {}
      }
      interface CLEAR_LIGHT extends ig.EffectStepBase {
        _wm: ig.EffectConfig;
      }
      interface CLEAR_LIGHT_CONSTRUCTOR extends ImpactClass<CLEAR_LIGHT> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.CLEAR_LIGHT.Settings): CLEAR_LIGHT;
      }
      var CLEAR_LIGHT: CLEAR_LIGHT_CONSTRUCTOR;

      namespace DARKNESS {
        interface Settings {
          fadeIn: number;
          fadeOut: number;
          duration: number;
          intensity: number;
        }
      }
      interface DARKNESS extends ig.EffectStepBase {
        fadeIn: number;
        fadeOut: number;
        duration: number;
        intensity: number;
        _wm: ig.EffectConfig;
      }
      interface DARKNESS_CONSTRUCTOR extends ImpactClass<DARKNESS> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.DARKNESS.Settings): DARKNESS;
      }
      var DARKNESS: DARKNESS_CONSTRUCTOR;

      namespace CLEAR_DARKNESS {
        interface Settings {}
      }
      interface CLEAR_DARKNESS extends ig.EffectStepBase {
        _wm: ig.EffectConfig;
      }
      interface CLEAR_DARKNESS_CONSTRUCTOR extends ImpactClass<CLEAR_DARKNESS> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.CLEAR_DARKNESS.Settings,
        ): CLEAR_DARKNESS;
      }
      var CLEAR_DARKNESS: CLEAR_DARKNESS_CONSTRUCTOR;

      namespace SCREEN_FLASH {
        interface Settings {
          color: string;
          fadeIn: number;
          fadeOut: number;
          duration: number;
        }
      }
      interface SCREEN_FLASH extends ig.EffectStepBase {
        color: Nullable<string>;
        fadeIn: number;
        fadeOut: number;
        duration: number;
        intensity: unknown;
        _wm: ig.EffectConfig;
      }
      interface SCREEN_FLASH_CONSTRUCTOR extends ImpactClass<SCREEN_FLASH> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.SCREEN_FLASH.Settings): SCREEN_FLASH;
      }
      var SCREEN_FLASH: SCREEN_FLASH_CONSTRUCTOR;

      namespace CLEAR_SCREEN_FLASH {
        interface Settings {}
      }
      interface CLEAR_SCREEN_FLASH extends ig.EffectStepBase {
        _wm: ig.EffectConfig;
      }
      interface CLEAR_SCREEN_FLASH_CONSTRUCTOR extends ImpactClass<CLEAR_SCREEN_FLASH> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.CLEAR_SCREEN_FLASH.Settings,
        ): CLEAR_SCREEN_FLASH;
      }
      var CLEAR_SCREEN_FLASH: CLEAR_SCREEN_FLASH_CONSTRUCTOR;
    }
  }
}
