// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.button
// requires impact.base.image

export {};

declare global {
  namespace ig.GUI {
    interface IntroScreen extends ig.SequenceGui {
      screenInteract: sc.ScreenInteractEntry;
    }
    interface IntroScreenConstructor extends ImpactClass<IntroScreen> {
      new (callback: (msg: ig.SEQUENCE_MSG, labelReached?: String) => void): IntroScreen;
    }
    var IntroScreen: IntroScreenConstructor;
  }
}
