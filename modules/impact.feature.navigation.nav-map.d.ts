// requires impact.base.map
// requires impact.base.image
// requires game.config

export {};

declare global {
  namespace ig {
    interface NavEntityFlag {
      bitOffset: number;
      map: number;
    }
    interface NAV_ENTITY_FLAG {
      BLOCK: ig.NavEntityFlag;
      GROUND: ig.NavEntityFlag;
    }
    var NAV_ENTITY_FLAG: NAV_ENTITY_FLAG;
    namespace MAP {
      interface Navigation extends ig.Map {
        nodes: ig.PathNode[];
        freeNodeIds: number[];
        initialized: boolean;
        _wm: ig.Config;

        levelInit(this: this, level: string): void;
        reparse(
          this: this,
          level: string,
          minX: number,
          maxX: number,
          minY: number,
          maxY: number,
        ): void;
        connectAirNodes(this: this, level: string): void;
        draw(this: this, height: number): void;
        _getGridValue(this: this, x: number, y: number, navEntityFlag: ig.NavEntityFlag): number;
        _setGridValue(
          this: this,
          x: number,
          y: number,
          value: number,
          navEntityFlag: ig.NavEntityFlag,
        ): void;
        _setGridFlag(
          this: this,
          x: number,
          y: number,
          value: number,
          navEntityFlag: ig.NavEntityFlag,
        ): void;
        _clearGridFlag(
          this: this,
          x: number,
          y: number,
          value: number,
          navEntityFlag: ig.NavEntityFlag,
        ): void;
        getEntityFlagValue(
          this: this,
          x: number,
          y: number,
          navEntityFlag: ig.NavEntityFlag,
        ): number;
        setEntityFlagValue(
          this: this,
          x: number,
          y: number,
          value: number,
          navEntityFlag: ig.NavEntityFlag,
        ): void;
        increaseEntityFlagValue(
          this: this,
          x: number,
          y: number,
          navEntityFlag: ig.NavEntityFlag,
        ): number;
        decreaseEntityFlagValue(
          this: this,
          x: number,
          y: number,
          navEntityFlag: ig.NavEntityFlag,
        ): void;
        getGridAreaFlag(this: this, x: number, y: number): number;
        getGridForceGround(this: this, x: number, y: number): number;
        getGridNode(this: this, x: number, y: number): number;
        getGridNodeId(this: this, x: number, y: number): number;
        setGridNodeId(this: this, x: number, y: number, value: number): number;
        getGridBuildFlags(this: this, x: number, y: number): number;
        setGridBuildFlag(this: this, x: number, y: number, value: number): number;
        clearGridBuildFlags(this: this, x: number, y: number): number;
        getNode(this: this, x: number, y: number): number;
      }
      interface NavigationConstructor extends ImpactClass<Navigation> {
        new (data: sc.MapModel.MapLayer, zHeight: number): Navigation;

        levelKey: 'navigation';
      }
    }

    namespace PathNode {
      interface Neighbour {
        node: ig.PathNode;
        shared: ig.PathNodeConnect;
      }
      interface Edge {
        min: Vec2;
        max: Vec2;
      }
    }
    interface PathNode extends ig.Class {
      id: number;
      height: number;
      min: Vec2;
      max: Vec2;
      center: Vec2;
      neighbours: ig.PathNode.Neighbour[];
      airNeighbours: ig.PathNode.Neighbour[];
      airNode: boolean;
      airConnected: boolean;
      edges: Record<
        'north' | 'east' | 'south' | 'west' | 'down' | 'up' | 'upStairs' | 'block' | 'airBlock',
        ig.PathNode.Edge[]
      >;
      tmpSearchId: number;
      tmpCameFromNode: null /* unused */;
      tmpCameFromPos: Vec2;
      tmpCameFromNeighbour: null /* unused */;
      tmpClosed: boolean;
      tmpGScore: number;
      tmpFScore: number;

      erase(
        this: this,
        navMap: ig.MAP.Navigation,
        x: number,
        y: number,
        edge: ig.PathNode.Edge,
      ): void;
      isClosed(this: this, searchId: number): boolean;
      setClosed(this: this, searchId: number, closed: boolean): void;
      getCameFromNode(this: this, searchId: number): this['tmpCameFromNode'];
      getCameFromNeighbour(this: this, searchId: number): this['tmpCameFromNeighbour'];
      getCameFromPos(this: this, searchId: number): Vec2;
      setCameFrom(
        this: this,
        searchId: number,
        cameFromNode: this['tmpCameFromNode'],
        cameFromNeighbour: this['tmpCameFromNeighbour'],
        pos: Vec2,
      ): void;
      getGScore(this: this, searchId: number): number;
      setGScore(this: this, searchId: number, value: number): void;
      getFScore(this: this, searchId: number): number;
      setFScore(this: this, searchId: number, value: number): void;
      hasGScore(this: this): boolean;
    }
    interface PathNodeConstructor extends ImpactClass<PathNode> {
      new (
        id: number,
        navMap: ig.MAP.Navigation,
        collMap: ig.MAP.Collision,
        x: number,
        y: number,
        height: number,
      ): PathNode;
    }
    var PathNode: PathNodeConstructor;

    namespace PathNodeConnect {
      interface JumpInfo {
        jumpDist: number;
        destEdge: ig.PathNode.Edge;
      }
      interface SearchData {
        idx: number;
        pos: Vec2;
        fromEdge: Nullable<ig.PathNode>;
        fromNode: Nullable<ig.PathNode>;
        toNode: Nullable<ig.PathNode>;
        gScore: number;
        fScore: number;
        closed: boolean;
      }
    }
    interface PathNodeConnect extends ig.Class {
      edges: ig.PathNode.Edge;
      waypointMin: Vec2;
      waypointMax: Vec2;
      maxEdgeLength: number;
      type: ig.NAV_CONNECTION_TYPE;
      jumpInfo: ig.PathNodeConnect.JumpInfo;
      reverse: Nullable<ig.PathNodeConnect>;
      externalData: Record<string, boolean>;
      searchData: Nullable<ig.PathNodeConnect.SearchData>;

      getSearchData(this: this, idx?: number): ig.PathNodeConnect.SearchData;
      setExternalData(this: this, key: string, data: boolean): void;
    }
    interface PathNodeConnectConstructor extends ImpactClass<PathNodeConnect> {
      new (type: ig.NAV_CONNECTION_TYPE): PathNodeConnect;
    }
    var PathNodeConnect: PathNodeConnectConstructor;

    enum NAV_CONNECTION_TYPE {
      SAME_LEVEL = 0,
      LOWER_LEVEL = 1,
      UPPER_LEVEL = 2,
      LOWER_STAIRS = 3,
      UPPER_STAIRS = 4,
      UPPER_FLY = 5,
      SAME_LEVEL_JUMP = 6,
    }
  }
}
