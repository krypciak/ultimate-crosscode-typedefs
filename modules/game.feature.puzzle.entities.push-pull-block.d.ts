// requires impact.base.actor-entity
// requires impact.base.entity
// requires game.feature.puzzle.components.push-pullable

export {};

declare global {
  namespace sc {
    interface PushPullType {
      size: Vec3;
      terrain: ig.TERRAIN;
      useStyleSheet?: boolean;
      anims: ig.AnimationSheet.Settings;
    }
    interface PUSH_PULL_TYPES {
      Large: PushPullType;
      BergenLeftRight: PushPullType;
      BergenUpDown: PushPullType;
      SmallTest: PushPullType;
    }
    var PUSH_PULL_TYPES: PUSH_PULL_TYPES;
  }
  namespace ig.ENTITY {
    namespace PushPullBlock {
      interface Settings extends ig.Entity.Settings {
        pushPullType: keyof typeof sc.PUSH_PULL_TYPES;
      }
    }
    interface PushPullBlock extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      _wm: ig.Config;
      effects: { sheet: ig.EffectSheet; hideHandle: Nullable<ig.ENTITY.Effect> };
      pushPullable: sc.PushPullable;
      squishRespawn: boolean;
      compressorSlow: number;
      pushPullDirection: number;
      bombSnap: boolean;

      show(this: this, dontSpawnEffects?: boolean): void;
      onHideRequest(this: this): void;
      deferredUpdate(this: this): void;
      resetPos(this: this, pos?: Vec3, noSpawnEffects?: boolean): void;
      onInteraction(this: this): void;
      onInteractionEnd(this: this): void;
      onMagnetStart(this: this): boolean;
      onMagnetEnd(this: this, spawnEffects?: boolean): void;
    }
    interface PushPullBlockConstructor extends ImpactClass<PushPullBlock> {
      new (x: number, y: number, z: number, settings: PushPullBlock.Settings): PushPullBlock;
    }
    let PushPullBlock: PushPullBlockConstructor;

    namespace WavePushPullBlock {
      interface Settings extends ig.Entity.Settings {}
    }
    interface WavePushPullBlock
      extends ig.AnimatedEntity,
        ig.Entity.Attachable,
        ig.ENTITY.WaveTeleport.Teleportable {
      phased: boolean;

      ballHit(this: this, ball: ig.ENTITY.Ball): boolean;
      resetPos(this: this, pos?: Nullable<Vec3>): void;
    }
    interface WavePushPullBlockConstructor extends ImpactClass<WavePushPullBlock> {
      new (
        x: number,
        y: number,
        z: number,
        settings: WavePushPullBlock.Settings,
      ): WavePushPullBlock;
    }
    let WavePushPullBlock: WavePushPullBlockConstructor;
  }
}
