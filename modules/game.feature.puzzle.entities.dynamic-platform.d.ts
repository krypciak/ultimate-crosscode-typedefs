// requires impact.base.actor-entity
// requires impact.base.entity

export {};

declare global {
  namespace sc {
    interface DynamicPlatformTypeBase {
      size: Vec3;
      styleKey: string;
      terrain: ig.TERRAIN;
      anims: ig.AnimationSheet.Settings;
      walkAnims: {
        default?: ig.ActorEntity.WalkAnims;
        on?: ig.ActorEntity.WalkAnims;
        off?: ig.ActorEntity.WalkAnims;
      };
    }
    interface DYNAMIC_PLATFORM_TYPES {
      Large: DynamicPlatformTypeBase;
      RhombusMedium: DynamicPlatformTypeBase;
      Floating: DynamicPlatformTypeBase;
      FloatingBig: DynamicPlatformTypeBase;
      AridBig: DynamicPlatformTypeBase;
      ArWallH: DynamicPlatformTypeBase;
      ArWallV: DynamicPlatformTypeBase;
    }
    var DYNAMIC_PLATFORM_TYPES: DYNAMIC_PLATFORM_TYPES;
  }
  namespace ig.ENTITY {
    namespace DynamicPlatform {
      interface StateConfig {
        useAbsolute?: boolean;
        position: Vec3;
        keySpline: keyof typeof KEY_SPLINES;
        duration?: number;
        animation?: string;
        action?: ig.Action.Step[];
        playOnce?: boolean;
      }
      interface Settings extends ig.ActorEntity.Settings {
        platformType: keyof typeof sc.DYNAMIC_PLATFORM_TYPES;
        states: StateConfig[];
        pauseCondition: string;
        pauseAnimation: string;
        skipWait?: boolean;
      }

      interface State {
        action: Nullable<ig.Action>;
        condition: ig.VarCondition;
        config: ig.ActorConfig;
        pos: Vec3;
        startAction: ig.Action;
        startDuration: number;
        playOnce: boolean;
      }
    }
    interface DynamicPlatform extends ig.ActorEntity, ig.EffectSheet.EventCallback {
      currentState: ig.ENTITY.DynamicPlatform.State;
      states: ig.ENTITY.DynamicPlatform.State[];
      pauseCondition: ig.VarCondition;
      pauseAnimation: string;
      baseConfig: ig.ActorConfig;
      paused: boolean;
      skipWaitForAction: boolean;
      _switchState: boolean;
      _stateReached: boolean;
      fx: Record<string, ig.EffectHandle>;
      terrain: ig.TERRAIN;
      fxHideHandle?: ig.ENTITY.Effect;

      show(this: this, dontSpawnFx?: boolean): void;
      onHideRequest(this: this): void;
      update(this: this): void;
      postActionUpdate(this: this): void;
      updateStates(this: this, forcePlayCurrentState?: boolean): void;
      playCurrentState(this: this, setPos?: boolean): void;
      varsChanged(this: this): void;
      updatePause(this: this): void;
    }
    interface DynamicPlatformConstructor extends ImpactClass<DynamicPlatform> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.DynamicPlatform.Settings,
      ): DynamicPlatform;
    }
    var DynamicPlatform: DynamicPlatformConstructor;
  }
}
