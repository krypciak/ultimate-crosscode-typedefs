// requires impact.base.game
// requires impact.feature.effect.effect-sheet
// requires impact.feature.database.database
// requires impact.feature.navigation.navigation
// requires game.feature.model.game-model

export {};

declare global {
  namespace sc {
    enum COMBATANT_PARTY {
      PLAYER = 1,
      ENEMY = 2,
      OTHER = 3,
    }

    interface AttackFrequency {
      gap: number;
    }
    interface ATTACK_FREQUENCY {
      SPAMM: sc.AttackFrequency;
      OFTEN: sc.AttackFrequency;
      NORMAL: sc.AttackFrequency;
      SOMETIMES: sc.AttackFrequency;
      RARE: sc.AttackFrequency;
      VERY_RARE: sc.AttackFrequency;
    }
    var ATTACK_FREQUENCY: ATTACK_FREQUENCY;

    enum COMBAT_EVENT {
      DEFEATED = 1,
    }

    interface DramaticEffect {
      timeFactor: number;
      wait: number;
      blurDuration: number;
      blurType?: 'NONE' | 'LIGHT';
      clearTime: number;
      zoom: number;
      label?: string;
      alwaysFocus?: boolean;
      speedlines?: boolean;
      break?: boolean;
      camera?: number;
    }
    interface DRAMATIC_EFFECT {
      HP_BREAK_ZOOM: sc.DramaticEffect;
      LAST_ENEMY_ZOOM: sc.DramaticEffect;
      BOSS_ZOOM: sc.DramaticEffect;
      BREAK_NONE: sc.DramaticEffect;
      BREAK_NO_TEXT: sc.DramaticEffect;
      BREAK_LIGHT: sc.DramaticEffect;
      BREAK: sc.DramaticEffect;
      BREAK_ALWAYS: sc.DramaticEffect;
      BREAK_BIG: sc.DramaticEffect;
      BREAK_WIDE: sc.DramaticEffect;
      BREAK_WIDE_NOSLOW: sc.DramaticEffect;
      OVERLOAD: sc.DramaticEffect;
      GUARD_COUNTER: sc.DramaticEffect;
      GUARD_BREAK: sc.DramaticEffect;
      RANK_UP: sc.DramaticEffect;
      S_RANK: sc.DramaticEffect;
      PVP_KO: sc.DramaticEffect;
      PVP_FINAL_KO: sc.DramaticEffect;
      ARENA_FINAL_KO: sc.DramaticEffect;
      ONCE_MORE: sc.DramaticEffect;
      ELEMENT_SHIELD: sc.DramaticEffect;
      PERFECT_DASH: sc.DramaticEffect;
    }
    var DRAMATIC_EFFECT: DRAMATIC_EFFECT;

    interface CombatMsgType {
      icon: string;
      msg: string;
      keepPos: boolean;
      duration?: number;
    }
    interface COMBAT_MSG_TYPE {
      STUN_CANCEL: CombatMsgType;
    }
    var COMBAT_MSG_TYPE: COMBAT_MSG_TYPE;
    var MIN_KILLS: number;

    namespace Combat {
      interface ActionAttached {
        onActionEndDetach(this: this): void;
      }

      interface Listener {
        onCombatEvent?(combatant: ig.ENTITY.Combatant, type: sc.COMBAT_EVENT): Listener;
      }
    }
    interface Combat extends ig.GameAddon, sc.Model, ig.Vars.Accessor, sc.Model.Observer {
      listeners: sc.Combat.Listener[];
      actionToken: number[];
      freeLineCommands: { entity: ig.ENTITY.Combatant; time: number }[];
      activeCombatants: Record<sc.COMBATANT_PARTY, ig.ENTITY.Combatant[]>;
      forces: sc.CombatForce[];
      active: boolean;
      time: number;
      speed: number;
      recentlyAttacked: ig.ENTITY.Enemy[];
      playerStartedCombat: boolean;
      collabs: sc.EnemyCollab[];
      hideDamageNumbers: boolean;
      effects: {
        hit: ig.EffectSheet;
        guard: ig.EffectSheet;
        combat: ig.EffectSheet;
        combatant: ig.EffectSheet;
        throw: ig.EffectSheet;
        mode: ig.EffectSheet;
        heal: ig.EffectSheet;
        cooldownHandle: ig.EffectSheet; // never actually used and is set to null
      };
      cooldownTick: {
        sounds: { below: number; sound: ig.Sound }[];
        hasCooldown: boolean;
        currentSound: number;
        endSound: ig.Sound;
        handle: Nullable<ig.SoundHandle>;
      };
      stats: {
        killStreak: number;
        killedEnemies: string[];
        prevRank: number;
      };
      finalDramaticEffect: Nullable<sc.DramaticEffect>;
      respawnBlocker: ig.CollEntry[];
      enemyDataList: Record<string, sc.EnemyType>;
      postUpdateOrder: number;

      _unlockAllEnemies(this: this): void;
      setCombatSpeed(this: this, speed: number): void;
      getTotalEnemiesFound(this: this, percentage?: boolean, category?: string): number;
      getTotalEnemyReportsFound(this: this, percentage?: boolean, category?: string): number;
      getTotalEnemyReportsFound(
        this: this,
        percentage: boolean | undefined,
        category: string | undefined,
        saveInto: { enemies: number; reports: number },
      ): void;
      getEnemyMenuOffset(this: this, enemyType: string): Nullable<Vec2>;
      isEnemyAnalyzable(this: this, enemyType: string): boolean;
      addActiveCombatant(this: this, combatant: ig.ENTITY.Combatant): void;
      removeActiveCombatant(this: this, combatant: ig.ENTITY.Combatant): void;
      changeCombatantParty(
        this: this,
        combatant: ig.ENTITY.Combatant,
        party: sc.COMBATANT_PARTY,
      ): void;
      areSpawnersCleared(this: this): boolean;
      getActiveCombatantCount(this: this, party: sc.COMBATANT_PARTY, enemyName?: string): number;
      getActiveCombatants(
        this: this,
        party: sc.COMBATANT_PARTY,
        onScreen?: boolean,
      ): ig.ENTITY.Combatant[];
      isDamageIgnore(this: this): boolean;
      getEnemyTarget(this: this): number;
      _addPartyMember(
        this: this,
        list: sc.PlayerBaseEntity[],
        partyMember: sc.PartyMemberEntity,
        targeting: boolean,
      ): void;
      getPlayerTarget(this: this, entity: ig.Entity): ig.ENTITY.Combatant;
      getActiveEnemiesNames(this: this): string[];
      getEnemyName(this: this, enemyId: string): string;
      getEnemyCategory(this: this, enemyId: string): sc.ENEMY_CATEGORY;
      canShowBoosted(this: this, enemyType: sc.EnemyType): boolean;
      canShowBoostedEntry(this: this, enemyName: string, isBoss: boolean): boolean;
      getEnemyLevel(this: this, enemyId: string): number;
      getEnemyArea(this: this, enemyId: string): string;
      getEnemyDrops(this: this, enemyId: string): sc.EnemyType.ItemDrop[];
      setScreenEnemiesTarget(this: this, combatant: sc.BasicCombatant): void;
      removeEnemies(
        this: this,
        enemyName: Optional<string>,
        exclude: ig.ENTITY.Enemy,
        skipRumble?: boolean,
        forceEvenIfNoParams?: boolean,
      ): void;
      setFinalDramaticEffect(this: this, effect: sc.DramaticEffect): void;
      onCombatantDeathHit(
        this: this,
        attacker: ig.ENTITY.Combatant,
        victim: ig.ENTITY.Combatant,
      ): void;
      showCombatantLabel(this: this, entity: ig.ENTITY.Combatant, msg: sc.CombatMsgType): void;
      showCombatMessage(this: this, entity: ig.ENTITY.Combatant, text: string): void;
      hasCollabs(this: this): boolean;
      doDramaticEffect(
        this: this,
        player: ig.ENTITY.Player,
        enemy: ig.ENTITY.Enemy,
        effect: sc.DramaticEffect,
        allSlowMotion?: boolean,
      ): void;
      sendEnemyMessage(this: this, combatant: ig.ENTITY.Combatant, key: string): void;
      sendGlobalEnemyEvent(
        this: this,
        combatant: ig.ENTITY.Combatant,
        type: sc.COMBAT_ENEMY_EVENT,
        settings: sc.CombatEnemyEvent.Settings,
      ): void;
      onPostUpdate(this: this): void;
      onReset(this: this): void;
      onLevelLoadStart(this: this): void;
      addCombatForce(this: this, force: sc.CombatForce): void;
      setActive(this: this, active: boolean): void;
      forceEnd(this: this): void;
      addCombatListener(this: this, listener: sc.Combat.Listener): void;
      removeCombatListener(this: this, listener: sc.Combat.Listener): void;
      gatherCollaborators(
        this: this,
        collab: sc.EnemyCollab,
        collabKey: string,
        label: string,
        min: number,
        max: number,
        acceptStunned?: boolean,
      ): boolean;
      getNearbyThreat(
        this: this,
        combatant: ig.ENTITY.Combatant,
        radius: number,
        viewAngle: number,
        combatCondition?: sc.CombatCondition,
      ): Nullable<sc.BasicCombatant>;
      getPartyHpFactor(this: this, party: sc.COMBATANT_PARTY): number;
      getAssistDamageFactor(this: this): number;
      getAssistAttackFrequency(this: this): number;
      notifyCombatantDefeated(
        this: this,
        combatant: ig.ENTITY.Combatant,
        resolveDefeat?: boolean,
        notifyArena?: boolean,
      ): void;
      updateCombatCompletionData(this: this): void;
      getMultiToken(this: this, namesArr: number[], timesArr: number[]): boolean;
      getActionToken(this: this, name: string, time: number): boolean;
      getGlobalDmgFactor(this: this, party: sc.COMBATANT_PARTY): number;
      initFrequencyTimers(this: this, enemy: ig.ENTITY.Enemy): void;
      checkFrequency(
        this: this,
        enemy: ig.ENTITY.Enemy,
        attackFrequency: keyof typeof sc.ATTACK_FREQUENCY,
      ): boolean;
      submitFrequency(
        this: this,
        party: sc.COMBATANT_PARTY,
        attackFrequency: keyof typeof sc.ATTACK_FREQUENCY,
        dontSetActionToken?: boolean,
      ): void;
      _getTimerFrequencyFactor(
        this: this,
        enemy: ig.ENTITY.Enemy,
        activeEnemyCombatants: number,
        activeAllayCombatants: number,
      ): number;
      _getTokenFrequencyFactor(
        this: this,
        enemy: ig.ENTITY.Enemy,
        activeEnemyCombatants: number,
        activeAllayCombatants: number,
      ): number;
      addFreeLineCommand(this: this, entity: ig.ENTITY.Combatant, time: number): void;
      isBlockingFreeLine(this: this, entity: ig.Entity): boolean;
      showHitEffect(
        this: this,
        entity: ig.Entity,
        hitPos: Vec3,
        hitDegree: sc.ATTACK_TYPE,
        hitElement: sc.ELEMENT,
        shielded: boolean,
        critical: boolean,
        ignoreSounds: boolean,
        spriteFilter?: number[],
      ): ig.ENTITY.Effect;
      showPerfectDashEffect(this: this, target: ig.ActorEntity): void;
      showHealEffect(this: this, target: ig.Entity): void;
      showCharge(
        this: this,
        target: ig.Entity,
        chargeLevelEffectName: string,
        element?: sc.ELEMENT,
      ): ig.ENTITY.Effect;
      showThrowEffect(
        this: this,
        target: ig.Entity,
        element: sc.ELEMENT,
        charged: boolean,
        suffix: string,
      ): ig.ENTITY.Effect;
      showModeChange(
        this: this,
        combatant: ig.ENTITY.Combatant,
        element: sc.ELEMENT,
      ): ig.ENTITY.Effect;
      showModeAura(this: this, combatant: ig.ENTITY.Combatant, element: sc.ELEMENT): void;
      clearModeAura(this: this, combatant: ig.ENTITY.Combatant): void;
      showModeDash(this: this, combatant: ig.ENTITY.Combatant, element: sc.ELEMENT): void;
      addRespawnBlocker(this: this, entity: ig.Entity): void;
      isRespawnBlocked(this: this, coll: ig.CollEntry): boolean;
      notifyNearbyEnemiesOfTarget(this: this, except: ig.Entity, radius: number): void;
      isInCombat(this: this, combatant: ig.ENTITY.Combatant): boolean;
      isPlayerPartyInCombat(this: this): boolean;
      getEnemyAiExp(this: this, enemy: ig.ENTITY.Enemy, multiplier?: number): number;
      getKillCount(this: this): void;
      getElementMode(this: this, combatant: ig.ENTITY.Combatant): sc.ELEMENT;
    }
    interface CombatConstructor extends ImpactClass<Combat> {}
    var Combat: CombatConstructor;
    var combat: Combat;
  }
}
