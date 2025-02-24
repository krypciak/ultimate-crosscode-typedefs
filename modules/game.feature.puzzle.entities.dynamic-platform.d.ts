// requires impact.base.actor-entity
// requires impact.base.entity

export {};

declare global {
  namespace sc {
    interface DynamicPlatformTypeBase {
      size: Vec3;
      styleKey: string;
      terrain: ig.TERRAIN;
      anims: unknown;
      walkAnims: {
        default?: ig.ActorEntity.WalkAnims;
        on?: ig.ActorEntity.WalkAnims;
        off?: ig.ActorEntity.WalkAnims;
      };
    }
    var DYNAMIC_PLATFORM_TYPES: Record<
      'Large' | 'RhombusMedium' | 'Floating' | 'FloatingBig' | 'AridBig' | 'ArWallH' | 'ArWallV',
      DynamicPlatformTypeBase
    >;
  }
  namespace ig.ENTITY {
    namespace DynamicPlatform {
      interface Settings extends ig.Entity.Settings {
        platformType: keyof typeof sc.DYNAMIC_PLATFORM_TYPES;
        states: unknown;
        pauseCondition: string;
        pauseAnimation: string;
        skipWait?: boolean;
      }
    }
    interface DynamicPlatform extends ig.ActorEntity, ig.EffectSheet.EventCallback {
      currentState: unknown;
      states: unknown[];
      pauseCondition: ig.VarCondition;
      pauseAnimation: string;
      baseConfig: ig.ActorConfig;
      paused: boolean;
      skipWaitForAction: boolean;
      _switchState: boolean;
      _stateReached: boolean;
      fx: Record<string, ig.EffectHandle>;
      terrain: ig.TERRAIN
      fxHideHandle?: ig.ENTITY.Effect

      show(this: this, dontSpawnFx?: boolean): void;
      onHideRequest(this: this): void;
      update(this: this): void;
      postActionUpdate(this: this): void;
      onKill(this: this, _unused?: unknown): void;
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
      ): Destructible;
    }
    var DynamicPlatform: DynamicPlatformConstructor;
  }
}
