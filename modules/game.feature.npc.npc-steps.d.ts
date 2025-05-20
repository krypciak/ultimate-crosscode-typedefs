// requires impact.base.action
// requires impact.base.event
// requires game.feature.npc.npc-runners

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace DO_THE_SHAKE {
        interface Settings {
          person: sc.MessageModel.PersonConfig;
        }
      }
      interface DO_THE_SHAKE extends ig.EventStepBase {
        person: string;
        expression: null;
        message: string;
        _wm: ig.Config;
        charExpression: sc.CharacterExpression;

        clearCached(this: this): void;
      }
      interface DO_THE_SHAKE_CONSTRUCTOR extends ImpactClass<DO_THE_SHAKE> {
        new (settings: ig.EVENT_STEP.DO_THE_SHAKE.Settings): DO_THE_SHAKE;
      }
      var DO_THE_SHAKE: DO_THE_SHAKE_CONSTRUCTOR;

      namespace RESET_NPC {
        interface Settings {
          npc: ig.Event.GetEntity;
        }
      }
      interface RESET_NPC extends ig.EventStepBase {
        npc: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface RESET_NPC_CONSTRUCTOR extends ImpactClass<RESET_NPC> {
        new (settings: ig.EVENT_STEP.RESET_NPC.Settings): RESET_NPC;
      }
      var RESET_NPC: RESET_NPC_CONSTRUCTOR;

      namespace SET_NPC_RUNNERS {
        interface Settings {
          frequency: keyof typeof sc.NPC_RUNNER_GROUP;
        }
      }
      interface SET_NPC_RUNNERS extends ig.EventStepBase {
        frequency: keyof typeof sc.NPC_RUNNER_GROUP;
        _wm: ig.Config;
      }
      interface SET_NPC_RUNNERS_CONSTRUCTOR extends ImpactClass<SET_NPC_RUNNERS> {
        new (settings: ig.EVENT_STEP.SET_NPC_RUNNERS.Settings): SET_NPC_RUNNERS;
      }
      var SET_NPC_RUNNERS: SET_NPC_RUNNERS_CONSTRUCTOR;

      namespace RESET_NPC_RUNNERS {
        interface Settings {}
      }
      interface RESET_NPC_RUNNERS extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface RESET_NPC_RUNNERS_CONSTRUCTOR extends ImpactClass<RESET_NPC_RUNNERS> {
        new (settings: ig.EVENT_STEP.RESET_NPC_RUNNERS.Settings): RESET_NPC_RUNNERS;
      }
      var RESET_NPC_RUNNERS: RESET_NPC_RUNNERS_CONSTRUCTOR;

      namespace SET_NPC_CONFIG {
        interface Settings {
          npc: ig.Event.GetEntity;
          config: string;
        }
      }
      interface SET_NPC_CONFIG extends ig.EventStepBase {
        npc: ig.Event.GetEntity;
        config: string;
        _wm: ig.Config;
      }
      interface SET_NPC_CONFIG_CONSTRUCTOR extends ImpactClass<SET_NPC_CONFIG> {
        new (settings: ig.EVENT_STEP.SET_NPC_CONFIG.Settings): SET_NPC_CONFIG;
      }
      var SET_NPC_CONFIG: SET_NPC_CONFIG_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace RESET_NPC {
        interface Settings {}
      }
      interface RESET_NPC extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface RESET_NPC_CONSTRUCTOR extends ImpactClass<RESET_NPC> {
        new (settings: ig.ACTION_STEP.RESET_NPC.Settings): RESET_NPC;
      }
      var RESET_NPC: RESET_NPC_CONSTRUCTOR;

      namespace APPLY_NPC_CONFIG {
        interface Settings {
          config: string;
        }
      }
      interface APPLY_NPC_CONFIG extends ig.EventStepBase {
        config: string;
        _wm: ig.Config;
      }
      interface APPLY_NPC_CONFIG_CONSTRUCTOR extends ImpactClass<APPLY_NPC_CONFIG> {
        new (settings: ig.ACTION_STEP.APPLY_NPC_CONFIG.Settings): APPLY_NPC_CONFIG;
      }
      var APPLY_NPC_CONFIG: APPLY_NPC_CONFIG_CONSTRUCTOR;
    }
  }
}
