// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.map-content.entities.hidden-block
// requires impact.feature.base.entities.object-layer-view
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace Door {
        interface Settings extends ig.Entity.Settings {
          doorType?: keyof typeof ig.DOOR_TYPE;
          transitionType?: 'REGULAR' | 'INTER_AREA';
          narrow?: boolean;
          map: string;
          marker: string;
          dir?: keyof typeof ig.ActorEntity.FACE4;
          variation?: string;
          condition?: string;
          blockEvent?: ig.EventStepBase.Settings;
          blockEventCondition?: string;
          hideCondition?: string;
        }
      }
      interface Door extends ig.AnimatedEntity {
        doorType: keyof typeof ig.DOOR_TYPE;
        condition: ig.VarCondition;
        map: string;
        marker: string;
        dir: keyof typeof ig.ActorEntity.FACE4;
        active: boolean;
        openTimer: number;
        hasDoorMat: boolean;
        hasDoorGlow: boolean;
        hideManager?: ig.EntityHideManager;
        blockEvent: ig.Event;
        blockEventCondition: ig.VarCondition;
        openEffect: ig.EffectHandle;
        sounds: { activate: ig.Sound; deactivate: ig.Sound };
        fx: { sheet: ig.EffectSheet };
        doorMat?: ig.DoorMat;

        close(this: this): void;
        open(this: this, entity: ig.Entity, data: Vec2 & { dot: number }): void;
      }
      interface DoorConstructor extends ImpactClass<Door> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.Door.Settings): Door;
      }
      var Door: DoorConstructor;
    }

    namespace DoorMat {
      interface Settings extends ig.Entity.Settings {
        dir: keyof typeof ig.ActorEntity.FACE4;
        active?: boolean;
      }
    }
    interface DoorMat extends ig.AnimatedEntity {
      dir: keyof typeof ig.ActorEntity.FACE4;
      isActive: boolean;

      setActive(this: this, a: unknown): void;
    }
    interface DoorMatConstructor extends ImpactClass<DoorMat> {
      new (x: number, y: number, z: number, settings: ig.DoorMat.Settings): DoorMat;
    }
    var DoorMat: DoorMatConstructor;
  }
}
