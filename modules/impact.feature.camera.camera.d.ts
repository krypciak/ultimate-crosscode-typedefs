// requires impact.base.event
// requires impact.base.game

export {};

declare global {
  namespace ig {
    namespace Camera {
      interface EntityTarget extends ig.Class {
        entity: ig.Entity;
        _zSlow: boolean;
        _currentZ: number;
        _lockZ: boolean;

        start(this: this): void;
        getPos(this: this, outVec: Vec2): void;
      }
      interface EntityTargetConstructor extends ImpactClass<EntityTarget> {
        new (entity: ig.Entity, lockZ?: boolean): EntityTarget;
      }

      interface TargetHandle extends ig.Class {
        target: ig.Camera.EntityTarget;
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
        new (target: ig.Camera.EntityTarget, x: number, y: number): TargetHandle;
      }
    }

    interface Camera extends ig.GameAddon {
      targets: {
        _currentOffset: Vec2;
        _currentZoomOffset: Vec2;
      }[];
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
    }
    interface CameraConstructor extends ImpactClass<ig.Camera> {
      new (): ig.Camera;

      EntityTarget: ig.Camera.EntityTargetConstructor;
      TargetHandle: ig.Camera.TargetHandleConstructor;
    }
    var Camera: ig.CameraConstructor;
    var camera: ig.Camera;
  }
}
