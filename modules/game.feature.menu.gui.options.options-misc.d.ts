// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface KeyBinderGui extends ig.ColorGui {
      box: sc.BlackWhiteBox;
      button: sc.ButtonGui;
      back: sc.ButtonGui;

      show(
        this: this,
        finishCallback: (keyCode: number | null, isAlternative: boolean, unbind: boolean) => void,
        forAction: string,
        isAlternative: boolean,
      ): void;
    }
    interface KeyBinderGuiConstructor extends ImpactClass<KeyBinderGui> {
      new (): KeyBinderGui;
    }
    var KeyBinderGui: KeyBinderGuiConstructor;

    interface OptionSlider extends sc.Slider {
      fill: boolean;
      focus: boolean;
    }
    interface OptionSliderConstructor extends ImpactClass<OptionSlider> {
      new (a: unknown, b: unknown, c: unknown, d: unknown): OptionSlider;
    }
    var OptionSlider: OptionSliderConstructor;

    interface OptionThumb extends ig.GuiElementBase {
      thumbNinePatch: ig.NinePatch;
      currentOffset: string;
      slider: sc.OptionFocusSlider;
      drag: boolean;
      wasDragged: boolean;
      starValue: number;
      _startPos: Vec2;
    }
    interface OptionThumbConstructor extends ImpactClass<OptionThumb> {
      new (slider: sc.OptionFocusSlider): OptionThumb;
    }
    var OptionThumb: OptionThumbConstructor;

    interface OptionFocusSlider extends ig.FocusGui {
      slider: sc.OptionSlider;
      thumb: sc.OptionThumb;
      snap: boolean;
      clickSound: ig.Sound;
      _hasKeyboardFocus: boolean;
      changeCallback: (value: number) => void;
      _buttonGroup: Nullable<ig.ButtonGroup>;
      data?: string; // set by other classes

      setPreferredThumbSize(this: this, width: number, height: number): void;
      setSize(this: this, x: number, y: number, sliderHeight?: number): void;
      setValue(this: this, value: number): void;
      getValue(this: this): number;
      setMinMaxValue(this: this, min: number, max: number): void;
    }
    interface OptionFocusSliderConstructor extends ImpactClass<OptionFocusSlider> {
      new (
        changeCallback: (value: number) => void,
        snap?: boolean,
        fill?: boolean,
        buttonGroup?: ig.ButtonGroup,
      ): OptionFocusSlider;
    }
    var OptionFocusSlider: OptionFocusSliderConstructor;

    interface OptionLangPopUp extends ig.BoxGui {
      buttongroup: sc.ButtonGroup;
      buttons: Record<sc.LANGUAGE, sc.ButtonGui>;
      active: boolean;

      createButtons(this: this): void;
      show(this: this, anchor: sc.OPTION_GUIS_DEFS.LANGUAGE, callback?: () => void): void;
    }
    interface OptionLangPopUpConstructor extends ImpactClass<OptionLangPopUp> {
      new (): OptionLangPopUp;
    }
    var OptionLangPopUp: OptionLangPopUpConstructor;
  }
}
