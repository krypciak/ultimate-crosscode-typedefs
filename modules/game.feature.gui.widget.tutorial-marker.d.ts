// requires impact.base.image
// requires game.feature.gui.base.boxes

export {};

declare global {
  namespace sc {
    interface TUT_BOX_POINTING_DIR_BASE {
      alignX: ig.GUI_ALIGN;
      alignY: ig.GUI_ALIGN;
      flipped: boolean;
      scaleX: number;
      scaleY: number;
    }
    var TUT_BOX_POINTING_DIR: Record<
      'BOTTOM_RIGHT' | 'BOTTOM_LEFT' | 'TOP_RIGHT' | 'TOP_LEFT',
      sc.TUT_BOX_POINTING_DIR_BASE
    >;

    interface TutorialPointingGui extends ig.GuiElementBase {
      gfx: ig.Image;
    }
    interface TutorialPointingGuiConstructor extends ImpactClass<TutorialPointingGui> {
      new (
        dir: Optional<Nullable<sc.TUT_BOX_POINTING_DIR_BASE>>,
        text: sc.TextLike,
      ): TutorialPointingGui;
    }
    var TutorialPointingGui: TutorialPointingGuiConstructor;

    interface TutorialShadowGui extends ig.GuiElementBase {
      x: number;
      y: number;
      width: number;
      height: number;
    }
    interface TutorialShadowGuiConstructor extends ImpactClass<TutorialShadowGui> {
      new (x: number, y: number, width: number, height: number): TutorialShadowGui;
    }
    var TutorialShadowGui: TutorialShadowGuiConstructor;

    interface TutorialMarkerGui extends ig.GuiElementBase {
      shadowGui: sc.TutorialShadowGui;
      highlightGui: sc.WhiteLineBox;
      pointerGui: sc.TutorialPointingGui;
      callback: () => void;
      screenInteract: sc.ScreenInteractEntry;
      sounds: { start: ig.Sound };

      onInteraction(this: this): void;
      _close(this: this): void;
    }
    interface TutorialMarkerGuiConstructor extends ImpactClass<TutorialMarkerGui> {
      new (
        x: number,
        y: number,
        width: number,
        height: number,
        text: string,
        direction: unknown,
        connectPos: unknown,
        stopTime: boolean,
        doneCallback: () => void,
      ): TutorialMarkerGui;
    }
    var TutorialMarkerGui: TutorialMarkerGuiConstructor;
  }
}
