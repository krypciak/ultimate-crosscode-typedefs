// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    interface FloorSwitchType {
      prenament?: boolean;
      delay?: number;
      undoable?: boolean;
    }
    interface FLOOR_SWITCH_TYPE {
      PERMANENT: sc.FloorSwitchType;
      WHILE_ON_TOP: sc.FloorSwitchType;
      UNDOABLE: sc.FloorSwitchType;
    }
    var FLOOR_SWITCH_TYPE: FLOOR_SWITCH_TYPE;
  }
  namespace ig.ENTITY {
    namespace FloorSwitch {
      interface Settings extends ig.Entity.Settings {
        variable: string;
        switchType?: keyof typeof sc.FLOOR_SWITCH_TYPE;
        lockCondition?: string | null;
      }
    }
    interface FloorSwitch extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      hitCondition: null;
      ballDestroyer: boolean;
      switchType: sc.FloorSwitchType;
      variable: string;
      isOn: boolean;
      lockCondition: ig.VarCondition;
      setOnDelay: number;
      effects: Record<'sheet', ig.EffectSheet>;
      _wm: ig.Config;

      onHideRequest(this: this): void;
      _isStillPressed(this: this): boolean;
      activate(this: this, noDelay?: boolean): void;
      deactivate(this: this): void;
      varsChanged(this: this): void;
      collideWith(this: this, entity: ig.Entity): void;
      onGroundAdd(this: this, entity: ig.Entity): void;
      checkEntityArraySupport(this: this, entities: ig.Entity[]): boolean;
      isEntitySupported(this: this, entity: ig.Entity): boolean;
    }
    interface FloorSwitchConstructor extends ImpactClass<FloorSwitch> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.FloorSwitch.Settings): FloorSwitch;
    }
    var FloorSwitch: FloorSwitchConstructor;
  }
}
