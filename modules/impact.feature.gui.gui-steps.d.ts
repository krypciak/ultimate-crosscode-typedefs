// requires impact.base.action
// requires impact.base.event
// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig.EVENT_STEP.ADD_GUI {
    type AllGuiInfo = {
      [K in keyof typeof ig.GUI]: {
        type: K;
      } & ConstructorParameters<(typeof ig.GUI)[K]>[0];
    };
    type GuiInfo = AllGuiInfo[keyof typeof ig.GUI];

    interface GUI {
      name?: string;
      guiInfo: GuiInfo;
    }
  }

  namespace ig.EVENT_STEP.CHANGE_GUI_STATE {
    interface GUIState {
      type: keyof typeof ig.GUI;
      state: string;
    }
  }
}
