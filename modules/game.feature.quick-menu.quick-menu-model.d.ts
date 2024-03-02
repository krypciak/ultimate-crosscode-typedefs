// requires impact.base.game
// requires impact.feature.interact.button-interact
// requires impact.feature.database.database
// requires game.feature.model.base-model

export {};

declare global {
  namespace sc {
    enum QUICK_MENU_STATE {
      NONE = 0,
      ITEMS = 1,
      CHECK = 2,
      PARTY = 3,
      MAP = 4,
    }
    interface QuickMenuModel extends ig.GameAddon, sc.Model {
      buttonInteract: ig.ButtonInteractEntry;
      activeState: boolean;
      currentState: sc.QUICK_MENU_STATE;
      previousState: sc.QUICK_MENU_STATE;
      visible: boolean;
      cursorMoved: boolean;
      cursor: Vec2;
      analFocus: sc.QuickMenuTypesBase;
      itemIndex: number;
      infoText: sc.TextLike;
      buffText: sc.TextLike;
      buffID?: number;
      skipActiveState: boolean;
      names: ig.Database.Names;
      gamepadActive: boolean;
      lastDevice: number;
      itemsBlocked: boolean;

      enterQuickMenu(this: this): void;
      exitQuickMenu(this: this): void;
      enterItems(this: this): void;
      enterParty(this: this): void;
      enterCheck(this: this): void;
      enterNone(this: this): void;
      setInfoText(this: this, text: sc.TextLike, fade?: boolean): void;
      setBuffText(this: this, text: sc.TextLike, fade: boolean | undefined, buffID: number): void;
      setItemBlock(this: this, value: boolean): void;
      toggleInputMode(this: this): void;
      resetCursor(this: this): void;
      focusEntity(this: this, x: number, y: number, entity: sc.QuickMenuTypesBase, _unused: unknown): void;
      unfocusEntity(this: this, entity: sc.QuickMenuTypesBase): void;
      isDeviceSynced(this: this): boolean;
      _switchStates(this: this, state: sc.QUICK_MENU_STATE): void;
      isQuickNone(this: this): boolean;
      isQuickItems(this: this): boolean;
      isQuickParty(this: this): boolean;
      isQuickCheck(this: this): boolean;
    }

    interface QuickMenuModelConstructor extends ImpactClass<QuickMenuModel> {
      new (): QuickMenuModel;
    }
    var QuickMenuModel: QuickMenuModelConstructor;
    var quickmodel: QuickMenuModel;
  }
}
