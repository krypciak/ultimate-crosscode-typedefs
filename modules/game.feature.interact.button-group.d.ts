// requires impact.feature.interact.button-interact

export {};

declare global {
  namespace sc {
    interface MouseButtonGroup extends ig.ButtonGroup {
      _counter: number;
      onButtonTraversal: unknown;

      addFocusGui(this: this, gui: ig.FocusGui): void;
      doButtonTraversal(this: this, regainFocus: boolean): void;
      isNonMouseMenuInput(this: this): false;
    }
    interface MouseButtonGroupConstructor extends ImpactClass<MouseButtonGroup> {
      new (): MouseButtonGroup;
    }
    var MouseButtonGroup: MouseButtonGroupConstructor;

    interface ButtonGroup extends ig.ButtonGroup {
      onButtonTraversal?(this: this): void;
      doButtonTraversal(this: this, inputRegainded: boolean): void;
    }
    interface ButtonGroupConstructor extends ImpactClass<ButtonGroup> {
      new (): sc.ButtonGroup;
    }
    var ButtonGroup: ButtonGroupConstructor;

    interface RowButtonGroup extends sc.ButtonGroup {
      rowIndex: number[];
      currentRow: number;
      _lastRowIndex: number;
      elements: sc.ButtonGui[][];

      addFocusGui(this: this, gui: ig.FocusGui, x: number, y: number): void;
      stepRight(this: this): void;
      stepLeft(this: this): void;
      stepDown(this: this): void;
      stepUp(this: this): void;
    }
    interface RowButtonGroupConstructor extends ImpactClass<RowButtonGroup> {
      new (): sc.RowButtonGroup;
    }
    var RowButtonGroup: RowButtonGroupConstructor;
  }
}
