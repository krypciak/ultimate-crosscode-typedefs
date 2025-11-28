// requires impact.base.action
// requires impact.base.actor-entity

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {
      namespace LABEL {
        interface Settings {
          name: string;
        }
      }
      interface LABEL extends ig.ActionStepBase {
        name: string;
        _wm: ig.Config;
      }
      interface LABEL_CONSTRUCTOR extends ImpactClass<LABEL> {
        new (settings: ig.ACTION_STEP.LABEL.Settings): LABEL;
      }
      var LABEL: LABEL_CONSTRUCTOR;

      namespace GOTO_LABEL {
        interface Settings {
          name: string;
        }
      }
      interface GOTO_LABEL extends ig.ActionStepBase {
        name: string;
        _wm: ig.Config;
      }
      interface GOTO_LABEL_CONSTRUCTOR extends ImpactClass<GOTO_LABEL> {
        new (settings: ig.ACTION_STEP.GOTO_LABEL.Settings): GOTO_LABEL;
      }
      var GOTO_LABEL: GOTO_LABEL_CONSTRUCTOR;

      namespace SELECT_RANDOM {
        interface OptionConfig {
          count: number;
          weight: number;
          activeCondition?: string;
        }
        interface Option {
          count: number;
          weight: number;
          activeCondition: ig.VarCondition;
        }

        interface Settings {
          options: ig.ACTION_STEP.SELECT_RANDOM.OptionConfig[];
        }
      }
      interface SELECT_RANDOM extends ig.ActionStepBase {
        options: ig.ACTION_STEP.SELECT_RANDOM.Option;
        _wm: ig.Config;
      }
      interface SELECT_RANDOM_CONSTRUCTOR extends ImpactClass<SELECT_RANDOM> {
        new (settings: ig.ACTION_STEP.SELECT_RANDOM.Settings): SELECT_RANDOM;
      }
      var SELECT_RANDOM: SELECT_RANDOM_CONSTRUCTOR;

      namespace SELECT_FIRST {
        interface Settings {
          options: string[];
        }
      }
      interface SELECT_FIRST extends ig.ActionStepBase {
        options: unknown;
        _wm: ig.Config;
      }
      interface SELECT_FIRST_CONSTRUCTOR extends ImpactClass<SELECT_FIRST> {
        new (settings: ig.ACTION_STEP.SELECT_FIRST.Settings): SELECT_FIRST;
      }
      var SELECT_FIRST: SELECT_FIRST_CONSTRUCTOR;

      namespace RESET_ACTOR {
        interface Settings {}
      }
      interface RESET_ACTOR extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface RESET_ACTOR_CONSTRUCTOR extends ImpactClass<RESET_ACTOR> {
        new (settings: ig.ACTION_STEP.RESET_ACTOR.Settings): RESET_ACTOR;
      }
      var RESET_ACTOR: RESET_ACTOR_CONSTRUCTOR;

      namespace WAIT {
        interface Settings {
          time: ig.Event.NumberExpression;
          aggroTime?: ig.Event.NumberExpression;
          assistSlow?: boolean;
          guardTrap?: unknown;
        }
      }
      interface WAIT extends ig.ActionStepBase {
        time: ig.Event.NumberExpression;
        aggroTime: ig.Event.NumberExpression;
        _wm: ig.Config;
        assistSlow: boolean;
      }
      interface WAIT_CONSTRUCTOR extends ImpactClass<WAIT> {
        new (settings: ig.ACTION_STEP.WAIT.Settings): WAIT;
      }
      var WAIT: WAIT_CONSTRUCTOR;

      namespace WAIT_UNTIL {
        interface Settings {
          condition: string;
          maxTime?: ig.Event.NumberExpression;
        }
      }
      interface WAIT_UNTIL extends ig.ActionStepBase {
        condition: ig.VarCondition;
        _wm: ig.Config;
        maxTime?: ig.Event.NumberExpression;
      }
      interface WAIT_UNTIL_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL.Settings): WAIT_UNTIL;
      }
      var WAIT_UNTIL: WAIT_UNTIL_CONSTRUCTOR;

      namespace WAIT_RANDOM {
        interface Settings {
          minTime: number;
          maxTime: number;
        }
      }
      interface WAIT_RANDOM extends ig.ActionStepBase {
        maxTime: number;
        minTime: number;
        _wm: ig.Config;
      }
      interface WAIT_RANDOM_CONSTRUCTOR extends ImpactClass<WAIT_RANDOM> {
        new (settings: ig.ACTION_STEP.WAIT_RANDOM.Settings): WAIT_RANDOM;
      }
      var WAIT_RANDOM: WAIT_RANDOM_CONSTRUCTOR;

      namespace IF {
        interface Settings {
          condition: string;
          withElse: boolean;
        }
      }
      interface IF extends ig.ActionStepBase {
        condition: ig.VarCondition;
        withElse: boolean;
        _wm: ig.Config;
      }
      interface IF_CONSTRUCTOR extends ImpactClass<IF> {
        new (settings: ig.ACTION_STEP.IF.Settings): IF;
      }
      var IF: IF_CONSTRUCTOR;

      namespace WAIT_UNTIL_ON_GROUND {
        interface Settings {
          maxTime?: number;
          alsoBelowTarget?: boolean;
        }
      }
      interface WAIT_UNTIL_ON_GROUND extends ig.ActionStepBase {
        _wm: ig.Config;
        maxTime: number;
        alsoBelowTarget: boolean;
      }
      interface WAIT_UNTIL_ON_GROUND_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_ON_GROUND> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL_ON_GROUND.Settings): WAIT_UNTIL_ON_GROUND;
      }
      var WAIT_UNTIL_ON_GROUND: WAIT_UNTIL_ON_GROUND_CONSTRUCTOR;

      namespace WAIT_UNTIL_PLAYER_ON_TOP {
        interface Settings {
          not: boolean;
          maxTime?: number;
        }
      }
      interface WAIT_UNTIL_PLAYER_ON_TOP extends ig.ActionStepBase {
        _wm: ig.Config;
        maxTime: number;
        not: boolean;
      }
      interface WAIT_UNTIL_PLAYER_ON_TOP_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_PLAYER_ON_TOP> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL_PLAYER_ON_TOP.Settings): WAIT_UNTIL_PLAYER_ON_TOP;
      }
      var WAIT_UNTIL_PLAYER_ON_TOP: WAIT_UNTIL_PLAYER_ON_TOP_CONSTRUCTOR;

      namespace MOVE_FORWARD {
        interface Settings {
          time: number;
          collideCancel?: number;
          stopBeforeEdge: boolean;
          waitUntil?: string;
          maxTargetDistance?: number;
        }
      }
      interface MOVE_FORWARD extends ig.ActionStepBase {
        target: unknown;
        _wm: ig.Config;
        time: number;
        collideCancel?: number;
        stopBeforeEdge: boolean;
        maxTargetDistance: number;
      }
      interface MOVE_FORWARD_CONSTRUCTOR extends ImpactClass<MOVE_FORWARD> {
        new (settings: ig.ACTION_STEP.MOVE_FORWARD.Settings): MOVE_FORWARD;
      }
      var MOVE_FORWARD: MOVE_FORWARD_CONSTRUCTOR;

      namespace SLIDE_OUT {
        interface Settings {
          time: number;
          stopBeforeEdge: boolean;
        }
      }
      interface SLIDE_OUT extends ig.ActionStepBase {
        target: unknown;
        _wm: ig.Config;
        time: number;
        stopBeforeEdge: boolean;
      }
      interface SLIDE_OUT_CONSTRUCTOR extends ImpactClass<SLIDE_OUT> {
        new (settings: ig.ACTION_STEP.SLIDE_OUT.Settings): SLIDE_OUT;
      }
      var SLIDE_OUT: SLIDE_OUT_CONSTRUCTOR;

      namespace MOVE_BACKWARD {
        interface Settings {
          time: number;
          stopBeforeEdge: boolean;
        }
      }
      interface MOVE_BACKWARD extends ig.ActionStepBase {
        target: unknown;
        _wm: ig.Config;
        time: number;
        stopBeforeEdge: boolean;
      }
      interface MOVE_BACKWARD_CONSTRUCTOR extends ImpactClass<MOVE_BACKWARD> {
        new (settings: ig.ACTION_STEP.MOVE_BACKWARD.Settings): MOVE_BACKWARD;
      }
      var MOVE_BACKWARD: MOVE_BACKWARD_CONSTRUCTOR;

      namespace MOVE_TO_ENTITY_DISTANCE {
        interface Settings {
          entity: ig.Event.GetEntity;
          min: number;
          max: number;
          maxTime: number;
          subRadius: boolean;
        }
      }
      interface MOVE_TO_ENTITY_DISTANCE extends ig.ActionStepBase {
        entity: ig.Event.GetEntity;
        min: number;
        max: number;
        maxTime: number;
        subRadius: boolean;
        _wm: ig.Config;
      }
      interface MOVE_TO_ENTITY_DISTANCE_CONSTRUCTOR extends ImpactClass<MOVE_TO_ENTITY_DISTANCE> {
        new (settings: ig.ACTION_STEP.MOVE_TO_ENTITY_DISTANCE.Settings): MOVE_TO_ENTITY_DISTANCE;
      }
      var MOVE_TO_ENTITY_DISTANCE: MOVE_TO_ENTITY_DISTANCE_CONSTRUCTOR;

      namespace MOVE_TO_ENTITY_CLOSEST_OFFSET {
        interface Settings {
          entity: ig.Event.GetEntity;
          offsets: Vec2[];
          maxTime: number;
          forceTime: boolean;
        }
      }
      interface MOVE_TO_ENTITY_CLOSEST_OFFSET extends ig.ActionStepBase {
        entity: ig.Event.GetEntity;
        min: unknown;
        max: unknown;
        maxTime: number;
        subRadius: unknown;
        _wm: ig.Config;
        offsets: Vec2[];
        forceTime: boolean;
      }
      interface MOVE_TO_ENTITY_CLOSEST_OFFSET_CONSTRUCTOR
        extends ImpactClass<MOVE_TO_ENTITY_CLOSEST_OFFSET> {
        new (
          settings: ig.ACTION_STEP.MOVE_TO_ENTITY_CLOSEST_OFFSET.Settings,
        ): MOVE_TO_ENTITY_CLOSEST_OFFSET;
      }
      var MOVE_TO_ENTITY_CLOSEST_OFFSET: MOVE_TO_ENTITY_CLOSEST_OFFSET_CONSTRUCTOR;

      namespace MOVE_TO_POINT {
        interface Settings {
          target: ig.Event.Vec3Expression;
          precise?: boolean;
          maxTime?: number;
          forceTime?: boolean;
        }
      }
      interface MOVE_TO_POINT extends ig.ActionStepBase {
        target: ig.Event.Vec3Expression;
        precise: boolean;
        _wm: ig.Config;
        maxTime: number;
        forceTime: boolean;
      }
      interface MOVE_TO_POINT_CONSTRUCTOR extends ImpactClass<MOVE_TO_POINT> {
        new (settings: ig.ACTION_STEP.MOVE_TO_POINT.Settings): MOVE_TO_POINT;
      }
      var MOVE_TO_POINT: MOVE_TO_POINT_CONSTRUCTOR;

      namespace SYNC_ACTION_WITH_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface SYNC_ACTION_WITH_ENTITY extends ig.ActionStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface SYNC_ACTION_WITH_ENTITY_CONSTRUCTOR extends ImpactClass<SYNC_ACTION_WITH_ENTITY> {
        new (settings: ig.ACTION_STEP.SYNC_ACTION_WITH_ENTITY.Settings): SYNC_ACTION_WITH_ENTITY;
      }
      var SYNC_ACTION_WITH_ENTITY: SYNC_ACTION_WITH_ENTITY_CONSTRUCTOR;

      namespace SET_Z_VEL {
        interface Settings {
          value: number;
        }
      }
      interface SET_Z_VEL extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_Z_VEL_CONSTRUCTOR extends ImpactClass<SET_Z_VEL> {
        new (settings: ig.ACTION_STEP.SET_Z_VEL.Settings): SET_Z_VEL;
      }
      var SET_Z_VEL: SET_Z_VEL_CONSTRUCTOR;

      namespace SCALE_VEL {
        interface Settings {
          value: Vec2;
        }
      }
      interface SCALE_VEL extends ig.ActionStepBase {
        value: Vec2;
        _wm: ig.Config;
      }
      interface SCALE_VEL_CONSTRUCTOR extends ImpactClass<SCALE_VEL> {
        new (settings: ig.ACTION_STEP.SCALE_VEL.Settings): SCALE_VEL;
      }
      var SCALE_VEL: SCALE_VEL_CONSTRUCTOR;

      namespace SET_FLOAT_HEIGHT {
        interface Settings {
          value: number;
        }
      }
      interface SET_FLOAT_HEIGHT extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_FLOAT_HEIGHT_CONSTRUCTOR extends ImpactClass<SET_FLOAT_HEIGHT> {
        new (settings: ig.ACTION_STEP.SET_FLOAT_HEIGHT.Settings): SET_FLOAT_HEIGHT;
      }
      var SET_FLOAT_HEIGHT: SET_FLOAT_HEIGHT_CONSTRUCTOR;

      namespace SET_FLOAT_PARAMS {
        interface Settings {
          variance?: number;
          accel?: number;
          speed?: number;
        }
      }
      interface SET_FLOAT_PARAMS extends ig.ActionStepBase {
        speed: unknown;
        accel: unknown;
        variance: unknown;
        _wm: ig.Config;
      }
      interface SET_FLOAT_PARAMS_CONSTRUCTOR extends ImpactClass<SET_FLOAT_PARAMS> {
        new (settings: ig.ACTION_STEP.SET_FLOAT_PARAMS.Settings): SET_FLOAT_PARAMS;
      }
      var SET_FLOAT_PARAMS: SET_FLOAT_PARAMS_CONSTRUCTOR;

      namespace SET_FLY_HEIGHT {
        interface Settings {
          value: number;
        }
      }
      interface SET_FLY_HEIGHT extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_FLY_HEIGHT_CONSTRUCTOR extends ImpactClass<SET_FLY_HEIGHT> {
        new (settings: ig.ACTION_STEP.SET_FLY_HEIGHT.Settings): SET_FLY_HEIGHT;
      }
      var SET_FLY_HEIGHT: SET_FLY_HEIGHT_CONSTRUCTOR;

      namespace SET_FLY_KEEP_HEIGHT {
        interface Settings {
          value: boolean;
        }
      }
      interface SET_FLY_KEEP_HEIGHT extends ig.ActionStepBase {
        value: boolean;
        _wm: ig.Config;
      }
      interface SET_FLY_KEEP_HEIGHT_CONSTRUCTOR extends ImpactClass<SET_FLY_KEEP_HEIGHT> {
        new (settings: ig.ACTION_STEP.SET_FLY_KEEP_HEIGHT.Settings): SET_FLY_KEEP_HEIGHT;
      }
      var SET_FLY_KEEP_HEIGHT: SET_FLY_KEEP_HEIGHT_CONSTRUCTOR;

      namespace FORCE_FLY_HEIGHT {
        interface Settings {}
      }
      interface FORCE_FLY_HEIGHT extends ig.ActionStepBase {
        value: unknown;
        _wm: ig.Config;
      }
      interface FORCE_FLY_HEIGHT_CONSTRUCTOR extends ImpactClass<FORCE_FLY_HEIGHT> {
        new (settings: ig.ACTION_STEP.FORCE_FLY_HEIGHT.Settings): FORCE_FLY_HEIGHT;
      }
      var FORCE_FLY_HEIGHT: FORCE_FLY_HEIGHT_CONSTRUCTOR;

      namespace WAIT_UNTIL_Z_DISTANCE {
        interface Settings {
          distance: number;
          fixEntityZ: boolean;
        }
      }
      interface WAIT_UNTIL_Z_DISTANCE extends ig.ActionStepBase {
        distance: number;
        _wm: ig.Config;
        fixEntityZ: boolean;
      }
      interface WAIT_UNTIL_Z_DISTANCE_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_Z_DISTANCE> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL_Z_DISTANCE.Settings): WAIT_UNTIL_Z_DISTANCE;
      }
      var WAIT_UNTIL_Z_DISTANCE: WAIT_UNTIL_Z_DISTANCE_CONSTRUCTOR;

      namespace WAIT_UNTIL_Z_ZENITH {
        interface Settings {
          minWait: number;
        }
      }
      interface WAIT_UNTIL_Z_ZENITH extends ig.ActionStepBase {
        minWait: number;
        _wm: ig.Config;
      }
      interface WAIT_UNTIL_Z_ZENITH_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_Z_ZENITH> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL_Z_ZENITH.Settings): WAIT_UNTIL_Z_ZENITH;
      }
      var WAIT_UNTIL_Z_ZENITH: WAIT_UNTIL_Z_ZENITH_CONSTRUCTOR;

      namespace STOP_Z_ZENITH {
        interface Settings {
          minWait: number;
        }
      }
      interface STOP_Z_ZENITH extends ig.ActionStepBase {
        minWait: number;
        _wm: ig.Config;
      }
      interface STOP_Z_ZENITH_CONSTRUCTOR extends ImpactClass<STOP_Z_ZENITH> {
        new (settings: ig.ACTION_STEP.STOP_Z_ZENITH.Settings): STOP_Z_ZENITH;
      }
      var STOP_Z_ZENITH: STOP_Z_ZENITH_CONSTRUCTOR;

      namespace FLY_TO_POINT {
        interface Settings {
          target: ig.Event.Vec3Expression;
          maxFlySpeed: number;
          flyVariance: number;
          precise: boolean;
          keepFloating: boolean;
        }
      }
      interface FLY_TO_POINT extends ig.ActionStepBase {
        target: ig.Event.Vec3Expression;
        precise: boolean;
        maxFlySpeed: number;
        flyVariance: number;
        keepFloating: boolean;
        _wm: ig.Config;
      }
      interface FLY_TO_POINT_CONSTRUCTOR extends ImpactClass<FLY_TO_POINT> {
        new (settings: ig.ACTION_STEP.FLY_TO_POINT.Settings): FLY_TO_POINT;
      }
      var FLY_TO_POINT: FLY_TO_POINT_CONSTRUCTOR;

      namespace MOVE_TO_DIR {
        interface Settings {
          dir: Vec2;
          time: number;
          stopBeforeEdge: boolean;
        }
      }
      interface MOVE_TO_DIR extends ig.ActionStepBase {
        dir: Vec2;
        time: number;
        _wm: ig.Config;
        stopBeforeEdge: boolean;
      }
      interface MOVE_TO_DIR_CONSTRUCTOR extends ImpactClass<MOVE_TO_DIR> {
        new (settings: ig.ACTION_STEP.MOVE_TO_DIR.Settings): MOVE_TO_DIR;
      }
      var MOVE_TO_DIR: MOVE_TO_DIR_CONSTRUCTOR;

      namespace MOVE_TO_LINE {
        interface Settings {
          target1: Vec2;
          target2: Vec2;
        }
      }
      interface MOVE_TO_LINE extends ig.ActionStepBase {
        target1: Vec2;
        target2: Vec2;
        _wm: ig.Config;
      }
      interface MOVE_TO_LINE_CONSTRUCTOR extends ImpactClass<MOVE_TO_LINE> {
        new (settings: ig.ACTION_STEP.MOVE_TO_LINE.Settings): MOVE_TO_LINE;
      }
      var MOVE_TO_LINE: MOVE_TO_LINE_CONSTRUCTOR;

      namespace MOVE_RANDOM {
        interface Settings {
          minTime: number;
          maxTime: number;
          dirChanges: number;
          stopBeforeEdge: boolean;
        }
      }
      interface MOVE_RANDOM extends ig.ActionStepBase {
        minTime: number;
        maxTime: number;
        dirChanges: number;
        _wm: ig.Config;
        stopBeforeEdge: boolean;
      }
      interface MOVE_RANDOM_CONSTRUCTOR extends ImpactClass<MOVE_RANDOM> {
        new (settings: ig.ACTION_STEP.MOVE_RANDOM.Settings): MOVE_RANDOM;
      }
      var MOVE_RANDOM: MOVE_RANDOM_CONSTRUCTOR;

      namespace SET_WALK_ANIMS {
        interface Settings {
          config: string | ig.ActorEntity.WalkAnims;
        }
      }
      interface SET_WALK_ANIMS extends ig.ActionStepBase {
        config: string | ig.ActorEntity.WalkAnims;
        _wm: ig.Config;
      }
      interface SET_WALK_ANIMS_CONSTRUCTOR extends ImpactClass<SET_WALK_ANIMS> {
        new (settings: ig.ACTION_STEP.SET_WALK_ANIMS.Settings): SET_WALK_ANIMS;
      }
      var SET_WALK_ANIMS: SET_WALK_ANIMS_CONSTRUCTOR;

      namespace SET_TARGET_WALK_ANIMS {
        interface Settings {
          config: string | ig.ActorEntity.WalkAnims;
        }
      }
      interface SET_TARGET_WALK_ANIMS extends ig.ActionStepBase {
        config: string | ig.ActorEntity.WalkAnims;
        _wm: ig.Config;
      }
      interface SET_TARGET_WALK_ANIMS_CONSTRUCTOR extends ImpactClass<SET_TARGET_WALK_ANIMS> {
        new (settings: ig.ACTION_STEP.SET_TARGET_WALK_ANIMS.Settings): SET_TARGET_WALK_ANIMS;
      }
      var SET_TARGET_WALK_ANIMS: SET_TARGET_WALK_ANIMS_CONSTRUCTOR;

      namespace STOP_XY {
        interface Settings {}
      }
      interface STOP_XY extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface STOP_XY_CONSTRUCTOR extends ImpactClass<STOP_XY> {
        new (settings: ig.ACTION_STEP.STOP_XY.Settings): STOP_XY;
      }
      var STOP_XY: STOP_XY_CONSTRUCTOR;

      namespace JUMP {
        interface Settings {
          jumpHeight: unknown;
          wait: boolean;
          ignoreSounds: boolean;
        }
      }
      interface JUMP extends ig.ActionStepBase {
        jumpSpeed: unknown;
        wait: boolean;
        ignoreSound: unknown;
        _wm: ig.Config;
        ignoreSounds: boolean;
      }
      interface JUMP_CONSTRUCTOR extends ImpactClass<JUMP> {
        new (settings: ig.ACTION_STEP.JUMP.Settings): JUMP;
      }
      var JUMP: JUMP_CONSTRUCTOR;

      namespace JUMP_TO_POINT {
        interface Settings {
          target: ig.Event.Vec3Expression;
          forceDuration?: number;
          forceHeight?: number;
          ignoreSounds: boolean;
        }
      }
      interface JUMP_TO_POINT extends ig.ActionStepBase {
        adjustAbove: unknown;
        offset: unknown;
        _wm: ig.Config;
        target: ig.Event.Vec3Expression;
        forceDuration: number;
        forceHeight: number;
        ignoreSounds: boolean;
      }
      interface JUMP_TO_POINT_CONSTRUCTOR extends ImpactClass<JUMP_TO_POINT> {
        new (settings: ig.ACTION_STEP.JUMP_TO_POINT.Settings): JUMP_TO_POINT;
      }
      var JUMP_TO_POINT: JUMP_TO_POINT_CONSTRUCTOR;

      namespace SET_GROUND_CONNECTED {
        interface Settings {
          value: keyof typeof ig.COLL_GROUND_CONNECT;
        }
      }
      interface SET_GROUND_CONNECTED extends ig.ActionStepBase {
        value: ig.COLL_GROUND_CONNECT;
        _wm: ig.Config;
      }
      interface SET_GROUND_CONNECTED_CONSTRUCTOR extends ImpactClass<SET_GROUND_CONNECTED> {
        new (settings: ig.ACTION_STEP.SET_GROUND_CONNECTED.Settings): SET_GROUND_CONNECTED;
      }
      var SET_GROUND_CONNECTED: SET_GROUND_CONNECTED_CONSTRUCTOR;

      namespace SET_JUMPING {
        interface Settings {
          value: boolean;
        }
      }
      interface SET_JUMPING extends ig.ActionStepBase {
        value: boolean;
        _wm: ig.Config;
      }
      interface SET_JUMPING_CONSTRUCTOR extends ImpactClass<SET_JUMPING> {
        new (settings: ig.ACTION_STEP.SET_JUMPING.Settings): SET_JUMPING;
      }
      var SET_JUMPING: SET_JUMPING_CONSTRUCTOR;

      namespace SET_Z_GRAVITY_FACTOR {
        interface Settings {
          value: number;
        }
      }
      interface SET_Z_GRAVITY_FACTOR extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_Z_GRAVITY_FACTOR_CONSTRUCTOR extends ImpactClass<SET_Z_GRAVITY_FACTOR> {
        new (settings: ig.ACTION_STEP.SET_Z_GRAVITY_FACTOR.Settings): SET_Z_GRAVITY_FACTOR;
      }
      var SET_Z_GRAVITY_FACTOR: SET_Z_GRAVITY_FACTOR_CONSTRUCTOR;

      namespace SET_SIZE {
        interface Settings {
          size: Vec3;
          shiftOnCollision: boolean;
        }
      }
      interface SET_SIZE extends ig.ActionStepBase {
        value: unknown;
        _wm: ig.Config;
        size: Vec3;
        shiftOnCollision: boolean;
      }
      interface SET_SIZE_CONSTRUCTOR extends ImpactClass<SET_SIZE> {
        new (settings: ig.ACTION_STEP.SET_SIZE.Settings): SET_SIZE;
      }
      var SET_SIZE: SET_SIZE_CONSTRUCTOR;

      namespace SET_SPEED {
        interface Settings {
          value: ig.Event.NumberExpression;
        }
      }
      interface SET_SPEED extends ig.ActionStepBase {
        value: ig.Event.NumberExpression;
        _wm: ig.Config;
      }
      interface SET_SPEED_CONSTRUCTOR extends ImpactClass<SET_SPEED> {
        new (settings: ig.ACTION_STEP.SET_SPEED.Settings): SET_SPEED;
      }
      var SET_SPEED: SET_SPEED_CONSTRUCTOR;

      namespace SET_MAX_ZVEL {
        interface Settings {
          value: ig.Event.NumberExpression;
        }
      }
      interface SET_MAX_ZVEL extends ig.ActionStepBase {
        value: ig.Event.NumberExpression;
        _wm: ig.Config;
      }
      interface SET_MAX_ZVEL_CONSTRUCTOR extends ImpactClass<SET_MAX_ZVEL> {
        new (settings: ig.ACTION_STEP.SET_MAX_ZVEL.Settings): SET_MAX_ZVEL;
      }
      var SET_MAX_ZVEL: SET_MAX_ZVEL_CONSTRUCTOR;

      namespace SET_RELATIVE_SPEED {
        interface Settings {
          value: ig.Event.NumberExpression;
        }
      }
      interface SET_RELATIVE_SPEED extends ig.ActionStepBase {
        value: ig.Event.NumberExpression;
        _wm: ig.Config;
      }
      interface SET_RELATIVE_SPEED_CONSTRUCTOR extends ImpactClass<SET_RELATIVE_SPEED> {
        new (settings: ig.ACTION_STEP.SET_RELATIVE_SPEED.Settings): SET_RELATIVE_SPEED;
      }
      var SET_RELATIVE_SPEED: SET_RELATIVE_SPEED_CONSTRUCTOR;

      namespace SET_ACCEL_SPEED {
        interface Settings {
          value: number;
        }
      }
      interface SET_ACCEL_SPEED extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_ACCEL_SPEED_CONSTRUCTOR extends ImpactClass<SET_ACCEL_SPEED> {
        new (settings: ig.ACTION_STEP.SET_ACCEL_SPEED.Settings): SET_ACCEL_SPEED;
      }
      var SET_ACCEL_SPEED: SET_ACCEL_SPEED_CONSTRUCTOR;

      namespace SET_STATIC_TIME {
        interface Settings {
          value: boolean;
        }
      }
      interface SET_STATIC_TIME extends ig.ActionStepBase {
        value: boolean;
        _wm: ig.Config;
      }
      interface SET_STATIC_TIME_CONSTRUCTOR extends ImpactClass<SET_STATIC_TIME> {
        new (settings: ig.ACTION_STEP.SET_STATIC_TIME.Settings): SET_STATIC_TIME;
      }
      var SET_STATIC_TIME: SET_STATIC_TIME_CONSTRUCTOR;

      namespace DETACH_TIME_PARENT {
        interface Settings {}
      }
      interface DETACH_TIME_PARENT extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface DETACH_TIME_PARENT_CONSTRUCTOR extends ImpactClass<DETACH_TIME_PARENT> {
        new (settings: ig.ACTION_STEP.DETACH_TIME_PARENT.Settings): DETACH_TIME_PARENT;
      }
      var DETACH_TIME_PARENT: DETACH_TIME_PARENT_CONSTRUCTOR;

      namespace SET_WEIGHT {
        interface Settings {
          value: number;
        }
      }
      interface SET_WEIGHT extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_WEIGHT_CONSTRUCTOR extends ImpactClass<SET_WEIGHT> {
        new (settings: ig.ACTION_STEP.SET_WEIGHT.Settings): SET_WEIGHT;
      }
      var SET_WEIGHT: SET_WEIGHT_CONSTRUCTOR;

      namespace SET_FRICTION {
        interface Settings {
          value: number;
        }
      }
      interface SET_FRICTION extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_FRICTION_CONSTRUCTOR extends ImpactClass<SET_FRICTION> {
        new (settings: ig.ACTION_STEP.SET_FRICTION.Settings): SET_FRICTION;
      }
      var SET_FRICTION: SET_FRICTION_CONSTRUCTOR;

      namespace SET_AIR_FRICTION {
        interface Settings {
          value: number;
        }
      }
      interface SET_AIR_FRICTION extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_AIR_FRICTION_CONSTRUCTOR extends ImpactClass<SET_AIR_FRICTION> {
        new (settings: ig.ACTION_STEP.SET_AIR_FRICTION.Settings): SET_AIR_FRICTION;
      }
      var SET_AIR_FRICTION: SET_AIR_FRICTION_CONSTRUCTOR;

      namespace SET_TERRAIN_FRICTION_IGNORE {
        interface Settings {
          value: boolean;
        }
      }
      interface SET_TERRAIN_FRICTION_IGNORE extends ig.ActionStepBase {
        _wm: ig.Config;
        value: boolean;
      }
      interface SET_TERRAIN_FRICTION_IGNORE_CONSTRUCTOR
        extends ImpactClass<SET_TERRAIN_FRICTION_IGNORE> {
        new (
          settings: ig.ACTION_STEP.SET_TERRAIN_FRICTION_IGNORE.Settings,
        ): SET_TERRAIN_FRICTION_IGNORE;
      }
      var SET_TERRAIN_FRICTION_IGNORE: SET_TERRAIN_FRICTION_IGNORE_CONSTRUCTOR;

      namespace SET_SHADOW {
        interface Settings {
          size: number;
          shadowType?: keyof typeof ig.COLL_SHADOW_TYPE;
          shadowScaleY?: number;
        }
      }
      interface SET_SHADOW extends ig.ActionStepBase {
        size: number;
        _wm: ig.Config;
        shadowType?: keyof typeof ig.COLL_SHADOW_TYPE;
        shadowScaleY?: number;
      }
      interface SET_SHADOW_CONSTRUCTOR extends ImpactClass<SET_SHADOW> {
        new (settings: ig.ACTION_STEP.SET_SHADOW.Settings): SET_SHADOW;
      }
      var SET_SHADOW: SET_SHADOW_CONSTRUCTOR;

      namespace SET_Z_BOUNCINESS {
        interface Settings {
          value: number;
        }
      }
      interface SET_Z_BOUNCINESS extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_Z_BOUNCINESS_CONSTRUCTOR extends ImpactClass<SET_Z_BOUNCINESS> {
        new (settings: ig.ACTION_STEP.SET_Z_BOUNCINESS.Settings): SET_Z_BOUNCINESS;
      }
      var SET_Z_BOUNCINESS: SET_Z_BOUNCINESS_CONSTRUCTOR;

      namespace SET_BOUNCINESS {
        interface Settings {
          value: number;
        }
      }
      interface SET_BOUNCINESS extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_BOUNCINESS_CONSTRUCTOR extends ImpactClass<SET_BOUNCINESS> {
        new (settings: ig.ACTION_STEP.SET_BOUNCINESS.Settings): SET_BOUNCINESS;
      }
      var SET_BOUNCINESS: SET_BOUNCINESS_CONSTRUCTOR;

      namespace SET_FACE_FIX {
        interface Settings {
          value: boolean;
        }
      }
      interface SET_FACE_FIX extends ig.ActionStepBase {
        value: boolean;
        _wm: ig.Config;
      }
      interface SET_FACE_FIX_CONSTRUCTOR extends ImpactClass<SET_FACE_FIX> {
        new (settings: ig.ACTION_STEP.SET_FACE_FIX.Settings): SET_FACE_FIX;
      }
      var SET_FACE_FIX: SET_FACE_FIX_CONSTRUCTOR;

      namespace SET_FACE {
        interface Settings {
          face: ig.Action.Face;
          rotate?: boolean;
          rotateSpeed?: number;
        }
      }
      interface SET_FACE extends ig.ActionStepBase {
        face: ig.Action.Face;
        rotate: boolean;
        rotateSpeed: number;
        _wm: ig.Config;
      }
      interface SET_FACE_CONSTRUCTOR extends ImpactClass<SET_FACE> {
        new (settings: ig.ACTION_STEP.SET_FACE.Settings): SET_FACE;
      }
      var SET_FACE: SET_FACE_CONSTRUCTOR;

      namespace SET_CLOSEST_FACE {
        interface Settings {
          searchType: unknown;
          faces: Vec2[];
          rotate?: boolean;
          rotateSpeed?: number;
        }
      }
      interface SET_CLOSEST_FACE extends ig.ActionStepBase {
        face: null;
        rotate: boolean;
        rotateSpeed: number;
        _wm: ig.Config;
        faces: ig.Action.Face[];
      }
      interface SET_CLOSEST_FACE_CONSTRUCTOR extends ImpactClass<SET_CLOSEST_FACE> {
        new (settings: ig.ACTION_STEP.SET_CLOSEST_FACE.Settings): SET_CLOSEST_FACE;
      }
      var SET_CLOSEST_FACE: SET_CLOSEST_FACE_CONSTRUCTOR;

      namespace SET_FACE_TO_VEL {
        interface Settings {}
      }
      interface SET_FACE_TO_VEL extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface SET_FACE_TO_VEL_CONSTRUCTOR extends ImpactClass<SET_FACE_TO_VEL> {
        new (settings: ig.ACTION_STEP.SET_FACE_TO_VEL.Settings): SET_FACE_TO_VEL;
      }
      var SET_FACE_TO_VEL: SET_FACE_TO_VEL_CONSTRUCTOR;

      namespace ROTATE_FACE {
        interface Settings {
          time: number;
          turn: number;
          random: number;
          towardTarget?: boolean;
          notPastTarget?: boolean;
        }
      }
      interface ROTATE_FACE extends ig.ActionStepBase {
        time: number;
        turn: number;
        _wm: ig.Config;
        random: number;
        towardTarget: boolean;
        notPastTarget: boolean;
      }
      interface ROTATE_FACE_CONSTRUCTOR extends ImpactClass<ROTATE_FACE> {
        new (settings: ig.ACTION_STEP.ROTATE_FACE.Settings): ROTATE_FACE;
      }
      var ROTATE_FACE: ROTATE_FACE_CONSTRUCTOR;

      namespace SET_FACE_TO_DIR {
        interface Settings {
          dir: Vec2;
        }
      }
      interface SET_FACE_TO_DIR extends ig.ActionStepBase {
        dir: Vec2;
        _wm: ig.Config;
      }
      interface SET_FACE_TO_DIR_CONSTRUCTOR extends ImpactClass<SET_FACE_TO_DIR> {
        new (settings: ig.ACTION_STEP.SET_FACE_TO_DIR.Settings): SET_FACE_TO_DIR;
      }
      var SET_FACE_TO_DIR: SET_FACE_TO_DIR_CONSTRUCTOR;

      namespace SET_FACE_TO_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
          rotate?: boolean;
          rotateSpeed?: number;
        }
      }
      interface SET_FACE_TO_ENTITY extends ig.ActionStepBase {
        entity: ig.Event.GetEntity;
        rotate: boolean;
        rotateSpeed: number;
        _wm: ig.Config;
      }
      interface SET_FACE_TO_ENTITY_CONSTRUCTOR extends ImpactClass<SET_FACE_TO_ENTITY> {
        new (settings: ig.ACTION_STEP.SET_FACE_TO_ENTITY.Settings): SET_FACE_TO_ENTITY;
      }
      var SET_FACE_TO_ENTITY: SET_FACE_TO_ENTITY_CONSTRUCTOR;

      namespace SET_COLL_TYPE {
        interface Settings {
          value: keyof typeof ig.COLLTYPE;
        }
      }
      interface SET_COLL_TYPE extends ig.ActionStepBase {
        value: ig.COLLTYPE;
        _wm: ig.Config;
      }
      interface SET_COLL_TYPE_CONSTRUCTOR extends ImpactClass<SET_COLL_TYPE> {
        new (settings: ig.ACTION_STEP.SET_COLL_TYPE.Settings): SET_COLL_TYPE;
      }
      var SET_COLL_TYPE: SET_COLL_TYPE_CONSTRUCTOR;

      namespace SET_COLL_SHAPE {
        interface Settings {
          value: keyof typeof ig.COLLSHAPE;
        }
      }
      interface SET_COLL_SHAPE extends ig.ActionStepBase {
        value: ig.COLLSHAPE;
        _wm: ig.Config;
      }
      interface SET_COLL_SHAPE_CONSTRUCTOR extends ImpactClass<SET_COLL_SHAPE> {
        new (settings: ig.ACTION_STEP.SET_COLL_SHAPE.Settings): SET_COLL_SHAPE;
      }
      var SET_COLL_SHAPE: SET_COLL_SHAPE_CONSTRUCTOR;

      namespace SET_SLIP_THROUGH {
        interface Settings {
          value: boolean;
        }
      }
      interface SET_SLIP_THROUGH extends ig.ActionStepBase {
        value: boolean;
        _wm: ig.Config;
      }
      interface SET_SLIP_THROUGH_CONSTRUCTOR extends ImpactClass<SET_SLIP_THROUGH> {
        new (settings: ig.ACTION_STEP.SET_SLIP_THROUGH.Settings): SET_SLIP_THROUGH;
      }
      var SET_SLIP_THROUGH: SET_SLIP_THROUGH_CONSTRUCTOR;

      namespace SHOW_ANIMATION {
        interface Settings {
          anim: string;
          followUp?: string;
          wait: boolean;
          viaWalkConfig: boolean;
        }
      }
      interface SHOW_ANIMATION extends ig.ActionStepBase {
        anim: string;
        followUp: Nullable<string>;
        wait: boolean;
        viaWalkConfig: boolean;
        _wm: ig.Config;
      }
      interface SHOW_ANIMATION_CONSTRUCTOR extends ImpactClass<SHOW_ANIMATION> {
        new (settings: ig.ACTION_STEP.SHOW_ANIMATION.Settings): SHOW_ANIMATION;
      }
      var SHOW_ANIMATION: SHOW_ANIMATION_CONSTRUCTOR;

      namespace WAIT_UNTIL_ANIM_LOOP_END {
        interface Settings {}
      }
      interface WAIT_UNTIL_ANIM_LOOP_END extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface WAIT_UNTIL_ANIM_LOOP_END_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_ANIM_LOOP_END> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL_ANIM_LOOP_END.Settings): WAIT_UNTIL_ANIM_LOOP_END;
      }
      var WAIT_UNTIL_ANIM_LOOP_END: WAIT_UNTIL_ANIM_LOOP_END_CONSTRUCTOR;

      namespace SHOW_PART_ANIMATION {
        interface Settings {
          partName: string;
          anim: string;
          followUp?: string;
        }
      }
      interface SHOW_PART_ANIMATION extends ig.ActionStepBase {
        anim: string;
        followUp: Nullable<string>;
        wait: unknown;
        _wm: ig.Config;
        partName: string;
      }
      interface SHOW_PART_ANIMATION_CONSTRUCTOR extends ImpactClass<SHOW_PART_ANIMATION> {
        new (settings: ig.ACTION_STEP.SHOW_PART_ANIMATION.Settings): SHOW_PART_ANIMATION;
      }
      var SHOW_PART_ANIMATION: SHOW_PART_ANIMATION_CONSTRUCTOR;

      namespace SHOW_RANDOM_ANIMATION {
        interface Settings {
          randAnims: string[];
        }
      }
      interface SHOW_RANDOM_ANIMATION extends ig.ActionStepBase {
        randAnims: string[];
        _wm: ig.Config;
      }
      interface SHOW_RANDOM_ANIMATION_CONSTRUCTOR extends ImpactClass<SHOW_RANDOM_ANIMATION> {
        new (settings: ig.ACTION_STEP.SHOW_RANDOM_ANIMATION.Settings): SHOW_RANDOM_ANIMATION;
      }
      var SHOW_RANDOM_ANIMATION: SHOW_RANDOM_ANIMATION_CONSTRUCTOR;

      namespace SHOW_EXTERN_ANIM {
        interface Settings {
          anim: ig.EffectHandle.Settings;
          followUp?: ig.EffectHandle.Settings;
          wait: boolean;
        }
      }
      interface SHOW_EXTERN_ANIM extends ig.ActionStepBase {
        animSheet: ig.AnimationSheet;
        animName: unknown;
        followUpSheet: unknown;
        followUpName: unknown;
        wait: boolean;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SHOW_EXTERN_ANIM_CONSTRUCTOR extends ImpactClass<SHOW_EXTERN_ANIM> {
        new (settings: ig.ACTION_STEP.SHOW_EXTERN_ANIM.Settings): SHOW_EXTERN_ANIM;
      }
      var SHOW_EXTERN_ANIM: SHOW_EXTERN_ANIM_CONSTRUCTOR;

      namespace CLEAR_ANIMATION {
        interface Settings {}
      }
      interface CLEAR_ANIMATION extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_ANIMATION_CONSTRUCTOR extends ImpactClass<CLEAR_ANIMATION> {
        new (settings: ig.ACTION_STEP.CLEAR_ANIMATION.Settings): CLEAR_ANIMATION;
      }
      var CLEAR_ANIMATION: CLEAR_ANIMATION_CONSTRUCTOR;

      namespace SET_COLL_SIZE {
        interface Settings {
          size: Vec3;
        }
      }
      interface SET_COLL_SIZE extends ig.ActionStepBase {
        _wm: ig.Config;
        size: Vec3;
      }
      interface SET_COLL_SIZE_CONSTRUCTOR extends ImpactClass<SET_COLL_SIZE> {
        new (settings: ig.ACTION_STEP.SET_COLL_SIZE.Settings): SET_COLL_SIZE;
      }
      var SET_COLL_SIZE: SET_COLL_SIZE_CONSTRUCTOR;

      namespace CHANGE_VAR_NUMBER {
        interface Settings {
          varName: string;
          changeType: unknown;
          value: ig.Event.NumberExpression;
        }
      }
      interface CHANGE_VAR_NUMBER extends ig.ActionStepBase {
        varName: string;
        changeType: unknown;
        value: ig.Event.NumberExpression;
        _wm: ig.Config;
      }
      interface CHANGE_VAR_NUMBER_CONSTRUCTOR extends ImpactClass<CHANGE_VAR_NUMBER> {
        new (settings: ig.ACTION_STEP.CHANGE_VAR_NUMBER.Settings): CHANGE_VAR_NUMBER;
      }
      var CHANGE_VAR_NUMBER: CHANGE_VAR_NUMBER_CONSTRUCTOR;

      namespace SET_RANDOM_VAR_NUMBER {
        interface Settings {
          varName: string;
          min: number;
          max: number;
        }
      }
      interface SET_RANDOM_VAR_NUMBER extends ig.ActionStepBase {
        varName: string;
        min: number;
        max: number;
        _wm: ig.Config;
      }
      interface SET_RANDOM_VAR_NUMBER_CONSTRUCTOR extends ImpactClass<SET_RANDOM_VAR_NUMBER> {
        new (settings: ig.ACTION_STEP.SET_RANDOM_VAR_NUMBER.Settings): SET_RANDOM_VAR_NUMBER;
      }
      var SET_RANDOM_VAR_NUMBER: SET_RANDOM_VAR_NUMBER_CONSTRUCTOR;

      namespace CHANGE_VAR_BOOL {
        interface Settings {
          varName: string;
          changeType: unknown;
          value: ig.Event.BooleanExpression;
        }
      }
      interface CHANGE_VAR_BOOL extends ig.ActionStepBase {
        varName: string;
        changeType: unknown;
        value: ig.Event.BooleanExpression;
        _wm: ig.Config;
      }
      interface CHANGE_VAR_BOOL_CONSTRUCTOR extends ImpactClass<CHANGE_VAR_BOOL> {
        new (settings: ig.ACTION_STEP.CHANGE_VAR_BOOL.Settings): CHANGE_VAR_BOOL;
      }
      var CHANGE_VAR_BOOL: CHANGE_VAR_BOOL_CONSTRUCTOR;

      namespace CHANGE_VAR_STRING {
        interface Settings {
          varName: string;
          changeType: unknown;
          value: ig.Event.StringExpression;
        }
      }
      interface CHANGE_VAR_STRING extends ig.ActionStepBase {
        varName: string;
        changeType: unknown;
        value: ig.Event.StringExpression;
        _wm: ig.Config;
      }
      interface CHANGE_VAR_STRING_CONSTRUCTOR extends ImpactClass<CHANGE_VAR_STRING> {
        new (settings: ig.ACTION_STEP.CHANGE_VAR_STRING.Settings): CHANGE_VAR_STRING;
      }
      var CHANGE_VAR_STRING: CHANGE_VAR_STRING_CONSTRUCTOR;

      namespace CHANGE_VAR_LANG {
        interface Settings {
          varName: string;
          changeType: unknown;
          value: ig.LangLabel.Data;
        }
      }
      interface CHANGE_VAR_LANG extends ig.ActionStepBase {
        varName: string;
        changeType: unknown;
        value: ig.LangLabel;
        _wm: ig.Config;
      }
      interface CHANGE_VAR_LANG_CONSTRUCTOR extends ImpactClass<CHANGE_VAR_LANG> {
        new (settings: ig.ACTION_STEP.CHANGE_VAR_LANG.Settings): CHANGE_VAR_LANG;
      }
      var CHANGE_VAR_LANG: CHANGE_VAR_LANG_CONSTRUCTOR;

      namespace SET_ATTRIB_VEC2 {
        interface Settings {
          name: ig.Event.StringExpression;
          value: ig.Event.Vec2Expression;
          changeConnected?: keyof typeof ig.ACTOR_ATTRIB_CONNECTION;
        }
      }
      interface SET_ATTRIB_VEC2 extends ig.ActionStepBase {
        name: ig.Event.StringExpression;
        value: ig.Event.Vec2Expression;
        _wm: ig.Config;
      }
      interface SET_ATTRIB_VEC2_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_VEC2> {
        new (settings: ig.ACTION_STEP.SET_ATTRIB_VEC2.Settings): SET_ATTRIB_VEC2;
      }
      var SET_ATTRIB_VEC2: SET_ATTRIB_VEC2_CONSTRUCTOR;

      namespace SET_ATTRIB_BOOL {
        interface Settings {
          name: ig.Event.StringExpression;
          value: ig.Event.BooleanExpression;
          changeConnected?: keyof typeof ig.ACTOR_ATTRIB_CONNECTION;
        }
      }
      interface SET_ATTRIB_BOOL extends ig.ActionStepBase {
        name: ig.Event.StringExpression;
        value: ig.Event.BooleanExpression;
        _wm: ig.Config;
      }
      interface SET_ATTRIB_BOOL_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_BOOL> {
        new (settings: ig.ACTION_STEP.SET_ATTRIB_BOOL.Settings): SET_ATTRIB_BOOL;
      }
      var SET_ATTRIB_BOOL: SET_ATTRIB_BOOL_CONSTRUCTOR;

      namespace SET_ATTRIB_STRING {
        interface Settings {
          name: ig.Event.StringExpression;
          value: ig.Event.StringExpression;
          changeType?: unknown;
          changeConnected?: keyof typeof ig.ACTOR_ATTRIB_CONNECTION;
        }
      }
      interface SET_ATTRIB_STRING extends ig.ActionStepBase {
        name: ig.Event.StringExpression;
        value: ig.Event.StringExpression;
        _wm: ig.Config;
      }
      interface SET_ATTRIB_STRING_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_STRING> {
        new (settings: ig.ACTION_STEP.SET_ATTRIB_STRING.Settings): SET_ATTRIB_STRING;
      }
      var SET_ATTRIB_STRING: SET_ATTRIB_STRING_CONSTRUCTOR;

      namespace SET_ATTRIB_NUMBER {
        interface Settings {
          attribName: ig.Event.StringExpression;
          changeType: unknown;
          value: ig.Event.NumberExpression;
          changeConnected?: keyof typeof ig.ACTOR_ATTRIB_CONNECTION;
        }
      }
      interface SET_ATTRIB_NUMBER extends ig.ActionStepBase {
        attribName: ig.Event.StringExpression;
        changeOperator: unknown;
        value: ig.Event.NumberExpression;
        _wm: ig.Config;
      }
      interface SET_ATTRIB_NUMBER_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_NUMBER> {
        new (settings: ig.ACTION_STEP.SET_ATTRIB_NUMBER.Settings): SET_ATTRIB_NUMBER;
      }
      var SET_ATTRIB_NUMBER: SET_ATTRIB_NUMBER_CONSTRUCTOR;

      namespace SET_ATTRIB_NUMBER_RANDOM {
        interface Settings {
          attribName: string;
          changeType: unknown;
          minValue: ig.Event.NumberExpression;
          maxValue: ig.Event.NumberExpression;
          changeConnected?: keyof typeof ig.ACTOR_ATTRIB_CONNECTION;
        }
      }
      interface SET_ATTRIB_NUMBER_RANDOM extends ig.ActionStepBase {
        attribName: string;
        _wm: ig.Config;
        minValue: ig.Event.NumberExpression;
        maxValue: ig.Event.NumberExpression;
      }
      interface SET_ATTRIB_NUMBER_RANDOM_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_NUMBER_RANDOM> {
        new (settings: ig.ACTION_STEP.SET_ATTRIB_NUMBER_RANDOM.Settings): SET_ATTRIB_NUMBER_RANDOM;
      }
      var SET_ATTRIB_NUMBER_RANDOM: SET_ATTRIB_NUMBER_RANDOM_CONSTRUCTOR;

      namespace SET_ATTRIB_FACE {
        interface Settings {
          name: string;
          target: unknown;
        }
      }
      interface SET_ATTRIB_FACE extends ig.ActionStepBase {
        name: string;
        _wm: ig.Config;
      }
      interface SET_ATTRIB_FACE_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_FACE> {
        new (settings: ig.ACTION_STEP.SET_ATTRIB_FACE.Settings): SET_ATTRIB_FACE;
      }
      var SET_ATTRIB_FACE: SET_ATTRIB_FACE_CONSTRUCTOR;

      namespace SET_ATTRIB_POS {
        interface Settings {
          name: string;
          target: unknown;
          align: keyof typeof ig.ENTITY_ALIGN;
          offset?: Vec3;
          faceDistance: number;
          faceRound?: number;
          selfFaceDistance: number;
          checkCollision?: boolean;
        }
      }
      interface SET_ATTRIB_POS extends ig.ActionStepBase {
        name: string;
        value: unknown;
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
        offset?: Vec3;
        faceDistance: number;
        faceRound: number;
        selfFaceDistance: number;
        checkCollision: boolean;
      }
      interface SET_ATTRIB_POS_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_POS> {
        new (settings: ig.ACTION_STEP.SET_ATTRIB_POS.Settings): SET_ATTRIB_POS;
      }
      var SET_ATTRIB_POS: SET_ATTRIB_POS_CONSTRUCTOR;

      namespace PLAY_SOUND {
        interface Settings {
          sound: string;
          volume?: number;
          variance?: number;
          global: boolean;
          loop: boolean;
          speed?: number;
          fadeDuration?: number;
          radius?: number;
          speedVar?: string;
          speedVarFactor?: number;
        }
      }
      interface PLAY_SOUND extends ig.ActionStepBase {
        sound: ig.Sound;
        global: boolean;
        loop: boolean;
        settings: { speed: number; fadeDuration: number };
        _wm: ig.Config;
        radius: number;
        speedVar?: string;
        speedVarFactor: number;

        clearCached(this: this): void;
      }
      interface PLAY_SOUND_CONSTRUCTOR extends ImpactClass<PLAY_SOUND> {
        new (settings: ig.ACTION_STEP.PLAY_SOUND.Settings): PLAY_SOUND;
      }
      var PLAY_SOUND: PLAY_SOUND_CONSTRUCTOR;

      namespace STOP_SOUNDS {
        interface Settings {}
      }
      interface STOP_SOUNDS extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface STOP_SOUNDS_CONSTRUCTOR extends ImpactClass<STOP_SOUNDS> {
        new (settings: ig.ACTION_STEP.STOP_SOUNDS.Settings): STOP_SOUNDS;
      }
      var STOP_SOUNDS: STOP_SOUNDS_CONSTRUCTOR;

      namespace PLAY_RANDOM_SOUND {
        interface Settings {
          sounds: undefined[];
          global: boolean;
          loop: boolean;
          speed?: number;
        }
      }
      interface PLAY_RANDOM_SOUND extends ig.ActionStepBase {
        sounds: unknown;
        global: boolean;
        loop: boolean;
        settings: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface PLAY_RANDOM_SOUND_CONSTRUCTOR extends ImpactClass<PLAY_RANDOM_SOUND> {
        new (settings: ig.ACTION_STEP.PLAY_RANDOM_SOUND.Settings): PLAY_RANDOM_SOUND;
      }
      var PLAY_RANDOM_SOUND: PLAY_RANDOM_SOUND_CONSTRUCTOR;

      namespace HIDE {
        interface Settings {}
      }
      interface HIDE extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface HIDE_CONSTRUCTOR extends ImpactClass<HIDE> {
        new (settings: ig.ACTION_STEP.HIDE.Settings): HIDE;
      }
      var HIDE: HIDE_CONSTRUCTOR;

      namespace HIDE_OTHER {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface HIDE_OTHER extends ig.ActionStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface HIDE_OTHER_CONSTRUCTOR extends ImpactClass<HIDE_OTHER> {
        new (settings: ig.ACTION_STEP.HIDE_OTHER.Settings): HIDE_OTHER;
      }
      var HIDE_OTHER: HIDE_OTHER_CONSTRUCTOR;

      namespace SET_POS {
        interface Settings {
          newPos: ig.Event.Vec3Expression;
        }
      }
      interface SET_POS extends ig.ActionStepBase {
        newPos: ig.Event.Vec3Expression;
        _wm: ig.Config;
      }
      interface SET_POS_CONSTRUCTOR extends ImpactClass<SET_POS> {
        new (settings: ig.ACTION_STEP.SET_POS.Settings): SET_POS;
      }
      var SET_POS: SET_POS_CONSTRUCTOR;

      namespace ROUND_POSITION {
        interface Settings {}
      }
      interface ROUND_POSITION extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface ROUND_POSITION_CONSTRUCTOR extends ImpactClass<ROUND_POSITION> {
        new (settings: ig.ACTION_STEP.ROUND_POSITION.Settings): ROUND_POSITION;
      }
      var ROUND_POSITION: ROUND_POSITION_CONSTRUCTOR;

      namespace ADD_Z_POS_DELTA {
        interface Settings {
          zDelta: ig.Event.NumberVary;
          zMultiply?: number;
        }
      }
      interface ADD_Z_POS_DELTA extends ig.ActionStepBase {
        zDelta: ig.Event.NumberVary;
        _wm: ig.Config;
        zMultiply: number;
      }
      interface ADD_Z_POS_DELTA_CONSTRUCTOR extends ImpactClass<ADD_Z_POS_DELTA> {
        new (settings: ig.ACTION_STEP.ADD_Z_POS_DELTA.Settings): ADD_Z_POS_DELTA;
      }
      var ADD_Z_POS_DELTA: ADD_Z_POS_DELTA_CONSTRUCTOR;

      namespace TELEPORT_TO_ATTRIB_POS {
        interface Settings {
          attrib: string;
        }
      }
      interface TELEPORT_TO_ATTRIB_POS extends ig.ActionStepBase {
        newPos: unknown;
        _wm: ig.Config;
        attrib: string;
      }
      interface TELEPORT_TO_ATTRIB_POS_CONSTRUCTOR extends ImpactClass<TELEPORT_TO_ATTRIB_POS> {
        new (settings: ig.ACTION_STEP.TELEPORT_TO_ATTRIB_POS.Settings): TELEPORT_TO_ATTRIB_POS;
      }
      var TELEPORT_TO_ATTRIB_POS: TELEPORT_TO_ATTRIB_POS_CONSTRUCTOR;

      namespace INTERPOLATE_POSITION {
        interface Settings {
          newPos: ig.Event.Vec3Expression;
          duration: number;
          keySpline: unknown;
          timePerTile?: boolean;
        }
      }
      interface INTERPOLATE_POSITION extends ig.ActionStepBase {
        newPos: ig.Event.Vec3Expression;
        duration: number;
        keySpline: KeySpline;
        timePerTile: boolean;
        _wm: ig.Config;
      }
      interface INTERPOLATE_POSITION_CONSTRUCTOR extends ImpactClass<INTERPOLATE_POSITION> {
        new (settings: ig.ACTION_STEP.INTERPOLATE_POSITION.Settings): INTERPOLATE_POSITION;
      }
      var INTERPOLATE_POSITION: INTERPOLATE_POSITION_CONSTRUCTOR;

      namespace INTERPOLATE_RELATIVE {
        interface Settings {
          delta: Vec3;
          duration: ig.Event.NumberVary;
          keySpline: unknown;
        }
      }
      interface INTERPOLATE_RELATIVE extends ig.ActionStepBase {
        delta: Vec3;
        duration: ig.Event.NumberVary;
        keySpline: KeySpline;
        timePerTile: unknown;
        _wm: ig.Config;
      }
      interface INTERPOLATE_RELATIVE_CONSTRUCTOR extends ImpactClass<INTERPOLATE_RELATIVE> {
        new (settings: ig.ACTION_STEP.INTERPOLATE_RELATIVE.Settings): INTERPOLATE_RELATIVE;
      }
      var INTERPOLATE_RELATIVE: INTERPOLATE_RELATIVE_CONSTRUCTOR;

      namespace Z_INTERPOLATE {
        interface Settings {
          newZPos: number;
          duration: number;
          keySpline: unknown;
        }
      }
      interface Z_INTERPOLATE extends ig.ActionStepBase {
        newZPos: number;
        duration: number;
        keySpline: KeySpline;
        _wm: ig.Config;
      }
      interface Z_INTERPOLATE_CONSTRUCTOR extends ImpactClass<Z_INTERPOLATE> {
        new (settings: ig.ACTION_STEP.Z_INTERPOLATE.Settings): Z_INTERPOLATE;
      }
      var Z_INTERPOLATE: Z_INTERPOLATE_CONSTRUCTOR;

      namespace DO_ATTRIB_ACTION {
        interface Settings {
          attrib: string;
          noStateReset: boolean;
          resumeStashed: boolean;
        }
      }
      interface DO_ATTRIB_ACTION extends ig.ActionStepBase {
        _wm: ig.Config;
        attrib: string;
        noStateReset: boolean;
        resumeStashed: boolean;
      }
      interface DO_ATTRIB_ACTION_CONSTRUCTOR extends ImpactClass<DO_ATTRIB_ACTION> {
        new (settings: ig.ACTION_STEP.DO_ATTRIB_ACTION.Settings): DO_ATTRIB_ACTION;
      }
      var DO_ATTRIB_ACTION: DO_ATTRIB_ACTION_CONSTRUCTOR;

      namespace ADD_ANIM_MOD {
        interface Settings {
          name: string;
          spriteIdx: number;
          tileOffset?: ig.Event.NumberExpression;
        }
      }
      interface ADD_ANIM_MOD extends ig.ActionStepBase {
        _wm: ig.Config;
        name: string;
        spriteIdx: number;
        tileOffset: ig.Event.NumberExpression;
      }
      interface ADD_ANIM_MOD_CONSTRUCTOR extends ImpactClass<ADD_ANIM_MOD> {
        new (settings: ig.ACTION_STEP.ADD_ANIM_MOD.Settings): ADD_ANIM_MOD;
      }
      var ADD_ANIM_MOD: ADD_ANIM_MOD_CONSTRUCTOR;

      namespace REMOVE_ANIM_MOD {
        interface Settings {
          name?: string;
        }
      }
      interface REMOVE_ANIM_MOD extends ig.ActionStepBase {
        _wm: ig.Config;
        name?: string;
      }
      interface REMOVE_ANIM_MOD_CONSTRUCTOR extends ImpactClass<REMOVE_ANIM_MOD> {
        new (settings: ig.ACTION_STEP.REMOVE_ANIM_MOD.Settings): REMOVE_ANIM_MOD;
      }
      var REMOVE_ANIM_MOD: REMOVE_ANIM_MOD_CONSTRUCTOR;
    }
  }
}
