// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export {};

declare global {
  namespace sc {
    enum DIALOG_INFO_ICON {
      NONE = 0,
      INFO = 1,
      WARNING = 2,
      ERROR = 3,
      QUESTION = 4,
    }

    interface ModalScreenInteract extends ig.GuiElementBase {
      gfx: ig.Image;
      msgBox: sc.CenterBoxGui;
      textGui: sc.TextGui;
      textDone: boolean;
      icon: number;
      screenInteract: sc.ScreenInteractEntry;
      callback: () => void;

      _onTextFinish(this: this): void;
      _close(this: this): void;
      onInteraction(this: this): void;
    }
    interface ModalScreenInteractConstructor extends ImpactClass<ModalScreenInteract> {
      new (
        text: sc.TextLike,
        icon?: sc.DIALOG_INFO_ICON,
        iconLeft?: boolean,
        callback?: () => void,
      ): ModalScreenInteract;
    }
    var ModalScreenInteract: ModalScreenInteractConstructor;

    interface ModalButtonInteract extends ig.GuiElementBase {
      msgBox: sc.CenterBoxGui;
      textGui: sc.TextGui;
      content: ig.GuiElementBase;
      buttons: sc.ButtonGui[];
      buttonInteract: ig.ButtonInteractEntry;
      buttongroup: sc.ButtonGroup;
      back: sc.ButtonGui;
      keepOpen: boolean;

      show(this: this): void;
      hide(this: this): void;
      onBackButtonCheck(this: this): boolean;
    }
    interface ModalButtonInteractConstructor extends ImpactClass<ModalButtonInteract> {
      new (
        text: sc.TextLike,
        icon: Nullable<sc.DIALOG_INFO_ICON>,
        options: sc.TextLike[],
        callback: (button: sc.ButtonGui & { data: number }) => void,
        disableSubmitSound?: Nullable<boolean>,
      ): ModalButtonInteract;
    }
    var ModalButtonInteract: ModalButtonInteractConstructor;

    interface Dialogs {
      showDialog(
        text: sc.TextLike,
        icon?: sc.DIALOG_INFO_ICON,
        iconLeft?: boolean,
        callback?: () => void,
      ): void;
      showInfoDialog(text: sc.TextLike, iconLeft?: boolean, callback?: () => void): void;
      showWarningDialog(text: sc.TextLike, iconLeft?: boolean, callback?: () => void): void;
      showErrorDialog(text: sc.TextLike, iconLeft?: boolean, callback?: () => void): void;
      showQuestionDialog(text: sc.TextLike, iconLeft?: boolean, callback?: () => void): void;
      showChoiceDialog(
        text: sc.TextLike,
        icon: Nullable<sc.DIALOG_INFO_ICON>,
        options: sc.TextLike[],
        callback: (
          button: sc.ButtonGui & { data: number },
          dialog?: sc.ModalButtonInteract,
        ) => void,
        disableSubmitSound?: Nullable<boolean>,
      ): void;
      showConformationDialog(
        text: sc.TextLike,
        icon: Nullable<sc.DIALOG_INFO_ICON>,
        option: sc.TextLike,
        callback: (
          button: sc.ButtonGui & { data: number },
          dialog?: sc.ModalButtonInteract,
        ) => void,
      ): void;
      showYesNoDialog(
        text: sc.TextLike,
        icon?: Nullable<sc.DIALOG_INFO_ICON>,
        callback?: Nullable<
          (button: sc.ButtonGui & { data: number }, dialog?: sc.ModalButtonInteract) => void
        >,
        noSubmitSound?: boolean,
      ): void;
    }
    var Dialogs: Dialogs;
  }
}
