// requires impact.feature.weather.weather
// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SET_WEATHER {
        interface Settings {
          weather: keyof typeof ig.WEATHER_TYPES;
          immediately: boolean;
        }
      }
      interface SET_WEATHER extends ig.EventStepBase {
        weather: ig.WeatherInstance;
        _wm: ig.Config;
        immediately: boolean;

        clearCached(this: this): void;
      }
      interface SET_WEATHER_CONSTRUCTOR extends ImpactClass<SET_WEATHER> {
        new (settings: ig.EVENT_STEP.SET_WEATHER.Settings): SET_WEATHER;
      }
      var SET_WEATHER: SET_WEATHER_CONSTRUCTOR;

      namespace RESTORE_WEATHER_PARTICLES {
        interface Settings {
          immediately?: boolean;
        }
      }
      interface RESTORE_WEATHER_PARTICLES extends ig.EventStepBase {
        _wm: ig.Config;
        immediately: boolean;
      }
      interface RESTORE_WEATHER_PARTICLES_CONSTRUCTOR
        extends ImpactClass<RESTORE_WEATHER_PARTICLES> {
        new (settings: ig.EVENT_STEP.RESTORE_WEATHER_PARTICLES.Settings): RESTORE_WEATHER_PARTICLES;
      }
      var RESTORE_WEATHER_PARTICLES: RESTORE_WEATHER_PARTICLES_CONSTRUCTOR;
    }
  }
}
