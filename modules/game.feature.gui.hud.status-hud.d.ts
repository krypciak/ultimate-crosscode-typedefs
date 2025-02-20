// requires impact.feature.gui.gui
// requires game.feature.gui.hud.hp-hud
// requires game.feature.gui.hud.sp-hud
// requires game.feature.gui.hud.param-hud
// requires game.feature.gui.hud.buff-hud
// requires game.feature.gui.hud.item-timer-hud
// requires game.feature.model.options-model
// requires game.feature.gui.hud.key-hud

export {};

declare global {
  namespace sc {
    interface StatusHudGui extends ig.GuiElementBase, sc.Model.Observer, ig.Vars.Accessor {
      battleBgGui: null;
      battleSymbolGui: null;
      upperGui: sc.StatusUpperGui;
      lowerGui: sc.StatusLowerGui;
      elementBgGui: sc.StatusElementBgGui;
      elementModeGui: sc.StatusElementModeGui;
      paramGui: sc.ParamHudGui;
      partyGui: sc.PartyHudGui;
      keyHud: sc.KeyHudGui;
      elementSwitchTimer: number;
      menuMode: boolean;

      _updateVisibility(this: this): void;
      _minimizeDisplay(this: this): void;
      _minimizeDisplayFast(this: this): void;
      _enterQuickMenuMode(this: this): void;
      _enterMenuMode(this: this): void;
      _changeMenuModeVisibility(this: this, menu: sc.MENU_SUBMENU): void;
      elementSwitchDisplay(this: this): void;
      getFreeScreenMinY(this: this, x: number): number;
    }
    interface StatusHudGuiConstructor extends ImpactClass<StatusHudGui> {
      new (): StatusHudGui;
    }
    var StatusHudGui: StatusHudGuiConstructor;

    interface StatusUpperGui extends ig.GuiElementBase {}
    interface StatusUpperGuiConstructor extends ImpactClass<StatusUpperGui> {
      new (): StatusUpperGui;
    }
    let StatusUpperGui: StatusUpperGuiConstructor;

    interface StatusLowerGui extends ig.GuiElementBase, sc.Model.Observer {
      buffGui: sc.BuffHudGui;
      itemTimerGui: sc.ItemTimerHudGui;

      moveSubGui(this: this, moveMore: boolean): void;
    }
    interface StatusLowerGuiConstructor extends ImpactClass<StatusLowerGui> {
      new (): StatusLowerGui;
    }
    var StatusLowerGui: StatusLowerGuiConstructor;

    interface ElementalLoadOverlayGui extends ig.GuiElementBase {
      gfx: ig.Image;
      alphaHandler: ig.AlphaTransitionHandler;
      currentWarnMode: number;
    }
    interface ElementalLoadOverlayGuiConstructor extends ImpactClass<ElementalLoadOverlayGui> {
      new (): ElementalLoadOverlayGui;
    }
    var ElementalLoadOverlayGui: ElementalLoadOverlayGuiConstructor;

    interface StatusElementModeGui extends ig.GuiElementBase {
      gfx: ig.Image;
      timer: number;
      selectBg: boolean;
    }
    interface StatusElementModeGuiConstructor extends ImpactClass<StatusElementModeGui> {
      new (): StatusElementModeGui;
    }
    var StatusElementModeGui: StatusElementModeGuiConstructor;

    interface StatusElementBgGui extends ig.GuiElementBase {
      gfx: ig.Image;
    }
    interface StatusElementBgGuiConstructor extends ImpactClass<StatusElementBgGui> {
      new (): StatusElementBgGui;
    }
    var StatusElementBgGui: StatusElementBgGuiConstructor;
  }
}

