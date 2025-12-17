// requires game.feature.player.entities.player-base

export {};

declare global {
  namespace sc {
    namespace PartyMemberEntity {
      interface State {
        start(
          entity: sc.PartyMemberEntity,
          player: ig.ENTITY.Player,
          targetStats: sc.PartyMemberEntity.TargetStats,
          stateData: sc.PartyMemberEntity.StateData,
        ): void;
        update(
          entity: sc.PartyMemberEntity,
          player: ig.ENTITY.Player,
          targetStats: sc.PartyMemberEntity.TargetStats,
          stateData: sc.PartyMemberEntity.StateData,
        ): void | sc.PartyMemberEntity.State;
        startThrow?(
          entity: sc.PartyMemberEntity,
          targetStats: sc.PartyMemberEntity.TargetStats,
          stateData: sc.PartyMemberEntity.StateData,
        ): void;
        startAttack?(
          entity: sc.PartyMemberEntity,
          targetStats: sc.PartyMemberEntity.TargetStats,
          stateData: sc.PartyMemberEntity.StateData,
        ): void;
      }
      interface States {
        IDLE: State;
        STAY_AWAY: State;
        BACKOFF: State;
        ROTATE: State;
        FOLLOW: State;
        COMBAT_IDLE: State;
        COMBAT_SIDEWAYS: State;
        COMBAT_HEALING: State;
        COMBAT_THROWING: State;
        COMBAT_ADJUST: State;
        PERMA_PUNCH: State;
        MELEE: State;
        DODGE: State;
      }

      interface TargetStats {
        distVec: Vec2;
        distance: number;
        outOfScreenTime: number;
      }

      interface StateData {
        faceRotateTimer?: number;
        attackCount?: number;
        healingStart?: boolean;
        doInit?: boolean;
        directionMove?: boolean;
      }

      interface CombatArt {
        actionKey: string;
        idx: number;
        distant?: boolean;
      }
      interface CombatArts {
        ATTACK: CombatArt;
        THROW: CombatArt;
        GUARD: CombatArt;
        DASH: CombatArt;
      }

      interface Settings extends sc.PlayerBaseEntity.Settings {
        partyMemberName: string;
        posOffset?: Vec2;
      }
    }
    interface PartyMemberEntity extends sc.PlayerBaseEntity, sc.Model.Observer {
      model: sc.PartyMemberModel;
      posOffset: Vec2;
      navTarget: Nullable<number>;
      state: sc.PartyMemberEntity.State;
      inCombat: boolean;
      targetStats: sc.PartyMemberEntity.TargetStats;
      stateData: sc.PartyMemberEntity.StateData;
      timer: Record<'action' | 'move' | 'attack' | 'noAttackTime' | 'dodge', number>;
      throwDirData: Vec2;
      currentCombatArt: Nullable<sc.PartyMemberEntity.CombatArt>;
      charging: ig.ENTITY.Player.Charging;
      proxies: Record<string, sc.ProxySpawnerBase>;
      params: sc.CombatParams;

      updateDefaultConfig(this: this, aiming?: boolean): void;
      onInstantDamage(this: this, damage: number): boolean;
      leaveParty(this: this, instant?: boolean): void;
      resetAttackTimer(this: this): void;
      startCombat(this: this): void;
      endCombat(this: this): void;
      startCombatArtCharging(this: this): void;
      doCombatArtCharge(this: this): void;
      cancelCharge(this: this): void;
      doCombatArt(this: this): void;
      setActionBlocked(
        this: this,
        blockData: ig.ACTION_STEP.SET_PLAYER_ACTION_BLOCK.BlockData,
      ): void;
      hasValidTarget(this: this): boolean;
      selectTarget(this: this): void;
      reselectTarget(this: this): void;
      hasElement(this: this, element: sc.ELEMENT): boolean;
      getBestElement(this: this): sc.ELEMENT;
      consumeSandwich(this: this, sandwichTier: 0 | 1 | 2): void;
      updateElement(this: this): void;
      updateModelStats(this: this): void;
      selectCombatArt(this: this): void;
      changeState(this: this, state: sc.PartyMemberEntity.State): void;
      isControlBlocked(this: this): boolean;
      getDodgeProbability(this: this, enemy: ig.ENTITY.Enemy): number;
      goToCombat(this: this): boolean;
      resetPos(this: this, noEffects?: boolean): void;
      setNavTarget(this: this, target: number): void;
    }
    interface PartyMemberEntityConstructor extends ImpactClass<PartyMemberEntity> {
      new (
        x: number,
        y: number,
        z: number,
        settings: sc.PartyMemberEntity.Settings,
      ): PartyMemberEntity;
    }
    var PartyMemberEntity: PartyMemberEntityConstructor;
  }
}
