// requires impact.feature.map-sounds.map-sounds
// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SET_MAP_SOUNDS {
        interface Settings {
          mapSounds: keyof typeof ig.MAP_SOUNDS;
        }
      }
      interface SET_MAP_SOUNDS extends ig.EventStepBase {
        soundEntry: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SET_MAP_SOUNDS_CONSTRUCTOR extends ImpactClass<SET_MAP_SOUNDS> {
        new (settings: ig.EVENT_STEP.SET_MAP_SOUNDS.Settings): SET_MAP_SOUNDS;
      }
      var SET_MAP_SOUNDS: SET_MAP_SOUNDS_CONSTRUCTOR;
    }
  }
}
