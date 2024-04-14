// requires impact.base.game
// requires impact.base.loader

export {};

declare global {
  namespace ig {
    interface EnvParticles extends ig.GameAddon {
      onDeferredUpdate(this: this): void;
      onMidDraw(this: this): void;
    }
    interface EnvParticlesConstructor extends ImpactClass<EnvParticles> {
      new (): EnvParticles;
    }
    var EnvParticles: EnvParticlesConstructor;
  }
}
