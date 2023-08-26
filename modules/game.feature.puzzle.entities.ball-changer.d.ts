// requires impact.base.actor-entity
// requires impact.base.entity
// requires impact.base.game
// requires game.feature.combat.model.combat-params
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    enum BALL_CHANGER_TYPE {
        CHANGE_DIR,
        CHANGE_SPEED,
        RESET_SPEED,
        CHANGE_ELEMENT,
    }
  }
  namespace ig {
    namespace ENTITY {
      namespace BallChanger {
        interface Settings extends ig.Entity.Settings {
          ballTime?: number;
          resetBounce?: boolean;
          condition?: string;
          changerType: {
            type: sc.BALL_CHANGER_TYPE;
            options: {
              dir?: keyof typeof ig.ActorEntity.FACE8; // for use when CHANGE_DIR
              factor?: number; // for use when CHANGE_SPEED
              element?: sc.ELEMENT; // for use when CHANGE_ELEMENT
            }
          }
        }
      }
    }
  }
}
