// requires impact.base.entity

export {};

declare global {
  namespace sc {
    //note: not an impact class!
    interface Cutscene {
      startCutscene(
        this: this,
        event: ig.Event,
        input: unknown,
        callEntity?: ig.Entity,
      ): ig.EventCall;
    }
    let Cutscene: Cutscene;
  }

  namespace ig {
    enum EVENT_TYPE {
      PARALLEL = 1,
      CUTSCENE = 2,
      INTERRUPTABLE = 3,
      AUTO_CONTROL = 4,
      COMBAT_CUTSCENE = 5,
    }

    enum EVENT_TRIGGER_TYPE {
      ALWAYS = 0,
      ONCE_PER_ENTRY = 1,
      ONCE = 2,
    }
    namespace ENTITY {
      namespace EventTrigger {
        interface Settings extends ig.Entity.Settings {
          eventType?: keyof typeof ig.EVENT_TYPE;
          startCondition?: string;
          endCondition?: string;
          triggerType?: keyof typeof ig.EVENT_TRIGGER_TYPE;
          loadCondition?: string;
          event?: any[];
        }
      }
      interface EventTrigger extends ig.Entity {
        eventType: ig.EVENT_TYPE;
        startCondition: ig.VarCondition;
        endCondition: ig.VarCondition;
        event: ig.Event;
        eventCall: Nullable<ig.EventCall>;
        triggerVar: string;
        _wm: ig.Config;

        varsChanged(this: this): void;
      }
      interface EventTriggerConstructor extends ImpactClass<EventTrigger> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.EventTrigger.Settings,
        ): EventTrigger;
      }
      var EventTrigger: EventTriggerConstructor;
    }
  }
}
