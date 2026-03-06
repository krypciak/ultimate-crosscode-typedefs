// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.map-content.entities.hidden-block
// requires impact.feature.base.entities.object-layer-view

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace TeleportStairs {
        interface Settings extends ig.Entity.Settings {
          transitionType?: 'REGULAR' | 'INTER_AREA';
          map: string;
          marker: string;
          layer: unknown;
          npcRunnerProb?: number;
          blockEvent?: ig.EventStepBase.Settings;
          blockEventCondition?: string;
        }
      }
      interface TeleportStairs
        extends ig.Entity,
          ig.ENTITY.Marker.MarkerLike,
          sc.NpcRunnerSpawner.RunnerDestinationEntity,
          sc.NPCRunnerEntity.EnterableEntity {
        gfx: ig.Image;
        map: string;
        marker: string;
        stairType: unknown;
        blockEvent: ig.Event;
        blockEventCondition: ig.VarCondition;
        spawnDistance: number;
        transitionType: number;
        npcRunnerProb: number;
        centerWalkThrough: boolean;
        objMaps: unknown;

        getEnterActionData(this: this, entity: ig.Entity): ig.EventStepBase.Settings[];
        getStartPoint(this: this, entity: ig.Entity): Vec2;
      }
      interface TeleportStairsConstructor extends ImpactClass<TeleportStairs> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.TeleportStairs.Settings,
        ): TeleportStairs;
      }
      var TeleportStairs: TeleportStairsConstructor;
    }
  }
}
