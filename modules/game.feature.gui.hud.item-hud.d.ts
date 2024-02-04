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
  }
}
