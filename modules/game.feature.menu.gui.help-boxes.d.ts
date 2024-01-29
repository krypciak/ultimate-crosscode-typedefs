// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.boxes
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface HelpScrollContainer extends ig.GuiElementBase {
      scrollPane: sc.ScrollPane;
      content: ig.GuiElementBase;

      setElement(this: this, gui: ig.GuiElementBase): void;
      scroll(this: this, value: number, skipTransition?: boolean): void;
      getScrollY(this: this): number;
      clear(this: this): void;
      _updateContentHeight(this: this): void;
    }
    interface HelpScrollContainerConstructor extends ImpactClass<HelpScrollContainer> {
      new (): HelpScrollContainer;
    }
    var HelpScrollContainer: HelpScrollContainerConstructor;

    interface MultiPagePageCounter extends ig.GuiElementBase {
      count: sc.NumberGui;
      max: sc.NumberGui;

      setCount(this: this, count: number): void;
      setMax(this: this, max: number): void;
    }
    interface MultiPagePageCounterConstructor extends ImpactClass<MultiPagePageCounter> {
      new (width: number): MultiPagePageCounter;
    }
    var MultiPagePageCounter: MultiPagePageCounterConstructor;

    namespace MultiPageBoxGui {
      interface Page {
        header?: Optional<string>;
        title?: Optional<string>;
        content: string[]
        isList?: boolean;
      }
      interface ConditionalPage extends Page {
        condition?: string;
      }
    }
    interface MultiPageBoxGui extends ig.GuiElementBase {
      msgBox: sc.CenterBoxGui;
      content: ig.GuiElementBase;
      header: sc.TextGui;
      buttonInteract: ig.ButtonInteractEntry;
      buttonGroup: sc.ButtonGroup;
      defaultHeaderText: string;
      linePadding: number;
      listPadding: number;
      turnLeft: sc.ButtonGui;
      turnRight: sc.ButtonGui;
      pageCounter: sc.MultiPagePageCounter;
      pages: sc.MultiPageBoxGui.Page[];
      curPage: number;
      backSound: ig.Sound;
      _width: number;
      scrollContainer: sc.HelpScrollContainer;

      openMenu(this: this): void;
      closeMenu(this: this): void;
      addPage(this: this, header: string, content: string, isList?: boolean): void;
      addPages(this: this, pages: sc.MultiPageBoxGui.ConditionalPage[]): void;
      setDefaultHeaderText(this: this, header: string): void;
      _setPage(this: this, index: number): void;
      addListEntry(this: this, langLabel: string, parent: ig.GuiElementBase, y: number): number;
      _createInitContent(this: this, width: number): void;
      onTurnLeftCheck(this: this): boolean;
      onTurnRightCheck(this: this): boolean;
    }
    interface MultiPageBoxGuiConstructor extends ImpactClass<MultiPageBoxGui> {}
    var MultiPageBoxGui: MultiPageBoxGuiConstructor;
  }
}
