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
    }
  }
}
