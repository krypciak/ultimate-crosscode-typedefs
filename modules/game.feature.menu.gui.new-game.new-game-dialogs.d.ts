// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    interface NewGameModeSelectDialog extends ig.GuiElementBase {
      gfx: ig.Image;
      msgBox: sc.CenterBoxGui;
      normal: sc.NewGameModeDialogButton;
      plus: sc.NewGameModeDialogButton;
      header: sc.TextGui;
      content: ig.GuiElementBase;
      info: sc.TextGui;
      buttons: [];
      buttonInteract: ig.ButtonInteractEntry;
      buttongroup: sc.ButtonGroup;
      callback: (button: sc.ButtonGui, dialog: sc.NewGameModeSelectDialog) => void;

      show(this: this): void;
      hide(this: this): void;
      onBackButtonCheck(this: this): boolean;
    }
    interface NewGameModeSelectDialogConstructor extends ImpactClass<NewGameModeSelectDialog> {
      new (callback: sc.NewGameModeSelectDialog['callback']): NewGameModeSelectDialog;
    }
    var NewGameModeSelectDialog: NewGameModeSelectDialogConstructor;

    interface NewGameModeDialogButton extends sc.ButtonGui {
      framePatch: ig.NinePatch;
      gfx: ig.Image;
      frame: ig.BoxGui;
      image: ig.ImageGui;
    }
    interface NewGameModeDialogButtonConstructor extends ImpactClass<NewGameModeDialogButton> {
      new (text: sc.TextLike, data?: sc.ButtonGui['data']): NewGameModeDialogButton;
    }
    var NewGameModeDialogButton: NewGameModeDialogButtonConstructor;
  }
}
