// requires impact.base.game
// requires impact.base.loader

export {};

declare global {
  namespace ig {
    namespace EnvParticleSpawner {
      interface Settings {
        animSheet: ig.AnimationSheet.Settings;
        speed: number;
        speedVariance: number;
        dir: Vec2;
        randomFlip: { x: boolean; y: boolean };
        randomRotate: number;
        time: number;
        timeVariance: number;
        fadeTime: number;
        levels: { scale: number; anim: string }[];
        rotateToDir?: number;
        sineRotate?: number;
        sineRotateTime?: number;
      }
      interface EnvParticles {
        WHITE_DUST: ig.EnvParticleSpawner.Settings;
        DARK_DUST: ig.EnvParticleSpawner.Settings;
        LEAVES: ig.EnvParticleSpawner.Settings;
        GREEN_LEAVES: ig.EnvParticleSpawner.Settings;
        JUNGLE_LEAVES: ig.EnvParticleSpawner.Settings;
        BLUE_SQUARES: ig.EnvParticleSpawner.Settings;
        RED_SQUARES: ig.EnvParticleSpawner.Settings;
        SNOW_FLAKES: ig.EnvParticleSpawner.Settings;
        COLD_CRYSTALS: ig.EnvParticleSpawner.Settings;
        SAND_OUTSIDE: ig.EnvParticleSpawner.Settings;
        SANDSTORM: ig.EnvParticleSpawner.Settings;
        BEACH_GLOW: ig.EnvParticleSpawner.Settings;
        BEACH_GLOW_BIG: ig.EnvParticleSpawner.Settings;
        FINAL_GLOW: ig.EnvParticleSpawner.Settings;
        FINAL_WHIRL: ig.EnvParticleSpawner.Settings;
        FINAL_WHIRL_FAST: ig.EnvParticleSpawner.Settings;
        COAL_SPARKS: ig.EnvParticleSpawner.Settings;
        COAL_SPARKS_FAST: ig.EnvParticleSpawner.Settings;
        INFESTED_DUST: ig.EnvParticleSpawner.Settings;
        WAVE_DUST: ig.EnvParticleSpawner.Settings;
        SPOOKY_DUST: ig.EnvParticleSpawner.Settings;
        ARID_DUST_1: ig.EnvParticleSpawner.Settings;
        ARID_DUST_FAST: ig.EnvParticleSpawner.Settings;
        ARID_DUST_ELEVATOR_UP: ig.EnvParticleSpawner.Settings;
        ARID_DUST_ELEVATOR_DOWN: ig.EnvParticleSpawner.Settings;
        RHOMBUS: ig.EnvParticleSpawner.Settings;
        HACKING: ig.EnvParticleSpawner.Settings;
        STARS: ig.EnvParticleSpawner.Settings;
        SLOWDOWN: ig.EnvParticleSpawner.Settings;
      }

      interface Particle {
        duration: number;
        timer: number;
        hideTimer: number;
        pos: Vec2;
        vel: Vec2;
        roughDisplayPos: number;
      }

      interface Level {
        scale: number;
        anim: string;
        spawnInterval: number;
        spawnTimer: number;
        particles: ig.EnvParticleSpawner.Particle[];
      }
    }
    var ENV_PARTICLES: ig.EnvParticleSpawner.EnvParticles;

    interface EnvParticleSpawner extends ig.Cacheable {
      name: keyof typeof ig.ENV_PARTICLES;
      animSheet: ig.AnimationSheet;
      config: ig.EnvParticleSpawner.Settings;
      levels: ig.EnvParticleSpawner.Level[];

      onCacheCleared(this: this): void;
      _initLevels(this: this): void;
      setQuantity(this: this, quantity: number, reset?: boolean): void;
      update(this: this): void | boolean;
      getTick(this: this): number;
      spawnParticle(this: this, level: ig.EnvParticleSpawner.Level): void;
      updateParticles(this: this, level: ig.EnvParticleSpawner.Level, tick: number): void;
      draw(this: this): void;
      drawLevel(this: this, level: ig.EnvParticleSpawner.Level): void;
    }
    interface EnvParticleSpawnerConstructor extends ImpactClass<EnvParticleSpawner> {
      new (name: keyof typeof ig.ENV_PARTICLES): EnvParticleSpawner;
    }
    var EnvParticleSpawner: EnvParticleSpawnerConstructor;

    interface EnvParticles extends ig.GameAddon {
      activeSpawners: ig.EnvParticleSpawner[];
      width: number;
      height: number;
      deferredUpdateOrder: number;
      midDrawOrder: number;

      addSpawner(this: this, spawner: ig.EnvParticleSpawner, quantity: number, immediately?: boolean): void;
      clear(this: this, clearList?: boolean): void;
      onDeferredUpdate(this: this): void;
      onMidDraw(this: this): void;
    }
    interface EnvParticlesConstructor extends ImpactClass<EnvParticles> {
      new (): EnvParticles;
    }
    var EnvParticles: EnvParticlesConstructor;
    var envParticles: EnvParticles;
  }
}
