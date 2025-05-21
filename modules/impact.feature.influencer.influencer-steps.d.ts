// requires impact.base.action
// requires impact.base.event
// requires impact.base.entity
// requires impact.feature.influencer.influencer

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {
      namespace ADD_TEMP_INFLUENCE {
        interface Settings {
          target: unknown;
          timeScale?: number;
          logicTimeScale?: number;
          moveXYScale?: number;
        }
      }
      interface ADD_TEMP_INFLUENCE extends ig.ActionStepBase {
        _wm: ig.Config;
        influenceEntry: ig.InfluenceEntry;
      }
      interface ADD_TEMP_INFLUENCE_CONSTRUCTOR extends ImpactClass<ADD_TEMP_INFLUENCE> {
        new (settings: ig.ACTION_STEP.ADD_TEMP_INFLUENCE.Settings): ADD_TEMP_INFLUENCE;
      }
      var ADD_TEMP_INFLUENCE: ADD_TEMP_INFLUENCE_CONSTRUCTOR;

      namespace CLEAR_TEMP_INFLUENCE {
        interface Settings {}
      }
      interface CLEAR_TEMP_INFLUENCE extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_TEMP_INFLUENCE_CONSTRUCTOR extends ImpactClass<CLEAR_TEMP_INFLUENCE> {
        new (settings: ig.ACTION_STEP.CLEAR_TEMP_INFLUENCE.Settings): CLEAR_TEMP_INFLUENCE;
      }
      var CLEAR_TEMP_INFLUENCE: CLEAR_TEMP_INFLUENCE_CONSTRUCTOR;
    }
  }
}
