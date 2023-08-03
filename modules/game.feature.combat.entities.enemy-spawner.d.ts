// requires impact.base.actor-entity

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace EnemySpawner {
        interface Entry {
          info: sc.EnemyInfo;
          count: number;
        }
        interface Settings extends sc.MapModel.MapEntity.Settings {
          size?: Vec2;
          enemyTypes?: ig.ENTITY.EnemySpawner.Entry[];
          onActiveClear?: boolean;
        }
      }
    }
  }
}
