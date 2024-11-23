// requires impact.base.timer
// requires impact.base.image
// requires impact.base.vars

export {};

declare global {
  namespace ig {
    interface System extends ig.Class {
      fps: number;
      frameSkip: number;
      width: number;
      height: number;
      contextWidth: number;
      contextHeight: number;
      realWidth: number;
      realHeight: number;
      screenWidth: number;
      screenHeight: number;
      zoom: number;
      scale: number;
      contextScale: number;
      systemFontScale: number;
      skipMode: boolean;
      timeFactor: number;
      totalTimeFactor: number;
      rawTick: number;
      tick: number;
      actualTick: number;
      ingameTick: number;
      intervalId: number;
      newGameClass: Nullable<ig.GameConstructor>;
      running: boolean;
      delegate: ig.Game;
      clock: ig.Timer;
      inputDom: HTMLDivElement;
      canvas: HTMLCanvasElement;
      context: Nullable<CanvasRenderingContext2D>;
      cancelFocusLostCallback: () => boolean;

      resize(this: this, width: number, height: number, contextScale?: number): void;
      setGame(this: this, gameConstructor: GameConstructor): void;
      setGameNow(this: this, gameConstructor: GameConstructor): void;
      setDelegate(this: this, game: ig.Game): void;
      stopRunLoop(this: this): void;
      startRunLoop(this: this): void;
      run(this: this): void;
      getScreenFromMapPos(this: this, dest: Vec2, x: number, y: number): Vec2;
      getMapFromScreenPos(this: this, dest: Vec2, x: number, y: number): Vec2;
      setFocusLost(this: this): void;
      regainFocus(this: this): void;
      addFocusListener(this: this, listener: (focusLost: boolean) => void): void;
      removeFocusListener(this: this, listener: (focusLost: boolean) => void): void;
      getBufferContext(this: this, buffer: HTMLCanvasElement): CanvasRenderingContext2D;
      error(this: this, error: Error): never;
      hasFocusLost(this: this): boolean;
      getDrawPos(this: this, x: number): number;
      setCanvasSize(this: this, width: number, height: number, hideBorder?: boolean): void;
    }
    interface SystemConstructor extends ImpactClass<System> {
      new (
        canvasId: string,
        inputDomId: string,
        fps: number,
        width: number,
        height: number,
        scale: number,
      ): System;
    }
    var System: SystemConstructor;
    var system: ig.System;
  }
}
