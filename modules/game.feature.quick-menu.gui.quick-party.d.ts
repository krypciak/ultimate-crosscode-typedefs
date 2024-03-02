// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.interact.button-group
// requires game.feature.menu.gui.list-boxes
// requires game.feature.menu.gui.menu-misc
// requires game.feature.quick-menu.gui.quick-item-menu

export {};

declare global {
  namespace sc {
    namespace QuickPartyStrategyMenu {
      /* :) */
      type GetButtonIndex1Argument = sc.PARTY_STRATEGY extends Record<infer _, infer V1>
        ? V1 extends Record<infer K2, unknown>
          ? K2
          : never
        : never;
    }
    interface QuickPartyStrategyMenu extends ig.BoxGui, sc.Model.Observer {
      gfx: ig.Image;
      ninepatch: ig.NinePatch;
      base: ig.GuiHook;
      anchor: ig.GuiHook;
      arrow: sc.QuickItemArrow;
      rows: sc.ButtonGui[][];
      currentText: sc.TextGui[];
      buttongroup: sc.RowButtonGroup;
      _hidden: boolean;

      addRow(this: this, langKey: string, row: number): void;
      createButton(
        this: this,
        langKey: string,
        id: number,
        row: number,
        type?: sc.ButtonGui.Type,
      ): sc.ButtonGui;
      resetRow(this: this, strategy: keyof sc.PartyModel.StrategyKeys, row: number): void;
      resetButtons(this: this, except: sc.ButtonGui, buttons: sc.ButtonGui): void;
      getButtonIndex(
        this: this,
        strategy: sc.QuickPartyStrategyMenu.GetButtonIndex1Argument,
        row: number,
      ): number;
      onSelection(this: this, button: sc.ButtonGui): void;
      onPress(this: this, button: sc.ButtonGui): void;
    }
    interface QuickPartyStrategyMenuConstructor extends ImpactClass<QuickPartyStrategyMenu> {
      new (base: ig.GuiElementBase, anchor: ig.GuiElementBase): QuickPartyStrategyMenu;
    }
    var QuickPartyStrategyMenu: QuickPartyStrategyMenuConstructor;
  }
}
