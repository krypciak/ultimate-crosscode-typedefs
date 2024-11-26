// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace ig {
    interface ParticleHandle extends ig.Class {
      entity: ig.ENTITY.Particle;
      syncFace?: boolean;
      timer: number;
      maxTime: number;
      postAnimTime: number;
      pData: ig.ENTITY.Particle.Settings;
      particleState: ig.ParticleState;
      startAngle: number;
      angleSync: Nullable<number>;
      flipX: number;
      moveWithTarget: number;
      cancelable: boolean;

      cancel(this: this): void;
      setData(this: this, data: ig.ENTITY.Particle.Settings): void;
      onUpdate(this: this): void;
      initSprite(this: this, sprite: ig.CubeSprite): void;
      updateSprite(this: this, sprite: ig.CubeSprite): void;
      initAnimState(this: this, sprite: ig.AnimationState): void;
      updateAnimState(this: this, sprite: ig.AnimationState): void;
      initAnimations(this: this, sheet: ig.AnimationSheet): void;
    }
    interface ParticleHandleConstructor extends ImpactClass<ParticleHandle> {
      new (entity: ig.ENTITY.Particle, syncFace?: boolean): ParticleHandle;
    }
    var ParticleHandle: ParticleHandleConstructor;

    interface FxHomingFly {
      dist(t: number): number;
      normal(t: number): number;
    }
    interface FX_HOMING_FLY_TYPE {
      FLY_ARC: FxHomingFly[];
      EXPAND_DASH: FxHomingFly[];
    }
    var FX_HOMING_FLY_TYPE: ig.FX_HOMING_FLY_TYPE;

    namespace ENTITY {
      namespace Particle {
        interface Settings extends ig.Entity.Settings {
          data: ig.ParticleData;
          collision?: ig.COLLTYPE;
          vel?: Vec2;
          friction?: number;
          angle?: number;
          angleSync?: Nullable<number>;
          flipX?: boolean;

          ownerEffect?: ig.ENTITY.Effect;
        }
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

      namespace HomingParticle {
        interface Settings extends ig.Entity.Settings {
          flyType?: keyof typeof ig.FX_HOMING_FLY_TYPE;
          ownerEffect: number;
          normalXY: number;
          normalZ: number;
          phaseDurations?: number[];
          rotateMoveDir?: boolean;
          target1Vary?: number;
          target2Vary?: number;
        }
      }
      interface HomingParticle extends ig.ENTITY.Particle {
        inverse: boolean;
        flyType: ig.FX_HOMING_FLY_TYPE;
        ownerEffect: number;
        normalXY: number;
        normalZ: number;
        moveTimer: number;
        phaseDurations: number[];
        autoTargetStuck: boolean;
        target1Vary?: Nullable<Vec2>;
        target2Vary?: Nullable<Vec2>;

        _initOffsetParticle(this: this, settings: ig.ENTITY.HomingParticle.Settings): void;
        _updatePos(this: this, pos?: Vec2): void;
        update(this: this): void;
      }
      interface HomingParticleConstructor extends ImpactClass<HomingParticle> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.HomingParticle.Settings,
        ): HomingParticle;
      }
      var HomingParticle: HomingParticleConstructor;
    }
  }
}
