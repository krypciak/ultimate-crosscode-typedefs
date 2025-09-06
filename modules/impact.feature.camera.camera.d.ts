// requires impact.base.event
// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface Camera extends ig.GameAddon {
      targets: ig.Camera.TargetHandle[];
      namedTargets: Record<string, ig.Camera.TargetHandle>;
      _currentPos: Vec2;
      _currentZ: number;
      _currentZoom: number;
      _currentZoomPos: Vec2;
      _zSlow: boolean;
      _lastPos: Vec2;
      _lastZoom: number;
      _lastZoomPos: Vec2;
      _duration: number;
      _time: number;
      _transitionFunction: KeySpline;
      _cameraInBounds: boolean;
      postUpdateOrder: number;
      levelLoadStartOrder: number;

      onPostUpdate(this: this): void;
      pushTarget(
        this: this,
        target: ig.Camera.TargetHandle,
        speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS,
        transitionFunction?: KeySpline,
        name?: string,
      ): void;
      replaceTarget(
        this: this,
        toDelete: ig.Camera.TargetHandle,
        newTarget: ig.Camera.TargetHandle,
        speed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS,
        transitionFunction?: KeySpline,
      ): unknown;
      _getDuration(
        this: this,
        speed: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS,
      ): number;
    }
    interface CameraConstructor extends ImpactClass<Camera> {
      new (): Camera;

      SPEED_OPTIONS: ig.Camera.SPEED_OPTIONS;
      PosTarget: ig.Camera.PosTargetConstructor;
      EntityTarget: ig.Camera.EntityTargetConstructor;
      MultiEntityTarget: ig.Camera.MultiEntityTargetConstructor;
      TargetHandle: ig.Camera.TargetHandleConstructor;
    }
    var Camera: CameraConstructor;
    var camera: Camera;

    namespace Camera {
      interface SPEED_OPTIONS {
        NORMAL: number;
        FAST: number;
        FASTER: number;
        FASTEST: number;
        FASTESTEST: number;
        SLOW: number;
        SLOWER: number;
        SLOWEST: number;
        SLOWESTEST: number;
        SLOWEST_DREAM: number;
        IMMEDIATELY: number;
      }

      interface PosTarget extends ig.Class, ig.Camera.TargetHandle.Target {
        pos: Vec2;

        start(this: this): void;
        getPos(this: this, dest: Vec2): void;
      }
      interface PosTargetConstructor extends ImpactClass<PosTarget> {
        new (pos: Vec2): PosTarget;
      }

      interface EntityTarget extends ig.Class, ig.Camera.TargetHandle.Target {
        entity: ig.Entity;
        _zSlow: boolean;
        _currentZ: number;
        _lockZ: boolean;

        start(this: this): void;
        getPos(this: this, dest: Vec2): void;
      }
      interface EntityTargetConstructor extends ImpactClass<EntityTarget> {
        new (entity: ig.Entity, lockZ?: boolean): EntityTarget;
      }

      interface MultiEntityTarget extends ig.Class {
        entities: ig.Entity;
        _zSlow: boolean;
        _prevFloat: boolean;
        _currentZ: number;
        keepFirstTarget: boolean;

        start(this: this): void;
        _getEntitiesZ(this: this): number;
        getPos(this: this, dest: Vec2): void;
      }
      interface MultiEntityTargetConstructor extends ImpactClass<MultiEntityTarget> {
        new (entities: ig.Entity[], keepFirstTarget?: boolean): MultiEntityTarget;
      }

      namespace TargetHandle {
        interface Target {
          start(): void;
          getPos(dest: Vec2): void;
        }
      }
      interface TargetHandle extends ig.Class {
        target: ig.Camera.TargetHandle.Target;
        offset: Vec2;
        zoomOffset: Vec2;
        keepZoomFocusAligned: boolean;
        _offsetDuration: number;
        _offsetTime: number;
        _currentOffset: Vec2;
        _currentZoomOffset: Vec2;
        _lastOffset: Vec2;
        _lastZoomOffset: Vec2;
        zoomTimer: ig.WeightTimer;
        oldZoom: number;
        targetZoom: number;
        keyspline: KeySpline;
        lockZ: boolean;
      }
      interface TargetHandleConstructor extends ImpactClass<TargetHandle> {
        new (target: ig.Camera.TargetHandle.Target, xOffset: number, yOffset: number): TargetHandle;
      }
    }
  }
}
