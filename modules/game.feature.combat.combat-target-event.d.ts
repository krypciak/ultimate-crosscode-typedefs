export {};

declare global {
  namespace sc {
    namespace CombatEnemyEvent {
      interface Settings {
        newPos?: Vec2;
        key?: string
      }
    }
    interface CombatEnemyEvent {
      _wm: ig.Config;
      check(
        entity: ig.Entity,
        entity2: ig.Entity,
        settings: sc.CombatEnemyEvent.Settings,
        ownSettings: Record<string, number | string | boolean>,
      ): boolean;
    }
    interface COMBAT_ENEMY_EVENT {
      ENEMY_MSG: sc.CombatEnemyEvent;
      MAGNET_PULL: sc.CombatEnemyEvent;
      WAVE_TELEPORT: sc.CombatEnemyEvent;
    }
    var COMBAT_ENEMY_EVENT: COMBAT_ENEMY_EVENT;
  }
}
