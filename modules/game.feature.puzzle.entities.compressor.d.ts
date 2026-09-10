// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig.ENTITY {
    namespace Compressor {
      interface Settings extends ig.Entity.Settings {
        followCamera?: boolean;
        basllSpeed?: number;
        fastMode?: boolean;
      }
    }
    interface Compressor extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      chargeState: number;
      dischargeTimer: number;
      currentElement: sc.ELEMENT;
      compressorBall: sc.CompressedBaseEntity;
      ballHeight: number;
      _wm: ig.Config;
      effects: { sheet: ig.EffectSheet; hideHandle: Nullable<ig.EffectSheet> };
      sounds: { charge: ig.Sound };
      ballSpeed: number;
      fastMode: boolean;

      onHideRequest(this: this): void;
      createCompressorBall(this: this): void;
      resetCharge(this: this): void;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      isBallAdjust(this: this): boolean;
      doBallAdjust(this: this, pos: Vec3, dir: Vec2, size: Vec3, maxBounce: number): number;
      isBallDestroyer(
        this: this,
        collPos: Vec3,
        collRes: ig.Physics.TraceResult,
        isThrowCharged?: boolean,
      ): boolean;
    }
    interface CompressorConstructor extends ImpactClass<Compressor> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.Compressor.Settings): Compressor;
    }
    var Compressor: CompressorConstructor;
  }
  namespace sc {
    namespace CompressedBaseEntity {
      interface Settings extends ig.Entity.Settings {}
    }
    interface CompressedBaseEntity
      extends ig.AnimatedEntity, ig.BallLike, sc.GetCombatant, sc.GetCombatantRoot {
      element: sc.ELEMENT;
      startPos: Vec2;
      nudgeDir: Vec2;
      nudgeTimer: number;
      killTimer: number;
      collisionList: ig.Entity[];
      collReleaseTimer: number;
      collReleaseTimeList: number[];
      globalCount: number;
      speedFactor: number;
      effects: {
        sheet: ig.EffectSheet;
        perma: Nullable<ig.EffectSheet>;
        trail: Nullable<ig.EffectSheet>;
      };
      combatant: ig.ENTITY.Combatant;
      fastMode: boolean;
      attackInfo?: sc.AttackInfo;

      _getAssistFactor(this: this): number;
      nudge(this: this, hitVel: Vec2): void;
      shoot(
        this: this,
        hitVel: Vec2,
        combatantRoot: ig.ENTITY.Combatant,
        followCamera?: boolean,
      ): void;
      destroy(this: this): void;
      onCollision(this: this): boolean;
      getAttackInfo(this: this): sc.AttackInfo;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      onCompressorMoveEnd(this: this): void;
      isCompressor(this: this): boolean;
    }
    interface CompressedBaseEntityConstructor extends ImpactClass<CompressedBaseEntity> {
      new (
        x: number,
        y: number,
        z: number,
        settings: CompressedBaseEntity.Settings,
      ): CompressedBaseEntity;
    }
    let CompressedBaseEntity: CompressedBaseEntityConstructor;

    interface COMPRESSOR_MOVE {
      effects: { sheet: ig.EffectSheet };

      waveUpdate(this: this, wave: sc.CompressedWaveEntity): void;
      waveMoveTrace(this: this, wave: sc.CompressedWaveEntity, data: ig.CollEntry.Data): void;
      waveCollide(this: this, wave: sc.CompressedWaveEntity, entity: ig.Entity, dir: Vec2): void;
      waveBallHit(this: this, wave: sc.CompressedWaveEntity, entity: ig.Entity, dir: Vec2): void;
      isAlignCenter(this: this, entity: ig.Entity): boolean;
      shockUpdate(this: this, shock: sc.CompressedShockEntity): void;
      shockMoveTrace(this: this, shock: sc.CompressedShockEntity, data: ig.CollEntry.Data): void;
      clearWallSliding(this: this, shock: sc.CompressedShockEntity): void;
      shootFromWall(
        this: this,
        shock: sc.CompressedShockEntity,
        bouncer: ig.ENTITY.CompressorBouncer,
        face: Vec2,
      ): void;
    }
    var COMPRESSOR_MOVE: COMPRESSOR_MOVE;

    namespace CompressedWaveEntity {
      interface Settings extends CompressedBaseEntity.Settings {}
    }
    interface CompressedWaveEntity extends CompressedBaseEntity {
      _wm: ig.Config;
      phaseMode: boolean;
      phaseTraveled: number;
      wallKillTimer: number;
      startCollType: ig.COLLTYPE;
      enterWall: { timer: number; dir: Vec2 };

      onBallHit(this: this, entity: ig.Entity): void;
    }
    interface CompressedWaveEntityConstructor extends ImpactClass<CompressedWaveEntity> {
      new (
        x: number,
        y: number,
        z: number,
        settings: CompressedWaveEntity.Settings,
      ): CompressedWaveEntity;
    }
    let CompressedWaveEntity: CompressedWaveEntityConstructor;

    namespace CompressedShockEntity {
      interface Settings extends CompressedBaseEntity.Settings {}
    }
    interface CompressedShockEntity extends CompressedBaseEntity {
      _wm: ig.Config;
      slidingWall: Vec2;
      blockCheck: number;
      turnSoundTimer: number;
      wallBounces: number;

      update(this: this): void;
      shootFromWall(this: this, bouncer: ig.ENTITY.CompressorBouncer, face: Vec2): void;
    }
    interface CompressedShockEntityConstructor extends ImpactClass<CompressedShockEntity> {
      new (
        x: number,
        y: number,
        z: number,
        settings: CompressedWaveEntity.Settings,
      ): CompressedShockEntity;
    }
    let CompressedShockEntity: CompressedShockEntityConstructor;
  }

  namespace ig.ENTITY {
    namespace AntiCompressor {
      interface Settings extends ig.Entity.Settings {}
    }
    interface AntiCompressor extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      _wm: ig.Config;
      effects: { sheet: ig.EffectSheet };

      onHideRequest(this: this): void;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
    }
    interface AntiCompressorConstructor extends ImpactClass<AntiCompressor> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.AntiCompressor.Settings,
      ): AntiCompressor;
    }
    var AntiCompressor: AntiCompressorConstructor;

    namespace CompressorBouncer {
      interface Settings extends ig.AnimatedEntity.Settings {
        condition: string;
        dir?: keyof typeof ig.ActorEntity.FACE4;
      }
    }
    interface CompressorBouncer extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      _wm: ig.Config;
      effects: { sheet: ig.EffectSheet };
      face: Vec2;
      dir: ig.ActorEntity.FACE4;
      isOn: boolean;

      onHideRequest(this: this): void;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      varsChanged(this: this): void;
    }
    interface CompressorBouncerConstructor extends ImpactClass<CompressorBouncer> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.CompressorBouncer.Settings,
      ): CompressorBouncer;
    }
    var CompressorBouncer: CompressorBouncerConstructor;
  }
}
