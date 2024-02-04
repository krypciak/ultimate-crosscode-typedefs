// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.base.image
// requires game.feature.gui.base.boxes

export {};

declare global {
  namespace sc {
    interface RightHudGui extends ig.GuiElementBase, sc.Model.Observer {
      taskTitle: unknown;
      maxCount: number;
      currentCount: number;
      variable: unknown;
      boxes: unknown;
      doReorder: boolean;

      addHudBox(this: this, rightHudBox: sc.RightHudGui, insertIndex?: number): void;
      addHudBoxBefore(this: this, rightHudBox: sc.RightHudGui, index?: number): void;
      removeHudBox(this: this, rightHudBox: sc.RightHudGui): void;
      reorder(this: this): void;
      updateSize(this: this): void;
    }
    interface RightHudGuiConstructor extends ImpactClass<RightHudGui> {
      new (): RightHudGui;
    }
    var RightHudGui: RightHudGuiConstructor;

    /* game.feature.gui.hud.right-hud */
    interface RightHudBoxGui extends sc.SideBoxGui {
      hidden: boolean;
      justAdded: boolean;
      parentPanel: sc.RightHudGui;

      show(this: this, skipTransition?: boolean, initDelay?: number): void;
      hide(this: this, skipTransition?: boolean, initDelay?: number): void;
      remove(this: this): void;
    }
    interface RightHudBoxGuiConstructor extends ImpactClass<RightHudBoxGui> {
      new (text: sc.TextLike): RightHudBoxGui;
    }
    var RightHudBoxGui: RightHudBoxGuiConstructor;
  }
}

