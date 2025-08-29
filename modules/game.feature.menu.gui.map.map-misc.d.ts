// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.numbers
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface MapCurrentRoomWrapper extends ig.GuiElementBase {
      gfx: ig.Image;
    }
    interface MapCurrentRoomWrapperConstructor extends ImpactClass<MapCurrentRoomWrapper> {
      new (activeRoom: ig.GuiHook): MapCurrentRoomWrapper;
    }
    var MapCurrentRoomWrapper: MapCurrentRoomWrapperConstructor;
    interface LandmarkGui extends ig.FocusGui {
      map: sc.AreaLoadable.Map;
    }
    interface LandmarkGuiConstructor extends ImpactClass<LandmarkGui> {
      new (
        key: string,
        landmark: any, // TODO
        floor: number,
        map: any, // TODO
        area: string,
      ): LandmarkGui;
    }
    var LandmarkGui: LandmarkGuiConstructor;

    interface MapNameGui extends ig.BoxGui {
      ninepatch: ig.NinePatch;
      text: sc.TextGui;

      setText(this: this, text: sc.TextLike, wait?: number, skipTransition?: boolean): void;
    }
    interface MapNameGuiConstructor extends ImpactClass<MapNameGui> {
      new (): MapNameGui;
    }
    var MapNameGui: MapNameGuiConstructor;

    interface WorldmapAreaName extends ig.GuiElementBase {
      gfx: ig.Image;
      name: sc.MapNameGui;
      hasText: boolean;

      setText(
        this: this,
        text: sc.TextLike,
        wait?: Nullable<boolean>,
        skip?: Nullable<boolean>,
      ): void;
    }
    interface WorldmapAreaNameConstructor extends ImpactClass<WorldmapAreaName> {
      new (): WorldmapAreaName;
    }
    var WorldmapAreaName: WorldmapAreaNameConstructor;

    interface MapCursor extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      focusOffset: Vec2;
      focus: boolean;
      _focusTimer: number;
      _focusTime: number;
      _focusOffset: number;
      _lastDevice: number;
      _gamepadActive: boolean;
      _worldmap: boolean;
      _ignoreModel: boolean;

      focusOnNode(this: this, x: number, y: number): void;
      unfocus(this: this): void;
      moveTo(this: this, x: number, y: number, smooth?: boolean, transitionTime?: number): void;
      looseFocus(this: this): void;
      addObservers(this: this): void;
      removeObservers(this: this): void;
    }
    interface MapCursorConstructor extends ImpactClass<MapCursor> {
      new (worldmap: boolean): MapCursor;
    }
    var MapCursor: MapCursorConstructor;
    interface MapChestDisplay extends ig.GuiElementBase {
      current: sc.NumberGui;
      max: sc.NumberGui;
      _oldCount: number;
      _oldMax: number;
    }
    interface MapChestDisplayConstructor extends ImpactClass<MapChestDisplay> {
      new (): MapChestDisplay;
    }
    var MapChestDisplay: MapChestDisplayConstructor;
  }
}
