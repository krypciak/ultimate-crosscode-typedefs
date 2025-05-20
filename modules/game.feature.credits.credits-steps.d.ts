// requires impact.base.action
// requires impact.base.event
// requires game.feature.credits.credit-loadable

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SHOW_CREDIT_SECTION {
        interface Settings {
          name: string;
          credits: string;
        }
      }
      interface SHOW_CREDIT_SECTION extends ig.EventStepBase {
        name: string;
        credits: unknown;
        guiElement: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SHOW_CREDIT_SECTION_CONSTRUCTOR extends ImpactClass<SHOW_CREDIT_SECTION> {
        new (settings: ig.EVENT_STEP.SHOW_CREDIT_SECTION.Settings): SHOW_CREDIT_SECTION;
      }
      var SHOW_CREDIT_SECTION: SHOW_CREDIT_SECTION_CONSTRUCTOR;

      namespace SET_CREDITS_SPEED {
        interface Settings {
          value?: number;
        }
      }
      interface SET_CREDITS_SPEED extends ig.EventStepBase {
        value?: number;
        _wm: ig.Config;
      }
      interface SET_CREDITS_SPEED_CONSTRUCTOR extends ImpactClass<SET_CREDITS_SPEED> {
        new (settings: ig.EVENT_STEP.SET_CREDITS_SPEED.Settings): SET_CREDITS_SPEED;
      }
      var SET_CREDITS_SPEED: SET_CREDITS_SPEED_CONSTRUCTOR;

      namespace WAIT_UNTIL_CREDIT_TRIGGER {
        interface CreditsTriggerSelect {
          trigger: string;
        }
        interface Settings {
          credits: string;
          trigger: ig.EVENT_STEP.WAIT_UNTIL_CREDIT_TRIGGER.CreditsTriggerSelect;
        }
      }
      interface WAIT_UNTIL_CREDIT_TRIGGER extends ig.EventStepBase {
        credits: string;
        trigger: unknown;
        _wm: ig.Config;
      }
      interface WAIT_UNTIL_CREDIT_TRIGGER_CONSTRUCTOR
        extends ImpactClass<WAIT_UNTIL_CREDIT_TRIGGER> {
        new (settings: ig.EVENT_STEP.WAIT_UNTIL_CREDIT_TRIGGER.Settings): WAIT_UNTIL_CREDIT_TRIGGER;
      }
      var WAIT_UNTIL_CREDIT_TRIGGER: WAIT_UNTIL_CREDIT_TRIGGER_CONSTRUCTOR;

      namespace WAIT_UNTIL_CREDIT_SECTION_DONE {
        interface Settings {
          name: string;
          offscreen?: boolean;
        }
      }
      interface WAIT_UNTIL_CREDIT_SECTION_DONE extends ig.EventStepBase {
        name: string;
        offscreen: boolean;
        _wm: ig.Config;
      }
      interface WAIT_UNTIL_CREDIT_SECTION_DONE_CONSTRUCTOR
        extends ImpactClass<WAIT_UNTIL_CREDIT_SECTION_DONE> {
        new (
          settings: ig.EVENT_STEP.WAIT_UNTIL_CREDIT_SECTION_DONE.Settings,
        ): WAIT_UNTIL_CREDIT_SECTION_DONE;
      }
      var WAIT_UNTIL_CREDIT_SECTION_DONE: WAIT_UNTIL_CREDIT_SECTION_DONE_CONSTRUCTOR;
    }
  }
}
