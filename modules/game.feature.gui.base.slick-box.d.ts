// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface SlickTitleGui extends ig.BoxGui {
      text: null /* unset */;
    }
    interface SlickTitleGuiConstructor extends ImpactClass<SlickTitleGui> {
      new (text: sc.TextLike, right?: boolean, flipped?: Nullable<boolean>): SlickTitleGui;
    }
    var SlickTitleGui: SlickTitleGuiConstructor;

    interface SlickBoxRawGui extends ig.BoxGui {}
    interface SlickBoxRawGuiConstructor extends ImpactClass<SlickBoxRawGui> {}
    var SlickBoxRawGui: SlickBoxRawGuiConstructor;

    interface SlickBoxGui extends sc.SlickBoxRawGui {
      paddingX: number;
      paddingY: number;
      minWidth: number;
      subGui: unknown;

      setContent(this: this, subGui: ig.GuiElementBase): void;
    }
    interface SlickBoxGuiConstructor extends ImpactClass<SlickBoxGui> {
      new (
        subGui: ig.GuiElementBase,
        flipped?: boolean,
        paddingX?: number,
        paddingY?: number,
        minWidth?: number,
      ): SlickBoxGui;
    }
    var SlickBoxGui: SlickBoxGuiConstructor;
  }
}
