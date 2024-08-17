// requires impact.base.game
// requires impact.base.loader
// requires impact.base.vars
// requires impact.feature.database.database
// requires game.config
// requires game.feature.quick-menu.quick-menu-model
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    namespace LandmarkOption {
      interface Bounds {
        x: number;
        y: number;
        w: number;
        h: number;
      }
    }
    interface LandmarkOption {
      icon: unknown;
      bounds: LandmarkOption.Bounds;
    }
    interface LANDMARK_OPTIONS {
      DEFAULT: LandmarkOption;
    }
    let LANDMARK_OPTIONS: LANDMARK_OPTIONS;

    namespace MapModel {
      namespace Area {
        interface Landmark {
          name: ig.LangLabel.Data;
          description: ig.LangLabel.Data;
        }
      }

      interface Area {
        name: ig.LangLabel.Data;
        path: string;
        description: ig.LangLabel.Data;
        areaType: 'PATH' | 'TOWN' | 'DUNGEON';
        order: number;
        track: boolean;
        chests: number;
        boosterItem?: string;
        keyItem?: string;
        masterKeyItem?: string;
        condition?: string;
        position: Vec2;
        landmarks: { [name: string]: Area.Landmark };
      }

      interface Map {
        name: string;
        levels: { height: number }[];
        mapHeight: number;
        mapWidth: number;
        masterLevel: number;
        attributes: MapModel.MapAttributes;
        screen: Vec2;
        entities: MapModel.MapEntity[];
        layer: MapModel.MapLayer[];
      }

      type ConstructorReturnType<T extends new (...args: any) => any> = T extends new (
        ...args: any
      ) => infer R
        ? R
        : any;

      type EntityNames = keyof typeof ig.ENTITY;
      type MapEntitySpecific<T extends EntityNames> = {
        type: T;
        settings: ConstructorParameters<(typeof ig.ENTITY)[T]>[3];
      };

      type MapEntity<T extends EntityNames = EntityNames> = {
        [key in T]: MapEntitySpecific<key>;
      }[T] & {
        x: number;
        y: number;
        level: number | { offset?: number; level: number };
      };

      interface MapAttributes {
        saveMode: 'ENABLED' | 'DISABLED' | '';
        bgm: string;
        cameraInBounds: boolean;
        'map-sounds': string;
        mapStyle: string;
        weather: string;
        area: string;
        npcRunners: string;
      }

      type MapLayerType = keyof typeof ig.MAP | 'object1' | 'object2' | 'object3';
      type MapLayerLevelType = 'last' | 'light' | 'object1' | 'object2' | 'object3' | number;

      interface MapLayer {
        id: number;
        type: MapModel.MapLayerType;
        name: string;
        level: MapModel.MapLayerLevelType;
        width: number;
        height: number;
        visible: number;
        tilesetName: string;
        repeat: boolean;
        distance: number;
        yDistance: number;
        tilesize: number;
        moveSpeed: Vec2;
        data: number[][];
        lighter: boolean;
      }
    }
    interface MapModel extends ig.GameAddon, sc.Model {
      activeLandmarks: Record<string, Record<string, { active: boolean }>>;
      areas: { [name: string]: sc.MapModel.Area };
      currentArea: sc.AreaLoadable;

      isValidArea(this: this, key: string): boolean;
      getTotalChestsFound(this: this, asPercent: boolean): number;
      getTotalChests(this: this): number;
      onLevelLoadStart(this: this, data: sc.MapModel.Map): void;
      updateVisitedArea(this: this, areaName: string): void;
      validateCurrentPlayerFloor(this: this): void;
      getLandmark(this: this, landmark: string, area: string): sc.MapModel.Area.Landmark;
      getCurrentAreaLandmark(this: this, landmark: string): sc.MapModel.Area.Landmark;
      getCurrentAreaName(this: this): ig.LangLabel;
      getAreaName(this: this, a?: string, b?: boolean, c?: boolean): string;
      getCurrentMapName(this: this, returnQuestionMarkIfItsCurrentMap?: boolean): ig.LangLabel;
      getMapName(this: this, map: string): ig.LangLabel;
      getCurrentArea(this: this): sc.AreaLoadable.Data;
      getVisitedArea(this: this, area: string): boolean;
      getChestCount(this: this, key: string): number;
    }
    interface MapModelConstructor extends ImpactClass<MapModel> {
      new (): MapModel;
    }
    var MapModel: MapModelConstructor;
    var map: sc.MapModel;

    enum MAP_EVENT {
      LANDMARK_ADDED = 1,
      PLAYER_AREA_CHANGED = 2,
      MAP_ENTERED = 3,
    }
  }
}
