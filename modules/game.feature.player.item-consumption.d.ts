// requires game.feature.inventory.inventory

export {};

declare global {
  namespace sc {
    interface ItemConsumption extends ig.Class {
      sounds: Record<'eat', ig.Sound>;

      runItemUseAction(
        this: this,
        player: ig.ENTITY.Player,
        model: sc.PlayerModel,
        itemId: sc.ItemID,
      ): void;
      activateItemEffect(
        this: this,
        player: ig.ENTITY.Player,
        model: sc.PlayerModel,
        itemId: sc.ItemID,
      ): void;
      runHealChange(this: this, settings: sc.StatChangeSettings): void;
      runStatChange(
        this: this,
        stats: sc.StatChange.StatName[],
        duration: number,
        itemId: sc.ItemID,
      ): void;
      getAction(this: this, itemId: sc.ItemID): ig.Action;
      createAction(this: this, events: ig.EventStepBase.Settings[]): ig.Action;
    }
    interface ItemConsumptionConstructor extends ImpactClass<ItemConsumption> {
      new (): ItemConsumption;
    }
    var ItemConsumption: ItemConsumptionConstructor;
  }
}
