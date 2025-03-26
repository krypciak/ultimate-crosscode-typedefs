// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace XenoDialog {
        interface Settings {
          once: boolean;
          ignoreZ: number;
          dialog: {
            entitySource: { global?: boolean; name: string };
            text: string;
            event?: unknown; // event steps
            entity: unknown;
          }[];
        }
      }
      interface XenoDialog extends ig.Entity {
        dialog: {
          entitySource: { global?: boolean; name: string };
          text: ig.LangLabel;
          event: ig.Event;
          entity: ig.ENTITY.NPC;
          timePadding: number;
        }[];
        members: ig.ENTITY.NPC[];
        running: boolean;
        blockTimer: number;
        padTimer: number;
        currentTextIndex: number;
        currentEntity?: ig.ENTITY.NPC;
        currentText: string;
        currentEvent: ig.Event;
        fx: { sheet: ig.EffectSheet; handle: Nullable<ig.ENTITY.Effect> };
        once: boolean;
        hasRunOnce: boolean;
        ignoreZ: boolean;

        onHideRequest(this: this): void;
        startDialog(this: this): void;
        cancelDialog(this: this): void;
        getCurrentText(this: this): string;
        getCallbackEvent(this: this): ig.Event;
        onEventStart(this: this): void;
        onEventEnd(this: this): void;
        _clearFx(this: this): void;
        _showFx(this: this): void;
        _showNextMessage(this: this): boolean;
        _clearCurrentIndex(this: this): void;
        _isInRange(this: this, range: number, noIgnoreZ?: boolean): boolean;
        _initMembers(this: this): void;
      }
      interface XenoDialogConstructor extends ImpactClass<XenoDialog> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.XenoDialog.Settings): XenoDialog;
      }
      var XenoDialog: XenoDialogConstructor;
    }
  }
}
