// requires impact.base.action
// requires impact.base.event
// requires impact.feature.effect.effect-sheet
// requires impact.feature.rumble.rumble

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace RUMBLE_SCREEN {
        interface Settings {
          rumbleType: keyof typeof ig.RUMBLE_TYPE;
          name: string;
          duration: number;
          power: keyof typeof ig.Rumble.SHAKE_POWER;
          speed: keyof typeof ig.Rumble.SHAKE_DURATION;
          fade: boolean;
        }
      }
      interface RUMBLE_SCREEN extends ig.EventStepBase {
        rumbleType: Nullable<keyof typeof ig.RUMBLE_TYPE>;
        name: Nullable<string>;
        duration: number;
        power: keyof typeof ig.Rumble.SHAKE_POWER;
        speed: keyof typeof ig.Rumble.SHAKE_DURATION;
        fade: boolean;
        _wm: ig.Config;
      }
      interface RUMBLE_SCREEN_CONSTRUCTOR extends ImpactClass<RUMBLE_SCREEN> {
        new (settings: ig.EVENT_STEP.RUMBLE_SCREEN.Settings): RUMBLE_SCREEN;
      }
      var RUMBLE_SCREEN: RUMBLE_SCREEN_CONSTRUCTOR;

      namespace RUMBLE_STOP_CONTINUES {
        interface Settings {
          name: string;
        }
      }
      interface RUMBLE_STOP_CONTINUES extends ig.EventStepBase {
        name: Nullable<string>;
        _wm: ig.Config;
      }
      interface RUMBLE_STOP_CONTINUES_CONSTRUCTOR extends ImpactClass<RUMBLE_STOP_CONTINUES> {
        new (settings: ig.EVENT_STEP.RUMBLE_STOP_CONTINUES.Settings): RUMBLE_STOP_CONTINUES;
      }
      var RUMBLE_STOP_CONTINUES: RUMBLE_STOP_CONTINUES_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace RUMBLE_SCREEN {
        interface Settings {
          rumbleType: keyof typeof ig.RUMBLE_TYPE;
          name: string;
          duration: number;
          power: keyof typeof ig.Rumble.SHAKE_POWER;
          speed: keyof typeof ig.Rumble.SHAKE_DURATION;
          fade: boolean;
        }
      }
      interface RUMBLE_SCREEN extends ig.ActionStepBase {
        rumbleType: Nullable<keyof typeof ig.RUMBLE_TYPE>;
        name: Nullable<string>;
        duration: number;
        power: keyof typeof ig.Rumble.SHAKE_POWER;
        speed: keyof typeof ig.Rumble.SHAKE_DURATION;
        fade: boolean;
        _wm: ig.Config;
      }
      interface RUMBLE_SCREEN_CONSTRUCTOR extends ImpactClass<RUMBLE_SCREEN> {
        new (settings: ig.ACTION_STEP.RUMBLE_SCREEN.Settings): RUMBLE_SCREEN;
      }
      var RUMBLE_SCREEN: RUMBLE_SCREEN_CONSTRUCTOR;
    }
  }
}
