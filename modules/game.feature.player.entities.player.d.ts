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
    interface Player extends sc.PlayerBaseEntity, sc.Model.Observer, ig.EffectSheet.EventCallback {
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
      actionBlocked: ig.ACTION_STEP.SET_PLAYER_ACTION_BLOCK.BlockData;
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
      animSheetReplace?: ig.AnimationSheet;
      overrideBall: Nullable<sc.BallInfo>;

      initModel(this: this): void;
      replaceAnimSheet(this: this, animSheet: ig.AnimationSheet): void;
      initIdleActions(this: this): void;
      doPetAction(this: this): void;
      updateAnimSheet(this: this, updateFx?: boolean): void;
      updateSkinStepFx(this: this): void;
      updateSkinAura(this: this): void;
      updateSkinPet(this: this, showSpawnFx?: boolean): void;
      updateModelStats(this: this, updateFx?: boolean): void;
      getMaxDashes(this: this): number;
      hasCameraTarget(this: this, target: ig.Entity): boolean;
      addCameraTarget(
        this: this,
        target: ig.Entity,
        cameraSpeed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS,
      ): void;
      removeCameraTarget(
        this: this,
        target: ig.Entity,
        cameraSpeed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS,
      ): void;
      removeAllCameraTargets(
        this: this,
        cameraSpeed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS,
      ): void;
      _updateCameraHandle(
        this: this,
        cameraSpeed?: ig.Camera.SPEED_OPTIONS | keyof typeof ig.Camera.SPEED_OPTIONS,
      ): void;
      onPlayerPlaced(this: this): void;
      doCombatAction(this: this, action: keyof typeof sc.PLAYER_ACTION): void;
      setActionBlocked(
        this: this,
        blockData: ig.ACTION_STEP.SET_PLAYER_ACTION_BLOCK.BlockData,
      ): void;
      clearActionBlocked(this: this): void;
      showChargeEffect(this: this, level: number): void;
      clearCharge(this: this): void;
      getChargeType(
        this: this,
        state: ig.ENTITY.Player.PlayerState,
        input: ig.ENTITY.Player.PlayerInput,
      ): ig.ENTITY.Player.ActionKey;
      getCurrentChargeLevel(this: this): number;
      getMaxChargeLevel(this: this, actionKey: ig.ENTITY.Player.ActionKey): 0 | 1 | 2 | 3;
      startCharge(this: this, actionKey: ig.ENTITY.Player.ActionKey): boolean;
      getChargeAction(
        this: this,
        chargeType: ig.ENTITY.Player.Charging.Type,
        level: number,
      ): string;
      quickStateSwitch(this: this, state: number): void;
      isElementChangeBlocked(this: this): boolean;
      isControlBlocked(this: this): boolean;
      gatherInput(this: this): ig.ENTITY.Player.PlayerInput;
      handleDash(
        this: this,
        state: ig.ENTITY.Player.PlayerState,
        input: ig.ENTITY.Player.PlayerInput,
        blocked?: boolean,
        escape?: boolean,
      ): void;
      handleGuard(
        this: this,
        state: ig.ENTITY.Player.PlayerState,
        input: ig.ENTITY.Player.PlayerInput,
      ): void;
      handleCharge(
        this: this,
        state: ig.ENTITY.Player.PlayerState,
        input: ig.ENTITY.Player.PlayerInput,
      ): void;
      handleStateChange(
        this: this,
        state: ig.ENTITY.Player.PlayerState,
        input: ig.ENTITY.Player.PlayerInput,
      ): void;
      updatePlayerMovement(
        this: this,
        state: ig.ENTITY.Player.PlayerState,
        input: ig.ENTITY.Player.PlayerInput,
      ): void;
      handleStateStart(
        this: this,
        state: ig.ENTITY.Player.PlayerState,
        input: ig.ENTITY.Player.PlayerInput,
      ): void;
      startThrowAction(
        this: this,
        action: keyof typeof sc.PLAYER_ACTION,
        input: ig.ENTITY.Player.PlayerInput,
      ): void;
      startCloseCombatAction(
        this: this,
        action: keyof typeof sc.PLAYER_ACTION,
        input: ig.ENTITY.Player.PlayerInput,
      ): void;
      startDash(this: this): void;
      postActionUpdate(this: this): void;
      cancelInteract(this: this): void;
      onPlayerShieldBreak(this: this): void;
      onPerfectDash(this: this): void;
      onDamageTaken(this: this, damage: number, shieldResult: sc.SHIELD_RESULT): void;
      onHeal(this: this, healInfo: sc.HealInfo.Settings | sc.HealInfo, amount: number): void;
      onPhysicsSquish(this: this, cause: ig.Entity): void;
      varsChanged(this: this): void;
      copyModelSkills(this: this): void;
      onRespawnEnd(this: this): void;
      isThrowCharged(this: this): boolean;
      setOverrideBall(this: this, ball: Nullable<sc.BallInfo>): void;
      useItem(this: this, itemId: sc.ItemID): void;
    }
    interface PlayerConstructor extends ImpactClass<Player> {
      new (x: number, y: number, z: number, settings: {}): Player;
    }
    var Player: PlayerConstructor;
  }
}
