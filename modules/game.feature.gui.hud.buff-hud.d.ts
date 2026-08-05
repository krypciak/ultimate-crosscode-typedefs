// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box
// requires impact.feature.gui.base.basic-gui

export {};

declare global {
  namespace sc {
    interface BuffHudEntry extends ig.BoxGui {
      buff: sc.StatChange;
      id: number
    }
    interface BuffHudEntryConstructor extends ImpactClass<BuffHudEntry> {
      new (buff: sc.StatChange, id: number, x: number): BuffHudEntry;
    }
    let BuffHudEntry: BuffHudEntryConstructor;

    interface BuffHudGui extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      startPiece: ig.ImageGui;
      endPiece: ig.ImageGui;
      buffSlots: sc.BuffHudEntry[];

      sortSlots(this: this): boolean;
      addBuff(this: this, buff: sc.StatChange): void;
      removeAll(this: this): void
    }
    interface BuffHudGuiConstructor extends ImpactClass<sc.BuffHudGui> {}
    let BuffHudGui: BuffHudGuiConstructor;
  }
}
