// requires impact.base.image

export {};

declare global {
  namespace ig {
    namespace SpriteEffectBase {
      interface Settings {
        delay?: number;
        duration?: number;
      }
    }
    interface SpriteEffectBase extends ig.Class {
      delay: number;
      duration: number;

      updateSprite(this: this, sprite: ig.CubeSprite, time: number, animDuration: number): void;
      apply(this: this, sprite: ig.CubeSprite, weight: number): void;
    }
    interface SpriteEffectBaseConstructor extends ImpactClass<SpriteEffectBase> {
      new (settings: ig.SpriteEffectBase.Settings): SpriteEffectBase;
    }
    var SpriteEffectBase: SpriteEffectBaseConstructor;

    namespace SPRITE_FX {
      namespace SLIDE {
        interface Settings extends ig.SpriteEffectBase.Settings {
          dir?: keyof typeof ig.ActorEntity.FACE4;
          start?: number;
          end?: number;
          keySpline?: keyof typeof window.KEY_SPLINES;
        }
      }
      interface SLIDE extends ig.SpriteEffectBase {
        dir: ig.ActorEntity.FACE4;
        start: number;
        end: number;
        keySpline: KeySpline;
      }
      interface SLIDEConstructor extends ImpactClass<SLIDE> {
        new (settings: ig.SPRITE_FX.SLIDE.Settings): SLIDE;
      }

      namespace MOVE_XYZ {
        interface Settings extends ig.SpriteEffectBase.Settings {
          start?: number;
          end?: number;
          keySpline?: keyof typeof window.KEY_SPLINES;
        }
      }
      interface MOVE_XYZ extends ig.SpriteEffectBase {
        dir: ig.ActorEntity.FACE4;
        start: number;
        end: number;
        keySpline: KeySpline;
      }
      interface MOVE_XYZConstructor extends ImpactClass<MOVE_XYZ> {
        new (settings: ig.SPRITE_FX.MOVE_XYZ.Settings): MOVE_XYZ;
      }
    }

    var SPRITE_FX: {
      SLIDE: ig.SPRITE_FX.SLIDEConstructor;
      MOVE_XYZ: ig.SPRITE_FX.MOVE_XYZConstructor;
    };
  }
}
