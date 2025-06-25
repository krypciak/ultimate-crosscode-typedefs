// requires impact.feature.effect.effect-sheet
// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    namespace CombatantMarble {
      interface Settings extends ig.AnimatedEntity.Settings {
        target: ig.ENTITY.EnemyCounter;
      }
    }
    interface CombatantMarble extends ig.AnimatedEntity {
      tileSheet: ig.TileSheet;
      effects: ig.EffectSheet;
      startPos: Vec2;
      startZPos: number;
      target: ig.ENTITY.EnemyCounter;
      timer: number;
      maxZHeight: number;
      maxTime: number;
      lineHandle: ig.ENTITY.Effect;
    }
    interface CombatantMarbleConstructor extends ImpactClass<CombatantMarble> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.CombatantMarble.Settings,
      ): CombatantMarble;
    }
    var CombatantMarble: CombatantMarbleConstructor;
  }
}
