// requires impact.base.entity
// requires game.feature.interact.map-interact
// requires impact.base.actor-entity

export {};

declare global {
  namespace sc {
    namespace ElevatorType {
      interface Ground {
        gfx: string;
        x: number;
        y: number;
        w: number;
        h: number;
        flipX: boolean;
      }
    }
    interface ElevatorType {
      size: Vec3;
      ground: sc.ElevatorType.Ground;
      markerDir: keyof typeof ig.ActorEntity.FACE4;
      stuckProbility: number;
      switchEntry: {
        pos: Vec3;
        size: Vec3;
        collType?: ig.COLLTYPE;
        anims: ig.AnimationSheet.Settings;
        showFx: { sheet: string; name: string };
        hideFx: { sheet: string; name: string };
      };
      noEndRunble?: boolean;
      speed?: number;
      partyOffset?: Vec2[];
      singlePerson?: boolean;
      startDelta?: number;
      posOffset?: Vec2;
      closeFrontDoor?: boolean;
    }
    interface ELEVATOR_TYPE {
      cargoShip: sc.ElevatorType;
      coldDng: sc.ElevatorType;
      lab: sc.ElevatorType;
      labSmall: sc.ElevatorType;
      labSmallOutside: sc.ElevatorType;
      aridInner: sc.ElevatorType;
      aridInnerHuge: sc.ElevatorType;
      aridDngWeird: sc.ElevatorType;
      aridDngOutside: sc.ElevatorType;
      basinKeep: sc.ElevatorType;
      finalDngMedium: sc.ElevatorType;
      finalDngLarge: sc.ElevatorType;
    }
    var ELEVATOR_TYPE: sc.ELEVATOR_TYPE;

    interface ElevatorModel extends ig.GameAddon, ig.Vars.Accessor {
      sound: Nullable<ig.Sound>;
      soundHandle: Nullable<ig.SoundHandle>;

      startMoveSound(this: this, sound: ig.Sound): void;
      endMoveSound(this: this, playAgain?: boolean): void;
      onStoragePreLoad(this: this): void;
    }
    interface ElevatorModelConstructor extends ImpactClass<ElevatorModel> {
      new (): ElevatorModel;
    }
    var ElevatorModel: ElevatorModelConstructor;
    var elevatorModel: sc.ElevatorModel;
  }
  namespace ig {
    namespace ENTITY {
      namespace Elevator {
        interface DestinationConfig {
          label: ig.LangLabel.Data;
          zMoveOffset: number;
          teleportMap: string;
          teleportMarker: string;
          activeCondition?: boolean;
          showCondition?: boolean;
          addedSteps?: ig.EventStepBase.Settings[];
        }
        interface Settings extends ig.Entity.Settings {
          map: string;
          marker: string;
          moveHeight: number;
          faceDir?: keyof typeof ig.ActorEntity.FACE8;
          elevatorType: keyof typeof sc.ELEVATOR_TYPE;
          destinations: DestinationConfig[];
          condition?: string;
          blockEvent?: ig.EventStepBase.Settings;
        }

        type Destination = Omit<ig.ENTITY.Elevator.DestinationConfig, 'zMoveOffset'> & {
          height: number;
        };
      }
      interface Elevator extends ig.Entity {
        markerDir?: keyof typeof ig.ActorEntity.FACE8;
        markerFaceDir: Vec2;
        elevatorData: sc.ElevatorType;
        ground: sc.ElevatorType.Ground;
        groundGfx: ig.Image;
        condition: ig.VarCondition;
        startZ: number;
        targetZ?: number;
        stopDelay: number;
        elevatorVel: number;
        destinations: ig.ENTITY.Elevator.Destination[];
        stuckTimer: number;
        blockEvent: ig.Event;
        blockEventCondition: ig.VarCondition;
        switchEntity: sc.ElevatorSwitchEntity;
        sounds: Record<'start' | 'end', ig.Sound>;
        doTeleport: boolean;
        _wm: ig.Config;
        moveHeight: number;
        faceDir?: keyof typeof ig.ActorEntity.FACE8;

        initDestinatins(this: this, destinations: ig.ENTITY.Elevator.DestinationConfig[]): void;
        initSprites(this: this): void;
        getCurrentDest(this: this): number;
        pressSwitch(this: this): void;
        moveToDestination(this: this, destinationIndex: number): void;
        performTeleport(this: this, destination: ig.ENTITY.Elevator.Destination): void;
        _addMoveEvent(
          this: this,
          steps: ig.EventStepBase.Settings[],
          entity: Nullable<ig.Entity>,
          offsetX: number,
          offsetY: number,
          wait: boolean,
        ): void;
        showElevatorOptions(this: this): void;
        _addWaitSteps(this: this, steps: ig.EventStepBase.Settings[]): void;
        setArrived(this: this): void;
        deferredUpdate(this: this): void;
        varsChanged(this: this): void;
        applyMarkerPosition(this: this, entity: ig.Entity): void;
        onPostPlacementAction(this: this): void;
        placeEntity(this: this, entity: ig.Entity, offset?: Vec2, getLevelByStartZ?: boolean): void;
      }
      interface ElevatorConstructor extends ImpactClass<Elevator> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.Elevator.Settings): Elevator;
      }
      var Elevator: ElevatorConstructor;
    }
  }
  namespace sc {
    namespace ElevatorSwitchEntity {
      interface Settings {
        ground: ig.ENTITY.Elevator;
        // elevatorData: sc.ELEVATOR_TYPE
      }
    }
    interface ElevatorSwitchEntity extends ig.AnimatedEntity {
      groundEntity: ig.ENTITY.Elevator;
      interactEntry: sc.MapInteractEntry;
    }
    interface ElevatorSwitchEntityConstructor extends ImpactClass<ElevatorSwitchEntity> {
      new (
        x: number,
        y: number,
        z: number,
        settings: sc.ElevatorSwitchEntity.Settings,
      ): ElevatorSwitchEntity;
    }
    var ElevatorSwitchEntity: ElevatorSwitchEntityConstructor;
  }
}
