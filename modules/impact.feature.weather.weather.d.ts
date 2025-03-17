// requires impact.base.game
// requires impact.feature.weather.clouds
// requires impact.feature.weather.fog
// requires impact.feature.weather.rain

export {};

declare global {
  namespace ig {
    namespace WeatherType {
      interface Particle {
        type: string;
        quantity: number;
      }
    }
    interface WeatherType {
      lightMapDarkness?: number;
      particles?: WeatherType.Particle[];
      glowColor?: string;
    }

    var WEATHER_TYPES: Record<string, ig.WeatherType>;

    interface WeatherInstance extends ig.Cacheable {
      name: string;
      config: ig.WeatherType;
      particleSpawners: ig.EnvParticleSpawner[];

      onCacheCleared(this: this): void;
    }
    interface WeatherInstanceConstructor extends ImpactClass<WeatherInstance> {
      new (name: string): WeatherInstance;
    }
    var WeatherInstance: WeatherInstanceConstructor;

    interface Weather extends ig.GameAddon {
      onLevelLoaded(this: this): void;
      onDeferredUpdate(this: this): void;
      onMidDraw(this: this): void;
      onReset(this: this): void;
    }
    interface WeatherConstructor extends ImpactClass<Weather> {
      new (): Weather;
    }
    var Weather: WeatherConstructor;
  }
}
