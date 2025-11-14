// requires impact.base.entity
// requires impact.base.action

export {};

declare global {
  namespace ig {
    var ACTOR_RUN_THRESHOLD: number;

    namespace ActorConfig {
      type Data = Record<string, unknown>;
    }
    interface ActorConfig extends ig.Class {
      empty: boolean;
      data: Record<string, unknown>;
      original: unknown;

      clearOverwrite(this: this): void;
      loadFromData(this: this, src: ig.ActorConfig.Data, parentConfig?: unknown): void;
    }
    interface ActorConfigConstructor extends ImpactClass<ActorConfig> {
      new (data?: ig.ActorConfig.Data, parentConfig?: ig.ActorConfig): ActorConfig;
    }
    var ActorConfig: ActorConfigConstructor;

    enum ActorEntity$FACE4 {
      NORTH = 0,
      EAST = 1,
      SOUTH = 2,
      WEST = 3,
    }
    enum ActorEntity$FACE8 {
      NORTH = 0,
      EAST = 1,
      SOUTH = 2,
      WEST = 3,
      NORTH_EAST = 4,
      SOUTH_EAST = 5,
      SOUTH_WEST = 6,
      NORTH_WEST = 7,
    }

    namespace ActorEntity {
      interface WalkAnims {
        idle: string;
        preMove?: string;
        move?: string;
        moveRev?: string;
        moveLeft?: string;
        run?: string;
        runRev?: string;
        runLeft?: string;
        brake?: string;
        preIdle?: string;
        jump?: string;
        fall?: string;
        hover?: string;
        preHoverMove?: string;
        hoverMove?: string;
        hoverMoveRev?: string;
        land?: string;
      }
      type FACE4 = ig.ActorEntity$FACE4;
      type FACE8 = ig.ActorEntity$FACE8;

      interface Settings extends ig.AnimatedEntity.Settings {}

      interface ActionAttachedListener {
        onActionEndDetach(entity: ig.ActorEntity): void;
      }

      interface Fly {
        height: number;
        minHeight: number;
        lastZ: number;
        keepHeight: boolean;
        blocked: boolean;
      }

      interface InlineActionStackEntry {
        action: ig.Action;
        step: ig.ActionStepBase;
        reset?: boolean;
      }

      type StepData = Record<string, any>;

      interface Stashed {
        action: Nullable<ig.Action>;
        step: ig.ActionStepBase;
        timer: number;
        data: Nullable<StepData>;
        inlineStack?: ig.ActorEntity.InlineActionStackEntry[];
      }

      type Attribute = unknown;
    }

    interface ActorEntity extends ig.AnimatedEntity {
      face: Vec2;
      faceDirFixed: boolean;
      forceFaceDirFixed: boolean;
      animationFixed: boolean;
      floatHeightOnMove: number;
      fly: ig.ActorEntity.Fly;
      walkAnimsName: Nullable<string>;
      walkAnims: ig.ActorEntity.WalkAnims;
      storedWalkAnims: Record<string, ig.ActorEntity.WalkAnims>;
      currentAction: Nullable<ig.Action>;
      currentActionStep: Nullable<ig.ActionStepBase>;
      stepTimer: number;
      stepSync: number;
      stepData: ig.ActorEntity.StepData;
      keepStateAfterAction: boolean;
      inlineActionStack: ig.ActorEntity.InlineActionStackEntry[];
      stashed: ig.ActorEntity.Stashed;
      defaultConfig: ig.ActorConfig;
      jumpingEnabled: boolean;
      jumping: boolean;
      floatJump: number;
      preJumpStats: { maxVel: number; accelSpeed: number; zGravityFactor: number };
      actionAttached: ig.ActorEntity.ActionAttachedListener[];
      attributes: Record<string, ig.ActorEntity.Attribute>;
      faceToTarget: { active: boolean; offset: number; speed: number };

      hasAction(this: this): boolean;
      setDefaultConfig(this: this, config: ig.ActorConfig): void;
      setAttribute(this: this, key: string, value: ig.ActorEntity.Attribute): void;
      getAttribute(this: this, key: string): ig.ActorEntity.Attribute;
      getAttribVec2(this: this, key: string): Nullable<Vec2>;
      getAttribVec3(this: this, key: string): Nullable<Vec3>;
      getAttribString(this: this, key: string): Nullable<string>;
      getAttribCondition(this: this, key: string): Nullable<ig.VarCondition>;
      setFace(this: this, dest: Vec2): void;
      getTarget(this: this): Nullable<ig.ActorEntity>;
      getFaceOffset(this: this): Nullable<Vec3>;
      setAction(
        this: this,
        action: ig.Action,
        keepState?: Nullable<boolean>,
        noStateReset?: Nullable<boolean>,
      ): void;
      forceExecuteAction(this: this): void;
      cancelAction(this: this, noActionAttachedClear?: boolean): void;
      pushInlineAction(
        this: this,
        currentAction: ig.Action,
        noNextFallback?: boolean,
        reset?: boolean,
      ): void;
      popInlineAction(this: this): void;
      stashAction(this: this, noActionAttachedClear?: boolean): void;
      hasStashedAction(this: this): boolean;
      clearStashedAction(this: this): void;
      resumeStashedAction(this: this, noStateReset?: Nullable<boolean>): void;
      cancelJump(this: this): void;
      addActionAttached(this: this, action: ig.ActorEntity.ActionAttachedListener): void;
      removeActionAttached(this: this, listener: ig.ActorEntity.ActionAttachedListener): boolean;
      clearActionAttached<T>(
        this: this,
        condition?: (listener: ig.ActorEntity.ActionAttachedListener, secondArg: T) => boolean,
        secondConditionArg?: T,
      ): void;
      setWalkAnims(this: this, configOrName: string | ig.ActorEntity.WalkAnims): void;
      storeWalkAnims(this: this, name: string, config: ig.ActorEntity.WalkAnims): void;
      update(this: this): void;
      _checkForUpwardJump(this: this): boolean;
      onTouchGround(this: this, zVel: number): void;
      _savePreJumpStats(this: this): void;
      _loadPreJumpStats(this: this): void;
      doJump(
        this: this,
        zVel: number,
        callbackHeight: number,
        maxVel?: number,
        accelSpeed?: Nullable<number>,
        ignoreSounds?: boolean,
      ): void;
      doFloatJump(this: this, floatJump: number, jumping: boolean | number, maxVel: number): void;
      onFallFromEdge(this: this, vec?: Vec2): void;
      onJump(addedHeight: number, ignoreSounds?: boolean): void;
    }
    interface ActorEntityConstructor extends ImpactClass<ActorEntity> {
      FACE4: typeof ActorEntity$FACE4;
      FACE8: typeof ActorEntity$FACE8;

      new (x: number, y: number, z: number, settings: sc.ActorEntity.Settings): ig.ActorEntity;
    }
    var ActorEntity: ActorEntityConstructor;
  }
}
