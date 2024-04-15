// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    namespace ItemStatusEquip {
      interface BaseParams {
        hp: number;
        atk: number;
        def: number;
        foc: number;
        fire: number;
        cold: number;
        shock: number;
        wave: number;
      }
    }
    interface ItemStatusEquip extends sc.MenuPanel, sc.Model.Observer {
      baseParams: sc.ItemStatusEquip.BaseParams;
      gfx: ig.Image;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this): void;
      exitMenu(this: this): void;
      _setParameters(this: this, itemId: sc.ItemID): void;
      _resetParameters(this: this): void;
      _createStatusDisplay(
        this: this,
        x: number,
        y: number,
        name: string,
        colorIndex: number,
        icon: number,
        usePercent: boolean,
        maxValue: number,
      ): sc.SimpleStatusDisplay;
    }
    interface ItemStatusEquipConstructor extends ImpactClass<ItemStatusEquip> {
      new (): ItemStatusEquip;
    }
    var ItemStatusEquip: ItemStatusEquipConstructor;

    interface ItemEquipModifier extends sc.HeaderMenuPanel, sc.Model.Observer {
      modifierText: null /* trust me bro, no refs */;
      modifierPool: Record<keyof typeof sc.MODIFIERS, sc.SimpleStatusDisplay>;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this): void;
      exitMenu(this: this): void;
      _setParameters(this: this, item: sc.ItemID): void;
      _resetParameters(this: this): void;
      _createStatusDisplay(
        this: this,
        x: number,
        y: number,
        name: string,
        colorIndex: number,
        icon: number,
        usePercent: boolean,
        maxValue: number,
        noPercent: boolean,
        modifierName: string,
        yOffset: number,
      ): sc.SimpleStatusDisplay;
    }
    interface ItemEquipModifierConstructor extends ImpactClass<ItemEquipModifier> {
      new (): ItemEquipModifier;
    }
    var ItemEquipModifier: ItemEquipModifierConstructor;
  }
}
