// requires impact.base.game
// requires impact.base.sound

export {};
declare global {
  namespace sc {
    namespace ArenaCrowdCheerController {
      interface SoundEntry {
        sounds: {
          sound: ig.Sound;
          volume: number;
        }[];
        maxVariance: number;
        cooldown: number;
        cooldownVariance: number;
      }
      interface Sounds {
        APPLAUSE: SoundEntry;
        SURPRISED: SoundEntry;
      }
      interface SoundPoolEntry {
        sounds: ig.Sound[];
        timer: number;
      }
    }
    interface ArenaCrowdCheerController extends ig.Class {
      soundPool: Record<
        keyof sc.ArenaCrowdCheerController.Sounds,
        sc.ArenaCrowdCheerController.SoundPoolEntry
      >;

      update(this: this): void;
      play(this: this, type: keyof sc.ArenaCrowdCheerController.Sounds | 'RANDOM'): void;
      resetTimers(this: this): void;
      loadCache(this: this): void;
      clearCache(this: this): void;
    }

    interface ArenaCrowdCheerControllerConstructor extends ImpactClass<ArenaCrowdCheerController> {
      new (): ArenaCrowdCheerController;
    }
    var ArenaCrowdCheerController: ArenaCrowdCheerControllerConstructor;
  }
}
