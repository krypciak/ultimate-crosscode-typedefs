// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.list-boxes

export {};

declare global {
  namespace sc {
    interface MainMenu extends ig.GuiElementBase, sc.Model.Observer {
      screenBlocking: boolean;
      gfx: ig.Image;
      submenus: Record<string, sc.BaseMenu>;
      topBar: ig.ColorGui;
      hotkeyBar: sc.MainMenu.TopBar;
      smallRhombus: sc.MainMenu.SmallRhombus;
      lea: sc.MainMenu.Lea;
      sline: sc.MainMenu.StatusLine;
      moneyTime: sc.TimeAndMoneyGUI;
      menuDisplay: sc.MainMenu.CurrentMenuDisplay;
      backButton: sc.ButtonGui;
      info: sc.InfoBar;
      buffInfo: sc.BuffInfo;
      subMenuInsertPos: number;

      _checkBackButtonInput(this: this): boolean;
      _onBackButton(this: this): void;
      _enterMenu(this: this): void;
      _exitMenu(this: this): void;
      _preCleanUp(this: this): void;
      _postCleanUp(this: this): void;
      _switchMenus(this: this, newId: sc.MENU_SUBMENU, oldId: sc.MENU_SUBMENU): void;
      _createMenu(this: this, id: sc.MENU_SUBMENU): void;
      _getMenuFromID(this: this, id: sc.MENU_SUBMENU): sc.BaseMenu;
      _makeExtraTransitions(
        this: this,
        newId?: sc.MENU_SUBMENU,
        _oldId?: Nullable<sc.MENU_SUBMENU> /* unused */,
        skipTransition?: boolean,
      ): void;
    }
    interface MainMenuConstructor extends ImpactClass<MainMenu> {
      new (): MainMenu;
      TopBar: sc.MainMenu.TopBarConstructor;
      SubMenuBox: sc.MainMenu.SubMenuBoxConstructor;
      CurrentMenuDisplay: sc.MainMenu.CurrentMenuDisplayConstructor;
      StatusLine: sc.MainMenu.StatusLineConstructor;
      LeaLarge: sc.MainMenu.LeaLargeConstructor;
      LeaSmall: sc.MainMenu.LeaSmallConstructor;
      Lea: sc.MainMenu.LeaConstructor;
      SmallRhombus: sc.MainMenu.SmallRhombusConstructor;
    }
    var MainMenu: MainMenuConstructor;

    namespace MainMenu {
      interface TopBar extends ig.GuiElementBase {
        hotkeys: unknown[] /* unused i think? */;
        _lateHotKeys: boolean;
        _hotkeyTimer: number;
        _hotkeyTime: number;

        enterMenu(this: this): void;
        exitMenu(this: this): void;
        cleanChildren(this: this): void;
        _addHotKeyButtons(this: this): void;
        _positionHotKeys(this: this, addGuis?: boolean, updateSize?: boolean): void;
        hideHotkeys(this: this): void;
        addHotkeysToTopBar(this: this, resetHotkeyTimer?: boolean): void;
        updateHotkeys(this: this, updateSize?: boolean): void;
      }
      interface TopBarConstructor extends ImpactClass<TopBar> {
        new (width: number): TopBar;
      }

      interface CurrentMenuDisplay extends ig.GuiElementBase {
        boxes: sc.MainMenu.SubMenuBox[];

        pushMenuDisplay(this: this, name: string): void;
      }
      interface CurrentMenuDisplayConstructor extends ImpactClass<CurrentMenuDisplay> {
        new (): CurrentMenuDisplay;
      }

      interface SubMenuBox extends ig.BoxGui {
        text: sc.TextGui;
      }
      interface SubMenuBoxConstructor extends ImpactClass<SubMenuBox> {
        new (text: string): SubMenuBox;
      }

      interface StatusLine extends ig.GuiElementBase {
        slope: sc.SlopeLine;
        line: ig.ColorGui;

        showLine(this: this, time?: number): void;
        hideLine(this: this): void;
        hideLineFade(this: this): void;
      }
      interface StatusLineConstructor extends ImpactClass<StatusLine> {
        new (): StatusLine;
      }

      type Bounds = { x: number; y: number; offX: number; offY: number; w: number; h: number };

      interface LeaLarge extends ig.GuiElementBase {
        gfx: ig.Image;
        skinGfx?: ig.Image;
        bounds?: Bounds;

        setBounds(this: this, bounds?: Bounds): void;
      }
      interface LeaLargeConstructor extends ImpactClass<LeaLarge> {
        new (): LeaLarge;
      }

      interface LeaSmall extends ig.GuiElementBase {
        gfx: ig.Image;
        skinGfx?: ig.Image;
        bounds?: Bounds;

        setBounds(this: this, bounds?: Bounds): void;
      }
      interface LeaSmallConstructor extends ImpactClass<LeaSmall> {
        new (): LeaSmall;
      }

      interface Lea extends ig.GuiElementBase, sc.Model.Observer {
        large: sc.MainMenu.LeaLarge;
        small: sc.MainMenu.LeaSmall;

        moveLea(this: this, offX: number, offY: number, small?: boolean, time?: number): void;
        hideLea(this: this): void;
        reset(this: this): void;
        fadeToSmall(this: this): void;
        fadeToLarge(this: this): void;
        isSmall(this: this): boolean;
      }
      interface LeaConstructor extends ImpactClass<Lea> {
        new (): Lea;
      }

      interface SmallRhombus extends ig.GuiElementBase {
        gfx: ig.Image;
      }
      interface SmallRhombusConstructor extends ImpactClass<SmallRhombus> {
        new (): SmallRhombus;
      }
    }
  }
}
