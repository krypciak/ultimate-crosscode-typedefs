// requires impact.base.image
// requires impact.base.event
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.button-interact
// requires game.feature.control.control
// requires game.feature.gui.base.button
// requires game.feature.gui.base.boxes
// requires game.feature.gui.base.numbers
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface ChangeLogScrollContainer extends ig.GuiElementBase {
      scrollPane: sc.ScrollPane;
      content: ig.GuiElementBase;

      setElement(this: this, gui: ig.GuiElementBase): void;
      scroll(this: this, amount: number, skipTransition?: boolean): void;
      getScrollY(this: this): number;
      clear(this: this): void;
      _updateContentHeight(this: this): void;
    }
    interface ChangeLogScrollContainerConstructor extends ImpactClass<ChangeLogScrollContainer> {
      new (): ChangeLogScrollContainer;
    }
    var ChangeLogScrollContainer: ChangeLogScrollContainerConstructor;

    interface PrevNextText extends ig.GuiElementBase {
      icon: sc.TextGui;
      text: sc.TextGui;
      active: boolean;
    }
    interface PrevNextTextConstructor extends ImpactClass<PrevNextText> {
      new (text: sc.TextGui, iconText: sc.TextLike, swapIconAndTextPos?: boolean): PrevNextText;
    }
    var PrevNextText: PrevNextTextConstructor;

    interface ChangelogGui extends ig.GuiElementBase {
      msgBox: sc.CenterBoxGui;
      content: ig.GuiElementBase;
      back: sc.ButtonGui;
      browseLeft: sc.PrevNextText;
      browserRight: sc.PrevNextText;
      scrollContainer: sc.ChangeLogScrollContainer;
      header: sc.TextGui;
      compiledButton: sc.ButtonGui;
      buttonInteract: ig.ButtonInteractEntry;
      buttonGroup: sc.ButtonGroup;
      compiledMode: boolean;
      compileList: unknown[];
      compileEntry: unknown;
      logs: unknown[];
      currentIndex: number;

      showLog(this: this): void;
      hideLog(this: this): void;
      clearLogs(this: this): void;
      setHeaderText(this: this, name: string, version: string): void;
      onBackButtonCheck(this: this): boolean;
      onCompileButtonCheck(this: this): boolean;
      onToggleCompileMode(this: this): void;
      onLeftPressed(this: this): void;
      onRightPressed(this: this): void;
      setCompiledList(this: this): void;
      setLogEntry(this: this, entry: unknown): void;
      createHeaderEntry(
        this: this,
        dest: ig.GuiElementBase,
        y: number,
        name: string,
        color: string,
        center?: boolean,
      ): number;
      createTextEntry(
        this: this,
        dest: ig.GuiElementBase,
        y: number,
        name: string[],
        asBugFix?: boolean,
      ): number;
      createLogEntries(this: this): void;
      createContent(this: this): void;
    }
    interface ChangelogGuiConstructor extends ImpactClass<ChangelogGui> {
      new (): ChangelogGui;
    }
    var ChangelogGui: ChangelogGuiConstructor;
  }
}
