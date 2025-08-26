// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.circuit.circuit-misc
// requires game.feature.combat.model.combat-params

import { OrBranch, SkillNode, SkillNodeBase } from '../file-types/skilltree';

export {};

declare global {
  namespace sc {
    interface CircuitMenuButtonGroup extends ig.ButtonGroup {
      repeater: ig.PressRepeater;

      setButtons(
        this: this,
        button1: sc.CircuitOverviewMenu.FocusOverlay,
        button2: sc.CircuitOverviewMenu.FocusOverlay,
        button3: sc.CircuitOverviewMenu.FocusOverlay,
        button4: sc.CircuitOverviewMenu.FocusOverlay,
        button5: sc.CircuitOverviewMenu.FocusOverlay,
      ): void;
      getRepeaterValue(this: this): string | null;
    }
    interface CircuitMenuButtonGroupConstructor extends ImpactClass<CircuitMenuButtonGroup> {
      new (): CircuitMenuButtonGroup;
    }
    var CircuitMenuButtonGroup: CircuitMenuButtonGroupConstructor;

    namespace CircuitOverviewMenu {
      namespace Tree {
        type UpdaterFunction = (element: sc.ELEMENT) => void;
        type DoneCallback = (element: sc.ELEMENT) => void;
      }
      interface Tree extends ig.GuiElementBase {
        gfx: ig.Image;
        buffer: ig.ImageAtlasFragment;
        element: sc.ELEMENT;
        needsUpdate: boolean;
        overlay: null;
        updater: sc.CircuitOverviewMenu.Tree.UpdaterFunction;
        done: sc.CircuitOverviewMenu.Tree.DoneCallback;
        _timer: number;
        _alpha: number;
        _firstTime: boolean;
      }
      interface TreeConstructor extends ImpactClass<Tree> {
        new (
          x: number,
          y: number,
          buffer: ig.ImageAtlasFragment,
          element: sc.ELEMENT,
          updaterFunction: sc.CircuitOverviewMenu.Tree.UpdaterFunction,
          doneCallback: sc.CircuitOverviewMenu.Tree.DoneCallback,
        ): Tree;
      }

      interface FocusOverlay extends ig.FocusGui {
        gfx: ig.Image;
        rotation: number;
        neutral: boolean;
        piv: Vec2;
        points: Vec2[];
        element: sc.ELEMENT;
        submitSound: ig.Sound;
        focusable: boolean;

        canPlayFocusSounds(this: this): boolean;
        isMouseOver(this: this): boolean;
      }
      interface FocusOverlayConstructor extends ImpactClass<FocusOverlay> {
        new (
          x: number,
          y: number,
          buffer: ig.ImageAtlasFragment,
          element: sc.ELEMENT,
        ): FocusOverlay;
      }

      interface TreeDrawConfig {
        element: sc.ELEMENT;
        startDir: Vec2;
        node: Vec2;
        base: Vec2;
        rotation: number;
        panels: Vec2[];
      }
    }
    interface CircuitOverviewMenu extends ig.GuiElementBase, sc.Model.Observer {
      gfx: ig.Image;
      buffers: ig.ImageAtlasFragment[];
      elements: sc.CircuitOverviewMenu.Tree[];
      buttons: sc.CircuitOverviewMenu.FocusOverlay[];
      buttonGroup: sc.CircuitMenuButtonGroup;

      onFirstTimeAnimationDone(this: this, element: sc.ELEMENT): void;
      addObservers(this: this): void;
      removeObservers(this: this): void;
      showMenu(this: this): void;
      exitMenu(this: this, skipTransition?: boolean): void;
      enterDetailView(this: this): void;
      leaveDetailView(this: this): void;
      updateAllBuffers(this: this): void;
      updateBuffer(this: this, element: sc.ELEMENT): void;
      _createTrees(this: this): void;
      _updateBufferFromFirstTime(this: this, element: sc.ELEMENT): void;
      _preDrawTree(this: this, config: sc.CircuitOverviewMenu.TreeDrawConfig): void;
      _preDrawTreeNodes(
        this: this,
        element: sc.ELEMENT,
        x: number,
        y: number,
        startDirX: number,
        startDirY: number,
      ): void;
      _preDrawTreeRecursive(
        this: this,
        element: sc.ELEMENT,
        skillNode: SkillNode,
        x: number,
        y: number,
        startDirX: number,
        startDirY: number,
      ): void;
      _drawLine(
        this: this,
        x: number,
        y: number,
        startDirX: number,
        startDirY: number,
        skillNode: SkillNode,
        element: sc.ELEMENT,
      ): void;
      _drawLineStraightLine(this: this, x: number, y: number, width: number): void;
      _drawOrBranchConnection(
        this: this,
        x: number,
        y: number,
        dir: Vec2,
        element: sc.ELEMENT,
        flip: boolean,
        orBranch: OrBranch,
        baseNode: SkillNodeBase,
      ): void;
      _rotate(this: this, type: keyof typeof sc.SKILLS_DIRECTION, x: number, y: number): Vec2;
      _getDrawingDirection(this: this, dir: Vec2): sc.LINE_DRAW_TYPE;
      isEmpty(this: this, skillNode: SkillNode): boolean;
    }
    interface CircuitOverviewMenuConstructor extends ImpactClass<CircuitOverviewMenu> {
      new (): CircuitOverviewMenu;

      Tree: sc.CircuitOverviewMenu.TreeConstructor;
      FocusOverlay: sc.CircuitOverviewMenu.FocusOverlayConstructor;
    }
    var CircuitOverviewMenu: CircuitOverviewMenuConstructor;
  }
}
