// requires impact.base.actor-entity
// requires impact.base.entity
// requires game.feature.interact.map-interact
// requires game.feature.inventory.inventory
// requires game.feature.menu.menu-model

export {};

declare global {
  namespace sc {
    enum CHEST_TYPE {
      Default,
      Bronze,
      Silver,
      Gold,
      Key,
      MasterKey,
    }
    enum CHEST_KEY {
      BRONZE = 154,
      SILVER = 155,
      GOLD = 156,
    }
  }
  namespace ig.ENTITY {
    namespace Chest {
      interface Settings extends ig.Entity.Settings {
        trigger?: string;
        noTrack?: boolean;
        chestType?: keyof typeof sc.CHEST_TYPE;
        variable?: string;
        item: number;
        amount?: number;
        hideCondition?: string;
        detectCondition?: string;
      }
    }
    interface Chest extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      mapIcons: sc.MapInteractIcon;
      mapIconsKey: sc.MapInteractIcon;
      effects: { sheet: ig.EffectSheet; handle?: ig.ENTITY.Effect };
      interactEntry: sc.MapInteractEntry;
      hideHandle?: ig.ENTITY.Effect;
      isOpen: boolean;
      chestVariable: boolean;
      item: sc.ItemID;
      amount: number;
      chestType: sc.CHEST_TYPE;
      lockedIcon: boolean;
      _itemName: string;
      _trigger?: string;
      _initialized: boolean;
      _noTrack: boolean;
      hideManager?: ig.EntityHideManager;

      _initGfx(this: this): void;
      _updateIcon(this: this): void;
      onHideRequest(this: this): void;
      update(this: this): void;
      onInteraction(this: this): boolean | undefined;
      openUp(this: this): void;
      _reallyOpenUp(this: this): void;
      isOpened(this: this): boolean;
      varsChanged(this: this): void;
    }
    interface ChestConstructor extends ImpactClass<Chest> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.Chest.Settings): Chest;
    }
    var Chest: ChestConstructor;
  }
}
