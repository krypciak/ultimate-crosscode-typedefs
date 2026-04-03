// requires impact.feature.interact.interact

export {};

declare global {
  namespace sc {
    enum SKIP_INTERACT_MSG {
      ENABLED = 1,
      DISABLED = 2,
      SKIPPED = 3,
    }
    interface SkipInteract extends ig.GameAddon {
      entries: sc.MapInteractEntry[];

      addEntry(this: this, entry: sc.MapInteractEntry): void;
      removeEntry(this: this, entry: sc.MapInteractEntry): void;
      getActiveEntry(this: this): sc.MapInteractEntry | undefined;
      triggerSkip(this: this): void;
    }
    interface SkipInteractConstructor extends ImpactClass<SkipInteract> {
      new (): SkipInteract;
    }
    var SkipInteract: SkipInteractConstructor;
    var skipInteract: SkipInteract

    namespace SkipInteractEntry {}
    interface SkipInteractEntry extends ig.Class {
      handler: sc.XenoDialogIcon | sc.SideMessageHudGui;
      order: number;

      isActive(this: this): boolean;
    }
    interface SkipInteractEntryConstructor extends ImpactClass<SkipInteractEntry> {
      new (handler: sc.SkipInteractEntry['handler'], order: number): SkipInteractEntry;
    }
    var SkipInteractEntry: SkipInteractEntryConstructor;
  }
}
