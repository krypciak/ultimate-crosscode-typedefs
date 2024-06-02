// requires impact.feature.gui.base.box
// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface WhiteLineBox extends ig.BoxGui {}
    interface WhiteLineBoxConstructor extends ImpactClass<WhiteLineBox> {
      new (width: number, height: number): WhiteLineBox;
    }
    var WhiteLineBox: WhiteLineBoxConstructor;

    enum ArrowBoxGui$POINTER {
      NONE = 0,
      TOP_LEFT = 1,
      BOTTOM_LEFT = 2,
      TOP_RIGHT = 3,
      BOTTOM_RIGHT = 4,
    }
    namespace ArrowBoxGui {
      type POINTER = ArrowBoxGui$POINTER;
    }
    interface ArrowBoxGui extends ig.BoxGui {}
    interface ArrowBoxGuiConstructor extends ImpactClass<ArrowBoxGui> {
      new (sizeX: number, sizeY: number, pointerType: sc.ArrowBoxGui.POINTER): ArrowBoxGui;
    }
    var ArrowBoxGui: ArrowBoxGuiConstructor;

    interface BlackWhiteBox extends ig.BoxGui {}
    interface BlackWhiteBoxConstructor extends ImpactClass<BlackWhiteBox> {
      new (width: number, height: number, flipped?: Nullable<boolean>): BlackWhiteBox;
    }
    var BlackWhiteBox: BlackWhiteBoxConstructor;

    interface CenterBoxGui extends ig.GuiElementBase {
      centerBox: sc.BlackWhiteBox;

      resize(this: this): void;
    }
    interface CenterBoxGuiConstructor extends ImpactClass<CenterBoxGui> {
      new (content: ig.GuiElementBase, skipTransition?: boolean): CenterBoxGui;
    }
    var CenterBoxGui: CenterBoxGuiConstructor;

    interface LineGui extends ig.BoxGui {
      ninepatch: ig.NinePatch;
    }
    interface LineGuiConstructor extends ImpactClass<LineGui> {
      new (width: number): sc.LineGui;
    }
    var LineGui: LineGuiConstructor;

    interface SideBoxGui extends ig.GuiElementBase {
      titleGui: sc.SlickTitleGui;
      contentEntries: sc.SlickBoxGui[];
      right: boolean;

      pushContent(
        this: this,
        subGui: ig.GuiElementBase,
        showSubGui?: boolean,
        paddingX?: number,
        paddingY?: number,
      ): void;
      replaceContent(this: this, index: number, subGui: ig.GuiElementBase): void;
      removeContent(this: this, index: number): sc.SlickBoxGui;
      clearContent(this: this): void;
      popContent(this: this): void;
      rearrangeContent(this: this, slickBoxGui?: sc.SlickBoxGui): void;
      hide(this: this, skipTransition?: boolean, initDelay?: number): void;
      show(this: this, skipTransition?: boolean, initDelay?: number): void;
      remove(this: this): void;
    }
    interface SideBoxGuiConstructor extends ImpactClass<SideBoxGui> {
      new (right: boolean, text: sc.TextLike): SideBoxGui;
    }
    var SideBoxGui: SideBoxGuiConstructor;

    type SmallBoxAlign = (dest: Vec2, coll: ig.CollEntry) => void;
    let SMALL_BOX_ALIGN: Record<string, SmallBoxAlign>;

    interface SmallEntityBox extends ig.GuiElementBase {}
    interface SmallEntityBoxConstructor extends ImpactClass<SmallEntityBox> {
      new (
        entity: ig.Entity,
        text: string,
        time: number,
        align?: SmallBoxAlign,
        offY?: number,
      ): SmallEntityBox;
    }
    let SmallEntityBox: SmallEntityBoxConstructor;

    interface SmallBlackBoxGui extends ig.BoxGui {
      text: unknown;
    }
    interface SmallBlackBoxGuiConstructor extends ImpactClass<SmallBlackBoxGui> {
      new (width: number): SmallBlackBoxGui;
    }
    var SmallBlackBoxGui: SmallBlackBoxGuiConstructor;
  }
}
