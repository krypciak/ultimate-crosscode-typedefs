// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig.ENTITY {
    namespace WaterBubblePanel {
      interface Settings extends ig.Entity.Settings {
        coalCoolTime?: number;
      }
    }
    interface WaterBubblePanel extends ig.AnimatedEntity {}
    interface WaterBubblePanelConstructor extends ImpactClass<WaterBubblePanel> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.WaterBubblePanel.Settings,
      ): WaterBubblePanel;
    }
    let WaterBubblePanel: WaterBubblePanelConstructor;
  }
  namespace sc {
    namespace WaterBubbleEntity {
      interface Settings extends ig.Entity.Settings {
        panel?: Nullable<ig.ENTITY.WaterBubblePanel>;
        combatant?: ig.ENTITY.Combatant;
        target?: Nullable<ig.ActorEntity>;
        targetTime?: number;
      }
    }
    interface WaterBubbleEntity extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      panel: Nullable<ig.ENTITY.WaterBubblePanel>;
      state: number;
      timer: number;
      startZ: number;
      combatant?: ig.ENTITY.Combatant;
      heatMode: boolean;
      effects: {
        sheet: ig.EffectSheet;
        handle: Nullable<ig.ENTITY.Effect>;
        hitHandle: Nullable<ig.ENTITY.Effect>;
      };
      cameraHandle: Nullable<ig.Camera.TargetHandle>;
      noHeatFocus: boolean;
      target: Nullable<ig.ActorEntity>;

      absorbFerro(this: this): void;
      isIdle(this: this): boolean;
      followTarget(this: this, target: ig.ActorEntity, time: number): void;
      bounce(this: this, vel: Vec2, length: number): void;
      setLastSecond(this: this): void;
      instantKill(this: this): void;
      burst(this: this): void;
      steam(this: this, vec: Vec2, combatant?: ig.ENTITY.Combatant): void;
      circularSteam(this: this, combatant?: ig.ENTITY.Combatant): void;
      turnIce(this: this): void;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      isWaterBubble(this: this): boolean;
      isBallDestroyer(this: this, collPos: Vec3, collRes: { dir: Vec2 }, c?: boolean): boolean;
      isBallAdjust(this: this): boolean;
      doBallAdjust(this: this, pos: Vec3, dir: Vec2, size: Vec3, maxBounce: number): number;
    }
    interface WaterBubbleEntityConstructor extends ImpactClass<WaterBubbleEntity> {
      new (
        x: number,
        y: number,
        z: number,
        settings: sc.WaterBubbleEntity.Settings,
      ): WaterBubbleEntity;
    }
    var WaterBubbleEntity: WaterBubbleEntityConstructor;
  }
}
