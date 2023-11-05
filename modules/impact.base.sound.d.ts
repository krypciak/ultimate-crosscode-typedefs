// requires impact.base.loader
// requires impact.base.system.web-audio

export {};

declare global {
  namespace ig {
    enum SOUND_RANGE_TYPE {
      CIRULAR = 1, /* typo */
      HORIZONTAL = 2,
      VERTICAL = 3,
    }

    interface SoundManager extends ig.Class {
      clips: { [path: string]: HTMLAudioElement };
      volume: number;
      format: ig.Sound.FORMAT;
      context: ig.WebAudio;
      buffers: { [path: string]: AudioBuffer };

      playSoundHandle(this: this, a: ig.SoundHandleBase, group: { playing: ig.SoundHandleBase[], requests: ig.SoundHandleBase[] }): void;
      _solveGroupRequests(this: this, group: { playing: ig.SoundHandleBase[], requests: ig.SoundHandleBase[] }): void;
      connectSound(this: this, connectObj: { connect(gain: GainNode): void }): void;
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
    interface SoundManagerConstructor extends ImpactClass<SoundManager> {}
    var SoundManager: SoundManagerConstructor;
    var soundManager: SoundManager;

    interface SoundDefault extends ig.Class, SoundCommon {}
    interface SoundDefaultConstructor extends ImpactClass<SoundDefault>, SoundConstructorCommon {}
    var SoundDefault: SoundDefaultConstructor;

    interface SoundWebAudio extends ig.Class, SoundCommon {}
    interface SoundWebAudioConstructor extends ImpactClass<SoundWebAudio>, SoundConstructorCommon {}
    var SoundWebAudio: SoundWebAudioConstructor;

    namespace Sound {
      interface FORMAT {
        ext: string;
        mime: string;
      }
    }
    interface SoundCommon {
      play(this: this): void;
    }

    namespace Sound$FORMAT {
      var MP3: ig.Sound.FORMAT;
      var M4A: ig.Sound.FORMAT;
      var OGG: ig.Sound.FORMAT;
      var WEBM: ig.Sound.FORMAT;
      var CAF: ig.Sound.FORMAT;
    }
    interface SoundConstructorCommon {
      new (path: string, volume?: number, variance?: number, group?: string): ig.Sound;
      FORMAT: typeof Sound$FORMAT;
      use: ig.Sound.FORMAT[];
    }

    type Sound = SoundDefault | SoundWebAudio;
    type SoundConstructor = SoundDefaultConstructor | SoundWebAudioConstructor;
    var Sound: SoundConstructor;
  }
}
