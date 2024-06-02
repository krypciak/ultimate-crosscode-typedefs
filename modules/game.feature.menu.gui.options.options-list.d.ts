// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.gui.base.text
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.item.item-list
// requires game.feature.menu.gui.options.options-types

export {};

declare global {
  namespace sc {
    var keyBinderGui: Nullable<sc.KeyBinderGui>;

    namespace OptionsTabBox {
      interface Tabs {
        general: sc.ItemTabbedBox.TabButton;
        interface: sc.ItemTabbedBox.TabButton;
        video: sc.ItemTabbedBox.TabButton;
        audio: sc.ItemTabbedBox.TabButton;
        controls: sc.ItemTabbedBox.TabButton;
        assists: sc.ItemTabbedBox.TabButton;
        arena: sc.ItemTabbedBox.TabButton;
      }
    }
    namespace OptionsTabBox {
      interface ButtonData {
        type: sc.OPTION_CATEGORY;
      }
      interface TabButton extends sc.ItemTabbedBox {
        data: ButtonData
      }
    }
    interface OptionsTabBox extends ig.GuiElementBase {
      prevIndex: number;
      tabs: OptionsTabBox.Tabs;
      tabArray: sc.OptionsTabBox.TabButton[];
      tabGroup: sc.ButtonGroup;
      rows: (sc.OptionInfoBox | sc.OptionRow)[];
      rowButtonGroup: sc.RowButtonGroup;
      tabContent: {
        buttonGroup: Nullable<sc.OptionsTabBox['rowButtonGroup']>;
        list: Nullable<sc.OptionsTabBox['list']>;
        rows: Nullable<sc.OptionsTabBox['rows']>;
      }[];
      list: sc.ButtonListBox;
      prevPressed: sc.OptionsTabBox.TabButton;
      menuScanLines: sc.MenuScanLines;

      showMenu(this: this): void;
      _createOptionList(this: this, tabIndex: number): void;
      _rearrangeTabs(this: this): void;
      _createTabButton(
        this: this,
        name: string,
        x: number,
        type: sc.OPTION_CATEGORY,
      ): sc.OptionsTabBox.TabButton;
      _createOptionList(this: this, tabIndex: number): void;
    }
    interface OptionsTabBoxConstructor extends ImpactClass<OptionsTabBox> {
      new (isLocal: boolean): OptionsTabBox;
    }
    var OptionsTabBox: OptionsTabBoxConstructor;
  }
}
