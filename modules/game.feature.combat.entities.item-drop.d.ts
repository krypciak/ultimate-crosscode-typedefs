// requires impact.feature.effect.effect-sheet
// requires impact.base.entity

export {};

declare global {
  namespace sc {
    interface ItemDropType {
      preCollect?: Nullable<boolean>;
      fly?: Nullable<boolean>;
    }
    interface ITEM_DROP_TYPE {
      ENEMY: sc.ItemDropType;
      PROP: sc.ItemDropType;
      EVENT_PROP: sc.ItemDropType;
      CHEST: sc.ItemDropType;
    }
    var ITEM_DROP_TYPE: ITEM_DROP_TYPE;

    namespace ItemDropEntity {
      interface Settings {
        dropType: sc.ITEM_DROP_TYPE;
        vel?: Vec2;
        target: ig.Entity;
        item: sc.ItemID;
        amount: number;
      }
    }
    interface ItemDropEntity extends ig.AnimatedEntity {
      gfx: ig.Image;
      effects: ig.EffectSheet;
      sounds: Record<
        | 'start'
        | 'catch'
        | 'catchLow'
        | 'catchNormal'
        | 'catchRate'
        | 'catchLegendary'
        | 'catchUnique',
        ig.Sound
      >;
      flying: boolean;
      target: ig.Entity;
      timer: number;
      startPos: Vec2;
      startZPos: number;
      maxTime: number;
      maxHeight: number;
      item: number;
      amount: number;
      collected: boolean;
      dropType: sc.ITEM_DROP_TYPE;
      fromCombatant: boolean;

      collectItem(this: this, count: number): void;
      onSave(this: this): void;
      update(this: this): void;
      onTouchGround(this: this): void;
      startRegularFly(this: this): void;
      startFlying(this: this, maxTime: number, maxHeight: number): void;
    }
    interface ItemDropEntityConstructor extends ImpactClass<ItemDropEntity> {
      new (x: number, y: number, z: number, settings: sc.ItemDropEntity.Settings): ItemDropEntity;

      spawnDrops(
        entity: ig.Entity,
        align: ig.ENTITY_ALIGN,
        target: ig.Entity,
        item: sc.ItemID,
        amount: number,
        dropType: sc.ItemDropType,
      ): void;
    }
    var ItemDropEntity: ItemDropEntityConstructor;
  }
}
