// requires impact.base.actor-entity

export {};

declare global {
  namespace ig {
    enum TOUCH_TRIGGER_TYPE {
      SET_FALSE,
      SET_TRUE,
      WHILE_TOUCH_ADD_1,
      WHILE_TOUCH_TRUE,
    }
    namespace ENTITY {
      namespace TouchTrigger {
        interface Settings extends ig.Entity.Settings {
          size: Vec2;
          variable: string;
          type?: keyof typeof ig.TOUCH_TRIGGER_TYPE;
          shape?: keyof typeof ig.COLLSHAPE;
          zHeight?: number;
          reactToParty?: boolean;
          startCondition?: string;
        }
      }

      interface TouchTrigger extends ig.Entity {
        name: string;
        face: Vec2;
        touchType: number;
        touchedCnt: number;
        startCondition: ig.VarCondition;
        isOn: boolean;
        _wm: ig.Config;

        update(this: this): void;
        setOn(this: this): void;
        setOff(this: this): void;
      }
      interface TouchTriggerConstructor extends ImpactClass<TouchTrigger> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.TouchTrigger.Settings,
        ): TouchTrigger;
      }
      var TouchTrigger: TouchTriggerConstructor;
    }
  }
}
