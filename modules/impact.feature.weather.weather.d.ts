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
      interface SubOverlay {
        brightColor: string;
        darkColor: string;
      }
    }
    interface WeatherType {
      lightMapDarkness?: number;
      particles?: WeatherType.Particle[];
      glowColor?: string;
      subOverlay?: ig.WeatherType.SubOverlay;
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

    namespace Weather {
      interface ExtraParticle {
        spawner: ig.EnvParticleSpawner;
        count: number;
      }
      interface LightLevel {
        last: number;
        target: number;
        timer: number;
      }
    }
    interface Weather extends ig.GameAddon {
      levelWeather: ig.WeatherInstance;
      currentWeather: ig.WeatherInstance;
      clouds: ig.Clouds;
      fog: ig.Fog;
      rain: ig.Rain;
      darknessHandle: ig.DarknessHandle;
      outside: boolean;
      lightMapDarkness: ig.Weather.LightLevel;
      subOverlay: Nullable<ig.WeatherType.SubOverlay>;
      lightMapBrightness: ig.Weather.LightLevel;
      extraParticles: ig.Weather.ExtraParticle[];

      setWeather(this: this, currentWeather: ig.WeatherInstance, immediately: boolean): void;
      addExtraParticles(this: this, spawner: ig.EnvParticleSpawner, count: number): void;
      removeExtraParticles(
        this: this,
        spawner: ig.EnvParticleSpawner,
        readdSpawner?: boolean,
      ): void;
      onLevelLoadStart(this: this, data: sc.MapModel.Map): void;
      onLevelLoaded(this: this): void;
      onDeferredUpdate(this: this): void;
      onMidDraw(this: this): void;
      onReset(this: this): void;
      updateWeather(this: this, immediately: boolean): void;
      restoreParticles(this: this, immediately: boolean): void;
    }
    interface WeatherConstructor extends ImpactClass<Weather> {
      new (): Weather;
    }
    var Weather: WeatherConstructor;
    var weather: Weather;
  }
}
