// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    enum HELP_ICON_TYPE {
      INFO = 0,
    }
    interface HelpAnnoBase extends ig.FocusGui {}
    interface HelpAnnoBaseConstructor extends ImpactClass<HelpAnnoBase> {}
    var HelpAnnoBase: HelpAnnoBaseConstructor;
    interface HELP_ANNO_TYPE {
      INFO: sc.HelpAnnoBase;
    }
    let HELP_ANNO_TYPE: HELP_ANNO_TYPE;

    interface HelpInfoBox extends sc.MenuPanel {
      title: sc.TextGui;
      description: sc.TextGui;
      line: ig.ColorGui;
      content: ig.GuiElementBase;

      show(
        this: this,
        button: sc.ButtonGui,
        title: Optional<string>,
        description: Optional<string>,
        content: sc.HelpScreen.Annotation['content'],
        type: sc.HelpScreen.Annotation['descType'],
      ): void;
      hide(this: this): void;
      getText<T>(
        this: this,
        stringGetter: (arg: T) => string | string,
        stringGetterArgument?: T,
      ): string;
    }
    interface HelpInfoBoxConstructor extends ImpactClass<HelpInfoBox> {
      new (): HelpInfoBox;
    }
    var HelpInfoBox: HelpInfoBoxConstructor;

    interface HelpLevelEntry extends ig.GuiElementBase {
      color: sc.TextGui;
      desc: sc.TextGui;
    }
    interface HelpLevelEntryConstructor extends ImpactClass<HelpLevelEntry> {
      new (colorID: string, fontColor: sc.FONT_COLORS): HelpLevelEntry;
    }
    var HelpLevelEntry: HelpLevelEntryConstructor;
  }
}
