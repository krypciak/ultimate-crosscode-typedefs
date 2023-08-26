// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.combat-target-event
// requires impact.base.actor-entity

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace Magnet {
        interface Settings extends ig.Entity.Settings {
          dir: keyof typeof ig.ActorEntity.FACE4
          altDirs?: string[]; // array of conditions
        }
      }
    }
  }
}
