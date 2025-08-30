// requires game.constants
// requires impact.feature.effect.effect-sheet
// requires impact.base.entity

export {};

declare global {
  namespace ig {
    enum PROJECTILE_KILL_TYPE {
      WALL = 1,
      AIR = 2,
      OTHER = 3,
    }

    namespace ENTITY {
      namespace Projectile {
        interface Settings extends ig.Entity.Settings {
          vel: Vec2;
          combatant: sc.BasicCombatant;
        }
      }
      interface Projectile extends ig.AnimatedEntity, ig.BallLike {
        speedVary: { _type: string; _info: string };
        combatant: sc.BasicCombatant;
        hitProxy: Nullable<sc.HitProxyConnect>;
        remainingHits: number;
        maxHits: number;
        alreadyCollided: number[];
        skipBounce: boolean;
        noMoveRotate: boolean;

        spawnHitProxy(
          this: this,
          target: sc.BasicCombatant,
          entity: Nullable<sc.BasicCombatant>,
          dir: Vec2,
        ): void;
        handleMovementTrace(this: this, coll: ig.CollEntry): void;
        clearIgnored(this: this): void;
        addIgnore(this: this, entityId: number): void;
        getAttackInfo(this: this): sc.AttackInfo;
      }
      interface ProjectileConstructor extends ImpactClass<Projectile> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.Projectile.Settings): Projectile;
      }
      var Projectile: ProjectileConstructor;
    }
  }
}
