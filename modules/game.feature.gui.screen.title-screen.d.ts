// requires impact.feature.gui.gui
// requires game.feature.gui.base.button
// requires impact.feature.parallax.parallax
// requires game.feature.gui.screen.intro-screen
// requires game.feature.gui.screen.title-logo
// requires impact.base.image
// requires game.feature.gui.screen.title-preset
// requires game.feature.menu.gui.save.save-menu
// requires game.feature.version.version
// requires game.feature.control.control
// requires game.feature.menu.gui.new-game.new-game-dialogs

export {};

declare global {
  namespace sc {
    interface TitleScreenGui extends ig.GuiElementBase {
      buttons: sc.TitleScreenButtonGui;
      versionGui: sc.TextGui;

      onInteraction(this: this): void
      _introDone(this: this): void;
    }
    interface TitleScreenGuiConstructor extends ImpactClass<TitleScreenGui> {
      new (): TitleScreenGui;
    }
    var TitleScreenGui: TitleScreenGuiConstructor;

    interface TitleScreenButtonGui extends ig.GuiElementBase {
      buttonInteract: ig.ButtonInteractEntry;
      buttonGroup: sc.ButtonGroup;
      gamepadGui: null /* unset */;
      setOptions: null /* unset */;
      namedButtons: Record<string, sc.ButtonGui>;
      presetMenu: sc.TitlePresetMenu;
      story: null /* unset */;
      gameplay: null /* unset */;
      puzzle: null /* unset */;
      closeButton: null /* unset */;
      changelogButton: sc.ButtonGui;
      perfWarnButton: sc.ButtonGui;
      changelogGui: sc.ChangelogGui;
      gameCodeButton: sc.ButtonGui;
      background: ig.ColorGui;
      perfWarning: boolean;
      buttons: sc.ButtonGui[];
      _rearrangeAnchor: number;
      _newGamePlus: boolean;
      followButton: sc.ButtonGui;
      dlcButton: sc.ButtonGui;

      postInit(this: this): void;
      show(this: this): void;
      hide(this: this, skipTransition?: boolean): void;
      checkPerformanceWarning(this: this): void;
      showPerformanceWarning(this: this, text: sc.TextLike): void;
      checkClearSaveFiles(this: this): boolean;
      _createButton(
        this: this,
        name: string,
        y: number,
        buttonGroup: number,
        onButtonPress: () => void,
        namedButtonsName?: string,
      ): number;
      _enterLoadMenu(this: this): void;
      _enterOptionsMenu(this: this): void;
    }
    interface TitleScreenButtonGuiConstructor extends ImpactClass<TitleScreenButtonGui> {
      new (): TitleScreenButtonGui;
    }
    var TitleScreenButtonGui: TitleScreenButtonGuiConstructor;
  }
}
