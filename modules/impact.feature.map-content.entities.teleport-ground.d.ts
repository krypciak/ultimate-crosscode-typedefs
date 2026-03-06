// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.map-content.entities.hidden-block
// requires impact.feature.base.entities.object-layer-view
// requires game.feature.npc.entities.npc-waypoint

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace TeleportGround {
        interface Settings extends ig.Entity.Settings {
          zHeight?: number;
          dir?: keyof typeof ig.ActorEntity.FACE4;
          map: string;
          marker: string;
          spawnDistance?: number;
          blockEvent?: ig.EventStepBase.Settings[];
          blockEventCondition?: string;
          transitionType?: 'REGULAR' | 'INTER_AREA';
          npcRunnerProb?: number;
          centerWalkThrough?: boolean;
        }
      }
      interface TeleportGround
        extends ig.Entity,
          sc.NpcRunnerSpawner.WPConnectEntity,
          sc.NpcRunnerSpawner.RunnerDestinationEntity,
          ig.ENTITY.Marker.MarkerLike,
          sc.NPCRunnerEntity.EnterableEntity {
        map: string;
        marker: string;
        dir: keyof typeof ig.ActorEntity.FACE4;
        blockEvent: Nullable<ig.Event>;
        blockEventCondition: Nullable<ig.VarCondition>;
        spawnDistance: number;
        transitionType: number;
        npcRunnerProb: number;
        centerWalkThrough: boolean;
        wpConnection: sc.WPConnection;

        getEnterActionData(this: this): ig.EventStepBase.Settings[];
      }
      interface TeleportGroundConstructor extends ImpactClass<TeleportGround> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.TeleportGround.Settings,
        ): TeleportGround;
      }
      var TeleportGround: TeleportGroundConstructor;
    }
  }
}
