// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    interface ElementShieldBallEntity extends ig.AnimatedEntity, ig.BallLike {}
    interface ElementShieldBallEntityConstructor extends ImpactClass<ElementShieldBallEntity> {
      new (x: number, y: number, z: number, settings: unknown): ElementShieldBallEntity;
    }
    var ElementShieldBallEntity: ElementShieldBallEntityConstructor;
  }
}
