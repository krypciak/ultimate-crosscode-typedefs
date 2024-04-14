// requires impact.base.image
// requires impact.base.game
// requires game.feature.model.game-model
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    interface GameSense extends ig.GameAddon {
      onDeferredUpdate(this: this): void;
    }
    interface GameSenseConstructor extends ImpactClass<GameSense> {
      new (): GameSense;
    }
    var GameSense: GameSenseConstructor;
  }
}
