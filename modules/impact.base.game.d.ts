// requires impact.base.impact
// requires impact.base.entity
// requires impact.base.event
// requires impact.base.renderer
// requires impact.base.physics
// requires impact.base.game-state
// requires impact.base.collision-map
// requires impact.base.background-map
// requires impact.base.global-settings
// requires impact.base.extension
// requires impact.base.utils
// requires impact.base.dom

export {};

declare global {
  namespace ig {
    namespace Game {
      namespace Addons {
        type EventHandlersArr<Name extends keyof ig.GameAddon> = Array<{
          [K in Name]: ig.GameAddon[K] extends
            | ((...args: infer Args) => infer Ret)
            | null
            | undefined
            ? (...args: Args) => Ret
            : never;
        }>;
      }
      interface Addons {
        all: ig.GameAddon[];
        levelLoadStart: Addons.EventHandlersArr<'onLevelLoadStart'>;
        levelLoaded: Addons.EventHandlersArr<'onLevelLoaded'>;
        teleport: Addons.EventHandlersArr<'onTeleport'>;
        preUpdate: Addons.EventHandlersArr<'onPreUpdate'>;
        postUpdate: Addons.EventHandlersArr<'onPostUpdate'>;
        deferredUpdate: Addons.EventHandlersArr<'onDeferredUpdate'>;
        preDraw: Addons.EventHandlersArr<'onPreDraw'>;
        midDraw: Addons.EventHandlersArr<'onMidDraw'>;
        postDraw: Addons.EventHandlersArr<'onPostDraw'>;
        varsChanged: Addons.EventHandlersArr<'onVarsChanged'>;
        reset: Addons.EventHandlersArr<'onReset'>;
        windowFocusChanged: Addons.EventHandlersArr<'onWindowFocusChanged'>;
      }

      type TeleportLoadHint = Nullable<'NEW' | 'LOAD'>;
    }
    interface Game extends ig.Class {
      clearColor: string;
      gravity: number;
      screen: Vec2;
      soundPos: Vec2;
      size: Vec2;
      paused: boolean;
      mapRenderingBlocked: boolean;
      isReset: boolean;
      shadowImage: ig.Image;
      previousMap: string;
      mapName: string;
      currentLoadingResource: string | ig.Loader;
      entities: ig.Entity[];
      mapEntities: Nullable<ig.Entity>[];
      shownEntities: Nullable<ig.Entity>[];
      freeEntityIds: number[];
      namedEntities: Record<string, ig.Entity>;
      conditionalEntities: {
        condition: ig.VarCondition;
        type: Parameters<ig.Game['spawnEntity']>[0];
        x: number;
        y: number;
        z: number;
        settings: ig.Entity.Settings;
        entity: ig.Entity;
      }[];
      maps: ig.MAP.AllUnion[];
      levels: Record<
        string,
        {
          height?: number;
          collision?: ig.MAP.Collision;
          maps?: ig.ChunkedMap[];
        }
      >;
      maxLevel: number;
      minLevelZ: number;
      masterLevel: number;
      backgroundAnims: {} /* afaik always empty */;
      backgroundAnimTimer: number;
      cellSize: number;
      events: ig.EventManager;
      renderer: ig.Renderer2d;
      physics: ig.Physics;
      _deferredDetach: ig.Entity[];
      _levelToLoad: null /* unused */;
      playerEntity: ig.ENTITY.Player;
      marker?: Nullable<string>;
      postPlacementAction?: { onPostPlacementAction(player: ig.ENTITY.Player): void };
      teleporting: {
        active: boolean;
        timer: number;
        position: ig.TeleportPosition;
        clearCache: boolean;
        reloadCache: boolean;
        levelData: Nullable<sc.MapModel.Map>;
      };
      addons: Game.Addons;
      states: ig.GameState[];
      fullyStopped: boolean;
      firstUpdateLoop: boolean;
      _deferredVarChanged: boolean;
      mapLoader?: ig.LoaderConstructor;

      popState(this: this): void;
      printGameAddonsString(this: this): void;
      getLevelHeight(this: this, level: number | string): number;
      getHeightFromLevelOffset(this: this, level: sc.MapModel.MapEntity['level']): number;
      getEntityByName<E extends ig.Entity>(this: this, name: string): E;
      getEntitiesInCircle(
        center: Vec3,
        radius: number,
        yScale: number,
        zHeight: number,
        dir?: Vec2,
        startAngle?: number,
        endAngle?: number,
        exception?: ig.Entity,
        moreExceptions?: ig.Entity[],
        rectangular?: boolean,
      ): ig.Entity[];
      getEntitiesByType<E extends ig.Entity, S extends ig.Entity.Settings>(
        this: this,
        type: new (x: number, y: number, z: number, settings: S) => E | string,
      ): E[];
      isPlayerTouch(
        this: this,
        entity: ig.Entity,
        player: ig.Entity,
        dir?: Nullable<Vec2 & { dot: number }>,
      ): boolean;
      getErrorData(this: this, gameInfo: Record<string, unknown>): void;
      setPaused(this: this, paused: boolean): void;
      spawnEntity<E extends ig.Entity, S extends ig.Entity.Settings>(
        this: this,
        entity: new (x: number, y: number, z: number, settings: S) => E,
        x: number,
        y: number,
        z: number,
        settings?: Nullable<S>,
        showAppearEffects?: Nullable<boolean>,
      ): E;
      spawnEntity<T extends sc.MapModel.EntityNames>(
        this: this,
        entity: T,
        x: number,
        y: number,
        z: number,
        settings: sc.MapModel.MapEntity<T>['settings'],
        showAppearEffects?: Nullable<boolean>,
      ): (typeof ig.ENTITY)[T];
      reset(this: this): void;
      teleport(
        this: this,
        mapName: string,
        marker?: Nullable<ig.TeleportPosition>,
        hint?: ig.Game.TeleportLoadHint,
        clearCache?: Nullable<boolean>,
        reloadCache?: Nullable<boolean>,
      ): void;
      isTeleporting(this: this): boolean;
      onTeleportEnd(this: this): void;
      createPlayer(this: this): void;
      preloadLevel(this: this, mapName: string): void;
      loadLevel(
        this: this,
        data: sc.MapModel.Map,
        clearCache?: boolean,
        reloadCache?: boolean,
      ): void;
      loadingComplete(this: this): void;
      update(this: this): void;
      preDrawMaps(this: this): void;
      run(this: this): void;
      deferredUpdate(this: this): void;
      deferredMapEntityUpdate(this: this): void;
      draw(this: this): void;
      finalDraw(this: this): void;
      varsChanged(this: this): void;
      varsChangedDeferred(this: this): void;

      traceEntity(
        this: this,
        res: ig.Physics.TraceResult,
        entity: ig.Entity,
        vx: number,
        vy: number,
        xOffset?: number,
        yOffeset?: number,
        zOffset?: number,
        collType?: ig.COLLTYPE,
        collisionList?: Nullable<any[]>,
        entryException?: ig.Entity,
        negZHeight?: number,
      ): unknown;
      trace(
        this: this,
        res: ig.Physics.TraceResult,
        x: number,
        y: number,
        z: number,
        vx: number,
        vy: number,
        width: number,
        height: number,
        zHeight: number,
        collType: ig.COLLTYPE,
        entryException: null,
        collisionList: any[],
        onGround?: boolean,
      ): boolean;

      onGameLoopStart?(): void;
    }
    interface GameConstructor extends ImpactClass<Game> {
      new (): Game;
    }
    var Game: GameConstructor;

    interface GameAddon extends ig.Class {
      name: string;

      levelLoadStartOrder: number;
      onLevelLoadStart?(this: this, data: sc.MapModel.Map): void;

      levelLoadedOrder: number;
      onLevelLoaded?(this: this, data: ig.Game): void;

      teleportOrder: number;
      onTeleport?(
        this: this,
        map: string,
        teleportPosition?: Nullable<ig.TeleportPosition>,
        hint?: ig.Game.TeleportLoadHint,
      ): void;

      preUpdateOrder: number;
      onPreUpdate?(this: this): void;

      postUpdateOrder: number;
      onPostUpdate?(this: this): void;

      deferredUpdateOrder: number;
      onDeferredUpdate?(this: this): void;

      preDrawOrder: number;
      onPreDraw?(this: this): void;

      midDrawOrder: number;
      onMidDraw?(this: this): void;

      postDrawOrder: number;
      onPostDraw?(this: this): void;

      resetOrder: number;
      onReset?(this: this): void;

      varsChangedOrder: number;
      onVarsChanged?(this: this): void;

      windowFocusOrder: number;
      onWindowFocusChanged?(this: this, status: boolean): void;
    }
    interface GameAddonConstructor extends ImpactClass<GameAddon> {
      new (name: string): GameAddon;
    }
    var GameAddon: GameAddonConstructor;

    namespace TeleportPosition {
      type Settings =
        | {
            marker: string;

            pos?: Nullable<Vec3>;
            size?: Nullable<Vec2>;
            face?: Nullable<Vec2>;

            level?: Nullable<number>;
            baseZPos?: Nullable<number>;
          }
        | {
            pos: Vec3;
            size: Vec2;
            face: Vec2;

            marker?: Nullable<string>;

            level?: Nullable<number>;
            baseZPos?: Nullable<number>;
          };
    }
    interface TeleportPosition extends ig.Class {
      pos: Nullable<Vec3>;
      face: Nullable<Vec2>;
      marker: Nullable<string>;
      level: number;
      baseZPos: number;
      size: Nullable<Vec2>;

      setFromData(
        this: this,
        marker?: Nullable<string>,
        pos?: Nullable<Vec3>,
        face?: Nullable<Vec2>,
        level?: Nullable<number>,
        baseZPos?: Nullable<number>,
        size?: Nullable<Vec2>,
      ): void;
      setFromJson(this: this, data: ig.TeleportPosition.Settings): void;
      getJson(this: this): ig.TeleportPosition.Settings;
    }
    interface TeleportPositionConstructor extends ImpactClass<TeleportPosition> {
      new (marker?: Nullable<string>): TeleportPosition;

      createFromJson(settings: Nullable<ig.TeleportPosition.Settings>): ig.TeleportPosition;
    }
    var TeleportPosition: TeleportPositionConstructor;
  }
}
