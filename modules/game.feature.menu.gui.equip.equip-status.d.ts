// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.plug-in
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    namespace EquipStatusContainer {
      interface BaseParams {
        hp: sc.SimpleStatusDisplay;
        atk: sc.SimpleStatusDisplay;
        def: sc.SimpleStatusDisplay;
        foc: sc.SimpleStatusDisplay;
        fire: sc.SimpleStatusDisplay;
        cold: sc.SimpleStatusDisplay;
        shock: sc.SimpleStatusDisplay;
        wave: sc.SimpleStatusDisplay;
      }
      type Button = sc.ItemBoxButton & { data: { id: number; description: string } };
    }
    interface EquipStatusContainer extends ig.GuiElementBase, sc.Model.Observer {
      compareMode: boolean;
      compareOffHand: boolean;
      baseParams: sc.EquipStatusContainer.BaseParams;
      allModifiers: Record<keyof sc.MODIFIERS, sc.SimpleStatusDisplay>;
      modifiers: unknown /* unused? */;
      statusPanel: sc.MenuPanel;
      modPanel: sc.HeaderMenuPanel;
      modMore: sc.TextGui;
      arrow: ig.ImageGui;
      arrow2: ig.ImageGui;
      gfx: ig.Image;
      mode: boolean;

      showMenu(this: this): void;
      toggleViewMode(this: this, button?: sc.EquipStatusContainer.Button): void;
      updateStatusView(this: this, button?: sc.EquipStatusContainer.Button): void;
      updateModText(this: this, highestModifierIndex: number): void;
      _createStatusDisplay(
        this: this,
        x: number,
        y: number,
        name: string,
        colorIndex: number,
        icon: number,
        usePercent: boolean,
        maxValue: number,
        currentValue: number,
        noPercent?: boolean,
        menu?: sc.MenuPanel,
        descriptionLangId?: string,
        order?: number,
      ): sc.SimpleStatusDisplay;
      _setParameters(this: this, item: sc.ItemID, resetModifiersValues?: boolean): void;
      _calculateDifferenceModifier(
        this: this,
        currentGear: sc.ItemID,
        modifier: number,
        newValue: number,
        fromPlayer?: boolean,
      ): number;
      _calculateDifference(
        this: this,
        currentGear: sc.ItemID,
        param: string,
        newValue: number,
        element?: sc.ELEMENT,
      ): number;
      _resetChangeValue(this: this, resetModifiersValues?: boolean): void;
      _setCurrentValues(this: this): void;
      _setCurrentModifiers(this: this): void;
    }
    interface EquipStatusContainerConstructor extends ImpactClass<EquipStatusContainer> {
      new (): EquipStatusContainer;
    }
    var EquipStatusContainer: EquipStatusContainerConstructor;
  }
}
