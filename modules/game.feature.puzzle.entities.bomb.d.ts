// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace BombPanel {
        interface Settings extends ig.AnimatedEntity.Settings {
          noHeatFocus?: boolean;
        }
      }
      interface BombPanel extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
        respawnTimer: number;
        bomb: Nullable<sc.BombEntity>;
        effects: { bomb: ig.EffectSheet };
        noHeatFocus?: boolean;

        onHideRequest(this: this): void;
        spawnBomb(this: this, noEffects?: boolean): void;
        hasBomb(this: this): boolean;
        onBombStart(this: this): void;
        onBombExplode(this: this): void;
      }
      interface BombPanelConstructor extends ImpactClass<BombPanel> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.BombPanel.Settings): BombPanel;
      }
      var BombPanel: BombPanelConstructor;
    }
  }
  namespace sc {
    namespace BombEntity {
      interface Settings extends ig.AnimatedEntity.Settings {
        panel?: ig.ENTITY.BombPanel;
      }
    }
    interface BombEntity extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      panel: Nullable<ig.ENTITY.BombPanel>;
      timer: number;
      combatant: Nullable<ig.ENTITY.Combatant>;
      heatMode: boolean;
      effects: {
        bomb: ig.EffectSheet;
      };
      cameraHandle: ig.Camera.TargetHandle;
      noHeatFocus: boolean;

      destroy(this: this): void;
      start(
        this: this,
        hitVel: Vec2,
        combatant: ig.ENTITY.Combatant,
        velLength?: number,
        velZ?: number,
      ): void;
      setLastSecond(this: this): void;
      explode(this: this): void;
      enterHeatMode(this: this, vel: Vec2, combatant: ig.ENTITY.Combatant): void;
      absorbFerro(this: this): void;
      ballHit(this: this, ballLike: ig.BallLike): boolean;
      onTouchGround(this: this, zVel: number): void;
      isBallAdjust(this: this): boolean;
      doBallAdjust(this: this, pos: Vec3, dir: Vec2, size: Vec3): number;
      isBallDestroyer(
        this: this,
        collPos: Vec3,
        collRes: ig.Physics.TraceResult,
        isThrowCharged?: boolean,
      ): boolean;
    }
    interface BombEntityConstructor extends ImpactClass<BombEntity> {
      new (x: number, y: number, z: number, settings: sc.BombEntity.Settings): BombEntity;
    }
    var BombEntity: BombEntityConstructor;
  }
}
