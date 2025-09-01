// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    interface DESTRUCTIBLE_TYPE_BASE {
      hitCount: number;
      size: Vec3;
      preBoom?: { sheet: string; name: string };
      boom?: { sheet: string; name: string };
      debris?: { sheet: string; name: string };
      debrisAngle?: number;
      hitSide?: [number, number, number, number];
      collType?: ig.COLLTYPE;
      onlyPerma?: boolean;
      noBlinking?: boolean;
      terrain?: ig.TERRAIN;
      keyConsume?: string;
      range?: { key: string; delay: number; padding: number; startDelay: number };
      hitSound?: ig.Sound;
      anims: unknown;

      hitCondition?(ballLike: ig.BallLike): boolean;
    }
    interface DESTRUCTIBLE_TYPE {
      boxMedium: sc.DESTRUCTIBLE_TYPE_BASE;
      boxMedNorth: sc.DESTRUCTIBLE_TYPE_BASE;
      boxMedEast: sc.DESTRUCTIBLE_TYPE_BASE;
      boxMedSouth: sc.DESTRUCTIBLE_TYPE_BASE;
      boxMedWest: sc.DESTRUCTIBLE_TYPE_BASE;
      boxLarge: sc.DESTRUCTIBLE_TYPE_BASE;
      iceBlock: sc.DESTRUCTIBLE_TYPE_BASE;
      bombBlock: sc.DESTRUCTIBLE_TYPE_BASE;
      bombWallEast: sc.DESTRUCTIBLE_TYPE_BASE;
      bombWallWest: sc.DESTRUCTIBLE_TYPE_BASE;
      bombWallNorth: sc.DESTRUCTIBLE_TYPE_BASE;
      keyWallNorth: sc.DESTRUCTIBLE_TYPE_BASE;
      keyPillar: sc.DESTRUCTIBLE_TYPE_BASE;
      keyPillarAR: sc.DESTRUCTIBLE_TYPE_BASE;
      masterKeyWallColdDungeon: sc.DESTRUCTIBLE_TYPE_BASE;
      masterKeyWallHeatDungeon: sc.DESTRUCTIBLE_TYPE_BASE;
      masterKeyWallTreeDungeon: sc.DESTRUCTIBLE_TYPE_BASE;
      masterKeyWallFinalDungeon: sc.DESTRUCTIBLE_TYPE_BASE;
      autumnWall: sc.DESTRUCTIBLE_TYPE_BASE;
      autumnWall2: sc.DESTRUCTIBLE_TYPE_BASE;
      autumnWall3: sc.DESTRUCTIBLE_TYPE_BASE;
    }
    var DESTRUCTIBLE_TYPE: DESTRUCTIBLE_TYPE;
  }
  namespace ig.ENTITY {
    namespace Destructible {
      interface Settings extends ig.Entity.Settings {
        permaDestruct?: boolean;
        onDestructIncrease?: string;
        onPreDestructIncrease?: string;
        desType: keyof typeof sc.DESTRUCTIBLE_TYPE;
        enemyInfo?: sc.EnemyInfo;
        blockNavMap?: boolean;
      }
    }
    interface Destructible extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      enemyInfo?: sc.EnemyInfo;
      permaDestruct: boolean;
      onDestructIncrease: string | null;
      onPreDestructIncrease: string | null;
      hitSide: [number, number, number, number];
      hitCount: number;
      conditionFunction?: (ballLike: ig.BallLike) => boolean;
      sounds: Record<'hit' | 'block', ig.Sound>;
      effects: {
        base: ig.EffectSheet;
        pre: Nullable<ig.EffectHandle>;
        boom: Nullable<ig.EffectHandle>;
        debris: Nullable<ig.EffectHandle>;
        desbisAngle: number;
        debridDelay: number;
        preHandle: Nullable<ig.ENTITY.Effect>;
        boomHandle: Nullable<ig.ENTITY.Effect>;
      };
      range: { key: Nullable<string>; delay: number; killTimer: number; padding: number };
      keyConsume: Nullable<keyof typeof sc.AREA_ITEM_TYPE>;
      hitSound: Nullable<ig.Sound>;
      blockNavMap: boolean;
      navBlocker: Nullable<ig.NavBlocker>;
      blinkTimer: number;
      noBlinking: boolean;
      varState: number;
      _wm: ig.Config;

      onSave(this: this): void;
      getDestructVarName(this: this): string;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      startDestruction(this: this): void;
      destroy(this: this, noSetVars?: boolean): void;
      setVariables(this: this): void;
      invokeRangeKill(this: this, killTimer: number): void;
      onRangeKill(this: this, rangeKey: string, killTimer: number): void;
      throwDebris(this: this): void;
      isBallDestroyer(this: this, collPos: Vec3, collRes: { dir: Vec2 }): boolean;
    }
    interface DestructibleConstructor extends ImpactClass<Destructible> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.Destructible.Settings,
      ): Destructible;
    }
    var Destructible: DestructibleConstructor;
  }
}
