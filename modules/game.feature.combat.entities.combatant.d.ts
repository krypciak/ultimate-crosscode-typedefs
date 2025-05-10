// requires game.feature.npc.entities.sc-actor
// requires game.feature.combat.combat
// requires game.feature.combat.entities.hit-number
// requires game.feature.combat.model.combat-params
// requires impact.feature.effect.effect-sheet
// requires game.feature.model.options-model
// requires impact.feature.terrain.terrain
// requires game.feature.combat.model.proxy

export {};

declare global {
  namespace sc {
    interface CombatFlyLevel {
      vel: number;
      stun: number;
      jump: number;
      bounciness?: number;
      airFriction?: number;
      far?: boolean;
    }
    var COMBAT_FLY_LEVEL: Record<string, CombatFlyLevel>;

    enum SHIELD_RESULT {
      NONE = 0,
      REGULAR = 1,
      PERFECT = 2,
      NEUTRALIZE = 3,
    }

    // TODO: What is the difference between getCombatant and getCombatantRoot?
    interface GetCombatant {
      // This can return an sc.CombatProxyEntity, the type must be more general.
      getCombatant(this: this): sc.BasicCombatant;
    }

    interface GetCombatantRoot {
      // This cannot return an sc.CombatProxyEntity, so the type can be more specific.
      getCombatantRoot(this: this): ig.ENTITY.Combatant;
    }

    namespace BasicCombatant {
      interface Combo {
        damageCeiling: Nullable<{ max: number; sum: Record<number, number> }>;
        hitCombatants: sc.BasicCombatant[];
        dmgSum: number;
        blockedDamage: number;
        blockedFactor: number;
        guardedHits: number;
        guardedEntity: Nullable<sc.BasicCombatant>;
        hitProxy: Nullable<sc.HitProxyConnect>;
        guardTrapTime: number;
      }

      interface Settings extends sc.ActorEntity.Settings {}

      interface Tackle {
        attackInfo: Nullable<sc.AttackInfo>;
        orthoDirFactor: number;
        blocked: number[];
        hitCount: number;
        cancelOnHit: number;
      }
    }
    interface BasicCombatant extends sc.ActorEntity, sc.GetCombatant, sc.GetCombatantRoot {
      tackle: sc.BasicCombatant.Tackle;
      combo: sc.BasicCombatant.Combo;
      target: Nullable<sc.BasicCombatant>;
      tmpTarget: sc.BasicCombatant;
      replaceTargets: sc.BasicCombatant[];
      ignoreTaunts: boolean;

      hasBlockEntity(this: this): boolean;
      setTackle(
        this: this,
        attackInfo: sc.AttackInfo,
        orthoDirFactor?: number,
        cancelOnHit?: boolean,
        pushBlocked?: boolean,
      ): void;
      getElement(this: this): sc.ELEMENT;
      getAttackInfo(this: this): Nullable<sc.AttackInfo>;
      checkTackle(
        this: this,
        combatant: sc.BasicCombatant,
        damagingEntity?: sc.CombatantAnimPartEntity,
        checkFace?: boolean,
      ): boolean;
      getHitCenter(this: this, entity: ig.Entity, dest: Vec3): Vec3;
      getHitVel(this: this, entity: ig.Entity, dest: Vec2): Vec2;
      setHitProxy(
        this: this,
        proxy: sc.ProxySpawnerBase,
        pos?: sc.COMBAT_HIT_PROXY_POS,
        align?: ig.ENTITY_ALIGN,
        offset?: Vec3,
      ): void;
      spawnHitProxy(
        this: this,
        target: sc.BasicCombatant,
        entity: Nullable<sc.BasicCombatant>,
        dir: Vec2,
      ): void;
    }
    interface BasicCombatantConstructor extends ImpactClass<BasicCombatant> {
      new (x: number, y: number, z: number, settings: sc.BasicCombatant.Settings): BasicCombatant;
    }
    var BasicCombatant: BasicCombatantConstructor;

    interface ReplaceTargetHandle extends ig.Class, ig.ActorEntity.ActionAttachedListener {
      combatant: ig.ENTITY.Combatant;
    }
    interface ReplaceTargetHandleConstructor extends ImpactClass<ReplaceTargetHandle> {
      new (combatant: ig.ENTITY.Combatant, replaceTarget: sc.BasicCombatant): ReplaceTargetHandle;
    }
    var ReplaceTargetHandle: ReplaceTargetHandleConstructor;

    enum DYING_STATE {
      ALIVE = 0,
      KILL_HIT = 1,
      DYING = 2,
    }
  }

  namespace ig.ENTITY {
    namespace Combatant {
      interface HitProperties {
        damageResult: number;
        attackType?: sc.ATTACK_TYPE;
        flyLevel?: keyof typeof sc.COMBAT_FLY_LEVEL;
        hitStable?: sc.ATTACK_TYPE;
        damageFactor: number;
        weakness: boolean;
        alignFace: boolean;
        ignoreHit: boolean;
      }
      interface Settings extends sc.BasicCombatant.Settings {}

      interface StunData {
        time: number;
        hits: number;
        damage: number;
        resetTimer: number;
        stunEscapeTime: number;
        damageSum: number;
        damageSumHits: number;
        damageSumEntity: Nullable<ig.ENTITY.HitNumberSum>;
        lastHitElement: number;
        hitNumberEntities: ig.ENTITY.HitNumber[];
        damageSumTimer: number;
      }

      interface SpikeDmg {
        baseFactor: number;
        tmpFactor: number;
        receiveStash: { damage: number; timer: number; offensiveFactor: number }[];
      }

      interface Pvp {
        active: boolean;
        enemies: ig.ENTITY.Enemy[];
        round: number;
        points: Record<sc.COMBATANT_PARTY, number>;
      }

      interface Respawn {
        dmgFactor: number;
        pos: Vec3;
        oldPos: Vec3;
        timer: number;
        terrain: Nullable<ig.TERRAIN>;
      }
    }
    interface Combatant extends sc.BasicCombatant {
      params: sc.CombatParams;
      isCombatant: true;
      party: sc.COMBATANT_PARTY;
      material: sc.COMBATANT_MATERIAL;
      damageTimer: number;
      defeatNotified: boolean;
      dying: sc.DYING_STATE;
      skipRumble: boolean;
      deathEffect: null;
      manualKill: Nullable<string>;
      invincibleTimer: number;
      stunThreshold: number;
      stunCombatant: Nullable<sc.BasicCombatant>;
      stunSteps: sc.CombatStun[];
      stunData: ig.ENTITY.Combatant.StunData;
      targetedBy: ig.ENTITY.Combatant[];
      threat: Nullable<boolean>;
      regenFactor: number;
      regenTimer: number;
      hitStable: number;
      hitIgnore: boolean;
      statusGui: ig.GUI.StatusBar;
      shieldsConnections: sc.CombatantShieldConnection[];
      spikeDmg: ig.ENTITY.Combatant.SpikeDmg;
      pvp: ig.ENTITY.Combatant.Pvp;
      respawn: ig.ENTITY.Combatant.Respawn;
      effects: Record<string, ig.EffectSheet>;

      hasStun(this: this): boolean;
      setRespawnPoint(this: this, pos: Vec3): void;
      isDefeated(this: this): boolean;
      cancelStun(this: this): void;
      setTarget(this: this, combatant: sc.BasicCombatant, fixed?: Nullable<boolean>): void;
      setReplaceTarget(this: this, combatant: sc.BasicCombatant): sc.ReplaceTargetHandle;
      _addTargetedBy(this: this, combatant: ig.ENTITY.Combatant): void;
      _removeTargetedBy(this: this, combatant: ig.ENTITY.Combatant): void;
      sendEnemyEvent(
        this: this,
        type: sc.CombatEnemyEvent,
        settings: sc.CombatEnemyEvent.Settings,
      ): void;
      hasShield(this: this, name: string): boolean;
      updateShields(this: this): void;
      addShield(
        this: this,
        shield: sc.CombatShield,
        perfectGuardTime?: Nullable<number>,
      ): sc.CombatantShieldConnection;
      removeShield(this: this, shield: sc.CombatantShieldConnection): void;
      removeNamedShield(this: this, name: string): void;
      damage(
        this: this,
        damagingEntity: sc.BasicCombatant,
        attackInfo: sc.AttackInfo,
        animPart: sc.CombatantAnimPartEntity,
      ): boolean;
      isShielded(
        this: this,
        damagingEntity: sc.BasicCombatant,
        attackInfo: sc.AttackInfo,
        animPart: sc.CombatantAnimPartEntity,
        hitProperties: ig.ENTITY.Combatant.HitProperties,
      ): boolean;
      getSpikeShieldFactor(this: this): number;
      onPreDamageModification(
        this: this,
        hitProperties: ig.ENTITY.Combatant.HitProperties,
        damagingEntity: sc.BasicCombatant,
        attackInfo: sc.AttackInfo,
        partEntity: Nullable<sc.BasicCombatant>,
        damageResult: sc.CombatParams.DamageResult,
        shieldResult: sc.SHIELD_RESULT,
      ): boolean;
      onPerfectDash(this: this): void;
      onStunLockClear(this: this): void;
      onDamage(
        this: this,
        damagingEntity: sc.BasicCombatant,
        attackInfo: sc.AttackInfo,
        animPart: sc.CombatantAnimPartEntity,
      ): boolean;
      regenPvp(this: this, reviveHpFactor?: number): void;
      onPvpEnd(this: this, didPlayerWin?: boolean): void;
      setCombatStat(this: this, stat: string, value: number): void;
      getCombatStat(this: this, stat: string, defaultValue?: number): number;
      addCombatStat(this: this, stat: string, addValue: number): void;
      _onDeathHit(this: this, attacker: ig.ENTITY.Combatant): void;
      addSpikeDamage(
        this: this,
        damageResult: sc.CombatParams.DamageResult,
        multiplier: number,
        target2: ig.ENTITY.Combatant,
        isCombo: boolean,
        comboGuardedEntity: sc.BasicCombatant,
      ): void;
      updateSpikeDamage(this: this): void;
      instantDamage(
        this: this,
        damage: number,
        size: number,
        hitProperties?: ig.ENTITY.Combatant.HitProperties,
      ): void;
      doDamageMovement(
        this: this,
        from: Vec2,
        flyLevel: keyof typeof sc.COMBAT_FLY_LEVEL,
        breaking: boolean,
        stable: boolean,
        knockback?: number,
        noZAdjust?: boolean,
        reverse?: boolean,
        weightMultiplier?: number,
      ): number;
      onTargetHit(
        this: this,
        target: ig.ENTITY.Combatant,
        attackInfo: sc.AttackInfo,
        damageResult: sc.CombatParams.DamageResult,
        shieldResult: sc.SHIELD_RESULT,
        entity: ig.Entity,
      ): void;
      heal(this: this, healInfo: sc.HealInfoType, hideNumbers?: boolean): void;
      instantDefeat(this: this, skipRumble?: boolean, forceEvenIfNoParams?: boolean): void;
      selfDestruct(this: this, resolveDefeat?: boolean): void;
      doManualKill(this: this, resolveDefeat?: boolean, notifyArena?: boolean): void;
      doManualRevive(this: this, hpFactor?: number): void;
      resetStunData(this: this): void;
      clearDamageSum(this: this): void;
      onTerrainUpdate(this: this): void;
      checkQuickRespawn(this: this): void;
      quickFall(this: this, terrain: ig.TERRAIN): void;
      handleRespawn(this: this): void;
      doQuickRespawn(this: this, terrain?: ig.TERRAIN, died?: boolean, pos?: Vec3): void;
      onDefeat(this: this, noResolve?: boolean): void;
      getAnimPartyEntityClass(this: this): sc.CombatantAnimPartEntityConstructor;
      onStunEnd(this: this): void;
      onEnemyEvent?(
        this: this,
        combatant: ig.ENTITY.Combatant,
        type: sc.CombatEnemyEvent,
        settings?: Nullable<sc.CombatEnemyEvent.Settings>,
      ): void;

      // only natively exists on ig.ENTITY.Player, but a function of this signature is expected.
      onHeal?(this: this, healInfo: sc.HealInfoType, amount: number): void;
    }
    interface CombatantConstructor extends ImpactClass<Combatant> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.Combatant.Settings,
      ): ig.ENTITY.Combatant;
    }
    var Combatant: CombatantConstructor;
  }

  namespace sc {
    namespace CombatantAnimPartEntity {
      interface Settings extends ig.AnimationPartEntity.Settings {}
    }
    interface CombatantAnimPartEntity
      extends ig.AnimationPartEntity,
        sc.GetCombatant,
        sc.GetCombatantRoot {
      isCombatant: boolean;
      party: sc.COMBATANT_PARTY;

      damage(this: this, damagingEntity: sc.BasicCombatant, attackInfo: sc.AttackInfo): boolean;
      collideWith(this: this, entity: ig.Entity): void;
      getHitCenter(this: this, v1: Vec3, output?: Vec3): Vec3;
      getHitVel(this: this, entity: ig.Entity, destVec?: Vec2): Vec2;
    }
    interface CombatantAnimPartEntityConstructor extends ImpactClass<CombatantAnimPartEntity> {
      new (
        x: number,
        y: number,
        z: number,
        settings: sc.CombatantAnimPartEntity.Settings,
      ): CombatantAnimPartEntity;
    }
    var CombatantAnimPartEntity: CombatantAnimPartEntityConstructor;
  }
}
