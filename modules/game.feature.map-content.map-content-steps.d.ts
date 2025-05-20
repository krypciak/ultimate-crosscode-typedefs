// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace OPEN_RHOMBUS_MAP {
        interface Settings {}
      }
      interface OPEN_RHOMBUS_MAP extends ig.EventStepBase {
        _wm: ig.Config;
        _characterName: unknown;
        _mapName: unknown;
      }
      interface OPEN_RHOMBUS_MAP_CONSTRUCTOR extends ImpactClass<OPEN_RHOMBUS_MAP> {
        new (settings: ig.EVENT_STEP.OPEN_RHOMBUS_MAP.Settings): OPEN_RHOMBUS_MAP;
      }
      var OPEN_RHOMBUS_MAP: OPEN_RHOMBUS_MAP_CONSTRUCTOR;

      namespace MOVE_ELEVATOR {
        interface Settings {
          entity: ig.Event.GetEntity;
          floorOption: number;
          wait: boolean;
        }
      }
      interface MOVE_ELEVATOR extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        floorOption: number;
        _wm: ig.Config;
        wait: boolean;
      }
      interface MOVE_ELEVATOR_CONSTRUCTOR extends ImpactClass<MOVE_ELEVATOR> {
        new (settings: ig.EVENT_STEP.MOVE_ELEVATOR.Settings): MOVE_ELEVATOR;
      }
      var MOVE_ELEVATOR: MOVE_ELEVATOR_CONSTRUCTOR;

      namespace MOVE_ELEVATOR_START {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface MOVE_ELEVATOR_START extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        floorOption: unknown;
        _wm: ig.Config;
      }
      interface MOVE_ELEVATOR_START_CONSTRUCTOR extends ImpactClass<MOVE_ELEVATOR_START> {
        new (settings: ig.EVENT_STEP.MOVE_ELEVATOR_START.Settings): MOVE_ELEVATOR_START;
      }
      var MOVE_ELEVATOR_START: MOVE_ELEVATOR_START_CONSTRUCTOR;

      namespace UNTRIGGER_PROP {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface UNTRIGGER_PROP extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface UNTRIGGER_PROP_CONSTRUCTOR extends ImpactClass<UNTRIGGER_PROP> {
        new (settings: ig.EVENT_STEP.UNTRIGGER_PROP.Settings): UNTRIGGER_PROP;
      }
      var UNTRIGGER_PROP: UNTRIGGER_PROP_CONSTRUCTOR;
    }
  }
}
