// requires impact.base.event

export {};

declare global {
  namespace ig {
    interface EventSheet extends ig.JsonLoadable {
      events: Record<string, ig.Event>;

      getEvent(this: this, name: string): Nullable<ig.Event>;
    }
    interface EventSheetConstructor extends ImpactClass<EventSheet> {
      new (): EventSheet;
    }
    var EventSheet: EventSheetConstructor;
  }
}
