// requires impact.feature.gui.gui
// requires game.feature.gui.plug-in
// requires game.feature.menu.gui.equip.equip-misc
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface EquipRightContainer extends sc.MenuPanel, sc.Model.Observer {
      partChooser: sc.EquipBodyPartContainer;
      itemList: sc.ItemListBox;
      sortTypes: { [key in sc.MENU_EQUIP_BODYPART]?: sc.SORT_TYPE };
      _itemListActive: boolean;
      _lastEquipState: boolean;
      _globalButtons: sc.EquipMenu.GlobalButtons;
      _refocusFromCycle: boolean;

      _equipItem(this: this, newItemID: sc.ItemID, fromMouse?: boolean): boolean;
      setCurrentBodypartPressed(this: this): void;
      setCurrentBodypartUnpressed(this: this): void;
      _updateItemList(this: this): void;
      _activateItemList(this: this): void;
      _deactivateItemList(this: this, popMenu?: boolean): void;
      _exitItemList(this: this): void;
      _makeList(
        this: this,
        refocus: boolean,
        fromMouse: boolean,
        newItemID: sc.ItemID,
        skipSounds?: boolean,
        sortType?: sc.SORT_TYPE,
      ): void;
      isIDEquipped(this: this, part: sc.MENU_EQUIP_BODYPART): boolean;
      getCurrentSortText(this: this): string;
      showMenu(this: this): void;
      hideMenu(this: this): void;
      tempShowMenu(this: this): void;
      tempHideMenu(this: this): void;
    }
    interface EquipRightContainerConstructor extends ImpactClass<sc.EquipRightContainer> {
      new (globalButtons: sc.EquipMenu.GlobalButtons): sc.EquipRightContainer;
    }
    var EquipRightContainer: EquipRightContainerConstructor;

    namespace EquipBodyPartContainer {
      interface Entry extends ig.GuiElementBase {
        numberGfx: ig.Image;
        text: sc.TextGui;
        button: sc.BodyPartButton;
        defaultPosition: unknown;
        _isActiveTop: boolean;
        _hidden: boolean;
        topY: number;
        bottomY: number;
        level: number;
        isScalable: boolean;

        setData(this: this, text: sc.TextLike, data: ig.LangLabel, level: number, isScalable: boolean): void;
        moveToNormal(this: this): void;
        moveToBottom(this: this): void;
        moveToTop(this: this): void;
        reset(this: this): void;
        hideButton(this: this): void;
        showButton(this: this): void;
      }
      interface EntryConstructor extends ImpactClass<Entry> {
        new (
          bodyPart: string,
          equip: sc.Inventory.Item,
          x: number,
          y: number,
          globalButton: sc.BodyPartButton,
          topY: number,
        ): Entry;
      }
    }
    interface EquipBodyPartContainer extends ig.GuiElementBase {
      buttonGroup: sc.ButtonGroup;

      showMenu(this: this): void;
      _moveButtons(this: this, bodypart: sc.MENU_EQUIP_BODYPART): void;
      _pullInAllButtons(this: this, exception: ig.FocusGui): void;
    }
    interface EquipBodyPartContainerConstructor extends ImpactClass<EquipBodyPartContainer> {
      new (globalButtons: sc.EquipMenu.GlobalButtons): sc.EquipBodyPartContainer;
      Entry: EquipBodyPartContainer.EntryConstructor;
    }
    var EquipBodyPartContainer: EquipBodyPartContainerConstructor;
  }
}
