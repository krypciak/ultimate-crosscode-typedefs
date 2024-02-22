// requires impact.feature.gui.gui
// requires game.feature.menu.gui.options.options-list

export {};

declare global {
  namespace sc {
    interface OptionsMenu extends sc.BaseMenu, sc.Model.Observer {
      hotkeyHelp: sc.ButtonGui;
      hotkeyDefault: sc.ButtonGui;
      listBox: sc.OptionsTabBox;
      helpGui: sc.HelpScreen;
      blackBox: ig.ColorGui;
      langGui: sc.OptionLangPopUp;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this): void;
      hideMenu(this: this): void;
      exitMenu(this: this): void;
      onHotkeyDefaultCheck(this: this): boolean;
      onDefaultButtonPressed(this: this): void;
      onHotkeyHelpCheck(this: this): boolean;
      onHelpButtonPressed(this: this): void;
      createHelpGui(this: this): void;
      onAddHotkeys(this: this, inputRegained?: boolean): void;
      commitHotKeysToTopBar(this: this, inputRegained?: boolean): void;
      onBackButtonPress(this: this): void;
      onLangPopUpClose(this: this): void;
    }
    interface OptionsMenuConstructor extends ImpactClass<OptionsMenu> {
      new (): OptionsMenu;
    }
    var OptionsMenu: OptionsMenuConstructor;
  }
}
