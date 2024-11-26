// requires impact.base.event
// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface Rumble extends ig.GameAddon {
      onPostUpdate(this: this): void;
      onReset(this: this): void;
    }
    interface RumbleConstructor extends ImpactClass<Rumble> {
      RumbleHandle: ig.Rumble.RumbleHandleConstructor;
      SHAKE_POWER: ig.Rumble.SHAKE_POWER;
      SHAKE_DURATION: ig.Rumble.SHAKE_DURATION;
      new (): Rumble;
    }
    var Rumble: RumbleConstructor;
    var rumble: Rumble;

    enum RUMBLE_TYPE {
      RANDOM = 0,
      HORIZONAL = 1,
      VERTICAL = 2,
    }
    namespace Rumble {
      interface RumbleHandle extends ig.Class {
        type: number;
        name: Nullable<string | boolean>;
        power: number;
        shakeDuration: number;
        time: number;
        fade: boolean;
        offset: Vec2;
        _target: Vec2;
        _start: Vec2;
        _temp: Vec2;
        _timer: number;
        _duration: number;
        _shakeTimer: number;
        ignoreSlowDown: boolean;

        onEntityKillDetach(this: this): void;
        update(this: this): void;
        _updatePosition(this: this, power: Vec2): void;
        _lerp(this: this, target: number, start: number, alpha: number): number;
        stop(this: this): void;
        isDone(this: this): boolean;
        set(
          this: this,
          power: keyof typeof ig.Rumble.SHAKE_POWER,
          speed: keyof typeof ig.Rumble.SHAKE_DURATION,
          duration: number,
          fade?: boolean,
        ): void;
      }
      interface RumbleHandleConstructor extends ImpactClass<RumbleHandle> {
        new (
          type: keyof typeof ig.RUMBLE_TYPE,
          power: keyof typeof ig.Rumble.SHAKE_POWER,
          speed: keyof typeof ig.Rumble.SHAKE_DURATION,
          duration: number,
          fade?: boolean,
          name?: Nullable<string | boolean>,
        ): RumbleHandle;
      }
    }

    namespace Rumble {
      interface SHAKE_POWER {
        WEAKESTEST: number;
        WEAKEST: number;
        WEAKER: number;
        WEAK: number;
        MEDIUM: number;
        STRONG: number;
        STRONGER: number;
        STRONGEST: number;
        MEGA: number;
      }
      interface SHAKE_DURATION {
        SLOWEST: number;
        SLOWER: number;
        SLOW: number;
        NORMAL: number;
        FAST: number;
        FASTER: number;
        FASTEST: number;
      }
    }
  }
}
