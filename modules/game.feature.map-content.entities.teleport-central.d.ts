// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.interact.map-interact
// requires game.feature.npc.entities.npc-waypoint

export {};

declare global {
  namespace ig.ENTITY {
    namespace TeleportCentral {
      interface Settings extends ig.Entity.Settings {
        dir?: keyof typeof ig.ActorEntity.FACE4;
        effects?: boolean;
        landmark?: string;
        target?: Nullable<ig.Event.GetEntity>;
      }
    }
    interface TeleportCentral
      extends ig.Entity,
        sc.NpcRunnerSpawner.WPConnectEntity,
        sc.NpcRunnerSpawner.RunnerDestinationEntity,
        ig.ENTITY.Marker.MarkerLike,
        sc.NPCRunnerEntity.EnterableEntity {
      map: string;
      marker: string;
      effects: ig.EffectSheet;
      fxHandle: Nullable<ig.ENTITY.Effect>;
      npcRunnerEnterProb: number;
      npcRunnerExitProb: number;
      landmark?: string;
      landmarkTarget?: Nullable<ig.Event.GetEntity>;
      landmarkCondition?: ig.VarCondition;
      landmarkDetectDelay: number;
      hasEffects: boolean;
      detectType: 'CIRCLE' | 'RECT_OVERLAP';
      wpConnection: sc.WPConnection;
      closePlayerState: { isHealing: boolean; isTeleport: boolean; fxHandles: ig.ENTITY.Effect[] };
      _wm: ig.Config;

      detectClosePlayer(this: this): boolean;
    }
    interface TeleportCentralConstructor extends ImpactClass<TeleportCentral> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.TeleportCentral.Settings,
      ): TeleportCentral;
    }
    var TeleportCentral: TeleportCentralConstructor;

    namespace TeleportField {
      interface Settings extends ig.Entity.Settings {
        central?: { global: boolean; name: string };
        map: string;
        marker: string;
        dir?: keyof typeof ig.ActorEntity.FACE4;
        pseudoExit?: boolean;
        longTelCond?: string;
        gfxType:
          | 'AR'
          | 'AR_FINAL'
          | 'BERGEN_LEFT'
          | 'HEAT_RIGHT'
          | 'RHOMBUS_SQR_LEFT'
          | 'RHOMBUS_SQR_RIGHT'
          | 'RHOMBUS_SQR_STATION'
          | 'RHOMBUS_SQR_STATION_START'
          | 'SOLID'
          | 'WAVE_DOWN'
          | 'WAVE_UP';
        blockEvent?: ig.EventStepBase.Settings;
        blockEventCondition?: string;
        teleportLabel: ig.LangLabel.Data;
      }
    }
    interface TeleportField
      extends ig.AnimatedEntity,
        ig.ENTITY.Marker.MarkerLike,
        sc.NPCRunnerEntity.EnterableEntity {
      centralName: string;
      map: string;
      marker: string;
      dir: keyof typeof ig.ActorEntity.FACE4;
      glowHandle: ig.EffectHandle;
      glowFxReplace: ig.EffectHandle;
      hideFxReplace: ig.EffectHandle;
      initialized: boolean;
      longTelCond: ig.VarCondition;
      teleportIcon: sc.MapInteractIcon;
      interactEntry: sc.MapInteractEntry;
      effects: { upgrade: ig.EffectSheet; puzzle: ig.EffectSheet; teleport: ig.EffectSheet };
      blockEvent?: ig.Event;
      blockEventCondition?: ig.VarCondition;
      gfxType: unknown;

      onInteraction(this: this): void;
    }
    interface TeleportFieldConstructor extends ImpactClass<TeleportField> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.TeleportField.Settings,
      ): TeleportField;
    }
    var TeleportField: TeleportFieldConstructor;
  }
}
