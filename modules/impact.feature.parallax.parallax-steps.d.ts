// requires impact.feature.parallax.parallax
// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SHOW_PARALLAX {
        interface Settings {
          parallax: string;
        }
      }
      interface SHOW_PARALLAX extends ig.EventStepBase {
        parallaxGui: ig.GUI.Parallax;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SHOW_PARALLAX_CONSTRUCTOR extends ImpactClass<SHOW_PARALLAX> {
        new (settings: ig.EVENT_STEP.SHOW_PARALLAX.Settings): SHOW_PARALLAX;
      }
      var SHOW_PARALLAX: SHOW_PARALLAX_CONSTRUCTOR;
    }
  }
}
