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

