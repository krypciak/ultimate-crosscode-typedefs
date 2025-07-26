// requires impact.base.game
// requires impact.feature.bgm.bgm
// requires game.feature.model.base-model
// requires game.feature.player.player-model
// requires game.feature.msg.message-model
// requires game.feature.menu.menu-model
// requires game.feature.model.options-model
// requires impact.feature.env-particles.env-particles

export {};

declare global {
  namespace sc {
    type CombatRankLabel = 'E' | 'D' | 'C' | 'B' | 'A' | 'S';
    interface CombatRank {
      label: CombatRankLabel;
      dropRate: number;
    }

    let COMBAT_RANK: CombatRank[];

    interface GameMobilityBlockEntry {
      teleportBlock?: boolean;
      saveBlock?: boolean;
      checkpointBlock?: boolean;
      mapLeaveBlock?: boolean;
    }
    interface GAME_MOBILITY_BLOCK {
      NONE: GameMobilityBlockEntry;
      TELEPORT: GameMobilityBlockEntry;
      SAVE: GameMobilityBlockEntry;
      CHECKPOINT: GameMobilityBlockEntry;
      NO_MAP_LEAVE: GameMobilityBlockEntry;
    }
    let GAME_MOBILITY_BLOCK: GAME_MOBILITY_BLOCK;

    interface GameModel
      extends ig.GameAddon,
        sc.Model,
        ig.Storage.ListenerSave,
        ig.Storage.ListenerPreLoad,
        ig.Storage.ListenerPostLoad {
      currentState: sc.GAME_MODEL_STATE;
      currentSubState: sc.GAME_MODEL_SUBSTATE;
      prevSubState: sc.GAME_MODEL_SUBSTATE;
      currentTask: Nullable<ig.LangLabel>;
      permaTask: Nullable<ig.LangLabel>;
      keepTaskDisplayed: boolean;
      taskTimer: number;
      leaConfig: sc.PlayerConfig;
      player: sc.PlayerModel;
      message: sc.MessageModel;
      menu: sc.MenuModel;
      options: sc.OptionModel;
      inputGuis: ig.GuiElementBase[];
      startDifficulty: sc.DIFFICULTY;
      skipTimer: number;
      combatMode: boolean;
      combatTimer: number;
      combatRank: number;
      inCombatTime: number;
      pauseMusicStop: boolean;
      mobilityBlock: keyof GAME_MOBILITY_BLOCK;
      forceCombatMode: boolean;
      starSpawner: ig.EnvParticleSpawner;
      skipBlock: boolean;
      runsTimer: boolean;
      hsTimer: number;
      highScore: number[];
      highScoreObs: number[];
      maxHighScore: number;
      outOfCombatDialogTimer: number;
      cancelButtonText?: Nullable<ig.LangLabel>;

      startHighScoreTimer(this: this): void;
      stopHighScoreTimer(this: this, second: boolean): void;
      setCombatMode(this: this, combatMode: boolean, forceMode?: boolean): void;
      cancelCombatCooldown(this: this): void;
      isCombatRankActive(this: this): boolean;
      isSRank(this: this): boolean;
      increaseCombatRank(this: this, amount: number): boolean;
      forceStartSRank(this: this): void;
      startSRank(this: this): void;
      addChoiceGui(this: this, choiceGui: ig.GuiElementBase): void;
      removeChoiceGui(this: this, choiceGui: ig.GuiElementBase): void;
      notifyDreamFxChange(this: this): void;
      getCombatRank(this: this): number;
      getCombatRankLabel(this: this): sc.CombatRankLabel;
      getCombatRankByLabel(this: this, label: sc.CombatRankLabel): number;
      getCombatRankDropRate(this: this): number;
      getCombatRankProgress(this: this): number;
      isMapLeaveBlocked(this: this): boolean;
      isCheckpointBlocked(this: this): boolean;
      isSaveBlocked(this: this): boolean;
      isTeleportBlocked(this: this): boolean;
      isTeleportBlockedNewGame(this: this): boolean;
      isAssistMode(this: this): boolean;
      setCancelButton(this: this, text?: ig.LangLabel): void;
      setMobilityBlock(this: this, mobilityBlock: keyof sc.GAME_MOBILITY_BLOCK): void;
      startCombat(this: this): void;
      endCombat(this: this): void;
      updateCombatMusic(this: this): void;
      _isOutOfCombatDialogReadyIntern(this: this): boolean;
      isOutOfCombatDialogReady(this: this): boolean;
      onReset(this: this): void;
      onPreUpdate(this: this): void;
      onVarsChanged(this: this): void;
      clearTopMessage(this: this): void;
      skipCutscene(this: this): void;
      enterTitle(this: this): void;
      enterCutscene(this: this, combatCutscene?: boolean): void;
      enterGame(this: this): void;
      enterRunning(this: this): void;
      enterTeleport(this: this): void;
      enterLoading(this: this): void;
      enterNewGame(this: this): void;
      enterReset(this: this): void;
      enterLoadGame(this: this): void;
      enterLevelUp(this: this): void;
      enterQuestSolved(this: this): void;
      enterQuickMenu(this: this): boolean;
      enterOnMapMenu(this: this): boolean;
      enterPrevSubState(this: this): void;
      enterMenu(this: this, force?: Nullable<boolean>): void;
      enterPause(this: this, force?: Nullable<boolean>): void;
      isTitle(this: this): boolean;
      isGame(this: this): boolean;
      isCutscene(this: this): boolean;
      isRunning(this: this): boolean;
      isTeleport(this: this): boolean;
      isLoading(this: this): boolean;
      isNewGame(this: this): boolean;
      isReset(this: this): boolean;
      isLoadGame(this: this): boolean;
      isMenu(this: this): boolean;
      isPaused(this: this): boolean;
      isHUDBlocked(this: this): boolean;
      isLevelUp(this: this): boolean;
      isQuestSolved(this: this): boolean;
      isQuickMenu(this: this): boolean;
      isQuickMenuElementSwapEnabled(this: this): boolean;
      isOnMapMenu(this: this): boolean;
      isForceCombat(this: this): boolean;
      isCombatMode(this: this): boolean;
      isCombatActive(this: this): boolean;
      isCombatCooldown(this: this): boolean;
      getCombatCooldownFactor(this: this): number;
      isSaveAllowed(this: this): boolean;
      isPlayerControlBlocked(this: this): boolean;
      hasActiveChoice(this: this): boolean;
      startSkip(this: this): void;
      stopSkip(this: this): void;
      setTask(
        this: this,
        currentTask: Nullable<ig.LangLabel>,
        keepTaskDisplayed: boolean,
        taskTimer?: number,
      ): void;
      setPermaTask(this: this, permaTask: Nullable<ig.LangLabel>): void;
      resetMenuState(this: this): void;
      _setState(this: this, currentState: sc.GAME_MODEL_STATE): void;
      _setSubState(this: this, currentSubState: sc.GAME_MODEL_SUBSTATE, noNotify?: boolean): void;
    }
    interface GameModelConstructor extends ImpactClass<GameModel> {
      new (): GameModel;
    }
    var GameModel: GameModelConstructor;
    var model: sc.GameModel;

    enum GAME_MODEL_MSG {
      STATE_CHANGED = 0,
      TASK_CHANGED = 1,
      SUB_STATE_CHANGED = 2,
      COMBAT_MODE_CHANGED = 3,
      COMBAT_RANK_CHANGED = 4,
      CUTSCENE_SKIP = 5,
      RESET_MENU_STATE = 6,
      PERMA_TASK_CHANGED = 7,
      CLEAR_TOP_MESSAGE = 8,
      DREAM_MODE_CHANGE = 9,
    }

    enum GAME_MODEL_STATE {
      TITLE = 0,
      GAME = 1,
      CUTSCENE = 2,
    }
    enum GAME_MODEL_SUBSTATE {
      RUNNING = 0,
      TELEPORT = 1,
      LOADING = 2,
      NEWGAME = 3,
      RESET = 4,
      LOADGAME = 5,
      MENU = 6,
      PAUSE = 7,
      LEVELUP = 8,
      QUICK = 9,
      ONMAPMENU = 10,
      QUESTSOLVED = 11,
    }
  }
}
