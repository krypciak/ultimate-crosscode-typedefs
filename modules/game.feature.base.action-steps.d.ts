// requires impact.base.action
// requires impact.base.actor-entity
// requires game.feature.npc.entities.sc-actor

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {
      namespace SET_SOUNDTYPE {
        interface Settings {
          value: keyof typeof sc.ACTOR_SOUND;
        }
      }
      interface SET_SOUNDTYPE extends ig.ActionStepBase {
        value: keyof typeof sc.ACTOR_SOUND;
        _wm: ig.Config;
      }
      interface SET_SOUNDTYPE_CONSTRUCTOR extends ImpactClass<SET_SOUNDTYPE> {
        new (settings: ig.ACTION_STEP.SET_SOUNDTYPE.Settings): SET_SOUNDTYPE;
      }
      var SET_SOUNDTYPE: SET_SOUNDTYPE_CONSTRUCTOR;

      namespace CHANGE_STAT_MAP_NUMBER {
        interface Settings {
          map: string;
          stat: string;
          changeType: unknown;
          value: number;
        }
      }
      interface CHANGE_STAT_MAP_NUMBER extends ig.ActionStepBase {
        map: string;
        stat: string;
        changeType: unknown;
        value: number;
        _wm: ig.Config;
      }
      interface CHANGE_STAT_MAP_NUMBER_CONSTRUCTOR extends ImpactClass<CHANGE_STAT_MAP_NUMBER> {
        new (settings: ig.ACTION_STEP.CHANGE_STAT_MAP_NUMBER.Settings): CHANGE_STAT_MAP_NUMBER;
      }
      var CHANGE_STAT_MAP_NUMBER: CHANGE_STAT_MAP_NUMBER_CONSTRUCTOR;

      namespace CIRCLE_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
          distance?: number;
          duration: number;
          ccw: boolean;
          rotateTime?: number;
          distAdjustSpeed: number;
          zDistance?: number;
          waitUntil?: string;
          waitTargetAlign: boolean;
        }
      }
      interface CIRCLE_ENTITY extends ig.ActionStepBase {
        _wm: ig.Config;
        entity: ig.Event.GetEntity;
        distance: number;
        duration: number;
        rotateTime: number;
        distAdjustSpeed: number;
        ccw: boolean;
        zDistance: number;
        waitUntil: ig.VarCondition;
        waitTargetAlign: boolean;
      }
      interface CIRCLE_ENTITY_CONSTRUCTOR extends ImpactClass<CIRCLE_ENTITY> {
        new (settings: ig.ACTION_STEP.CIRCLE_ENTITY.Settings): CIRCLE_ENTITY;
      }
      var CIRCLE_ENTITY: CIRCLE_ENTITY_CONSTRUCTOR;
    }
  }
}
