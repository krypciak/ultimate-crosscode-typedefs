// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace sc {
    interface HitNumberEntityBase extends ig.Entity {}
    interface HitNumberEntityBaseConstructor extends ImpactClass<HitNumberEntityBase> {
      new (): HitNumberEntityBase;
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
        interface Settings extends ig.Entity.Settings {}
      }
      interface HitNumber extends sc.HitNumberEntityBase {}
      interface HitNumberConstructor extends ImpactClass<HitNumber> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.HitNumber.Settings): HitNumber;
        spawnHealingNumber(pos: Vec3, entity: ig.Entity, healAmount: number): void;
      }
      var HitNumber: HitNumberConstructor;
    }
  }
}
