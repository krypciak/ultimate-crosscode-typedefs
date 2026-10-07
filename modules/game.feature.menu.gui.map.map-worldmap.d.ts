// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.map.map-misc

export {};

declare global {
  namespace sc {
    interface AreaButton extends ig.FocusGui {
      gfx: ig.Image;
      key: string;
      area: sc.MapModel.Area;
      icon: number;
      activeArea: boolean;
      focusCount: number;
      description: ig.LangLabel;

      onButtonPress(this: this): void;
      isMouseOver(this: this): boolean;
      getDistanceToCursor(this: this): number;
    }
    interface AreaButtonConstructor extends ImpactClass<AreaButton> {
      new (key: string, area: sc.MapModel.Area): AreaButton;
    }
    var AreaButton: AreaButtonConstructor;

    interface MapWorldMap extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      buttonGroup: sc.MouseButtonGroup;
      areas: sc.AreaButton[];
      cursor: sc.MapCursor;
      areaName: sc.WorldmapAreaName;
      _gamepadActive: boolean;
      _lastDevice: number;
      _cursorPos: Vec2;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      _focusCurrentArea(this: this): void;
      _initCursor(this: this, dest: Vec2): void;
      _limitCursorPos(this: this): void;
      _setAreaName(this: this, button: sc.AreaButton): void;
      _addAreas(this: this): void;
      _addAreaButton(this: this, key: string, area: sc.MapModel.Area): sc.AreaButton;
      onBackButtonPress(this: this): void;
    }
    interface MapWorldMapConstructor extends ImpactClass<MapWorldMap> {
      new (): MapWorldMap;
    }
    var MapWorldMap: MapWorldMapConstructor;
  }
}
