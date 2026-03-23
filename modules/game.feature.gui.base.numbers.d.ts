// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface NumberSize {
      x: number;
      y: number;
      width: number;
      height: number;
      dotX?: number;
      commaOffset?: number;
      dotSize?: number;
    }

    interface NUMBER_SIZE {
      NORMAL: NumberSize;
      TINY: NumberSize;
      LARGE: NumberSize;
      TEXT: NumberSize;
      SMALL: NumberSize;
      CHAIN: NumberSize;
    }
    var NUMBER_SIZE: NUMBER_SIZE;

    enum GUI_NUMBER_COLOR {
      WHITE = 0,
      RED = 1,
      GREEN = 2,
      GREY = 3,
      ORANGE = 4,
      NO_SHADOW = 5,
    }

    namespace NumberGui {
      interface Settings {
        size?: Nullable<sc.NumberSize>;
        color?: Nullable<sc.GUI_NUMBER_COLOR>;
        signed?: Nullable<boolean>;
        transitionTime?: Nullable<number>;
        transitionScale?: Nullable<number>;
        showPlus?: Nullable<boolean>;
        noZero?: Nullable<boolean>;
        leadingZeros?: Nullable<boolean>;
        scramble?: Nullable<boolean>;
        dots?: Nullable<boolean>;
        zeroAsGrey?: Nullable<boolean>;
      }
    }
    // @ts-expect-error NumberGui#setSize overrides ig.GuiElementBase#setSize
    // and does something different with different arguemnts
    interface NumberGui extends ig.GuiElementBase {
      gfx: ig.Image;
      maxNumber: number;
      digits: number;
      realDigits: number;
      signed: boolean;
      showPlus: boolean;
      metrics: sc.NumberSize;
      color: sc.GUI_NUMBER_COLOR;
      targetNumber: number;
      initNumber: number;
      numTransitionTime: number;
      numTransitionScale: number;
      timer: ig.WeightTimer;
      noZero: boolean;
      leadingZeros: number;
      showPlusOnZero: boolean;
      scramble: boolean;
      dots: boolean;
      zeroAsGrey: boolean;

      setSize(this: this, size: sc.NumberSize): void;
      setNumber(this: this, number: number, skipTransition?: Nullable<boolean>): void;
      getNumber(this: this): number;
      setMaxNumber(this: this, number: number): void;
      setColor(this: this, color: sc.GUI_NUMBER_COLOR): void;
      _getCurrentNumber(this: this): number;
    }
    interface NumberGuiConstructor extends ImpactClass<NumberGui> {
      new (maxValue: number, settings?: sc.NumberGui.Settings): sc.NumberGui;
    }
    var NumberGui: NumberGuiConstructor;

    interface MaxNumberGui extends ig.GuiElementBase {
      gfx: ig.Image;
      currentNumberGui: sc.NumberGui;
      maxNumberGui: sc.NumberGui;

      getMaxNumber(this: this): number;
      setMaxNumber(this: this, max: number, skipTransition?: Nullable<boolean>): void;
      setNumber(this: this, number: number, skipTransition?: Nullable<boolean>): void;
    }
    interface MaxNumberGuiConstructor extends ImpactClass<MaxNumberGui> {
      new (max: number, transitionTime?: number): MaxNumberGui;
    }
    var MaxNumberGui: MaxNumberGuiConstructor;
  }
}
