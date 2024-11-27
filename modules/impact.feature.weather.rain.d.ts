// requires impact.base.game
// requires impact.base.entity-pool

export {};

declare global {
  namespace ig {
    interface RainStrength {
      pattern: number;
      move: Vec2;
      duration: number;
      wait: number;
      dropsPerSecond: number;
      sound: Nullable<ig.Sound>;
      alpha?: number;
      fade?: number;
    }

    interface RAIN_STRENGTH {
      NONE: null;
      DRIZZLE: RainStrength;
      WEAK: RainStrength;
      MEDIUM: RainStrength;
      STRONG: RainStrength;
      SNOW_WEAK: RainStrength;
      SNOW_MEDIUM: RainStrength;
      SANDSTORM_WEAK: RainStrength;
      SANDSTORM_NERD: RainStrength;
    }
    var RAIN_STRENGTH: RAIN_STRENGTH;

    namespace Rain {
      interface Entry {
        timer: number;
        maxTime: number;
        pos: Vec2;
        move: Vec2;
        alpha: number;
        fade: number;
        pattern: number;
      }
    }
    interface Rain extends ig.Class {
      gfx: ig.ImagePatternSheet;
      strength: ig.RainStrength;
      entries: ig.Rain.Entry[];
      timer: number;
      dropTimer: number;
      updateSound: number;
      currentSound?: ig.Sound;
      soundHandle?: ig.SoundHandle;

      setRain(this: this, strength: ig.RainStrength, resetEntries?: boolean): void;
      clearRain(this: this, resetEntries?: boolean): void;
      onReset(this: this): void;
      update(this: this): void;
      spawnRain(this: this): void;
      spawnRainDrop(this: this): void;
      moveRain(this: this): void;
      draw(this: this): void;
    }
    interface RainConstructor extends ImpactClass<Rain> {
      new (): Rain;
    }
    var Rain: RainConstructor;
  }
}
