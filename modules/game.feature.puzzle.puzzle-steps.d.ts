// requires impact.base.action
// requires impact.base.event
// requires impact.base.entity

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace DESTROY_DESTRUCTIBLE {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface DESTROY_DESTRUCTIBLE extends ig.EventStepBase {
        entity: Nullable<ig.Event.GetEntity>;
        _wm: ig.Config;
      }
      interface DESTROY_DESTRUCTIBLE_CONSTRUCTOR extends ImpactClass<DESTROY_DESTRUCTIBLE> {
        new (settings: ig.EVENT_STEP.DESTROY_DESTRUCTIBLE.Settings): DESTROY_DESTRUCTIBLE;
      }
      var DESTROY_DESTRUCTIBLE: DESTROY_DESTRUCTIBLE_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace ALIGN_PUSH_PULL_POS {
        interface Settings {}
      }
      interface ALIGN_PUSH_PULL_POS extends ig.ActionStepBase {
        component: unknown;
        duration: unknown;
      }
      interface ALIGN_PUSH_PULL_POS_CONSTRUCTOR extends ImpactClass<ALIGN_PUSH_PULL_POS> {
        new (settings: ig.ACTION_STEP.ALIGN_PUSH_PULL_POS.Settings): ALIGN_PUSH_PULL_POS;
      }
      var ALIGN_PUSH_PULL_POS: ALIGN_PUSH_PULL_POS_CONSTRUCTOR;
    }
    namespace EVENT_STEP {
      namespace RESET_PUSH_PULL_POS {
        interface Settings {
          entity: ig.Event.GetEntity;
          pos?: Vec3Lvl;
        }
      }
      interface RESET_PUSH_PULL_POS extends ig.EventStepBase {
        _wm: ig.Config;
        entity: ig.Event.GetEntity;
        pos: Nullable<Vec3Lvl>;
      }
      interface RESET_PUSH_PULL_POS_CONSTRUCTOR extends ImpactClass<RESET_PUSH_PULL_POS> {
        new (settings: ig.EVENT_STEP.RESET_PUSH_PULL_POS.Settings): RESET_PUSH_PULL_POS;
      }
      var RESET_PUSH_PULL_POS: RESET_PUSH_PULL_POS_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace DO_WAVE_TELEPORT {
        interface Settings {}
      }
      interface DO_WAVE_TELEPORT extends ig.ActionStepBase {
        entity: unknown;
      }
      interface DO_WAVE_TELEPORT_CONSTRUCTOR extends ImpactClass<DO_WAVE_TELEPORT> {
        new (settings: ig.ACTION_STEP.DO_WAVE_TELEPORT.Settings): DO_WAVE_TELEPORT;
      }
      var DO_WAVE_TELEPORT: DO_WAVE_TELEPORT_CONSTRUCTOR;

      namespace THROW_BOMB {
        interface Settings {
          offset: Vec3;
          align: keyof typeof ig.ENTITY_ALIGN;
          speed?: number;
          zVel?: number;
          timeAdvance: number;
        }
      }
      interface THROW_BOMB extends ig.ActionStepBase {
        gfx: ig.Image;
        offset: Vec3;
        align: keyof typeof ig.ENTITY_ALIGN;
        speed?: number;
        zVel?: number;
        timeAdvance: number;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface THROW_BOMB_CONSTRUCTOR extends ImpactClass<THROW_BOMB> {
        new (settings: ig.ACTION_STEP.THROW_BOMB.Settings): THROW_BOMB;
      }
      var THROW_BOMB: THROW_BOMB_CONSTRUCTOR;

      namespace RAIN_BOMB {
        interface Settings {
          count: number;
          offset: Vec3;
          align: keyof typeof ig.ENTITY_ALIGN;
          area: Vec2;
          zVary: number;
        }
      }
      interface RAIN_BOMB extends ig.ActionStepBase {
        gfx: ig.Image;
        count: number;
        offset: Vec3;
        align: keyof typeof ig.ENTITY_ALIGN;
        area: Vec2;
        zVary: number;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface RAIN_BOMB_CONSTRUCTOR extends ImpactClass<RAIN_BOMB> {
        new (settings: ig.ACTION_STEP.RAIN_BOMB.Settings): RAIN_BOMB;
      }
      var RAIN_BOMB: RAIN_BOMB_CONSTRUCTOR;
    }
    namespace EVENT_STEP {
      namespace SPAWN_BOMB {
        interface Settings {
          point: Vec3Lvl;
          zHeight: number;
          zVary: number;
        }
      }
      interface SPAWN_BOMB extends ig.EventStepBase {
        gfx: ig.Image;
        pos: unknown;
        offset: unknown;
        align: unknown;
        area: unknown;
        zVary: number;
        _wm: ig.Config;
        point: Vec3Lvl;
        zHeight: number;

        clearCached(this: this): void;
      }
      interface SPAWN_BOMB_CONSTRUCTOR extends ImpactClass<SPAWN_BOMB> {
        new (settings: ig.EVENT_STEP.SPAWN_BOMB.Settings): SPAWN_BOMB;
      }
      var SPAWN_BOMB: SPAWN_BOMB_CONSTRUCTOR;

      namespace SPAWN_BUBBLE {
        interface Settings {
          point: Vec3Lvl;
        }
      }
      interface SPAWN_BUBBLE extends ig.EventStepBase {
        offset: unknown;
        _wm: ig.Config;
        point: Vec3Lvl;
      }
      interface SPAWN_BUBBLE_CONSTRUCTOR extends ImpactClass<SPAWN_BUBBLE> {
        new (settings: ig.EVENT_STEP.SPAWN_BUBBLE.Settings): SPAWN_BUBBLE;
      }
      var SPAWN_BUBBLE: SPAWN_BUBBLE_CONSTRUCTOR;

      namespace DESTROY_BOMBS {
        interface Settings {}
      }
      interface DESTROY_BOMBS extends ig.EventStepBase {
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface DESTROY_BOMBS_CONSTRUCTOR extends ImpactClass<DESTROY_BOMBS> {
        new (settings: ig.EVENT_STEP.DESTROY_BOMBS.Settings): DESTROY_BOMBS;
      }
      var DESTROY_BOMBS: DESTROY_BOMBS_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace SHOOT_BUBBLE {
        interface Settings {
          offset: Vec3;
          align: keyof typeof ig.ENTITY_ALIGN;
          duration?: number;
        }
      }
      interface SHOOT_BUBBLE extends ig.ActionStepBase {
        gfx: ig.Image;
        offset: Vec3;
        align: ig.ENTITY_ALIGN;
        speed: unknown;
        zVel: unknown;
        timeAdvance: unknown;
        _wm: ig.Config;
        duration: number;

        clearCached(this: this): void;
      }
      interface SHOOT_BUBBLE_CONSTRUCTOR extends ImpactClass<SHOOT_BUBBLE> {
        new (settings: ig.ACTION_STEP.SHOOT_BUBBLE.Settings): SHOOT_BUBBLE;
      }
      var SHOOT_BUBBLE: SHOOT_BUBBLE_CONSTRUCTOR;

      namespace SET_ELEMENT_POLE_TIMER {
        interface Settings {
          time: number;
        }
      }
      interface SET_ELEMENT_POLE_TIMER extends ig.ActionStepBase {
        _wm: ig.Config;
        time: number;
      }
      interface SET_ELEMENT_POLE_TIMER_CONSTRUCTOR extends ImpactClass<SET_ELEMENT_POLE_TIMER> {
        new (settings: ig.ACTION_STEP.SET_ELEMENT_POLE_TIMER.Settings): SET_ELEMENT_POLE_TIMER;
      }
      var SET_ELEMENT_POLE_TIMER: SET_ELEMENT_POLE_TIMER_CONSTRUCTOR;

      namespace PLACE_WAVE_TELEPORT {
        interface Settings {
          align: keyof typeof ig.ENTITY_ALIGN;
        }
      }
      interface PLACE_WAVE_TELEPORT extends ig.ActionStepBase {
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
      }
      interface PLACE_WAVE_TELEPORT_CONSTRUCTOR extends ImpactClass<PLACE_WAVE_TELEPORT> {
        new (settings: ig.ACTION_STEP.PLACE_WAVE_TELEPORT.Settings): PLACE_WAVE_TELEPORT;
      }
      var PLACE_WAVE_TELEPORT: PLACE_WAVE_TELEPORT_CONSTRUCTOR;

      namespace PLACE_TESLA_COIL {
        interface Settings {
          align: keyof typeof ig.ENTITY_ALIGN;
          teslaType: unknown;
        }
      }
      interface PLACE_TESLA_COIL extends ig.ActionStepBase {
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
      }
      interface PLACE_TESLA_COIL_CONSTRUCTOR extends ImpactClass<PLACE_TESLA_COIL> {
        new (settings: ig.ACTION_STEP.PLACE_TESLA_COIL.Settings): PLACE_TESLA_COIL;
      }
      var PLACE_TESLA_COIL: PLACE_TESLA_COIL_CONSTRUCTOR;

      namespace PLACE_ELEMENT_SHIELD {
        interface Settings {
          align: keyof typeof ig.ENTITY_ALIGN;
          element: unknown;
        }
      }
      interface PLACE_ELEMENT_SHIELD extends ig.ActionStepBase {
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
      }
      interface PLACE_ELEMENT_SHIELD_CONSTRUCTOR extends ImpactClass<PLACE_ELEMENT_SHIELD> {
        new (settings: ig.ACTION_STEP.PLACE_ELEMENT_SHIELD.Settings): PLACE_ELEMENT_SHIELD;
      }
      var PLACE_ELEMENT_SHIELD: PLACE_ELEMENT_SHIELD_CONSTRUCTOR;

      namespace WAIT_UNTIL_ELEMENT_SHIELD_USED {
        interface Settings {}
      }
      interface WAIT_UNTIL_ELEMENT_SHIELD_USED extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface WAIT_UNTIL_ELEMENT_SHIELD_USED_CONSTRUCTOR
        extends ImpactClass<WAIT_UNTIL_ELEMENT_SHIELD_USED> {
        new (
          settings: ig.ACTION_STEP.WAIT_UNTIL_ELEMENT_SHIELD_USED.Settings,
        ): WAIT_UNTIL_ELEMENT_SHIELD_USED;
      }
      var WAIT_UNTIL_ELEMENT_SHIELD_USED: WAIT_UNTIL_ELEMENT_SHIELD_USED_CONSTRUCTOR;

      namespace STOP_PLAYER_ELEMENT_SHIELD {
        interface Settings {}
      }
      interface STOP_PLAYER_ELEMENT_SHIELD extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface STOP_PLAYER_ELEMENT_SHIELD_CONSTRUCTOR
        extends ImpactClass<STOP_PLAYER_ELEMENT_SHIELD> {
        new (
          settings: ig.ACTION_STEP.STOP_PLAYER_ELEMENT_SHIELD.Settings,
        ): STOP_PLAYER_ELEMENT_SHIELD;
      }
      var STOP_PLAYER_ELEMENT_SHIELD: STOP_PLAYER_ELEMENT_SHIELD_CONSTRUCTOR;
    }
    namespace EVENT_STEP {
      namespace STOP_PLAYER_ELEMENT_SHIELD {
        interface Settings {}
      }
      interface STOP_PLAYER_ELEMENT_SHIELD extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface STOP_PLAYER_ELEMENT_SHIELD_CONSTRUCTOR
        extends ImpactClass<STOP_PLAYER_ELEMENT_SHIELD> {
        new (
          settings: ig.EVENT_STEP.STOP_PLAYER_ELEMENT_SHIELD.Settings,
        ): STOP_PLAYER_ELEMENT_SHIELD;
      }
      var STOP_PLAYER_ELEMENT_SHIELD: STOP_PLAYER_ELEMENT_SHIELD_CONSTRUCTOR;
    }
    namespace ACTION_STEP {
      namespace DO_PLATFORM_SHOCKWAVE {
        interface Settings {
          align: keyof typeof ig.ENTITY_ALIGN;
          offset: Vec3;
          height: number;
          duration: number;
          range: number;
          expandSpeed: number;
          minDistance: number;
          color?: string;
        }
      }
      interface DO_PLATFORM_SHOCKWAVE extends ig.ActionStepBase {
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
        offset: Nullable<Vec3>;
        height: number;
        range: number;
        duration: number;
        expandSpeed: number;
        minDistance: number;
        color: Nullable<string>;
      }
      interface DO_PLATFORM_SHOCKWAVE_CONSTRUCTOR extends ImpactClass<DO_PLATFORM_SHOCKWAVE> {
        new (settings: ig.ACTION_STEP.DO_PLATFORM_SHOCKWAVE.Settings): DO_PLATFORM_SHOCKWAVE;
      }
      var DO_PLATFORM_SHOCKWAVE: DO_PLATFORM_SHOCKWAVE_CONSTRUCTOR;
    }
    namespace EVENT_STEP {
      namespace FIX_SHOCKWAVE_PLATFORMS {
        interface Settings {
          pointA: Vec3Lvl;
          pointB?: Vec3Lvl;
          height: number;
          minHeight?: number;
        }
      }
      interface FIX_SHOCKWAVE_PLATFORMS extends ig.EventStepBase {
        _wm: ig.Config;
        pointA: Nullable<Vec3Lvl>;
        pointB: Nullable<Vec3Lvl>;
        height: number;
        minHeight: Nullable<number>;
      }
      interface FIX_SHOCKWAVE_PLATFORMS_CONSTRUCTOR extends ImpactClass<FIX_SHOCKWAVE_PLATFORMS> {
        new (settings: ig.EVENT_STEP.FIX_SHOCKWAVE_PLATFORMS.Settings): FIX_SHOCKWAVE_PLATFORMS;
      }
      var FIX_SHOCKWAVE_PLATFORMS: FIX_SHOCKWAVE_PLATFORMS_CONSTRUCTOR;

      namespace RELEASE_FIXED_PLATFORMS {
        interface Settings {}
      }
      interface RELEASE_FIXED_PLATFORMS extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface RELEASE_FIXED_PLATFORMS_CONSTRUCTOR extends ImpactClass<RELEASE_FIXED_PLATFORMS> {
        new (settings: ig.EVENT_STEP.RELEASE_FIXED_PLATFORMS.Settings): RELEASE_FIXED_PLATFORMS;
      }
      var RELEASE_FIXED_PLATFORMS: RELEASE_FIXED_PLATFORMS_CONSTRUCTOR;
    }
  }
}
