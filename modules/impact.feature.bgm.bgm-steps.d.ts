// requires impact.base.action
// requires impact.base.event
// requires impact.feature.bgm.bgm

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace PLAY_BGM {
        interface Settings {
          bgm: keyof typeof ig.BGM_TRACK_LIST;
          volume: number;
          mode: keyof typeof ig.BGM_SWITCH_MODE;
        }
      }
      interface PLAY_BGM extends ig.EventStepBase {
        track: ig.BgmTrack;
        volume: number;
        mode: keyof typeof ig.BGM_SWITCH_MODE;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface PLAY_BGM_CONSTRUCTOR extends ImpactClass<PLAY_BGM> {
        new (settings: ig.EVENT_STEP.PLAY_BGM.Settings): PLAY_BGM;
      }
      var PLAY_BGM: PLAY_BGM_CONSTRUCTOR;

      namespace PAUSE_BGM {
        interface Settings {
          mode: keyof typeof ig.BGM_SWITCH_MODE;
        }
      }
      interface PAUSE_BGM extends ig.EventStepBase {
        mode: keyof typeof ig.BGM_SWITCH_MODE;
        _wm: ig.Config;
      }
      interface PAUSE_BGM_CONSTRUCTOR extends ImpactClass<PAUSE_BGM> {
        new (settings: ig.EVENT_STEP.PAUSE_BGM.Settings): PAUSE_BGM;
      }
      var PAUSE_BGM: PAUSE_BGM_CONSTRUCTOR;

      namespace RESUME_BGM {
        interface Settings {
          mode: keyof typeof ig.BGM_SWITCH_MODE;
        }
      }
      interface RESUME_BGM extends ig.EventStepBase {
        mode: keyof typeof ig.BGM_SWITCH_MODE;
        _wm: ig.Config;
      }
      interface RESUME_BGM_CONSTRUCTOR extends ImpactClass<RESUME_BGM> {
        new (settings: ig.EVENT_STEP.RESUME_BGM.Settings): RESUME_BGM;
      }
      var RESUME_BGM: RESUME_BGM_CONSTRUCTOR;

      namespace PUSH_BGM {
        interface Settings {
          bgm: keyof typeof ig.BGM_TRACK_LIST;
          volume: number;
          mode: keyof typeof ig.BGM_SWITCH_MODE;
        }
      }
      interface PUSH_BGM extends ig.EventStepBase {
        track: ig.BgmTrack;
        volume: number;
        mode: keyof typeof ig.BGM_SWITCH_MODE;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface PUSH_BGM_CONSTRUCTOR extends ImpactClass<PUSH_BGM> {
        new (settings: ig.EVENT_STEP.PUSH_BGM.Settings): PUSH_BGM;
      }
      var PUSH_BGM: PUSH_BGM_CONSTRUCTOR;

      namespace POP_BGM {
        interface Settings {
          mode: keyof typeof ig.BGM_SWITCH_MODE;
        }
      }
      interface POP_BGM extends ig.EventStepBase {
        _wm: ig.Config;
        mode: keyof typeof ig.BGM_SWITCH_MODE;
      }
      interface POP_BGM_CONSTRUCTOR extends ImpactClass<POP_BGM> {
        new (settings: ig.EVENT_STEP.POP_BGM.Settings): POP_BGM;
      }
      var POP_BGM: POP_BGM_CONSTRUCTOR;

      namespace PLAY_IN_BETWEEN_BGM {
        interface Settings {
          bgm: keyof typeof ig.BGM_TRACK_LIST;
          volume: number;
          mode: keyof typeof ig.BGM_SWITCH_MODE;
        }
      }
      interface PLAY_IN_BETWEEN_BGM extends ig.EventStepBase {
        track: ig.BgmTrack;
        volume: number;
        mode: keyof typeof ig.BGM_SWITCH_MODE;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface PLAY_IN_BETWEEN_BGM_CONSTRUCTOR extends ImpactClass<PLAY_IN_BETWEEN_BGM> {
        new (settings: ig.EVENT_STEP.PLAY_IN_BETWEEN_BGM.Settings): PLAY_IN_BETWEEN_BGM;
      }
      var PLAY_IN_BETWEEN_BGM: PLAY_IN_BETWEEN_BGM_CONSTRUCTOR;

      namespace SET_DEFAULT_BGM {
        interface Settings {
          defaultBgm: keyof typeof ig.BGM_DEFAULT_TRACKS;
          mode: keyof typeof ig.BGM_SWITCH_MODE;
        }
      }
      interface SET_DEFAULT_BGM extends ig.EventStepBase {
        trackSet: ig.BgmTrack;
        mode: keyof typeof ig.BGM_SWITCH_MODE;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SET_DEFAULT_BGM_CONSTRUCTOR extends ImpactClass<SET_DEFAULT_BGM> {
        new (settings: ig.EVENT_STEP.SET_DEFAULT_BGM.Settings): SET_DEFAULT_BGM;
      }
      var SET_DEFAULT_BGM: SET_DEFAULT_BGM_CONSTRUCTOR;

      namespace RESUME_DEFAULT_BGM {
        interface Settings {
          mode: keyof typeof ig.BGM_SWITCH_MODE;
          delayed: boolean;
        }
      }
      interface RESUME_DEFAULT_BGM extends ig.EventStepBase {
        _wm: ig.Config;
        mode: keyof typeof ig.BGM_SWITCH_MODE;
        delayed: boolean;
      }
      interface RESUME_DEFAULT_BGM_CONSTRUCTOR extends ImpactClass<RESUME_DEFAULT_BGM> {
        new (settings: ig.EVENT_STEP.RESUME_DEFAULT_BGM.Settings): RESUME_DEFAULT_BGM;
      }
      var RESUME_DEFAULT_BGM: RESUME_DEFAULT_BGM_CONSTRUCTOR;
    }
  }
}
