// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace RESET_TRADER {
        interface Settings {
          trader: string;
        }
      }
      interface RESET_TRADER extends ig.EventStepBase {
        trader: string;
        _wm: ig.Config;
      }
      interface RESET_TRADER_CONSTRUCTOR extends ImpactClass<RESET_TRADER> {
        new (settings: ig.EVENT_STEP.RESET_TRADER.Settings): RESET_TRADER;
      }
      var RESET_TRADER: RESET_TRADER_CONSTRUCTOR;

      namespace START_NPC_TRADE_MENU {
        interface Settings {
          withBranches: boolean;
        }
      }
      interface START_NPC_TRADE_MENU extends ig.EventStepBase {
        _wm: ig.Config;
        withBranches: boolean;
      }
      interface START_NPC_TRADE_MENU_CONSTRUCTOR extends ImpactClass<START_NPC_TRADE_MENU> {
        new (settings: ig.EVENT_STEP.START_NPC_TRADE_MENU.Settings): START_NPC_TRADE_MENU;
      }
      var START_NPC_TRADE_MENU: START_NPC_TRADE_MENU_CONSTRUCTOR;
    }
  }
}
