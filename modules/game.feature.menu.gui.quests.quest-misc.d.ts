// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui
// requires impact.feature.interact.button-interact
// requires game.feature.interact.button-group
// requires game.feature.menu.gui.quests.quest-entries

export {};

declare global {
  namespace sc {
    interface SolvedLine extends ig.SimpleGui {
      ninepatch: ig.NinePatch;
      textGui: sc.TextGui;
    }
    interface SolvedLineConstructor extends ImpactClass<SolvedLine> {
      new (): SolvedLine;
    }
    var SolvedLine: SolvedLineConstructor;

    interface QuestBaseBox extends ig.BoxGui {
      ninepatch: ig.NinePatch;
      levelGui: sc.NumberGui;
      elite: number;

      setLevel(this: this, level?: Nullable<number>): void;
      setElite(this: this, isElite: boolean, isSolved: boolean): void;
    }
    interface QuestBaseBoxConstructor extends ImpactClass<QuestBaseBox> {
      new (
        width?: Nullable<number>,
        height?: Nullable<number>,
        level?: Nullable<number>,
      ): QuestBaseBox;
    }
    var QuestBaseBox: QuestBaseBoxConstructor;

    interface QuestInfoBoxActive extends ig.SimpleGui {
      gfx: ig.Image;
      lineGui: ig.ColorGui;
      taskContainer: ig.GuiElementBase;

      setTasks(this: this, quest: sc.Quest, currentTask: number): void;
      _addTask(this: this, index: number, quest: sc.Quest, y: number): number;
    }
    interface QuestInfoBoxActiveConstructor extends ImpactClass<QuestInfoBoxActive> {
      new (): QuestInfoBoxActive;
    }
    var QuestInfoBoxActive: QuestInfoBoxActiveConstructor;

    interface QuestInfoBoxSolved extends ig.SimpleGui {
      solvedGui: sc.SolvedLine;
      endDescription: sc.TextGui;
    }
    interface QuestInfoBoxSolvedConstructor extends ImpactClass<QuestInfoBoxSolved> {
      new (): QuestInfoBoxSolved;
    }
    var QuestInfoBoxSolved: QuestInfoBoxSolvedConstructor;

    interface QuestInfoBox extends sc.QuestBaseBox {
      gfx: ig.Image;
      titleGui: sc.TextGui;
      descriptionGui: sc.TextGui;
      locationGui: ig.ColorGui;
      locationText: sc.TextGui;
      activeView: sc.QuestInfoBoxActive;
      solvedView: sc.QuestInfoBoxSolved;

      setQuest(this: this, quest: sc.Quest): void;
      show(this: this): void;
      hide(this: this, skip?: boolean): void;
    }
    interface QuestInfoBoxConstructor extends ImpactClass<QuestInfoBox> {
      new (): QuestInfoBox;
    }
    var QuestInfoBox: QuestInfoBoxConstructor;

    interface QuestDialog extends sc.QuestBaseBox {
      gfx: ig.Image;
      titleGui: sc.TextGui;
      descriptionGui: sc.TextGui;
      endDescriptionGui: Nullable<sc.TextGui>;
      firstTaskGui: Nullable<sc.TextGui>;
      expGui: sc.TextGui;
      creditGui: sc.TextGui;
      cpGui: sc.TextGui;
      itemsGui: ig.GuiElementBase;
      solvedGui: Nullable<sc.SolvedLine>;
      quest: sc.Quest;

      setQuest(this: this, quest?: Nullable<sc.Quest>): void;
      setQuestRewards(this: this, quest: sc.Quest, hideRewards: boolean, finished: boolean): void;
    }
    interface QuestDialogConstructor extends ImpactClass<QuestDialog> {
      new (quest: sc.Quest, finished: boolean): QuestDialog;
    }
    var QuestDialog: QuestDialogConstructor;

    interface QuestDialogWrapper extends ig.GuiElementBase {
      screenInteract: sc.ScreenInteractEntry;
      buttonInteract: ig.ButtonInteractEntry;
      buttonGroup: sc.ButtonGroup;
      callback: (accepted: boolean, quest: sc.Quest) => void;
      quest: null;
      questBox: sc.QuestDialog;
      buttons: sc.QuestStartDialogButtonBox;
      acceptText: sc.TextGui;
      overlay: ig.GuiElementBase;
      finished: boolean;
      firstQuest: sc.Quest;
      subQuests: sc.QuestTask['subQuests'];
      next: number;
      _characterName: Nullable<string>;
      _mapName: Nullable<string>;

      onDetach(this: this): void;
      onButtonPress(this: this, button: sc.ButtonGui): void;
      _close(this: this, accept: boolean): void;
    }
    interface QuestDialogWrapperConstructor extends ImpactClass<QuestDialogWrapper> {
      new (
        firstQuest: sc.Quest,
        callback: sc.QuestDialogWrapper['callback'],
        finished?: boolean,
        characterName?: string,
        mapName?: string,
      ): QuestDialogWrapper;
    }
    var QuestDialogWrapper: QuestDialogWrapperConstructor;

    interface QuestStartDialogButtonBox extends ig.BoxGui {
      acceptButton: sc.ButtonGui;
      declineButton: sc.ButtonGui;
      acceptMode: boolean;

      setAcceptMode(this: this, buttonGroup: sc.ButtonGroup): void;
    }
    interface QuestStartDialogButtonBoxConstructor extends ImpactClass<QuestStartDialogButtonBox> {
      new (
        buttonGroup: sc.ButtonGroup,
        finished: boolean,
        mandatory: boolean,
        parentQuest: boolean,
      ): QuestStartDialogButtonBox;
    }
    var QuestStartDialogButtonBox: QuestStartDialogButtonBoxConstructor;
  }
}
