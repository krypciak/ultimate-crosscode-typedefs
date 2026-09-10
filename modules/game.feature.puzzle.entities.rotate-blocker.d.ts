// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.interact.map-interact

export {};

declare global {
  namespace sc {
    enum ROTATE_BLOCKER_DIR {
      NE = 0,
      SE = 1,
      SW = 2,
      NW = 3,
    }
  }
  namespace ig.ENTITY {
    namespace RotateBlocker {
      interface Settings extends ig.AnimatedEntity.Settings {
        dir: keyof typeof sc.ROTATE_BLOCKER_DIR;
        condition: string;
      }
    }
    interface RotateBlocker extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      _wm: ig.Config;
      active: boolean;
      currentDir: number;
      currentAngle: number;
      destAngle: number;
      turnTimer: number;
      interactIcons: {
        vertical: sc.MapInteractIcon;
      };
      effects: { sheet: ig.EffectSheet };

      onHideRequest(this: this): void;
      setActive(this: this, active: boolean, noEffects?: boolean): void;
      onInteraction(this: this): boolean;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      turn(this: this, dir: 0 | 1 | 2 | 3): void;
      varsChanged(this: this): void;
    }
    interface RotateBlockerConstructor extends ImpactClass<RotateBlocker> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.RotateBlocker.Settings,
      ): RotateBlocker;
    }
    var RotateBlocker: RotateBlockerConstructor;
  }
}
