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

    enum MAP_DUNGEON_OVERRIDE {
      DUNGEON = 1,
      NO_DUNGEON = 2,
    }
    enum AREA_TYPE {
      TOWN = 0,
      PATH = 1,
      DUNGEON = 2,
    }

    var AREA_ITEM_TYPE: {
      DUNGEON_KEY: { areaField: 'keyItem' };
      DUNGEON_MASTER_KEY: { areaField: 'masterKeyItem' };
      BOOSTER: { areaField: 'boosterItem' };
    };
    type AREA_ITEM_TYPE = (typeof sc.AREA_ITEM_TYPE)[keyof typeof sc.AREA_ITEM_TYPE];

    namespace MapModel {
      namespace Area {
        interface Landmark {
          name: ig.LangLabel.Data;
          description: ig.LangLabel.Data;
        }
      }

      interface Area {
        name: ig.LangLabel.Data;
        description: ig.LangLabel.Data;
        areaType: keyof typeof sc.AREA_TYPE;
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
        bgm: ig.BGM_DEFAULT_TRACK;
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
    interface MapModel
      extends ig.GameAddon,
        sc.Model,
        ig.Vars.Accessor,
        ig.Loadable.LoadListener,
        ig.Storage.ListenerSave,
        ig.Storage.ListenerPreLoad {
      activeLandmarks: Record<string, Record<string, { active: boolean }>>;
      areas: { [name: string]: sc.MapModel.Area };
      areasVisited: Record<string, {}>;
      currentPlayerArea: sc.AreaLoadable;
      currentArea: sc.AreaLoadable;
      currentPlayerFloor: number;
      currentFloor: number;
      currentMap: string;
      unknownArea: null;
      teleportEvent: Nullable<ig.Event>;
      _usedNames: boolean[];
      _oobSoundTerrain: keyof typeof ig.TERRAIN;

      isValidArea(this: this, key: string): boolean;
      getTotalAreasFound(this: this, asPercent?: boolean): number;
      getTotalLandmarksFound(this: this, asPercent?: boolean): number;
      getTotalChestsFound(this: this, asPercent?: boolean): number;
      getTotalChests(this: this): number;
      hasAllAreasFound(this: this): boolean;
      getTotalLandmarksFoundInArea(this: this, areaName: string): number;
      onLevelLoadStart(this: this, data: sc.MapModel.Map): void;
      onLevelLoaded(this: this): void;
      canUseGenderName(this: this, gender: sc.NPC_GENDER, doesMatch: sc.NPC_GENDER): boolean;
      onReset(this: this): void;
      initAreas(this: this): void;
      loadArea(
        this: this,
        areaName: string,
        loadListener: ig.Loadable.LoadListener<sc.AreaLoadable>,
      ): void;
      unloadCurrentArea(this: this): void;
      updateVisitedArea(this: this, areaName: string): void;
      undoVisitedArea(this: this, areaName: string, clearVisitedFromgIgVars?: boolean): void;
      validateCurrentPlayerFloor(this: this): void;
      validateCurrentFloor(this: this): void;
      restore(this: this): void;
      addLandmark(
        this: this,
        landmarkName: string,
        areaName: string,
        entityToCallEventOn?: ig.Entity,
      ): void;
      startTeleport(this: this, mapName: string): void;
      getAreaType(this: this, areaName: string): sc.AREA_TYPE;
      isLandmarkValid(this: this, landmarkName: string, areaName: string): boolean;
      getAreaItemId(this: this, areaItemType: sc.AREA_ITEM_TYPE, areaName: string): sc.ItemID;
      getAreaItemType(
        this: this,
        areaItemTypeString: sc.AREA_ITEM_TYPE['areaField'],
        areaName?: string,
      ): keyof typeof sc.AREA_ITEM_TYPE | void;
      getAreaItemAmount(this: this, areaItemType: sc.AREA_ITEM_TYPE, areaName: string): number;
      getAreaItemToggleState(
        this: this,
        areaItemType: sc.AREA_ITEM_TYPE,
        areaName: string,
      ): boolean;
      isLandmarkActive(
        this: this,
        landmarkName: string,
        areaName?: string,
        isActiveOrJustExists?: boolean,
      ): boolean;
      setLandmarkActiveState(
        this: this,
        landmarkName: string,
        active: boolean,
        areaName: string,
      ): void;
      setAreaLandmarksActiveState(this: this, areaName: string, state: boolean): void;
      isDungeon(this: this, ignoreMap?: boolean): boolean;
      hasAnyAreaUnlocked(this: this): boolean;
      getUnlockedAreas(this: this): string[];
      sortAreaList(this: this, areaNameList: string[]): string[];
      getLandmarkName(this: this, landmarkName: string, areaName: string): ig.LangLabel | string;
      getLandmark(this: this, landmark: string, area: string): sc.MapModel.Area.Landmark;
      getCurrentAreaLandmark(this: this, landmark: string): sc.MapModel.Area.Landmark;
      getCurrentPlayerAreaName(this: this): ig.LangLabel;
      getCurrentAreaName(this: this): ig.LangLabel;
      getAreaOrder(this: this, areaName: string): number;
      getAreaName(
        this: this,
        areaName: string,
        prefferShortName?: boolean,
        checkIsDlc?: boolean,
      ): string;
      getCurrentMapName(this: this, returnQuestionMarkIfItsCurrentMap?: boolean): ig.LangLabel;
      getMapName(this: this, map: string): ig.LangLabel;
      getMapDungeon(this: this, mapPath: string): Nullable<sc.MAP_DUNGEON_OVERRIDE>;
      getCurrentFloorIndex(this: this): number;
      getCurrentArea(this: this): sc.AreaLoadable.Data;
      getLandmarkEvent(this: this, entity: ig.Entity): ig.Event;
      getTeleportEvent(this: this, map: string): ig.Event;
      getVisitedArea(this: this, area: string): boolean;
      getTeleport(this: this): Nullable<ig.Event>;
      getCurrentChestCount(this: this): number;
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
