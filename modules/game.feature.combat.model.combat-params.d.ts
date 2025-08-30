// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    enum ELEMENT {
      NEUTRAL = 0,
      HEAT = 1,
      COLD = 2,
      SHOCK = 3,
      WAVE = 4,
    }

    enum COMBAT_PARAM_MSG {
      HP_CHANGED = 1,
      SP_CHANGED = 2,
      STATS_CHANGED = 3,
      BUFF_ADDED = 4,
      BUFF_REMOVED = 5,
      RESET_STATS = 6,
      MAX_SP_CHANGED = 7,
      SP_CONSUME = 8,
      BUFFS_CLEARED = 9,
    }

    enum ATTACK_TYPE {
      NONE = 0,
      LIGHT = 1,
      MEDIUM = 2,
      HEAVY = 3,
      MASSIVE = 4,
      BREAK = 5,
    }

    enum ATTACK_SOUND_TYPE {
      BLUNT = 0,
      SLASH = 1,
    }

    enum GUARDABLE {
      AUTO = 0,
      NEVER = 1,
      FROM_ABOVE = 2,
      ALWAYS = 3,
    }

    namespace ATTACK_LIMITER {
      interface Base {
        noDmg?: boolean;
        onlyHitProxy?: boolean;
        noAggro?: boolean;
        noEffect?: boolean;
      }
    }
    interface ATTACK_LIMITER {
      NO_DAMAGE: sc.ATTACK_LIMITER.Base;
      ONLY_HIT_PROXY: sc.ATTACK_LIMITER.Base;
      SIGNAL: sc.ATTACK_LIMITER.Base;
      NO_EFFECT: sc.ATTACK_LIMITER.Base;
      NO_HIT_PROXY: sc.ATTACK_LIMITER.Base;
    }
    var ATTACK_LIMITER: ATTACK_LIMITER;

    var ELEMENT_MAX: number;
    var ELEMENT_COUNTER: Record<ELEMENT, ELEMENT>;
    var SP_REGEN_SPEED: { [maxSp: number]: number };
    var SP_REGEN_FACTOR: number;
    var HP_LOW_WARNING: number;

    namespace CombatParams {
      interface Params {
        hp: number;
        attack: number;
        defense: number;
        focus: number;

        elemFactor: number[];
        statusInflict: number[];
        statusEffect?: number[];
      }
      type ParamName = keyof sc.CombatParams.Params;

      interface BaseParams extends Params {}

      interface DamageResult {
        damage: number;
        defReduced: number;
        offensiveFactor: number;
        baseOffensiveFactor: number;
        elementalDef: number;
        defensiveFactor: number;
        critical: number;
        status: number;
      }
    }
    interface CombatParams extends ig.Class, sc.Model, ig.ActorEntity.ActionAttachedListener {
      combatant: ig.ENTITY.Combatant;
      baseParams: sc.CombatParams.BaseParams;
      modifiers: Record<keyof sc.MODIFIERS, number>;
      buffs: sc.StatChange[];
      currentHp: number;
      maxSp: number;
      currentSp: number;
      spHoldTimer: number;
      currentItemBuffs: number;
      tmpElemFactor: number[];
      tmpStatusInflict: number[];
      damageFactor: number;
      ballFactor: number;
      defeated: boolean;
      statusStates: sc.CombatStatusBase[];
      hpRegTime: number;
      hpHealTimer: number;
      criticalDmgFactor: number;
      lockedBy: ig.ActorEntity[];
      stats: Record<string, number>;

      setCombatStat(this: this, stat: string, value: number): void;
      getCombatStat(this: this, stat: string, orDefault?: number): number;
      addCombatStat(this: this, stat: string, toAdd: number): void;
      healStatus(this: this): void;
      revive(this: this, hpFactor?: number): void;
      setCombatant(this: this, combatant: ig.ENTITY.Combatant): void;
      initStatusFx(this: this): void;
      setModifiers(this: this, modifiers: sc.ModifierList): void;
      startLock(this: this, actor: ig.ActorEntity): void;
      endLock(this: this, actor: ig.ActorEntity): void;
      clearLock(this: this): void;
      isLocked(this: this): boolean;
      isLockedBy(this: this, actor: ig.ActorEntity): boolean;
      _decreaseLock(this: this, actor: ig.ActorEntity): void;
      reset(this: this, maxSp: number): void;
      resetStatusConditions(this: this): void;
      resetSp(this: this): void;
      setMaxSp(this: this, maxSp: number): void;
      setBaseParams(this: this, baseParams: sc.CombatParams.BaseParams, noEffects?: boolean): void;
      getStat<K extends sc.CombatParams.ParamName>(
        this: this,
        key: K,
        noHack?: Nullable<boolean>,
      ): sc.CombatParams.Params[K];
      getStatBuffFactor(this: this, stat: sc.StatChange.ParamName): number;
      getModifier(this: this, modifier: keyof sc.MODIFIERS): number;
      getDamage(
        this: this,
        attackInfo: sc.AttackInfo,
        damageFactorMod: number,
        combatant: ig.ENTITY.Combatant,
        shieldResult?: sc.SHIELD_RESULT,
        hitIgnore?: boolean,
      ): CombatParams.DamageResult;
      applyDamage(
        this: this,
        damageResult: sc.CombatParams.DamageResult,
        attackInfo: sc.AttackInfo,
        combatant: ig.ENTITY.Combatant,
      ): void;
      getHealAmount(this: this, healInfo: sc.HealInfoType): number;
      reduceHp(this: this, amount: number): void;
      setRelativeHp(this: this, ratio: number): void;
      setCritical(this: this): void;
      increaseHp(this: this, amount: number): void;
      getHpFactor(this: this): number;
      addSp(this: this, spAdd: number, maxSp?: number): void;
      consumeSp(this: this, sp: number): void;
      setRelativeSp(this: this, factor: number): void;
      getSp(this: this): number;
      getRelativeSp(this: this): number;
      notifySpConsume(this: this, sp: number): void;
      setDefeated(this: this): void;
      isDefeated(this: this): boolean;
      addItemBuf(
        this: this,
        stats: sc.StatChange.StatName[],
        duration: number,
        itemId: sc.ItemID,
      ): true;
      removeIntersectingItemBuff(this: this, buff: sc.StatChange): void;
      addBuff(this: this, buff: sc.StatChange): true;
      modifyBuff<T extends sc.StatChange.ParamName>(
        this: this,
        buff: sc.StatChange,
        param: T,
        value: sc.StatChange.Params[T],
      ): boolean;
      removeBuff(this: this, buff: sc.StatChange): void;
      removeAllBuffs(this: this): void;
      getMaxBuffs(this: this): number;
      hasMaxBuffs(this: this): boolean;
      update(this: this, inCombat: boolean): void;
    }
    interface CombatParamsConstructor extends ImpactClass<CombatParams> {
      new (stats: sc.StatChange.Params): CombatParams;
    }
    var CombatParams: CombatParamsConstructor;

    namespace AttackInfo {
      type Hint = LiteralUnion<
        | 'CHARGED'
        | 'DUNGEON_KEY'
        | 'DUNGEON_MASTER_KEY'
        | 'FERRO'
        | 'FERRO_IGNORE'
        | 'BOMB'
        | 'ICE_DISK'
        | 'COMPRESSED'
        | 'STEAM'
        | 'STEAM_PIPE'
        | 'LIGHTNING'
        | 'GROUND_SHOCK'
        | 'DISCHARGE_FISH'
        | 'DEEP_FLAME'
      >;

      type AllCombatStunSettings = {
        [K in keyof typeof sc.COMBAT_STUN]: {
          type: K;
        } & ConstructorParameters<(typeof sc.COMBAT_STUN)[K]>[0];
      };
      type CombatStunSetting = AllCombatStunSettings[keyof typeof sc.COMBAT_STUN];

      interface AttackSettings {
        type?: keyof typeof sc.ATTACK_TYPE;
        visualType?: keyof typeof sc.ATTACK_TYPE;
        damageFactor: number;
        defenseFactor?: number;
        element?: keyof typeof sc.ELEMENT;
        spFactor?: number;
        fly?: keyof typeof sc.ATTACK_TYPE;
        reverse?: boolean;
        critFactor?: number;
        stunSteps?: CombatStunSetting[];
        status?: number;
        guardable?: keyof typeof sc.GUARDABLE | '';
        hints?: sc.AttackInfo.Hint[];
        skillBonus: keyof sc.MODIFIERS;
        limiter?: keyof typeof sc.ATTACK_LIMITER;
        hitInvincible?: boolean;
        noIronStance?: boolean;
        noHack?: boolean;
      }
    }
    interface AttackInfo extends ig.Class {
      type: sc.ATTACK_TYPE;
      visualType: sc.ATTACK_TYPE;
      soundType: sc.ATTACK_SOUND_TYPE;
      attackerParams: sc.CombatParams;
      reverse: boolean;
      ballDamage: boolean;
      hints: Nullable<sc.AttackInfo.Hint[]>;
      damageFactor: number;
      defenseFactor: number;
      statusInflict: number;
      element: sc.ELEMENT;
      critFactor: number;
      spFactor: number;
      spRepeatFactor: number;
      fly: Nullable<keyof typeof sc.ATTACK_TYPE>;
      stunSteps: sc.CombatStun[];
      skillBonus: Nullable<keyof sc.MODIFIERS>;
      guardable: sc.GUARDABLE;
      limiter: sc.ATTACK_LIMITER;
      hitInvincible: boolean;
      noIronStance: boolean;
      noHack: boolean;

      hasHint(this: this, hint: sc.AttackInfo.Hint): boolean;
      hasNoEffect(this: this): boolean | undefined;
    }
    interface AttackInfoConstructor extends ImpactClass<AttackInfo> {
      new (
        params: sc.CombatParams,
        settings: sc.AttackInfo.AttackSettings,
        fromBall?: boolean,
      ): AttackInfo;
    }
    var AttackInfo: AttackInfoConstructor;

    namespace HealInfo {
      interface Settings {
        value: number;
        absolute?: boolean;
      }
    }
    interface HealInfo extends ig.Class {
      healerParams: sc.CombatParams;
      value: number;
      absolute: boolean;
      clone(this: this): sc.HealInfo;
    }
    interface HealInfoConstructor extends ImpactClass<HealInfo> {
      new (params: sc.CombatParams, settings: HealInfo.Settings): sc.HealInfo;
    }
    var HealInfo: HealInfoConstructor;
    //in any situation where the game expects sc.HealInfo, a normal object that can work as well.
    //in fact, the devs used this property quite a bit.
    type HealInfoType = sc.HealInfo | sc.HealInfo.Settings;
  }
}
