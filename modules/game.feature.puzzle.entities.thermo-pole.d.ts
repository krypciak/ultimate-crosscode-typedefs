// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.combat-poi

export {};

declare global {
  namespace sc {
    enum TERMO_POLE_TYPE {
      LONG,
      LONG64,
      SHORT,
    }
  }

  namespace ig.ENTITY {
    namespace ElementPole {
      interface Settings extends ig.Entity.Settings {
        group: string;
        spawnCondition?: string;
        poleType?: keyof typeof sc.TERMO_POLE_TYPE;
      }
    }
  }
}
