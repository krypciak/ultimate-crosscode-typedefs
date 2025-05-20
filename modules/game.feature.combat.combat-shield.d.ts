// requires game.feature.combat.model.combat-params

export {};

declare global {
  namespace sc {
    enum SHIELD_STRENGTH {
      REGULAR = 1,
      BLOCK_ABOVE = 2,
      BLOCK_ALL = 3,
    }

    namespace CombatShield {
      interface Settings {
        baseFactor?: number;
        elementFactors: number[];
        strength?: keyof typeof sc.SHIELD_STRENGTH;
        hitResist?: keyof typeof sc.ATTACK_TYPE;
        stableOverride?: keyof typeof sc.ATTACK_TYPE;
        neutralize?: boolean;
        duration?: number;
        effect?: ig.EffectHandle.Settings;
        fxOffset?: Vec3;
      }

      type AllSettings = {
        [K in keyof typeof sc.COMBAT_SHIELDS]: {
          type: K;
        } & ConstructorParameters<(typeof sc.COMBAT_SHIELDS)[K]>[0];
      };
      type Setting = AllSettings[keyof typeof sc.COMBAT_SHIELDS];
    }
    interface CombatShield extends ig.Class {
      name: string;
      baseFactor: number;
      elementFactors: number[];
      hitResist: sc.ATTACK_TYPE;
      stableOverride: sc.ATTACK_TYPE;
      neutralize?: boolean;
      duration: number;
      effect?: ig.EffectHandle;
      fxOffset?: Vec3;

      isActive(
        this: this,
        combatant: sc.PlayerBaseEntity,
        attackingEntity: sc.BasicCombatant,
        attackInfo: sc.AttackInfo,
        receivingPart: Nullable<sc.BasicCombatant>,
        isPerfect: boolean,
      ): boolean;
    }
    interface CombatShieldConstructor extends ImpactClass<CombatShield> {
      new (settings: sc.CombatShield.Settings, name: string): void;
    }
    var CombatShield: CombatShieldConstructor;

    interface CombatantShieldConnection extends ig.Class {
      perfectGuardTime: number;

      resetPerfectGuardTime(this: this): void;
    }
    interface CombatantShieldConnectionConstructor extends ImpactClass<CombatantShieldConnection> {
      new (
        combatant: ig.ENTITY.Combatant,
        shield: sc.CombatShield,
        perfectGuardTime?: Nullable<number>,
      ): CombatantShieldConnection;
    }
    var CombatantShieldConnection: CombatantShieldConnectionConstructor;

    namespace COMBAT_SHIELDS {
      namespace DIRECIONAL {
        interface Settings extends sc.CombatShield.Settings {}
      }
      interface DIRECTIONAL extends sc.CombatShield {}
      interface DIRECTIONAL_CONSTRUCTOR extends ImpactClass<DIRECTIONAL> {
        new (settings: sc.COMBAT_SHIELDS.DIRECIONAL.Settings, name: string): DIRECTIONAL;
      }
      var DIRECIONAL: DIRECTIONAL_CONSTRUCTOR;

      namespace PLAYER {
        interface Settings extends sc.COMBAT_SHIELDS.DIRECIONAL.Settings {}
      }
      interface PLAYER extends sc.COMBAT_SHIELDS.DIRECTIONAL {
        noShieldDamage: boolean;
      }
      interface PLAYER_CONSTRUCTOR extends ImpactClass<PLAYER> {
        new (settings: sc.COMBAT_SHIELDS.PLAYER.Settings, name: string): PLAYER;
      }
      var PLAYER: PLAYER_CONSTRUCTOR;
    }
  }
}
