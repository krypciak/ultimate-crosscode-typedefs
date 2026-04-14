// requires impact.base.entity
// requires impact.base.actor-entity

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace SoundSource {
        interface Settings extends ig.Entity.Settings {
          sound: string;
          volume?: number;
          radius?: number;
          rangeType?: ig.SOUND_RANGE_TYPE | keyof ig.SOUND_RANGE_TYPE;
          speed?: number;
          faceDuration?: number;
        }
      }
      interface SoundSource extends ig.Entity {
        sound: ig.Sound;
        soundHandle: unknown;
        radius: number;
        rangeType: ig.SOUND_RANGE_TYPE | keyof ig.SOUND_RANGE_TYPE;
        _wm: ig.Config;

        stop(this: this): void;
      }
      interface SoundSourceConstructor extends ImpactClass<SoundSource> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.SoundSource.Settings,
        ): SoundSource;
      }
    }
  }
}
