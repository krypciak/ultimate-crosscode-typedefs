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

    namespace BGM_DEFAULT_TRACKS {
      namespace Config {
        interface Track {
          track: Nullable<ig.BGM_TRACK>;
          volume: number;
        }
        type Keys = keyof ig.BGM_DEFAULT_TRACKS.Config;
      }
      interface Config {
        field: ig.BGM_DEFAULT_TRACKS.Config.Track;
        battle: ig.BGM_DEFAULT_TRACKS.Config.Track;
        rankBattle?: ig.BGM_DEFAULT_TRACKS.Config.Track;
        sRankBattle?: ig.BGM_DEFAULT_TRACKS.Config.Track;
      }
    }
    interface BGM_DEFAULT_TRACKS {}
    var BGM_DEFAULT_TRACKS: BGM_DEFAULT_TRACKS;
    type BGM_DEFAULT_TRACK = keyof BGM_DEFAULT_TRACKS;

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

    interface BgmTrackSet extends ig.Class {
      name: ig.BGM_DEFAULT_TRACK;
      entries: ig.Bgm.Entry[];

      get(this: this, key: ig.BGM_DEFAULT_TRACKS.Config.Keys): ig.Bgm.Entry;
      clearCached(this: this): void;
      copy(this: this): ig.BgmTrackSet;
    }
    interface BgmTrackSetConstructor extends ImpactClass<BgmTrackSet> {
      new (defaultTrack: ig.BGM_DEFAULT_TRACK): BgmTrackSet;
    }
    var BgmTrackSet: BgmTrackSetConstructor;

    namespace Bgm {
      interface Data {
        defaultTrackSet: ig.BGM_DEFAULT_TRACK;
        defaultTrackTypeStack: ig.BGM_DEFAULT_TRACKS.Config.Keys[];
        overloadDefault: boolean;
        paused: boolean;
        resumeOnChange: Nullable<ig.BGM_SWITCH_MODE>;
      }
      interface Entry {
        track: ig.BgmTrack | undefined;
        volume: number;
      }
    }
    interface Bgm
      extends ig.GameAddon,
        ig.Storage.ListenerSave,
        ig.Storage.ListenerPreLoad,
        ig.Storage.ListenerPostLoad {
      defaultTrackSet: Nullable<string>;
      defaultTrackTypeStack: ig.BGM_DEFAULT_TRACKS.Config.Keys[];
      trackStack: ig.Bgm.Entry[];
      overloadDefault: boolean;
      defaultMode: string;
      mapDefaultTrackSet: Nullable<ig.BgmTrackSet>;
      delayedResume: number;
      pauseAutoResumeBlock: boolean;
      resumeOnChange: Nullable<ig.BGM_SWITCH_MODE>;
      levelLoadStartOrder: number;
      levelLoadedOrder: number;

      loadTrack(this: this, trackName: ig.BGM_TRACK): ig.BgmTrack | void;
      loadTrackSet(this: this, trackSetName: ig.BGM_DEFAULT_TRACK): ig.BgmTrackSet;
      setDefault(
        this: this,
        trackSet: ig.BgmTrackSet,
        mode: ig.BGM_SWITCH_MODE,
        noPlay?: boolean,
      ): void;
      isPlayingDefault(this: this): boolean;
      getDefaultTrackTypeCount(this: this): number;
      hasDefaultTrackType(this: this, type: ig.BGM_DEFAULT_TRACKS.Config.Keys): boolean;
      pushDefaultTrackType(
        this: this,
        type: ig.BGM_DEFAULT_TRACKS.Config.Keys,
        mode: ig.BGM_SWITCH_MODE,
      ): void;
      popDefaultTrackType(this: this, mode: ig.BGM_SWITCH_MODE): void;
      setResumeOnChange(this: this, mode: ig.BGM_SWITCH_MODE): void;
      clearResumeOnChange(this: this): void;
      resumeDefault(this: this, mode: ig.BGM_SWITCH_MODE): void;
      play(this: this, track: ig.BgmTrack, volume: number, mode: ig.BGM_SWITCH_MODE): void;
      push(this: this, track: ig.BgmTrack, volume: number, mode: ig.BGM_SWITCH_MODE): void;
      pop(this: this, mode: ig.BGM_SWITCH_MODE): void;
      clear(this: this, mode?: ig.BGM_SWITCH_MODE): void;
      inbetween(this: this, track: ig.BgmTrack, volume: number, mode: ig.BGM_SWITCH_MODE): void;
      pause(this: this, mode: ig.BGM_SWITCH_MODE): void;
      resume(this: this, mode: ig.BGM_SWITCH_MODE): void;
      onLevelLoadStart(this: this, data: sc.MapModel.Map): void;
      onLevelLoaded(this: this): void;
      onReset(this: this): void;
      onDeferredUpdate(this: this): void;
      _getModeData(this: this, modeKey: ig.BGM_SWITCH_MODE): ig.BGM_SWITCH_MODE.Mode;
      _getDefaultTrackEntry(this: this): ig.BGM_DEFAULT_TRACKS.Config.Track;
    }
    interface BgmConstructor extends ImpactClass<Bgm> {
      new (): Bgm;
    }
    var Bgm: BgmConstructor;
    var bgm: Bgm;
  }
}
