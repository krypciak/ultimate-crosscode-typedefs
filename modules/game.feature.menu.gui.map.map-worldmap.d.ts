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

    interface MapWorldMap extends ig.GuiElementBase {
      areaName: sc.WorldmapAreaName;

      _setAreaName(this: this, button: sc.AreaButton): void;
    }
    interface MapWorldMapConstructor extends ImpactClass<MapWorldMap> {
      new (): MapWorldMap;
    }
    var MapWorldMap: MapWorldMapConstructor;
  }
}
