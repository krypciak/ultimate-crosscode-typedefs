// requires impact.base.game
// requires impact.feature.storage.storage
// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    interface NewGameSet {
      type: sc.TOGGLE_SET_TYPE;
      order: number;
    }
    namespace NEW_GAME_SETS {
      type Keys = keyof NEW_GAME_SETS;
    }
    interface NEW_GAME_SETS {
      'carry-over': NewGameSet;
      money: NewGameSet;
      exp: NewGameSet;
      'drop-rate': NewGameSet;
      'combat-modifier': NewGameSet;
      itemCooldown: NewGameSet;
      'hp-regen': NewGameSet;
      enemy: NewGameSet;
      'enemy-damage': NewGameSet;
      'combat-arts': NewGameSet;
      others: NewGameSet;
    }
    var NEW_GAME_SETS: NEW_GAME_SETS;

    interface NewGameOption {
      set: NEW_GAME_SETS.Keys;
      cost: number;
      disabled?: boolean;
      needsSaveFile?: boolean;
    }
    namespace NEW_GAME_OPTIONS {
      type Keys = keyof NEW_GAME_OPTIONS;
    }
    interface NEW_GAME_OPTIONS {
      'money-plus-2': NewGameOption;
      'money-plus-4': NewGameOption;
      'disable-money': NewGameOption;
      'exp-plus-2': NewGameOption;
      'exp-plus-4': NewGameOption;
      'disable-exp': NewGameOption;
      'drop-rate-2': NewGameOption;
      'drop-rate-4': NewGameOption;
      'keep-level': NewGameOption;
      'keep-consumables': NewGameOption;
      'keep-addons': NewGameOption;
      'keep-equipment': NewGameOption;
      'keep-trade': NewGameOption;
      'keep-money': NewGameOption;
      'keep-elements': NewGameOption;
      'keep-arena': NewGameOption;
      'keep-botanics': NewGameOption;
      'keep-traders': NewGameOption;
      'lea-must-die': NewGameOption;
      'sergey-hax': NewGameOption;
      'dash-1': NewGameOption;
      'witch-time': NewGameOption;
      'overload-disable': NewGameOption;
      'infinite-sp': NewGameOption;
      'double-buff-time': NewGameOption;
      'remove-skill-blocks': NewGameOption;
      'item-cd-double': NewGameOption;
      'item-cd-half': NewGameOption;
      'item-cd-zero': NewGameOption;
      'combat-regen-half': NewGameOption;
      'combat-regen-zero': NewGameOption;
      'scale-enemies': NewGameOption;
      'harder-enemies': NewGameOption;
      'enemy-aggro': NewGameOption;
      'enemy-damage-15': NewGameOption;
      'enemy-damage-2': NewGameOption;
      'enemy-damage-4': NewGameOption;
      'combat-arts-level-1': NewGameOption;
      'combat-arts-level-2': NewGameOption;
      'waypoints-heals': NewGameOption;
      'waypoints-teleport': NewGameOption;
      'rhombus-start': NewGameOption;
      'no-trophies': NewGameOption;
      'ice-physics': NewGameOption;
    }
    var NEW_GAME_OPTIONS: NEW_GAME_OPTIONS;

    namespace NewGamePlusModel {
      interface Applier {
        onNewGameApply(this: this, save: ig.SaveSlot.Data): void;
      }
      interface Data {
        options: sc.NewGamePlusModel['options'];
        active: boolean;
        store: sc.NewGamePlusModel['store'];
      }
    }
    interface NewGamePlusModel
      extends ig.GameAddon,
        sc.Model,
        ig.Vars.Accessor,
        ig.Storage.ListenerSave,
        ig.Storage.ListenerPreLoad {
      active: boolean;
      store: { level?: number };
      options: PartialRecord<sc.NEW_GAME_OPTIONS.Keys, boolean>;

      onReset(this: this): void;
      setActive(this: this, active: boolean): void;
      setActiveAndOptions(this: this, options: sc.NEW_GAME_OPTIONS.Keys[]): void;
      toggle(
        this: this,
        options: sc.NEW_GAME_OPTIONS.Keys,
        set?: Nullable<sc.NEW_GAME_SETS.Keys>,
      ): void;
      get(this: this, option: sc.NEW_GAME_OPTIONS.Keys): boolean;
      storeSaveData(this: this, data: ig.SaveSlot.Data): void;
      applyData(this: this, data: ig.SaveSlot.Data): void;
      applyStoreData(this: this, atRhombus: boolean): void;
      _checkItemCondition(this: this, type: sc.ITEMS_TYPES): boolean;
      _checkEquip(
        this: this,
        playerData: sc.PlayerModel.Data,
        bodyPart: string,
        items: number[],
      ): void;
      getCost(this: this): number;
      requiresSaveFile(this: this): boolean;
      hasAnyOptions(this: this): boolean;
      hasHarderEnemies(this: this): boolean;
      getDropRateMultiplier(this: this): number;
      getMoneyMultiplier(this: this): number;
      getEXPMultiplier(this: this): number;
    }
    interface NewGamePlusModelConstructor extends ImpactClass<NewGamePlusModel> {
      new (): NewGamePlusModel;
    }
    var NewGamePlusModel: NewGamePlusModelConstructor;
    var newgame: sc.NewGamePlusModel;
  }
}
