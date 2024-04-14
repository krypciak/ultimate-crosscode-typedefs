// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface MapSounds extends ig.GameAddon {
      onReset(this: this): void;
      onLevelLoaded(this: this): void;
      onDeferredUpdate(this: this): void;
    }
    interface MapSoundsConstructor extends ImpactClass<MapSounds> {
      new (): MapSounds;
    }
    var MapSounds: MapSoundsConstructor;
  }
}
