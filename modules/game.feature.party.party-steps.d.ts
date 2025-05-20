// requires impact.base.action
// requires impact.base.event
// requires game.feature.party.party

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SET_CONTACT_ONLINE {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
          online: boolean;
        }
      }
      interface SET_CONTACT_ONLINE extends ig.EventStepBase {
        member: keyof typeof sc.PARTY_OPTIONS;
        online: boolean;
        _wm: ig.Config;
      }
      interface SET_CONTACT_ONLINE_CONSTRUCTOR extends ImpactClass<SET_CONTACT_ONLINE> {
        new (settings: ig.EVENT_STEP.SET_CONTACT_ONLINE.Settings): SET_CONTACT_ONLINE;
      }
      var SET_CONTACT_ONLINE: SET_CONTACT_ONLINE_CONSTRUCTOR;

      namespace SET_MEMBER_LOCKED {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
          locked: boolean;
        }
      }
      interface SET_MEMBER_LOCKED extends ig.EventStepBase {
        member: keyof typeof sc.PARTY_OPTIONS;
        locked: boolean;
        _wm: ig.Config;
      }
      interface SET_MEMBER_LOCKED_CONSTRUCTOR extends ImpactClass<SET_MEMBER_LOCKED> {
        new (settings: ig.EVENT_STEP.SET_MEMBER_LOCKED.Settings): SET_MEMBER_LOCKED;
      }
      var SET_MEMBER_LOCKED: SET_MEMBER_LOCKED_CONSTRUCTOR;

      namespace SET_CONTACT_TYPE {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
          status: keyof typeof sc.PARTY_MEMBER_TYPE;
        }
      }
      interface SET_CONTACT_TYPE extends ig.EventStepBase {
        member: keyof typeof sc.PARTY_OPTIONS;
        status: sc.PARTY_MEMBER_TYPE;
        _wm: ig.Config;
      }
      interface SET_CONTACT_TYPE_CONSTRUCTOR extends ImpactClass<SET_CONTACT_TYPE> {
        new (settings: ig.EVENT_STEP.SET_CONTACT_TYPE.Settings): SET_CONTACT_TYPE;
      }
      var SET_CONTACT_TYPE: SET_CONTACT_TYPE_CONSTRUCTOR;

      namespace SET_CONTACT_TYPE_ALL {
        interface Settings {
          status: keyof typeof sc.PARTY_MEMBER_TYPE;
        }
      }
      interface SET_CONTACT_TYPE_ALL extends ig.EventStepBase {
        status: sc.PARTY_MEMBER_TYPE;
        _wm: ig.Config;
      }
      interface SET_CONTACT_TYPE_ALL_CONSTRUCTOR extends ImpactClass<SET_CONTACT_TYPE_ALL> {
        new (settings: ig.EVENT_STEP.SET_CONTACT_TYPE_ALL.Settings): SET_CONTACT_TYPE_ALL;
      }
      var SET_CONTACT_TYPE_ALL: SET_CONTACT_TYPE_ALL_CONSTRUCTOR;

      namespace ADD_PARTY_MEMBER {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
          npc?: ig.Event.GetEntity;
          skipEffect: boolean;
          temporary: boolean;
        }
      }
      interface ADD_PARTY_MEMBER extends ig.EventStepBase {
        member: keyof typeof sc.PARTY_OPTIONS;
        npc?: ig.Event.GetEntity;
        _wm: ig.Config;
        skipEffect: boolean;
        temporary: boolean;
      }
      interface ADD_PARTY_MEMBER_CONSTRUCTOR extends ImpactClass<ADD_PARTY_MEMBER> {
        new (settings: ig.EVENT_STEP.ADD_PARTY_MEMBER.Settings): ADD_PARTY_MEMBER;
      }
      var ADD_PARTY_MEMBER: ADD_PARTY_MEMBER_CONSTRUCTOR;

      namespace SET_PARTY_MEMBER_LEVEL {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
          level: number;
          exp: number;
          updateEquipment: boolean;
        }
      }
      interface SET_PARTY_MEMBER_LEVEL extends ig.EventStepBase {
        member: keyof typeof sc.PARTY_OPTIONS;
        level: number;
        exp: number;
        updateEquipment: boolean;
        _wm: ig.Config;
      }
      interface SET_PARTY_MEMBER_LEVEL_CONSTRUCTOR extends ImpactClass<SET_PARTY_MEMBER_LEVEL> {
        new (settings: ig.EVENT_STEP.SET_PARTY_MEMBER_LEVEL.Settings): SET_PARTY_MEMBER_LEVEL;
      }
      var SET_PARTY_MEMBER_LEVEL: SET_PARTY_MEMBER_LEVEL_CONSTRUCTOR;

      namespace SET_PARTY_MEMBER_NO_DIE {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
          noDie: boolean;
        }
      }
      interface SET_PARTY_MEMBER_NO_DIE extends ig.EventStepBase {
        noDie: boolean;
        _wm: ig.Config;
        member: keyof typeof sc.PARTY_OPTIONS;
      }
      interface SET_PARTY_MEMBER_NO_DIE_CONSTRUCTOR extends ImpactClass<SET_PARTY_MEMBER_NO_DIE> {
        new (settings: ig.EVENT_STEP.SET_PARTY_MEMBER_NO_DIE.Settings): SET_PARTY_MEMBER_NO_DIE;
      }
      var SET_PARTY_MEMBER_NO_DIE: SET_PARTY_MEMBER_NO_DIE_CONSTRUCTOR;

      namespace SET_PARTY_MEMBER_SP_LEVEL {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
          level: unknown;
        }
      }
      interface SET_PARTY_MEMBER_SP_LEVEL extends ig.EventStepBase {
        _wm: ig.Config;
        member: keyof typeof sc.PARTY_OPTIONS;
      }
      interface SET_PARTY_MEMBER_SP_LEVEL_CONSTRUCTOR
        extends ImpactClass<SET_PARTY_MEMBER_SP_LEVEL> {
        new (settings: ig.EVENT_STEP.SET_PARTY_MEMBER_SP_LEVEL.Settings): SET_PARTY_MEMBER_SP_LEVEL;
      }
      var SET_PARTY_MEMBER_SP_LEVEL: SET_PARTY_MEMBER_SP_LEVEL_CONSTRUCTOR;

      namespace SET_PARTY_MEMBER_ALL_ELEMENTS {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
          allElements: boolean;
        }
      }
      interface SET_PARTY_MEMBER_ALL_ELEMENTS extends ig.EventStepBase {
        _wm: ig.Config;
        member: keyof typeof sc.PARTY_OPTIONS;
        allElements: boolean;
      }
      interface SET_PARTY_MEMBER_ALL_ELEMENTS_CONSTRUCTOR
        extends ImpactClass<SET_PARTY_MEMBER_ALL_ELEMENTS> {
        new (
          settings: ig.EVENT_STEP.SET_PARTY_MEMBER_ALL_ELEMENTS.Settings,
        ): SET_PARTY_MEMBER_ALL_ELEMENTS;
      }
      var SET_PARTY_MEMBER_ALL_ELEMENTS: SET_PARTY_MEMBER_ALL_ELEMENTS_CONSTRUCTOR;

      namespace REMOVE_PARTY_MEMBER {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
          npc?: ig.Event.GetEntity;
          skipEffect: boolean;
        }
      }
      interface REMOVE_PARTY_MEMBER extends ig.EventStepBase {
        member: keyof typeof sc.PARTY_OPTIONS;
        npc?: ig.Event.GetEntity;
        _wm: ig.Config;
        skipEffect: boolean;
      }
      interface REMOVE_PARTY_MEMBER_CONSTRUCTOR extends ImpactClass<REMOVE_PARTY_MEMBER> {
        new (settings: ig.EVENT_STEP.REMOVE_PARTY_MEMBER.Settings): REMOVE_PARTY_MEMBER;
      }
      var REMOVE_PARTY_MEMBER: REMOVE_PARTY_MEMBER_CONSTRUCTOR;

      namespace REVIVE_PARTY_MEMBER {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
        }
      }
      interface REVIVE_PARTY_MEMBER extends ig.EventStepBase {
        member: keyof typeof sc.PARTY_OPTIONS;
        _wm: ig.Config;
      }
      interface REVIVE_PARTY_MEMBER_CONSTRUCTOR extends ImpactClass<REVIVE_PARTY_MEMBER> {
        new (settings: ig.EVENT_STEP.REVIVE_PARTY_MEMBER.Settings): REVIVE_PARTY_MEMBER;
      }
      var REVIVE_PARTY_MEMBER: REVIVE_PARTY_MEMBER_CONSTRUCTOR;

      namespace REVIVE_ALL_PARTY_MEMBERS {
        interface Settings {}
      }
      interface REVIVE_ALL_PARTY_MEMBERS extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface REVIVE_ALL_PARTY_MEMBERS_CONSTRUCTOR extends ImpactClass<REVIVE_ALL_PARTY_MEMBERS> {
        new (settings: ig.EVENT_STEP.REVIVE_ALL_PARTY_MEMBERS.Settings): REVIVE_ALL_PARTY_MEMBERS;
      }
      var REVIVE_ALL_PARTY_MEMBERS: REVIVE_ALL_PARTY_MEMBERS_CONSTRUCTOR;

      namespace SET_PARTY_AI {
        interface Settings {
          battle?: number;
          aggressive?: number;
          targeting?: number;
        }
      }
      interface SET_PARTY_AI extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface SET_PARTY_AI_CONSTRUCTOR extends ImpactClass<SET_PARTY_AI> {
        new (settings: ig.EVENT_STEP.SET_PARTY_AI.Settings): SET_PARTY_AI;
      }
      var SET_PARTY_AI: SET_PARTY_AI_CONSTRUCTOR;

      namespace PARTY_KEEP_MAP_DUNGEON {
        interface Settings {}
      }
      interface PARTY_KEEP_MAP_DUNGEON extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface PARTY_KEEP_MAP_DUNGEON_CONSTRUCTOR extends ImpactClass<PARTY_KEEP_MAP_DUNGEON> {
        new (settings: ig.EVENT_STEP.PARTY_KEEP_MAP_DUNGEON.Settings): PARTY_KEEP_MAP_DUNGEON;
      }
      var PARTY_KEEP_MAP_DUNGEON: PARTY_KEEP_MAP_DUNGEON_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace SET_PARTY_TEMP_TARGET {
        interface Settings {
          kind: unknown;
          includeSelf: boolean;
          enemyFilter?: string[];
          selectKey: ig.Event.StringExpression;
        }
      }
      interface SET_PARTY_TEMP_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
        includeSelf: boolean;
        enemyFilter: string[];
        selectKey: ig.Event.StringExpression;
      }
      interface SET_PARTY_TEMP_TARGET_CONSTRUCTOR extends ImpactClass<SET_PARTY_TEMP_TARGET> {
        new (settings: ig.ACTION_STEP.SET_PARTY_TEMP_TARGET.Settings): SET_PARTY_TEMP_TARGET;
      }
      var SET_PARTY_TEMP_TARGET: SET_PARTY_TEMP_TARGET_CONSTRUCTOR;

      namespace SET_TARGET_TO_PARTYMEMBER {
        interface Settings {
          member: keyof typeof sc.PARTY_OPTIONS;
        }
      }
      interface SET_TARGET_TO_PARTYMEMBER extends ig.ActionStepBase {
        _wm: ig.Config;
        member: keyof typeof sc.PARTY_OPTIONS;
      }
      interface SET_TARGET_TO_PARTYMEMBER_CONSTRUCTOR
        extends ImpactClass<SET_TARGET_TO_PARTYMEMBER> {
        new (
          settings: ig.ACTION_STEP.SET_TARGET_TO_PARTYMEMBER.Settings,
        ): SET_TARGET_TO_PARTYMEMBER;
      }
      var SET_TARGET_TO_PARTYMEMBER: SET_TARGET_TO_PARTYMEMBER_CONSTRUCTOR;

      namespace CONSUME_PARTY_SANDWICH {
        interface Settings {}
      }
      interface CONSUME_PARTY_SANDWICH extends ig.ActionStepBase {}
      interface CONSUME_PARTY_SANDWICH_CONSTRUCTOR extends ImpactClass<CONSUME_PARTY_SANDWICH> {
        new (settings: ig.ACTION_STEP.CONSUME_PARTY_SANDWICH.Settings): CONSUME_PARTY_SANDWICH;
      }
      var CONSUME_PARTY_SANDWICH: CONSUME_PARTY_SANDWICH_CONSTRUCTOR;
    }
  }
}
