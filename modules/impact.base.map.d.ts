export {};

declare global {
  namespace ig {
    namespace MAP {
      type AllUnion =
        | ig.MAP.HeightMap
        | ig.MAP.Collision
        | ig.MAP.Navigation
        | ig.MAP.Background
        | ig.MAP.Light;
    }
    var MAP: {
      HeightMap: ig.MAP.HeightMapConstructor;
      Collision: ig.MAP.CollisionConstructor;
      Navigation: ig.MAP.NavigationConstructor;
      Background: ig.MAP.BackgroundConstructor;
      Light: ig.MAP.LightConstructor;
    };
    interface Map extends ig.Class {
      tilesize: number;
      width: number;
      height: number;
      data: number[][];
      zHeight: number;
      zTileOff: number;
      moveSpeed: Vec2;

      copy(this: this, copyMapIntoThis: ig.Map): void;
      clear(this: this): void;
      getTile(this: this, entityX: number, entityY: number): number;
      getGridTile(this: this, x: number, y: number): number;
      setTile(this: this, entityX: number, entityY: number, tile: number): boolean;
      setGridTile(this: this, x: number, y: number, tile: number): boolean;
    }
    interface MapConstructor extends ImpactClass<Map> {
      new (data: sc.MapModel.MapLayer, zHeight: number): Map;
    }
    var Map: MapConstructor;

    interface ChunkedMap extends ig.Map {
      scroll: Vec2;
      distance: number;
      yDistance: number;
      repeat: boolean;
      enabled: boolean;
      preRender: boolean;
      screenRender: boolean;
      screenBuffer: boolean;
      preRenderedChunks: HTMLCanvasElement[][];
      chunkSizeX: number;
      chunkSizeY: number;
      debugDraw: boolean;
      lighter: boolean;
      merged: boolean;

      clearPreRenderedChunks(this: this): void;
      setScreenPos(this: this, x: number, y: number): void;
      preRenderMapToChunks(this: this, isMerged: boolean): HTMLCanvasElement[][] | false;
      readyToDraw(this: this): boolean;
      preRenderChunk(
        this: this,
        cx: number,
        cy: number,
        w: number,
        h: number,
        merge: boolean,
      ): boolean;
      preRenderScreen(
        this: this,
        context: CanvasRenderingContext2D,
        x: number,
        y: number,
        scrollX: number,
        scrollY: number,
        width: number,
        height: number,
      ): void;
      redrawChunkTile(
        this: this,
        chunk: HTMLCanvasElement,
        offX: number,
        offY: number,
        tile: number,
      ): void;
      _draw(this: this, x: number, y: number, width: number, height: number): void;
      draw(this: this, x: number, y: number, width: number, height: number): void;
      drawFromScreenBuffer(this: this, x: number, y: number, width: number, height: number): void;
      drawPreRendered(this: this, x: number, y: number, width: number, height: number): void;
      drawTiled(this: this, x: number, y: number, width: number, height: number): void;
      drawAnimated(this: this, x: number, y: number, width: number, height: number): void;
    }
    interface ChunkedMapConstructor extends ImpactClass<ChunkedMap> {
      new (data: sc.MapModel.MapLayer, zHeight: number): ChunkedMap;
    }
    var ChunkedMap: ChunkedMapConstructor;
  }
}
