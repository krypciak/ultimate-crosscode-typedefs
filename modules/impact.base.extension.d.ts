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
      listeners: Record<ExtensionName, ig.ExtensionListener>[];

      addListener(this: this, clazz: ig.ExtensionListener, type: string): void;
      load(this: this): void;
      getExtensionList(this: this): ExtensionName[];
      getExtension(this: this, name: ExtensionName): Nullable<ig.Extension>;
      hasExtension(this: this, name: ExtensionName): boolean;
      setExtensionEnabled(this: this, name: ExtensionName, value: boolean): void;
      onExtensionLoaded(this: this, extension: ig.Extension): void;
    }
    interface ExtensionManagerConstructor extends ImpactClass<ExtensionManager> {
      new (): ExtensionManager;
    }
    var ExtensionManager: ExtensionManagerConstructor;
    var extensions: ExtensionManager;

    interface ExtensionList extends ig.SingleLoadable {
      extensions: Record<ExtensionName, ig.Extension>;

      get(this: this, name: ExtensionName): ig.Extension;
      loadExtensionsPHP(this: this): void;
      _getExtensionFolder(this: this): string;
      loadExtensionsNWJS(this: this): void;
      onDirRead(this: this, err: NodeJS.ErrnoException | null, files: string[]): void;
      onExtensionListLoaded(this: this, list: string[]): void;
    }
    interface ExtensionListConstructor extends ImpactClass<ExtensionList> {
      new (): ExtensionList;
    }
    var ExtensionList: ExtensionListConstructor;

    namespace Extension {
      interface Data {
        name: ig.LangLabel.Data;
        description: ig.LangLabel.Data;
        entries: ig.Extension.Entry[];
        files: string[];
      }
      interface Entry {
        type: 'arena';
        data: {
          id: string;
        };
      }
    }
    interface Extension extends ig.JsonLoadable {
      cacheType: 'Extension';
      files: string[];
      entries: ig.Extension.Entry[];
      name: ig.LangLabel;
      description: ig.LangLabel;

      onload(this: this, data: ig.Extension.Data): void;
      checkFileList(this: this): void;
      addFileForwarding(this: this, isDisabled?: boolean): void;
    }
  }
}
