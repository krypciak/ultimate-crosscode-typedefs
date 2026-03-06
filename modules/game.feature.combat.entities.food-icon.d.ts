// requires impact.base.entity
// requires impact.base.entity-pool

export {};

declare global {
  namespace sc {
    enum FOOD_ICON_STATE {
      HOLD = 0,
      BUBBLE = 1,
      DONE = 2,
    }

    type FOOD_SPRITE = number
    var FOOD_SPRITE: Record<string, FOOD_SPRITE>;

    namespace FoodIconEntity {
      interface Settings extends ig.Entity.Settings {
        icon: sc.FOOD_SPRITE;
        combatant: ig.ENTITY.Combatant;
      }
    }
    interface FoodIconEntity extends ig.Entity, ig.ActorEntity.ActionAttachedListener {
      icon: sc.FOOD_SPRITE;
      combatant: ig.ENTITY.Combatant;
      offset: Vec2;
      state: sc.FOOD_ICON_STATE;
      foodSheet: ig.TileSheet;
      bubbleGfx: ig.Image;
      timer: number;

      deferredUpdate(this: this): void;
      setState(this: this, state: sc.FOOD_ICON_STATE, offset?: Nullable<Vec2>): void;
    }
    interface FoodIconEntityConstructor extends ImpactClass<FoodIconEntity> {
      new (x: number, y: number, z: number, settings: FoodIconEntity.Settings): FoodIconEntity;
    }
    var FoodIconEntity: FoodIconEntityConstructor;
  }
}
