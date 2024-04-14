// requires impact.base.event
// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface Rumble extends ig.GameAddon {
      onPostUpdate(this: this): void;
      onReset(this: this): void;
    }
    interface RumbleConstructor extends ImpactClass<Rumble> {
      new (): Rumble;
    }
    var Rumble: RumbleConstructor;
  }
}
