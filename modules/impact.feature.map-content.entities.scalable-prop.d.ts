// requires impact.base.entity

export {};

declare global {
  namespace ig {
    namespace ScalePropSheet {
      interface PropConfig {
        /* unfinished */
        jsonINSTANCE: string;
        srcX: number;
        srcY: number;
        width: number;
        pivot: Vec2;
      }
    }
    interface ScalePropSheet extends ig.JsonLoadable {
      cacheType: string;
      entries: Record<string, ig.ScalePropSheet.PropConfig>;

      onCacheCleared(this: this): void;
      onload(this: this, data: Record<string, ig.ScalePropSheet.PropConfig>): void;
      getScalableProp(this: this, name: string): ig.ScalePropSheet.PropConfig | undefined;
    }
    interface ScalePropSheetConstructor extends ImpactClass<ScalePropSheet> {
      new (): ScalePropSheet;
    }
    var ScalePropSheet: ScalePropSheetConstructor;

    namespace ENTITY {
      namespace ScalableProp {
        namespace Settings {
          interface PropConfig {
            name: string;
            sheet: string;
            ends: { west?: string; east?: string; north?: string; south?: string } | null;
          }
        }
        interface Settings extends ig.Entity.Settings {
          size?: Vec2;
          patternOffset?: Vec2;
          timeOffset?: number;
          blockNavMap: boolean;
          hideCondition?: string;
          propConfig?: ig.ENTITY.ScalableProp.Settings.PropConfig;
        }

        interface GfxEnd {
          /* unfinished */
        }
      }

      interface ScalableProp
        extends ig.AnimatedEntity, ig.EffectSheet.EventCallback, ig.Loadable.LoadListener {
        terrain: number;
        propConfig: ig.ENTITY.ScalableProp.Settings.PropConfig;
        scalePropSheet: ig.ScalePropSheet;
        hasSize: boolean;
        gfx: ig.Image;
        patternSheet: ig.ImagePatternSheet;
        patternOffset: Vec2;
        pivot: Nullable<Vec2>;
        wallY: number;
        renderHeight: number;
        renderMode: Nullable<'source-over' | 'lighter'>;
        gfxEnds: ig.ENTITY.ScalableProp.GfxEnd[];
        animFrames: Nullable<number[]>;
        animTime: number;
        timePadding: number;
        timer: number;
        touchVar: Nullable<string>;
        _triggered: boolean;
        effects: {
          sheet: ig.EffectSheet;
          show: ig.EffectSheet;
          hide: ig.EffectSheet;
          hideHandle: ig.EffectHandle;
        };
        _wm: ig.Config;
        hideManager?: ig.EntityHideManager;

        createSkyBlock(this: this): void;
        onHideRequest(this: this): void;
        varsChanged(this: this): void;
        ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      }
      interface ScalablePropConstructor extends ImpactClass<ScalableProp> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.ScalableProp.Settings,
        ): ScalableProp;
      }
      var ScalableProp: ScalablePropConstructor;
    }
  }
}
