export {};

declare global {
  namespace sc {
    interface QuestSubTaskBase extends ig.Class {
      type: string;

      initState(this: this, b: unknown): void;
      updateState(this: this, b: unknown, a: unknown, d: unknown, c: unknown): void;
      getCurrentValue(this: this, b: unknown, a: unknown): number;
      finalize?(this: this): void;
      isFulfilled(this: this): boolean;
      reset?(this: this, b: unknown, a: unknown): void;
    }
    interface QuestSubTaskBaseConstructor extends ImpactClass<QuestSubTaskBase> {
      new (type: string): QuestSubTaskBase;
    }
    var QuestSubTaskBase: QuestSubTaskBaseConstructor;

    namespace QUEST_SUB_TASK {
      namespace COLLECT {
        interface Settings {
          type: 'COLLECT';
          item: sc.ItemID;
          amount?: number;
          keepItems?: boolean;
          hideName?: boolean;
          hideMax?: boolean;
        }
      }
      interface COLLECT extends sc.QuestSubTaskBase {
        _wm: ig.Config;
        item: sc.ItemID;
        amount: number;
        keepItems: boolean;
        hideName: boolean;
        hideMax: boolean;

        finalize(this: this): void;
        reset(this: this): void;
      }
      interface COLLECTConstructor extends ImpactClass<COLLECT> {
        new (settings: sc.QUEST_SUB_TASK.COLLECT.Settings): COLLECT;
      }

      namespace KILL {
        interface Settings {
          type: 'KILL';
          enemy: string;
          amount?: number;
        }
      }
      interface KILL extends sc.QuestSubTaskBase {
        _wm: ig.Config;
        enemy: number;
        amount: number;

        reset(this: this, b: unknown): void;
      }
      interface KILLConstructor extends ImpactClass<KILL> {
        new (settings: sc.QUEST_SUB_TASK.KILL.Settings): KILL;
      }

      namespace CONDITION {
        interface Settings {
          type: 'CONDITION';
          label: string;
          text?: ig.LangLabel.Data;
          shortText?: ig.LangLabel.Data;
        }
      }
      interface CONDITION extends sc.QuestSubTaskBase {
        _wm: ig.Config;
        text: ig.LangLabel | string;
        short: Nullable<ig.LangLabel>;
        label: Nullable<ig.LangLabel>;

        reset(this: this, b: unknown, a: unknown): void;
      }
      interface CONDITIONConstructor extends ImpactClass<CONDITION> {
        new (settings: sc.QUEST_SUB_TASK.CONDITION.Settings): CONDITION;
      }

      namespace QUEST {
        interface Settings {
          type: 'QUEST';
          quest: string;
          text?: ig.LangLabel.Data;
          shortText?: ig.LangLabel.Data;
        }
      }
      interface QUEST extends sc.QuestSubTaskBase {
        _wm: ig.Config;
        quest: string;
        text: ig.LangLabel | string;
        short: Nullable<ig.LangLabel>;
      }
      interface QUESTConstructor extends ImpactClass<QUEST> {
        new (settings: sc.QUEST_SUB_TASK.QUEST.Settings): QUEST;
      }

      namespace LANDMARK {
        interface Settings {
          type: 'LANDMARK';
          area: string;
          amount?: number;
        }
      }
      interface LANDMARK extends sc.QuestSubTaskBase {
        _wm: ig.Config;
        area: number;
        amount: number;
      }
      interface LANDMARKConstructor extends ImpactClass<LANDMARK> {
        new (settings: sc.QUEST_SUB_TASK.LANDMARK.Settings): LANDMARK;
      }
    }

    interface QuestSubTasks {
      COLLECT: sc.QUEST_SUB_TASK.COLLECTConstructor;
      KILL: sc.QUEST_SUB_TASK.KILLConstructor;
      CONDITION: sc.QUEST_SUB_TASK.CONDITIONConstructor;
      QUEST: sc.QUEST_SUB_TASK.QUESTConstructor;
      LANDMARK: sc.QUEST_SUB_TASK.LANDMARKConstructor;
    }

    var QUEST_SUB_TASK: QuestSubTasks;

    namespace QuestTask {
      interface TaskSettings {
        task: ig.LangLabel.Data;
        subTasks: ConstructorParameters<QuestSubTasks[keyof QuestSubTasks]>[0][];
        skipNotify?: boolean;
      }
    }
    interface QuestTask extends ig.Class {
      task: ig.LangLabel;
      subTasks: InstanceType<QuestSubTasks[keyof QuestSubTasks]>;
      containsCollect: boolean;
      subQuests: Nullable<string[]>;
      skipNotify: boolean;
    }
    interface QuestTaskConstructor extends ImpactClass<QuestTask> {
      new (subTasks: sc.QuestTask.TaskSettings, quest: sc.Quest): QuestTask;
    }
    var QuestTask: QuestTaskConstructor;

    namespace Quest {
      interface Rewards {
        exp: ExpReward;
        items: ItemReward[];
        money: number;
        cp: {
          amount: number;
          element: keyof typeof sc.ELEMENT | 'ALL' | 'ALL_ELEMENTS';
        };
      }

      interface ExpReward {
        bonus: number;
        exp: number;
      }

      interface ItemReward {
        id: sc.ItemID;
        amount: number;
      }

      interface HubSettings {
        character: Nullable<string>;
        hideChar: boolean;
        location: ig.LangLabel;
        condition: string;
      }

      interface Settings {
        level?: number;
        name: ig.LangLabel.Data;
        description: ig.LangLabel.Data;
        briefing: ig.LangLabel.Data;
        rewards?: sc.Quest['rewards'];
        noTrack?: boolean;
        extension?: boolean;
        order?: number;
        person?: ig.LangLabel.Data;
        hideRewards?: boolean;
        area?: string;
        parent?: sc.Quest['parentQuest'];
        elite?: boolean;
        mandatory?: boolean;
        hubSettings?: Partial<sc.Quest.HubSettings>;
        tasks?: sc.QuestTask.TaskSettings[];
      }
    }
    interface Quest extends ig.Class {
      name: ig.LangLabel;
      level: number;
      order: number;
      description: ig.LangLabel.Data;
      endDescription: ig.LangLabel.Data;
      tasks: sc.QuestTask;
      rewards: sc.Quest.Rewards;
      id: string;
      person: ig.LangLabel;
      personAfter?: ig.LangLabel;
      labelList: ig.LangLabel[];
      hideRewards: boolean;
      area: Nullable<string>;
      noTrack: boolean;
      extension: boolean;
      parentQuest: Nullable<string>;
      elite: boolean;
      mandatory: boolean;
      hubSettings: sc.Quest.HubSettings;
      location: { area: string; map: string };
      timeStamp: number;
      character: Nullable<string>;
    }
    interface QuestConstructor extends ImpactClass<Quest> {
      new (settings: sc.Quest.Settings, id: string): Quest;
    }
    var Quest: QuestConstructor;
  }
}
