// requires impact.base.entity
// requires game.feature.interact.map-interact

export {};

declare global {
  namespace sc {
    enum PUSH_PULL_DIRECTION {
      ALL = 0,
      LEFT_RIGHT = 1,
      UP_DOWN = 2,
    }

    var PushPullSounds: Record<'Start' | 'Loop', ig.Sound>;

    type PullableEntity = ig.ENTITY.WavePushPullBlock | ig.ENTITY.PushPullBlock;
    interface PushPullable extends ig.Class {
      entity: PullableEntity;
      active: boolean;
      gripDir: keyof typeof ig.ActorEntity.FACE4;
      deferredRelease: boolean;
      interactEntry: sc.MapInteractEntry;
      interactIcons: Record<'vertical' | 'horizontal', sc.MapInteractIcon>;
      coordDelta: Vec2;
      targetPos: Vec2;
      dragState: number;
      dragSpeed: number;
      speedTimer: number;
      dustTimer: number;
      rumbleHandle: ig.Rumble.RumbleHandle;
      gripCancelTimer: number;
      soundHandle: Nullable<ig.SoundHandle>;
      navBlocker: ig.NavBlocker;
      magnetJustEnded: number;

      setActive(this: this, active: boolean): void;
      isActive(this: this): boolean;
      onInteraction(this: this): void;
      onInteractionEnd(this: this): void;
      isInteractionBlocked(this: this): boolean;
      resetPos(this: this, pos?: Vec3, noSpawnEffects?: boolean): void;
      onUpdate(this: this): void;
      checkLockIn(this: this): void;
      onKill(this: this): void;
      onDeferredUpdate(this: this): void;
      updateStateFromIdle(this: this): void;
      stopSound(this: this): void;
      cancelGrip(this: this): void;
      onInteractObjectDrop(this: this): void;
      getGripPosAndFace(this: this, dest: Vec3): Vec3;
      getMovePlayerToPushableInteractibleEntityBoxThingeeAndSetGripDir(this: this): ig.Action;
      moveBox(this: this, vx: number, vy: number): void;
      onMagnetEnd(this: this): void;
    }
    interface PushPullableConstructor extends ImpactClass<PushPullable> {
      new (entity: PullableEntity): PushPullable;
    }
    var PushPullable: PushPullableConstructor;
  }
}
