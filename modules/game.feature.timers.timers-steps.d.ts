// requires impact.base.action
// requires impact.base.entity
// requires impact.base.event
// requires game.feature.timers.timers-model

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace ADD_TIMER {
        interface Settings {
          name: string;
          mode: keyof typeof sc.TIMER_TYPES;
          millis?: boolean;
          gui?: boolean;
          duration?: ig.Event.NumberExpression;
          area?: string;
          temp?: boolean;
          quest?: string;
          assist?: boolean;
        }
      }
      interface ADD_TIMER extends ig.EventStepBase {
        name: string;
        mode: sc.TIMER_TYPES;
        duration: ig.Event.NumberExpression;
        area: Nullable<string>;
        temp: Nullable<boolean>;
        showGui: boolean;
        millis: boolean;
        quest: Nullable<string>;
        _wm: ig.Config;
        assist: boolean;
      }
      interface ADD_TIMER_CONSTRUCTOR extends ImpactClass<ADD_TIMER> {
        new (settings: ig.EVENT_STEP.ADD_TIMER.Settings): ADD_TIMER;
      }
      var ADD_TIMER: ADD_TIMER_CONSTRUCTOR;

      namespace REMOVE_TIMER {
        interface Settings {
          name: string;
        }
      }
      interface REMOVE_TIMER extends ig.EventStepBase {
        name: string;
        _wm: ig.Config;
      }
      interface REMOVE_TIMER_CONSTRUCTOR extends ImpactClass<REMOVE_TIMER> {
        new (settings: ig.EVENT_STEP.REMOVE_TIMER.Settings): REMOVE_TIMER;
      }
      var REMOVE_TIMER: REMOVE_TIMER_CONSTRUCTOR;

      namespace RESET_TIMER {
        interface Settings {
          name: string;
          mode?: unknown;
          duration?: number;
        }
      }
      interface RESET_TIMER extends ig.EventStepBase {
        name: string;
        mode: unknown;
        duration: number;
        _wm: ig.Config;
      }
      interface RESET_TIMER_CONSTRUCTOR extends ImpactClass<RESET_TIMER> {
        new (settings: ig.EVENT_STEP.RESET_TIMER.Settings): RESET_TIMER;
      }
      var RESET_TIMER: RESET_TIMER_CONSTRUCTOR;

      namespace PAUSE_TIMER {
        interface Settings {
          name: string;
        }
      }
      interface PAUSE_TIMER extends ig.EventStepBase {
        name: string;
        _wm: ig.Config;
      }
      interface PAUSE_TIMER_CONSTRUCTOR extends ImpactClass<PAUSE_TIMER> {
        new (settings: ig.EVENT_STEP.PAUSE_TIMER.Settings): PAUSE_TIMER;
      }
      var PAUSE_TIMER: PAUSE_TIMER_CONSTRUCTOR;

      namespace RESUME_TIMER {
        interface Settings {
          name: string;
        }
      }
      interface RESUME_TIMER extends ig.EventStepBase {
        name: string;
        _wm: ig.Config;
      }
      interface RESUME_TIMER_CONSTRUCTOR extends ImpactClass<RESUME_TIMER> {
        new (settings: ig.EVENT_STEP.RESUME_TIMER.Settings): RESUME_TIMER;
      }
      var RESUME_TIMER: RESUME_TIMER_CONSTRUCTOR;
    }
  }
}
