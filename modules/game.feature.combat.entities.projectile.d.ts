// requires game.constants
// requires impact.feature.effect.effect-sheet
// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    namespace Projectile {
      interface Settings extends ig.Entity.Settings {}
    }
    interface Projectile extends ig.AnimatedEntity {
      getHitCenter(this: this, entity: ig.Entity, dest?: Vec3): Vec3;
      getElement(this: this): sc.ELEMENT;
      getCombatantRoot(this: this): ig.ENTITY.Combatant;
    }
    interface ProjectileConstructor extends ImpactClass<Projectile> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.Projectile.Settings): Projectile;
    }
    var Projectile: ProjectileConstructor;
  }
}
