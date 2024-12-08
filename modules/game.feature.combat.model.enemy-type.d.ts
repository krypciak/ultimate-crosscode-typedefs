// requires impact.base.loader
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.model.combat-condition
// requires impact.base.animation

export {};

declare global {
  namespace sc {
    enum ENEMY_CATEGORY {
      ABSTRACT = 0,
      PLAYERS = 1,
      ANIMALS = 2,
      MECHA = 3,
      BOSS = 4,
    }

    interface EnemyAiLearn {
      knowItAll?: boolean;
    }
    interface ENEMY_AI_LEARN {
      REGULAR: sc.EnemyAiLearn;
      IMMEDIATELY: sc.EnemyAiLearn;
    }
    var ENEMY_AI_LEARN: EnemyAiLearn;

    namespace EnemyType {
      interface ItemDrop {
        item: sc.ItemID;
        prob: number;
        min: number;
        max: number;
        rank: sc.CombatRankLabel | '';
        boosted?: Nullable<boolean>;
        condition?: Nullable<string>;
      }
      interface HpBreak {
        hp: number;
        healDrop: number;
      }
      interface TargetDetect {
        onVisibleRange: number;
        onDistance: boolean;
        onCloseBattle: boolean;
        detectDistance: number;
        loseDistance: number;
        loseTime: number;
      }
    }

    interface EnemyType extends ig.JsonLoadable {
      aiGroup?: string;
      aiLearnType: sc.ENEMY_AI_LEARN;
      enduranceScale: number;
      name: string;
      params: sc.StatChange.Params;
      credit: number;
      exp: number;
      level: number;
      maxSp: number;
      boss: boolean;
      hpBreaks: sc.EnemyType.HpBreak[];
      hpBreakCond: ig.VarCondition;
      animSheet: ig.AnimationSheet;
      attribs: Record<string, unknown>;
      proxies: ig.Config;
      actions: Record<string, ig.Action>;
      states: Record<string, sc.EnemyState>;
      reactions: Record<string, EnemyReactionBase>;
      trackerDef: unknown;
      headIdx: number;
      healDropRate: number;
      itemDrops: sc.EnemyType.ItemDrop[];
      targetDetect: sc.EnemyType.TargetDetect;
      bossLabel: ig.LangLabel.Data | string;
      boostedLevel: number;
      size: Vec2;

      onload(this: this, data: unknown): void;
      onCacheCleared(this: this): void;
      initEntity(this: this, enemy: ig.ENTITY.Enemy): void;
      updateParams(this: this, enemy: ig.ENTITY.Enemy): void;
      onEntityKill(this: this, entity: ig.ActorEntity): void;
      getAppearAction(this: this, enemy: ig.ENTITY.Enemy): Nullable<ig.Action>;
      update(this: this, enemy: ig.ENTITY.Enemy): void;
      checkReactions(this: this, enemy: ig.ENTITY.Enemy): void;
      applyCurrentReaction(this: this, enemy: ig.ENTITY.Enemy): void;
      updateAction(this: this, enemy: ig.ENTITY.Enemy): void;
      startChoice(this: this, enemy: ig.ENTITY.Enemy, enemyReaction: sc.EnemyReactionBase): void;
      updateTarget(this: this, enemy: ig.ENTITY.Enemy): void;
      reselectTarget(
        this: this,
        enemy: ig.ENTITY.Enemy,
        notifyArea: boolean,
        keepAction?: boolean,
        fixed?: Nullable<boolean>,
      ): void;
      assignTarget(
        this: this,
        enemy: ig.ENTITY.Enemy,
        target: ig.ENTITY.Combatant,
        notifyArea: boolean,
        keepAction?: boolean,
        fixed?: Nullable<boolean>,
      ): void;
      damageUpdate(this: this, enemy: ig.ENTITY.Enemy, combatant: sc.GetCombatantRoot): void;
      onNavigationFailed(this: this, enemy: ig.ENTITY.Enemy, count: number): void;
      onStunEnd(this: this, enemy: ig.ENTITY.Enemy): void;
      postActionUpdate(this: this, enemy: ig.ENTITY.Enemy): void;
      switchState(this: this, enemy: ig.ENTITY.Enemy, state: string): void;
      switchStateConfig(this: this, enemy: ig.ENTITY.Enemy, state: string): void;
      isReadyToFight(this: this, enemy: ig.ENTITY.Enemy): boolean;
      resolveHpBreak(
        this: this,
        dmgMod: Nullable<ig.ENTITY.Combatant.OnDamageData>,
        enemy: ig.ENTITY.Enemy,
        combatant: sc.BasicCombatant,
        damage: number,
        dropsOverride?: ig.ENTITY.Enemy,
      ): boolean;
      resolveDefeat(this: this, enemy: ig.ENTITY.Enemy): void;
      resolveItemDrops(this: this, enemyEntity: ig.ENTITY.Enemy): void;
    }
    interface EnemyTypeConstructor extends ImpactClass<EnemyType> {
      cache: Record<string, EnemyType>;

      new (name: string): EnemyType;
    }
    var EnemyType: EnemyTypeConstructor;

    namespace EnemyInfo {
      interface Settings {
        type: string;
        group?: string;
        party?: keyof typeof sc.COMBATANT_PARTY;
        level?: number;
      }
    }
    interface EnemyInfo extends ig.Class {
      settings: EnemyInfo.Settings;
      enemyType: EnemyType;
      getSettings(): EnemyInfo.Settings;
      clearCached(): void;
    }
    interface EnemyInfoConstructor extends ImpactClass<EnemyInfo> {
      new (settings: EnemyInfo.Settings): EnemyInfo;
    }
    var EnemyInfo: EnemyInfoConstructor;

    interface EnemyState extends ig.Class {
      name: string;
      entityConfig: ig.ActorConfig;

      selectAction(this: this, enemy: ig.ENTITY.Enemy): Nullable<unknown>;
    }
    interface EnemyStateConstructor extends ImpactClass<EnemyState> {
      new (name: string, b: unknown, d: unknown): EnemyState;
    }
    var EnemyState: EnemyStateConstructor;
  }
}
