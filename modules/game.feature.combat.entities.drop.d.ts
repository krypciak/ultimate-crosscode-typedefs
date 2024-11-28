// requires impact.feature.effect.effect-sheet
// requires impact.base.entity

export {};

declare global {
  namespace sc {
    enum DROP_TYPE {
      HP = 1,
      SP = 2,
      ITEM = 3,
      COIN = 4,
    }
    namespace DropEntity {
      interface Settings {
        dropType: sc.DROP_TYPE;
        value: number;
        varIncrease?: string;
        isGeneric?: boolean;
        circleEffect?: string;
        pickupEffect?: string;
        target?: ig.Entity;
      }

      interface SpawnGenericDropsSettings {
        align: ig.ENTITY_ALIGN;
        type: sc.DROP_TYPE;
        min: number;
        max: number;
        varIncrease?: string;
        circleEffect?: string;
        pickupEffect?: string;
      }
    }
    interface DropEntity extends ig.AnimatedEntity {
      effects: ig.EffectSheet;
      animSheet: ig.AnimationSheet;
      timer: number;
      fallTimer: number;
      target: ig.Entity;
      dropType: number;
      effectValue: number;
      varIncrease?: string;
      circleEffect?: string;
      pickupEffect?: string;
      isGeneric?: boolean;

      doGenericPickUp(this: this, target: ig.Entity): void;
      doHeal(this: this, target: ig.Entity): void;
      followTarget(this: this, target: ig.Entity): void;
      findTarget(this: this): void;
      onTouchGround(this: this): void;
    }
    interface DropEntityConstructor extends ImpactClass<DropEntity> {
      new (x: number, y: number, z: number, settings: sc.DropEntity.Settings): DropEntity;

      spawnDrops(
        thrower: ig.Entity,
        aligment: ig.Entity,
        dropType: sc.DROP_TYPE,
        rate: number,
        target: ig.Entity,
        varIncrease?: string,
      ): void;
      spawnGenericDrops(
        thrower: ig.Entity,
        aligment: ig.Entity,
        settings: sc.DropEntity.SpawnGenericDropsSettings,
      ): void;
    }
    var DropEntity: DropEntityConstructor;
  }
}
