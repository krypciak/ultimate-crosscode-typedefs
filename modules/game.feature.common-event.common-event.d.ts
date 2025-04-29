// requires impact.feature.storage.storage
// requires game.feature.party.party

export {};

declare global {
  namespace sc {
    interface CommonEventType<Settings = {}> {
      _idonotexist: Settings;
      _wm: ig.Config;
      cutsceneCheck?: boolean;
      triggerAll?: boolean;
      check(settings: Settings, otherSettings?: sc.CommonEvents.AllData): boolean;
    }
    interface COMMON_EVENT_TYPE {
      CALL: sc.CommonEventType;
      ENEMY_ATTACKS: sc.CommonEventType<{
        enemies?: string[];
        levelGapAbove?: number;
        levelGapBelow?: number;
        playerStarted?: boolean;
        battleStarted?: boolean;
      }>;
      ENEMY_DEFEATED: sc.CommonEventType<{
        enemy?: string;
      }>;
      BATTLE_OVER: sc.CommonEventType<{
        killCount: number;
        rank?: sc.CombatRankLabel;
      }>;
      COOLDOWN_START: sc.CommonEventType<{
        enemies?: string[];
        killCount: number;
        rank?: sc.CombatRankLabel;
        rankReached?: sc.CombatRankLabel;
      }>;
      LEVEL_UP: sc.CommonEventType<{
        level: number;
      }>;
      MENU_LEAVE: sc.CommonEventType;
      QUEST_ACCEPTED: sc.CommonEventType;
      PARTY_MEMBER_EVENT: sc.CommonEventType<{
        member: keyof typeof sc.PARTY_OPTIONS;
        eventType: 'DIES' | 'REVIVED' | 'EQUIP_UPDATE';
      }>;
      DUNGEON_TRANSITION: sc.CommonEventType<{
        mapTransition: Nullable<'ENTER' | 'LEAVE'>;
        areaTransition: Nullable<'ENTER' | 'LEAVE'>;
      }>;
      SOCIAL_ACTION: sc.CommonEventType<{
        member?: keyof typeof sc.PARTY_OPTIONS;
        actionType: keyof typeof sc.SOCIAL_ACTION;
      }>;
      MAP_ENTERED: sc.CommonEventType;
      FORCE_UPDATE: sc.CommonEventType;
    }
    var COMMON_EVENT_TYPE: COMMON_EVENT_TYPE;

    interface CommonEventFrequency {
      prop?: number;
    }
    interface COMMON_EVENT_FREQUENCY {
      ALWAYS: sc.CommonEventFrequency;
      REGULAR: sc.CommonEventFrequency;
      SOMETIMES: sc.CommonEventFrequency;
      RARE: sc.CommonEventFrequency;
    }
    var COMMON_EVENT_FREQUENCY: COMMON_EVENT_FREQUENCY;

    enum COMMON_EVENT_REPEAT {
      REPEAT = 1,
      ONCE = 2,
    }

    namespace CommonEvents {
      type RunData = Record<string, sc.CommonEvent.Data>;

      type DataOf<T extends keyof typeof sc.COMMON_EVENT_TYPE> =
        sc.COMMON_EVENT_TYPE[T]['_idonotexist'];

      type AllData = sc.CommonEvents.DataOf<keyof typeof sc.COMMON_EVENT_TYPE>;

      interface DelayedTrigger<
        T extends keyof typeof sc.COMMON_EVENT_TYPE = keyof typeof sc.COMMON_EVENT_TYPE,
      > {
        type: T;
        eventData: DataOf<T>;
      }
    }
    interface CommonEvents
      extends ig.GameAddon,
        ig.Storage.ListenerSave,
        ig.Storage.ListenerPreLoad {
      events: Record<string, sc.CommonEvent>;
      eventsByType: Record<keyof typeof sc.COMMON_EVENT_TYPE, sc.CommonEvent[]>;
      runData: sc.CommonEvents.RunData;
      delayedTriggerStack: sc.CommonEvents.DelayedTrigger[];
      delayedTriggerTimer: number;

      onReset(this: this): void;
      onDeferredUpdate(this: this): void;
      _loadCommonEvents(this: this): void;
      triggerEvent<T extends keyof typeof sc.COMMON_EVENT_TYPE>(
        this: this,
        type: T,
        data: sc.CommonEvents.DataOf<T>,
      ): Nullable<sc.CommonEvent>;
      cancelEvent(this: this, type: keyof typeof sc.COMMON_EVENT_TYPE): boolean;
      startCallEvent(this: this, event: string): void;
      getInlineCallEvent(this: this, eventName: string): Nullable<ig.Event>;
      getInlineCallData(this: this, eventName: string): Nullable<sc.CommonEvent.CallData>;
      _forcedTriggerEvent(
        this: this,
        type: keyof typeof sc.COMMON_EVENT_TYPE,
        settings: sc.CommonEvents.AllData,
        onlySideMessageOverride?: boolean,
      ): Nullable<sc.CommonEvent>;
      _checkEventExecution(
        this: this,
        event: sc.CommonEvent,
        settings: sc.CommonEvents.AllData,
        rand: number,
      ): boolean;
      _startCommonEvent(this: this, event: sc.CommonEvent): ig.EventCall;
      selectEvent(
        this: this,
        type: keyof typeof sc.COMMON_EVENT_TYPE,
        settings: sc.CommonEvents.AllData,
        exclude: sc.CommonEvent[],
        onlySideMessageOverride?: boolean,
      ): Nullable<sc.CommonEvent>;
      getRunCount(this: this, event: sc.CommonEvent): number;
      getTriggerCount(this: this, event: sc.CommonEvent): number;
      increaseTriggerCount(this: this, event: sc.CommonEvent): void;
    }
    interface CommonEventsConstructor extends ImpactClass<CommonEvents> {
      new (): CommonEvents;
    }
    let CommonEvents: CommonEventsConstructor;
    let commonEvents: CommonEvents;

    namespace CommonEvent {
      type TypeDetails<
        T extends keyof typeof sc.COMMON_EVENT_TYPE = keyof typeof sc.COMMON_EVENT_TYPE,
      > = {
        type: T;
      } & sc.CommonEvents.DataOf<T>;

      interface Data {
        type: TypeDetails;
        frequency: keyof typeof sc.COMMON_EVENT_FREQUENCY;
        trigger: number;
        repeat: keyof typeof sc.COMMON_EVENT_REPEAT;
        condition: string;
        runOnTrigger?: number[];
        eventType: keyof typeof ig.EventRunType;
        overrideSideMessage?: boolean;
        loopCount?: number;
        event: ig.EventStepBase.Settings[];
      }

      interface CallData {
        runCount: number;
      }
    }
    interface CommonEvent extends ig.Class {
      name: string;
      type: keyof typeof sc.COMMON_EVENT_TYPE;
      typeDetails: sc.CommonEvent.TypeDetails;
      frequency: sc.CommonEventFrequency;
      repeat: sc.COMMON_EVENT_REPEAT;
      runOnTrigger?: number[];
      loopCount: number;
      condition: ig.VarCondition;
      event: ig.Event;

      check(this: this, eventData: sc.CommonEvents.AllData): boolean;
      start(this: this, eventData: sc.CommonEvents.AllData): ig.EventCall;
      getEvent(this: this): ig.Event;
      getCallData(this: this, runCount: number): sc.CommonEvent.CallData;
    }
    interface CommonEventConstructor extends ImpactClass<CommonEvent> {
      new (name: string, data: sc.CommonEvent.Data): CommonEvent;
    }
    var CommonEvent: CommonEventConstructor;
  }
}
