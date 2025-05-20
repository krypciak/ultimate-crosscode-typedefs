// requires impact.base.action
// requires impact.base.entity
// requires impact.base.event
// requires game.feature.quest.quest-model
// requires game.feature.menu.gui.quests.quest-misc

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace CREATE_QUEST {
        interface Settings {
          name: ig.LangLabel.Data;
          level: number;
          description: ig.LangLabel.Data;
          briefing: ig.LangLabel.Data;
          rewards: sc.Quest.Rewards;
          tasks: sc.QuestTask.TaskSettings[];
        }
      }
      interface CREATE_QUEST extends ig.EventStepBase {
        settings: ig.EVENT_STEP.CREATE_QUEST.Settings;
        _wm: ig.Config;
      }
      interface CREATE_QUEST_CONSTRUCTOR extends ImpactClass<CREATE_QUEST> {
        new (settings: ig.EVENT_STEP.CREATE_QUEST.Settings): CREATE_QUEST;
      }
      var CREATE_QUEST: CREATE_QUEST_CONSTRUCTOR;

      namespace START_STATIC_QUEST {
        interface Settings {
          quest: sc.QuestModel.QuestId;
        }
      }
      interface START_STATIC_QUEST extends ig.EventStepBase {
        quest: sc.QuestModel.QuestId;
        _wm: ig.Config;
      }
      interface START_STATIC_QUEST_CONSTRUCTOR extends ImpactClass<START_STATIC_QUEST> {
        new (settings: ig.EVENT_STEP.START_STATIC_QUEST.Settings): START_STATIC_QUEST;
      }
      var START_STATIC_QUEST: START_STATIC_QUEST_CONSTRUCTOR;

      namespace SOLVE_QUEST_CONDITION {
        interface QuestLabelSelect {
          quest: sc.QuestModel.QuestId;
          label: string;
        }
        interface Settings {
          quest: ig.EVENT_STEP.SOLVE_QUEST_CONDITION.QuestLabelSelect;
        }
      }
      interface SOLVE_QUEST_CONDITION extends ig.EventStepBase {
        questId: unknown;
        label: unknown;
        _wm: ig.Config;
      }
      interface SOLVE_QUEST_CONDITION_CONSTRUCTOR extends ImpactClass<SOLVE_QUEST_CONDITION> {
        new (settings: ig.EVENT_STEP.SOLVE_QUEST_CONDITION.Settings): SOLVE_QUEST_CONDITION;
      }
      var SOLVE_QUEST_CONDITION: SOLVE_QUEST_CONDITION_CONSTRUCTOR;

      namespace UPDATE_QUEST_LOCATION {
        interface Settings {
          quest: sc.QuestModel.QuestId;
        }
      }
      interface UPDATE_QUEST_LOCATION extends ig.EventStepBase {
        questId: sc.QuestModel.QuestId;
        _wm: ig.Config;
      }
      interface UPDATE_QUEST_LOCATION_CONSTRUCTOR extends ImpactClass<UPDATE_QUEST_LOCATION> {
        new (settings: ig.EVENT_STEP.UPDATE_QUEST_LOCATION.Settings): UPDATE_QUEST_LOCATION;
      }
      var UPDATE_QUEST_LOCATION: UPDATE_QUEST_LOCATION_CONSTRUCTOR;

      namespace RESET_QUEST_TASK {
        interface Settings {
          quest: sc.QuestModel.QuestId;
          task: sc.QuestModel.QuestId;
        }
      }
      interface RESET_QUEST_TASK extends ig.EventStepBase {
        quest: Nullable<sc.QuestModel.QuestId>;
        index: sc.QuestModel.QuestId;
        _wm: ig.Config;
      }
      interface RESET_QUEST_TASK_CONSTRUCTOR extends ImpactClass<RESET_QUEST_TASK> {
        new (settings: ig.EVENT_STEP.RESET_QUEST_TASK.Settings): RESET_QUEST_TASK;
      }
      var RESET_QUEST_TASK: RESET_QUEST_TASK_CONSTRUCTOR;

      namespace OPEN_QUEST_DIALOG {
        interface Settings {
          quest: sc.QuestModel.QuestId;
          npc?: string;
          map?: string;
        }
      }
      interface OPEN_QUEST_DIALOG extends ig.EventStepBase {
        quest: unknown;
        acceptVar: unknown;
        npc: Nullable<string>;
        _wm: ig.Config;
        _characterName: unknown;
        _mapName: unknown;
        map: Nullable<string>;
      }
      interface OPEN_QUEST_DIALOG_CONSTRUCTOR extends ImpactClass<OPEN_QUEST_DIALOG> {
        new (settings: ig.EVENT_STEP.OPEN_QUEST_DIALOG.Settings): OPEN_QUEST_DIALOG;
      }
      var OPEN_QUEST_DIALOG: OPEN_QUEST_DIALOG_CONSTRUCTOR;

      namespace FINISH_STATIC_QUEST {
        interface Settings {
          quest: sc.QuestModel.QuestId;
        }
      }
      interface FINISH_STATIC_QUEST extends ig.EventStepBase {
        quest: unknown;
        _wm: ig.Config;
      }
      interface FINISH_STATIC_QUEST_CONSTRUCTOR extends ImpactClass<FINISH_STATIC_QUEST> {
        new (settings: ig.EVENT_STEP.FINISH_STATIC_QUEST.Settings): FINISH_STATIC_QUEST;
      }
      var FINISH_STATIC_QUEST: FINISH_STATIC_QUEST_CONSTRUCTOR;

      namespace RESOLVE_FINISHED_QUESTS {
        interface Settings {}
      }
      interface RESOLVE_FINISHED_QUESTS extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface RESOLVE_FINISHED_QUESTS_CONSTRUCTOR extends ImpactClass<RESOLVE_FINISHED_QUESTS> {
        new (settings: ig.EVENT_STEP.RESOLVE_FINISHED_QUESTS.Settings): RESOLVE_FINISHED_QUESTS;
      }
      var RESOLVE_FINISHED_QUESTS: RESOLVE_FINISHED_QUESTS_CONSTRUCTOR;
    }
  }
}
