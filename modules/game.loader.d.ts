// requires impact.base.timer
// requires impact.base.loader

export {};

declare global {
  namespace sc {
    interface StartLoader extends ig.Loader {
      timer: ig.Timer;
      endTimer: number;

      draw(this: this): void;
      onEnd(this: this): void;
    }
    interface StartLoaderConstructor extends ImpactClass<StartLoader> {
      new (gameClass: sc.CrossCodeConstructor): StartLoader;
    }
    var StartLoader: StartLoaderConstructor;
  }
}
