// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    namespace TopMsgHudGui {
      interface Icon {
        icon: number;
        bgm: string;
        sound?: ig.Sound;
      }
      interface Message {
        icon: sc.TopMsgHudGui.Icon;
        titleText: string;
        subText: string;
        subFoneSize: ig.MultiFont;
        id?: Nullable<number>;
      }
    }
    interface TopMsgHudGui extends ig.GuiElementBase, sc.Model.Observer {
      topGui: sc.TopMsgTopGui;
      bottomGui: sc.TopMsgTitleGui;
      iconGui: sc.TopMsgIconGui;
      visible: boolean;
      timer: number;
      maxTime: number;
      current: sc.TopMsgHudGui.Message;
      messages: sc.TopMsgHudGui.Message[];
      bgm: Record<string, ig.BgmTrack>;

      setContent(
        this: this,
        icon: sc.TopMsgHudGui.Icon,
        text: sc.TextLike,
        subText: sc.TextLike,
        subFont?: Nullable<ig.MultiFont>,
      ): void;
      showMessage(
        this: this,
        icon: sc.TopMsgHudGui.Icon,
        titleText: string,
        subText: string,
        subFontSize: ig.MultiFont,
        id?: Nullable<number>,
      ): void;
      popMessage(this: this): void;
      update(this: this): void;
      clear(this: this): void;
      hide(this: this): void;
      animationEnd(this: this): void;
      checkDuplicates(this: this, id: number): boolean;
    }
    interface TopMsgHudGuiConstructor extends ImpactClass<TopMsgHudGui> {
      new (): TopMsgHudGui;
    }
    var TopMsgHudGui: TopMsgHudGuiConstructor;

    interface TopMsgIconGui extends ig.GuiElementBase {
      gfx: ig.Image;
      icon: number;

      setIcon(this: this, icon: number): void;
    }
    interface TopMsgIconGuiConstructor extends ImpactClass<TopMsgIconGui> {
      new (): TopMsgIconGui;
    }
    var TopMsgIconGui: TopMsgIconGuiConstructor;

    interface TopMsgTopGui extends ig.ImageGui {
      gfx: ig.Image;
    }
    interface TopMsgTopGuiConstructor extends ImpactClass<TopMsgTopGui> {
      new (): TopMsgTopGui;
    }
    var TopMsgTopGui: TopMsgTopGuiConstructor;

    interface TopMsgTitleGui extends ig.GuiElementBase {
      titleTextGui: sc.TextGui;
      subTextGui: sc.TopMsgSubGui;
      gfx: ig.Image;
      ninePatches: Record<'left' | 'leftInner' | 'rightInner' | 'right', ig.NinePatch>;

      setContent(
        this: this,
        text: sc.TextLike,
        subText: sc.TextLike,
        subFont?: Nullable<ig.MultiFont>,
      ): void;
      showSubText(this: this): void;
    }
    interface TopMsgTitleGuiConstructor extends ImpactClass<TopMsgTitleGui> {
      new (): TopMsgTitleGui;
    }
    var TopMsgTitleGui: TopMsgTitleGuiConstructor;

    interface TopMsgSubGui extends ig.BoxGui {
      ninepatch: ig.NinePatch;

      setContent(this: this, text: sc.TextLike, font?: Nullable<ig.MultiFont>): void;
    }
    interface TopMsgSubGuiConstructor extends ImpactClass<TopMsgSubGui> {
      new (): TopMsgSubGui;
    }
    var TopMsgSubGui: TopMsgSubGuiConstructor;
  }
}
