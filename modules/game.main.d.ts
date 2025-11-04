// requires impact.base.game
// requires game.config
// requires game.features
// requires game.beta

export {};

declare global {
  var testGui: sc.TopMsgHudGui;

  namespace sc {
    enum START_MODE {
      STORY = 0,
      GRINDING = 1,
      PUZZLE = 2,
      NEW_GAME_PLUS = 3,
    }

    interface EmptyLoader extends ig.Loader {}
    interface EmptyLoaderConstructor extends ImpactClass<EmptyLoader> {}
    var EmptyLoader: EmptyLoaderConstructor;

    namespace CrossCode {
      interface Gui {
        statusHud: sc.StatusHudGui;
        rightHudPanel: sc.RightHudGui;
        // @ts-expect-error
        taskHud: sc.TaskHudBox;
        // @ts-expect-error
        moneyHud: sc.MoneyHudBox;
        itemHud: sc.ItemHudBox;
        // @ts-expect-error
        featHud: sc.FeatHud;
        // @ts-expect-error
        questHud: sc.FavQuestHud;
        // @ts-expect-error
        questTaskHud: sc.QuestUpdateHud;
        // @ts-expect-error
        landmarkHud: sc.LandmarkHud;
        // @ts-expect-error
        loreHud: sc.LoreUpdateHud;
        // @ts-expect-error
        dropHud: sc.DropUpdateHud;
      }
    }
    var gui: sc.CrossCode.Gui;

    interface CrossCode extends ig.Game {
      transitionTimer: number;
      currentTeleportColor: ig.RGBColorData;
      teleportColor: ig.RGBColorData & { lighter: boolean; timeIn: number; timeOut: number };
      effects: Record<
        'dust' | 'teleport' | 'npc' | 'death' | 'speedlines' | 'drops',
        ig.EffectSheet
      >;
      sounds: Record<'popup', ig.Sound>;
      _slotToLoad: number;
      _startMode: sc.START_MODE;
      _teleportMessages: string[];

      onGameLoopStart(this: this): void;
      getVersion(this: this): string;
      addTeleportMessage(this: this, message: string): void;
      start(this: this, startMode?: sc.START_MODE, transitionTime?: number): void;
      loadStart(this: this, slotId?: number): void;
      gotoTitle(this: this): void;
      transitionEnded(this: this): void;
      hardReset(this: this): void;
      reloadCheckpoint(this: this): void;
      reloadAutosave(this: this): void;
      respawn(this: this): void;
      setTeleportColor(this: this, r: number, g: number, b: number, lighter: number): void;
      setTeleportTime(this: this, timeIn: number, timeOut: number): void;
      handleLoadingComplete(this: this): void;
    }
    interface CrossCodeConstructor extends ImpactClass<CrossCode> {
      new (): CrossCode;
    }
    var CrossCode: CrossCodeConstructor;
  }

  namespace ig {
    var game: sc.CrossCode;
  }

  function startCrossCode(): void;
}
