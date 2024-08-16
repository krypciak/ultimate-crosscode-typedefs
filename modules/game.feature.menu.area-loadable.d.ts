// requires impact.base.game
// requires impact.base.loader

export {};

declare global {
  namespace sc {
    interface AreaRoomBounds extends ig.Class {
      zMin: number;
      zMax: number;
      min: Vec2;
      max: Vec2;
      offset: Vec2;
      name: string;
      text: string;
      id: number;
    }
    interface AreaRoomBoundsConstructor extends ImpactClass<AreaRoomBounds> {
      new (
        map: sc.AreaLoadable.Map,
        id: number,
        sx: number,
        sy: number,
        tiles: number[][],
      ): AreaRoomBounds;
    }
    var AreaRoomBounds: AreaRoomBoundsConstructor;
    namespace AreaLoadable {
      interface Data {
        DOCTYPE: 'AREAS_MAP';
        name: ig.LangLabel.Data;
        width: number;
        height: number;
        floors: Floor[];
        defaultFloor: number;
        chests: number;
      }

      interface Floor {
        level: number;
        name: ig.LangLabel.Data;
        tiles: number[][];
        maps: Map[];
        connections: Connection[];
        icons: Icon[];
        landmarks: Landmark[];
        rooms?: sc.AreaRoomBounds[];
      }

      interface Map {
        path: string;
        name: ig.LangLabel.Data;
        offset: Vec2;
        dungeon: '' | 'DUNGEON' | 'NO_DUNGEON';
      }

      interface Connection {
        tx: number;
        ty: number;
        dir: 'VERTICAL' | 'HORIZONTAL';
        size: number;
        map1: number;
        map2: number;
      }

      interface Icon {
        icon: string;
        x: number;
        y: number;
        map: number;
      }

      interface Landmark {
        id: string;
        x: number;
        y: number;
        map: number;
        option: keyof sc.LANDMARK_OPTIONS;
      }
    }
    interface AreaLoadable extends ig.Loadable {
      data: sc.AreaLoadable.Data;

      onload(this: this, data: sc.AreaLoadable.Data): void;
    }
    interface AreaLoadableConstructor
      extends ImpactClass<AreaLoadable>,
        ig.Cacheable.ImplementsCache<AreaLoadable> {
      new (path: string): AreaLoadable;
    }
    var AreaLoadable: AreaLoadableConstructor;
  }
}
