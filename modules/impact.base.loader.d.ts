export {};

/** RENAME: resolveJsonTemplate */
declare function a(
  json: object,
  allTemplates: ig.JsonTemplate.Templates,
  templates: ig.JsonTemplate.Template,
): object;
/** RENAME: resolveJsonTemplateInstance */
declare function b(
  json: object & { jsonINSTANCE: string },
  allTemplates: ig.JsonTemplate.Templates,
  templates: ig.JsonTemplate.Template,
): object;
/** RENAME: resolveJsonTemplateRecursive */
declare function c(
  resolvedTemplate: ig.JsonTemplate.Template,
  json: object,
  allTemplates: ig.JsonTemplate.Templates,
  templates: ig.JsonTemplate.Template,
): object;

declare global {
  namespace ig {
    var cacheList: Record<string, Record<string, Nullable<ig.Cacheable>>>;
    function cleanCache(forceClearMaps?: boolean): void;
    function reloadCache(): void;

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

    namespace Loadable {
      interface LoadListener<T extends ig.Loadable = ig.Loadable> {
        onLoadableCompete(this: this, success: boolean, loadable: T): void;
      }
    }
    interface Loadable extends ig.Cacheable, ig.Resource {
      loaded: boolean;
      failed: boolean;
      path: string;
      tolerateMissingResources: false;
      loadListeners: ig.Loadable.LoadListener[];
      loadCollectors: ig.LoadCollector[];
      debugReload: boolean;
      loadCallback?: Nullable<ig.Resource.LoadCallback>;

      reload(this: this): void;
      onInstanceReused(this: this): void;
      getCacheKey(this: this, path: string): string;
      loadingFinished(this: this, success: boolean): void;
      addLoadListener(this: this, listener: ig.Loadable.LoadListener): void;
      loadInternal(this: this, path: string): void;
    }
    interface LoadableConstructor extends ImpactClass<Loadable> {
      new (pathOrData: string): Loadable;
    }
    var Loadable: LoadableConstructor;

    interface JsonLoadable extends ig.Loadable, ig.Resource {
      onload(this: this, data: unknown): void;
      getJsonPath(this: this): string;
      onJsonLoaded(this: this, json: object): void;
      onJsonError(this: this): void;
    }
    interface JsonLoadableConstructor extends ImpactClass<JsonLoadable> {
      new (item: string): JsonLoadable;
    }
    var JsonLoadable: JsonLoadableConstructor;

    interface SingleLoadable extends ig.Class, ig.Resource {
      loaded: boolean;
      failed: boolean;

      loadingFinished(this: this, success: boolean): void;
      loadInternal(this: this): void;
    }
    interface SingleLoadableConstructor extends ImpactClass<SingleLoadable> {
      new (): SingleLoadable;

      instance: SingleLoadable;
    }
    var SingleLoadable: SingleLoadableConstructor;

    interface Loader extends ig.Class {
      resources: ig.Resource[];
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
      loadResource(this: this, resource: ig.Resource): void;
      end(this: this): void;
      onEnd(this: this): void;
      finalize(this: this): void;
      draw(this: this): void;
      _loadCallback(this: this, type: string, path: string, success: boolean): void;
    }
    interface LoaderConstructor extends ImpactClass<Loader> {
      new (gameClass?: sc.CrossCodeConstructor): Loader;
    }
    var Loader: LoaderConstructor;

    interface LoadCollector extends ig.Class {
      listener: ig.Loadable.LoadListener;
      resources: ig.Loadable[];

      finalizeLoadableFetching(this: this): void;
      addResource(this: this, loadable: ig.Loadable): void;
      setResourceLoaded(this: this, loadable: ig.Loadable): void;
      done(this: this): void;
    }
    interface LoadCollectorConstructor extends ImpactClass<LoadCollector> {
      new (listener: ig.Loadable.LoadListener): LoadCollector;
    }
    var LoadCollector: LoadCollectorConstructor;

    var loadCollectors: ig.LoadCollector[];

    function addResourceToCollectors(loadable: ig.Loadable): void;
    function setResourceLoadedToCollectors(loadable: ig.Loadable): void;
    function activateCollectors(loadable: ig.Loadable): void;
    function removeCollectors(loadable: ig.Loadable): void;

    namespace JsonTemplate {
      type Template = Record<string, unknown>;
      type Templates = Record<string, ig.JsonTemplate.Template>;
    }
    interface JsonTemplate extends ig.Class {
      templates: ig.JsonTemplate.Templates;

      register(this: this, name: string, template: ig.JsonTemplate.Template): void;
      resolve(this: this, json: object): unknown;
    }
    interface JsonTemplateConstructor extends ImpactClass<JsonTemplate> {
      new (): JsonTemplate;
    }
    var JsonTemplate: JsonTemplateConstructor;
    var jsonTemplate: JsonTemplate;
  }
}
