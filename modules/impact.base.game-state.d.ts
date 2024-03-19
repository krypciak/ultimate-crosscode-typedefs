export {};

declare global {
  namespace ig {
    interface GameState extends ig.Class {
      game: {
        screen: Vec2;
        size: Vec2;
        paused: boolean;
        entities: ig.Entity[];
        mapEntities: ig.Entity[];
        shownEntities: ig.Entity[];
        freeEntityIds: number[];
        namesEntitied: ig.Game['namedEntities'];
        _deferredDetach: {};
        conditionalEntities: ig.Game['conditionalEntities'];
        maps: ig.Game['maps'];
        levels: ig.Game['levels'];
        maxLevel: number;
        minLevelZ: number;
        masterLevel: number;
      };
      system: { zoomFocus: Vec2; zoom: number };
      physics: {
        collUpdateList: ig.CollEntry[];
        collOutOfScreenList: ig.CollEntry[];
        collEntryMap: ig.Physics['collEntryMap'];
      };
      physicsInitialized: boolean;
      renderer: {
        spriteSlots: ig.Renderer2d['spriteSlots'];
        guiSpriteSlots: ig.Renderer2d['guiSpriteSlots'];
      };

      clear(this: this): void;
      initEmpty(this: this, gameSizeX: number, gameSizeY: number): void;
      initFromGame(this: this, game: ig.Game): void;
      forceUpdate(this: this): void;
      forceDraw(this: this, negXOffset: number, negYOffset: number): void;
      onEnd(this: this, game: ig.Game): void;
      onStart(this: this, game: ig.Game): void;
    }
    interface GameStateConstructor extends ImpactClass<GameState> {
      new (): GameState;
    }
    var GameState: GameStateConstructor;
  }
}
