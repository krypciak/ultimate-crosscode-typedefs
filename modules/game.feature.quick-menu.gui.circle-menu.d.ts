// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export {};

declare global {
  namespace sc {
    interface RingMenuButton extends ig.FocusGui {
      gfx: ig.Image;
      state: sc.QUICK_MENU_STATE;
      alpha: number;
      alphaTimer: number;
      endPos: Vec2;
      origin: Vec2;
      endPosActive: Vec2;
      data: string;
      submitSound: ig.Sound;
      blockedSound: ig.Sound;

      show(this: this, initDelay?: number, setPressed?: boolean): void;
      hide(this: this): void;
      activate(this: this): void;
      deactivate(this: this): void;
    }
    interface RingMenuButtonConstructor extends ImpactClass<RingMenuButton> {
      new (state: sc.QUICK_MENU_STATE, endPosX: number, endPosY: number): RingMenuButton;
    }
    var RingMenuButton: RingMenuButtonConstructor;

    interface ItemTimerOverlay extends ig.GuiElementBase {
      isActive: boolean;
      numberGui: sc.NumberGui;
      button: sc.RingMenuButton;
    }
    interface ItemTimerOverlayConstructor extends ImpactClass<ItemTimerOverlay> {
      new (button: sc.RingMenuButton): ItemTimerOverlay;
    }
    var ItemTimerOverlay: ItemTimerOverlayConstructor;

    interface QuickMenuButtonGroup extends ig.ButtonGroup {
      setButtons(
        this: this,
        button1: sc.RingMenuButton,
        button2: sc.RingMenuButton,
        button3: sc.RingMenuButton,
        button4: sc.RingMenuButton,
      ): void;
      isNonMouseMenuInput(this: this): boolean;
      doButtonTraversal(this: this, focusRegained?: boolean): void;
      focusCurrentButton(
        this: this,
        newX: number,
        newY: number,
        ignoreCallbacks?: boolean,
        ignoreSounds?: boolean,
        ignoreIfSame?: boolean,
      ): void;
      hasCD(this: this, buttonIndex: number): boolean;
    }
    interface QuickMenuButtonGroupConstructor extends ImpactClass<QuickMenuButtonGroup> {
      new (): QuickMenuButtonGroup;
    }
    var QuickMenuButtonGroup: QuickMenuButtonGroupConstructor;

    interface QuickRingMenu extends ig.GuiElementBase, sc.Model.Observer {
      buttongroup: sc.QuickMenuButtonGroup;
      items: sc.RingMenuButton;
      map: sc.RingMenuButton;
      check: sc.RingMenuButton;
      party: sc.RingMenuButton;
      buttons: sc.RingMenuButton[];

      enter(this: this): void;
      exit(this: this): void;
      show(this: this): void;
      hide(this: this): void;
      createButtons(this: this): void;
      _unfocusAll(this: this): void;
      _createRingButton(
        this: this,
        name: string,
        entry: sc.QUICK_MENU_STATE,
        angles: Vec2[],
      ): sc.RingMenuButton;
      _updatePos(this: this): void;
      _setStateActive(this: this, entry: sc.QUICK_MENU_STATE): void;
    }
    interface QuickRingMenuConstructor extends ImpactClass<QuickRingMenu> {
      new (): QuickRingMenu;
    }
    var QuickRingMenu: QuickRingMenuConstructor;
  }
}
