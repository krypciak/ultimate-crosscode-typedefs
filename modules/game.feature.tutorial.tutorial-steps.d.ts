// requires impact.base.action
// requires game.feature.tutorial.input-forcer

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace START_FORCE_INPUT {
        interface Settings {
          inputEntry: keyof typeof sc.INPUT_FORCER_ENTRIES;
          title: ig.LangLabel.Data;
          textKeyboard: ig.LangLabel.Data;
          textGamepad: ig.LangLabel.Data;
        }
      }
      interface START_FORCE_INPUT extends ig.EventStepBase {
        inputEntry: keyof typeof sc.INPUT_FORCER_ENTRIES;
        title: ig.LangLabel.Data;
        textKeyboard: ig.LangLabel.Data;
        textGamepad: ig.LangLabel.Data;
        _wm: ig.Config;
      }
      interface START_FORCE_INPUT_CONSTRUCTOR extends ImpactClass<START_FORCE_INPUT> {
        new (settings: ig.EVENT_STEP.START_FORCE_INPUT.Settings): START_FORCE_INPUT;
      }
      var START_FORCE_INPUT: START_FORCE_INPUT_CONSTRUCTOR;

      namespace CLEAR_FORCE_INPUT {
        interface Settings {}
      }
      interface CLEAR_FORCE_INPUT extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_FORCE_INPUT_CONSTRUCTOR extends ImpactClass<CLEAR_FORCE_INPUT> {
        new (settings: ig.EVENT_STEP.CLEAR_FORCE_INPUT.Settings): CLEAR_FORCE_INPUT;
      }
      var CLEAR_FORCE_INPUT: CLEAR_FORCE_INPUT_CONSTRUCTOR;
    }
  }
}
