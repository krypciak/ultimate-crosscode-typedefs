// requires impact.base.actor-entity
// requires impact.base.entity
// requires game.feature.interact.map-interact
// requires game.feature.inventory.inventory
// requires game.feature.menu.menu-model

export {};

declare global {
  namespace sc {
    interface ChestType {
      anim: string;
      item?: sc.CHEST_KEY;
      openEffect?: string;
    }
    interface CHEST_TYPE {
      Default: sc.ChestType;
      Bronze: sc.ChestType;
      Silver: sc.ChestType;
      Gold: sc.ChestType;
      Key: sc.ChestType;
      MasterKey: sc.ChestType;
    }
    var CHEST_TYPE: CHEST_TYPE;

    enum CHEST_KEY {
      BRONZE = 154,
      SILVER = 155,
      GOLD = 156,
    }
  }
  namespace ig {
    namespace ENTITY {
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
        chestType: sc.ChestType;
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
    namespace ACTION_STEP {
      namespace OPEN_CHEST {
        interface Settings {
          entity: ig.ENTITY.Chest;
        }
      }
      interface OPEN_CHEST extends ig.ActionStepBase {
        entity: ig.ENTITY.Chest;
      }
      interface OPEN_CHEST_CONSTRUCTOR extends ImpactClass<OPEN_CHEST> {
        new (settings: ig.ACTION_STEP.OPEN_CHEST.Settings): OPEN_CHEST;
      }
      var OPEN_CHEST: OPEN_CHEST_CONSTRUCTOR;
    }
  }
}
