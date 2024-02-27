// requires impact.feature.gui.gui
// requires game.feature.gui.plug-in

export {};

declare global {
  namespace sc {
    interface EquipLevelOverview extends sc.MenuPanel {}
    interface EquipLevelOverviewConstructor extends ImpactClass<EquipLevelOverview> {
      new (): EquipLevelOverview;
    }
    var EquipLevelOverview: EquipLevelOverviewConstructor;

    interface BodyPartButton extends sc.ButtonGui {
      otherButton?: sc.BodyPartMouseButton;
      callback?: (focus: boolean, pressed: boolean) => void;

      setPressedAndUnFocus(this: this, value: boolean): void;
    }
    interface BodyPartButtonConstructor extends ImpactClass<BodyPartButton> {
      new (
        text: sc.TextLike,
        width?: number,
        type?: sc.ButtonGui.Type,
        keepPressed?: boolean,
        blockedSound?: ig.Sound,
      ): BodyPartButton;
    }
    var BodyPartButton: BodyPartButtonConstructor;

    interface BodyPartMouseButton extends ig.GuiElementBase {
      gfx: ig.Image;
      button: sc.BodyPartButton;
      slope: sc.SlopeLine;
      line: ig.ColorGui;
      connect: ig.ColorGui;
      end: ig.ImageGui;
      equip: sc.EquipMenuMiddleIcon;
      sizeTransition?: ig.GuiHook.SizeTransition;
      topY: number;
      bottomY: number;
      _isActiveTop: boolean;
      _hasLine: boolean;

      _focusCallback(this: this, button?: ig.FocusGui, fromMouse?: boolean): void;
      _updateSize(this: this): void;
      setEquip(
        this: this,
        offsetX: number,
        type: sc.ITEMS_EQUIP_TYPES,
        _unused?: unknown,
        dontSkipAnim?: boolean,
      ): void;
      setPressedAndUnFocus(this: this, state: boolean): void;
      moveToBottom(this: this): void;
      moveToTop(this: this): void;
      showButton(this: this): void;
      hideButton(this: this): void;
      showLine(this: this, slopeIsOnTop: boolean): void;
      hideLine(this: this, slopeIsOnTop: boolean): void;
      resetLine(this: this): void;
    }
    interface BodyPartMouseButtonConstructor extends ImpactClass<BodyPartMouseButton> {
      new (
        slopeIsOnTop?: boolean,
        slopeOffsetX?: number,
        slopeSize?: number,
        lineWidth?: number,
        topY?: number,
        slopeOffsetY?: number,
      ): BodyPartMouseButton;
    }
    var BodyPartMouseButton: BodyPartMouseButtonConstructor;

    interface EquipMenuMiddleIcon extends ig.GuiElementBase {
      gfx: ig.Image;
      menuGfx: ig.Image;
      equipIcon: ig.ImageGui;
      animTimer: number;
      animFrame: number;

      setEquip(
        this: this,
        offsetX: number,
        type: sc.ITEMS_EQUIP_TYPES,
        _unused?: unknown,
        dontSkipAnim?: boolean,
      ): void;
      getTypeIndex(this: this, type: sc.ITEMS_EQUIP_TYPES): unknown;
      update(this: this): void;
      updateDrawables(this: this, a: unknown): void;
    }
    interface EquipMenuMiddleIconConstructor extends ImpactClass<EquipMenuMiddleIcon> {
      new (): EquipMenuMiddleIcon;
    }
    var EquipMenuMiddleIcon: EquipMenuMiddleIconConstructor;
  }
}
