// requires impact.base.action
// requires impact.base.entity
// requires impact.base.event
// requires game.feature.quest.quest-model
// requires game.feature.menu.gui.quests.quest-misc

export {};

declare global {
  namespace ig.EVENT_STEP {
    namespace SOLVE_QUEST_CONDITION {
      interface QuestLabelSelect {
        quest: sc.QuestModel.QuestId;
        label: string;
      }
    }
  }
}
