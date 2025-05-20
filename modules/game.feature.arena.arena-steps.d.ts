// requires impact.base.action
// requires impact.base.entity
// requires impact.feature.camera.camera
// requires game.feature.arena.arena
// requires game.feature.arena.gui.arena-gui
// requires game.feature.arena.gui.arena-start-gui

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace RESET_ARENA_CHAIN {
        interface Settings {}
      }
      interface RESET_ARENA_CHAIN extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface RESET_ARENA_CHAIN_CONSTRUCTOR extends ImpactClass<RESET_ARENA_CHAIN> {
        new (settings: ig.EVENT_STEP.RESET_ARENA_CHAIN.Settings): RESET_ARENA_CHAIN;
      }
      var RESET_ARENA_CHAIN: RESET_ARENA_CHAIN_CONSTRUCTOR;

      namespace INCREASE_ARENA_CHAIN {
        interface Settings {
          amount?: number;
        }
      }
      interface INCREASE_ARENA_CHAIN extends ig.EventStepBase {
        _wm: ig.Config;
        amount: number;
      }
      interface INCREASE_ARENA_CHAIN_CONSTRUCTOR extends ImpactClass<INCREASE_ARENA_CHAIN> {
        new (settings: ig.EVENT_STEP.INCREASE_ARENA_CHAIN.Settings): INCREASE_ARENA_CHAIN;
      }
      var INCREASE_ARENA_CHAIN: INCREASE_ARENA_CHAIN_CONSTRUCTOR;

      namespace ADD_ARENA_SCORE_IGNORE {
        interface Settings {
          scoreType: keyof typeof sc.ARENA_SCORE_TYPES;
        }
      }
      interface ADD_ARENA_SCORE_IGNORE extends ig.EventStepBase {
        _wm: ig.Config;
        scoreType: keyof typeof sc.ARENA_SCORE_TYPES;
      }
      interface ADD_ARENA_SCORE_IGNORE_CONSTRUCTOR extends ImpactClass<ADD_ARENA_SCORE_IGNORE> {
        new (settings: ig.EVENT_STEP.ADD_ARENA_SCORE_IGNORE.Settings): ADD_ARENA_SCORE_IGNORE;
      }
      var ADD_ARENA_SCORE_IGNORE: ADD_ARENA_SCORE_IGNORE_CONSTRUCTOR;

      namespace REMOVE_ARENA_SCORE_IGNORE {
        interface Settings {
          scoreType: keyof typeof sc.ARENA_SCORE_TYPES;
        }
      }
      interface REMOVE_ARENA_SCORE_IGNORE extends ig.EventStepBase {
        _wm: ig.Config;
        scoreType: keyof typeof sc.ARENA_SCORE_TYPES;
      }
      interface REMOVE_ARENA_SCORE_IGNORE_CONSTRUCTOR
        extends ImpactClass<REMOVE_ARENA_SCORE_IGNORE> {
        new (settings: ig.EVENT_STEP.REMOVE_ARENA_SCORE_IGNORE.Settings): REMOVE_ARENA_SCORE_IGNORE;
      }
      var REMOVE_ARENA_SCORE_IGNORE: REMOVE_ARENA_SCORE_IGNORE_CONSTRUCTOR;

      namespace CLEAR_ARENA_SCORE_IGNORE {
        interface Settings {}
      }
      interface CLEAR_ARENA_SCORE_IGNORE extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_ARENA_SCORE_IGNORE_CONSTRUCTOR extends ImpactClass<CLEAR_ARENA_SCORE_IGNORE> {
        new (settings: ig.EVENT_STEP.CLEAR_ARENA_SCORE_IGNORE.Settings): CLEAR_ARENA_SCORE_IGNORE;
      }
      var CLEAR_ARENA_SCORE_IGNORE: CLEAR_ARENA_SCORE_IGNORE_CONSTRUCTOR;

      namespace ADD_ARENA_IGNORE_TYPE {
        interface Settings {
          enemy: string;
        }
      }
      interface ADD_ARENA_IGNORE_TYPE extends ig.EventStepBase {
        _wm: ig.Config;
        enemy: string;
      }
      interface ADD_ARENA_IGNORE_TYPE_CONSTRUCTOR extends ImpactClass<ADD_ARENA_IGNORE_TYPE> {
        new (settings: ig.EVENT_STEP.ADD_ARENA_IGNORE_TYPE.Settings): ADD_ARENA_IGNORE_TYPE;
      }
      var ADD_ARENA_IGNORE_TYPE: ADD_ARENA_IGNORE_TYPE_CONSTRUCTOR;

      namespace ADD_ARENA_SCORE {
        interface Settings {
          type?: keyof typeof sc.ARENA_SCORE_TYPES;
        }
      }
      interface ADD_ARENA_SCORE extends ig.EventStepBase {
        _wm: ig.Config;
        type: keyof typeof sc.ARENA_SCORE_TYPES;
      }
      interface ADD_ARENA_SCORE_CONSTRUCTOR extends ImpactClass<ADD_ARENA_SCORE> {
        new (settings: ig.EVENT_STEP.ADD_ARENA_SCORE.Settings): ADD_ARENA_SCORE;
      }
      var ADD_ARENA_SCORE: ADD_ARENA_SCORE_CONSTRUCTOR;

      namespace OPEN_ARENA_MENU {
        interface Settings {
          custom: boolean;
          noWait?: boolean;
        }
      }
      interface OPEN_ARENA_MENU extends ig.EventStepBase {
        arenaCache: sc.ArenaCache;
        custom: boolean;
        noWait: boolean;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface OPEN_ARENA_MENU_CONSTRUCTOR extends ImpactClass<OPEN_ARENA_MENU> {
        new (settings: ig.EVENT_STEP.OPEN_ARENA_MENU.Settings): OPEN_ARENA_MENU;
      }
      var OPEN_ARENA_MENU: OPEN_ARENA_MENU_CONSTRUCTOR;

      namespace START_ARENA_CUP {
        interface Settings {}
      }
      interface START_ARENA_CUP extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface START_ARENA_CUP_CONSTRUCTOR extends ImpactClass<START_ARENA_CUP> {
        new (settings: ig.EVENT_STEP.START_ARENA_CUP.Settings): START_ARENA_CUP;
      }
      var START_ARENA_CUP: START_ARENA_CUP_CONSTRUCTOR;

      namespace END_ARENA_CUP {
        interface Settings {}
      }
      interface END_ARENA_CUP extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface END_ARENA_CUP_CONSTRUCTOR extends ImpactClass<END_ARENA_CUP> {
        new (settings: ig.EVENT_STEP.END_ARENA_CUP.Settings): END_ARENA_CUP;
      }
      var END_ARENA_CUP: END_ARENA_CUP_CONSTRUCTOR;

      namespace CLEAR_ARENA_END_FLAG {
        interface Settings {}
      }
      interface CLEAR_ARENA_END_FLAG extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_ARENA_END_FLAG_CONSTRUCTOR extends ImpactClass<CLEAR_ARENA_END_FLAG> {
        new (settings: ig.EVENT_STEP.CLEAR_ARENA_END_FLAG.Settings): CLEAR_ARENA_END_FLAG;
      }
      var CLEAR_ARENA_END_FLAG: CLEAR_ARENA_END_FLAG_CONSTRUCTOR;

      namespace SPAWN_ARENA_WAVE {
        interface Settings {
          silent?: boolean;
          increase?: boolean;
          focusPlayer?: boolean;
        }
      }
      interface SPAWN_ARENA_WAVE extends ig.EventStepBase {
        _wm: ig.Config;
        silent: boolean;
        increase: boolean;
        focusPlayer: boolean;
      }
      interface SPAWN_ARENA_WAVE_CONSTRUCTOR extends ImpactClass<SPAWN_ARENA_WAVE> {
        new (settings: ig.EVENT_STEP.SPAWN_ARENA_WAVE.Settings): SPAWN_ARENA_WAVE;
      }
      var SPAWN_ARENA_WAVE: SPAWN_ARENA_WAVE_CONSTRUCTOR;

      namespace START_ARENA_ROUND {
        interface Settings {
          scoreGui?: boolean;
          timeGui?: boolean;
        }
      }
      interface START_ARENA_ROUND extends ig.EventStepBase {
        _wm: ig.Config;
        score: boolean;
        time: boolean;
      }
      interface START_ARENA_ROUND_CONSTRUCTOR extends ImpactClass<START_ARENA_ROUND> {
        new (settings: ig.EVENT_STEP.START_ARENA_ROUND.Settings): START_ARENA_ROUND;
      }
      var START_ARENA_ROUND: START_ARENA_ROUND_CONSTRUCTOR;

      namespace TP_TO_CUR_ARENA_ROUND {
        interface Settings {}
      }
      interface TP_TO_CUR_ARENA_ROUND extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface TP_TO_CUR_ARENA_ROUND_CONSTRUCTOR extends ImpactClass<TP_TO_CUR_ARENA_ROUND> {
        new (settings: ig.EVENT_STEP.TP_TO_CUR_ARENA_ROUND.Settings): TP_TO_CUR_ARENA_ROUND;
      }
      var TP_TO_CUR_ARENA_ROUND: TP_TO_CUR_ARENA_ROUND_CONSTRUCTOR;

      namespace PREP_ARENA_ROUND_END {
        interface Settings {}
      }
      interface PREP_ARENA_ROUND_END extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface PREP_ARENA_ROUND_END_CONSTRUCTOR extends ImpactClass<PREP_ARENA_ROUND_END> {
        new (settings: ig.EVENT_STEP.PREP_ARENA_ROUND_END.Settings): PREP_ARENA_ROUND_END;
      }
      var PREP_ARENA_ROUND_END: PREP_ARENA_ROUND_END_CONSTRUCTOR;

      namespace END_ARENA_ROUND {
        interface Settings {
          onDeath?: boolean;
        }
      }
      interface END_ARENA_ROUND extends ig.EventStepBase {
        _wm: ig.Config;
        onDeath: boolean;
      }
      interface END_ARENA_ROUND_CONSTRUCTOR extends ImpactClass<END_ARENA_ROUND> {
        new (settings: ig.EVENT_STEP.END_ARENA_ROUND.Settings): END_ARENA_ROUND;
      }
      var END_ARENA_ROUND: END_ARENA_ROUND_CONSTRUCTOR;

      namespace SHOW_ARENA_ROUND_GUI {
        interface Settings {
          wait: boolean;
        }
      }
      interface SHOW_ARENA_ROUND_GUI extends ig.EventStepBase {
        _wm: ig.Config;
        wait: boolean;
      }
      interface SHOW_ARENA_ROUND_GUI_CONSTRUCTOR extends ImpactClass<SHOW_ARENA_ROUND_GUI> {
        new (settings: ig.EVENT_STEP.SHOW_ARENA_ROUND_GUI.Settings): SHOW_ARENA_ROUND_GUI;
      }
      var SHOW_ARENA_ROUND_GUI: SHOW_ARENA_ROUND_GUI_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace ADD_ARENA_IGNORE_TYPE {
        interface Settings {
          enemy: string;
        }
      }
      interface ADD_ARENA_IGNORE_TYPE extends ig.ActionStepBase {
        _wm: ig.Config;
        enemy: string;
      }
      interface ADD_ARENA_IGNORE_TYPE_CONSTRUCTOR extends ImpactClass<ADD_ARENA_IGNORE_TYPE> {
        new (settings: ig.ACTION_STEP.ADD_ARENA_IGNORE_TYPE.Settings): ADD_ARENA_IGNORE_TYPE;
      }
      var ADD_ARENA_IGNORE_TYPE: ADD_ARENA_IGNORE_TYPE_CONSTRUCTOR;
    }
  }
}
