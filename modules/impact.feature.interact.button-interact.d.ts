// requires impact.feature.interact.interact

export {};

declare global {
  namespace ig {
    enum BUTTON_GROUP_SELECT_TYPE {
      ALL = 0,
      VERTICAL = 1,
      HORIZONTAL = 2,
    }
    namespace ButtonGroup {
      type PressCallback = (button?: ig.FocusGui, fromMouse?: boolean) => void;
      type SelectionCallback = (button?: ig.FocusGui) => void;
    }
    interface ButtonGroup extends ig.Class {
      buttonInteract: ig.ButtonInteractEntry;
      elements: ig.FocusGui[][];
      selectionCallbacks: ig.ButtonGroup.SelectionCallback[];
      pressCallbacks: ig.ButtonGroup.PressCallback[];
      mouseFocusLostCallback: () => void;
      backButton: sc.ButtonGui;
      current: Vec2;
      regain: Vec2;
      largestIndex: Vec2;
      loopButtons: boolean;
      soundsOnPressed: boolean;
      enableMultiPressed: boolean;
      ignoreActiveFocus: boolean;
      selectionType: ig.BUTTON_GROUP_SELECT_TYPE;
      _lastInvokedPress: sc.ButtonGui;
      _isParallel: boolean;
      sounds: { focus: ig.Sound };

      addFocusGui(this: this, gui: ig.FocusGui, x: number, y: number, asBackButton?: boolean): void;
      fillEmptySpace(this: this): void;
      insertFocusGui(this: this, gui: ig.FocusGui, x: number, y: number): void;
      removeFocusGui(this: this, x: number, y: number): void;
      addNull(this: this, x: number, y: number): void;
      makeEmptyGrid(this: this, toX: number, toY: number): void;
      invokeCurrentButton(this: this): void;
      invokeBackButton(this: this): void;
      setMouseFocusLostCallback(this: this, callback: () => void): void;
      addPressCallback(this: this, callback: ig.ButtonGroup.PressCallback): void;
      removePressCallback(this: this, callback: ig.ButtonGroup.PressCallback | undefined): void;
      addSelectionCallback(this: this, callback: ig.ButtonGroup.SelectionCallback): void;
      removeSelectionCallback(
        this: this,
        callback: ig.ButtonGroup.SelectionCallback | undefined,
      ): void;
      clearSelectionCallbacks(this: this): void;
      stepRight(this: this): void;
      stepLeft(this: this): void;
      stepDown(this: this, amount?: number): void;
      stepUp(this: this, amount?: number): void;
      _activate(this: this): void;
      _deactivate(this: this): void;
      clear(this: this): void;
      doButtonTraversal(this: this, regainFocus: boolean): void;
      getCurrentElement(this: this): ig.FocusGui;
      getElementAt(this: this, x: number, y: number): Nullable<ig.FocusGui> | undefined;
      getYElementAt(this: this, y: number): Nullable<ig.FocusGui> | undefined;
      isNonMouseMenuInput(this: this): boolean;
      isEmpty(this: this): boolean;
      isPositionValid(this: this, x: number, y: number): boolean;
      isActive(this: this): boolean;
      setLastInvokedButton(this: this, button: sc.ButtonGui): void;
      setMouseOverGui(this: this): void;
      setCurrentFocus(this: this, x: number, y: number): void;
      setRegainFocus(this: this, x: number, y: number): void;
      focusCurrentButtonX(this: this, x: number): void;
      focusCurrentButtonY(this: this, y: number): void;
      focusCurrentButton(
        this: this,
        newX: number,
        newY: number,
        ignoreCallbacks?: Nullable<boolean>,
        ignoreSounds?: Nullable<boolean>,
        ignoreIfSame?: Nullable<boolean>,
        ignoreEmptyCells?: Nullable<boolean>,
      ): void;
      regainFocusOnKeyboard(this: this, ignoreCallbacks?: Nullable<boolean>): void;
      unfocusCurrentButton(this: this): void;
      getCurrentX(this: this): number;
      getCurrentY(this: this): number;
      setPressedFocusGui(this: this, button: sc.ButtonGui): void;
      _setBackButton(this: this, button: sc.ButtonGui): void;
      _invokeSelectionCallbacks(this: this, button?: ig.FocusGui): void;
      _invokePressCallbacks(this: this, button: ig.FocusGui, fromMouse?: boolean): void;
    }
    interface ButtonGroupConstructor extends ImpactClass<ButtonGroup> {}
    var ButtonGroup: ButtonGroupConstructor;

    interface ButtonInteractEntry extends ig.InteractEntry {
      buttonGroupStack: sc.ButtonGroup[];

      pushButtonGroup(this: this, buttonGroup: ig.ButtonGroup): void;
      addGlobalButton(
        this: this,
        button: sc.ButtonGui,
        hotkeyCallback: () => boolean,
        noDoubles?: Nullable<boolean>,
      ): void;
      removeGlobalButton(this: this, button: sc.ButtonGui): void;
      addParallelGroup(this: this, buttongroup: sc.ButtonGroup): void;
      removeParallelGroup(this: this, buttongroup: sc.ButtonGroup): void;
      clearAllButtons(this: this): void;
      removeButtonGroup(this: this, buttongroup: sc.ButtonGroup): void;
    }
    interface ButtonInteractEntryConstructor extends ImpactClass<ButtonInteractEntry> {
      new (): ButtonInteractEntry;
    }
    var ButtonInteractEntry: ButtonInteractEntryConstructor;
  }
}
