// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    interface StatusBarEntry {
      icon: number;
      init?: Nullable<unknown>;
      barY: number;
      half?: boolean;
    }
    var STATUS_BAR_ENTRY: Record<string, StatusBarEntry> &
      Record<'BREAK' | 'BURN' | 'CHILL' | 'WEAK' | 'BRITTLE', StatusBarEntry>;
  }
  namespace ig.GUI {
    interface StatusBar extends ig.GuiElementBase, sc.Model.Observer {
      barIconTiles: ig.TileSheet;
      target: ig.ENTITY.Combatant;
      replaceTarget?: ig.ENTITY.Combatant;
      currentHp: number;
      targetHp: number;
      timer: number;
      largeTimer: number;
      subHpHandler?: Nullable<sc.BigHpBar>;
      subHpType: Nullable<'PVP' | 'BOSS'>;
      statusEntries: Record<
        keyof typeof sc.STATUS_BAR_ENTRY,
        {
          value: number;
          timer: number;
          stick?: boolean;
        }
      >;
      statusDisplayOrder: (keyof typeof sc.STATUS_BAR_ENTRY)[];

      showHpBar(this: this): boolean;
      initWithParams(this: this): void;
      updateSubHpHandler(this: this): void;
      initStatusEntries(this: this): void;
      _shiftFrontStatusDisplayOrder(
        this: this,
        statusName: keyof typeof sc.STATUS_BAR_ENTRY,
        ignoreIfStatusNameMissing?: boolean,
      ): void;
      setStatusEntry(this: this, statusName: keyof typeof sc.STATUS_BAR_ENTRY, value: number): void;
      updateStatusEntry(
        this: this,
        statusName: keyof typeof sc.STATUS_BAR_ENTRY,
        value: number,
      ): void;
      setReplaceTarget(this: this, combatant: ig.ENTITY.Combatant): void;
      setStatusEntryStick(
        this: this,
        statusName: keyof typeof sc.STATUS_BAR_ENTRY,
        shiftDisplayOrder?: boolean,
      ): void;
      clearStatusEntry(this: this, statusName: keyof typeof sc.STATUS_BAR_ENTRY): void;
      clearAllStatusEntries(this: this): void;
      setHp(this: this, hp: number, instant?: boolean): void;
      _updateStatusEntry(this: this, statusName: keyof typeof sc.STATUS_BAR_ENTRY): boolean;
      _drawHpBar(this: this, renderer: ig.GuiRenderer): void;
      drawStatusEntry(
        this: this,
        renderer: ig.GuiRenderer,
        pivotX: number,
        pivotY: number,
        statusName: keyof typeof sc.STATUS_BAR_ENTRY,
      ): void;
      remove(this: this): void;
      forceRemove(this: this): void;
    }
    interface StatusBarConstructor extends ImpactClass<StatusBar> {
      new (combatant: ig.ENTITY.Combatant): StatusBar;
    }
    var StatusBar: StatusBarConstructor;
  }
}
