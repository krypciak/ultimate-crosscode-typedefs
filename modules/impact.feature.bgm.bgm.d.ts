// requires impact.base.event
// requires impact.base.game
// requires impact.base.sound
// requires impact.feature.storage.storage

export {};

declare global {
  namespace ig {
    namespace BGM_SWITCH_MODE {
      interface Mode {
        fadeIn: number;
        fadeOut: number;
      }

      var IMMEDIATELY: Mode;
      var FAST_OUT: Mode;
      var MEDIUM_OUT: Mode;
      var SLOW_OUT: Mode;
      var VERY_SLOW_OUT: Mode;
      var FAST: Mode;
      var MEDIUM: Mode;
      var SLOW: Mode;
      var VERY_SLOW: Mode;
    }
    type BGM_SWITCH_MODE = keyof typeof BGM_SWITCH_MODE;

    interface BGM_TRACK_LIST {}
    var BGM_TRACK_LIST: BGM_TRACK_LIST;

    type BGM_TRACK = keyof typeof ig.BGM_TRACK_LIST;

    namespace BgmDefaultTrackConfig {
      interface Track {
        track: Nullable<string>;
        volume: number;
      }
    }
    interface BgmDefaultTrackConfig {
      field: ig.BgmDefaultTrackConfig.Track;
      battle: ig.BgmDefaultTrackConfig.Track;
      rankBattle?: ig.BgmDefaultTrackConfig.Track;
      sRankBattle?: ig.BgmDefaultTrackConfig.Track;
    }

    interface BGM_DEFAULT_TRACKS {}
    var BGM_DEFAULT_TRACKS: BGM_DEFAULT_TRACKS;

    interface BgmTrack extends ig.Class {
      name: BGM_TRACK;
      track: ig.Track;

      get(this: this): ig.Track;
      clearCached(this: this): void;
      copy(this: this): ig.BgmTrack;
    }
    interface BgmTrackConstructor extends ImpactClass<BgmTrack> {
      new (name: BGM_TRACK): BgmTrack;
    }

    var BgmTrack: BgmTrackConstructor;
    namespace Bgm {
      interface Data {
        defaultTrackSet: string;
        defaultTrackTypeStack: string[];
        overloadDefault: boolean;
        paused: boolean;
        resumeOnChange: Nullable<unknown>;
      }
    }

    interface Bgm extends ig.GameAddon {
      clear(this: this, mode?: ig.BGM_SWITCH_MODE): void;
      onDeferredUpdate(this: this): void;
    }
    interface BgmConstructor extends ImpactClass<Bgm> {
      new (): Bgm;
    }
    var Bgm: BgmConstructor;
    var bgm: Bgm;
  }
}
