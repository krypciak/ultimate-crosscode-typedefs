// requires impact.base.game

export {};

declare global {
  namespace ig {
    namespace SaveSlot {
      interface Data {
        area: ig.LangLabel.Data;
        arena: sc.Arena.Data;
        bgm: ig.Bgm.Data;
        cancelButtonText: Nullable<ig.LangLabel>;
        commonEvents: { runData: sc.CommonEvents.RunData };
        currentTask: Nullable<ig.LangLabel.Data>;
        drops: sc.MenuModel['dropCounts'];
        floor: ig.LangLabel.Data | 'MISSING LABEL';
        forceCombatMode: boolean;
        gui: Record<string, ig.GuiElementBase>;
        highscore: number[];
        highscoreObs: number[];
        landmarks: sc.MapModel['activeLandmarks'];
        logs: sc.MenuModel.LogEntry[];
        lories: sc.LoreModel['unlockedLories'];
        map: string;
        menuNewEntries: sc.MenuModel['newUnlocks'];
        message: sc.MessageModel.Data;
        mobilityBlock: keyof typeof sc.GAME_MOBILITY_BLOCK;
        newGamePlus: sc.NewGamePlusModel.Data;
        options: {} /* this is always empty */;
        party: sc.PartyModel.Data;
        permaTask: ig.LangLabel.Data;
        player: sc.PlayerModel.Data;
        playtime: number;
        position: ig.TeleportPosition.Settings;
        quests: Data.Quests;
        questsSeen: Record<string, boolean>;
        saveVersion: number;
        specialMap: ig.LangLabel.Data;
        stamps: sc.MenuModel['mapStamps'];
        stats: sc.StatsModel['values'];
        timers: Record<string, sc.TimerEntry.Data>;
        tradersFound: { [id: string]: Data.TraderFound };
        vars: Data.Vars;
        version: string;
        visitedAreas: Record<string, {}>;
      }

      namespace Data {
        interface TraderFound {
          characterName: string;
          map: ig.LangLabel.Data;
          area: ig.LangLabel.Data;
          time: number;
        }

        interface Quests {
          locale: { [id: string]: Quests.Locale };
        }

        namespace Quests {
          interface Locale {
            time: number;
            location: Locale.Location;
            character: string;
          }

          namespace Locale {
            interface Location {
              area: ig.LangLabel.Data;
              map: ig.LangLabel.Data;
            }
          }
        }

        interface Vars {
          levelName: string;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          storage: Omit<ig.Vars.Storage, 'map' | 'session'>;
        }
      }
    }
    interface SaveSlot extends ig.Class {
      src: string;
      data: ig.SaveSlot.Data;

      getData(this: this): this['data'];
      getSrc(this: this): this['src'];
      mergeData(this: this, data: Partial<ig.SaveSlot.Data>): void;
    }
    interface SaveSlotConstructor extends ImpactClass<SaveSlot> {
      new (source: string | ig.SaveSlot.Data): SaveSlot;
    }
    var SaveSlot: SaveSlotConstructor;

    namespace StorageData {
      interface SaveFileData {
        slots: Array<string | ig.SaveSlot.Data>;
        autoSlot?: string | ig.SaveSlot.Data | null;
        globals: string | ig.Storage.GlobalsData;
        lastSlot?: number;
      }
    }
    interface StorageData extends ig.Class {
      data: ig.StorageData.SaveFileData | null;

      save(this: this, data: string): void;
      getData(this: this): this['data'];
    }
    interface StorageDataConstructor extends ImpactClass<StorageData> {
      new (): StorageData;
    }
    var StorageData: StorageDataConstructor;

    namespace Storage {
      namespace GlobalsData {
        type Options = {
          [K in keyof sc.OPTIONS_DEFINITION.KnownTypesMap]: sc.OPTIONS_DEFINITION.KnownTypesMap[K]['init'];
        } & Record<string, unknown>;
      }
      interface GlobalsData {
        featVersion: number;
        feats: Record<string, boolean>;
        options: GlobalsData.Options;
      }

      interface ListenerGlobalSave {
        onStorageGlobalSave(this: this, globals: ig.Storage.GlobalsData): void;
      }
      interface ListenerSave {
        onStorageSave(this: this, savefile: ig.SaveSlot.Data): void;
      }
      interface ListenerPreLoad {
        onStoragePreLoad(this: this, savefile: ig.SaveSlot.Data): void;
      }
      interface ListenerPostLoad {
        onStoragePostLoad(this: this, savefile: ig.SaveSlot.Data): void;
      }
      type Listener = Partial<ListenerGlobalSave> &
        Partial<ListenerSave> &
        Partial<ListenerPreLoad> &
        Partial<ListenerPostLoad>;
    }
    interface Storage extends ig.GameAddon, sc.Model {
      mapSaveEnabled: boolean;
      resetAfterTeleport: boolean;
      slots: ig.SaveSlot[];
      autoSlot: ig.SaveSlot | null;
      lastUsedSlot: number;
      listeners: ig.Storage.Listener[];
      saveObject: {};
      globalData: ig.Storage.GlobalsData;
      checkPointSave: ig.SaveSlot.Data;
      data: ig.StorageData;
      currentLoadFile: ig.SaveSlot.Data;
      checkpointCondCallback: Nullable<() => boolean>;
      autoSaveCondCallback: Nullable<() => boolean>;
      loadHint: Nullable<ig.Game.TeleportLoadHint>;

      setAutoSaveCondCallback(this: this, cond: () => boolean): void;
      setCheckpointCondCallback(this: this, cond: () => boolean): void;
      register(this: this, listener: ig.Storage.Listener): void;
      saveCheckpoint(
        this: this,
        mapName: string,
        position: Nullable<ig.TeleportPosition>,
        loadHint: Nullable<ig.Game.TeleportLoadHint>,
      ): void;
      getLastSlotData(this: this, mergeWith?: object): string;
      getAutoSlotData(this: this, mergeWith?: object): string;
      hasSaves(this: this): boolean;
      getSlotData(this: this, slot: number, mergeWith?: object): string;
      pushSlotData(this: this, source: string | ig.SaveSlot.Data): void;
      saveAutoSlot(this: this, source: string | ig.SaveSlot.Data): void;
      save(this: this, slot?: number): void;
      _saveToStorage(this: this): ig.StorageData.SaveFileData;
      _saveState(
        this: this,
        output: Partial<ig.SaveSlot.Data>,
        mapName?: string,
        teleportPositionSettings?: ig.TeleportPosition.Settings,
      ): void;
      saveGlobals(this: this): void;
      loadSlot(this: this, id?: number | ig.SaveSlot, teleportRightAway?: boolean): void;
      deleteSlot(this: this, slot: number): void;
      loadCheckpoint(this: this): void;
      loadAutosave(this: this): void;
      _isEncrypted(this: this, data: unknown): data is string;
      _encrypt(this: this, data: string, _unused?: unknown): string;
      _decrypt(this: this, data: string, _unused?: unknown): string;
      _createCopyTeleportPosition(this: this, entity: ig.ActorEntity): ig.TeleportPosition.Settings;
      getSlot(this: this, slot: number): ig.SaveSlot;
      hasSaveSlotData(this: this, slot: number): boolean;
      hasSlots(this: this): boolean;
    }
    interface StorageConstructor extends ImpactClass<Storage> {
      new (): Storage;
    }
    var Storage: StorageConstructor;
    var storage: Storage;

    namespace StorageTools {
      function isEncrypted(data: unknown): data is string;
      function encrypt(data: string): string;
      function decrypt(data: string): string;
      function decryptSlotData(data: string): ig.SaveSlot.Data;
      function encryptSlotData(data: ig.SaveSlot.Data): string;
    }
  }
}
