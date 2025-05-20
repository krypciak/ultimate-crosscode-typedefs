// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    namespace COMBAT_SWEEPS {
      interface Force {
        radius: number;
        zHeight: number;
        centralAngle: number;
        duration: number;
        attack: sc.AttackInfo.AttackSettings;
        checkCollision?: boolean;
        alwaysFull?: boolean;
      }
      interface Base {
        sheet: ig.EffectSheet;
        keys: string[];
        fxRotOffset?: Vec2;
        fxDuration?: number;
        force: Force;
      }
    }
    interface COMBAT_SWEEPS {
      SPHEROMANCER: sc.COMBAT_SWEEPS.Base;
      SPHEROMANCER_FINISHER: sc.COMBAT_SWEEPS.Base;
      TRIBLADER: sc.COMBAT_SWEEPS.Base;
      TRIBLADER_FINISHER: sc.COMBAT_SWEEPS.Base;
      QUADROGUARD: sc.COMBAT_SWEEPS.Base;
      QUADROGUARD_FINISHER: sc.COMBAT_SWEEPS.Base;
    }

    var COMBAT_SWEEPS: COMBAT_SWEEPS;
  }
}
