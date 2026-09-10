// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.combat-target-event

export {};

declare global {
  namespace ig.ENTITY {
    namespace WaveTeleport {
      interface Teleportable {
        doTeleport(this: this, portal: ig.ENTITY.WaveTeleport): void;
      }
      interface Settings extends ig.Entity.Settings {}
    }
    interface WaveTeleport
      extends
        ig.AnimatedEntity,
        ig.EffectSheet.EventCallback,
        ig.ActorEntity.ActionAttachedListener {
      effects: {
        sheet: ig.EffectSheet;
        handle: Nullable<ig.EffectHandle>;
        hideHandle: Nullable<ig.EffectHandle>;
      };
      teleportTimer: number;
      teleportTargets: ig.Entity[];
      _wm: ig.Config;
      permaRemove: boolean;
      delayedHide: boolean;

      onHideRequest(this: this): void;
      startTeleport(this: this): void;
      doTeleport(this: this): void;
      hasBlockOnTop(this: this): boolean;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      isBallDestroyer(
        this: this,
        collPos: Vec3,
        collRes: ig.Physics.TraceResult,
        isThrowCharged?: boolean,
      ): boolean;
    }
    interface WaveTeleportConstructor extends ImpactClass<WaveTeleport> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.WaveTeleport.Settings,
      ): WaveTeleport;
    }

    let WaveTeleport: WaveTeleportConstructor;
  }
}
