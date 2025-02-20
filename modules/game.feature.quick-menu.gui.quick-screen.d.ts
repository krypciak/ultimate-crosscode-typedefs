// requires impact.base.image
// requires impact.feature.gui.gui
// requires game.feature.quick-menu.gui.quick-screen-types
// requires game.feature.menu.gui.menu-misc
// requires game.feature.quick-menu.gui.quick-misc

export {};

declare global {
  namespace sc {
    interface QuickMenuAnalysisCursor extends ig.GuiElementBase {
      moveTo(this: this, x: number, y: number, setPos?: boolean, c?: unknown): void;
    }
    interface QuickMenuAnalysisCursorConstructor extends ImpactClass<QuickMenuAnalysisCursor> {
      new (): QuickMenuAnalysisCursor;
    }
    var QuickMenuAnalysisCursor: QuickMenuAnalysisCursorConstructor;

    interface QuickMenuAnalysis extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      buttonGroup: sc.MouseButtonGroup;
      cursor: sc.QuickMenuAnalysisCursor;
      entities: sc.QuickMenuTypesBase[];
      iconContainer: ig.GuiElementBase;
      focusContainer: sc.QuickFocusScreen;
      corners: ig.ImageGui[];
      background: ig.GuiElementBase;
      _cursorPos: Vec2;
      entered: boolean;

      show(this: this): void;
      hide(this: this): void;
      enter(this: this): void;
      exit(this: this): void;
      focusCenter(this: this): void;
      initCursor(this: this, pos: Vec2): void;
      limitCursorPos(this: this): void;
      createCorner(this: this, flipX?: boolean, flipY?: boolean): void;
    }
    interface QuickMenuAnalysisConstructor extends ImpactClass<QuickMenuAnalysis> {
      new (): QuickMenuAnalysis;
    }
    var QuickMenuAnalysis: QuickMenuAnalysisConstructor;
  }
}
