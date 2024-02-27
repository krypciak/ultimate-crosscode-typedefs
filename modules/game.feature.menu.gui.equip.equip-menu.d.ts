// requires impact.feature.gui.gui
// requires game.feature.gui.plug-in
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.main-menu
// requires game.feature.menu.gui.equip.equip-status
// requires game.feature.menu.gui.equip.equip-bodypart
// requires game.feature.inventory.inventory
// requires game.feature.menu.gui.help.help-menu

export {};

declare global {
  namespace sc {
    namespace EquipMenu {
      interface GlobalButtons {
        head: sc.BodyPartMouseButton;
        rightArm: sc.BodyPartMouseButton;
        leftArm: sc.BodyPartMouseButton;
        torso: sc.BodyPartMouseButton;
        feet: sc.BodyPartMouseButton;
      }
    }
    interface EquipMenu extends sc.BaseMenu, sc.Model.Observer {
      globalButtons: sc.EquipMenu.GlobalButtons;
      statusContainer: sc.EquipStatusContainer;
      rightContainer: sc.EquipRightContainer;
      overview: sc.EquipLevelOverview;
      quickSelectButtonGroup: sc.ButtonGroup;
      hotkeys: Record<'help' | 'status' | 'sort' | 'switch', sc.ButtonGui>;
      sortMenu: sc.ItemSortMenu;
      helpGui: sc.HelpScreen;

      initEquipIcon(this: this, button: sc.BodyPartMouseButton, item: ItemID): void;
      _onHelpButtonCheck(this: this): boolean;
      _onHelpButtonPressed(this: this): void;
      createHelpGui(this: this): void;
      onSortButtonCheck(this: this): boolean;
      onSortButtonPress(this: this): void;
      onStatusButtonCheck(this: this): boolean;
      onStatusButtonPress(this: this): void;
      onHotkeySwitchCheck(this: this): boolean;
      _addHotKeys(this: this, longTransition?: boolean): void;
      _exitMenu(this: this): void;
      _moveBodyPartLines(this: this, part: sc.MENU_EQUIP_BODYPART, _unused?: unknown): void;
      _pullInAllButtons(this: this, button: sc.BodyPartMouseButton, _unused?: unknown): void;
      _updateSortHotkey(this: this, currentSortMethodName: string): void;
      _updateMouseButtons(this: this, data: sc.PLAYER_MSG_ITEM_OBTAINED_DATA, dontSkipAnim?: boolean): void;
      exitMenu(this: this, nextMenu?: sc.MENU_SUBMENU): void;
    }
    interface EquipMenuConstructor extends ImpactClass<EquipMenu> {
      new (): sc.EquipMenu;
    }
    var EquipMenu: EquipMenuConstructor;
  }
}

