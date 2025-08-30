// requires impact.base.actor-entity
// requires impact.base.entity
// requires impact.base.game
// requires game.feature.combat.model.combat-params
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    namespace BALL_CHANGER_TYPE {
      interface CHANGE_DIR extends sc.BallChangerType {
        _wm: ig.Config;
        dir: Vec2;
        sound: ig.Sound;
      }
      interface CHANGE_DIRConstructor extends ImpactClass<CHANGE_DIR> {
        new (settings: { dir: keyof typeof ig.ActorEntity.FACE8 }): CHANGE_DIR;
      }

      /* game.feature.puzzle.entities.ball-changer */
      interface CHANGE_SPEED extends sc.BallChangerType {
        _wm: ig.Config;
        factor: number;
        waitForBallKill: boolean;
        sound: Record<'speedUp' | 'slowDown', ig.Sound>;
      }
      interface CHANGE_SPEEDConstructor extends ImpactClass<CHANGE_SPEED> {
        new (settings: { factor?: number }): CHANGE_SPEED;
      }

      /* game.feature.puzzle.entities.ball-changer */
      interface RESET_SPEED extends sc.BallChangerType {
        _wm: ig.Config;
        factor: unknown;
        sound: Record<'reset' | 'speedUp' | 'slowDown', ig.Sound>;
      }
      interface RESET_SPEEDConstructor extends ImpactClass<RESET_SPEED> {
        new (): RESET_SPEED;
      }

      /* game.feature.puzzle.entities.ball-changer */
      interface CHANGE_ELEMENT extends sc.BallChangerType {
        _wm: ig.Config;
        element: sc.ELEMENT;
        effects: ig.EffectSheet;
        fxKey: 'heatConvert' | 'coldConvert' | 'shockConvert' | 'waveConvert';
      }
      interface CHANGE_ELEMENTConstructor extends ImpactClass<CHANGE_ELEMENT> {
        new (settings: { element: Exclude<keyof typeof sc.ELEMENT, 'NEUTRAL'> }): CHANGE_ELEMENT;
      }
    }
    var BALL_CHANGER_TYPE: {
      CHANGE_DIR: sc.BALL_CHANGER_TYPE.CHANGE_DIRConstructor;
      CHANGE_SPEED: sc.BALL_CHANGER_TYPE.CHANGE_SPEEDConstructor;
      RESET_SPEED: sc.BALL_CHANGER_TYPE.RESET_SPEEDConstructor;
      CHANGE_ELEMENT: sc.BALL_CHANGER_TYPE.CHANGE_ELEMENTConstructor;
    };

    interface BallChangerType extends ig.Class {
      icon: number;
      sphereColor: number;
      flipX: boolean;
      flipY: boolean;
      centerBall: boolean;
      waitForBallKill: boolean;

      onBallTouch(this: this, ball: ig.ENTITY.Ball, ballChanger: ig.ENTITY.BallChanger): void;
    }

    type SettingsExtractor<T> = T extends { new (...args: infer S): unknown } ? S[0] : never;
    type BallChangerSettingsUnion = SettingsExtractor<
      (typeof sc.BALL_CHANGER_TYPE)[keyof typeof sc.BALL_CHANGER_TYPE]
    >;
    interface BallChangerTypeConstructor extends ImpactClass<BallChangerType> {
      new (settings: BallChangerSettingsUnion): BallChangerType;
    }
    var BallChangerType: BallChangerTypeConstructor;
  }
  namespace ig {
    namespace ENTITY {
      namespace BallChanger {
        type Settings = ig.Entity.Settings & {
          ballTime?: number;
          resetBounce?: boolean;
          condition?: string;
        } & (
            | {
                changerType: {
                  type: 'CHANGE_DIR';
                  settings: {
                    dir: keyof typeof ig.ActorEntity.FACE8;
                  };
                };
              }
            | {
                changerType: {
                  type: 'CHANGE_SPEED';
                  settings: {
                    factor?: number;
                  };
                };
              }
            | {
                changerType: {
                  type: 'RESET_SPEED';
                  settings: {};
                };
              }
            | {
                changerType: {
                  type: 'CHANGE_ELEMENT';
                  settings: {
                    element: Exclude<keyof typeof sc.ELEMENT, 'NEUTRAL'>;
                  };
                };
              }
          );
      }

      interface BallChanger extends ig.AnimatedEntity {
        isOn: boolean;
        condition: ig.VarCondition;
        changerType: sc.BallChangerType;
        disableTimer: number;
        disableBall: Nullable<ig.ENTITY.Ball>;
        ballTime: number;
        resetBounce: boolean;
        _wm: ig.Config;
        fx: { sheet: ig.EffectSheet };

        varsChanged(this: this): void;
        ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      }
      interface BallChangerConstructor extends ImpactClass<BallChanger> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.BallChanger.Settings,
        ): BallChanger;
      }
      var BallChanger: BallChangerConstructor;
    }
  }
}
