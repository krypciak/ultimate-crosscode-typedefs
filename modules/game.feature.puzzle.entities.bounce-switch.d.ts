// requires impact.base.entity
// requires impact.base.game
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    namespace BounceSwitchGroups {
      interface Group {
        endSwitch: null;
        variable: string;
        blocks: unknown[];
        blockHitCount: number;
        finalHit: boolean;
        currentBall: Nullable<ig.ENTITY.Ball>;
        cameraHandle: null;
        overrideHandle: null;
      }
    }
    interface BounceSwitchGroups extends ig.GameAddon {
      groups: Record<string, sc.BounceSwitchGroups.Group>;

      evaluateGroup(this: this, name: string): void;
      isGroupBallConflict(this: this, groupName: string, entity: ig.Entity): boolean;
      onDeferredUpdate(this: this): void;
      getGroup(this: this, groupName: string): sc.BounceSwitchGroups.Group;
    }
    interface BounceSwitchGroupsConstructor extends ImpactClass<BounceSwitchGroups> {
      new (): BounceSwitchGroups;
    }
    var BounceSwitchGroups: BounceSwitchGroupsConstructor;
    var bounceSwitchGroups: BounceSwitchGroups;
  }
  namespace ig {
    namespace ENTITY {
      namespace BounceSwitch {
        interface Settings {
          group: string;
          variable: string;
        }
      }
      interface BounceSwitch extends ig.AnimatedEntity {
        variable: string;
        group: string;
        isOn: boolean;
        effects: ig.EffectSheet;
        sounds: Record<'hit' | 'bing' | 'fail', ig.Sound>;
        timer: number;
        cameraHandle: Nullable<ig.Camera.TargetHandle>;
        _wm: ig.Config;

        ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
        onGroupReset(this: this): void;
        onGroupResolve(this: this): void;
      }
      interface BounceSwitchConstructor extends ImpactClass<BounceSwitch> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.BounceSwitch.Settings,
        ): BounceSwitch;
      }
      var BounceSwitch: BounceSwitchConstructor;

      namespace BounceBlock {
        interface Settings {}
      }
      interface BounceBlock extends ig.AnimatedEntity {
        effects: ig.EffectSheet;
        group: string;
        blockState: 0 | 1 | 2;
        maxZHeight: number;
        timer: ig.WeightTimer;
        cameraAction: null;
        ballTime: number;
        sounds: Record<'bing', ig.Sound>;
        _wm: ig.Config;

        onGroupResolve(this: this, hide?: boolean): void;
        onGroupReset(this: this): void;
      }
      interface BounceBlockConstructor extends ImpactClass<BounceBlock> {
        new (
          x: number,
          y: number,
          z: number,
          settings: ig.ENTITY.BounceBlock.Settings,
        ): BounceBlock;
      }
      var BounceBlock: BounceBlockConstructor;
    }
  }
}
