export {};

declare global {
  namespace sc {
    interface BallBehavior extends ig.Class {
      onInit?(this: this, ball: ig.ENTITY.Ball): void;
      onUpdate(this: this, ball: ig.ENTITY.Ball): void;
    }
    interface BallBehaviorConstructor extends ImpactClass<BallBehavior> {
      new (): BallBehavior;
    }
    var BallBehavior: BallBehaviorConstructor;

    namespace BALL_BEHAVIOR {
      namespace FOLLOW_TARGET {
        interface Settings {
          steerDegree?: number;
          adjustTime?: number;
        }
      }
      interface FOLLOW_TARGET extends sc.BallBehavior {
        steerDegree: number;
        adjustTime: number;
        _wm: ig.Config;
      }
      interface FOLLOW_TARGETConstructor extends ImpactClass<FOLLOW_TARGET> {
        new (settings: sc.BALL_BEHAVIOR.FOLLOW_TARGET.Settings): FOLLOW_TARGET;
      }
      var FOLLOW_TARGET: FOLLOW_TARGETConstructor;

      namespace CLOSE_SELF_DESTRUCT {
        interface Settings {
          distance?: number;
        }
      }
      interface CLOSE_SELF_DESTRUCT extends sc.BallBehavior {
        distance: number;
        _wm: ig.Config;
      }
      interface CLOSE_SELF_DESTRUCTConstructor extends ImpactClass<CLOSE_SELF_DESTRUCT> {
        new (settings: sc.BALL_BEHAVIOR.CLOSE_SELF_DESTRUCT.Settings): CLOSE_SELF_DESTRUCT;
      }
      var CLOSE_SELF_DESTRUCT: CLOSE_SELF_DESTRUCTConstructor;

      namespace WIRL_SIDEWAYS {
        interface Settings {
          relWirl?: number;
          wirlTime?: number;
          delay?: number;
        }
      }
      interface WIRL_SIDEWAYS extends sc.BallBehavior {
        relWirl: number;
        wirlTime: number;
        delay: number;
        _wm: ig.Config;
      }
      interface WIRL_SIDEWAYSConstructor extends ImpactClass<WIRL_SIDEWAYS> {
        new (settings: sc.BALL_BEHAVIOR.WIRL_SIDEWAYS.Settings): WIRL_SIDEWAYS;
      }
      var WIRL_SIDEWAYS: WIRL_SIDEWAYSConstructor;

      namespace SLOW_DOWN {
        interface Settings {
          speedFactor?: number;
          startWait?: number;
          fadeOut?: number;
          fadeOutVary?: number;
          pause?: number;
          pauseVary?: number;
          fadeIn?: number;
        }
      }
      interface SLOW_DOWN extends sc.BallBehavior {
        speedFactor: number;
        startWait: number;
        fadeOut: number;
        fadeOutVary: number;
        pause: number;
        fadeIn: number;
        _wm: ig.Config;

        onInit(this: this, ball: ig.ENTITY.Ball): void;
      }
      interface SLOW_DOWNConstructor extends ImpactClass<SLOW_DOWN> {
        new (settings: sc.BALL_BEHAVIOR.SLOW_DOWN.Settings): SLOW_DOWN;
      }
      var SLOW_DOWN: SLOW_DOWNConstructor;
    }
  }
}
