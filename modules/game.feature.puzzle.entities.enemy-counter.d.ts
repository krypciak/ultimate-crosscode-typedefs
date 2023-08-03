// requires game.feature.combat.combat
// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    namespace EnemyCounter {
      interface Settings extends sc.MapModel.MapEntity.Settings {
        enemyGroup: string;
        enemyCount: number;
        preVariable?: string;
        postVariable?: string;
        countVariable?: string;
        shuffleCondition?: string;
      }
    }
  }
}
