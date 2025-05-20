// requires impact.base.action
// requires impact.base.entity

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace ENABLED_STATS {
        interface Settings {}
      }
      interface ENABLED_STATS extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface ENABLED_STATS_CONSTRUCTOR extends ImpactClass<ENABLED_STATS> {
        new (settings: ig.EVENT_STEP.ENABLED_STATS.Settings): ENABLED_STATS;
      }
      var ENABLED_STATS: ENABLED_STATS_CONSTRUCTOR;

      namespace DISABLE_STATS {
        interface Settings {}
      }
      interface DISABLE_STATS extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface DISABLE_STATS_CONSTRUCTOR extends ImpactClass<DISABLE_STATS> {
        new (settings: ig.EVENT_STEP.DISABLE_STATS.Settings): DISABLE_STATS;
      }
      var DISABLE_STATS: DISABLE_STATS_CONSTRUCTOR;

      namespace UNLOCK_TROPHY {
        interface Settings {
          trophy: string;
        }
      }
      interface UNLOCK_TROPHY extends ig.EventStepBase {
        trophy: string;
        _wm: ig.Config;
      }
      interface UNLOCK_TROPHY_CONSTRUCTOR extends ImpactClass<UNLOCK_TROPHY> {
        new (settings: ig.EVENT_STEP.UNLOCK_TROPHY.Settings): UNLOCK_TROPHY;
      }
      var UNLOCK_TROPHY: UNLOCK_TROPHY_CONSTRUCTOR;

      namespace ADD_STAT_MAP_NUMBER {
        interface Settings {
          map: string;
          stat: string;
          value: number;
        }
      }
      interface ADD_STAT_MAP_NUMBER extends ig.EventStepBase {
        map: string;
        stat: string;
        value: number;
        _wm: ig.Config;
      }
      interface ADD_STAT_MAP_NUMBER_CONSTRUCTOR extends ImpactClass<ADD_STAT_MAP_NUMBER> {
        new (settings: ig.EVENT_STEP.ADD_STAT_MAP_NUMBER.Settings): ADD_STAT_MAP_NUMBER;
      }
      var ADD_STAT_MAP_NUMBER: ADD_STAT_MAP_NUMBER_CONSTRUCTOR;

      namespace SET_STAT_MAP_NUMBER {
        interface Settings {
          map: string;
          stat: string;
          value: ig.Event.NumberExpression;
        }
      }
      interface SET_STAT_MAP_NUMBER extends ig.EventStepBase {
        map: string;
        stat: string;
        value: ig.Event.NumberExpression;
        _wm: ig.Config;
      }
      interface SET_STAT_MAP_NUMBER_CONSTRUCTOR extends ImpactClass<SET_STAT_MAP_NUMBER> {
        new (settings: ig.EVENT_STEP.SET_STAT_MAP_NUMBER.Settings): SET_STAT_MAP_NUMBER;
      }
      var SET_STAT_MAP_NUMBER: SET_STAT_MAP_NUMBER_CONSTRUCTOR;
    }
  }
}

