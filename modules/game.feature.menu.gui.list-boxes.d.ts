// requires impact.feature.gui.gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    enum LIST_COLUMNS {
      ONE = 1,
      TWO = 2,
    }

    interface ButtonListBox extends sc.ScrollPane {
      buttonGroup: sc.ButtonGroup;
      contentPane: ig.GuiElementBase;
      paddingTop: number;
      paddingBetween: number;
      columnPadding: number;
      buttonWidth: number;
      useShoulderScroll: boolean;
      forceLastScroll: boolean;
      buttonInteract: ig.ButtonInteractEntry;
      pageSize: number;
      offsets: Vec2;
      columns: sc.LIST_COLUMNS;
      _prevIndex: number;
      _skipFirst: boolean;
      _prevScrollBarHeight: number;

      setButtonGroup(this: this, buttonGroup: sc.ButtonGroup): void
      activate(this: this, buttonInteract?: Nullable<ig.ButtonInteractEntry>): void;
      deactivate(this: this, buttonInteract?: Nullable<ig.ButtonInteractEntry>): void;
      addButton(
        this: this,
        button: ig.GuiElementBase,
        skipButtonGroup: true,
        xOffset?: Nullable<number>,
        yOffset?: Nullable<number>,
      ): void;
      addButton(
        this: this,
        button: ig.FocusGui,
        skipButtonGroup?: Nullable<false>,
        xOffset?: Nullable<number>,
        yOffset?: Nullable<number>,
      ): void;
      clear(this: this, skip?: Nullable<boolean>): void;
      scrollToY(this: this, y: number, b: boolean): void;
      _getContentHeight(this: this, isNotFirstColumn?: boolean): number;
    }
    interface ButtonListBoxConstructor extends ImpactClass<ButtonListBox> {
      new (
        paddingTop?: number,
        paddingBetween?: number,
        pageSize?: number,
        columns?: sc.LIST_COLUMNS,
        columnPadding?: number,
        buttonWidth?: number,
        buttonInteract?: ig.ButtonInteractEntry,
      ): ButtonListBox;
    }
    var ButtonListBox: ButtonListBoxConstructor;

    interface ItemListBox extends ig.GuiElementBase {
      list: sc.ButtonListBox;

      clear(this: this, skip?: Nullable<boolean>): void;
      addButton(this: this, gui: ig.FocusGui): void;
      getChildren(this: this): ig.FocusGui[];
    }
    interface ItemListBoxConstructor extends ImpactClass<ItemListBox> {
      new (
        topPadding: number,
        noHeader: boolean,
        buttonInteract: ig.ButtonInteractEntry,
      ): ItemListBox;
    }
    var ItemListBox: ItemListBoxConstructor;

    interface MultiColumnItemListBox extends ig.GuiElementBase {
      list: sc.ButtonListBox;

      addButton(this: this, button: sc.ListBoxButton): void;
      clear(this: this, refocus: boolean): void;
      buttonGroup(this: this): sc.ButtonGroup;
    }
    interface MultiColumnItemListBoxConstructor extends ImpactClass<MultiColumnItemListBox> {
      new (b: number, a: number, columns: sc.LIST_COLUMNS, c: number): sc.MultiColumnItemListBox;
    }
    var MultiColumnItemListBox: MultiColumnItemListBoxConstructor;
  }
}
