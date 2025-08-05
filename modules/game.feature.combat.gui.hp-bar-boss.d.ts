// requires impact.feature.gui.gui
// requires impact.feature.gui.base.box

export {};

declare global {
  namespace sc {
    interface BigGenericBar extends ig.GuiElementBase {
      gfx: ig.Image;
      ninepatchOuter: ig.NinePatch;
      ninepatchInner: ig.NinePatch;
      currentValue: number;
      targetValue: number;
      flowValue: number;
      maxValue: number;
      timer: number;
      splits: unknown[];
      leftOffset: number;
      lowerColor: string;
      upperColor: string;

      setMaxValue(this: this, maxValue: number): void;
      setValue(
        this: this,
        targetValue: number,
        setImmediately?: boolean,
        noTransition?: boolean,
      ): void;
      updateBarDraw(
        this: this,
        renderer: ig.GuiRenderer,
        xOffset: number,
        width: number,
        upperColor: string,
        lowerColor: string,
        height: number,
      ): void;
    }
    interface BigGenericBarConstructor extends ImpactClass<BigGenericBar> {
      new (leftOffset: number, lowerColor: string, upperColor: string): BigGenericBar;
    }
    var BigGenericBar: BigGenericBarConstructor;

    interface BigHpBar extends sc.BigGenericBar, sc.Model.Observer {
      target: ig.ENTITY.Enemy;

      initWithParams(this: this): void;
      _isHpBarVisible(this: this): boolean;
      setHp(this: this, hp: number): void;
      updateSplits(this: this): void;
      forceRemove(this: this): void;
    }
    interface BigHpBarConstructor extends ImpactClass<BigHpBar> {
      new (target: ig.ENTITY.Enemy, leftOffset: number): BigHpBar;
    }
    var BigHpBar: BigHpBarConstructor;
  }

  namespace sc.SUB_HP_EDITOR {
    interface BOSS extends sc.BigHpBar {
      labelGui: sc.TextGui;
      listed: boolean;
      barOrder: number;

      onDetach(this: this): void;
      updatePlacement(this: this, a: unknown, b: unknown): void;
    }
    interface BOSS_CONSTRUCTOR extends ImpactClass<BOSS> {
      new (entity: ig.ENTITY.Enemy): BOSS;
    }
    var BOSS: BOSS_CONSTRUCTOR;

    interface PVP extends sc.BigHpBar {
      heads: ig.Image;
      spBGPatch: ig.NinePatch;
    }
    interface PVP_CONSTRUCTOR extends ImpactClass<PVP> {
      new (entity: ig.ENTITY.Enemy): PVP;
    }
    var PVP: PVP_CONSTRUCTOR;
  }
}
