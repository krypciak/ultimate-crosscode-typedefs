// requires impact.feature.gui.gui
// requires game.feature.combat.model.combat-params
// requires game.feature.model.options-model

export {};

declare global {
  namespace sc {
    interface ElementHudGui extends ig.GuiElementBase, sc.Model.Observer {
      timer: number;
      icons: sc.ElementHudIconGui[];

      showElement(this: this, element: sc.ELEMENT): void;
      _updatePos(this: this): void;
    }
    interface ElementHudGuiConstructor extends ImpactClass<ElementHudGui> {
      new (): ElementHudGui;
    }
    var ElementHudGui: ElementHudGuiConstructor;

    namespace ElementHudIconGui {
      interface IconDir {
        alignX: ig.GUI_ALIGN;
        alignY: ig.GUI_ALIGN;
        tile: number;
        rotate: number;
        pShowX: number;
        pShowY: number;
        pHideX: number;
        pHideY: number;
      }
    }
    interface ElementHudIconGui extends ig.GuiElementBase {
      gfx: ig.Image;
      iconDir: sc.ElementHudIconGui.IconDir;
      currentElement: number;
      bigSize: boolean;

      show(this: this, currentElement: sc.ELEMENT, bigSize: boolean): void;
    }
    interface ElementHudIconGuiConstructor extends ImpactClass<ElementHudIconGui> {
      new (iconDir: sc.ElementHudIconGui.IconDir): ElementHudIconGui;
    }
    var ElementHudIconGui: ElementHudIconGuiConstructor;
  }
}
