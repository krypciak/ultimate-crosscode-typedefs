// requires impact.base.actor-entity

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace EnemySpawner {
        interface Entry {
          info: sc.EnemyInfo.Settings;
          count: number;
        }
        interface Settings extends ig.Entity.Settings {
          size?: Vec2;
          enemyTypes?: ig.ENTITY.EnemySpawner.Entry[];
          onActiveClear?: boolean;
        }

        interface EnemyTypesEntry {
          info: sc.EnemyInfo.Settings;
          type: sc.EnemyType;
          count: number;
          activeEnemies: [];
        }
      }
      interface EnemySpawner extends ig.Entity {
        enemyTypes: ig.ENTITY.EnemySpawner.EnemyTypesEntry[];
        maxEnemies: number;
        respawnTimer: number;
        initialSpawn: boolean;
        effectInitialSpawn: boolean;
        _wm: ig.Config;
        onActiveClear?: boolean;

        _storeState(this: this, clearState?: boolean): void;
        _getVarPrefix(this: this): string;
        isCleared(this: this): boolean;
        respawnEnemies(this: this, showEffects?: boolean, killState?: number[]): void;
        spawnEnemy(
          this: this,
          entry: ig.ENTITY.EnemySpawner.EnemyTypesEntry,
          showEffects?: boolean
        ): ig.ENTITY.Enemy;
      }
      interface EnemySpawnerConstructor extends ImpactClass<EnemySpawner> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.EnemySpawner.Settings,
        ): EnemySpawner;
      }
      var EnemySpawner: EnemySpawnerConstructor;
    }
  }
}
