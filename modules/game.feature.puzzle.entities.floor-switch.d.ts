// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    enum FLOOR_SWITCH_TYPE {
      PERMANENT,
      WHILE_ON_TOP,
      UNDOABLE,
    }
  }
  namespace ig.ENTITY {
    namespace FloorSwitch {
      interface Settings extends ig.Entity.Settings {
        variable: string;
        switchType?: keyof typeof sc.FLOOR_SWITCH_TYPE;
        lockCondition?: string | null;
      }
    }
  }
}
