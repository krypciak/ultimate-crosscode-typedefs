// requires game.feature.combat.entities.projectile
// requires game.feature.combat.model.ball-behavior
// requires game.feature.combat.model.proxy
// requires game.constants
// requires impact.feature.effect.effect-sheet
// requires impact.base.entity
// requires impact.feature.light.light

export {};

declare global {
  namespace sc.PROXY_TYPE {
    type BALL = sc.BallInfo;
    var BALL: typeof sc.BallInfo;
  }

  namespace sc {
    namespace BallInfo {
      type AllBallBehaviourSettings = {
        [K in keyof sc.BALL_BEHAVIOR]: {
          type: K;
        } & ConstructorParameters<sc.BALL_BEHAVIOR[K]>[0];
      };
      type BallBehaviourSetting = AllBallBehaviourSettings[keyof sc.BALL_BEHAVIOR];

      interface DataBase {
        speed?: number;
        maxBounce?: number;
        timer?: number;
        trail?: boolean;
        multiHit?: boolean;
        light?: keyof typeof ig.LIGHT_SIZE;
        noLightGlow?: boolean;
        destroyProxy?: sc.ProxyTools.PrepareSrcProxySetting;
        bounceProxy?: sc.ProxyTools.PrepareSrcProxySetting;
        timeConnect?: boolean;
        hitSideways?: boolean;
        noMoveRotate?: boolean;
        shadow?: number;
      }
      interface DataConfig extends DataBase {
        animation: ig.AnimationSheet.Settings;
        effects?: ConstructorParameters<ig.EffectSheetConstructor>[0];
        timeBoni?: sc.AttackInfo[];
        attack?: sc.AttackInfo.AttackSettings;
        behaviors?: BallBehaviourSetting[];
      }
      interface Data extends DataBase {
        animation: ig.AnimationSheet;
        effects?: ig.EffectSheet;
        effectKeys: Nullable<Record<string, string>>;
        behaviors: sc.BallBehavior[];
        timeBoni?: sc.AttackInfo[];
      }
    }
    interface BallInfo extends sc.ProxySpawnerBase {
      data: sc.BallInfo.Data;
      _wm: ig.Config;

      getSize(this: this, destVec: Vec3): Vec3;
      clearCached(this: this): void;
      spawn(
        this: this,
        x: number,
        y: number,
        z: number,
        entity: sc.BasicCombatant,
        dir: Vec2,
      ): ig.ENTITY.Ball;
    }
    interface BallInfoConstructor extends ImpactClass<BallInfo> {
      new (data: sc.BallInfo.DataConfig): BallInfo;
    }
    var BallInfo: BallInfoConstructor;
  }

  namespace ig.ENTITY {
    namespace Ball {
      interface Settings extends ig.Entity.Settings {
        dir: Vec2;
        combatant: sc.BasicCombatant;
        party: sc.COMBATANT_PARTY;
        ballInfo: sc.BallInfo.Data;
        params: sc.CombatParams;
      }
      interface TimeBoniEntry {
        time: number;
        attackInfo: sc.AttackInfo;
      }
      interface Grab {
        pos: Vec3;
        oldPos: Vec3;
        timer: ig.WeightTimer;
        oldVel: Vec3;
      }
    }
    interface Ball extends ig.ENTITY.Projectile {
      isBall: true;
      party: sc.COMBATANT_PARTY;
      target: Nullable<sc.BasicCombatant>;
      params: sc.CombatParams;
      multiHit: boolean;
      maxTime: number;
      timer: number;
      timeBoni: ig.ENTITY.Ball.TimeBoniEntry[];
      effects: Nullable<ig.EffectSheet>;
      effectKeys: Nullable<Record<string, string>>;
      speed: number;
      speedFactor: number;
      lightHandle: ig.LightHandle;
      grab: Nullable<ig.ENTITY.Ball.Grab>;
      destroyProxySrc: Nullable<sc.ProxySpawnerBase>;
      bounceProxySrc: Nullable<sc.ProxySpawnerBase>;
      behaviors: Nullable<sc.BallBehavior[]>;
      behaviorData: Nullable<Record<LiteralUnion<'fadeOutTime' | 'pauseTime'>, number>>;
      hitSideways: boolean;
      remainingHits: number;

      getTarget(this: this): Nullable<sc.BasicCombatant>;
      setBallInfo(this: this, ballInfo: sc.BallInfo.Data, setFactors?: boolean): void;
      grabPoint(this: this, vec: Vec3, speedMulti?: number): number;
      changeSpeed(this: this, speed: number, applySpeedFactor?: boolean): void;
      resetSpeed(this: this): boolean;
      changeDirection(this: this, vel: Vec3): void;
      onBounce(this: this, pos: Vec2, collData: ig.CollEntry.Data): void;
      destroy(this: this): void;
      _spawnBounceProxy(this: this, pos: Vec2, collData: ig.CollEntry.Data): void;
      onProjectileKill(
        this: this,
        killType: ig.PROJECTILE_KILL_TYPE,
        pos?: Vec2,
        collData?: ig.CollEntry.Data,
      ): void;
      onProjectileHit(this: this, entity: ig.ENTITY.Combatant, blockDir?: Vec2): boolean;
      resetBounceCount(this: this): void;
      resetTime(this: this, time?: number): void;
      cleanDirection(this: this, direction: number): void;
    }
    interface BallConstructor extends ImpactClass<Ball> {
      new (x: number, y: number, z: number, settings: Ball.Settings): Ball;
    }
    var Ball: BallConstructor;
  }
  namespace ig {
    interface BallLike extends sc.GetCombatant, sc.GetCombatantRoot {
      party?: sc.COMBATANT_PARTY;
      attackInfo?: Nullable<sc.AttackInfo>;

      getElement(this: this): sc.ELEMENT;
      getHitCenter(this: this, entity: ig.Entity, dest?: Vec3): Vec3;
      getHitVel(this: this, entity: ig.Entity, destVec?: Vec2): Vec2;
    }
  }
}
