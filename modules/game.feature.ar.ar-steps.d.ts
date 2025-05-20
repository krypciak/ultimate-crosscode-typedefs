// requires impact.base.action
// requires impact.base.event
// requires game.feature.ar.gui.ar-box

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SHOW_AR_MSG {
        interface Settings {
          entity: ig.Event.GetEntity;
          text: ig.LangLabel.Data;
          time: ig.Event.NumberExpression;
          mode: keyof typeof sc.AR_BOX_MODE;
          color: keyof typeof sc.AR_COLOR;
          hideOutsideOfScreen: boolean;
          partName?: string;
          varFill?: string;
          varFillMax?: ig.Event.NumberExpression;
        }
      }
      interface SHOW_AR_MSG extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        text: ig.LangLabel;
        time: ig.Event.NumberExpression;
        mode: sc.AR_BOX_MODE;
        color: sc.AR_COLOR;
        partName?: string;
        varFill?: string;
        varFillMax?: ig.Event.NumberExpression;
        _wm: ig.Config;
      }
      interface SHOW_AR_MSGConstructor extends ImpactClass<SHOW_AR_MSG> {
        new (settings: ig.EVENT_STEP.SHOW_AR_MSG.Settings): SHOW_AR_MSG;
      }
      var SHOW_AR_MSG: SHOW_AR_MSGConstructor;

      namespace CLEAR_AR_MSG {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface CLEAR_AR_MSG extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface CLEAR_AR_MSG_CONSTRUCTOR extends ImpactClass<CLEAR_AR_MSG> {
        new (settings: ig.EVENT_STEP.CLEAR_AR_MSG.Settings): CLEAR_AR_MSG;
      }
      var CLEAR_AR_MSG: CLEAR_AR_MSG_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace SHOW_AR_MSG {
        interface Settings {
          text: ig.LangLabel.Data;
          time: ig.Event.NumberExpression;
          mode: string;
          color: string;
          actionDetached: boolean;
          hideOutsideOfScreen: boolean;
          partName?: string;
          tracker?: string;
          varFill?: string;
          varFillMax?: ig.Event.NumberExpression;
        }
      }
      interface SHOW_AR_MSG extends ig.ActionStepBase {
        text: ig.LangLabel;
        time: ig.Event.NumberExpression;
        mode: sc.AR_BOX_MODE;
        color: sc.AR_COLOR;
        actionDetached: boolean;
        partName?: string;
        varFill?: string;
        varFillMax?: ig.Event.NumberExpression;
        _wm: ig.Config;
        hideOutsideOfScreen: boolean;
        tracker: string;
      }
      interface SHOW_AR_MSG_CONSTRUCTOR extends ImpactClass<SHOW_AR_MSG> {
        new (settings: ig.ACTION_STEP.SHOW_AR_MSG.Settings): SHOW_AR_MSG;
      }
      var SHOW_AR_MSG: SHOW_AR_MSG_CONSTRUCTOR;

      namespace CLEAR_AR_MSG {
        interface Settings {}
      }
      interface CLEAR_AR_MSG extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_AR_MSG_CONSTRUCTOR extends ImpactClass<CLEAR_AR_MSG> {
        new (settings: ig.ACTION_STEP.CLEAR_AR_MSG.Settings): CLEAR_AR_MSG;
      }
      var CLEAR_AR_MSG: CLEAR_AR_MSG_CONSTRUCTOR;
    }
  }
}
