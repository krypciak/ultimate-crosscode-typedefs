// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.new-game.new-game-misc
// requires game.feature.menu.gui.new-game.new-game-list

export {};

declare global {
  namespace sc {
    interface NewGamePlusMenu extends sc.ListInfoMenu {
      points: sc.NewGameCart;
      button: sc.ButtonGui;

      onPostDirectEnter(this: this): void;
      onHotkeyBeginCheck(this: this): boolean;
      onBeginButtonPressed(this: this): void;
      createHelpGui(this: this): void;
    }
    interface NewGamePlusMenuConstructor extends ImpactClass<NewGamePlusMenu> {
      new (): NewGamePlusMenu;
    }
    var NewGamePlusMenu: NewGamePlusMenuConstructor;
  }
}
