// requires impact.base.game
// requires impact.base.loader

export {};

declare global {
  namespace sc {
    interface ArenaCache extends ig.Cacheable {
      onCacheCleared(this: this): void;
    }
    interface ArenaCacheConstructor extends ImpactClass<ArenaCache> {
      new (): ArenaCache;
    }
    var ArenaCache: ArenaCacheConstructor;
  }
}
