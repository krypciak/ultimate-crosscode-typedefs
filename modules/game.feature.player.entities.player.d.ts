// requires impact.feature.env-particles.env-particles
// requires game.feature.combat.entities.ball
// requires game.feature.player.entities.player-base
// requires game.feature.combat.entities.combatant
// requires game.feature.player.entities.crosshair
// requires game.feature.player.entities.player-pet
// requires game.feature.player.player-level-notifier
// requires game.feature.player.item-consumption
// requires game.feature.new-game.new-game-model

export {};

declare global {
  namespace ig.ENTITY {
    namespace Player {
      interface PlayerState {
        startState: number;
        guarding: boolean;
        applyCharge: boolean;
        isCharging: boolean;
        redashReady: boolean;
      }

      interface PlayerInput {
        thrown: boolean;
        melee: boolean;
        aim: boolean;
        autoThrow: boolean;
        attack: boolean;
        guard: boolean;
        dashX: number;
        dashY: number;
        switchMode: boolean;
        relativeVel: number;
        moveDir: Vec2;
        aimStart: boolean;
        charge: boolean;
        lastMoveDir: Vec2;
      }

      namespace Charging {
        interface Type {
          actionKey: string;
        }
      }

      interface Charging {
        time: number;
        cancelTime: number;
        swapped: boolean;
        type: Charging.Type;
        maxLevel: number;
        fx: sc.CombatCharge;
        block: number;
        msg: sc.SmallEntityBox;
        executeLevel: number;
        prefDir: Vec2;
      }

      interface ActionKey {
        actionKey: 'ATTACK_SPECIAL' | 'THROW_SPECIAL' | 'GUARD_SPECIAL' | 'DASH_SPECIAL';
      }

      interface Gui {
        crosshair: ig.ENTITY.Crosshair;
      }

      interface Skin {
        appearanceFx: Nullable<ig.ENTITY.Effect>;
        apperance: Nullable<unknown>;
        stepFx: Nullable<ig.EffectSheet>;
        auraFx: Nullable<ig.EffectSheet>;
        auraFxHandle: Nullable<ig.EffectHandle>;
        pet: Nullable<sc.PlayerPetEntity>;
      }
    }
    interface Player extends sc.PlayerBaseEntity, ig.Vars.Accessor, sc.Model.Observer {
      skin: ig.ENTITY.Player.Skin;
      proxies: Record<string, sc.ProxySpawnerBase>;
      model: sc.PlayerModel;
      state: number;
      throwCounter: number;
      attackCounter: number;
      attackResetTimer: number;
      throwDir: Vec2;
      throwDirData: Vec2;
      doAttack: boolean;
      lastMoveDir: Vec2;
      dashCount: number;
      dashAttackCount: number;
      maxDash: number;
      keepLastMoveDir: number;
      moveDirStartedTimer: number;
      jumpPoint: Vec2;
      jumpForwardDir: Vec2;
      idle: { timer: number; actions: ig.Action[]; petAction: null };
      gui: Player.Gui;
      cameraHandle: ig.Camera.TargetHandle;
      cameraTargets: ig.Entity[];
      mapStartPos: Vec3;
      actionBlocked: { action: number; charge: number; dash: number; reaim: number; move: number };
      combatStats: { lastTarget: Nullable<ig.Entity> };
      dashDir: Vec2;
      dashDirData: Vec2;
      dashTimer: number;
      dashBlock: number;
      doEscapeTimer: number;
      stunEscapeDash: boolean;
      dashPerfect: boolean;
      perfectGuardCooldown: number;
      charging: ig.ENTITY.Player.Charging;
      chargeThrowCharged: boolean;
      floating: boolean;
      recordInput: boolean;
      interactObject: Nullable<sc.PushPullable>;
      explicitAimStart: number;
      levelUpNotifier: sc.PlayerLevelNotifier;
      atLandmarkHeal: number;
      atLandmarkTeleport: number;
      itemConsumer: sc.ItemConsumption;
      isPlayer: true;
      hidePets: boolean;
      switchedMode: boolean;

      initModel(this: this): void;
      initIdleActions(this: this): void;
      updateAnimSheet(this: this, updateFx?: boolean): void;
      updateSkinAura(this: this): void;
      updateModelStats(this: this, a: boolean): void;
      showChargeEffect(this: this, level: number): void;
      clearCharge(this: this): void;
      onKill(this: this, dontRespawn?: boolean): void;
      getMaxChargeLevel(this: this, actionKey: Player.ActionKey): 0 | 1 | 2 | 3;
      getChargeAction(
        this: this,
        chargeType: ig.ENTITY.Player.Charging.Type,
        level: number,
      ): string;
      gatherInput(this: this): ig.ENTITY.Player.PlayerInput;
      handleStateStart(
        this: this,
        playerState: ig.ENTITY.Player.PlayerState,
        inputState: ig.ENTITY.Player.PlayerInput,
      ): void;
      onPerfectDash(this: this): void;
      onHeal(this: this, healInfo: sc.HealInfo.Settings | sc.HealInfo, amount: number): void;
    }
    interface PlayerConstructor extends ImpactClass<Player> {
      new (x: number, y: number, z: number, settings: {}): Player;
    }
    var Player: PlayerConstructor;
  }
}
