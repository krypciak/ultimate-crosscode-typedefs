// requires impact.feature.gui.gui
// requires impact.base.image

export {};

declare global {
  namespace sc {
    interface LoadingScreenGui extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      timer: number;
      textBlock: ig.TextBlock;
    }
    interface LoadingScreenGuiConstructor extends ImpactClass<LoadingScreenGui> {
      new (): LoadingScreenGui;
    }
    var LoadingScreenGui: LoadingScreenGuiConstructor;
  }
}
