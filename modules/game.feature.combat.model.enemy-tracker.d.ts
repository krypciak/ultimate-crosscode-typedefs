export {};

declare global {
  namespace sc {
    interface EnemyTracker extends ig.Class {
      onConditionEval(
        this: this,
        enemy: ig.ENTITY.Enemy,
        random: boolean,
        hitProperties: ig.ENTITY.Combatant.HitProperties,
        attackInfo: sc.AttackInfo,
      ): boolean;
      onPerformed(this: this, enemy: ig.ENTITY.Enemy, noReset?: boolean): void;
      reset(this: this, enemy: ig.ENTITY.Enemy, value?: number): void;
      update?(this: this): void;
      onStateChange?(this: this, enemy: ig.ENTITY.Enemy): void;
      onReactionActivate?(this: this, enemy: ig.ENTITY.Enemy): void;
    }

    namespace ENEMY_TRACKER {
      namespace TIME {
        interface Settings {
          target: number;
          initRandom: number;
          resetRandom: number;
          noStateReset: boolean;
          hpBreakFactor?: number[];
          noAssist?: boolean;
        }
      }
      interface TIME extends sc.EnemyTracker {
        target: number;
        current: number;
        initRandom: number;
        resetRandom: number;
        noStateReset: boolean;
        hpBreakFactor: number[];
        _wm: ig.Config;

        update(this: this): void;
        onStateChange(this: this, enemy: ig.ENTITY.Enemy): void;
        _initTimer(this: this, enemy: ig.ENTITY.Enemy): void;
        _getTarget(this: this, enemy: ig.ENTITY.Enemy): number;
      }
      interface TIMEConstructor extends ImpactClass<TIME> {
        new (enemy: ig.ENTITY.Enemy, settings: sc.ENEMY_TRACKER.TIME.Settings): TIME;
      }

      namespace HIT {
        interface Settings {
          target: number;
          hpBreakTargets?: number[];
          scaleDmgFactor: boolean;
          limitOffScale?: number;
          scaleElement: boolean;
          noStateReset?: boolean;
        }
      }
      interface HIT extends sc.EnemyTracker {
        target: number;
        current: number;
        notStateInit: boolean;
        hpBreakTargets?: number[];
        noStateReset: boolean;
        _wm: ig.Config;

        onReactionActivate(this: this, enemy: ig.ENTITY.Enemy): void;
        _getTarget(this: this, enemy: ig.ENTITY.Enemy): number;
      }
      interface HITConstructor extends ImpactClass<HIT> {
        new (enemy: ig.ENTITY.Enemy, settings: sc.ENEMY_TRACKER.HIT.Settings): HIT;
      }

      namespace HP {
        interface Settings {
          target: number;
        }
      }
      interface HP extends sc.EnemyTracker {
        target: number;
        hpReduced: number;
        notStateInit: boolean;
        _wm: ig.Config;

        onStateChange(this: this, enemy: ig.ENTITY.Enemy): void;
        onReactionActivate(this: this, enemy: ig.ENTITY.Enemy): void;
      }
      interface HPConstructor extends ImpactClass<HP> {
        new (enemy: ig.ENTITY.Enemy, settings: sc.ENEMY_TRACKER.HP.Settings): HP;
      }
    }
    interface ENEMY_TRACKER {
      TIME: sc.ENEMY_TRACKER.TIMEConstructor;
      HIT: sc.ENEMY_TRACKER.HITConstructor;
      HP: sc.ENEMY_TRACKER.HPConstructor;
    }
    var ENEMY_TRACKER: ENEMY_TRACKER;
  }
}
