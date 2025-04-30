// requires impact.base.timer
// requires impact.base.image
// requires impact.base.vars

export {};

declare global {
  namespace ig {
    namespace System {
      type FocusListener = (focusLost: boolean) => void;
      type CursorType = 'none' | 'pointer' | 'melee' | 'throw';
    }
    interface System extends ig.Class, ig.Vars.Accessor {
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
      zoomFocus: Vec2;
      zoom: number;
      scale: number;
      contextScale: number;
      focusLost: boolean;
      focusListeners: ig.System.FocusListener[];
      windowFocusLost: boolean;
      imageSmoothingKey: Nullable<keyof CanvasRenderingContext2D>;
      imageSmoothingDisabled: boolean;
      crashed: boolean;
      cursorType: Nullable<ig.System.CursorType>;
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
      smoothPositioning: boolean;
      cancelFocusLostCallback: () => boolean;

      resize(this: this, width: number, height: number, contextScale?: number): void;
      setGame(this: this, gameConstructor: GameConstructor): void;
      setGameNow(this: this, gameConstructor: GameConstructor): void;
      setDelegate(this: this, game: ig.Game): void;
      setZoom(this: this, zoom: number): void;
      setZoomFocus(this: this, x: number, y: number): void;
      stopRunLoop(this: this): void;
      startRunLoop(this: this): void;
      getZoomMinOffset(this: this, dest: Vec2): Vec2;
      getScreenFromMapPos(this: this, dest: Vec2, x: number, y: number): Vec2;
      getMapFromScreenPos(this: this, dest: Vec2, x: number, y: number): Vec2;
      getMapFromScrollPos(this: this, dest: Vec2, x: number, y: number, offset: Vec2): Vec2;
      clear(this: this, fillStyle: CanvasRenderingContext2D['fillStyle']): void;
      startZoomedDraw(this: this): void;
      endZoomedDraw(this: this): void;
      setTimeFactor(this: this, factor: number): void;
      run(this: this): void;
      getBufferContext(this: this, buffer: HTMLCanvasElement): CanvasRenderingContext2D;
      error(this: this, error: Error): never;
      hasFocusLost(this: this): boolean;
      getDrawPos(this: this, x: number): number;
      createImageBuffer(this: this, width: number, height: number, callback: () => void): HTMLCanvasElement;
      setWindowFocus(this: this, value: boolean): void;
      callFocusListeners(this: this): void;
      clearCursorType(this: this): void;
      setCursorType(this: this, type: ig.System.CursorType): void;
      updateCursorClass(this: this): void;
      setCanvasSize(this: this, width: number, height: number, hideBorder?: boolean): void;
      setFocusLost(this: this): void;
      regainFocus(this: this): void;
      addFocusListener(this: this, listener: ig.System.FocusListener): void;
      removeFocusListener(this: this, listener: ig.System.FocusListener): void;
      setMasterVolume(this: this, volume: number): void;
      setSoundVolume(this: this, volume: number): void;
      setMusicVolume(this: this, volume: number): void;
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
