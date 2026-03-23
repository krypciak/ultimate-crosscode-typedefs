// requires game.feature.gui.hud.right-hud

export {};

declare global {
  namespace sc {
    interface TimersHudEntry extends ig.GuiElementBase {
      gfx: ig.Image;
      millis: sc.NumberGui;
      seconds: sc.NumberGui;
      minutes: sc.NumberGui;
      hours: sc.NumberGui;
      hourPoint: ig.ImageGui;
      timer: sc.TimerEntry;

      updateTime(this: this): void;
    }
    interface TimersHudEntryConstructor extends ImpactClass<TimersHudEntry> {
      new (timer: sc.TimerEntry): TimersHudEntry;
    }
    var TimersHudEntry: TimersHudEntryConstructor;

    interface TimersHud extends sc.RightHudBoxGui, sc.Model.Observer {
      entry: sc.TimersHudEntry;
      _cutscene: boolean;

      delayedRemove(this: this): void;
    }
    interface TimersHudConstructor extends ImpactClass<TimersHud> {
      new (timer: sc.TimerEntry, timerText?: string, isCutscene?: boolean): TimersHud;
    }
    var TimersHud: TimersHudConstructor;
  }
}
