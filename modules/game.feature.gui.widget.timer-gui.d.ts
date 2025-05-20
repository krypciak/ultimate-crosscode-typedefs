// requires impact.base.event
// requires game.feature.gui.base.boxes
// requires game.feature.gui.base.numbers
// requires game.feature.gui.base.slick-box

export {};

declare global {
  namespace ig {
    namespace GUI {
      interface TimerGui extends sc.SlickBoxRawGui {}
      interface TimerGuiConstructor extends ImpactClass<TimerGuiConstructor> {}
    }
    interface GUI {
      TimerGui: GUI.TimerGuiConstructor;
    }

    namespace EVENT_STEP {
      namespace STOP_TIMER {
        interface Settings {
          hide: boolean;
        }
      }
      interface STOP_TIMER extends ig.EventStepBase {
        hide: boolean;
        _wm: ig.Config;
      }
      interface STOP_TIMER_CONSTRUCTOR extends ImpactClass<STOP_TIMER> {
        new (settings: ig.EVENT_STEP.STOP_TIMER.Settings): STOP_TIMER;
      }
      var STOP_TIMER: STOP_TIMER_CONSTRUCTOR;
    }
  }
}

