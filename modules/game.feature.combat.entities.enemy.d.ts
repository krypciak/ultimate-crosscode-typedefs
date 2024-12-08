// requires game.feature.combat.entities.combatant
// requires game.feature.combat.model.enemy-type
// requires game.feature.combat.model.enemy-annotation
// requires game.feature.new-game.new-game-model

export {};

declare global {
  namespace sc {
    enum ENEMY_HP_BAR {
      AUTO = 0,
      VISIBLE = 1,
      HIDDEN = 2,
    }
    enum ENEMY_BOOSTER_STATE {
      NONE = 0,
      BOOSTABLE = 1,
      BOOSTED = 2,
    }
  }

  namespace ig.ENTITY {
    namespace Enemy {
      interface Settings extends ig.Entity.Settings {
        enemyInfo: sc.EnemyInfo.Settings;
      }

      interface Level {
        override: number | null;
        setting: number | null;
      }
    }

    interface Enemy extends ig.ENTITY.Combatant {
      aggression: sc.ENEMY_AGGRESSION;
      enemyName: string;
      enemyType: sc.EnemyType;
      enemyGroup: string;
      defeatVarIncrease: Nullable<string>;
      enemyTypeInitialized: boolean;
      dropHealOrb: number;
      hpAttached: { enemy: Nullable<ig.ENTITY.Enemy>; value: number };
      spawnPoint: Vec3;
      currentState: string;
      postStun: { choice: Nullable<sc.EnemyReactionBase>; collab: Nullable<sc.EnemyCollab> };
      nextState: Nullable<string>;
      nextTimerChange: Record<string, number>;
      stateTimers: Record<string, number>;
      trackers: Record<string, sc.EnemyTracker>;
      deferredPerformedConds: sc.CombatCondition[];
      targetLoseTimer: number;
      reactions: {
        enabled: string[];
        current: Nullable<string>;
        running: Nullable<sc.EnemyReactionBase>;
        restartAction: Nullable<ig.Action>;
      };
      dodge: {
        count: number;
        timer: number;
        blocked: number;
        cunterReactTime: number;
        counterCooldown: number;
        counterCooldownMax: number;
      };
      annotate: {
        active: number;
        passive: number;
        weapon: number;
        element: number;
        extra: Nullable<number>;
      };
      hpBreakReached: number;
      lastPoICheck: Nullable<sc.BasicCombatant>;
      targetFixed: boolean;
      collaboration: Nullable<sc.EnemyCollab>;
      collabAttribs: Nullable<sc.EnemyCollab.CollabAttribs>;
      elementModes: sc.EnemyType.ElementModes;
      storedEnemies: ig.ENTITY.Enemy[];
      ownerEnemy: Nullable<ig.ENTITY.Enemy>;
      cameraZFocus: number;
      startEffect: ig.EffectHandle;
      targetOnSpawn: boolean;
      boosterState: sc.ENEMY_BOOSTER_STATE;
      level: Enemy.Level;
      visibility: { analyzable: boolean; hpBar: sc.ENEMY_HP_BAR };
      _wm: ig.Config;

      setElementMode(this: this, element: sc.ELEMENT, noEffects?: boolean): void;
      connectHpToEnemies(this: this, enemies: ig.ENTITY.Enemy[]): void;
      setLevelOverride(this: this, newLevel?: Nullable<number>): void;
      getLevel(this: this): number;
      storeEnemy(this: this, enemy: ig.ENTITY.Enemy): void;
      onStoredRelease(this: this): boolean | void;
      onMagnetStart(this: this): boolean;
      onMagnetEnd(this: this): void;
      isBoss(this: this): boolean;
      getHeadIdx(this: this): number;
      onHideRequest(this: this): void;
      setCounterCooldown(this: this): void;
      onFallBehavior(this: this, terrain: ig.TERRAIN): boolean;
      postActionUpdate(this: this): void;
      onStunEnd(this: this): void;
      changeState(
        this: this,
        state: string,
        immediate?: Nullable<boolean>,
        switchStateConfig?: boolean,
      ): void;
      _delegateDamage(this: this): void;
      onInstantDamage(
        this: this,
        damage: number,
        hitProperties: ig.ENTITY.Combatant.HitProperties,
      ): boolean;
      _checkHitReactions(
        this: this,
        hitProperties: ig.ENTITY.Combatant.HitProperties,
        damagingEntity: sc.BasicCombatant.DamagingEntity,
        attackInfo: sc.AttackInfo,
        strict?: boolean,
      ): boolean;
      collabReady(this: this, collabKey: string): boolean;
      doCollabReaction(this: this, collabKey: string): void;
      getEnemyAction(this: this, action: string): ig.Action;
      doEnemyAction(this: this, actionName: string, noStateReset: boolean, inline?: boolean): void;
      onNavigationFailed(this: this, count: number): void;
      onDefeat(this: this, noResolve?: boolean): void;
      enableReactions(this: this, reactions: string[]): void;
      enableReaction(this: this, reaction: string): void;
      disableReaction(this: this, reaction: string): void;
    }
    interface EnemyConstructor extends ImpactClass<Enemy> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.Enemy.Settings): ig.ENTITY.Enemy;
    }
    var Enemy: EnemyConstructor;
  }
}
