// requires game.feature.combat.model.combat-params

export {};

declare global {
  namespace sc {
    namespace COMBAT_CONDITION {
      namespace RANDOM {
        interface Settings {
          max: number;
        }
      }
      interface RANDOM extends sc.CombatCondition {
        value: number;
      }
      interface RANDOM_CONSTRUCTOR extends ImpactClass<RANDOM> {
        new (settings: sc.COMBAT_CONDITION.RANDOM.Settings): RANDOM;
      }
      var RANDOM: COMBAT_CONDITION.RANDOM_CONSTRUCTOR;

      namespace HAS_SP {
        interface Settings {
          min: number;
        }
      }
      interface HAS_SP extends sc.CombatCondition {
        min: number;
      }
      interface HAS_SP_CONSTRUCTOR extends ImpactClass<HAS_SP> {
        new (settings: sc.COMBAT_CONDITION.HAS_SP.Settings): HAS_SP;
      }
      var HAS_SP: COMBAT_CONDITION.HAS_SP_CONSTRUCTOR;
    }
  }
}

