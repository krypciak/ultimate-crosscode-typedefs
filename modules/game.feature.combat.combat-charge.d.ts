// requires game.feature.combat.model.combat-params
// requires game.feature.combat.entities.ball

export {};

declare global {
  namespace sc {
    interface CombatCharge extends ig.Class, sc.Combat.ActionAttached {
      fx: ig.ENTITY.Effect;
      darkness: ig.DarknessHandle;
      soundHandle: ig.SoundHandle;
      entity: ig.Entity;
      stereo: boolean;
      slowmo: boolean;
      camera: boolean;

      charge(this: this, element: sc.ELEMENT, chargeStage: number, showCombatArt?: boolean): void;
      stop(this: this): void;
      onEntityKillDetach(this: this): void;
    }
    interface CombatChargeConstructor extends ImpactClass<CombatCharge> {
      new (entity: unknown, stereo: boolean, slowmo?: boolean, camera?: boolean): CombatCharge;
    }
    var CombatCharge: CombatChargeConstructor;
  }
}
