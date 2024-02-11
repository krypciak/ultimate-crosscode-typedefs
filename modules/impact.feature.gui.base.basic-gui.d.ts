// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    interface ImageGui extends ig.GuiElementBase {
      image?: Nullable<ig.Image>;
      offsetX: number;
      offsetY: number;
      renderMode?: Nullable<string>;
      flipX: boolean;
      flipY: boolean;
      pivotOverride: boolean;

      setImage(
        this: this,
        image: ig.Image,
        offsetX?: Nullable<number>,
        offsetY?: Nullable<number>,
        width?: Nullable<number>,
        height?: Nullable<number>,
      ): void;
    }
    interface ImageGuiConstructor extends ImpactClass<ImageGui> {
      new (
        image?: Nullable<ig.Image>,
        offsetX?: Nullable<number>,
        offsetY?: Nullable<number>,
        width?: Nullable<number>,
        height?: Nullable<number>,
      ): ig.ImageGui;
    }
    var ImageGui: ImageGuiConstructor;

    interface ColorGui extends ig.GuiElementBase {
      color: string;
      renderMode?: Nullable<string>;
    }
    interface ColorGuiConstructor extends ImpactClass<ColorGui> {
      new (color: string, width: number, height: number): ColorGui;
    }
    var ColorGui: ColorGuiConstructor;

    enum SEQUENCE_MSG {
      LABEL_REACHED = 1,
      ENDED = 2,
    }

    interface SequenceGui extends ig.GuiElementBase {
      timer: number;
      timeLineIndex: number;
      gfx: Record<string, ig.Image>;
      gui: Record<string, unknown>;
      timeLine: unknown[];
      reachedLabels: string[];
      currentSkipLabel: unknown;
      callback: (msg: ig.SEQUENCE_MSG, labelReached?: string) => void;

      initTimeLine(
        this: this,
        gfx: Record<string, ig.Image>,
        gui: Record<string, unknown>,
        timeLine: unknown[],
      ): void;
      _setLabelReached(this: this, label: string): void;
      start(this: this): void;
      end(this: this): void;
      notifyCallback(this: this, msg: ig.SEQUENCE_MSG, labelReached?: string): void;
      skip(this: this): void;
      jumpTo(this: this, label: string): void;
      hasEnded(this: this): boolean;
      isLabelReached(this: this, label: string): boolean;
    }
    interface SequenceGuiConstructor extends ImpactClass<SequenceGui> {
      new (callback: (msg: ig.SEQUENCE_MSG, labelReached?: String) => void): SequenceGui;
    }
    var SequenceGui: SequenceGuiConstructor;

    interface SimpleGui extends ig.GuiElementBase {
      hide(this: this, skip?: boolean, initDelay?: number): void;
      show(this: this, skip?: boolean, initDelay?: number): void;
    }
    interface SimpleGuiConstructor extends ImpactClass<SimpleGui> {
      new (): SimpleGui;
    }
    var SimpleGui: SimpleGuiConstructor;
  }
}
