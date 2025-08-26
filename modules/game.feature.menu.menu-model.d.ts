// requires impact.base.game
// requires impact.feature.interact.button-interact
// requires impact.feature.storage.storage
// requires game.feature.model.base-model
// requires game.feature.menu.area-loadable
// requires game.feature.menu.gui.start-menu
// requires game.feature.menu.gui.equip.equip-menu
// requires game.feature.menu.gui.circuit.circuit-menu
// requires game.feature.menu.gui.item.item-menu
// requires game.feature.menu.gui.map.map-menu
// requires game.feature.menu.gui.save.save-menu
// requires game.feature.menu.gui.options.options-menu
// requires game.feature.menu.gui.shop.shop-menu
// requires game.feature.menu.gui.synop.synop-menu
// requires game.feature.menu.gui.quests.quest-menu
// requires game.feature.menu.gui.quest-hub.quest-hub-menu
// requires game.feature.menu.gui.enemies.enemy-menu
// requires game.feature.menu.gui.lore.lore-menu
// requires game.feature.menu.gui.status.status-menu
// requires game.feature.menu.gui.help.help-menu
// requires game.feature.menu.gui.museum.museum-menu
// requires game.feature.menu.gui.stats.stats-menu
// requires game.feature.menu.gui.trophy.trophy-menu
// requires game.feature.menu.gui.social.social-menu
// requires game.feature.menu.gui.trade.trader-menu
// requires game.feature.menu.gui.botanics.botanics-menu
// requires game.feature.menu.gui.arena.arena-menu
// requires game.feature.menu.gui.new-game.new-game-menu
// requires game.feature.menu.map-model

export {};

