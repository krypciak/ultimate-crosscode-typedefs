// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    enum MENU_BAR_TYPE {
      HP = 0,
      EXP = 1,
      SP = 2,
      BUFF = 3,
    }

    interface ItemStatusDefaultBar extends ig.GuiElementBase {
      gfx: ig.Image;
      backgroundPatch: ig.NinePatch;
      barPatch: ig.NinePatch;
      type: sc.MENU_BAR_TYPE;
      name: string;
      maxValue: number;
      currentValue: number;
      targetValue: number;
      timer: number;
      currentNumber: sc.NumberGui;
      maxNumber: sc.NumberGui;
      buff: sc.StatChange;
      barHeight: number;
      model: sc.PlayerModel;

      updateValues(
        this: this,
        skipTransition?: boolean,
        model?: sc.PartyMemberModel | sc.PlayerModel,
        hpCurrValOverride?: number,
        hpMaxValOverride?: number,
      ): void;
      resetValues(this: this): void;
      _drawSpBarMinified(this: this, renderer: ig.GuiRenderer): void;
      _drawSpBar(this: this, renderer: ig.GuiRenderer): void;
    }
    interface ItemStatusDefaultBarConstructor extends ImpactClass<ItemStatusDefaultBar> {
      new (
        text: string,
        type: sc.MENU_BAR_TYPE,
        buff?: Nullable<sc.StatChange>,
        width?: number,
        barHeight?: number,
        position?: number,
      ): ItemStatusDefaultBar;
    }
    var ItemStatusDefaultBar: ItemStatusDefaultBarConstructor;

    interface ItemStatusDefault extends sc.MenuPanel {
      menuGfx: ig.Image;
      level: sc.NumberGui;
    }
    interface ItemStatusDefaultConstructor extends ImpactClass<ItemStatusDefault> {
      new (): ItemStatusDefault;
    }
    var ItemStatusDefault: ItemStatusDefaultConstructor;
  }
}
