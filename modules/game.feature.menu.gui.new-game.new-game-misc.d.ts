// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface NewGameCart extends sc.MenuPanel {
      points: sc.NewGameCartEntry;
      cost: sc.NewGameCartEntry;
      rest: sc.NewGameCartEntry;
      enabled: boolean;

      resetNumbers(this: this, skipTransition?: boolean): void;
      updateCost(this: this, skipTransition?: boolean): void;
    }
    interface NewGameCartConstructor extends ImpactClass<NewGameCart> {
      new (): NewGameCart;
    }
    var NewGameCart: NewGameCartConstructor;

    interface NewGameCartEntry extends ig.GuiElementBase {
      gfx: ig.Image;
      text: sc.TextGui;
      number: sc.NumberGui;
      hideSymbol: boolean;

      setNumber(this: this, max: number, skipTransition?: boolean): void;
    }
    interface NewGameCartEntryConstructor extends ImpactClass<NewGameCartEntry> {
      new (text: sc.TextLike): NewGameCartEntry;
    }
    var NewGameCartEntry: NewGameCartEntryConstructor;

    interface NewGameToggleSet extends ig.GuiElementBase {}
    interface NewGameToggleSetConstructor extends ImpactClass<NewGameToggleSet> {}
    var NewGameToggleSet: NewGameToggleSetConstructor;

    interface NewGameOptionButton extends sc.ListBoxButton {
      data: { id: string; description: string };

      set: sc.NewGameSet;

      updateToggleState(this: this): void;
    }
    interface NewGameOptionButtonConstructor extends ImpactClass<NewGameOptionButton> {
      new (
        name: string,
        amount: number,
        id: string,
        description: string,
        setKey: string,
        setOptions: sc.NewGameSet,
        setGui: sc.NewGameToggleSet,
      ): NewGameOptionButton;
    }
    var NewGameOptionButton: NewGameOptionButtonConstructor;
  }
}
