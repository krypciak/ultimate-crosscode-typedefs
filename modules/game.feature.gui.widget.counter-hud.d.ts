// requires game.feature.gui.hud.right-hud
// requires impact.feature.gui.base.basic-gui
// requires impact.base.image

export {};

declare global {
  namespace ig {
    namespace GUI {
      interface CounterHud extends sc.RightHudBoxGui {}
      interface CounterHudConstructor extends ImpactClass<CounterHud> {}

      namespace ScoreHud {
        interface Settings {
          taskTitle: string;
          maxCount: number;
          variable: string;
          cutsceneOkay?: boolean;
          maxValue?: number;
          time?: number;
          signed?: boolean;
          useDots?: boolean;
        }
      }
      interface ScoreHud extends sc.RightHudBoxGui {
        maxCount: number;
        currentCount: number;
        variable: string;
        maxNumberGui: sc.MaxNumberGui;
        zIndex: number;
        _wm: ig.Config;
      }
      interface ScoreHudConstructor extends ImpactClass<ScoreHud> {
        new (settings: ig.GUI.ScoreHud.Settings): ScoreHud;
      }
    }
    interface GUI {
      CounterHud: GUI.CounterHudConstructor;
      ScoreHud: GUI.ScoreHudConstructor;
    }
  }
}
