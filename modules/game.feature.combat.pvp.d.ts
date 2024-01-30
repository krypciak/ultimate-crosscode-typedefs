// requires impact.base.game

export {};

declare global {
  namespace sc {
    interface PvpModel extends ig.GameAddon, sc.Model, ig.Vars.Accessor {
      state: number;
      round: number;
      winPoints: number;
      points: { [key in sc.COMBATANT_PARTY]?: number };
      enemies: ig.ENTITY.Enemy[];
      lastWinParty: sc.COMBATANT_PARTY;
      blocking: boolean;
      roundGui: sc.PvpRoundGui;

      start(this: this, winPoints: number, enemies: ig.ENTITY.Enemy[]): void;
      getDmgFactor(this: this): number;
      isActive(this: this): boolean;
      isKillHit(this: this): boolean;
      isBrake(this: this): boolean;
      isFinished(this: this): boolean;
      isOver(this: this): boolean;
      isCombatantInPvP(this: this, comtatant: ig.ENTITY.Combatant): boolean;
      onPvpCombatantDefeat(this: this, comtatant: ig.ENTITY.Combatant): boolean;
      releaseBlocking(this: this): void;
      showKO(this: this, party: sc.COMBATANT_PARTY): sc.DramaticEffect;
      onPostKO(this: this, party: sc.COMBATANT_PARTY): void;
      startNextRound(this: this, autoContinue?: boolean): void;
      finalizeRoundStart(this: this): void;
      stop(this: this): void;
      onPostUpdate(this: this): void;
      onReset(this: this): void;
    }
    interface PvpModelConstructor extends ImpactClass<PvpModel> {
      new (): PvpModel;
    }
    var PvpModel: PvpModelConstructor;
    var pvp: sc.PvpModel

    enum PVP_MESSAGE {
      STARTED = 1,
      STOPPED = 2,
      ROUND_OVER = 3,
    }
  }
}
