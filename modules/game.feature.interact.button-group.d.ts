// requires impact.feature.interact.button-interact

export {};

declare global {
  namespace sc {
    interface ButtonGroup extends ig.ButtonGroup {
      
    }
    interface ButtonGroupConstructor extends ImpactClass<ButtonGroup> {
      new (): sc.ButtonGroup;
    }
    var ButtonGroup: ButtonGroupConstructor;

    interface RowButtonGroup extends sc.ButtonGroup {
      rowIndex: number[]
      currentRow: number
      _lastRowIndex: number

      elements: ig.FocusGui[][];
      addFocusGui(this: this, gui: ig.FocusGui, x: number, y: number): void;
      stepRight(this: this): void;
      stepLeft(this: this): void;
      stepDown(this: this): void;
      stepUp(this: this): void;
    }
    interface RowButtonGroupConstructor extends ImpactClass<RowButtonGroup> {
      new (): sc.RowButtonGroup
    }
    var RowButtonGroup: RowButtonGroupConstructor;
  }
}
