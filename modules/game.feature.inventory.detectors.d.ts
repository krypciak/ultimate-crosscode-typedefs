// requires impact.base.game
// requires game.feature.model.game-model
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    interface Detectors extends ig.GameAddon, sc.Model.Observer {
      onLevelLoaded(this: this): void;
      onDeferredUpdate(this: this): void;
    }
    interface DetectorsConstructor extends ImpactClass<Detectors> {
      new (): Detectors;
    }
    var Detectors: DetectorsConstructor;
  }
}
