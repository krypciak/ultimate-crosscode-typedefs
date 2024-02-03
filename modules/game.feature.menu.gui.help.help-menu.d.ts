// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.button-interact
// requires game.feature.menu.gui.base-menu
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.help.help-misc

export {};

declare global {
  namespace sc {
    namespace HelpScreen {
      interface Annotation {
        type: keyof sc.HELP_ANNO_TYPE;
        content?: { title?: string; description?: string };
        offset?: Vec2;
        size?: Vec2;
        index?: Vec2;
        flipIconX?: boolean;
        flipIconY?: boolean;
        descType?: 'buff' | 'levels' | string;
      }
    }
    interface HelpScreen extends ig.GuiElementBase, sc.Model.Observer {
      hotkeyHelp: sc.ButtonGui;
      hotkeyBack: sc.ButtonGui;
      topBar: ig.ColorGui;
      bottomBar: ig.ColorGui;
      box: sc.HelpScreenBorder;
      color: ig.ColorGui;
      content: ig.GuiElementBase;
      info: sc.HelpInfoBox;
      buttonInteract: ig.ButtonInteractEntry;
      buttonGroup: sc.ButtonGroup;
      backCallback?: Nullable<() => void>;
      manualTitle: string;
      manualContent: string[];
      manualGui: sc.MultiPageBoxGui;
      base: sc.BaseMenu;
      addons: ig.GuiElementBase[];
      fillEmptySpaces: boolean;

      openMenu(this: this, fillEmptySpaces?: boolean): void;
      exitMenu(this: this): void;
      createAnnotationsRec(
        this: this,
        gui: ig.GuiElementBase,
        x: number,
        y: number,
        count: number,
      ): void;
      createGUI(
        this: this,
        _unused: unknown,
        annotation: sc.HelpScreen.Annotation,
        x: number,
        y: number,
      ): void;
      addToButtonGroup(this: this, gui: sc.HelpAnnoBase, x: number, y: number): void;
      onHotkeyHelpCheck(this: this): boolean;
      onHelpButtonPressed(this: this): void;
      onHotkeyBackCheck(this: this): boolean;
      onBackButtonPressed(this: this): void;
      createHelpGui(this: this): void;
      onAddHotkeys(this: this): void;
      modelChanged(this: this): void;
    }
    interface HelpScreenConstructor extends ImpactClass<HelpScreen> {
      new (
        base: sc.BaseMenu,
        manualTitle: string,
        manualContent: sc.MultiPageBoxGui.ConditionalPage[],
        backCallback: () => void,
        fillEmptySpaces?: boolean,
      ): HelpScreen;
    }
    var HelpScreen: HelpScreenConstructor;

    interface HelpScreenBorder extends ig.GuiElementBase {
      box: ig.BoxGui;

      show(this: this): void;
      hide(this: this): void;
    }
    interface HelpScreenBorderConstructor extends ImpactClass<HelpScreenBorder> {
      new (): HelpScreenBorder;
    }
    var HelpScreenBorder: HelpScreenBorderConstructor;
  }
}

