// requires impact.feature.interact.interact

export {};

declare global {
  namespace sc {
    interface ScreenInteractEntry extends ig.InteractEntry {
      callbackObject: { onInteraction: () => void };
      withEscape: boolean;
      autoCtrlIgnore: boolean;
    }
    interface ScreenInteractEntryConstructor extends ImpactClass<ScreenInteractEntry> {
      new (
        callbackObject: sc.ScreenInteractEntry['callbackObject'],
        withEscape?: boolean,
      ): ScreenInteractEntry;
    }
    var ScreenInteractEntry: ScreenInteractEntryConstructor;
  }
}
