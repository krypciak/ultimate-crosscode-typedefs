// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.menu.gui.menu-misc
// requires game.feature.menu.gui.circuit.circuit-misc
// requires game.feature.menu.gui.circuit.circuit-detail-elements
// requires game.feature.menu.gui.circuit.circuit-overview
// requires game.feature.menu.gui.circuit.circuit-effect-display

export {};

declare global {
  namespace sc {
    namespace CircuitTreeDetail {
      interface Node extends ig.FocusGui {
        gfx: ig.Image;
        icons: ig.Image;
        parentGui: unknown;
        element: sc.ELEMENT;
        skill: unknown;
        branchSkill: unknown[];
        coords: Vec2 & { w: number; h: number };
        dirX: number;
        dirY: number;
        centerPos: number;
        orBranchIndex: number;
        orLevels: unknown;
        orLeft: boolean;
        blocked: boolean;
        blockID: number;
        submitSound: ig.Sound;
        blockedSound: ig.Sound;
        _iconAlpha: number;
        _player: sc.PlayerModel;
        _buttonGroup?: Nullable<sc.CircuitDetailButtonGroup>

        updateIconAlpha(this: this): void;
        getOffsetX(this: this): number;
        getOffsetY(this: this): number;
        getDistanceToCursor(this: this): number;
        onButtonPress(this: this): void;
        onMouseInteract(this: this, mouseOver: boolean, clicked: boolean): void;
        getNodeFocus(this: this, pos: Vec2): Vec2;
        _hasParent(this: this, node: sc.CircuitTreeDetail.Node): boolean;
        _checkParentForBlock(this: this, parentNode: sc.CircuitTreeDetail.Node): boolean;
        _calculateAlpha(this: this, parentNode: sc.CircuitTreeDetail.Node, alpha: number): number;
      }
      interface NodeConstructor extends ImpactClass<Node> {
        new (
          posX: number,
          posY: number,
          dirX: number,
          dirY: number,
          skill: sc.CircuitTreeDetail.Node['skill'],
          element: sc.ELEMENT,
          orSkill: unknown,
          buttonGroup: sc.CircuitTreeDetail.Node['_buttonGroup'],
          startUid: number,
          parentGui: Nullable<unknown>,
          orBranchIndex?: number,
          orLevels?: sc.CircuitTreeDetail.Node['orLevels'],
          orLeft?: boolean,
        ): Node;
      }
      var Node: NodeConstructor;
    }
  }
}
