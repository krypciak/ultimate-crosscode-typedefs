// requires impact.base.image
// requires impact.base.game
// requires impact.feature.storage.storage

export {};

declare global {
  namespace ig {
    interface GuiRenderer extends ig.Class {
      addGfx(
        this: this,
        gfx: ig.Image | ig.ImageAtlasFragment,
        posX: number,
        posY: number,
        srcX: number,
        srcY: number,
        sizeX: number,
        sizeY: number,
        flipX?: boolean,
        flipY?: boolean,
      ): ig.GuiDrawable;
      addColor(
        this: this,
        color: string,
        posX: number,
        posY: number,
        sizeX: number,
        sizeY: number,
      ): ig.GuiDrawable;
      addPattern(
        this: this,
        pattern: ig.ImagePattern,
        posX: number,
        posY: number,
        srcX: number,
        srcY: number,
        sizeX: number,
        sizeY: number,
      ): ig.GuiDrawable;
      addText(this: this, textBlock: ig.TextBlock, posX: number, posY: number): ig.GuiDrawable;

      addTransform(this: this): ig.GuiTransform;
      undoTransform(this: this): void;
    }
    interface GuiRendererConstructor extends ImpactClass<GuiRenderer> {
      new (): GuiRenderer;
    }

    interface Gui extends ig.GameAddon {
      guiHooks: ig.GuiHook[];
      namedGuiElements: Record<string, unknown>;
      renderer: ig.GuiRenderer;
      controlModule: sc.Control;

      onDeferredUpdate(this: this): void;
      createEventGui<Key extends keyof ig.GUI, S, T>(
        this: this,
        name: string,
        type: Key,
        settings: S,
        free?: boolean,
      ): T;
      spawnEventGui(this: this, gui: ig.GuiElementBase): void;
      freeEventGui(this: this, gui: ig.GuiElementBase): void;
      addGuiElement(this: this, guiElement: ig.GuiElementBase): void;
      removeGuiElement(this: this, guiElement: ig.GuiElementBase): void;
    }
    interface GuiConstructor extends ImpactClass<Gui> {
      new (): Gui;
    }
    var Gui: GuiConstructor;
    var gui: ig.Gui;

    enum GUI_ALIGN {
      Y_TOP,
      Y_CENTER,
      Y_BOTTOM,
      X_LEFT,
      X_CENTER,
      X_RIGHT,
    }

    namespace GuiHook {
      interface State {
        offsetX: number;
        offsetY: number;
        alpha: number;
        scaleX: number;
        scaleY: number;
        angle: number;
      }

      interface Transition {
        state: Partial<ig.GuiHook.State>;
        time: number;
        timeFunction: KeySpline;
      }

      interface SizeTransition {
        startWidth: number;
        width: number;
        startHeight: number;
        height: number;
        time: number;
        timeFunction: KeySpline;
        timer: number;
      }

      interface ScreenCoords {
        x: number;
        y: number;
        w: number;
        h: number;
        active: boolean;
        zIndex: number;
      }

      interface AnimTargetState {
        targetState: unknown;
        initState: unknown;
        timer: number;
        maxTime: number;
        timeFunction: KeySpline;
      }

      interface PosTransition {
        startX: number;
        startY: number;
        x: number;
        y: number;
        time: number;
        timeFunction: KeySpline;
        endCallback?: () => void;
      }
    }
    interface GuiHook extends ig.Class {
      pos: Vec2;
      size: Vec2;
      pivot: Vec2;
      scroll: Vec2;
      align: { x: ig.GUI_ALIGN; y: ig.GUI_ALIGN };
      parentHook: Nullable<ig.GuiHook>;
      children: ig.GuiHook[];
      mouseRecord: boolean;
      screenCoords?: ig.GuiHook.ScreenCoords;
      mouseOver: boolean;
      localAlpha: number;
      zIndex: number;
      pauseGui: boolean;
      invisibleUpdate: boolean;
      screenBlocking: boolean;
      stateCallback: Nullable<() => void>;
      clip: boolean;
      temporary: boolean;
      transitions: { [name: string]: ig.GuiHook.Transition };
      gui: ig.GuiElementBase;
      currentState: ig.GuiHook.State;
      currentStateName: string;
      anim: ig.GuiHook.AnimTargetState;
      removeAfterTransition: boolean;
      posTransition: ig.GuiHook.PosTransition;
      scrollTransition: ig.GuiHook.PosTransition;
      _visible: boolean;
      _subState: { subtreeTransition: boolean };
      mapGuiInfo?: { name: string; type: keyof ig.GUI; settings: any; free?: boolean };
      drawSteps: ig.GuiDrawable[];

      setMouseRecord(this: this, value: boolean): void;
      onAttach(this: this, newParentHook?: Nullable<ig.GuiHook>): void;
      onDetach(this: this): void;
      getChildGuiIndex(this: this, hook: ig.GuiHook): number;
      getChildGuiByIndex(this: this, index: number): ig.GuiHook;
      addChildHook(this: this, hook: ig.GuiHook): void;
      insertChildHook(this: this, hook: ig.GuiHook, index: number): void;
      removeChildHook(this: this, hook: ig.GuiHook): void;
      removeChildHookByIndex(this: this, index: number): ig.GuiHook;
      removeAllChildren(this: this): void;
      doStateTransition(
        this: this,
        name: string,
        skipTransition?: boolean,
        removeAfter?: boolean,
        callback?: Nullable<() => void>,
        initDelay?: number,
      ): void;
      getStateTransitionProgress(this: this): unknown;
      doTempStateTransition(
        this: this,
        stateData: Partial<ig.GuiHook.State>,
        time: number,
        keySpline: KeySpline,
        skipTransition?: boolean,
        removeAfter?: boolean,
        callback?: Nullable<() => void>,
        initDelay?: number,
      ): void;
      setScale(this: this, scaleX: number, scaleY: number): void;
      _setStateData(
        this: this,
        stateData: Partial<ig.GuiHook.State>,
        time: number,
        keySpline: KeySpline,
        skipTransition?: boolean,
        removeAfter?: boolean,
        callback?: Nullable<() => void>,
        initDelay?: number,
      ): void;
      doPosTranstition(
        this: this,
        x: number,
        y: number,
        time?: number,
        timeFunction?: KeySpline,
        initDelay?: number,
        preserveTime?: boolean,
        endCallback?: () => void,
      ): void;
      getPosTransitionProgress(this: this): number;
      doScrollTransition(
        this: this,
        x: number,
        y: number,
        time: number,
        timeFunction?: KeySpline,
        endCallback?: Nullable<() => void>,
      ): void;
      hasTransition(this: this): boolean;
      getTransitionFactor(this: this): number;
      setStateValue(
        this: this,
        state: string,
        attribute: keyof ig.GuiHook.State,
        value: number,
      ): void;
    }
    interface GuiHookConstructor extends ImpactClass<GuiHook> {}
    var GuiHook: GuiHookConstructor;

    interface GuiDrawable extends ig.Class {
      setAlpha(this: this, alpha: number): this;
      setCompositionMode(this: this, mode: string): this;
    }
    interface GuiDrawableConstructor extends ImpactClass<GuiDrawable> {}
    var GuiDrawable: GuiDrawableConstructor;

    interface GuiTransform extends ig.Class {
      translate: Vec2;
      scale: Vec2;
      rotate: number;
      pivot: Vec2;
      alpha: number;
      clip: Vec2;
      prePos: Vec2;
      preAlpha: number;

      setAlpha(this: this, alpha: number): this;
      setClip(this: this, x: number, y: number): this;
      setTranslate(this: this, x: number, y: number): this;
      setScale(this: this, x: number, y: number): this;
      setRotate(this: this, r: number): this;
      isComplex(this: this): boolean;
      transform(this: this, x: number, y: number): void;
      kill(this: this): void;
      clear(this: this): void;
    }
    interface GuiTransformConstructor extends ImpactClass<GuiTransform> {}
    var GuiTransform: GuiTransformConstructor;

    namespace GuiElementBase {
      namespace Annotation {
        interface Content {
          title: string;
          description: string;
        }

        interface Offset {
          x: number;
          y: number;
        }

        interface Size {
          x: number | 'dyn';
          y: number | 'dyn';
          offX?: number;
          offY?: number;
        }

        interface Index {
          x: number;
          y: number;
        }
      }
      interface Annotation {
        content: Annotation.Content;
        offset?: Annotation.Offset;
        size?: Annotation.Size;
        index?: Annotation.Index;
        type?: keyof sc.HELP_ANNO_TYPE;
      }
    }

    interface GuiElementBase extends ig.Class {
      transitions: { [name: string]: ig.GuiHook.Transition };
      hook: ig.GuiHook;
      annotation?: GuiElementBase.Annotation;

      setPos(this: this, x?: number, y?: number): void;
      getDestPos(this: this): Vec2;
      setScroll(this: this, x: number, y: number): void;
      getDestScroll(this: this): Vec2;
      setSize(this: this, w: number, h: number): void;
      setPivot(this: this, x: number, y: number): void;
      setAlign(this: this, x: ig.GUI_ALIGN, y: ig.GUI_ALIGN): void;
      isVisible(this: this): boolean;
      getChildGuiIndex(this: this, gui: ig.GuiElementBase): number;
      getChildGuiByIndex(this: this, index: number): ig.GuiHook;
      addChildGui(this: this, guiElement: ig.GuiElementBase): void;
      insertChildGui(this: this, guiElement: ig.GuiElementBase, index: number): void;
      removeChildGui(this: this, guiElement: ig.GuiElementBase): void;
      removeChildGuiByIndex(this: this, index: number): ig.GuiElementBase;
      removeAllChildren(this: this): void;
      update(this: this): void;
      updateDrawables(this: this, renderer: ig.GuiRenderer): void;
      remove(this: this, immediately?: boolean): void;
      onAttach?(this: this): void;
      onDetach?(this: this): void;
      // For whatever reason if I change type of `onVisibilityChange` to field
      // which contains a callback this will confuse the TS compiler and I won't
      // be able to cast children of `ig.GuiElementBase` to the base class.
      // Probably because TS can't upgrade `this` type in sub-interfaces when it
      // is specified in a callback.
      onVisibilityChange?(this: this, visible: boolean): void;
      isMouseOver?(this: this): boolean;
      hide(this: this, ...args: unknown[]): void;
      show(this: this, ...args: unknown[]): void;
      doStateTransition(
        this: this,
        name: string,
        skipTransition?: boolean,
        removeAfter?: boolean,
        callback?: Nullable<() => void>,
        initDelay?: number,
      ): void;
      doTempStateTransition(
        this: this,
        stateData: Partial<ig.GuiHook.State>,
        time: number,
        keySpline: KeySpline,
        skipTransition?: boolean,
        removeAfter?: boolean,
        callback?: Nullable<() => void>,
        initDelay?: number,
      ): void;
      doPosTranstition(
        this: this,
        x: number,
        y: number,
        time?: number,
        timeFunction?: KeySpline,
        initDelay?: number,
        preserveTime?: boolean,
        endCallback?: () => void,
      ): void;
      doScrollTransition(
        this: this,
        x: number,
        y: number,
        time: number,
        timeFunction?: KeySpline,
        endCallback?: Nullable<() => void>,
      ): void;
      hasTransition(this: this): boolean;
      getTransitionFactor(this: this): number;
      setStateValue(
        this: this,
        state: string,
        attribute: keyof ig.GuiHook.State,
        value: number,
      ): void;
      updateState(this: this): boolean;
    }
    interface GuiElementBaseConstructor extends ImpactClass<GuiElementBase> {
      new (): GuiElementBase;
    }
    var GuiElementBase: GuiElementBaseConstructor;
  }
}
