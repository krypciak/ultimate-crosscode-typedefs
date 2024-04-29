// requires impact.base.game
// requires game.config
// requires game.features
// requires game.beta

export {};

declare global {
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
        // @ts-expect-error
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
      effects: Record<
        'dust' | 'teleport' | 'npc' | 'death' | 'speedlines' | 'drops',
        ig.EffectSheet
      >;

      onGameLoopStart(this: this): void;
      getVersion(this: this): string;
      addTeleportMessage(this: this, message: string): void;
      start(this: this, startMode?: sc.START_MODE, transitionTime?: number): void;
      gotoTitle(this: this): void;
      transitionEnded(this: this): void;
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
