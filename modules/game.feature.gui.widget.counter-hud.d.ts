// requires game.feature.gui.hud.right-hud
// requires impact.feature.gui.base.basic-gui
// requires impact.base.image

export {};

declare global {
  namespace ig {
    namespace GUI {
      namespace CounterHud {
        interface Settings {
          taskTitle: ig.LangLabel.Data;
          maxCount: number;
          variable: string;
        }
      }
      interface CounterHud extends sc.RightHudBoxGui, sc.Model.Observer {
        maxCount: number;
        currentCount: number;
        variable: string;
        zIndex: number;
        _wm: ig.Config;
        maxNumberGui: sc.MaxNumberGui;

        varsChanged(this: this): void;
        updateNumber(this: this): void;
        onSpawn(this: this): void;
      }
      interface CounterHudConstructor extends ImpactClass<CounterHud> {
        new (settings: ig.GUI.CounterHud.Settings): CounterHud;

        spawnHandler(rightHudBox: sc.RightHudBoxGui): void;
      }

      namespace ScoreHud {
        interface Settings {
          taskTitle: ig.LangLabel.Data;
          maxCount: number;
          variable: string;
          cutsceneOkay?: boolean;
          maxValue?: number;
          time?: number;
          signed?: boolean;
          useDots?: boolean;
        }
      }
      interface ScoreHud extends sc.RightHudBoxGui, sc.Model.Observer {
        maxCount: number;
        currentCount: number;
        variable: string;
        maxNumberGui: sc.MaxNumberGui;
        zIndex: number;
        _wm: ig.Config;

        numberGui: sc.NumberGui;
        _cutscene: boolean;

        varsChanged(this: this): void;
        onSpawn(this: this): void;
      }
      interface ScoreHudConstructor extends ImpactClass<ScoreHud> {
        new (settings: ig.GUI.ScoreHud.Settings): ScoreHud;

        spawnHandler(rightHudBox: sc.RightHudBoxGui): void;
      }
    }
    interface GUI {
      CounterHud: GUI.CounterHudConstructor;
      ScoreHud: GUI.ScoreHudConstructor;
    }
  }
}
