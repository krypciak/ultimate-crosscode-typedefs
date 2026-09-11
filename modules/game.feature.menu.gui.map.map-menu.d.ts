// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.map.map-misc
// requires game.feature.menu.gui.map.map-stamp
// requires game.feature.menu.gui.map.map-area
// requires game.feature.menu.gui.map.map-worldmap

export {};

declare global {
  namespace sc {
    interface MapMenu extends sc.BaseMenu, sc.Model.Observer {
      hotkeyHelp: sc.ButtonGui;
      hotkeyWorldmap: sc.ButtonGui;
      hotkeyCenter: sc.ButtonGui;
      area: sc.MapAreaContainer;
      floorButtons: sc.MapFloorButtonContainer;
      emptyMap: sc.TextGui;
      chestDisplay: sc.MapChestDisplay;
      stampDisplay: sc.MapStampDisplay;
      worldmap: sc.MapWorldMap;
      curArea: sc.CurrentAreaDisplay;
      stamps: sc.StampEditMenu;
      helpGui: sc.HelpScreen;

      onHotkeyHelpCheck(this: this): boolean;
      onHelpButtonPressed(this: this): void;
      onHotkeyCenterCheck(this: this): boolean;
      onHotkeyWorldmapCheck(this: this): boolean;
      onCenterButtonPressed(this: this, isFromHotkey?: boolean): void;
      onWorldmapButtonPressed(this: this): void;
      createHelpGui(this: this): void;
      onAddHotkeys(this: this, longTransition?: boolean): void;
      commitHotKeysToTopBar(this: this, longTransition?: boolean): void;
      onBackButtonPress(this: this): void;
    }
    interface MapMenuConstructor extends ImpactClass<MapMenu> {
      new (): MapMenu;
    }
    var MapMenu: MapMenuConstructor;
  }
}
