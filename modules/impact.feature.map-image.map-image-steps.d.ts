// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SHOW_MAP_IMAGE {
        interface Settings {
          name: string;
          tileSheet: ig.TileSheet.Data;
          position: Vec3;
          guiSprite: boolean;
          size?: Vec3;
        }
      }
      interface SHOW_MAP_IMAGE extends ig.EventStepBase {
        _wm: ig.Config;
        name: string;
        settings: ig.EVENT_STEP.SHOW_MAP_IMAGE.Settings;

        clearCached(this: this): void;
      }
      interface SHOW_MAP_IMAGE_CONSTRUCTOR extends ImpactClass<SHOW_MAP_IMAGE> {
        new (settings: ig.EVENT_STEP.SHOW_MAP_IMAGE.Settings): SHOW_MAP_IMAGE;
      }
      var SHOW_MAP_IMAGE: SHOW_MAP_IMAGE_CONSTRUCTOR;

      namespace REMOVE_MAP_IMAGE {
        interface Settings {
          name: string;
        }
      }
      interface REMOVE_MAP_IMAGE extends ig.EventStepBase {
        _wm: ig.Config;
        name: string;
      }
      interface REMOVE_MAP_IMAGE_CONSTRUCTOR extends ImpactClass<REMOVE_MAP_IMAGE> {
        new (settings: ig.EVENT_STEP.REMOVE_MAP_IMAGE.Settings): REMOVE_MAP_IMAGE;
      }
      var REMOVE_MAP_IMAGE: REMOVE_MAP_IMAGE_CONSTRUCTOR;
    }
  }
}
