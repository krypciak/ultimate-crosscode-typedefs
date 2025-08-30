// requires game.feature.combat.model.combat-params
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    interface CombatStatusBase extends ig.Class {
      id: number;
      statusBarEntry: string;
      offenseModifier: string;
      defenseModifier: keyof typeof sc.MODIFIERS;
      effects: ig.EffectSheet;
      duration: number;
      charge: number;
      active: boolean;
      effectiveness: number;
      label?: string;
      fxHandle: Nullable<ig.ENTITY.Effect>;

      getInflictValue(
        this: this,
        value: number,
        defenderParams: sc.CombatParams,
        attackInfo: sc.AttackInfo,
        shieldResult: sc.SHIELD_RESULT,
      ): number;
      inflict(this: this, charge: number, params: sc.CombatParams, attackInfo: sc.AttackInfo): void;
      _getOffensiveFactor(this: this, attackInfo: sc.AttackInfo): number;
      activate(
        this: this,
        combatant: ig.ENTITY.Combatant,
        params: sc.CombatParams,
        attackInfo: sc.AttackInfo,
      ): void;
      initEntity(this: this, combatant: ig.ENTITY.Combatant): void;
      getEffectiveness(this: this, params: sc.CombatParams): number;
      clear(this: this, combatant?: ig.ENTITY.Combatant): void;
      update(
        this: this,
        combatant: ig.ENTITY.Combatant,
        params: sc.CombatParams,
        decreaseHeal?: boolean,
      ): void;
      getLabel(this: this): string;
      onUpdate(this: this, combatant: ig.ENTITY.Combatant, params: sc.CombatParams): void;
      onInitEntity(this: this, combatant: ig.ENTITY.Combatant): void;
      onClear(this: this, combatant: ig.ENTITY.Combatant): void;
      onActivate(this: this, combatant: ig.ENTITY.Combatant): void;
    }
    interface CombatStatusBaseConstructor extends ImpactClass<CombatStatusBase> {
      new (): CombatStatusBase;
    }
    var CombatStatusBase: CombatStatusBaseConstructor;
    var COMBAT_STATUS: sc.CombatStatusBase[];

    interface BurnStatus extends sc.CombatStatusBase {
      burnTimer: number;
    }
    interface BurnStatusConstructor extends ImpactClass<BurnStatus> {}
    var BurnStatus: BurnStatusConstructor;

    interface ChillStatus extends sc.CombatStatusBase {}
    interface ChillStatusConstructor extends ImpactClass<ChillStatus> {}
    var ChillStatus: ChillStatusConstructor;

    interface JoltStatus extends sc.CombatStatusBase {
      shockTimer: number;
    }
    interface JoltStatusConstructor extends ImpactClass<JoltStatus> {}
    var JoltStatus: JoltStatusConstructor;

    interface MarkStatus extends sc.CombatStatusBase {
      getValue(this: this, combatant: ig.ENTITY.Combatant): number;
    }
    interface MarkStatusConstructor extends ImpactClass<MarkStatus> {}
    var MarkStatus: MarkStatusConstructor;
  }
}
