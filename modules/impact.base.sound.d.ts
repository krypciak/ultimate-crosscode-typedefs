// requires impact.base.loader
// requires impact.base.system.web-audio

export {};

declare global {
  namespace ig {
    enum SOUND_RANGE_TYPE {
      CIRULAR = 1 /* typo */,
      HORIZONTAL = 2,
      VERTICAL = 3,
    }

    interface SoundManager extends ig.Class {
      clips: { [path: string]: HTMLAudioElement };
      volume: number;
      format: ig.Sound.FORMAT;
      context: ig.WebAudio;
      buffers: { [path: string]: AudioBuffer };
      soundHandles: ig.SoundHandle[];
      soundStack: ig.SoundHandle[][];
      soundGroups: Record<string, { playing: ig.SoundHandle[]; requests: ig.SoundHandle[] }>;

      update(this: this): void;
      reset(this: this): void;
      playSoundHandle(
        this: this,
        handle: ig.SoundHandleBase,
        group: { playing: ig.SoundHandleBase[]; requests: ig.SoundHandleBase[] },
      ): void;
      stopSoundHandle(this: this, handle: ig.SoundHandleBase): void;
      pushPaused(this: this, noFadeOut?: boolean): void;
      popPaused(this: this): void;
      _solveGroupRequests(
        this: this,
        group: { playing: ig.SoundHandleBase[]; requests: ig.SoundHandleBase[] },
      ): void;
      connectSound(this: this, connectObj: { connect(gain: GainNode): void }): void;
      addNamedSound(this: this, name: string, handle: ig.SoundHandle): void;
      getNamedSounds(this: this, name: string): ig.SoundHandle[];
      stopNamedSounds(this: this, name: string): void;
      loadWebAudio(
        this: this,
        path: string,
        loadCallback: (path: string, success: boolean) => void,
      ): void;
      load(
        this: this,
        path: string,
        channelCount: number,
        loadCallback: (
          path: string,
          channelCount: number,
          success: boolean,
          event?: globalThis.Event,
        ) => void,
      ): void;
    }
    interface SoundManagerConstructor extends ImpactClass<SoundManager> {
      new (): SoundManager;
    }
    var SoundManager: SoundManagerConstructor;
    var soundManager: SoundManager;

    interface MultiAudio extends ig.Loadable {
      channelCount: number;

      get(this: this): unknown;
      getChannel(this: this, a: unknown): unknown;
    }
    interface MultiAudioConstructor extends ImpactClass<MultiAudio> {
      new (pathOrData: string, _unused?: never): MultiAudio;
    }
    var MultiAudio: MultiAudioConstructor;

    interface WebAudioBuffer extends ig.Loadable {
      cacheType: 'WebAudioBuffer';

      get(this: this): AudioBuffer;
    }
    interface WebAudioBufferConstructor extends ImpactClass<WebAudioBuffer> {
      new (path: string): WebAudioBuffer;
    }
    var WebAudioBuffer: WebAudioBufferConstructor;

    namespace Music {
      interface Track {
        track: ig.Track;
        timeOnPush: number;
        stopOnEnd: boolean;
        volume: number;
      }
    }
    interface Music extends ig.Class {
      inBetweenTrack: Nullable<ig.Music.Track>;
      currentTrack: ig.Music.Track;
      trackStack: ig.Music.Track[];
      paused: boolean;
      _volume: number;
      _interval: number;
      _timer: ig.Timer;
      _fadeInTime: number;
      _nextTrackReset: boolean;
      _transitionType: number;

      play(
        this: this,
        track: ig.Track,
        fadeOut: number,
        fadeIn: number,
        volume: number,
        stopOnEnd?: boolean,
      ): void;
      push(
        this: this,
        track: ig.Track,
        fadeOut: number,
        fadeIn: number,
        volume: number,
        stopOnEnd?: boolean,
      ): void;
      pop(this: this, fadeOut: number, fadeIn: number): void;
      inbetween(
        this: this,
        track: ig.Track,
        volume: boolean,
        fadeIn: number,
        volumeMultiplier?: number,
      ): void;
      pause(this: this, fadeOut?: number): void;
      resume(this: this, fadeIn: number): void;
      getStackSize(this: this): number;
      isTrackPlaying(this: this, track: ig.Track, volume?: number): boolean;
      getVolume(this: this): number;
      setVolume(this: this, volume: number): void;
      _checkCurrentTrackEquality(this: this): boolean;
      _getTopTrack(this: this): Nullable<ig.Music.Track>;
      _pushNextTrack(
        this: this,
        track: ig.Track,
        stopOnEnd?: boolean,
        mode?: ig.BGM_SWITCH_MODE,
      ): void;
      _setFadeOut(this: this, fadeOut: number, paused?: boolean): void;
      _startInterval(this: this): void;
      _intervalStep(this: this): void;
      _playTopSong(this: this): void;
      _endFadeIn(this: this): void;
      _trackEnded(this: this): void;
      onWindowFocusLost(this: this): void;
      onWindowFocusGained(this: this): void;
    }
    interface MusicConstructor extends ImpactClass<Music> {
      new (): Music;
    }
    var Music: MusicConstructor;
    var music: Music;

    interface TrackDefault extends ig.Cacheable {}
    interface TrackDefaultConstructor extends ImpactClass<TrackDefault> {
      new (a: unknown, b: unknown, c: unknown, d: unknown, e: unknown): TrackDefault;
    }
    var TrackDefault: TrackDefaultConstructor;

    interface TrackWebAudio extends ig.Cacheable {}
    interface TrackWebAudioConstructor extends ImpactClass<TrackWebAudio> {
      new (a: unknown, b: unknown, c: unknown, d: unknown, e: unknown): TrackWebAudio;
    }
    var TrackWebAudio: TrackWebAudioConstructor;

    interface SoundDefault extends ig.Class, SoundCommon {
      group: string;
      multiAudio: ig.MultiAudio;
      volume: number;
      currentClip: unknown;
      multiChannel: boolean;

      clone(this: this): ig.SoundDefault;
      clearCached(this: this): void;
      stop(this: this): void;
    }
    interface SoundDefaultConstructor
      extends ImpactClass<SoundDefault>,
        SoundConstructorCommon<ig.SoundDefault> {}
    var SoundDefault: SoundDefaultConstructor;

    interface SoundWebAudio extends ig.Class, SoundCommon {
      group: string;
      webAudioBuffer: ig.WebAudioBuffer;
      volume: number;
      variance: number;

      clone(this: this): SoundWebAudio;
      clearCached(this: this): void;
      stop(this: this): void;
    }
    interface SoundWebAudioConstructor
      extends ImpactClass<SoundWebAudio>,
        SoundConstructorCommon<ig.SoundWebAudio> {}
    var SoundWebAudio: SoundWebAudioConstructor;

    interface SoundHandleBase extends ig.Class, SoundCommon {
      pos: null | {
        point: Vec2;
        entity: ig.Entity | null;
        align: ig.ENTITY_ALIGN | null;
        offset: null;
        range: number;
        rangeType: ig.SOUND_RANGE_TYPE;
      };
      offset: Vec2;

      setFixPosition(this: this, point: Vec3, range?: number, type?: ig.SOUND_RANGE_TYPE): void;
      setEntityPosition(
        this: this,
        entity: ig.Entity,
        align: ig.ENTITY_ALIGN,
        offset: null,
        range?: number,
        type?: ig.SOUND_RANGE_TYPE,
      ): void;
      _updateEntityPos(this: this, force?: boolean): void;
      isLooping(this: this): boolean;
      getPlayTime(this: this): number;
      stop(this: this): void;
    }
    interface SoundHandleBaseConstructor extends ImpactClass<ig.SoundHandleBase> {
      new (): ig.SoundHandleBase;
    }
    var SoundHandleBase: ig.SoundHandleBaseConstructor;

    interface SoundHandleDefault extends ig.SoundHandleBase {}
    interface SoundHandleDefaultConstructor extends ImpactClass<SoundHandleDefault> {
      new (): ig.SoundHandleDefault;
    }
    var SoundHandleDefault: ig.SoundHandleDefault;

    interface SoundHandleWebAudio extends ig.SoundHandleBase {
      _buffer: null | AudioBufferSourceNode;
      _volume: number;
      _speed: number;
      _time: number;
      _duration: number;
      _offset: number;
      _startTime: number;
      _nodeSource: null | ig.WebAudioBufferGain;
      _nodePosition: PannerNode;
      _loop: boolean;
      _playing: boolean;
      _fadeTimer: number;
      _fadeIn: boolean;
      _fadeDuration: number;
      _contextTimeOnStart: number;
      _contextTimeOnPause: number;

      _setPosition(this: this): void;
      _disconnect(this: this): void;
      pause(this: this, noFadeOut?: boolean): void;
    }
    interface SoundHandleWebAudioConstructor extends ImpactClass<ig.SoundHandleWebAudio> {
      new (): ig.SoundHandleWebAudio;
    }
    var SoundHandleWebAudio: ig.SoundHandleWebAudioConstructor;

    namespace SoundHelper {
      function playAtEntity(
        sound: ig.Sound,
        entity: ig.Entity,
        isLooped: Nullable<boolean>,
        settings: Nullable<SoundPlaySettings>,
        range?: number,
        type?: ig.SOUND_RANGE_TYPE,
      ): ig.SoundHandle;
    }
    type SoundHandle = ig.SoundHandleWebAudio | ig.SoundHandleDefault;

    namespace Sound {
      interface FORMAT {
        ext: string;
        mime: string;
      }
    }

    interface SoundPlaySettings {
      /* not real */ fadeDuration?: number;
      offset?: number;
      startTime?: number;
      speed?: number;
    }

    interface SoundCommon {
      play(this: ig.Sound, pos?: boolean, settings?: SoundPlaySettings): ig.SoundHandle;
    }

    namespace Sound$FORMAT {
      var MP3: ig.Sound.FORMAT;
      var M4A: ig.Sound.FORMAT;
      var OGG: ig.Sound.FORMAT;
      var WEBM: ig.Sound.FORMAT;
      var CAF: ig.Sound.FORMAT;
    }
    interface SoundConstructorCommon<T extends ig.Sound> {
      new (path: string, volume?: number, variance?: number, group?: string): T;
      FORMAT: typeof Sound$FORMAT;
      use: ig.Sound.FORMAT[];
    }

    type Sound = SoundDefault | SoundWebAudio;
    type SoundConstructor = SoundDefaultConstructor | SoundWebAudioConstructor;
    type Track = TrackDefault | TrackWebAudio;
    type TrackConstructor = TrackDefaultConstructor | TrackWebAudioConstructor;
    var Sound: SoundConstructor;
  }

  var webAudioActive: boolean;
}
