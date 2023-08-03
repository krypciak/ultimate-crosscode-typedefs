// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.combat-target-event

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace WaveTeleport {
        interface Settings extends sc.MapModel.MapEntity.Settings {}
      }
    }
  }
}
