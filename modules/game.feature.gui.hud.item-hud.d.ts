// requires game.feature.gui.hud.right-hud
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    interface ItemContent extends ig.GuiElementBase {
      timer: number;
      id: ItemID;
      amount: number;
      textGui: sc.TextGui;
      amountGui: sc.NumberGui;

      updateOption(this: this, bigFont?: boolean): void;
      updateTimer(this: this): void;
      increaseNumber(this: this, amount?: number, skipTransition?: Nullable<boolean>): void;
    }
    interface ItemContentConstructor extends ImpactClass<ItemContent> {
      new (id: ItemID, amount?: number): ItemContent;
    }
    var ItemContent: ItemContentConstructor;

    interface ItemHudBox extends sc.RightHudBoxGui, sc.Model.Observer {
      delayedStack: sc.ItemHudBox[];
      size: number;

      addEntry(this: this, id: ItemID, amount?: number): void;
      update(this: this): void;
      _isInEntries(this: this, id: ItemID): sc.ItemHudBox;
      _popDelayed(this: this): void;
      _updateSizes(this: this, b: unknown): void;
      modelChanged(this: this, b: unknown, a: unknown, d: unknown): void;
    }
    interface ItemHudBoxConstructor extends ImpactClass<ItemHudBox> {
      new (): ItemHudBox;
    }
    var ItemHudBox: ItemHudBoxConstructor;
  }
}
