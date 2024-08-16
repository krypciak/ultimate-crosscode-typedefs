// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.area-loadable

export {};
declare global {
  namespace sc {
    interface MapRoom extends ig.GuiElementBase {
      gfx: ig.Image;
      room: sc.AreaRoomBounds;
      buffer: ig.ImageAtlasFragment;
      floor: sc.AreaLoadable.Floor;
      name: string;
      id: number;
      roomAlpha: number;
      tileWidth: number;
      tileHeight: number;
      active: boolean;
      unlocked: boolean;
      prerendered: boolean;

      onVisibilityChange(this: this, visible: boolean): void;
    }
    interface MapRoomConstructor extends ImpactClass<MapRoom> {
      new (room: sc.AreaRoomBounds, floor: sc.AreaLoadable.Floor, id: number): MapRoom;
    }
    var MapRoom: MapRoomConstructor;
    interface MapFloor extends ig.GuiElementBase, sc.Model.Observer {
      floor: sc.AreaLoadable.Floor;
      name: string;
      nameGui: null;
      leaGui: sc.MapCurrentRoomWrapper;
      rooms: sc.AreaRoomBounds[];
      activeRoom: ig.GuiHook;
      callback: (doAnything: boolean, mapFloor: sc.MapFloor, rooms: sc.MapRoom) => void;
      bounds: Vec2 & { width: number; height: number };

      onAttach(this: this): void;
      update(this: this): void;
      updateDrawables(this: this): void;
      showFloor(this: this): void;
      hideFloor(this: this): void;
      calculateOpacity(this: this, skipTransition: boolean, show?: boolean): void;
      calculatePosOffset(this: this): void;
      addObservers(this: this): void;
      removeObservers(this: this): void;
      _updateAlphaOnRooms(this: this): void;
      _createIcons(this: this, rooms: sc.MapRoom[]): void;
      _createRooms(this: this): sc.MapRoom[];
      getBounds(this: this, hooks: ig.GuiHook[]): sc.MapFloor['bounds'];
    }
    interface MapFloorConstructor extends ImpactClass<MapFloor> {
      new (floor: sc.AreaLoadable.Floor, callback?: sc.MapFloor['callback']): MapFloor;
    }
    var MapFloor: MapFloorConstructor;
  }
}
