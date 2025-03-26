// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box
// requires impact.feature.gui.base.basic-gui
// requires game.feature.interact.map-interact
// requires game.feature.msg.gui.msg-skip-hud

export {};

declare global {
  namespace sc {
    interface XenoDialogIcon extends ig.BoxGui {
      ninepatch: ig.NinePatch;
      textGui: sc.TextGui;
      skipGui: sc.MsgSkipGui;
      xenoDialog: ig.ENTITY.XenoDialog;
      skipEntry: sc.SkipInteractEntry;

      onTextFinish(this: this): void;
      isTextFinished(this: this): boolean;
      updateSkipIcon(this: this): void;
      setText(this: this, text: sc.TextLike, dialog: ig.ENTITY.XenoDialog): void;
      show(this: this): void;
      hide(this: this): void;
      onSkipInteract(this: this, msg: sc.SKIP_INTERACT_MSG): void;
      setIconState(this: this): void;
      isActive(this: this, state: sc.INPUT_FORCER_ENTRIES): boolean;
      remove(this: this): void;
    }
    interface XenoDialogIconConstructor extends ImpactClass<XenoDialogIcon> {
      new (): XenoDialogIcon;
    }
    var XenoDialogIcon: XenoDialogIconConstructor;
  }
}
