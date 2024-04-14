// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.combat-target-event

export {};

declare global {
  namespace ig.ENTITY {
    namespace WaveTeleport {
      interface Teleportable {
        doTeleport(this: this, portal: ig.ENTITY.WaveTeleport): void;
      }
      interface Settings extends ig.Entity.Settings {}
    }
    interface WaveTeleport extends ig.AnimatedEntity {}
    interface WaveTeleportConstructor extends ImpactClass<WaveTeleport> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.WaveTeleport.Settings,
      ): WaveTeleport;
    }

    let WaveTeleport: WaveTeleportConstructor;
  }
}
