export {};

declare global {
  namespace ig {
    var cacheList: Record<string, Record<string, Nullable<ig.Cacheable>>>;
    function cleanCache(forceClearMaps?: boolean): void;

    var fileForwarding: Record<string, string>;
    function getFilePath(path: string): string;

    namespace Cacheable {
      interface ImplementsCache<T extends ig.Loadable> {
        cache: Record<string, T>;
      }
    }
    interface Cacheable extends ig.Class {
      cacheType: string;
      cacheKey: string;
      referenceCount: number;
      emptyMapChangeCount: number;

      increaseRef(this: this): void;
      decreaseRef(this: this): void;
      getCacheKey(this: this, ...args: unknown[]): Nullable<string>;
      onCacheCleared?(this: this): void;
    }
    interface CacheableConstructor extends ImpactClass<Cacheable> {
      cache: Record<string, Nullable<Cacheable>>;
      new (): Cacheable;
    }
    var Cacheable: CacheableConstructor;

    interface Loadable extends ig.Cacheable, ig.Resource {
      loaded: boolean;
      failed: boolean;
      path: string;

      debugReload: boolean;

      reload(this: this): void;
      loadingFinished(this: this, success: boolean): void;
    }
    interface LoadableConstructor extends ImpactClass<Loadable> {
      new (pathOrData: string): Loadable;
    }
    var Loadable: LoadableConstructor;

    interface JsonLoadable extends ig.Loadable, ig.Resource {
      onload(this: this, data: unknown): void;
      getJsonPath(this: this): string;
    }
    interface JsonLoadableConstructor extends ImpactClass<JsonLoadable> {
      new (item: string): JsonLoadable;
    }
    var JsonLoadable: JsonLoadableConstructor;

    interface SingleLoadable extends ig.Class, ig.Resource {
      loaded: boolean;
      failed: boolean;
      path: string;

      loadingFinished(this: this, success: boolean): void;
    }
    interface SingleLoadableConstructor extends ImpactClass<SingleLoadable> {
      new (): SingleLoadable;

      instance: SingleLoadable;
    }
    var SingleLoadable: SingleLoadableConstructor;

    interface Loader extends ig.Class {
      resources: unknown[];
      prevResourcesCnt: number;
      status: number;
      done: boolean;
      lastPath: string;
      gameObjectCreated: boolean;
      _unloaded: string[];
      _drawStatus: number;
      _intervalId: number;
      _loadCallbackBound: Nullable<ig.Resource.LoadCallback>;
      _loadIndex: number;

      load(this: this): void;
      end(this: this): void;
      onEnd(this: this): void;
      finalize(this: this): void;
      draw(this: this): void;
      _loadCallback: ReplaceThisParameter<ig.Resource.LoadCallback, this>;
    }
    interface LoaderConstructor extends ImpactClass<Loader> {
      new (gameClass?: sc.CrossCodeConstructor): Loader;
    }
    var Loader: LoaderConstructor;
  }
}
