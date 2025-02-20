// requires impact.base.image
// requires impact.base.game
// requires impact.feature.gui.gui
// requires impact.feature.storage.storage

export {};

declare global {
  namespace ig {
    interface GuiImageContainer extends ig.GuiElementBase {}
    interface GuiImageContainerConstructor extends ImpactClass<GuiImageContainer> {
      new (zIndex: number): GuiImageContainer;
    }
    var GuiImageContainer: GuiImageContainerConstructor;

    namespace GuiImage {
      interface Image {
        gui: ig.ImageGui;
        data: {
          alignX: ig.GUI_ALIGN;
          alignY: ig.GUI_ALIGN;
          state: ig.GuiHook.State;
        };
      }
    }
    interface GuiImage extends ig.GameAddon {
      guiImages: Record<string, ig.GuiImage.Image>;
      containerBelowGui: ig.GuiImageContainer;
      containerOverGui: ig.GuiImageContainer;

      showImage(
        this: this,
        key: string,
        tilesheet: ig.TileSheet,
        state: ig.GuiHook.State,
        alignX: ig.GUI_ALIGN,
        alignY: ig.GUI_ALIGN,
        renderMode?: 'source-over' | 'lighter',
        above?: boolean,
      ): void;
      moveImage(
        this: this,
        key: string,
        state: ig.GuiHook.State,
        transitionTime: number,
        keySpline: KeySpline,
        removeAfter?: boolean,
      ): void;
      removeImage(this: this, key: string): void;
      _createGuiState(this: this, state: ig.GuiHook.State): ig.GuiHook.State;
      onStorageSave(this: this): void;
      onStoragePreLoad(this: this): void;
      onReset(this: this): void;
    }
    interface GuiImageConstructor extends ImpactClass<GuiImage> {
      new (): GuiImage;
    }
    var GuiImage: GuiImageConstructor;
    var guiImage: ig.GuiImage;
  }
}
