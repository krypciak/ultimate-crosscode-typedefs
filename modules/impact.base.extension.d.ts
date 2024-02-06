export {};

declare global {
  namespace ig {
    type ExtensionName = string;

    interface ExtensionListener {
      onExtensionLoaded(data: any): void;
    }

    interface ExtensionManager extends ig.Class {
      enabled: Record<ExtensionName, boolean>;
      list: ig.ExtensionList;
      listeners: Record<ExtensionName, unknown>[];

      addListener(this: this, clazz: ig.ExtensionListener, type: string): void;
      load(this: this): void;
      getExtensionList(this: this): ExtensionName[];
      getExtension(this: this, name: ExtensionName): Nullable<Extension>;
      hasExtension(this: this, name: ExtensionName): boolean;
      setExtensionEnabled(this: this, name: ExtensionName, value: boolean): void;
      onExtensionLoaded(this: this, a: unknown): void;
    }
    interface ExtensionManagerConstructor extends ImpactClass<ExtensionManager> {
      new (): ExtensionManager;
    }
    var ExtensionManager: ExtensionManagerConstructor;
    var extensions: ExtensionManager;

    type Extension = unknown;
    interface ExtensionList extends ig.SingleLoadable {
      extensions: Record<ExtensionName, Extension>;
    }
    interface ExtensionListConstructor extends ImpactClass<ExtensionList> {
      new (): ExtensionList;
    }
    var ExtensionList: ExtensionListConstructor;
  }
}
