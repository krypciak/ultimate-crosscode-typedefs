// requires impact.base.action
// requires impact.base.event
// requires impact.feature.gui.gui

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace ADD_GUI {
        type AllGuiInfo = {
          [K in keyof typeof ig.GUI]: {
            type: K;
            settings: ConstructorParameters<(typeof ig.GUI)[K]>[0];
          };
        };
        type GuiInfo = AllGuiInfo[keyof typeof ig.GUI];

        interface Settings {
          name?: string;
          guiInfo: ig.EVENT_STEP.ADD_GUI.GuiInfo;
        }
      }
      interface ADD_GUI extends ig.EventStepBase {
        name?: string;
        guiInfo: ig.EVENT_STEP.ADD_GUI.GuiInfo;
        guiElement: ig.GuiElementBase;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface ADD_GUI_CONSTRUCTOR extends ImpactClass<ADD_GUI> {
        new (settings: ig.EVENT_STEP.ADD_GUI.Settings): ADD_GUI;
      }
      var ADD_GUI: ADD_GUI_CONSTRUCTOR;

      namespace REMOVE_GUI {
        interface Settings {
          name: string;
        }
      }
      interface REMOVE_GUI extends ig.EventStepBase {
        name: string;
        guiInfo: unknown;
        _wm: ig.Config;
      }
      interface REMOVE_GUI_CONSTRUCTOR extends ImpactClass<REMOVE_GUI> {
        new (settings: ig.EVENT_STEP.REMOVE_GUI.Settings): REMOVE_GUI;
      }
      var REMOVE_GUI: REMOVE_GUI_CONSTRUCTOR;

      namespace CHANGE_GUI_STATE {
        interface GUIState {
          type: keyof typeof ig.GUI;
          state: string;
        }

        interface Settings {
          name: string;
          guiState: ig.EVENT_STEP.CHANGE_GUI_STATE;
          immediate: boolean;
          remove: boolean;
        }
      }
      interface CHANGE_GUI_STATE extends ig.EventStepBase {
        name: string;
        guiState: ig.EVENT_STEP.CHANGE_GUI_STATE;
        immediate: boolean;
        remove: boolean;
        _wm: ig.Config;
      }
      interface CHANGE_GUI_STATE_CONSTRUCTOR extends ImpactClass<CHANGE_GUI_STATE> {
        new (settings: ig.EVENT_STEP.CHANGE_GUI_STATE.Settings): CHANGE_GUI_STATE;
      }
      var CHANGE_GUI_STATE: CHANGE_GUI_STATE_CONSTRUCTOR;

      namespace SHOW_IMAGE {
        interface Settings {
          name: string;
          image: ig.TileSheet.Data;
          guiState: ig.GuiHook.State;
          alignX: keyof typeof ig.GUI_ALIGN_X;
          alignY: keyof typeof ig.GUI_ALIGN_Y;
          renderMode?: unknown;
          overGui: boolean;
        }
      }
      interface SHOW_IMAGE extends ig.EventStepBase {
        name: string;
        image: ig.TileSheet;
        guiState: ig.GuiHook.State;
        alignX: keyof typeof ig.GUI_ALIGN_X;
        alignY: keyof typeof ig.GUI_ALIGN_Y;
        renderMode: unknown;
        overGui: boolean;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SHOW_IMAGE_CONSTRUCTOR extends ImpactClass<SHOW_IMAGE> {
        new (settings: ig.EVENT_STEP.SHOW_IMAGE.Settings): SHOW_IMAGE;
      }
      var SHOW_IMAGE: SHOW_IMAGE_CONSTRUCTOR;

      namespace MOVE_IMAGE {
        interface Settings {
          name: string;
          guiState: ig.GuiHook.State;
          time: number;
          keySpline: unknown;
          removeAfterwards: boolean;
        }
      }
      interface MOVE_IMAGE extends ig.EventStepBase {
        name: string;
        guiState: ig.GuiHook.State;
        time: number;
        keySpline: KeySpline;
        removeAfterwards: boolean;
        _wm: ig.Config;
      }
      interface MOVE_IMAGE_CONSTRUCTOR extends ImpactClass<MOVE_IMAGE> {
        new (settings: ig.EVENT_STEP.MOVE_IMAGE.Settings): MOVE_IMAGE;
      }
      var MOVE_IMAGE: MOVE_IMAGE_CONSTRUCTOR;

      namespace REMOVE_IMAGE {
        interface Settings {
          name: string;
        }
      }
      interface REMOVE_IMAGE extends ig.EventStepBase {
        name: string;
        _wm: ig.Config;
      }
      interface REMOVE_IMAGE_CONSTRUCTOR extends ImpactClass<REMOVE_IMAGE> {
        new (settings: ig.EVENT_STEP.REMOVE_IMAGE.Settings): REMOVE_IMAGE;
      }
      var REMOVE_IMAGE: REMOVE_IMAGE_CONSTRUCTOR;
    }
  }
}
