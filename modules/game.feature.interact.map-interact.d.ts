// requires impact.base.game
// requires game.feature.model.game-model
// requires game.feature.interact.gui.interact-gui

export {};

declare global {
  namespace sc {
    enum INTERACT_ENTRY_STATE {
      HIDDEN = 0,
      AWAY = 1,
      NEAR = 2,
      BLOCKED = 3,
      FOCUS = 4,
      RUNNING = 5,
    }
    enum INTERACT_Z_CONDITION {
      SAME_Z = 1,
      Z_RANGE_OVERLAP = 2
    }

    interface MapInteractIcon extends ig.Class {}
    interface MapInteractIconConstructor extends ImpactClass<MapInteractIcon> {
      new (
        tilesheet: ig.TileSheet,
        anims: Partial<Record<keyof typeof sc.INTERACT_ENTRY_STATE, number[]>>,
        frameTime: number,
      ): MapInteractIcon;
    }
    var MapInteractIcon: MapInteractIconConstructor;

    interface MapInteractEntry extends ig.Class {
      entity: ig.Entity
      handler: ig.Entity
      offset: unknown
      state: sc.INTERACT_ENTRY_STATE
      icon: sc.MapInteractIcon
      interrupting: boolean
      zCondition: sc.INTERACT_Z_CONDITION
      gui: ig.GUI.Interact
      blockedDuringCombat: boolean

      setIcon(this: this, icon: sc.MapInteractIcon): void;
    }
    interface MapInteractEntryConstructor extends ImpactClass<MapInteractEntry> {
      new (entity: ig.Entity, handler: ig.Entity, icon: sc.MapInteractIcon,
        zCondition: sc.INTERACT_Z_CONDITION, interrupting: boolean): MapInteractEntry
    }
    var MapInteractEntry: MapInteractEntryConstructor;
  }
}
