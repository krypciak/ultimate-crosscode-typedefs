// requires impact.feature.interact.button-interact

export {};

declare global {
  namespace sc {
    interface MouseButtonGroup extends ig.ButtonGroup {
      _counter: number;
      onButtonTraversal?: () => void;

      addFocusGui(this: this, gui: ig.FocusGui): void;
    }
    interface MouseButtonGroupConstructor extends ImpactClass<MouseButtonGroup> {
      new (): MouseButtonGroup;
    }
    var MouseButtonGroup: MouseButtonGroupConstructor;

    interface ButtonGroup extends ig.ButtonGroup {
      onButtonTraversal?: () => void;
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
      leftRightCallback: (stepRight: boolean, row: number) => void;

      addFocusGui(this: this, gui: ig.FocusGui, x: number, y: number): void;
      setLeftRightCallback(this: this, callback: sc.RowButtonGroup['leftRightCallback']): void;
      regainCurrentFocus(
        this: this,
        ignoreCallbacks?: boolean,
        ignoreSounds?: boolean,
        ignoreIfSame?: boolean,
      ): void;
      stepDown(this: this): void;
      stepUp(this: this): void;
    }
    interface RowButtonGroupConstructor extends ImpactClass<RowButtonGroup> {
      new (): sc.RowButtonGroup;
    }
    var RowButtonGroup: RowButtonGroupConstructor;
  }
}
