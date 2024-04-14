// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface ScreenBlur extends ig.GameAddon {
      onPostUpdate(this: this): void;
      onPreDraw(this: this): void;
      onPostDraw(this: this): void;
      onReset(this: this): void;
    }
    interface ScreenBlurConstructor extends ImpactClass<ScreenBlur> {
      new (): ScreenBlur;
    }
    var ScreenBlur: ScreenBlurConstructor;
  }
}
