// requires impact.base.game

export {};

declare global {
  namespace sc {
    interface BetaControls extends ig.GameAddon {
      onPostUpdate(this: this): void;
    }
    interface BetaControlsConstructor extends ImpactClass<BetaControls> {
      new (): BetaControls;
    }
    var BetaControls: BetaControlsConstructor;
  }
}
