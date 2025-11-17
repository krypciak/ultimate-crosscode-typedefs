// requires impact.base.action
// requires impact.base.event
// requires impact.feature.camera.camera

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SET_CAMERA_TARGET {
        interface Settings {
          entity: ig.Event.GetEntity;
          offsetX: number;
          offsetY: number;
          speed: keyof typeof ig.Camera.SPEED_OPTIONS;
          transition: unknown;
          wait: boolean;
          waitSkip: number;
          zoom?: number;
          name?: string;
          lockZ?: boolean;
        }
      }
      interface SET_CAMERA_TARGET extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        offsetX: number;
        offsetY: number;
        speed: keyof typeof ig.Camera.SPEED_OPTIONS;
        transition: unknown;
        wait: boolean;
        waitSkip: number;
        zoom: number;
        lockZ: boolean;
        _wm: ig.Config;
        name: Nullable<string>;
      }
      interface SET_CAMERA_TARGET_CONSTRUCTOR extends ImpactClass<SET_CAMERA_TARGET> {
        new (settings: ig.EVENT_STEP.SET_CAMERA_TARGET.Settings): SET_CAMERA_TARGET;
      }
      var SET_CAMERA_TARGET: SET_CAMERA_TARGET_CONSTRUCTOR;

      namespace SET_CAMERA_POS {
        interface Settings {
          pos: Vec2;
          speed: keyof typeof ig.Camera.SPEED_OPTIONS;
          transition: unknown;
          wait: boolean;
          waitSkip: number;
          zoom?: number;
          name?: string;
        }
      }
      interface SET_CAMERA_POS extends ig.EventStepBase {
        pos: Vec2;
        speed: keyof typeof ig.Camera.SPEED_OPTIONS;
        transition: unknown;
        wait: boolean;
        waitSkip: number;
        zoom: number;
        _wm: ig.Config;
        name: Nullable<string>;
      }
      interface SET_CAMERA_POS_CONSTRUCTOR extends ImpactClass<SET_CAMERA_POS> {
        new (settings: ig.EVENT_STEP.SET_CAMERA_POS.Settings): SET_CAMERA_POS;
      }
      var SET_CAMERA_POS: SET_CAMERA_POS_CONSTRUCTOR;

      namespace SET_CAMERA_BETWEEN {
        interface Settings {
          entity1: ig.Event.GetEntity;
          entity2: ig.Event.GetEntity;
          speed: keyof typeof ig.Camera.SPEED_OPTIONS;
          transition: unknown;
          wait: boolean;
          waitSkip: number;
          zoom?: number;
          name?: string;
        }
      }
      interface SET_CAMERA_BETWEEN extends ig.EventStepBase {
        entity1: ig.Event.GetEntity;
        entity2: ig.Event.GetEntity;
        speed: keyof typeof ig.Camera.SPEED_OPTIONS;
        transition: unknown;
        wait: boolean;
        waitSkip: number;
        zoom: number;
        _wm: ig.Config;
        name: Nullable<string>;
      }
      interface SET_CAMERA_BETWEEN_CONSTRUCTOR extends ImpactClass<SET_CAMERA_BETWEEN> {
        new (settings: ig.EVENT_STEP.SET_CAMERA_BETWEEN.Settings): SET_CAMERA_BETWEEN;
      }
      var SET_CAMERA_BETWEEN: SET_CAMERA_BETWEEN_CONSTRUCTOR;

      namespace RESET_CAMERA {
        interface Settings {
          speed?: keyof typeof ig.Camera.SPEED_OPTIONS;
          transition?: KeySpline | keyof typeof KEY_SPLINES;
          wait?: boolean;
          waitSkip?: number;
          name?: string;
        }
      }
      interface RESET_CAMERA extends ig.EventStepBase {
        speed: keyof typeof ig.Camera.SPEED_OPTIONS;
        transition: unknown;
        wait: boolean;
        waitSkip: number;
        name: Nullable<string>;
        _wm: ig.Config;
      }
      interface RESET_CAMERA_CONSTRUCTOR extends ImpactClass<RESET_CAMERA> {
        new (settings: ig.EVENT_STEP.RESET_CAMERA.Settings): RESET_CAMERA;
      }
      var RESET_CAMERA: RESET_CAMERA_CONSTRUCTOR;

      namespace UNDO_CAMERA {
        interface Settings {
          speed: keyof typeof ig.Camera.SPEED_OPTIONS;
          transition: unknown;
          wait: boolean;
          waitSkip: number;
        }
      }
      interface UNDO_CAMERA extends ig.EventStepBase {
        speed: keyof typeof ig.Camera.SPEED_OPTIONS;
        transition: unknown;
        wait: boolean;
        waitSkip: number;
        _wm: ig.Config;
      }
      interface UNDO_CAMERA_CONSTRUCTOR extends ImpactClass<UNDO_CAMERA> {
        new (settings: ig.EVENT_STEP.UNDO_CAMERA.Settings): UNDO_CAMERA;
      }
      var UNDO_CAMERA: UNDO_CAMERA_CONSTRUCTOR;

      namespace SET_CAMERA_ZOOM {
        interface Settings {
          zoom?: number;
          duration: number;
          transition: unknown;
        }
      }
      interface SET_CAMERA_ZOOM extends ig.EventStepBase {
        duration: number;
        transition: unknown;
        wait: unknown;
        waitSkip: unknown;
        _wm: ig.Config;
        zoom: number;
      }
      interface SET_CAMERA_ZOOM_CONSTRUCTOR extends ImpactClass<SET_CAMERA_ZOOM> {
        new (settings: ig.EVENT_STEP.SET_CAMERA_ZOOM.Settings): SET_CAMERA_ZOOM;
      }
      var SET_CAMERA_ZOOM: SET_CAMERA_ZOOM_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace FOCUS_CAMERA {
        interface Settings {
          offsetX: number;
          offsetY: number;
          speed: keyof typeof ig.Camera.SPEED_OPTIONS;
          transition: unknown;
          wait: boolean;
          waitSkip: number;
          zoom?: number;
          target?: unknown;
          focusType: unknown;
          keepPlayerOffset?: number;
        }
      }
      interface FOCUS_CAMERA extends ig.EventStepBase {
        offsetX: number;
        offsetY: number;
        speed: keyof typeof ig.Camera.SPEED_OPTIONS;
        transition: unknown;
        wait: boolean;
        waitSkip: number;
        zoom: number;
        _wm: ig.Config;
        keepPlayerOffset: number;
      }
      interface FOCUS_CAMERA_CONSTRUCTOR extends ImpactClass<FOCUS_CAMERA> {
        new (settings: ig.ACTION_STEP.FOCUS_CAMERA.Settings): FOCUS_CAMERA;
      }
      var FOCUS_CAMERA: FOCUS_CAMERA_CONSTRUCTOR;

      namespace RESET_CAMERA {
        interface Settings {
          speed?: keyof typeof ig.Camera.SPEED_OPTIONS;
          transition?: KeySpline | keyof typeof KEY_SPLINES;
          wait?: boolean;
          waitSkip?: number;
        }
      }
      interface RESET_CAMERA extends ig.EventStepBase {
        speed: keyof typeof ig.Camera.SPEED_OPTIONS;
        transition: unknown;
        wait: boolean;
        waitSkip: number;
        _wm: ig.Config;
      }
      interface RESET_CAMERA_CONSTRUCTOR extends ImpactClass<RESET_CAMERA> {
        new (settings: ig.ACTION_STEP.RESET_CAMERA.Settings): RESET_CAMERA;
      }
      var RESET_CAMERA: RESET_CAMERA_CONSTRUCTOR;

      namespace SET_CAMERA_ZOOM {
        interface Settings {
          zoom?: number;
          duration: number;
          transition: unknown;
        }
      }
      interface SET_CAMERA_ZOOM extends ig.EventStepBase {
        duration: number;
        transition: unknown;
        wait: unknown;
        waitSkip: unknown;
        _wm: ig.Config;
        zoom: number;
      }
      interface SET_CAMERA_ZOOM_CONSTRUCTOR extends ImpactClass<SET_CAMERA_ZOOM> {
        new (settings: ig.ACTION_STEP.SET_CAMERA_ZOOM.Settings): SET_CAMERA_ZOOM;
      }
      var SET_CAMERA_ZOOM: SET_CAMERA_ZOOM_CONSTRUCTOR;
    }
  }
}
