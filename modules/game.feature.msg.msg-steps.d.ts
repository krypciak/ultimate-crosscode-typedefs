// requires impact.base.action
// requires impact.base.event
// requires game.feature.msg.message-model
// requires game.feature.character.character
// requires game.feature.gui.widget.demo-stats
// requires game.feature.gui.widget.demo-highscore
// requires game.feature.msg.gui.dream-msg

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SHOW_MSG {
        interface Settings {
          person: sc.MessageModel.PersonConfig;
          message: ig.LangLabel.Data;
          autoContinue: boolean;
        }
      }
      interface SHOW_MSG extends ig.EventStepBase {
        person: unknown;
        charExpression: sc.CharacterExpression;
        message: ig.LangLabel;
        autoContinue: boolean;
        hiCount: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SHOW_MSG_CONSTRUCTOR extends ImpactClass<SHOW_MSG> {
        new (settings: ig.EVENT_STEP.SHOW_MSG.Settings): SHOW_MSG;
      }
      var SHOW_MSG: SHOW_MSG_CONSTRUCTOR;

      namespace RING_PRIVATE_MSG {
        interface Settings {
          outgoing: boolean;
        }
      }
      interface RING_PRIVATE_MSG extends ig.EventStepBase {
        outgoing: boolean;
        _wm: ig.Config;
      }
      interface RING_PRIVATE_MSG_CONSTRUCTOR extends ImpactClass<RING_PRIVATE_MSG> {
        new (settings: ig.EVENT_STEP.RING_PRIVATE_MSG.Settings): RING_PRIVATE_MSG;
      }
      var RING_PRIVATE_MSG: RING_PRIVATE_MSG_CONSTRUCTOR;

      namespace START_PRIVATE_MSG {
        interface Settings {}
      }
      interface START_PRIVATE_MSG extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface START_PRIVATE_MSG_CONSTRUCTOR extends ImpactClass<START_PRIVATE_MSG> {
        new (settings: ig.EVENT_STEP.START_PRIVATE_MSG.Settings): START_PRIVATE_MSG;
      }
      var START_PRIVATE_MSG: START_PRIVATE_MSG_CONSTRUCTOR;

      namespace END_PRIVATE_MSG {
        interface Settings {
          skipSounds: boolean;
        }
      }
      interface END_PRIVATE_MSG extends ig.EventStepBase {
        _wm: ig.Config;
        skipSounds: boolean;
      }
      interface END_PRIVATE_MSG_CONSTRUCTOR extends ImpactClass<END_PRIVATE_MSG> {
        new (settings: ig.EVENT_STEP.END_PRIVATE_MSG.Settings): END_PRIVATE_MSG;
      }
      var END_PRIVATE_MSG: END_PRIVATE_MSG_CONSTRUCTOR;

      namespace SHOW_OFFSCREEN_MSG {
        interface Settings {
          side: keyof typeof sc.MESSAGE_SIDES;
          message: ig.LangLabel.Data;
          autoContinue: boolean;
        }
      }
      interface SHOW_OFFSCREEN_MSG extends ig.EventStepBase {
        leftSide: boolean;
        message: ig.LangLabel;
        autoContinue: boolean;
        _wm: ig.Config;
      }
      interface SHOW_OFFSCREEN_MSG_CONSTRUCTOR extends ImpactClass<SHOW_OFFSCREEN_MSG> {
        new (settings: ig.EVENT_STEP.SHOW_OFFSCREEN_MSG.Settings): SHOW_OFFSCREEN_MSG;
      }
      var SHOW_OFFSCREEN_MSG: SHOW_OFFSCREEN_MSG_CONSTRUCTOR;

      namespace SHOW_CHOICE {
        interface Settings {
          person: sc.MessageModel.PersonConfig;
          options: sc.MessageModel.OptionConfig[];
          columns?: number;
          forceWidth?: number;
        }
      }
      interface SHOW_CHOICE extends ig.EventStepBase {
        person: unknown;
        charExpression: unknown;
        columns: unknown;
        forceWidth: number;
        options: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SHOW_CHOICE_CONSTRUCTOR extends ImpactClass<SHOW_CHOICE> {
        new (settings: ig.EVENT_STEP.SHOW_CHOICE.Settings): SHOW_CHOICE;
      }
      var SHOW_CHOICE: SHOW_CHOICE_CONSTRUCTOR;

      namespace ADD_MSG_PERSON {
        interface Settings {
          person: sc.MessageModel.PersonConfig;
          name?: ig.LangLabel.Data;
          side: keyof typeof sc.MESSAGE_SIDES;
          order: number;
          clearSide: boolean;
        }
      }
      interface ADD_MSG_PERSON extends ig.EventStepBase {
        charExpression: sc.CharacterExpression;
        side: sc.MESSAGE_SIDES;
        order: number;
        clearSide: boolean;
        name: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface ADD_MSG_PERSON_CONSTRUCTOR extends ImpactClass<ADD_MSG_PERSON> {
        new (settings: ig.EVENT_STEP.ADD_MSG_PERSON.Settings): ADD_MSG_PERSON;
      }
      var ADD_MSG_PERSON: ADD_MSG_PERSON_CONSTRUCTOR;

      namespace REMOVE_MSG_PERSON {
        interface Settings {
          person: string;
        }
      }
      interface REMOVE_MSG_PERSON extends ig.EventStepBase {
        person: string;
        _wm: ig.Config;
      }
      interface REMOVE_MSG_PERSON_CONSTRUCTOR extends ImpactClass<REMOVE_MSG_PERSON> {
        new (settings: ig.EVENT_STEP.REMOVE_MSG_PERSON.Settings): REMOVE_MSG_PERSON;
      }
      var REMOVE_MSG_PERSON: REMOVE_MSG_PERSON_CONSTRUCTOR;

      namespace SET_MSG_EXPRESSION {
        interface Settings {
          person: sc.MessageModel.PersonConfig;
        }
      }
      interface SET_MSG_EXPRESSION extends ig.EventStepBase {
        person: unknown;
        charExpression: sc.CharacterExpression;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SET_MSG_EXPRESSION_CONSTRUCTOR extends ImpactClass<SET_MSG_EXPRESSION> {
        new (settings: ig.EVENT_STEP.SET_MSG_EXPRESSION.Settings): SET_MSG_EXPRESSION;
      }
      var SET_MSG_EXPRESSION: SET_MSG_EXPRESSION_CONSTRUCTOR;

      namespace CLEAR_MSG {
        interface Settings {
          side?: keyof typeof sc.MESSAGE_SIDES_OR_ALL;
        }
      }
      interface CLEAR_MSG extends ig.EventStepBase {
        side: sc.MESSAGE_SIDES_OR_ALL;
        _wm: ig.Config;
      }
      interface CLEAR_MSG_CONSTRUCTOR extends ImpactClass<CLEAR_MSG> {
        new (settings: ig.EVENT_STEP.CLEAR_MSG.Settings): CLEAR_MSG;
      }
      var CLEAR_MSG: CLEAR_MSG_CONSTRUCTOR;

      namespace SHOW_CENTER_MSG {
        interface Settings {
          titleText: ig.LangLabel.Data;
          text: ig.LangLabel.Data;
          overMenu?: boolean;
        }
      }
      interface SHOW_CENTER_MSG extends ig.EventStepBase {
        titleText: ig.LangLabel;
        text: ig.LangLabel;
        overMenu: boolean;
        _wm: ig.Config;
      }
      interface SHOW_CENTER_MSG_CONSTRUCTOR extends ImpactClass<SHOW_CENTER_MSG> {
        new (settings: ig.EVENT_STEP.SHOW_CENTER_MSG.Settings): SHOW_CENTER_MSG;
      }
      var SHOW_CENTER_MSG: SHOW_CENTER_MSG_CONSTRUCTOR;

      namespace SHOW_DREAM_MSG {
        interface Settings {
          text: ig.LangLabel.Data;
          entity?: ig.Event.GetEntity;
          posType?: keyof typeof sc.DREAM_TEXT_POS_TYPE;
          offset: Vec2;
          time?: number;
          smallFont?: boolean;
        }
      }
      interface SHOW_DREAM_MSG extends ig.EventStepBase {
        titleText: unknown;
        text: ig.LangLabel;
        time: number;
        _wm: ig.Config;
        entity?: ig.Event.GetEntity;
        posType: sc.DREAM_TEXT_POS_TYPE;
        offset: Vec2;
        smallFont: boolean;
      }
      interface SHOW_DREAM_MSG_CONSTRUCTOR extends ImpactClass<SHOW_DREAM_MSG> {
        new (settings: ig.EVENT_STEP.SHOW_DREAM_MSG.Settings): SHOW_DREAM_MSG;
      }
      var SHOW_DREAM_MSG: SHOW_DREAM_MSG_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace SHOW_DREAM_MSG {
        interface Settings {
          text: ig.LangLabel.Data;
          entity?: ig.Event.GetEntity;
          posType?: keyof typeof sc.DREAM_TEXT_POS_TYPE;
          offset: Vec2;
          time: number;
        }
      }
      interface SHOW_DREAM_MSG extends ig.ActionStepBase {
        text: ig.LangLabel;
        time: number;
        _wm: ig.Config;
        entity?: ig.Event.GetEntity;
        posType: sc.DREAM_TEXT_POS_TYPE;
        offset: Vec2;
      }
      interface SHOW_DREAM_MSG_CONSTRUCTOR extends ImpactClass<SHOW_DREAM_MSG> {
        new (settings: ig.ACTION_STEP.SHOW_DREAM_MSG.Settings): SHOW_DREAM_MSG;
      }
      var SHOW_DREAM_MSG: SHOW_DREAM_MSG_CONSTRUCTOR;

      namespace CLEAR_DREAM_MSG {
        interface Settings {}
      }
      interface CLEAR_DREAM_MSG extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_DREAM_MSG_CONSTRUCTOR extends ImpactClass<CLEAR_DREAM_MSG> {
        new (settings: ig.ACTION_STEP.CLEAR_DREAM_MSG.Settings): CLEAR_DREAM_MSG;
      }
      var CLEAR_DREAM_MSG: CLEAR_DREAM_MSG_CONSTRUCTOR;
    }
  }
  namespace sc {
    namespace TUTORIAL_START_TYPE {
      interface Base {
        skippable?: boolean;
        title: string;
        yes: string;
        no: string;
      }
    }
    interface TUTORIAL_START_TYPE {
      TUTORIAL: sc.TUTORIAL_START_TYPE.Base;
      GENERIC: sc.TUTORIAL_START_TYPE.Base;
    }
    var TUTORIAL_START_TYPE: TUTORIAL_START_TYPE;
  }
  namespace ig {
    namespace EVENT_STEP {
      namespace SHOW_TUTORIAL_START {
        interface Settings {
          msgType?: keyof typeof sc.TUTORIAL_START_TYPE;
          title: ig.LangLabel.Data;
          content: ig.LangLabel.Data;
          image?: string;
        }
      }
      interface SHOW_TUTORIAL_START extends ig.EventStepBase {
        msgType: sc.TUTORIAL_START_TYPE;
        title: ig.LangLabel;
        content: ig.LangLabel;
        imageSrc?: string;
        _wm: ig.Config;
      }
      interface SHOW_TUTORIAL_START_CONSTRUCTOR extends ImpactClass<SHOW_TUTORIAL_START> {
        new (settings: ig.EVENT_STEP.SHOW_TUTORIAL_START.Settings): SHOW_TUTORIAL_START;
      }
      var SHOW_TUTORIAL_START: SHOW_TUTORIAL_START_CONSTRUCTOR;

      namespace SHOW_MODAL_CHOICE {
        interface ModalChoiceOption {
          label: ig.LangLabel.Data;
        }

        interface Settings {
          text: ig.LangLabel.Data;
          options: ig.EVENT_STEP.SHOW_MODAL_CHOICE.ModalChoiceOption[];
        }
      }
      interface SHOW_MODAL_CHOICE extends ig.EventStepBase {
        text: ig.LangLabel;
        options: unknown;
        _wm: ig.Config;
      }
      interface SHOW_MODAL_CHOICE_CONSTRUCTOR extends ImpactClass<SHOW_MODAL_CHOICE> {
        new (settings: ig.EVENT_STEP.SHOW_MODAL_CHOICE.Settings): SHOW_MODAL_CHOICE;
      }
      var SHOW_MODAL_CHOICE: SHOW_MODAL_CHOICE_CONSTRUCTOR;

      namespace SHOW_TUTORIAL_MSG {
        interface Settings {
          text: ig.LangLabel.Data;
          pos: Vec2;
          size: Vec2;
          direction: keyof typeof sc.TUT_BOX_POINTING_DIR;
          connectPos?: number;
          stopTime: boolean;
        }
      }
      interface SHOW_TUTORIAL_MSG extends ig.EventStepBase {
        pos: Vec2;
        size: Vec2;
        text: ig.LangLabel;
        direction: sc.TUT_BOX_POINTING_DIR_BASE;
        connectPos: number;
        _wm: ig.Config;
        stopTime: boolean;
      }
      interface SHOW_TUTORIAL_MSG_CONSTRUCTOR extends ImpactClass<SHOW_TUTORIAL_MSG> {
        new (settings: ig.EVENT_STEP.SHOW_TUTORIAL_MSG.Settings): SHOW_TUTORIAL_MSG;
      }
      var SHOW_TUTORIAL_MSG: SHOW_TUTORIAL_MSG_CONSTRUCTOR;

      namespace SHOW_TUTORIAL_PLAYER_MSG {
        interface Settings {
          text: ig.LangLabel.Data;
          targetType: unknown;
          size: Vec2;
          stopTime: boolean;
        }
      }
      interface SHOW_TUTORIAL_PLAYER_MSG extends ig.EventStepBase {
        pos: unknown;
        size: Vec2;
        text: ig.LangLabel;
        direction: unknown;
        connectPos: unknown;
        _wm: ig.Config;
        stopTime: boolean;
      }
      interface SHOW_TUTORIAL_PLAYER_MSG_CONSTRUCTOR extends ImpactClass<SHOW_TUTORIAL_PLAYER_MSG> {
        new (settings: ig.EVENT_STEP.SHOW_TUTORIAL_PLAYER_MSG.Settings): SHOW_TUTORIAL_PLAYER_MSG;
      }
      var SHOW_TUTORIAL_PLAYER_MSG: SHOW_TUTORIAL_PLAYER_MSG_CONSTRUCTOR;

      namespace SHOW_DEMO_HIGHSCORE {
        interface Settings {
          observatory?: boolean;
        }
      }
      interface SHOW_DEMO_HIGHSCORE extends ig.EventStepBase {
        observatory: boolean;
        _wm: ig.Config;
      }
      interface SHOW_DEMO_HIGHSCORE_CONSTRUCTOR extends ImpactClass<SHOW_DEMO_HIGHSCORE> {
        new (settings: ig.EVENT_STEP.SHOW_DEMO_HIGHSCORE.Settings): SHOW_DEMO_HIGHSCORE;
      }
      var SHOW_DEMO_HIGHSCORE: SHOW_DEMO_HIGHSCORE_CONSTRUCTOR;

      namespace SHOW_DEMO_TIME {
        interface Settings {
          observatory?: boolean;
        }
      }
      interface SHOW_DEMO_TIME extends ig.EventStepBase {
        observatory: boolean;
        _wm: ig.Config;
      }
      interface SHOW_DEMO_TIME_CONSTRUCTOR extends ImpactClass<SHOW_DEMO_TIME> {
        new (settings: ig.EVENT_STEP.SHOW_DEMO_TIME.Settings): SHOW_DEMO_TIME;
      }
      var SHOW_DEMO_TIME: SHOW_DEMO_TIME_CONSTRUCTOR;

      namespace SHOW_GET_MSG {
        interface Settings {
          msgType: unknown;
          object: ig.LangLabel.Data;
        }
      }
      interface SHOW_GET_MSG extends ig.EventStepBase {
        text: unknown;
        track: ig.BgmTrack;
        wordLearned: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SHOW_GET_MSG_CONSTRUCTOR extends ImpactClass<SHOW_GET_MSG> {
        new (settings: ig.EVENT_STEP.SHOW_GET_MSG.Settings): SHOW_GET_MSG;
      }
      var SHOW_GET_MSG: SHOW_GET_MSG_CONSTRUCTOR;

      namespace SHOW_SIDE_MSG {
        interface Settings {
          person: sc.MessageModel.PersonConfig;
          message: ig.LangLabel.Data;
        }
      }
      interface SHOW_SIDE_MSG extends ig.EventStepBase {
        charExpression: sc.CharacterExpression;
        message: ig.LangLabel;
        hiCount: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SHOW_SIDE_MSG_CONSTRUCTOR extends ImpactClass<SHOW_SIDE_MSG> {
        new (settings: ig.EVENT_STEP.SHOW_SIDE_MSG.Settings): SHOW_SIDE_MSG;
      }
      var SHOW_SIDE_MSG: SHOW_SIDE_MSG_CONSTRUCTOR;

      namespace CLEAR_SIDE_MSG {
        interface Settings {}
      }
      interface CLEAR_SIDE_MSG extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_SIDE_MSG_CONSTRUCTOR extends ImpactClass<CLEAR_SIDE_MSG> {
        new (settings: ig.EVENT_STEP.CLEAR_SIDE_MSG.Settings): CLEAR_SIDE_MSG;
      }
      var CLEAR_SIDE_MSG: CLEAR_SIDE_MSG_CONSTRUCTOR;

      namespace SHOW_BOARD_MSG {
        interface Settings {
          text: ig.LangLabel.Data;
          center: boolean;
          side?: keyof typeof sc.MESSAGE_SIDES;
          autoContinue: boolean;
        }
      }
      interface SHOW_BOARD_MSG extends ig.EventStepBase {
        text: ig.LangLabel;
        title: unknown;
        center: boolean;
        _wm: ig.Config;
        side: sc.MESSAGE_SIDES;
        autoContinue: boolean;
      }
      interface SHOW_BOARD_MSG_CONSTRUCTOR extends ImpactClass<SHOW_BOARD_MSG> {
        new (settings: ig.EVENT_STEP.SHOW_BOARD_MSG.Settings): SHOW_BOARD_MSG;
      }
      var SHOW_BOARD_MSG: SHOW_BOARD_MSG_CONSTRUCTOR;

      namespace CLEAR_BOARD_MSG {
        interface Settings {}
      }
      interface CLEAR_BOARD_MSG extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_BOARD_MSG_CONSTRUCTOR extends ImpactClass<CLEAR_BOARD_MSG> {
        new (settings: ig.EVENT_STEP.CLEAR_BOARD_MSG.Settings): CLEAR_BOARD_MSG;
      }
      var CLEAR_BOARD_MSG: CLEAR_BOARD_MSG_CONSTRUCTOR;

      namespace SET_AUTO_SCRIPT {
        interface Settings {
          value: boolean;
        }
      }
      interface SET_AUTO_SCRIPT extends ig.EventStepBase {
        value: boolean;
        _wm: ig.Config;
      }
      interface SET_AUTO_SCRIPT_CONSTRUCTOR extends ImpactClass<SET_AUTO_SCRIPT> {
        new (settings: ig.EVENT_STEP.SET_AUTO_SCRIPT.Settings): SET_AUTO_SCRIPT;
      }
      var SET_AUTO_SCRIPT: SET_AUTO_SCRIPT_CONSTRUCTOR;
    }
  }
}
