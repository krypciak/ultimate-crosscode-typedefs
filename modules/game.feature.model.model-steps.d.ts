// requires impact.base.action
// requires impact.base.event
// requires game.feature.player.player-model
// requires game.feature.model.game-model

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace START_DEMO_HIGHSCORE_TIMER {
        interface Settings {}
      }
      interface START_DEMO_HIGHSCORE_TIMER extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface START_DEMO_HIGHSCORE_TIMER_CONSTRUCTOR
        extends ImpactClass<START_DEMO_HIGHSCORE_TIMER> {
        new (
          settings: ig.EVENT_STEP.START_DEMO_HIGHSCORE_TIMER.Settings,
        ): START_DEMO_HIGHSCORE_TIMER;
      }
      var START_DEMO_HIGHSCORE_TIMER: START_DEMO_HIGHSCORE_TIMER_CONSTRUCTOR;

      namespace STOP_DEMO_HIGHSCORE_TIMER {
        interface Settings {
          observatory?: boolean;
        }
      }
      interface STOP_DEMO_HIGHSCORE_TIMER extends ig.EventStepBase {
        observatory: boolean;
        _wm: ig.Config;
      }
      interface STOP_DEMO_HIGHSCORE_TIMER_CONSTRUCTOR
        extends ImpactClass<STOP_DEMO_HIGHSCORE_TIMER> {
        new (settings: ig.EVENT_STEP.STOP_DEMO_HIGHSCORE_TIMER.Settings): STOP_DEMO_HIGHSCORE_TIMER;
      }
      var STOP_DEMO_HIGHSCORE_TIMER: STOP_DEMO_HIGHSCORE_TIMER_CONSTRUCTOR;

      namespace SET_TASK {
        interface Settings {
          task: ig.LangLabel.Data;
          keepDisplayed: boolean;
        }
      }
      interface SET_TASK extends ig.EventStepBase {
        task: ig.LangLabel;
        keepDisplayed: boolean;
        _wm: ig.Config;
      }
      interface SET_TASK_CONSTRUCTOR extends ImpactClass<SET_TASK> {
        new (settings: ig.EVENT_STEP.SET_TASK.Settings): SET_TASK;
      }
      var SET_TASK: SET_TASK_CONSTRUCTOR;

      namespace SET_PERMA_TASK {
        interface Settings {
          task: ig.LangLabel.Data;
        }
      }
      interface SET_PERMA_TASK extends ig.EventStepBase {
        task: ig.LangLabel;
        _wm: ig.Config;
      }
      interface SET_PERMA_TASK_CONSTRUCTOR extends ImpactClass<SET_PERMA_TASK> {
        new (settings: ig.EVENT_STEP.SET_PERMA_TASK.Settings): SET_PERMA_TASK;
      }
      var SET_PERMA_TASK: SET_PERMA_TASK_CONSTRUCTOR;

      namespace SET_PAUSE_MUSIC_STOP {
        interface Settings {
          stop: boolean;
        }
      }
      interface SET_PAUSE_MUSIC_STOP extends ig.EventStepBase {
        stop: boolean;
        _wm: ig.Config;
      }
      interface SET_PAUSE_MUSIC_STOP_CONSTRUCTOR extends ImpactClass<SET_PAUSE_MUSIC_STOP> {
        new (settings: ig.EVENT_STEP.SET_PAUSE_MUSIC_STOP.Settings): SET_PAUSE_MUSIC_STOP;
      }
      var SET_PAUSE_MUSIC_STOP: SET_PAUSE_MUSIC_STOP_CONSTRUCTOR;

      namespace SET_MOBILITY_BLOCK {
        interface Settings {
          value: keyof typeof sc.GAME_MOBILITY_BLOCK;
        }
      }
      interface SET_MOBILITY_BLOCK extends ig.EventStepBase {
        value: keyof typeof sc.GAME_MOBILITY_BLOCK;
        _wm: ig.Config;
      }
      interface SET_MOBILITY_BLOCK_CONSTRUCTOR extends ImpactClass<SET_MOBILITY_BLOCK> {
        new (settings: ig.EVENT_STEP.SET_MOBILITY_BLOCK.Settings): SET_MOBILITY_BLOCK;
      }
      var SET_MOBILITY_BLOCK: SET_MOBILITY_BLOCK_CONSTRUCTOR;

      namespace ACTIVATE_CANCEL_BUTTON {
        interface Settings {
          text: ig.LangLabel.Data;
        }
      }
      interface ACTIVATE_CANCEL_BUTTON extends ig.EventStepBase {
        text: unknown;
        _wm: ig.Config;
      }
      interface ACTIVATE_CANCEL_BUTTON_CONSTRUCTOR extends ImpactClass<ACTIVATE_CANCEL_BUTTON> {
        new (settings: ig.EVENT_STEP.ACTIVATE_CANCEL_BUTTON.Settings): ACTIVATE_CANCEL_BUTTON;
      }
      var ACTIVATE_CANCEL_BUTTON: ACTIVATE_CANCEL_BUTTON_CONSTRUCTOR;

      namespace CLEAR_CANCEL_BUTTON {
        interface Settings {}
      }
      interface CLEAR_CANCEL_BUTTON extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_CANCEL_BUTTON_CONSTRUCTOR extends ImpactClass<CLEAR_CANCEL_BUTTON> {
        new (settings: ig.EVENT_STEP.CLEAR_CANCEL_BUTTON.Settings): CLEAR_CANCEL_BUTTON;
      }
      var CLEAR_CANCEL_BUTTON: CLEAR_CANCEL_BUTTON_CONSTRUCTOR;

      namespace SET_FORCE_COMBAT {
        interface Settings {
          value: boolean;
        }
      }
      interface SET_FORCE_COMBAT extends ig.EventStepBase {
        value: boolean;
        _wm: ig.Config;
      }
      interface SET_FORCE_COMBAT_CONSTRUCTOR extends ImpactClass<SET_FORCE_COMBAT> {
        new (settings: ig.EVENT_STEP.SET_FORCE_COMBAT.Settings): SET_FORCE_COMBAT;
      }
      var SET_FORCE_COMBAT: SET_FORCE_COMBAT_CONSTRUCTOR;

      namespace FORCE_START_S_RANK {
        interface Settings {}
      }
      interface FORCE_START_S_RANK extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface FORCE_START_S_RANK_CONSTRUCTOR extends ImpactClass<FORCE_START_S_RANK> {
        new (settings: ig.EVENT_STEP.FORCE_START_S_RANK.Settings): FORCE_START_S_RANK;
      }
      var FORCE_START_S_RANK: FORCE_START_S_RANK_CONSTRUCTOR;

      namespace INCREASE_COMBAT_RANK {
        interface Settings {
          value: number;
        }
      }
      interface INCREASE_COMBAT_RANK extends ig.EventStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface INCREASE_COMBAT_RANK_CONSTRUCTOR extends ImpactClass<INCREASE_COMBAT_RANK> {
        new (settings: ig.EVENT_STEP.INCREASE_COMBAT_RANK.Settings): INCREASE_COMBAT_RANK;
      }
      var INCREASE_COMBAT_RANK: INCREASE_COMBAT_RANK_CONSTRUCTOR;

      namespace CLEAR_TASK {
        interface Settings {}
      }
      interface CLEAR_TASK extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_TASK_CONSTRUCTOR extends ImpactClass<CLEAR_TASK> {
        new (settings: ig.EVENT_STEP.CLEAR_TASK.Settings): CLEAR_TASK;
      }
      var CLEAR_TASK: CLEAR_TASK_CONSTRUCTOR;

      namespace SET_PLAYER_CORE {
        interface Settings {
          core: keyof typeof sc.PLAYER_CORE;
          value: boolean;
        }
      }
      interface SET_PLAYER_CORE extends ig.EventStepBase {
        core: sc.PLAYER_CORE;
        value: boolean;
        _wm: ig.Config;
      }
      interface SET_PLAYER_CORE_CONSTRUCTOR extends ImpactClass<SET_PLAYER_CORE> {
        new (settings: ig.EVENT_STEP.SET_PLAYER_CORE.Settings): SET_PLAYER_CORE;
      }
      var SET_PLAYER_CORE: SET_PLAYER_CORE_CONSTRUCTOR;

      namespace SET_PLAYER_SP_LEVEL {
        interface Settings {
          level: unknown;
        }
      }
      interface SET_PLAYER_SP_LEVEL extends ig.EventStepBase {
        level: unknown;
        _wm: ig.Config;
      }
      interface SET_PLAYER_SP_LEVEL_CONSTRUCTOR extends ImpactClass<SET_PLAYER_SP_LEVEL> {
        new (settings: ig.EVENT_STEP.SET_PLAYER_SP_LEVEL.Settings): SET_PLAYER_SP_LEVEL;
      }
      var SET_PLAYER_SP_LEVEL: SET_PLAYER_SP_LEVEL_CONSTRUCTOR;

      namespace INCREASE_PLAYER_SP_LEVEL {
        interface Settings {}
      }
      interface INCREASE_PLAYER_SP_LEVEL extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface INCREASE_PLAYER_SP_LEVEL_CONSTRUCTOR extends ImpactClass<INCREASE_PLAYER_SP_LEVEL> {
        new (settings: ig.EVENT_STEP.INCREASE_PLAYER_SP_LEVEL.Settings): INCREASE_PLAYER_SP_LEVEL;
      }
      var INCREASE_PLAYER_SP_LEVEL: INCREASE_PLAYER_SP_LEVEL_CONSTRUCTOR;

      namespace ADD_PLAYER_EXP {
        interface Settings {
          exp: ig.Event.NumberExpression;
          level?: number;
        }
      }
      interface ADD_PLAYER_EXP extends ig.EventStepBase {
        exp: ig.Event.NumberExpression;
        level: number;
        _wm: ig.Config;
      }
      interface ADD_PLAYER_EXP_CONSTRUCTOR extends ImpactClass<ADD_PLAYER_EXP> {
        new (settings: ig.EVENT_STEP.ADD_PLAYER_EXP.Settings): ADD_PLAYER_EXP;
      }
      var ADD_PLAYER_EXP: ADD_PLAYER_EXP_CONSTRUCTOR;

      namespace SET_PLAYER_LEVEL_DEBUG {
        interface Settings {
          level: number;
        }
      }
      interface SET_PLAYER_LEVEL_DEBUG extends ig.EventStepBase {
        level: number;
        _wm: ig.Config;
      }
      interface SET_PLAYER_LEVEL_DEBUG_CONSTRUCTOR extends ImpactClass<SET_PLAYER_LEVEL_DEBUG> {
        new (settings: ig.EVENT_STEP.SET_PLAYER_LEVEL_DEBUG.Settings): SET_PLAYER_LEVEL_DEBUG;
      }
      var SET_PLAYER_LEVEL_DEBUG: SET_PLAYER_LEVEL_DEBUG_CONSTRUCTOR;

      namespace SET_ALL_PLAYER_CORE {
        interface Settings {
          value: boolean;
        }
      }
      interface SET_ALL_PLAYER_CORE extends ig.EventStepBase {
        value: boolean;
        _wm: ig.Config;
      }
      interface SET_ALL_PLAYER_CORE_CONSTRUCTOR extends ImpactClass<SET_ALL_PLAYER_CORE> {
        new (settings: ig.EVENT_STEP.SET_ALL_PLAYER_CORE.Settings): SET_ALL_PLAYER_CORE;
      }
      var SET_ALL_PLAYER_CORE: SET_ALL_PLAYER_CORE_CONSTRUCTOR;
    }
  }
}
