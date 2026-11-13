// requires impact.base.loader

export {};

declare global {
  namespace ig {
    namespace GlobalSettings {
      interface Data {
        // empty leftover, I choose to omit it
        // ItemDestruct: { AutumnPlant1: {} };

        ENTITY: ig.GlobalSettings.Entity;
      }
      interface Entity {
        ItemDestruct: Record<string, ig.ENTITY.ItemDestruct.Settings>;
        JumpPanel: Record<string, ig.ENTITY.JumpPanel.Settings>;
        HiddenBlock: Record<string, ig.ENTITY.HiddenBlock.Settings>;
      }
    }
    interface GlobalSettings extends ig.SingleLoadable {
      cacheType: 'GlobalSettings';
      data: ig.GlobalSettings.Data;
      modified: boolean;

      getGlobalSettingOptions<
        K1 extends keyof ig.GlobalSettings.Data,
        K2 extends keyof ig.GlobalSettings.Data[K1],
      >(
        this: this,
        key: K1,
        subKey: K2,
      ): Nullable<ig.GlobalSettings.Data[K1][K2]>;
      getGlobalSetting<
        K1 extends keyof ig.GlobalSettings.Data,
        K2 extends keyof ig.GlobalSettings.Data[K1],
        K3 extends keyof ig.GlobalSettings.Data[K1][K2],
      >(
        this: this,
        key: K1,
        subKey: K2,
        subSubKey: K3,
      ): Nullable<ig.GlobalSettings.Data[K1][K2][K3]>;
      storeGlobalSetting<
        K1 extends keyof ig.GlobalSettings.Data,
        K2 extends keyof ig.GlobalSettings.Data[K1],
        K3 extends keyof ig.GlobalSettings.Data[K1][K2],
      >(
        this: this,
        key: K1,
        subKey: K2,
        subSubKey: K3,
        value: ig.GlobalSettings.Data[K1][K2][K3],
      ): void;
      resolveEntitySettings<
        K extends sc.MapModel.EntityNames,
        T extends sc.MapModel.SettingsOfIgEntity<K>,
      >(
        this: this,
        entityType: K,
        settings: T,
      ): T;
      onerror(this: this): void;
      onload(this: this, data: ig.GlobalSettings.Data): void;
    }
    interface GlobalSettingsConstructor extends ImpactClass<GlobalSettings> {
      new (): GlobalSettings;
    }
    var GlobalSettings: GlobalSettingsConstructor;
    var globalSettings: GlobalSettings;
  }
}
