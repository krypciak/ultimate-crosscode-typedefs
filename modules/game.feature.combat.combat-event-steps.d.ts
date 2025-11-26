// requires impact.base.animation
// requires impact.base.action
// requires impact.base.entity
// requires game.feature.combat.entities.drop
// requires game.feature.combat.entities.combatant
// requires game.feature.combat.entities.combat-proxy
// requires impact.feature.effect.effect-steps

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SPAWN_ENEMY {
        interface Settings {
          position: Vec3Lvl;
          enemyInfo: string;
          targetPlayer: boolean;
          name?: ig.Event.StringExpression;
          spawnCondition?: string;
          startAction?: ig.ActionStepBase.Settings[];
          noEffects: boolean;
        }
      }
      interface SPAWN_ENEMY extends ig.EventStepBase {
        position: Vec3Lvl;
        enemyInfo: unknown;
        enemyType: unknown;
        targetPlayer: boolean;
        name: ig.Event.StringExpression;
        noEffects: boolean;
        _wm: ig.Config;
        spawnCondition: string;

        clearCached(this: this): void;
      }
      interface SPAWN_ENEMY_CONSTRUCTOR extends ImpactClass<SPAWN_ENEMY> {
        new (settings: ig.EVENT_STEP.SPAWN_ENEMY.Settings): SPAWN_ENEMY;
      }
      var SPAWN_ENEMY: SPAWN_ENEMY_CONSTRUCTOR;

      namespace SPAWN_DESTRUCTIBLE {
        interface Settings {
          position: Vec3Lvl;
          desType: keyof typeof sc.DESTRUCTIBLE_TYPE;
          onDestructIncrease?: string;
          onPreDestructIncrease?: string;
          effect?: ig.EffectHandle.Settings;
        }
      }
      interface SPAWN_DESTRUCTIBLE extends ig.EventStepBase {
        _wm: ig.Config;
        position: Vec3Lvl;
        desType: keyof typeof sc.DESTRUCTIBLE_TYPE;
        onDestructIncrease?: string;
        onPreDestructIncrease?: string;
      }
      interface SPAWN_DESTRUCTIBLE_CONSTRUCTOR extends ImpactClass<SPAWN_DESTRUCTIBLE> {
        new (settings: ig.EVENT_STEP.SPAWN_DESTRUCTIBLE.Settings): SPAWN_DESTRUCTIBLE;
      }
      var SPAWN_DESTRUCTIBLE: SPAWN_DESTRUCTIBLE_CONSTRUCTOR;

      namespace SPAWN_ENEMY_ON_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
          enemyInfo: string;
          targetPlayer: boolean;
          name?: ig.Event.StringExpression;
          spawnCondition?: string;
        }
      }
      interface SPAWN_ENEMY_ON_ENTITY extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        enemyInfo: unknown;
        enemyType: unknown;
        targetPlayer: boolean;
        _wm: ig.Config;
        name: ig.Event.StringExpression;
        spawnCondition: string;

        clearCached(this: this): void;
      }
      interface SPAWN_ENEMY_ON_ENTITY_CONSTRUCTOR extends ImpactClass<SPAWN_ENEMY_ON_ENTITY> {
        new (settings: ig.EVENT_STEP.SPAWN_ENEMY_ON_ENTITY.Settings): SPAWN_ENEMY_ON_ENTITY;
      }
      var SPAWN_ENEMY_ON_ENTITY: SPAWN_ENEMY_ON_ENTITY_CONSTRUCTOR;

      namespace SET_DAMAGE_NUMBERS {
        interface Settings {
          visibility: boolean;
        }
      }
      interface SET_DAMAGE_NUMBERS extends ig.EventStepBase {
        visibility: boolean;
        _wm: ig.Config;
      }
      interface SET_DAMAGE_NUMBERS_CONSTRUCTOR extends ImpactClass<SET_DAMAGE_NUMBERS> {
        new (settings: ig.EVENT_STEP.SET_DAMAGE_NUMBERS.Settings): SET_DAMAGE_NUMBERS;
      }
      var SET_DAMAGE_NUMBERS: SET_DAMAGE_NUMBERS_CONSTRUCTOR;

      namespace KILL_ENEMIES {
        interface Settings {
          enemyType?: string;
          noRumble?: boolean;
        }
      }
      interface KILL_ENEMIES extends ig.EventStepBase {
        enemyType?: string;
        noRumble?: boolean;
        _wm: ig.Config;
      }
      interface KILL_ENEMIES_CONSTRUCTOR extends ImpactClass<KILL_ENEMIES> {
        new (settings: ig.EVENT_STEP.KILL_ENEMIES.Settings): KILL_ENEMIES;
      }
      var KILL_ENEMIES: KILL_ENEMIES_CONSTRUCTOR;

      namespace SET_ENEMY_STATE {
        interface Settings {
          enemy: ig.Event.GetEntity;
          enemyState: string;
        }
      }
      interface SET_ENEMY_STATE extends ig.EventStepBase {
        enemy: ig.Event.GetEntity;
        enemyState: string;
        _wm: ig.Config;
      }
      interface SET_ENEMY_STATE_CONSTRUCTOR extends ImpactClass<SET_ENEMY_STATE> {
        new (settings: ig.EVENT_STEP.SET_ENEMY_STATE.Settings): SET_ENEMY_STATE;
      }
      var SET_ENEMY_STATE: SET_ENEMY_STATE_CONSTRUCTOR;

      namespace SET_ENEMY_TARGET {
        interface Settings {
          enemy: ig.Event.GetEntity;
          target: ig.Event.GetEntity;
        }
      }
      interface SET_ENEMY_TARGET extends ig.EventStepBase {
        enemy: ig.Event.GetEntity;
        target: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface SET_ENEMY_TARGET_CONSTRUCTOR extends ImpactClass<SET_ENEMY_TARGET> {
        new (settings: ig.EVENT_STEP.SET_ENEMY_TARGET.Settings): SET_ENEMY_TARGET;
      }
      var SET_ENEMY_TARGET: SET_ENEMY_TARGET_CONSTRUCTOR;

      namespace SET_SCREEN_ENEMY_TARGET {
        interface Settings {
          target: ig.Event.GetEntity;
        }
      }
      interface SET_SCREEN_ENEMY_TARGET extends ig.EventStepBase {
        target: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface SET_SCREEN_ENEMY_TARGET_CONSTRUCTOR extends ImpactClass<SET_SCREEN_ENEMY_TARGET> {
        new (settings: ig.EVENT_STEP.SET_SCREEN_ENEMY_TARGET.Settings): SET_SCREEN_ENEMY_TARGET;
      }
      var SET_SCREEN_ENEMY_TARGET: SET_SCREEN_ENEMY_TARGET_CONSTRUCTOR;

      namespace SET_ALL_ENEMY_TARGET {
        interface Settings {
          target: ig.Event.GetEntity;
        }
      }
      interface SET_ALL_ENEMY_TARGET extends ig.EventStepBase {
        target: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface SET_ALL_ENEMY_TARGET_CONSTRUCTOR extends ImpactClass<SET_ALL_ENEMY_TARGET> {
        new (settings: ig.EVENT_STEP.SET_ALL_ENEMY_TARGET.Settings): SET_ALL_ENEMY_TARGET;
      }
      var SET_ALL_ENEMY_TARGET: SET_ALL_ENEMY_TARGET_CONSTRUCTOR;

      namespace REMOVE_ALL_ENEMY_TARGET {
        interface Settings {}
      }
      interface REMOVE_ALL_ENEMY_TARGET extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface REMOVE_ALL_ENEMY_TARGET_CONSTRUCTOR extends ImpactClass<REMOVE_ALL_ENEMY_TARGET> {
        new (settings: ig.EVENT_STEP.REMOVE_ALL_ENEMY_TARGET.Settings): REMOVE_ALL_ENEMY_TARGET;
      }
      var REMOVE_ALL_ENEMY_TARGET: REMOVE_ALL_ENEMY_TARGET_CONSTRUCTOR;

      namespace RESET_SP {
        interface Settings {
          target: ig.Event.GetEntity;
          sp: number;
        }
      }
      interface RESET_SP extends ig.EventStepBase {
        target: ig.Event.GetEntity;
        _wm: ig.Config;
        sp: number;
      }
      interface RESET_SP_CONSTRUCTOR extends ImpactClass<RESET_SP> {
        new (settings: ig.EVENT_STEP.RESET_SP.Settings): RESET_SP;
      }
      var RESET_SP: RESET_SP_CONSTRUCTOR;

      namespace SET_RELATIVE_HP {
        interface Settings {
          target: ig.Event.GetEntity;
          value: number;
        }
      }
      interface SET_RELATIVE_HP extends ig.EventStepBase {
        _wm: ig.Config;
        target: ig.Event.GetEntity;
        value: number;
      }
      interface SET_RELATIVE_HP_CONSTRUCTOR extends ImpactClass<SET_RELATIVE_HP> {
        new (settings: ig.EVENT_STEP.SET_RELATIVE_HP.Settings): SET_RELATIVE_HP;
      }
      var SET_RELATIVE_HP: SET_RELATIVE_HP_CONSTRUCTOR;

      namespace REGEN_HP {
        interface Settings {
          target: ig.Event.GetEntity;
          value: number;
          showNumbers: boolean;
        }
      }
      interface REGEN_HP extends ig.EventStepBase {
        _wm: ig.Config;
        target: ig.Event.GetEntity;
        showNumbers: boolean;
      }
      interface REGEN_HP_CONSTRUCTOR extends ImpactClass<REGEN_HP> {
        new (settings: ig.EVENT_STEP.REGEN_HP.Settings): REGEN_HP;
      }
      var REGEN_HP: REGEN_HP_CONSTRUCTOR;

      namespace SET_TYPED_ENEMY_TARGET {
        interface Settings {
          enemyType: string;
          target: ig.Event.GetEntity;
        }
      }
      interface SET_TYPED_ENEMY_TARGET extends ig.EventStepBase {
        target: ig.Event.GetEntity;
        _wm: ig.Config;
        enemyType: string;
      }
      interface SET_TYPED_ENEMY_TARGET_CONSTRUCTOR extends ImpactClass<SET_TYPED_ENEMY_TARGET> {
        new (settings: ig.EVENT_STEP.SET_TYPED_ENEMY_TARGET.Settings): SET_TYPED_ENEMY_TARGET;
      }
      var SET_TYPED_ENEMY_TARGET: SET_TYPED_ENEMY_TARGET_CONSTRUCTOR;

      namespace SET_ENEMIES_NAV_TOLERANT {
        interface Settings {}
      }
      interface SET_ENEMIES_NAV_TOLERANT extends ig.EventStepBase {
        target: unknown;
        _wm: ig.Config;
      }
      interface SET_ENEMIES_NAV_TOLERANT_CONSTRUCTOR extends ImpactClass<SET_ENEMIES_NAV_TOLERANT> {
        new (settings: ig.EVENT_STEP.SET_ENEMIES_NAV_TOLERANT.Settings): SET_ENEMIES_NAV_TOLERANT;
      }
      var SET_ENEMIES_NAV_TOLERANT: SET_ENEMIES_NAV_TOLERANT_CONSTRUCTOR;

      namespace SET_FINAL_DRAMATIC_EFFECT {
        interface Settings {
          effectType: keyof typeof sc.DRAMATIC_EFFECT;
        }
      }
      interface SET_FINAL_DRAMATIC_EFFECT extends ig.EventStepBase {
        effectType: sc.DRAMATIC_EFFECT;
        _wm: ig.Config;
      }
      interface SET_FINAL_DRAMATIC_EFFECT_CONSTRUCTOR
        extends ImpactClass<SET_FINAL_DRAMATIC_EFFECT> {
        new (settings: ig.EVENT_STEP.SET_FINAL_DRAMATIC_EFFECT.Settings): SET_FINAL_DRAMATIC_EFFECT;
      }
      var SET_FINAL_DRAMATIC_EFFECT: SET_FINAL_DRAMATIC_EFFECT_CONSTRUCTOR;

      namespace SET_COMBAT_SPEED {
        interface Settings {
          speed?: number;
        }
      }
      interface SET_COMBAT_SPEED extends ig.EventStepBase {
        speed: number;
        _wm: ig.Config;
      }
      interface SET_COMBAT_SPEED_CONSTRUCTOR extends ImpactClass<SET_COMBAT_SPEED> {
        new (settings: ig.EVENT_STEP.SET_COMBAT_SPEED.Settings): SET_COMBAT_SPEED;
      }
      var SET_COMBAT_SPEED: SET_COMBAT_SPEED_CONSTRUCTOR;

      namespace MASS_REPLACE_ENTITIES_WITH_ENEMY {
        interface Settings {
          regExp: string;
          enemyInfo: string;
          target?: ig.Event.GetEntity;
        }
      }
      interface MASS_REPLACE_ENTITIES_WITH_ENEMY extends ig.EventStepBase {
        regExp: RegExp;
        spawnEnemyInfo: unknown;
        enemyType: unknown;
        target?: ig.Event.GetEntity;
        _wm: ig.Config;
        enemyInfo: sc.EnemyInfo;

        clearCached(this: this): void;
      }
      interface MASS_REPLACE_ENTITIES_WITH_ENEMY_CONSTRUCTOR
        extends ImpactClass<MASS_REPLACE_ENTITIES_WITH_ENEMY> {
        new (
          settings: ig.EVENT_STEP.MASS_REPLACE_ENTITIES_WITH_ENEMY.Settings,
        ): MASS_REPLACE_ENTITIES_WITH_ENEMY;
      }
      var MASS_REPLACE_ENTITIES_WITH_ENEMY: MASS_REPLACE_ENTITIES_WITH_ENEMY_CONSTRUCTOR;

      namespace SWAP_ENTITY_WITH_ENEMY {
        interface Settings {
          entity: ig.Event.GetEntity;
          enemyInfo: string;
          manualKill?: string;
        }
      }
      interface SWAP_ENTITY_WITH_ENEMY extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        spawnEnemyInfo: unknown;
        enemyType: unknown;
        manualKill: string;
        _wm: ig.Config;
        enemyInfo: sc.EnemyInfo;

        clearCached(this: this): void;
      }
      interface SWAP_ENTITY_WITH_ENEMY_CONSTRUCTOR extends ImpactClass<SWAP_ENTITY_WITH_ENEMY> {
        new (settings: ig.EVENT_STEP.SWAP_ENTITY_WITH_ENEMY.Settings): SWAP_ENTITY_WITH_ENEMY;
      }
      var SWAP_ENTITY_WITH_ENEMY: SWAP_ENTITY_WITH_ENEMY_CONSTRUCTOR;

      namespace SWAP_BACK_ENEMY_WITH_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
          expCollect: boolean;
        }
      }
      interface SWAP_BACK_ENEMY_WITH_ENTITY extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
        expCollect: boolean;
      }
      interface SWAP_BACK_ENEMY_WITH_ENTITY_CONSTRUCTOR
        extends ImpactClass<SWAP_BACK_ENEMY_WITH_ENTITY> {
        new (
          settings: ig.EVENT_STEP.SWAP_BACK_ENEMY_WITH_ENTITY.Settings,
        ): SWAP_BACK_ENEMY_WITH_ENTITY;
      }
      var SWAP_BACK_ENEMY_WITH_ENTITY: SWAP_BACK_ENEMY_WITH_ENTITY_CONSTRUCTOR;

      namespace SET_COMBAT_ACTIVE {
        interface Settings {
          active: boolean;
        }
      }
      interface SET_COMBAT_ACTIVE extends ig.EventStepBase {
        active: boolean;
        _wm: ig.Config;
      }
      interface SET_COMBAT_ACTIVE_CONSTRUCTOR extends ImpactClass<SET_COMBAT_ACTIVE> {
        new (settings: ig.EVENT_STEP.SET_COMBAT_ACTIVE.Settings): SET_COMBAT_ACTIVE;
      }
      var SET_COMBAT_ACTIVE: SET_COMBAT_ACTIVE_CONSTRUCTOR;

      namespace DO_ENEMY_ACTION {
        interface Settings {
          enemy: ig.Event.GetEntity;
          actionName: string;
          noStateReset: boolean;
        }
      }
      interface DO_ENEMY_ACTION extends ig.EventStepBase {
        enemy: ig.Event.GetEntity;
        actionName: string;
        _wm: ig.Config;
        noStateReset: boolean;
      }
      interface DO_ENEMY_ACTION_CONSTRUCTOR extends ImpactClass<DO_ENEMY_ACTION> {
        new (settings: ig.EVENT_STEP.DO_ENEMY_ACTION.Settings): DO_ENEMY_ACTION;
      }
      var DO_ENEMY_ACTION: DO_ENEMY_ACTION_CONSTRUCTOR;

      namespace SET_VAR_COMBAT_STAT {
        interface Settings {
          varName: string;
          entity: ig.Event.GetEntity;
          stat: unknown;
        }
      }
      interface SET_VAR_COMBAT_STAT extends ig.EventStepBase {
        varName: string;
        stat: unknown;
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface SET_VAR_COMBAT_STAT_CONSTRUCTOR extends ImpactClass<SET_VAR_COMBAT_STAT> {
        new (settings: ig.EVENT_STEP.SET_VAR_COMBAT_STAT.Settings): SET_VAR_COMBAT_STAT;
      }
      var SET_VAR_COMBAT_STAT: SET_VAR_COMBAT_STAT_CONSTRUCTOR;

      namespace MANUAL_COMBATANT_KILL {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface MANUAL_COMBATANT_KILL extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface MANUAL_COMBATANT_KILL_CONSTRUCTOR extends ImpactClass<MANUAL_COMBATANT_KILL> {
        new (settings: ig.EVENT_STEP.MANUAL_COMBATANT_KILL.Settings): MANUAL_COMBATANT_KILL;
      }
      var MANUAL_COMBATANT_KILL: MANUAL_COMBATANT_KILL_CONSTRUCTOR;

      namespace MANUAL_COMBATANT_REVIVE {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface MANUAL_COMBATANT_REVIVE extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface MANUAL_COMBATANT_REVIVE_CONSTRUCTOR extends ImpactClass<MANUAL_COMBATANT_REVIVE> {
        new (settings: ig.EVENT_STEP.MANUAL_COMBATANT_REVIVE.Settings): MANUAL_COMBATANT_REVIVE;
      }
      var MANUAL_COMBATANT_REVIVE: MANUAL_COMBATANT_REVIVE_CONSTRUCTOR;

      namespace SET_COMBATANT_MANUAL_KILL {
        interface Settings {
          entity: ig.Event.GetEntity;
          varName: string;
        }
      }
      interface SET_COMBATANT_MANUAL_KILL extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
        varName: string;
      }
      interface SET_COMBATANT_MANUAL_KILL_CONSTRUCTOR
        extends ImpactClass<SET_COMBATANT_MANUAL_KILL> {
        new (settings: ig.EVENT_STEP.SET_COMBATANT_MANUAL_KILL.Settings): SET_COMBATANT_MANUAL_KILL;
      }
      var SET_COMBATANT_MANUAL_KILL: SET_COMBATANT_MANUAL_KILL_CONSTRUCTOR;

      namespace START_PVP_BATTLE {
        interface Settings {
          winPoints: number;
          enemies: ig.Event.GetEntity[];
        }
      }
      interface START_PVP_BATTLE extends ig.EventStepBase {
        winPoints: number;
        entity: unknown;
        _wm: ig.Config;
        enemies: ig.Event.GetEntity[];
      }
      interface START_PVP_BATTLE_CONSTRUCTOR extends ImpactClass<START_PVP_BATTLE> {
        new (settings: ig.EVENT_STEP.START_PVP_BATTLE.Settings): START_PVP_BATTLE;
      }
      var START_PVP_BATTLE: START_PVP_BATTLE_CONSTRUCTOR;

      namespace PREPARE_PVP_ROUND {
        interface Settings {
          autoContinue: boolean;
        }
      }
      interface PREPARE_PVP_ROUND extends ig.EventStepBase {
        autoContinue: boolean;
        _wm: ig.Config;
      }
      interface PREPARE_PVP_ROUND_CONSTRUCTOR extends ImpactClass<PREPARE_PVP_ROUND> {
        new (settings: ig.EVENT_STEP.PREPARE_PVP_ROUND.Settings): PREPARE_PVP_ROUND;
      }
      var PREPARE_PVP_ROUND: PREPARE_PVP_ROUND_CONSTRUCTOR;

      namespace START_PVP_ROUND {
        interface Settings {}
      }
      interface START_PVP_ROUND extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface START_PVP_ROUND_CONSTRUCTOR extends ImpactClass<START_PVP_ROUND> {
        new (settings: ig.EVENT_STEP.START_PVP_ROUND.Settings): START_PVP_ROUND;
      }
      var START_PVP_ROUND: START_PVP_ROUND_CONSTRUCTOR;

      namespace STOP_PVP_BATTLE {
        interface Settings {}
      }
      interface STOP_PVP_BATTLE extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface STOP_PVP_BATTLE_CONSTRUCTOR extends ImpactClass<STOP_PVP_BATTLE> {
        new (settings: ig.EVENT_STEP.STOP_PVP_BATTLE.Settings): STOP_PVP_BATTLE;
      }
      var STOP_PVP_BATTLE: STOP_PVP_BATTLE_CONSTRUCTOR;

      namespace SET_RESPAWN_POINT {
        interface Settings {
          entity: ig.Event.GetEntity;
          marker: ig.Event.GetEntity;
        }
      }
      interface SET_RESPAWN_POINT extends ig.EventStepBase {
        _wm: ig.Config;
        entity: ig.Event.GetEntity;
        marker: ig.Event.GetEntity;
      }
      interface SET_RESPAWN_POINT_CONSTRUCTOR extends ImpactClass<SET_RESPAWN_POINT> {
        new (settings: ig.EVENT_STEP.SET_RESPAWN_POINT.Settings): SET_RESPAWN_POINT;
      }
      var SET_RESPAWN_POINT: SET_RESPAWN_POINT_CONSTRUCTOR;

      namespace COMBAT_IF {
        interface Settings {
          entity: ig.Event.GetEntity;
          conditions: sc.CombatConditions.ConditionConfig[];
          withElse: boolean;
          tmpTarget?: ig.Event.GetEntity;
        }
      }
      interface COMBAT_IF extends ig.EventStepBase {
        conditions: sc.CombatConditions;
        withElse: boolean;
        _wm: ig.Config;
        entity: ig.Event.GetEntity;
        tmpTarget?: ig.Event.GetEntity;
      }
      interface COMBAT_IF_CONSTRUCTOR extends ImpactClass<COMBAT_IF> {
        new (settings: ig.EVENT_STEP.COMBAT_IF.Settings): COMBAT_IF;
      }
      var COMBAT_IF: COMBAT_IF_CONSTRUCTOR;

      namespace REMOVE_PROXIES {
        interface Settings {
          group: string;
        }
      }
      interface REMOVE_PROXIES extends ig.EventStepBase {
        _wm: ig.Config;
        group: string;
      }
      interface REMOVE_PROXIES_CONSTRUCTOR extends ImpactClass<REMOVE_PROXIES> {
        new (settings: ig.EVENT_STEP.REMOVE_PROXIES.Settings): REMOVE_PROXIES;
      }
      var REMOVE_PROXIES: REMOVE_PROXIES_CONSTRUCTOR;
    }
  }
}
