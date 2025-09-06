// requires impact.base.entity
// requires impact.base.game
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    namespace BounceSwitchGroups {
      interface Group {
        endSwitch: Nullable<ig.ENTITY.BounceSwitch>;
        variable: string;
        blocks: ig.ENTITY.BounceBlock[];
        blockHitCount: number;
        finalHit: boolean;
        currentBall: Nullable<ig.ENTITY.Ball>;
        cameraHandle: Nullable<ig.Camera.TargetHandle>;
        overrideHandle: Nullable<ig.Camera.TargetHandle>;
      }
    }
    interface BounceSwitchGroups extends ig.GameAddon {
      groups: Record<string, sc.BounceSwitchGroups.Group>;
      effects: ig.EffectSheet;

      registerSwitch(this: this, bounceSwitch: ig.ENTITY.BounceSwitch, variable: string): void;
      registerBlock(this: this, bounceBlock: ig.ENTITY.BounceBlock): void;
      evaluateGroup(this: this, groupName: string): void;
      resetGroup(this: this, groupName: string): void;
      resolveGroup(this: this, name: string): void;
      setCameraBall(this: this, groupName: string, ball: ig.ENTITY.Ball): void;
      setCameraPos(this: this, groupName: string, pos: Vec2): void;
      resetCamera(this: this, groupName: string): void;
      isGroupBallConflict(this: this, groupName: string, entity: ig.Entity): boolean;
      isGroupResolved(this: this, groupName: string): boolean;
      isBallOfAnyGroup(this: this, groupNames: string[]): boolean;
      getEndSwitch(this: this, groupName: string): Nullable<ig.ENTITY.BounceSwitch>;
      getHitCount(this: this, groupName: string): number;
      onBlockHit(this: this, bounceBlock: ig.ENTITY.BounceBlock, ball: ig.ENTITY.Ball): number;
      onSwitchHit(this: this, bounceSwitch: ig.ENTITY.BounceSwitch, ball: ig.ENTITY.Ball): boolean;
      onDeferredUpdate(this: this): void;
      onReset(this: this): void;
      onLevelLoadStart(this: this): void;
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
