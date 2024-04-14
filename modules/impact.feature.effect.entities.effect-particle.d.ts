// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace ig.ENTITY {
    namespace Particle {
      interface Settings extends ig.Entity.Settings {}
    }
    interface Particle extends ig.AnimatedEntity {}
    interface ParticleConstructor extends ImpactClass<Particle> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.Particle.Settings): Particle;
    }
    var Particle: ParticleConstructor;

    namespace CopyParticle {
      interface Settings extends ig.Entity.Settings {}
    }
    namespace CopyParticle {
      interface Settings extends ig.Entity.Settings {}
    }
    interface CopyParticle extends ig.Entity {}
    interface CopyParticleConstructor extends ImpactClass<CopyParticle> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.CopyParticle.Settings,
      ): CopyParticle;
    }
    var CopyParticle: CopyParticleConstructor;

    namespace OffsetParticle {
      interface Settings extends ig.Entity.Settings {}
    }
    interface OffsetParticle extends ig.ENTITY.Particle {}
    interface OffsetParticleConstructor extends ImpactClass<OffsetParticle> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.OffsetParticle.Settings,
      ): OffsetParticle;
    }
    var OffsetParticle: OffsetParticleConstructor;

    namespace RhombusParticle {
      interface Settings extends ig.Entity.Settings {}
    }
    interface RhombusParticle extends ig.ENTITY.Particle {}
    interface RhombusParticleConstructor extends ImpactClass<RhombusParticle> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.RhombusParticle.Settings,
      ): RhombusParticle;
    }
    var RhombusParticle: RhombusParticleConstructor;
  }
}
