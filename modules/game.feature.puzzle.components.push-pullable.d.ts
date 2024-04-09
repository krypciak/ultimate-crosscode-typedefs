// requires impact.base.entity
// requires game.feature.interact.map-interact

export {};

declare global {
  namespace sc {
    type PullableEntity = ig.ENTITY.WavePushPullBlock | ig.ENTITY.PushPullBlock;
    interface PushPullable extends ig.Class {
      entity: PullableEntity;
    }
    interface PushPullableConstructor extends ImpactClass<PushPullable> {
      new (entity: PullableEntity): PushPullable;
    }
    var PushPullable: PushPullableConstructor;
  }
}
