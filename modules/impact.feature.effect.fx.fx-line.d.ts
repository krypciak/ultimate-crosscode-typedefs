// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace EFFECT_ENTRY {
      namespace COPY_SPRITE {
        interface Settings extends ig.EffectStepBase.Settings {
          color?: string;
          colorAlpha?: string;
          fadeColor?: string;
          offset?: Vec3;
          noLighter: boolean;
        }
      }
      interface COPY_SPRITE extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        color: Nullable<string>;
        colorAlpha: string;
        _wm: ig.EffectConfig;
        fadeColor: Nullable<string>;
        offset: Vec3;
        noLighter: boolean;
      }
      interface COPY_SPRITE_CONSTRUCTOR extends ImpactClass<COPY_SPRITE> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.COPY_SPRITE.Settings): COPY_SPRITE;
      }
      var COPY_SPRITE: COPY_SPRITE_CONSTRUCTOR;

      namespace LASER_SPRITE {
        interface Settings extends ig.EffectStepBase.Settings {
          pattern: ig.TileSheet.Data;
          patternYCount?: number;
          animFrames?: number[];
          frameTime: number;
          shiftSpeed: number;
          offset?: Vec3;
          guiSprites: boolean;
          renderMode?: unknown;
        }
      }
      interface LASER_SPRITE extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        _wm: ig.EffectConfig;
        patternSheet: ig.ImagePatternSheet;
        frameTime: number;
        shiftSpeed: number;
        offset: Nullable<Vec3>;
        guiSprites: boolean;

        clearCached(this: this): void;
      }
      interface LASER_SPRITE_CONSTRUCTOR extends ImpactClass<LASER_SPRITE> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.LASER_SPRITE.Settings): LASER_SPRITE;
      }
      var LASER_SPRITE: LASER_SPRITE_CONSTRUCTOR;
    }
  }
}

