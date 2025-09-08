// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace sc {
    enum HIT_NUMBER_SIZE {
      XXS = 0,
      XS = 1,
      S = 2,
      M = 3,
      L = 4,
      XL = 5,
    }
    enum HIT_NUMBER_COLOR {
      NORMAL = 0,
      HEALING = 1,
      CRITICAL = 2,
      PLAYER_DAMAGE = 3,
      PLAYER_HEALING = 4,
      PLAYER_CRITICAL = 5,
      ENEMY_SUM = 6,
      PLAYER_SUM = 7,
    }
    enum HIT_NUMBER_APPENDIX {
      NONE = 0,
      SHIELD = 1,
      STRONG = 2,
      WEAK = 3,
      PERFECT = 4,
      WEAKNESS = 5,
    }

    namespace HitNumberEntityBase {
      interface Settings extends ig.Entity.Settings {}
    }
    interface HitNumberEntityBase extends ig.Entity {
      offset: Vec3;
      oldNumber: number;
      number: number;
      digitCount: number;
      numberSize: sc.HIT_NUMBER_SIZE;
      numberColor: number;
      numberAppendix: sc.HIT_NUMBER_APPENDIX[];
      shuffleTime: number;
      alpha: number;
      zIndex: number;

      setNumber(
        this: this,
        number: number,
        numberSize: sc.HIT_NUMBER_SIZE,
        numberColor: sc.HIT_NUMBER_COLOR,
        numberAppendix: Nullable<sc.HIT_NUMBER_APPENDIX[]>,
        shuffleTime: number,
        oldNumber?: Nullable<number>,
      ): void;
      updateSprites(this: this): void;
      _setupSprite(this: this, i: number, y: number, alpha: number): void;
    }
    interface HitNumberEntityBaseConstructor extends ImpactClass<HitNumberEntityBase> {
      new (
        x: number,
        y: number,
        z: number,
        settings: sc.HitNumberEntityBase.Settings,
      ): HitNumberEntityBase;
    }
    var HitNumberEntityBase: HitNumberEntityBaseConstructor;

    namespace HitNumberTools {
      interface PlaceHitNumberReturn {
        xMin: number;
        yMin: number;
        xMax: number;
        yMax: number;
      }
    }
    interface HitNumberTools {
      placeHitNumber(
        coll: ig.CollEntry,
        offX: number,
        offY: number,
        dontRandomize?: boolean,
      ): sc.HitNumberTools.PlaceHitNumberReturn;
      updateBlocker(
        minMax: sc.HitNumberTools.PlaceHitNumberReturn,
        coll: ig.CollEntry,
        offX: number,
        offY: number,
      ): void;
    }
    var HitNumberTools: HitNumberTools;
  }

  namespace ig {
    namespace ENTITY {
      namespace HitNumber {
        interface Settings extends ig.Entity.Settings {
          combatant: ig.ENTITY.Combatant;
          number: number;
          numberSize: sc.HIT_NUMBER_SIZE;
          numberColor: sc.HIT_NUMBER_COLOR;
          numberAppendix?: sc.HIT_NUMBER_APPENDIX[];
        }
      }
      interface HitNumber extends sc.HitNumberEntityBase {
        timer: number;
        blockerEntry: sc.HitNumberTools.PlaceHitNumberReturn;
        combatant: ig.ENTITY.Combatant;

        _initHitNumber(this: this, settings: ig.ENTITY.HitNumber.Settings): void;
        clear(this: this): void;
        unlock(this: this): void;
      }
      interface HitNumberConstructor extends ImpactClass<HitNumber> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.HitNumber.Settings): HitNumber;

        spawnHitNumber(
          pos: Vec3,
          combatant: ig.ENTITY.Combatant,
          damage: number,
          size: number,
          strength: number,
          shieldResult?: sc.SHIELD_RESULT,
          isCrit?: boolean,
          appenix?: sc.HIT_NUMBER_APPENDIX[],
        ): void;
        spawnHealingNumber(pos: Vec3, combatant: ig.ENTITY.Combatant, healAmount: number): void;
      }
      var HitNumber: HitNumberConstructor;

      namespace HitNumberSum {
        interface Settings extends sc.HitNumberEntityBase.Settings {
          combatant: ig.ENTITY.Combatant;
        }
      }
      interface HitNumberSum extends sc.HitNumberEntityBase {
        timer: number;
        disappear: boolean;
        combatant: ig.ENTITY.Combatant;
        entityOff: Vec2;

        _initHitNumber(this: this, settings: ig.ENTITY.HitNumberSum.Settings): void;
        updateEntityOffset(this: this): void;
        updateSum(this: this, oldNumber?: number): void;
        clear(this: this): void;
        _updatePos(this: this): void;
      }
      interface HitNumberSumConstructor extends ImpactClass<HitNumberSum> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.HitNumberSum.Settings,
        ): HitNumberSum;
      }
      var HitNumberSum: HitNumberSumConstructor;
    }
  }
}
