// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.interact
// requires game.feature.font.font-system
// requires game.feature.menu.gui.circuit.circuit-misc
// requires game.feature.menu.gui.menu-misc
// requires game.feature.model.options-model
// requires game.feature.skills.skills

export {};

declare global {
  namespace sc {
    interface CiruitCursor extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      focus: boolean;
      _focusTimer: number;
      _focusTime: number;
      _focusOffset: number;
      _lastDevice: number;
      _gamepadActive: boolean;

      focusOnNode(this: this, x: number, y: number): void;
      unfocus(this: this): void;
      moveTo(this: this, x: number, y: number, smooth?: boolean, time?: number): void;
      addObservers(this: this): void;
      removeObservers(this: this): void;
    }
    interface CiruitCursorConstructor extends ImpactClass<CiruitCursor> {
      new (): CiruitCursor;
    }
    var CiruitCursor: CiruitCursorConstructor;

    enum CIRCUIT_NODE_MENU_MODE {
      ACTIVATE = 0,
      SWAP = 1,
    }

    namespace CircuitNodeMenu {
      interface Skill {
        gui: sc.CircuitTreeDetail.Node;
        skill: sc.CircuitTreeDetail.Node['skill'];
        switch: boolean;
      }
    }
    interface CircuitNodeMenu extends sc.MenuPanel, sc.Model.Observer {
      ninepatch: ig.NinePatch;
      activateSound: ig.Sound;
      cost: sc.TextGui;
      costNumber: sc.NumberGui;
      costCP: sc.TextGui;
      activate: sc.ButtonGui;
      cancel: sc.ButtonGui;
      buttonGroup: sc.ButtonGroup;
      mode: sc.CIRCUIT_NODE_MENU_MODE;
      delta: Vec2;
      _scrollHook: ig.GuiHook;
      _currentFocusGui: Nullable<sc.CircuitTreeDetail.Node>;
      _maxOrSkillStep: number;
      _chainMode: boolean;

      addObservers(this: this): void;
      removeObservers(this: this): void;
      _onActivatePress(this: this): void;
      _showEffectOnBranch(this: this, node: sc.CircuitTreeDetail.Node): void;
      _chainActive(this: this, node: sc.CircuitTreeDetail.Node): void;
      _collectSkills(
        this: this,
        node: sc.CircuitTreeDetail.Node,
        destArr: sc.CircuitNodeMenu.Skill[],
        originalNode: sc.CircuitTreeDetail.Node,
      ): void;
      _setContent(this: this, chainMode?: Nullable<boolean>): void;
      _getTotalSkillCost(this: this, node: sc.CircuitTreeDetail.Node, cost: number): number;
      _onCancelPress(this: this): void;
      _enterNodeMenu(this: this, chainMode?: Nullable<boolean>): void;
      _exitNodeMenu(this: this): void;
      _onBackButtonPress(this: this): void;
      _addLine(this: this, x: number, y: number, color: string, width: number): void;
      _updatePos(this: this): void;
      _hasParent(this: this, node: sc.CircuitTreeDetail.Node): boolean;
    }
    interface CircuitNodeMenuConstructor extends ImpactClass<CircuitNodeMenu> {
      new (scrollHook: ig.GuiHook): CircuitNodeMenu;
    }
    var CircuitNodeMenu: CircuitNodeMenuConstructor;

    interface CircuitInfoBox extends sc.MenuPanel, sc.Model.Observer {
      ninepatch: ig.NinePatch;
      header: sc.TextGui;
      line: ig.ColorGui;
      text: sc.TextGui;
      special: sc.TextGui;
      cpCost: sc.TextGui;
      prevMove: Vec2;
      delta: Vec2;
      jumpFromLastSkill: Nullable<sc.CircuitTreeDetail.Node>;
      lastPos: Vec2;
      lastPosTimer: number;
      _scrollHook: ig.GuiHook;
      sizeTransition: Nullable<ig.GuiHook.SizeTransition>;
      FONT_BOX_OPTIONS: { font: ig.Font; padding: number; offset: number }[];

      addObservers(this: this): void;
      removeObservers(this: this): void;
      doSizeTransition(this: this, skipTransition?: boolean): void;
      _updatePos(this: this, interpolate?: boolean): void;
      _updateSize(this: this): void;
      _setContent(this: this): void;
      _hideInfo(this: this): void;
    }
    interface CircuitInfoBoxConstructor extends ImpactClass<CircuitInfoBox> {
      new (scrollHook: ig.GuiHook): CircuitInfoBox;
    }
    var CircuitInfoBox: CircuitInfoBoxConstructor;

    interface CircuitDetailButtonGroup extends ig.ButtonGroup {
      sounds: Record<'focus', ig.Sound>;

      cycleElements(this: this, dir: number): sc.ELEMENT;
    }
    interface CircuitDetailButtonGroupConstructor extends ImpactClass<CircuitDetailButtonGroup> {
      new (): CircuitDetailButtonGroup;
    }
    var CircuitDetailButtonGroup: CircuitDetailButtonGroupConstructor;
  }
}