declare global {
  namespace sc {
    enum MENU_SUBMENU {
      START = 0,
      ITEMS = 1,
      SKILLS = 2,
      EQUIPMENT = 3,
      STATUS = 4,
      SYNOPSIS = 5,
      MAP = 6,
      SAVE = 7,
      OPTIONS = 8,
      SHOP = 9,
      QUESTS = 10,
      TROPHY = 11,
      LORE = 12,
      ENEMY = 13,
      SOCIAL = 14,
      STATS = 15,
      MUSEUM = 16,
      TRADE = 17,
      BOTANICS = 18,
      QUEST_HUB = 19,
      ARENA = 20,
      NEW_GAME = 21,
    }

    interface SubMenuInfo {
      Clazz: new () => sc.BaseMenu;
      name: string;
      alt?: string;
    }
    var SUB_MENU_INFO: Record<sc.MENU_SUBMENU, sc.SubMenuInfo>;

    enum MENU_LEA_STATE {
      LARGE = 0,
      SMALL = 1,
      HIDDEN = 2,
    }

    enum MENU_EQUIP_BODYPART {
      NONE = 0,
      HEAD = 1,
      RIGHT_ARM = 2,
      LEFT_ARM = 3,
      TORSO = 4,
      FEET = 5,
    }

    enum MENU_EQUIP_BODYPART_STR {
      HEAD = 'head',
      LEFT_ARM = 'leftArm',
      RIGHT_ARM = 'rightArm',
      TORSO = 'torso',
      FEET = 'feet',
    }
    enum MENU_SKILL_STATE {
      OVERVIEW = 0,
      DETAIL_VIEW = 1,
      NODE_SELECT = 2,
      NODE_MENU = 3,
      SWAP_BRANCHES = 4,
    }

    enum MENU_SHOP_TYPES {
      BUY_AND_SELL = 0,
      BUY = 1,
      SELL = 2,
      COIN = 3,
    }

    enum MENU_SHOP_STATE {
      START = 0,
      BUY = 1,
      SELL_CAT = 2,
      SELL = 3,
    }

    enum LOG_TYPES {
      QUEST = 0,
      LANDMARK = 1,
      LORE = 2,
      TROPHY = 3,
      TRADER = 4,
      STORY = 5,
      DROP = 6,
    }

    enum MENU_STATUS_PAGES {
      MAIN = 0,
      PARAMS = 1,
      MODS = 2,
      COMBAT_ARTS = 3,
    }

    enum BOTANICS_SORT_TYPE {
      ORDER = 0,
      FOUND = 1,
      NAME = 2,
    }

    var MENU_STATUS_PAGES_LENGTH: number;

    var SELL_PAGES: Array<{
      lang: string;
      type: sc.ITEMS_TYPES;
      equipType: sc.ITEMS_EQUIP_TYPES;
    }>;

    enum MENU_QUEST_HUB_TABS {
      OPEN = 0,
      ACTIVE = 1,
      FINISHED = 2,
    }

    enum MENU_ARENA_TABS {
      SOLO = 0,
      TEAM = 1,
    }

    var MAX_STAMPS_MAX: number;
    var MAX_MOD_VAL: number;

    enum TOGGLE_SET_TYPE {
      SINGLE = 'SINGLE',
      MULTI = 'MULTI',
    }

    namespace MenuModel {
      interface ShopCartEntry {
        id: sc.ItemID;
        amount: number;
        price: number;
      }

      interface LogEntry {
        type: keyof typeof sc.LOG_TYPES;
        task?: number;
        accept?: boolean;
        quest?: string;
        finish?: boolean;
        trader?: string;
        lore?: string;
      }

      type StampTypes = keyof typeof ig.ActorEntity.FACE4 | keyof typeof sc.MAP_STAMPS;
      interface Stamp {
        key: StampTypes;
        x: number;
        y: number;
        level: number;
        index: number;
      }
    }
    namespace MenuModel {
      type BackCallback = () => void;
      type HotkeyCallback = () => sc.ButtonGui;
    }

    interface MenuModel
      extends ig.GameAddon,
        sc.Model,
        ig.Vars.Accessor,
        ig.Storage.ListenerSave,
        ig.Storage.ListenerPreLoad,
        sc.NewGamePlusModel.Applier {
      guiReference: sc.MainMenu;
      infoText: Nullable<sc.TextLike>;
      buffText: Nullable<sc.TextLike>;
      buffID: sc.ItemID;
      currentMenu: sc.MENU_SUBMENU;
      previousMenu: sc.MENU_SUBMENU;
      menuStack: sc.MENU_SUBMENU[];
      buttonInteract: ig.ButtonInteractEntry;
      backCallbackStack: sc.MenuModel.BackCallback[];
      hotkeysCallbacks: sc.MenuModel.HotkeyCallback[];
      currentBackCallback: sc.MenuModel.BackCallback;
      leaState: sc.MENU_LEA_STATE;
      menuEntered: boolean;
      currentBodyPart: sc.MENU_EQUIP_BODYPART;
      previousBodyPart: Nullable<sc.MENU_EQUIP_BODYPART>;
      /** set in sc.TitleScreenButtonGui */
      exitCallback?: () => void;
      currentSkillTree: sc.ELEMENT;
      previousSkillTree: sc.ELEMENT;
      skillCursor: Vec2;
      lastSkillCursor: Vec2;
      skillRecoverPos: Vec2;
      skillCamera: Vec2;
      skillDrag: boolean;
      skillWasDragged: boolean;
      skillState: sc.MENU_SKILL_STATE;
      skillStateOrigin: sc.MENU_SKILL_STATE;
      skillCursorMoved: boolean;
      currentSkillFocus: Nullable<sc.CircuitTreeDetail.Node>;
      skillSwapCursor: Vec2;
      skillSwapMoved: boolean;
      skillSwapFocus: Nullable<sc.CircuitTreeDetail.Node>;
      mapDrag: boolean;
      mapWasDragged: boolean;
      mapCamera: Vec2;
      mapFirstVisit: boolean;
      mapUnknownArea: boolean;
      mapMouseOverFloorButtons: boolean;
      mapCursor: Vec2;
      mapLastCursor: Vec2;
      mapCursorMoved: boolean;
      mapWorldmapActive: boolean;
      mapWorldCursor: Vec2;
      mapWorldLastCursor: Vec2;
      mapWmCursorMoved: boolean;
      mapAreaFocus: sc.AreaButton;
      mapMapFocus: sc.AreaButton;
      mapWorldFirstVisit: boolean;
      mapLoading: boolean;
      mapAreaOffset: Vec2;
      mapStampMenu: boolean;
      mapStamps: Record<string, Nullable<sc.MenuModel.Stamp>[]>;
      shopID: Nullable<string>;
      shopState: sc.MENU_SHOP_STATE;
      shopCoinMode: boolean;
      shopPage: number;
      shopCart: sc.MenuModel.ShopCartEntry[];
      shopSellMode: boolean;
      itemCurrentTab: number;
      /* could be a bunch of different things */
      itemLastButtonData: unknown;
      optionCurrentTab: number;
      optionLastButtonData: sc.OptionsTabBox.ButtonData;
      optionsLocalMode: boolean;
      questCurrentTab: number;
      questLastButtonData: Nullable<sc.QuestData>;
      questInfo: Nullable<sc.QuestData>;
      questDetailMode: boolean;
      questsSeen: Record<string, boolean>;
      newGameViewMode: boolean;
      tradeToggle: boolean;
      directMode: boolean;
      directMenu: number;
      loadMode: boolean;
      loadSlotID: number;
      loadClearFilesOnly: boolean;
      loreCurrentTab: number;
      synopInfo?: Nullable<unknown>;
      newUnlocks: PartialRecord<sc.MENU_SUBMENU, string>;
      logEntries: sc.MenuModel.LogEntry[];
      gamepadIcons: boolean;
      menuHost: sc.MENU_SUBMENU;
      statusPage: sc.MENU_STATUS_PAGES;
      statusElement: sc.ELEMENT;
      statusDiff: boolean;
      drops: ig.Database.Data['drops'];
      dropCounts: Record<
        ig.Database.DropKey,
        { anim: string; count: number; time: number; completed: boolean }
      >;
      questHubID: string;
      words: ig.Database.Data['leawords'];
      helpMenuOpen: boolean;
      varsChangedOrder: number;

      dev_UnlockDrop(this: this, upToIndex: number): void;
      incrementDropCount(this: this, drop: ig.Database.DropKey, anim: string): void;
      getFoundDrops(this: this, area: string, sortType: sc.BOTANICS_SORT_TYPE): string[];
      sortDropList(this: this, drops: ig.Database.DropKey[], sortType: sc.BOTANICS_SORT_TYPE): void;
      getDropCount(this: this, drop: ig.Database.DropKey): number;
      hasAnyDropFound(this: this): boolean;
      hasAnyDropInArea(this: this, area: string): boolean | void;
      hasDropInArea(this: this, area: string): boolean | void;
      hasAnyOtherDropFound(this: this): boolean | void;
      getTotalDropsFoundAndCompleted(this: this, percentage?: boolean): number;
      getFoundDrop(this: this, drop: ig.Database.DropKey): sc.MenuModel['dropCounts'][any];
      getDropName(this: this, drop: ig.Database.DropKey): string;
      getDropArea(this: this, drop: ig.Database.DropKey): string;
      setStatusPage(this: this, status: sc.MENU_STATUS_PAGES): void;
      setStatusElement(this: this, element: sc.ELEMENT): void;
      fireStatusPageEvent(this: this): void;
      addLog(this: this, entry: sc.MenuModel.LogEntry): void;
      onReset(this: this): void;
      onVarsChanged(this: this): void;
      onPostUpdate(this: this): void;
      onLevelLoadStart(this: this): void;
      onLevelLoaded(this: this): void;
      enterStartUpMenu(this: this): void;
      addNewUnlock(this: this, type: sc.MENU_SUBMENU, entry: string): void;
      hasNewUnlock(this: this, type: sc.MENU_SUBMENU): boolean;
      hasNewUnlockKey(this: this, type: sc.MENU_SUBMENU, newUnlock: string[]): boolean;
      clearNewUnlock(this: this, type: sc.MENU_SUBMENU, eraseInsteadOfDelete?: boolean): void;
      onPreLoadDrops(this: this): void;
      addMapStamp(
        this: this,
        area: string,
        type: sc.MenuModel.StampTypes,
        x: number,
        y: number,
        level: number,
      ): number;
      editStamp(
        this: this,
        stampIndex: number,
        map: string,
        stampType: sc.MenuModel.StampTypes,
      ): void;
      removeStamp(this: this, map: string, stampIndex: number): void;
      getStamps(this: this, map: string): sc.MenuModel['mapStamps'][any];
      getStampCount(this: this, map: string): number;
      fullyEntered(this: this): void;
      addHotkey(
        this: this,
        callback: sc.MenuModel.HotkeyCallback,
        commit?: Nullable<boolean>,
      ): void;
      commitHotkeys(this: this, longTransition?: boolean): void;
      updateHotkeys(this: this): void;
      removeHotkeys(this: this): void;
      pushBackCallback(this: this, callback: sc.MenuModel.BackCallback): void;
      popBackCallback(this: this): void;
      invokeTopBackButton(this: this): void;
      pushMenu(this: this, menu: sc.MENU_SUBMENU): void;
      popMenu(this: this): void;
      enterMenu(this: this): void;
      setDirectMode(direct?: Nullable<boolean>, menu?: Nullable<sc.MENU_SUBMENU>): void;
      setHost(this: this, menuHost: sc.MENU_SUBMENU): void;
      exitMenu(this: this): void;
      invokePostExit(this: this): void;
      setInfoText(this: this, text: sc.TextLike, fade?: boolean): void;
      setBuffText(this: this, text: sc.TextLike, fade?: boolean, id?: sc.ItemID): void;
      moveLeaSprite(
        this: this,
        x: number,
        y: number,
        state: sc.MENU_LEA_STATE,
        skip?: boolean,
      ): void;
      enterTradeDetails(this: this): void;
      exitTradeDetails(this: this): void;
      setShopState(this: this, state: sc.MENU_SHOP_STATE): void;
      setShopPage(this: this, page: number): void;
      updateCart(this: this, itemID: sc.ItemID, amount: number, price: number): void;
      getTotalCost(this: this, excludeItemID?: sc.ItemID, excludePrice?: number): number;
      getItemQuantity(this: this, itemID: sc.ItemID, price: number): number;
      openShopQuantitySelect(this: this, button: sc.ShopItemButton): void;
      openCheckout(this: this): void;
      updateTotalCost(
        this: this,
        excludeItemID?: sc.ItemID,
        amount?: boolean,
        excludePrice?: number,
      ): void;
      newSlot(this: this): void;
      saveSlot(this: this, id: number): void;
      deleteSlot(this: this, id: number): void;
      loadSlot(this: this, id: number): void;
      setItemInfo(this: this, itemId: sc.ItemID): void;
      resetItemInfo(this: this): void;
      setItemTab(this: this, itemCurrentTab: number): void;
      getCurrentTabType(this: this): Nullable<sc.ITEMS_TYPES | 'NEW'>;
      getCurrentTabSubType(this: this): Nullable<sc.ITEMS_EQUIP_TYPES>;
      isItemEquipTab(this: this): boolean;
      sortList(this: this, button: ig.FocusGui): void;
      setOptionTab(this: this, tabIndex: number): void;
      getCurrentOptionCategory(this: this): Nullable<number>;
      openLanguagePopUp(this: this, option: sc.OPTION_GUIS_DEFS.LANGUAGE): void;
      setSynoTab(this: this): void;
      setSynopInfo(this: this, info: Nullable<unknown> | undefined, eventData?: boolean): void;
      setSynopFocus(this: this, button: sc.LoreEntryButton): void;
      switchSynopsisPage(this: this, direction: -1 | 1): void;
      setSynopPressed(this: this, button?: sc.ListBoxButton): void;
      setQuestTab(this: this, tab: number): void;
      setQuestInfo(this: this, questInfo: Nullable<sc.QuestData>, eventData?: boolean): void;
      enterQuestDetails(this: this, quest: sc.Quest): void;
      leaveQuestDetails(this: this): void;
      selectBodyPart(this: this, bodyPart: sc.MENU_EQUIP_BODYPART): void;
      cycleBodyPartRight(this: this): void;
      cycleBodyPartLeft(this: this): void;
      changeEquipOnCurrentBodypart(this: this, itemId: sc.ItemID): void;
      ensureCurrentValues(this: this): void;
      exitEquipMenu(this: this): void;
      showSkillEffect(
        this: this,
        gui: sc.CircuitTreeDetail.Node,
        isSwitch: boolean,
        delay?: number,
      ): void;
      showSwapSkillEffect(this: this, button: sc.CircuitSwapBranches.Button): void;
      selectSkillTree(this: this, element: sc.ELEMENT): void;
      focusCursorOnNode(
        this: this,
        x: number,
        y: number,
        skillFocus?: Nullable<sc.CircuitTreeDetail.Node>,
      ): void;
      unfocusCursor(this: this, skillFocus: Nullable<sc.CircuitTreeDetail.Node>): void;
      unfocusSwapCursor(this: this, skillFocus: Nullable<sc.CircuitTreeDetail.Node>): void;
      focusSwapCursor(
        this: this,
        x: number,
        y: number,
        skillFocus?: Nullable<sc.CircuitTreeDetail.Node>,
      ): void;
      resetSwapCursor(this: this): void;
      centerOnNode(this: this, node: Nullable<sc.CircuitTreeDetail.Node>, hasParent: boolean): void;
      centerOnNodeCam(
        this: this,
        node: sc.CircuitTreeDetail.Node,
        nodeFocus: Vec2,
        time?: number,
        callback?: () => void,
      ): void;
      exitNodeMenu(this: this, skillState?: sc.MENU_SKILL_STATE): void;
      enterSwapBranches(this: this, skillStateOrigin: sc.MENU_SKILL_STATE): void;
      leaveSwapBranches(this: this): void;
      toggledInputMode(this: this): void;
      selectFloor(this: this, floor: number): void;
      enterWorldMap(this: this): void;
      exitWorldMap(this: this): void;
      focusArea(this: this, x: number, y: number, button: sc.AreaButton, gamepad?: boolean): void;
      focusMap(this: this, x: number, y: number, button: sc.AreaButton, gamepad?: boolean): void;
      unfocusArea(this: this, button: sc.AreaButton): void;
      unfocusMap(this: this, button: sc.AreaButton): void;
      resetWorldmapCursor(this: this): void;
      loadArea(this: this, areaPath: string): void;
      setAreaLoadDone(this: this, areaPath: string): void;
      openStampMenu(this: this, stampGui: sc.StampGui): void;
      getCurrentMenuAsName(this: this): string;
      getMenuAsName(this: this, menu: sc.MENU_SUBMENU): string;
      isStart(this: this): boolean;
      isSkills(this: this): boolean;
      isEquipment(this: this): boolean;
      isStatus(this: this): boolean;
      isSynopsis(this: this): boolean;
      isMap(this: this): boolean;
      isSave(this: this): boolean;
      isOptions(this: this): boolean;
      isShop(this: this): boolean;
      isButtonInteractActive(this: this): boolean;
    }
    interface MenuModelConstructor extends ImpactClass<MenuModel> {
      new (): MenuModel;
    }
    var MenuModel: MenuModelConstructor;
    var menu: sc.MenuModel;

    enum MENU_EVENT {
      INFO_TEXT_CHANGED = 0,
      TOP_BAR_CHANGED = 1,
      TOP_BAR_UPDATE = 2,
      ENTER_MENU = 3,
      LEAVE_MENU = 4,
      EXIT_MENU = 5,
      LEA_STATE_CHANGED = 6,
      ITEM_INFO_CHANGED = 7,
      SELECTED_BODYPART = 8,
      EQUIP_CHANGED = 9,
      SKILL_TREE_SELECT = 10,
      SKILL_CURSOR_FOCUS_NODE = 11,
      SKILL_CURSOR_UNFOCUS_NODE = 12,
      SKILL_NODE_SELECT = 13,
      SKILL_NODE_EXIT = 14,
      SKILL_ENTER_SWAP_BRANCHES = 15,
      SKILL_LEAVE_SWAP_BRANCHES = 16,
      SKILL_TOGGLED_INPUT_MODE = 17,
      SKILL_ENSURE_GAMEPAD_FOCUS = 18,
      ITEM_CHANGED_TAB = 19,
      MAP_CHANGED_FLOOR = 20,
      OPTION_CHANGED_TAB = 21,
      SORT_LIST = 22,
      ITEM_RESET_INFO = 23,
      SET_BUFF_INFO = 24,
      QUEST_CHANGED_TAB = 25,
      QUEST_SET_INFO = 26,
      QUEST_ENTER_DEAILS = 27,
      QUEST_LEAVE_DEAILS = 28,
      MAP_WORLDMAP_STATE = 29,
      MAP_FOCUS_AREA = 30,
      MAP_FOCUS_MAP = 31,
      MAP_UNFOCUS = 32,
      MAP_ENSURE_FOCUS = 33,
      MAP_AREA_LOAD = 34,
      MAP_AREA_LOAD_DONE = 35,
      SAVE_NEW_SLOT = 36,
      SAVE_UPDATE_SLOT = 37,
      SAVE_DELETE_SLOT = 38,
      SYNO_CHANGED_TAB = 39,
      SYNOP_SET_INFO = 40,
      SYNOP_SWITCH_PAGE = 41,
      SYNOP_BUTTON_PRESS = 42,
      SKILL_SWAP_FOCUS = 43,
      SKILL_SWAP_UNFOCUS = 44,
      SKILL_SWAP_ENSURE = 45,
      SHOP_STATE_CHANGED = 46,
      SHOP_PAGE_CHANGED = 47,
      SHOP_CART_CHANGED = 48,
      SHOP_OPEN_QUANTITY = 49,
      SHOP_OPEN_CHECKOUT = 50,
      TRADE_TOGGLE_DETAILS = 51,
      STATUS_SET_PAGE = 52,
      STATUS_SET_ELEMENT = 53,
      DROP_COMPLETED = 54,
      REMOVE_HOTKEYS = 55,
      EQUIP_ENSURE_CURRENT_VALUES = 56,
      MAP_OPEN_STAMPS = 57,
      MAP_UPDATE_STAMP = 58,
      SYNOP_FOCUS = 59,
      OPTION_LANG_POP_UP = 60,
      SKILL_SHOW_EFFECT = 61,
      CIRCUIT_FOCUS_CAM = 62,
      SKILL_SHOW_EFFECT_SWAP = 63,
      POST_EXIT = 99,
      FULL_MENU_ENTER = 100,
    }

    namespace MenuHelper {
      function drawLevel(
        level: number,
        width: number,
        height: number,
        numberGfx: ig.Image,
        isScalable: boolean,
      ): void;
    }
  }
}
