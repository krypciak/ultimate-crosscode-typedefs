// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace CALL_EVENT_FROM_SHEET {
        interface Input {
          cornerPos: Vec2;
          targetPos: Vec2;
          wait: number;
          postCondition: string;
          variable: string;
        }
        interface EventSheetCall {
          path: string;
          name: string;
          input: Input;
        }
        interface Settings {
          eventCall: ig.EVENT_STEP.CALL_EVENT_FROM_SHEET.EventSheetCall;
        }
      }
      interface CALL_EVENT_FROM_SHEET extends ig.EventStepBase {
        eventSheet: ig.EventSheet;
        eventName: string;
        eventInput: ig.EVENT_STEP.CALL_EVENT_FROM_SHEET.Input;
        _wm: ig.Config;

        clearCached(this: this): void;
        getInlineEvent(this: this): ig.Event;
        getInlineEventInput(this: this): ig.EVENT_STEP.CALL_EVENT_FROM_SHEET.Input;
      }
      interface CALL_EVENT_FROM_SHEET_CONSTRUCTOR extends ImpactClass<CALL_EVENT_FROM_SHEET> {
        new (settings: ig.EVENT_STEP.CALL_EVENT_FROM_SHEET.Settings): CALL_EVENT_FROM_SHEET;
      }
      var CALL_EVENT_FROM_SHEET: CALL_EVENT_FROM_SHEET_CONSTRUCTOR;
    }
  }
}
