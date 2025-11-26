// requires impact.feature.navigation.navigation
// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {
      namespace NAVIGATE_TO_TARGET {
        interface Settings {
          maxTime: number;
          forceTime: boolean;
          distance: number;
          planOnly: boolean;
          targetType: unknown;
          precise: boolean;
        }
      }
      interface NAVIGATE_TO_TARGET extends ig.ActionStepBase {
        maxTime: number;
        forceTime: boolean;
        distance: number;
        planOnly: boolean;
        targetType: unknown;
        _wm: ig.Config;
        precise: boolean;
      }
      interface NAVIGATE_TO_TARGET_CONSTRUCTOR extends ImpactClass<NAVIGATE_TO_TARGET> {
        new (settings: ig.ACTION_STEP.NAVIGATE_TO_TARGET.Settings): NAVIGATE_TO_TARGET;
      }
      var NAVIGATE_TO_TARGET: NAVIGATE_TO_TARGET_CONSTRUCTOR;

      namespace NAVIGATE_ESCAPE_TARGET {
        interface Settings {
          maxTime: number;
          maxTimeAggro?: number;
          forceTime: boolean;
          distance: number;
          throwing: boolean;
          planOnly: boolean;
          targetType: unknown;
        }
      }
      interface NAVIGATE_ESCAPE_TARGET extends ig.ActionStepBase {
        maxTime: number;
        maxTimeAggro: number;
        distance: number;
        throwing: boolean;
        planOnly: boolean;
        targetType: unknown;
        _wm: ig.Config;
        forceTime: boolean;
      }
      interface NAVIGATE_ESCAPE_TARGET_CONSTRUCTOR extends ImpactClass<NAVIGATE_ESCAPE_TARGET> {
        new (settings: ig.ACTION_STEP.NAVIGATE_ESCAPE_TARGET.Settings): NAVIGATE_ESCAPE_TARGET;
      }
      var NAVIGATE_ESCAPE_TARGET: NAVIGATE_ESCAPE_TARGET_CONSTRUCTOR;

      namespace NAVIGATE_SIDEWAYS_TARGET {
        interface Settings {
          maxTime: number;
          maxTimeAggro?: number;
          forceTime: boolean;
          distance: number;
          distVariance: number;
          keepDirection: boolean;
          throwing: boolean;
          planOnly: boolean;
          forceMinTargetDistance?: number;
          precise: boolean;
        }
      }
      interface NAVIGATE_SIDEWAYS_TARGET extends ig.ActionStepBase {
        maxTime: number;
        distance: number;
        distVariance: number;
        throwing: boolean;
        planOnly: boolean;
        _wm: ig.Config;
        maxTimeAggro: number;
        forceTime: boolean;
        keepDirection: boolean;
        forceMinTargetDistance: number;
        precise: boolean;
      }
      interface NAVIGATE_SIDEWAYS_TARGET_CONSTRUCTOR extends ImpactClass<NAVIGATE_SIDEWAYS_TARGET> {
        new (settings: ig.ACTION_STEP.NAVIGATE_SIDEWAYS_TARGET.Settings): NAVIGATE_SIDEWAYS_TARGET;
      }
      var NAVIGATE_SIDEWAYS_TARGET: NAVIGATE_SIDEWAYS_TARGET_CONSTRUCTOR;

      namespace NAVIGATE_RANGE_TARGET {
        interface Settings {
          maxTime: number;
          maxTimeAggro?: number;
          forceTime: boolean;
          moveDist: number;
          minMoveDist?: number;
          targetDistGoal: number;
          throwing: boolean;
          avoidSideway: boolean;
          planOnly: boolean;
          direction: unknown;
        }
      }
      interface NAVIGATE_RANGE_TARGET extends ig.ActionStepBase {
        maxTime: number;
        maxTimeAggro: number;
        distance: unknown;
        throwing: boolean;
        planOnly: boolean;
        targetType: unknown;
        _wm: ig.Config;
        forceTime: boolean;
        moveDist: number;
        minMoveDist: number;
        targetDistGoal: number;
        avoidSideway: boolean;
      }
      interface NAVIGATE_RANGE_TARGET_CONSTRUCTOR extends ImpactClass<NAVIGATE_RANGE_TARGET> {
        new (settings: ig.ACTION_STEP.NAVIGATE_RANGE_TARGET.Settings): NAVIGATE_RANGE_TARGET;
      }
      var NAVIGATE_RANGE_TARGET: NAVIGATE_RANGE_TARGET_CONSTRUCTOR;

      namespace NAVIGATE_TO_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
          maxTime: number;
          forceTime: boolean;
          distance: number;
          ignoreBelow: number;
          planOnly: boolean;
          precise: boolean;
          assistSlow: boolean;
        }
      }
      interface NAVIGATE_TO_ENTITY extends ig.ActionStepBase {
        entity: ig.Event.GetEntity;
        maxTime: number;
        distance: number;
        ignoreBelow: number;
        planOnly: boolean;
        _wm: ig.Config;
        forceTime: boolean;
        precise: boolean;
        assistSlow: boolean;
      }
      interface NAVIGATE_TO_ENTITY_CONSTRUCTOR extends ImpactClass<NAVIGATE_TO_ENTITY> {
        new (settings: ig.ACTION_STEP.NAVIGATE_TO_ENTITY.Settings): NAVIGATE_TO_ENTITY;
      }
      var NAVIGATE_TO_ENTITY: NAVIGATE_TO_ENTITY_CONSTRUCTOR;

      namespace NAVIGATE_ESCAPE_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
          maxTime: number;
          distance: number;
          throwing: boolean;
          planOnly: boolean;
        }
      }
      interface NAVIGATE_ESCAPE_ENTITY extends ig.ActionStepBase {
        entity: ig.Event.GetEntity;
        maxTime: number;
        distance: number;
        throwing: boolean;
        planOnly: boolean;
        _wm: ig.Config;
      }
      interface NAVIGATE_ESCAPE_ENTITY_CONSTRUCTOR extends ImpactClass<NAVIGATE_ESCAPE_ENTITY> {
        new (settings: ig.ACTION_STEP.NAVIGATE_ESCAPE_ENTITY.Settings): NAVIGATE_ESCAPE_ENTITY;
      }
      var NAVIGATE_ESCAPE_ENTITY: NAVIGATE_ESCAPE_ENTITY_CONSTRUCTOR;

      namespace NAVIGATE_DODGE {
        interface Settings {
          maxTime: number;
          distance: number;
          planOnly: boolean;
          dodgeType: keyof typeof ig.NAV_DODGE_TYPE;
        }
      }
      interface NAVIGATE_DODGE extends ig.ActionStepBase {
        maxTime: number;
        distance: number;
        planOnly: boolean;
        dodgeType: ig.NAV_DODGE_TYPE;
        _wm: ig.Config;
      }
      interface NAVIGATE_DODGE_CONSTRUCTOR extends ImpactClass<NAVIGATE_DODGE> {
        new (settings: ig.ACTION_STEP.NAVIGATE_DODGE.Settings): NAVIGATE_DODGE;
      }
      var NAVIGATE_DODGE: NAVIGATE_DODGE_CONSTRUCTOR;

      namespace NAVIGATE_TO_POINT {
        interface Settings {
          target: Vec3Lvl;
          maxTime?: number;
          distance?: number;
          precise?: boolean;
          planOnly?: boolean;
          teleportOnFail?: boolean;
        }
      }
      interface NAVIGATE_TO_POINT extends ig.ActionStepBase {
        target: Vec3Lvl;
        maxTime: number;
        distance: number;
        precise: boolean;
        planOnly: boolean;
        _wm: ig.Config;
        teleportOnFail: boolean;
      }
      interface NAVIGATE_TO_POINT_CONSTRUCTOR extends ImpactClass<NAVIGATE_TO_POINT> {
        new (settings: ig.ACTION_STEP.NAVIGATE_TO_POINT.Settings): NAVIGATE_TO_POINT;
      }
      var NAVIGATE_TO_POINT: NAVIGATE_TO_POINT_CONSTRUCTOR;

      namespace DO_NAVIGATION {
        interface Settings {
          maxTime: number;
        }
      }
      interface DO_NAVIGATION extends ig.ActionStepBase {
        maxTime: number;
        _wm: ig.Config;
      }
      interface DO_NAVIGATION_CONSTRUCTOR extends ImpactClass<DO_NAVIGATION> {
        new (settings: ig.ACTION_STEP.DO_NAVIGATION.Settings): DO_NAVIGATION;
      }
      var DO_NAVIGATION: DO_NAVIGATION_CONSTRUCTOR;

      namespace CANCEL_IF_NAVIGATION_FAILED {
        interface Settings {
          time: number;
        }
      }
      interface CANCEL_IF_NAVIGATION_FAILED extends ig.ActionStepBase {
        time: number;
        _wm: ig.Config;
      }
      interface CANCEL_IF_NAVIGATION_FAILED_CONSTRUCTOR
        extends ImpactClass<CANCEL_IF_NAVIGATION_FAILED> {
        new (
          settings: ig.ACTION_STEP.CANCEL_IF_NAVIGATION_FAILED.Settings,
        ): CANCEL_IF_NAVIGATION_FAILED;
      }
      var CANCEL_IF_NAVIGATION_FAILED: CANCEL_IF_NAVIGATION_FAILED_CONSTRUCTOR;

      namespace SET_ATTRIB_CLOSE_TARGET_POS {
        interface Settings {
          name: string;
          searchType: keyof typeof ig.NAV_CLOSE_POINT_SEARCH;
          distance: number;
          centralAngle?: number;
          dirRotate?: number;
          throwing: boolean;
          offset?: Vec3;
        }
      }
      interface SET_ATTRIB_CLOSE_TARGET_POS extends ig.ActionStepBase {
        name: string;
        distance: number;
        searchType: ig.NAV_CLOSE_POINT_SEARCH.Func;
        _wm: ig.Config;
        centralAngle: number;
        dirRotate: number;
        throwing: boolean;
        offset: Nullable<Vec3>;
      }
      interface SET_ATTRIB_CLOSE_TARGET_POS_CONSTRUCTOR
        extends ImpactClass<SET_ATTRIB_CLOSE_TARGET_POS> {
        new (
          settings: ig.ACTION_STEP.SET_ATTRIB_CLOSE_TARGET_POS.Settings,
        ): SET_ATTRIB_CLOSE_TARGET_POS;
      }
      var SET_ATTRIB_CLOSE_TARGET_POS: SET_ATTRIB_CLOSE_TARGET_POS_CONSTRUCTOR;

      namespace SET_ATTRIB_TARGET_DELTA_POS {
        interface Settings {
          name: string;
          searchType: keyof typeof ig.NAV_CLOSE_POINT_SEARCH;
          distance: number;
          centralAngle?: number;
          dirRotate?: number;
          throwing: boolean;
          offset?: Vec3;
        }
      }
      interface SET_ATTRIB_TARGET_DELTA_POS extends ig.ActionStepBase {
        name: string;
        distance: number;
        searchType: ig.NAV_CLOSE_POINT_SEARCH.Func;
        _wm: ig.Config;
        centralAngle: number;
        dirRotate: number;
        throwing: boolean;
        offset: Nullable<Vec3>;
      }
      interface SET_ATTRIB_TARGET_DELTA_POS_CONSTRUCTOR
        extends ImpactClass<SET_ATTRIB_TARGET_DELTA_POS> {
        new (
          settings: ig.ACTION_STEP.SET_ATTRIB_TARGET_DELTA_POS.Settings,
        ): SET_ATTRIB_TARGET_DELTA_POS;
      }
      var SET_ATTRIB_TARGET_DELTA_POS: SET_ATTRIB_TARGET_DELTA_POS_CONSTRUCTOR;

      namespace SET_ATTRIB_NAV_TARGET_POS {
        interface Settings {
          name: string;
        }
      }
      interface SET_ATTRIB_NAV_TARGET_POS extends ig.ActionStepBase {
        name: string;
        distance: unknown;
        searchType: unknown;
        _wm: ig.Config;
      }
      interface SET_ATTRIB_NAV_TARGET_POS_CONSTRUCTOR
        extends ImpactClass<SET_ATTRIB_NAV_TARGET_POS> {
        new (
          settings: ig.ACTION_STEP.SET_ATTRIB_NAV_TARGET_POS.Settings,
        ): SET_ATTRIB_NAV_TARGET_POS;
      }
      var SET_ATTRIB_NAV_TARGET_POS: SET_ATTRIB_NAV_TARGET_POS_CONSTRUCTOR;
    }
  }
}
