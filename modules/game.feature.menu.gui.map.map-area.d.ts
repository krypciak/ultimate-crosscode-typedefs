// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.map.map-floor
// requires game.feature.menu.gui.map.map-misc

export {};

declare global {
  namespace sc {
    interface MapArea extends ig.GuiElementBase {}
    interface MapAreaConstructor extends ImpactClass<MapArea> {
      new (): MapArea;
    }
    var MapArea: MapAreaConstructor;

    namespace MapAreaContainer {
      interface AreaCache {
        x: number;
        y: number;
        cx: number;
        cy: number;
        floor: number;
      }
    }
    interface MapAreaContainer
      extends ig.GuiElementBase,
        sc.Model.Observer,
        ig.Loadable.LoadListener<sc.AreaLoadable> {
      gfx: ig.Image;
      background: ig.Image;
      area: sc.MapArea;
      buttongroup: sc.MouseButtonGroup;
      _lastMousePos: Vec2;
      _cursorPos: Vec2;
      _dragTimer: number;
      _delayedDrag: boolean;
      _alphaTimer: number;
      _alphaTime: number;
      _alpha: number;
      _firstVisit: boolean;
      _prevFloor: number;
      _vertOffset: number;
      _vertOffsetTarget: number;
      _vertOffsetStart: number;
      _vertOffsetCurrent: number;
      _vertOffsetTimer: number;
      _vertOffsetTime: number;
      _areaCache: Record<string, sc.MapAreaContainer.AreaCache>;
      _gamepadActive: boolean;
      _lastDevice: number;
      mapNameGui: sc.MapNameGui;
      hoverRoom: Nullable<sc.LandmarkGui | sc.StampGui | sc.AreaRoomBounds | false>;
      cursor: sc.MapCursor;
      landmarks: sc.LandmarkGui[];
      stamps: sc.StampGui[];

      onMouseInteract(this: this, mouseOver: boolean, clicked: boolean): void;
      onLandmarkPressed(this: this, landmark: sc.LandmarkGui): void;
      findMap(
        this: this,
        mx: number,
        my: number,
        gamepad: boolean,
        wait?: number,
      ): boolean | undefined;
      showLandmarkName(this: this, name: string): void;
      loadNewArea(this: this, areaName: string): void;
      setArea(this: this): void;
      createLandmarks(this: this, doAnything: boolean, floor: sc.MapFloor): void;
      addStamp(this: this): void;
      isSettable(this: this, floor: sc.MapFloor, x: number, y: number): boolean;
      getCurrentFloorGui(this: this): Nullable<sc.MapFloor>;
      centerCurrentPosition(this: this, showFloors: boolean, smooth?: boolean): void;
      limitCameraPos(this: this): void;
      limitCursorPos(this: this): void;
      initCursor(this: this, pos: Vec2): void;
      calculateScrollingOffset(this: this, skipTransition: boolean): void;
      showMenu(this: this): void;
      exitMenu(this: this): void;
      addObservers(this: this): void;
      removeObservers(this: this): void;
    }
    interface MapAreaContainerConstructor extends ImpactClass<MapAreaContainer> {}
    var MapAreaContainer: MapAreaContainerConstructor;
  }
}
