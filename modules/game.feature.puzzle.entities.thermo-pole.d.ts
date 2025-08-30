// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.combat-poi

export {};

declare global {
  namespace sc {
    namespace ElementPoleGroups {
      interface Group {
        currentBall: ig.ENTITY.Ball | null;
        hitCount: number;
        poles: ig.ENTITY.ElementPole[];
      }
    }

    interface ElementPoleGroups {
      getGroup(group: string): ElementPoleGroups.Group;
      onPoleHit(pole: ig.ENTITY.ElementPole, ball: ig.ENTITY.Ball, alreadyHit: boolean): boolean;
      onCancelCheck(pole: ig.ENTITY.ElementPole): boolean;
    }
    let ElementPoleGroups: ElementPoleGroups;

    enum TERMO_POLE_TYPE {
      LONG,
      LONG64,
      SHORT,
    }
  }

  namespace ig.ENTITY {
    namespace ElementPole {}
  }
  namespace ig.ENTITY {
    namespace ElementPole {
      interface Charge {
        element: sc.ELEMENT;
      }
      interface Settings extends ig.Entity.Settings {
        group: string;
        spawnCondition?: string;
        poleType?: keyof typeof sc.TERMO_POLE_TYPE;
      }
    }
    interface ElementPole extends ig.AnimatedEntity {
      group: string;
      charge: ElementPole.Charge;

      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
    }
    interface ElementPoleConstructor extends ImpactClass<ElementPole> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.ElementPole.Settings): ElementPole;
    }
    let ElementPole: ElementPoleConstructor;
  }
}
