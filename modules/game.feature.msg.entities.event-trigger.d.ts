// requires impact.base.entity

export {};

declare global {
  namespace sc {
    //note: not an impact class!
    interface Cutscene {
      startCutscene(this: this, event: ig.Event, input: unknown, callEntity?: ig.Entity): ig.EventCall;
    }
    let Cutscene: Cutscene;
  }

  namespace ig {
    enum EVENT_TYPE {
      PARALLEL = 1,
      CUTSCENE = 2,
      INTERRUPTABLE = 3,
      AUTO_CONTROL = 4,
      COMBAT_CUTSCENE = 5
    }

    enum EVENT_TRIGGER_TYPE {
      ALWAYS = 0,
      ONCE_PER_ENTRY = 1,
      ONCE = 2
    }
    namespace ENTITY {
      namespace EventTrigger {
        interface Settings extends ig.Entity.Settings {
          eventType?: keyof typeof ig.EVENT_TYPE;
          startCondition?: string;
          triggerType?: keyof typeof ig.EVENT_TRIGGER_TYPE;
          loadCondition?: string;
          event?: any[];
        }
      }
    }
  }
}
