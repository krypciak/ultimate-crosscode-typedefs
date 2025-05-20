// requires impact.base.action
// requires impact.base.event
// requires game.feature.new-game.new-game-model

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace APPLY_NEW_GAME_DATA {
        interface Settings {
          atRhombus: boolean;
        }
      }
      interface APPLY_NEW_GAME_DATA extends ig.EventStepBase {
        _wm: ig.Config;
        atRhombus: boolean;
      }
      interface APPLY_NEW_GAME_DATA_CONSTRUCTOR extends ImpactClass<APPLY_NEW_GAME_DATA> {
        new (settings: ig.EVENT_STEP.APPLY_NEW_GAME_DATA.Settings): APPLY_NEW_GAME_DATA;
      }
      var APPLY_NEW_GAME_DATA: APPLY_NEW_GAME_DATA_CONSTRUCTOR;
    }
  }
}
