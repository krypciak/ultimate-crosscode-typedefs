// requires impact.base.actor-entity

export {};

declare global {
  namespace sc {
    namespace WPConnection {
      interface Connection {
        global: boolean;
        name: string;
      }
      interface SearchData {
        idx: number;
        cameFrom: Nullable<ig.Entity>;
        gScore: number;
        fScore: number;
        closed: boolean;
      }
    }
    interface WPConnection extends ig.Class {
      owner: ig.Entity;
      connections: sc.WPConnection.Connection[];
      initialized: boolean;
      connectedWPs: sc.WPConnection[];
      middle: boolean;
      searchData: sc.WPConnection.SearchData;

      _initWaypoints(this: this): void;
      addWayPoint(this: this, wp: sc.WPConnection): void;
      getDistance(this: this, wp: sc.WPConnection): number;
      getWayPointConnections(this: this): sc.WPConnection[];
      getSearchData(this: this, ignoreIdx?: number): sc.WPConnection.SearchData;
    }
    interface WPConnectionConstructor extends ImpactClass<WPConnection> {
      new (owner: ig.Entity, connections?: sc.WPConnection.Connection[]): WPConnection;
    }
    var WPConnection: WPConnectionConstructor;

    interface NpcWayPointSearcher {
      searchIndex: number;
      resetIndex(): void;
      searchConnection(entrance: sc.WPConnection, exit: sc.WPConnection): Nullable<ig.Entity[]>;
      _reconstructPath(entrance: sc.WPConnection, exit: sc.WPConnection): ig.Entity[];
    }
    var NpcWayPointSearcher: NpcWayPointSearcher;
  }
}
