// requires impact.base.actor-entity
// requires impact.base.entity
// requires game.feature.puzzle.components.push-pullable

export {};

declare global {
  namespace sc {
    interface PushPullDestType {
      size: Vec3;
      terrain: ig.TERRAIN;
      useStyleSheet?: boolean;
      anims: ig.AnimationSheet.Settings;
    }
    interface PUSH_PULL_DEST_TYPES {
      DEFAULT: PushPullDestType;
    }
    var PUSH_PULL_DEST_TYPES: PUSH_PULL_DEST_TYPES;
  }
  namespace ig.ENTITY {
    namespace PushPullDest {
      interface Settings extends ig.AnimatedEntity.Settings {
        variable?: string;
        zMove?: number;
        saveType?: keyof typeof sc.PUSH_PULL_DEST_TYPES;
      }
    }
    interface PushPullDest extends ig.AnimatedEntity {
      variable: Nullable<string>;
      zMove: number;
      saveType: number;
      placedData: Nullable<{ id: number }>;
      placed: boolean;
      zStart: number;
      placeTimer: ig.WeightTimer;
      delayed: boolean;
      effects: ig.EffectSheet;
      sound: { lockIn: ig.Sound };
      _wm: ig.Config;

      onPushPullableDetect(this: this, pullable: sc.PullableEntity, destVec: Vec3): boolean;
      onPushPullablePlaced(this: this, pullable: sc.PullableEntity): void;
      savePushPullable(this: this, pullable: sc.PullableEntity): void;
      loadPushPullable(this: this): void;
      initPushPullable(this: this): void;
      _getVarName(this: this): string;
      deferredUpdate(this: this): void;
      onInteraction(this: this): void;
      onInteractionEnd(this: this): void;
    }
    interface PushPullDestConstructor extends ImpactClass<PushPullDest> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.PushPullDest.Settings,
      ): PushPullDest;
    }
    var PushPullDest: PushPullDestConstructor;
  }
}
