// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.numbers
// requires game.feature.menu.gui.menu-misc
// requires game.feature.skills.skilltree
// requires game.feature.player.player-model

export {};

declare global {
  namespace sc {
    enum LINE_DRAW_TYPE {
      HORZ = 1,
      VERT = 2,
      SLOPE = 3,
    }
    enum TREE_CARDINAL_DIR {
      NORTH = 0,
      EAST = 2,
      SOUTH = 4,
      WEST = 6,
      NORTH_EAST = 1,
      SOUTH_EAST = 3,
      SOUTH_WEST = 5,
      NORTH_WEST = 7,
    }

    interface CircuitSwapCursor extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      focusOffset: Vec2;
      focus: boolean;
      _focusTimer: number;
      _focusTime: number;
      _focusOffset: number;
      _lastDevice: number;
      _gamepadActive: boolean;
      _worldmap: boolean;
      _ignoreModel: boolean;

      focusOnNode(this: this, x: number, y: number): void;
      unfocus(this: this): void;
      resetFocusTimer(this: this): void;
      moveTo(
        this: this,
        x: number,
        y: number,
        forceNoGamepad?: boolean,
        skipTransition?: boolean,
      ): void;
    }
    interface CircuitSwapCursorConstructor extends ImpactClass<CircuitSwapCursor> {
      new (): CircuitSwapCursor;
    }
    var CircuitSwapCursor: CircuitSwapCursorConstructor;

    namespace CrossPointsOverview {
      namespace Entry {
        interface AlphaTransition {
          startAlpha: number;
          alpha: number;
          time: number;
          timeFunction: KeySpline;
          timer: number;
        }
      }
      interface Entry extends ig.GuiElementBase {
        elementGfx: ig.Image;
        gfx: ig.Image;
        number: sc.NumberGui;
        alphaTransition: Nullable<sc.CrossPointsOverview.Entry.AlphaTransition>;
        element: sc.ELEMENT;
        preElement: sc.ELEMENT;
        alpha: number;

        updatePoints(this: this): void;
        hideIcon(this: this, time: number, setAlphaDirectly?: boolean): void;
        showIcon(
          this: this,
          preElement: sc.ELEMENT,
          time: number,
          setAlphaDirectly?: boolean,
        ): void;
        doIconTransition(this: this, alpha: number, time: number, setAlphaDirectly?: boolean): void;
      }
      interface EntryConstructor extends ImpactClass<Entry> {
        new (element: sc.ELEMENT): Entry;
      }
    }
    interface CrossPointsOverview extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      sizeTransition: Nullable<ig.GuiHook.SizeTransition>;
      points: sc.CrossPointsOverview.Entry[];
      background: sc.MenuPanel;
      leftButton: sc.ButtonGui;
      rightButton: sc.ButtonGui;
      currentElement: sc.ELEMENT | -1;
      minimized: boolean;
      _elementCount: number;

      doSizeTransition(
        this: this,
        width: Nullable<number>,
        height: Nullable<number>,
        time: number,
        delay: Nullable<number>,
      ): void;
      _addHotkeys(this: this): void;
      _onHotkeyRight(this: this): void;
      _onHotkeyLeft(this: this): void;
      _checkHotkey(this: this): boolean;
      _circleTree(this: this, direction: number): void;
      _cycleElements(this: this, direction: number): number;
      _selectElement(this: this, element: sc.ELEMENT): void;
      _minimizeOverview(this: this, element: sc.ELEMENT): void;
      _maximizeOverview(this: this, element: sc.ELEMENT): void;
      _resetOverview(this: this): void;
      _setPositions(
        this: this,
        noSkipTransition?: boolean,
        posTransition?: boolean,
        exceptElement?: sc.ELEMENT,
      ): number;
      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this): void;
      hideMenu(this: this): void;
      exitMenu(this: this): void;
      removeHotkeys(this: this): void;
    }
    interface CrossPointsOverviewConstructor extends ImpactClass<CrossPointsOverview> {
      new (): CrossPointsOverview;
      Entry: CrossPointsOverview.EntryConstructor;
    }
    var CrossPointsOverview: CrossPointsOverviewConstructor;
  }
}
