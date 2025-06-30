// requires impact.base.game
// requires impact.base.loader
// requires impact.feature.database.database
// requires game.config
// requires game.feature.quest.quest-types
// requires game.feature.model.game-model
// requires game.feature.combat.combat
// requires game.feature.timers.timers-model

export {};

declare global {
  namespace sc {
    enum QUEST_LIST_TYPE {
      ACTIVE = 0,
      SOLVED = 1,
      ALL = 2,
    }

    namespace QuestModel {
      type QuestId = string;
    }
    interface QuestModel
      extends ig.GameAddon,
        sc.Model,
        sc.Model.Observer,
        ig.Storage.ListenerSave,
        ig.Storage.ListenerPreLoad {
      staticQuests: Record<sc.QuestModel.QuestId, sc.Quest>;
      _solvedTimer: number;
      _hasSolveDialogs: boolean;

      hasQuestSolvedDialogs(this: this): boolean;

      getSubQuests(this: this, quest: sc.Quest): sc.QuestTask['subQuests'] | undefined;
      _collectRewards(this: this, quest: sc.Quest): void;
      _loadStaticQuests(this: this): void;
    }
    interface QuestModelConstructor extends ImpactClass<QuestModel> {
      new (): QuestModel;
    }
    var QuestModel: QuestModelConstructor;
    var quests: QuestModel;
  }
}
