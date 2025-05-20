// requires impact.base.animation
// requires impact.base.action
// requires impact.base.entity
// requires game.feature.combat.entities.drop
// requires game.feature.combat.entities.combatant
// requires game.feature.combat.entities.combat-proxy
// requires impact.feature.effect.effect-steps
// requires game.feature.combat.combat-sweep

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {
      namespace FACE_TO_TARGET {
        interface Settings {
          value: boolean;
          immediately?: boolean;
          posOffset?: Vec2;
        }
      }
      interface FACE_TO_TARGET extends ig.ActionStepBase {
        value: boolean;
        immediately: boolean;
        _wm: ig.Config;
        posOffset: Vec2;
      }
      interface FACE_TO_TARGET_CONSTRUCTOR extends ImpactClass<FACE_TO_TARGET> {
        new (settings: ig.ACTION_STEP.FACE_TO_TARGET.Settings): FACE_TO_TARGET;
      }
      var FACE_TO_TARGET: FACE_TO_TARGET_CONSTRUCTOR;

      namespace UNLOCK_ENEMY {
        interface Settings {
          enemy: string;
          asSpecial?: boolean;
        }
      }
      interface UNLOCK_ENEMY extends ig.ActionStepBase {
        enemy: string;
        asSpecial: boolean;
        _wm: ig.Config;
      }
      interface UNLOCK_ENEMY_CONSTRUCTOR extends ImpactClass<UNLOCK_ENEMY> {
        new (settings: ig.ACTION_STEP.UNLOCK_ENEMY.Settings): UNLOCK_ENEMY;
      }
      var UNLOCK_ENEMY: UNLOCK_ENEMY_CONSTRUCTOR;

      namespace FACE_TO_TARGET_OFFSET {
        interface Settings {
          value: number;
        }
      }
      interface FACE_TO_TARGET_OFFSET extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface FACE_TO_TARGET_OFFSET_CONSTRUCTOR extends ImpactClass<FACE_TO_TARGET_OFFSET> {
        new (settings: ig.ACTION_STEP.FACE_TO_TARGET_OFFSET.Settings): FACE_TO_TARGET_OFFSET;
      }
      var FACE_TO_TARGET_OFFSET: FACE_TO_TARGET_OFFSET_CONSTRUCTOR;

      namespace FACE_TO_TARGET_SPEED {
        interface Settings {
          value?: number;
        }
      }
      interface FACE_TO_TARGET_SPEED extends ig.ActionStepBase {
        value?: number;
        _wm: ig.Config;
      }
      interface FACE_TO_TARGET_SPEED_CONSTRUCTOR extends ImpactClass<FACE_TO_TARGET_SPEED> {
        new (settings: ig.ACTION_STEP.FACE_TO_TARGET_SPEED.Settings): FACE_TO_TARGET_SPEED;
      }
      var FACE_TO_TARGET_SPEED: FACE_TO_TARGET_SPEED_CONSTRUCTOR;

      namespace SET_FACE_TARGET_PREDICT {
        interface Settings {
          projectileSpeed: number;
        }
      }
      interface SET_FACE_TARGET_PREDICT extends ig.ActionStepBase {
        projectileSpeed: number;
        _wm: ig.Config;
      }
      interface SET_FACE_TARGET_PREDICT_CONSTRUCTOR extends ImpactClass<SET_FACE_TARGET_PREDICT> {
        new (settings: ig.ACTION_STEP.SET_FACE_TARGET_PREDICT.Settings): SET_FACE_TARGET_PREDICT;
      }
      var SET_FACE_TARGET_PREDICT: SET_FACE_TARGET_PREDICT_CONSTRUCTOR;

      namespace FACE_ALIGN {
        interface Settings {
          target?: unknown;
        }
      }
      interface FACE_ALIGN extends ig.ActionStepBase {
        value: unknown;
        _wm: ig.Config;
      }
      interface FACE_ALIGN_CONSTRUCTOR extends ImpactClass<FACE_ALIGN> {
        new (settings: ig.ACTION_STEP.FACE_ALIGN.Settings): FACE_ALIGN;
      }
      var FACE_ALIGN: FACE_ALIGN_CONSTRUCTOR;

      namespace SHOW_THROW_FX {
        interface Settings {
          charged: boolean;
          charClass?: keyof typeof sc.THROW_SOUND_CLASS;
        }
      }
      interface SHOW_THROW_FX extends ig.ActionStepBase {
        _wm: ig.Config;
        charged: boolean;
        charClass: sc.THROW_SOUND_CLASS;
      }
      interface SHOW_THROW_FX_CONSTRUCTOR extends ImpactClass<SHOW_THROW_FX> {
        new (settings: ig.ACTION_STEP.SHOW_THROW_FX.Settings): SHOW_THROW_FX;
      }
      var SHOW_THROW_FX: SHOW_THROW_FX_CONSTRUCTOR;

      namespace COMBAT_ART_CHARGE {
        interface Settings {
          element: keyof typeof sc.ELEMENT;
          level: number;
        }
      }
      interface COMBAT_ART_CHARGE extends ig.ActionStepBase {
        _wm: ig.Config;
        element: sc.ELEMENT;
        level: number;

        chargeStep(this: this, a: unknown): void;
      }
      interface COMBAT_ART_CHARGE_CONSTRUCTOR extends ImpactClass<COMBAT_ART_CHARGE> {
        new (settings: ig.ACTION_STEP.COMBAT_ART_CHARGE.Settings): COMBAT_ART_CHARGE;
      }
      var COMBAT_ART_CHARGE: COMBAT_ART_CHARGE_CONSTRUCTOR;

      namespace MOVE_TO_DISTANCE {
        interface Settings {
          min: number;
          max: number;
          maxTime: number;
          offset?: Vec2;
          forceTime: boolean;
          rotateSpeed?: number;
          missReactTime?: number;
          collideCancel?: number;
          stopBeforeEdge: boolean;
          flipOffsetLeft?: boolean;
          keepFace?: boolean;
          waitUntil?: string;
        }
      }
      interface MOVE_TO_DISTANCE extends ig.ActionStepBase {
        min: number;
        max: number;
        maxTime: number;
        offset: Vec2;
        forceTime: boolean;
        _wm: ig.Config;
        rotateSpeed: number;
        missReactTime?: number;
        collideCancel?: number;
        stopBeforeEdge: boolean;
        flipOffsetLeft?: boolean;
        keepFace?: boolean;
      }
      interface MOVE_TO_DISTANCE_CONSTRUCTOR extends ImpactClass<MOVE_TO_DISTANCE> {
        new (settings: ig.ACTION_STEP.MOVE_TO_DISTANCE.Settings): MOVE_TO_DISTANCE;
      }
      var MOVE_TO_DISTANCE: MOVE_TO_DISTANCE_CONSTRUCTOR;

      namespace MOVE_TO_PINPOINT {
        interface Settings {
          moveTime: number;
          postTime: number;
          offset?: Vec2;
          rotateSpeed?: number;
          useAccelDir: boolean;
          maxSpeed: number;
          maxSpeedEnd: number;
          underEstimation?: number;
        }
      }
      interface MOVE_TO_PINPOINT extends ig.ActionStepBase {
        maxTime: unknown;
        offset: Vec2;
        forceTime: unknown;
        _wm: ig.Config;
        moveTime: number;
        postTime: number;
        rotateSpeed: number;
        useAccelDir: boolean;
        maxSpeed: number;
        maxSpeedEnd: number;
        underEstimation: number;

        _calculateDir(this: this, a: unknown, b: unknown): unknown;
      }
      interface MOVE_TO_PINPOINT_CONSTRUCTOR extends ImpactClass<MOVE_TO_PINPOINT> {
        new (settings: ig.ACTION_STEP.MOVE_TO_PINPOINT.Settings): MOVE_TO_PINPOINT;
      }
      var MOVE_TO_PINPOINT: MOVE_TO_PINPOINT_CONSTRUCTOR;

      namespace MOVE_ALIGN_DIR {
        interface Settings {
          moveTime: number;
          alignDir?: number;
          aimFaceRotate?: number;
          maxDist: number;
          maxOppDist: number;
          offset?: Vec2;
          interpolate: boolean;
          waitUntil?: string;
        }
      }
      interface MOVE_ALIGN_DIR extends ig.ActionStepBase {
        maxTime: unknown;
        dir: unknown;
        forceTime: unknown;
        _wm: ig.Config;
        moveTime: number;
        alignDir?: number;
        aimFaceRotate: number;
        maxDist: number;
        maxOppDist: number;
        offset: Vec2;
        interpolate: boolean;
      }
      interface MOVE_ALIGN_DIR_CONSTRUCTOR extends ImpactClass<MOVE_ALIGN_DIR> {
        new (settings: ig.ACTION_STEP.MOVE_ALIGN_DIR.Settings): MOVE_ALIGN_DIR;
      }
      var MOVE_ALIGN_DIR: MOVE_ALIGN_DIR_CONSTRUCTOR;

      namespace SET_ATTRIB_CLOSEST_ENTITY {
        interface Settings {
          entityAttrib?: string;
          indexAttrib?: string;
          entities: ig.Event.GetEntity[];
          selectBy: unknown;
        }
      }
      interface SET_ATTRIB_CLOSEST_ENTITY extends ig.ActionStepBase {
        _wm: ig.Config;
        entityAttrib?: string;
        indexAttrib?: string;
        entities: ig.Event.GetEntity[];
      }
      interface SET_ATTRIB_CLOSEST_ENTITY_CONSTRUCTOR
        extends ImpactClass<SET_ATTRIB_CLOSEST_ENTITY> {
        new (
          settings: ig.ACTION_STEP.SET_ATTRIB_CLOSEST_ENTITY.Settings,
        ): SET_ATTRIB_CLOSEST_ENTITY;
      }
      var SET_ATTRIB_CLOSEST_ENTITY: SET_ATTRIB_CLOSEST_ENTITY_CONSTRUCTOR;

      namespace MOVE_TO_ATTRIB_ENTITY {
        interface Settings {
          attrib: string;
          positionType: unknown;
          distance: number;
          orthogonalDist: number;
          maxOrthDelta?: number;
          adjustTarget: boolean;
          maxTime: number;
          forceTime: boolean;
          precise: boolean;
          saveToAttrib?: string;
          selectBy?: unknown;
        }
      }
      interface MOVE_TO_ATTRIB_ENTITY extends ig.ActionStepBase {
        _wm: ig.Config;
        attrib: string;
        distance: number;
        orthogonalDist: number;
        maxOrthDelta: number;
        adjustTarget: boolean;
        maxTime: number;
        forceTime: boolean;
        precise: boolean;
        saveToAttrib: string;
      }
      interface MOVE_TO_ATTRIB_ENTITY_CONSTRUCTOR extends ImpactClass<MOVE_TO_ATTRIB_ENTITY> {
        new (settings: ig.ACTION_STEP.MOVE_TO_ATTRIB_ENTITY.Settings): MOVE_TO_ATTRIB_ENTITY;
      }
      var MOVE_TO_ATTRIB_ENTITY: MOVE_TO_ATTRIB_ENTITY_CONSTRUCTOR;

      namespace SET_COMBATANT_PARTY {
        interface Settings {
          party: keyof typeof sc.COMBATANT_PARTY;
        }
      }
      interface SET_COMBATANT_PARTY extends ig.ActionStepBase {
        _wm: ig.Config;
        party: sc.COMBATANT_PARTY;
      }
      interface SET_COMBATANT_PARTY_CONSTRUCTOR extends ImpactClass<SET_COMBATANT_PARTY> {
        new (settings: ig.ACTION_STEP.SET_COMBATANT_PARTY.Settings): SET_COMBATANT_PARTY;
      }
      var SET_COMBATANT_PARTY: SET_COMBATANT_PARTY_CONSTRUCTOR;

      namespace JUMP_TO_TARGET {
        interface Settings {
          jumpSpeed: number;
          adjustAbove: number;
          offset?: Vec2;
        }
      }
      interface JUMP_TO_TARGET extends ig.ActionStepBase {
        jumpSpeed: number;
        adjustAbove: number;
        offset: Vec2;
        _wm: ig.Config;
      }
      interface JUMP_TO_TARGET_CONSTRUCTOR extends ImpactClass<JUMP_TO_TARGET> {
        new (settings: ig.ACTION_STEP.JUMP_TO_TARGET.Settings): JUMP_TO_TARGET;
      }
      var JUMP_TO_TARGET: JUMP_TO_TARGET_CONSTRUCTOR;

      namespace SET_Z_VEL_TO_TARGET {
        interface Settings {
          speed: number;
          distance: number;
          minZVel?: number;
          maxZVel?: number;
        }
      }
      interface SET_Z_VEL_TO_TARGET extends ig.ActionStepBase {
        value: unknown;
        _wm: ig.Config;
        distance: number;
        speed: number;
        minZVel: number;
        maxZVel: number;
      }
      interface SET_Z_VEL_TO_TARGET_CONSTRUCTOR extends ImpactClass<SET_Z_VEL_TO_TARGET> {
        new (settings: ig.ACTION_STEP.SET_Z_VEL_TO_TARGET.Settings): SET_Z_VEL_TO_TARGET;
      }
      var SET_Z_VEL_TO_TARGET: SET_Z_VEL_TO_TARGET_CONSTRUCTOR;

      namespace JUMP_TARGET_MOVEMENT {
        interface Settings {
          stopType: unknown;
          stopBeforeTime: number;
          distance: number;
          offset?: Vec2;
          faceAlignOffset?: boolean;
          rotateSpeed?: number;
          adjustSpeedMax?: number;
          turnMinSpeed?: number;
          maxSpeedChange?: number;
          missileMode: number;
          underEstimation?: number;
          cancelIfBelowFall: boolean;
        }
      }
      interface JUMP_TARGET_MOVEMENT extends ig.ActionStepBase {
        adjustAbove: unknown;
        offset: Vec2;
        _wm: ig.Config;
        stopBeforeTime: number;
        distance: number;
        faceAlignOffset: boolean;
        rotateSpeed: number;
        adjustSpeedMax: number;
        turnMinSpeed: number;
        maxSpeedChange: number;
        missileMode: number;
        underEstimation: number;
        cancelIfBelowFall: boolean;
      }
      interface JUMP_TARGET_MOVEMENT_CONSTRUCTOR extends ImpactClass<JUMP_TARGET_MOVEMENT> {
        new (settings: ig.ACTION_STEP.JUMP_TARGET_MOVEMENT.Settings): JUMP_TARGET_MOVEMENT;
      }
      var JUMP_TARGET_MOVEMENT: JUMP_TARGET_MOVEMENT_CONSTRUCTOR;

      namespace SET_MISSILE_SPEED {
        interface Settings {
          speed?: number;
          minTime?: number;
        }
      }
      interface SET_MISSILE_SPEED extends ig.ActionStepBase {
        _wm: ig.Config;
        speed: number;
        minTime: number;
      }
      interface SET_MISSILE_SPEED_CONSTRUCTOR extends ImpactClass<SET_MISSILE_SPEED> {
        new (settings: ig.ACTION_STEP.SET_MISSILE_SPEED.Settings): SET_MISSILE_SPEED;
      }
      var SET_MISSILE_SPEED: SET_MISSILE_SPEED_CONSTRUCTOR;

      namespace ESCAPE_FROM_TARGET {
        interface Settings {
          distance: number;
          minTime: number;
          maxTime: number;
        }
      }
      interface ESCAPE_FROM_TARGET extends ig.ActionStepBase {
        distance: number;
        minTime: number;
        maxTime: number;
        _wm: ig.Config;
      }
      interface ESCAPE_FROM_TARGET_CONSTRUCTOR extends ImpactClass<ESCAPE_FROM_TARGET> {
        new (settings: ig.ACTION_STEP.ESCAPE_FROM_TARGET.Settings): ESCAPE_FROM_TARGET;
      }
      var ESCAPE_FROM_TARGET: ESCAPE_FROM_TARGET_CONSTRUCTOR;

      namespace CIRCLE_TARGET {
        interface Settings {
          minTime: number;
          maxTime: number;
          keepFaceDirection: boolean;
          towardsRotate: number;
          towardMinDist?: number;
          stopBeforeEdge: boolean;
        }
      }
      interface CIRCLE_TARGET extends ig.ActionStepBase {
        minTime: number;
        maxTime: number;
        _wm: ig.Config;
        towardsRotate: number;
        towardMinDist?: number;
        keepFaceDirection: boolean;
        stopBeforeEdge: boolean;
      }
      interface CIRCLE_TARGET_CONSTRUCTOR extends ImpactClass<CIRCLE_TARGET> {
        new (settings: ig.ACTION_STEP.CIRCLE_TARGET.Settings): CIRCLE_TARGET;
      }
      var CIRCLE_TARGET: CIRCLE_TARGET_CONSTRUCTOR;

      namespace NEW_CIRCLE_TARGET {
        interface Settings {
          time: number;
          ccw: boolean;
          targetDistance: number;
          yScale: number;
          relativeVel: number;
          dodgeVel: number;
          avoidEnemyRadius: number;
        }
      }
      interface NEW_CIRCLE_TARGET extends ig.ActionStepBase {
        minTime: unknown;
        maxTime: unknown;
        _wm: ig.Config;
        time: number;
        ccw: boolean;
        targetDistance: number;
        yScale: number;
        relativeVel: number;
        dodgeVel: number;
        avoidEnemyRadius: number;
      }
      interface NEW_CIRCLE_TARGET_CONSTRUCTOR extends ImpactClass<NEW_CIRCLE_TARGET> {
        new (settings: ig.ACTION_STEP.NEW_CIRCLE_TARGET.Settings): NEW_CIRCLE_TARGET;
      }
      var NEW_CIRCLE_TARGET: NEW_CIRCLE_TARGET_CONSTRUCTOR;

      namespace STICK_TO_TARGET {
        interface Settings {
          target: unknown;
          align: keyof typeof ig.ENTITY_ALIGN;
          offset: Vec3;
          duration: number;
          waitUntil?: string;
        }
      }
      interface STICK_TO_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
        duration: number;
        offset: Vec3;
        waitUntil: ig.VarCondition;
      }
      interface STICK_TO_TARGET_CONSTRUCTOR extends ImpactClass<STICK_TO_TARGET> {
        new (settings: ig.ACTION_STEP.STICK_TO_TARGET.Settings): STICK_TO_TARGET;
      }
      var STICK_TO_TARGET: STICK_TO_TARGET_CONSTRUCTOR;

      namespace STICKY_CIRCLE_AROUND {
        interface Settings {
          target: unknown;
          distance?: ig.Event.NumberExpression;
          duration: number;
          ccw: boolean;
          rotateTime?: number;
          rotateTimeEnd?: number;
          distAdjustSpeed: number;
          zDistance?: number;
          waitUntil?: string;
          waitTargetAlign: boolean;
        }
      }
      interface STICKY_CIRCLE_AROUND extends ig.ActionStepBase {
        _wm: ig.Config;
        distance: ig.Event.NumberExpression;
        duration: number;
        rotateTime: number;
        rotateTimeEnd: number;
        distAdjustSpeed: number;
        ccw: boolean;
        zDistance: number;
        waitUntil: ig.VarCondition;
        waitTargetAlign: boolean;
      }
      interface STICKY_CIRCLE_AROUND_CONSTRUCTOR extends ImpactClass<STICKY_CIRCLE_AROUND> {
        new (settings: ig.ACTION_STEP.STICKY_CIRCLE_AROUND.Settings): STICKY_CIRCLE_AROUND;
      }
      var STICKY_CIRCLE_AROUND: STICKY_CIRCLE_AROUND_CONSTRUCTOR;

      namespace SET_CIRCLE_AROUND_POS {
        interface Settings {
          target: unknown;
          proxyGroup: string;
          count: number;
          attribBlock?: string;
        }
      }
      interface SET_CIRCLE_AROUND_POS extends ig.ActionStepBase {
        _wm: ig.Config;
        proxyGroup: string;
        count: number;
        attribBlock?: string;

        _getDeltaVector(this: this, a: unknown, b: unknown): unknown;
      }
      interface SET_CIRCLE_AROUND_POS_CONSTRUCTOR extends ImpactClass<SET_CIRCLE_AROUND_POS> {
        new (settings: ig.ACTION_STEP.SET_CIRCLE_AROUND_POS.Settings): SET_CIRCLE_AROUND_POS;
      }
      var SET_CIRCLE_AROUND_POS: SET_CIRCLE_AROUND_POS_CONSTRUCTOR;

      namespace TACKLE {
        interface Settings {
          attack: sc.AttackInfo.AttackSettings;
          time: number;
          missReactTime?: number;
          cancelOnHit: boolean;
          withBranches?: boolean;
          collideCancel?: number;
          rotateSpeed?: number;
          orthoDirFactor: number;
          ignoreLastHit: boolean;
          collideSlip: boolean;
        }
      }
      interface TACKLE extends ig.ActionStepBase {
        time: number;
        missReactTime?: number;
        attack: sc.AttackInfo.AttackSettings;
        cancelOnHit: boolean;
        withBranches: boolean;
        rotateSpeed: number;
        _wm: ig.Config;
        collideCancel: number;
        collideSlip: boolean;
        orthoDirFactor: number;
        ignoreLastHit: boolean;
      }
      interface TACKLE_CONSTRUCTOR extends ImpactClass<TACKLE> {
        new (settings: ig.ACTION_STEP.TACKLE.Settings): TACKLE;
      }
      var TACKLE: TACKLE_CONSTRUCTOR;

      namespace CIRCLE_ATTACK {
        interface Settings {
          attack: sc.AttackInfo.AttackSettings;
          align: keyof typeof ig.ENTITY_ALIGN;
          offset: Vec3;
          radius: number;
          dir?: Vec2;
          yScale: number;
          zHeight: number;
          centralAngle: number;
          startAngle?: number;
          duration: number;
          expandRadius: number;
          alwaysFull: boolean;
          clockwise: boolean;
          flipLeftFace: number;
          rectangular: boolean;
          repeat: boolean;
          uniformHitDir: boolean;
          fixPos: boolean;
          checkCollision: boolean;
          party?: keyof typeof sc.COMBATANT_PARTY;
        }
      }
      interface CIRCLE_ATTACK extends ig.ActionStepBase {
        circleSettings: ig.ACTION_STEP.CIRCLE_ATTACK.Settings;
        attack: unknown;
        fixPos: unknown;
        _wm: ig.Config;
      }
      interface CIRCLE_ATTACK_CONSTRUCTOR extends ImpactClass<CIRCLE_ATTACK> {
        new (settings: ig.ACTION_STEP.CIRCLE_ATTACK.Settings): CIRCLE_ATTACK;
      }
      var CIRCLE_ATTACK: CIRCLE_ATTACK_CONSTRUCTOR;

      namespace COMBAT_SWEEP {
        interface Settings {
          sweepType: keyof typeof sc.COMBAT_SWEEPS;
          reversed: boolean;
          faceCount: number;
          flipLeftFace: boolean;
        }
      }
      interface COMBAT_SWEEP extends ig.ActionStepBase {
        _wm: ig.Config;
        sweepType: sc.COMBAT_SWEEPS;
        reversed: boolean;
        faceCount: number;
        flipLeftFace: boolean;
      }
      interface COMBAT_SWEEP_CONSTRUCTOR extends ImpactClass<COMBAT_SWEEP> {
        new (settings: ig.ACTION_STEP.COMBAT_SWEEP.Settings): COMBAT_SWEEP;
      }
      var COMBAT_SWEEP: COMBAT_SWEEP_CONSTRUCTOR;

      namespace SET_TARGET_Z_VEL {
        interface Settings {
          value: number;
        }
      }
      interface SET_TARGET_Z_VEL extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_TARGET_Z_VEL_CONSTRUCTOR extends ImpactClass<SET_TARGET_Z_VEL> {
        new (settings: ig.ACTION_STEP.SET_TARGET_Z_VEL.Settings): SET_TARGET_Z_VEL;
      }
      var SET_TARGET_Z_VEL: SET_TARGET_Z_VEL_CONSTRUCTOR;

      namespace PUSH_PULL_FORCE {
        interface Settings {
          strength: keyof typeof sc.PUSH_PULL_STRENGTH;
          pull: boolean;
          radius: number;
          fadeRadius: number;
          minRadius: number;
          faceDist?: number;
          zHeight?: number;
          duration: number;
          party?: keyof typeof sc.COMBATANT_PARTY;
          effect?: ig.EffectHandle.Settings;
          align: keyof typeof ig.ENTITY_ALIGN;
        }
      }
      interface PUSH_PULL_FORCE extends ig.ActionStepBase {
        pushPullSettings: ig.ACTION_STEP.PUSH_PULL_FORCE.Settings;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface PUSH_PULL_FORCE_CONSTRUCTOR extends ImpactClass<PUSH_PULL_FORCE> {
        new (settings: ig.ACTION_STEP.PUSH_PULL_FORCE.Settings): PUSH_PULL_FORCE;
      }
      var PUSH_PULL_FORCE: PUSH_PULL_FORCE_CONSTRUCTOR;

      namespace SET_INVINCIBLE {
        interface Settings {
          value: number;
        }
      }
      interface SET_INVINCIBLE extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_INVINCIBLE_CONSTRUCTOR extends ImpactClass<SET_INVINCIBLE> {
        new (settings: ig.ACTION_STEP.SET_INVINCIBLE.Settings): SET_INVINCIBLE;
      }
      var SET_INVINCIBLE: SET_INVINCIBLE_CONSTRUCTOR;

      namespace MOD_GENERIC_PROXY {
        interface Settings {
          killEffect?: ig.EffectHandle.Settings;
          clearKillEffect: boolean;
          hp?: number;
          threat?: boolean;
        }
      }
      interface MOD_GENERIC_PROXY extends ig.ActionStepBase {
        killEffect: unknown;
        clearKillEffect: boolean;
        hp: unknown;
        threat: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface MOD_GENERIC_PROXY_CONSTRUCTOR extends ImpactClass<MOD_GENERIC_PROXY> {
        new (settings: ig.ACTION_STEP.MOD_GENERIC_PROXY.Settings): MOD_GENERIC_PROXY;
      }
      var MOD_GENERIC_PROXY: MOD_GENERIC_PROXY_CONSTRUCTOR;

      namespace CONNECT_PROXY_TO_TARGET {
        interface Settings {}
      }
      interface CONNECT_PROXY_TO_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CONNECT_PROXY_TO_TARGET_CONSTRUCTOR extends ImpactClass<CONNECT_PROXY_TO_TARGET> {
        new (settings: ig.ACTION_STEP.CONNECT_PROXY_TO_TARGET.Settings): CONNECT_PROXY_TO_TARGET;
      }
      var CONNECT_PROXY_TO_TARGET: CONNECT_PROXY_TO_TARGET_CONSTRUCTOR;

      namespace DISCONNECT_PROXY_FROM_TARGET {
        interface Settings {}
      }
      interface DISCONNECT_PROXY_FROM_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface DISCONNECT_PROXY_FROM_TARGET_CONSTRUCTOR
        extends ImpactClass<DISCONNECT_PROXY_FROM_TARGET> {
        new (
          settings: ig.ACTION_STEP.DISCONNECT_PROXY_FROM_TARGET.Settings,
        ): DISCONNECT_PROXY_FROM_TARGET;
      }
      var DISCONNECT_PROXY_FROM_TARGET: DISCONNECT_PROXY_FROM_TARGET_CONSTRUCTOR;

      namespace SET_ELEMENT_FILTER {
        interface Settings {
          value: keyof typeof sc.ELEMENT;
        }
      }
      interface SET_ELEMENT_FILTER extends ig.ActionStepBase {
        value: sc.ELEMENT;
        _wm: ig.Config;
      }
      interface SET_ELEMENT_FILTER_CONSTRUCTOR extends ImpactClass<SET_ELEMENT_FILTER> {
        new (settings: ig.ACTION_STEP.SET_ELEMENT_FILTER.Settings): SET_ELEMENT_FILTER;
      }
      var SET_ELEMENT_FILTER: SET_ELEMENT_FILTER_CONSTRUCTOR;

      namespace DODGE_FREE_LINE {
        interface Settings {
          time: number;
        }
      }
      interface DODGE_FREE_LINE extends ig.ActionStepBase {
        time: number;
        _wm: ig.Config;
      }
      interface DODGE_FREE_LINE_CONSTRUCTOR extends ImpactClass<DODGE_FREE_LINE> {
        new (settings: ig.ACTION_STEP.DODGE_FREE_LINE.Settings): DODGE_FREE_LINE;
      }
      var DODGE_FREE_LINE: DODGE_FREE_LINE_CONSTRUCTOR;

      namespace ENABLE_REACTION {
        interface Settings {
          reaction: string;
        }
      }
      interface ENABLE_REACTION extends ig.ActionStepBase {
        reaction: string;
        _wm: ig.Config;
      }
      interface ENABLE_REACTION_CONSTRUCTOR extends ImpactClass<ENABLE_REACTION> {
        new (settings: ig.ACTION_STEP.ENABLE_REACTION.Settings): ENABLE_REACTION;
      }
      var ENABLE_REACTION: ENABLE_REACTION_CONSTRUCTOR;

      namespace SET_SPIKE_DAMAGE {
        interface Settings {
          value: number;
        }
      }
      interface SET_SPIKE_DAMAGE extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_SPIKE_DAMAGE_CONSTRUCTOR extends ImpactClass<SET_SPIKE_DAMAGE> {
        new (settings: ig.ACTION_STEP.SET_SPIKE_DAMAGE.Settings): SET_SPIKE_DAMAGE;
      }
      var SET_SPIKE_DAMAGE: SET_SPIKE_DAMAGE_CONSTRUCTOR;

      namespace DISABLE_REACTION {
        interface Settings {
          reaction: string;
        }
      }
      interface DISABLE_REACTION extends ig.ActionStepBase {
        reaction: string;
        _wm: ig.Config;
      }
      interface DISABLE_REACTION_CONSTRUCTOR extends ImpactClass<DISABLE_REACTION> {
        new (settings: ig.ACTION_STEP.DISABLE_REACTION.Settings): DISABLE_REACTION;
      }
      var DISABLE_REACTION: DISABLE_REACTION_CONSTRUCTOR;

      namespace SET_DAMAGE_FACTOR {
        interface Settings {
          value: number;
        }
      }
      interface SET_DAMAGE_FACTOR extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_DAMAGE_FACTOR_CONSTRUCTOR extends ImpactClass<SET_DAMAGE_FACTOR> {
        new (settings: ig.ACTION_STEP.SET_DAMAGE_FACTOR.Settings): SET_DAMAGE_FACTOR;
      }
      var SET_DAMAGE_FACTOR: SET_DAMAGE_FACTOR_CONSTRUCTOR;

      namespace SET_HIT_STABLE {
        interface Settings {
          value: keyof typeof sc.ATTACK_TYPE;
        }
      }
      interface SET_HIT_STABLE extends ig.ActionStepBase {
        value: sc.ATTACK_TYPE;
        _wm: ig.Config;
      }
      interface SET_HIT_STABLE_CONSTRUCTOR extends ImpactClass<SET_HIT_STABLE> {
        new (settings: ig.ACTION_STEP.SET_HIT_STABLE.Settings): SET_HIT_STABLE;
      }
      var SET_HIT_STABLE: SET_HIT_STABLE_CONSTRUCTOR;

      namespace SET_DAMAGE_CEILING {
        interface Settings {
          value: number;
          forwardToProxies: boolean;
        }
      }
      interface SET_DAMAGE_CEILING extends ig.ActionStepBase {
        value: number;
        _wm: ig.Config;
      }
      interface SET_DAMAGE_CEILING_CONSTRUCTOR extends ImpactClass<SET_DAMAGE_CEILING> {
        new (settings: ig.ACTION_STEP.SET_DAMAGE_CEILING.Settings): SET_DAMAGE_CEILING;
      }
      var SET_DAMAGE_CEILING: SET_DAMAGE_CEILING_CONSTRUCTOR;

      namespace CLEAR_DAMAGE_CEILING {
        interface Settings {
          forwardToProxies: boolean;
        }
      }
      interface CLEAR_DAMAGE_CEILING extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_DAMAGE_CEILING_CONSTRUCTOR extends ImpactClass<CLEAR_DAMAGE_CEILING> {
        new (settings: ig.ACTION_STEP.CLEAR_DAMAGE_CEILING.Settings): CLEAR_DAMAGE_CEILING;
      }
      var CLEAR_DAMAGE_CEILING: CLEAR_DAMAGE_CEILING_CONSTRUCTOR;

      namespace SET_ENEMY_STATE {
        interface Settings {
          enemyState: string;
          switchConfig?: boolean;
        }
      }
      interface SET_ENEMY_STATE extends ig.ActionStepBase {
        enemyState: string;
        _wm: ig.Config;
        switchConfig?: boolean;
      }
      interface SET_ENEMY_STATE_CONSTRUCTOR extends ImpactClass<SET_ENEMY_STATE> {
        new (settings: ig.ACTION_STEP.SET_ENEMY_STATE.Settings): SET_ENEMY_STATE;
      }
      var SET_ENEMY_STATE: SET_ENEMY_STATE_CONSTRUCTOR;

      namespace SHOOT_PROXY {
        interface Settings {
          proxy: sc.ProxyTools.PrepareSrcProxySetting;
          offset: Vec3;
          align: keyof typeof ig.ENTITY_ALIGN;
          dir?: Vec2;
          aimAtTarget?: boolean;
          posType?: unknown;
        }
      }
      interface SHOOT_PROXY extends ig.ActionStepBase {
        proxySrc: sc.ProxySpawnerBase;
        align: ig.ENTITY_ALIGN;
        dir?: Vec2;
        posType: unknown;
        _wm: ig.Config;
        offset: Vec3;
        aimAtTarget?: boolean;

        clearCached(this: this): void;
      }
      interface SHOOT_PROXY_CONSTRUCTOR extends ImpactClass<SHOOT_PROXY> {
        new (settings: ig.ACTION_STEP.SHOOT_PROXY.Settings): SHOOT_PROXY;
      }
      var SHOOT_PROXY: SHOOT_PROXY_CONSTRUCTOR;

      namespace SET_HIT_PROXY {
        interface Settings {
          proxy: sc.ProxyTools.PrepareSrcProxySetting;
          posType: keyof typeof sc.COMBAT_HIT_PROXY_POS;
          align: keyof typeof ig.ENTITY_ALIGN;
          offset: Vec3;
        }
      }
      interface SET_HIT_PROXY extends ig.ActionStepBase {
        proxySrc: sc.ProxySpawnerBase;
        align: ig.ENTITY_ALIGN;
        posType: sc.COMBAT_HIT_PROXY_POS;
        _wm: ig.Config;
        offset: Vec3;

        clearCached(this: this): void;
      }
      interface SET_HIT_PROXY_CONSTRUCTOR extends ImpactClass<SET_HIT_PROXY> {
        new (settings: ig.ACTION_STEP.SET_HIT_PROXY.Settings): SET_HIT_PROXY;
      }
      var SET_HIT_PROXY: SET_HIT_PROXY_CONSTRUCTOR;

      namespace SET_PROXY_OWNER_TO_POS {
        interface Settings {}
      }
      interface SET_PROXY_OWNER_TO_POS extends ig.ActionStepBase {
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SET_PROXY_OWNER_TO_POS_CONSTRUCTOR extends ImpactClass<SET_PROXY_OWNER_TO_POS> {
        new (settings: ig.ACTION_STEP.SET_PROXY_OWNER_TO_POS.Settings): SET_PROXY_OWNER_TO_POS;
      }
      var SET_PROXY_OWNER_TO_POS: SET_PROXY_OWNER_TO_POS_CONSTRUCTOR;

      namespace CLEAR_HIT_PROXY {
        interface Settings {}
      }
      interface CLEAR_HIT_PROXY extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_HIT_PROXY_CONSTRUCTOR extends ImpactClass<CLEAR_HIT_PROXY> {
        new (settings: ig.ACTION_STEP.CLEAR_HIT_PROXY.Settings): CLEAR_HIT_PROXY;
      }
      var CLEAR_HIT_PROXY: CLEAR_HIT_PROXY_CONSTRUCTOR;

      namespace SHOOT_PROXY_RANGE {
        interface Settings {
          proxy: sc.ProxyTools.PrepareSrcProxySetting;
          offset: Vec3;
          align: keyof typeof ig.ENTITY_ALIGN;
          dir?: Vec2;
          centralAngle: number;
          startAngle?: number;
          angleVary: number;
          startDist?: ig.Event.NumberExpression;
          startDistAdd?: number;
          startDistCollide: keyof typeof sc.SPAWN_START_DIST_COLLIDE;
          limitRangeOnColl?: boolean;
          random: boolean;
          count: ig.Event.NumberExpression;
          duration: ig.Event.NumberExpression;
          clockwise: boolean;
          flipLeftFace: number;
          offsetArea?: Vec2;
          circularArea: boolean;
          uniformDir: number;
          delay: number;
          repeat: boolean;
          terrainFilter?: string[];
          maxGroundDistance?: number;
          posEntity?: unknown;
          yScale?: number;
          aimAtTarget?: boolean;
        }
      }
      interface SHOOT_PROXY_RANGE extends ig.ActionStepBase {
        forceSettings: ig.ACTION_STEP.SHOOT_PROXY_RANGE.Settings;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SHOOT_PROXY_RANGE_CONSTRUCTOR extends ImpactClass<SHOOT_PROXY_RANGE> {
        new (settings: ig.ACTION_STEP.SHOOT_PROXY_RANGE.Settings): SHOOT_PROXY_RANGE;
      }
      var SHOOT_PROXY_RANGE: SHOOT_PROXY_RANGE_CONSTRUCTOR;

      namespace SHOOT_PROXY_GRID {
        interface Settings {
          proxies: sc.ProxyTools.PrepareSrcProxySetting[];
          pattern: number[][];
          tilesize?: number;
          align: keyof typeof ig.ENTITY_ALIGN;
          flow: keyof typeof sc.PROXY_GRID_FLOW;
          offset: Vec3;
          duration: number;
          spawnDelay?: number;
          posEntity?: unknown;
        }
      }
      interface SHOOT_PROXY_GRID extends ig.ActionStepBase {
        _wm: ig.Config;
        forceSettings: ig.ACTION_STEP.SHOOT_PROXY_GRID.Settings;

        clearCached(this: this): void;
      }
      interface SHOOT_PROXY_GRID_CONSTRUCTOR extends ImpactClass<SHOOT_PROXY_GRID> {
        new (settings: ig.ACTION_STEP.SHOOT_PROXY_GRID.Settings): SHOOT_PROXY_GRID;
      }
      var SHOOT_PROXY_GRID: SHOOT_PROXY_GRID_CONSTRUCTOR;

      namespace STOP_REPEATING_FORCE {
        interface Settings {}
      }
      interface STOP_REPEATING_FORCE extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface STOP_REPEATING_FORCE_CONSTRUCTOR extends ImpactClass<STOP_REPEATING_FORCE> {
        new (settings: ig.ACTION_STEP.STOP_REPEATING_FORCE.Settings): STOP_REPEATING_FORCE;
      }
      var STOP_REPEATING_FORCE: STOP_REPEATING_FORCE_CONSTRUCTOR;

      namespace UNSTICK_STICKING_PROXIES {
        interface Settings {}
      }
      interface UNSTICK_STICKING_PROXIES extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface UNSTICK_STICKING_PROXIES_CONSTRUCTOR extends ImpactClass<UNSTICK_STICKING_PROXIES> {
        new (settings: ig.ACTION_STEP.UNSTICK_STICKING_PROXIES.Settings): UNSTICK_STICKING_PROXIES;
      }
      var UNSTICK_STICKING_PROXIES: UNSTICK_STICKING_PROXIES_CONSTRUCTOR;

      namespace REMOVE_PROXIES {
        interface Settings {
          sticking: boolean;
          group: string;
          target?: unknown;
          keepCount?: number;
          ignoreSelf: boolean;
        }
      }
      interface REMOVE_PROXIES extends ig.ActionStepBase {
        _wm: ig.Config;
        sticking: boolean;
        group: string;
        keepCount: number;
        ignoreSelf: boolean;
      }
      interface REMOVE_PROXIES_CONSTRUCTOR extends ImpactClass<REMOVE_PROXIES> {
        new (settings: ig.ACTION_STEP.REMOVE_PROXIES.Settings): REMOVE_PROXIES;
      }
      var REMOVE_PROXIES: REMOVE_PROXIES_CONSTRUCTOR;

      namespace FANCY_AIM {
        interface Settings {
          bounces: number;
          size: number;
          time: number;
        }
      }
      interface FANCY_AIM extends ig.ActionStepBase {
        _wm: ig.Config;
        bounces: number;
        size: number;
        time: number;
      }
      interface FANCY_AIM_CONSTRUCTOR extends ImpactClass<FANCY_AIM> {
        new (settings: ig.ACTION_STEP.FANCY_AIM.Settings): FANCY_AIM;
      }
      var FANCY_AIM: FANCY_AIM_CONSTRUCTOR;

      namespace WAIT_UNTIL_PLAYER_ACTION {
        interface Settings {
          actions: string[];
          attrib?: string;
          target?: unknown;
          maxTime?: number;
        }
      }
      interface WAIT_UNTIL_PLAYER_ACTION extends ig.ActionStepBase {
        _wm: ig.Config;
        actions: string[];
        attrib: string;
        maxTime: number;
      }
      interface WAIT_UNTIL_PLAYER_ACTION_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_PLAYER_ACTION> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL_PLAYER_ACTION.Settings): WAIT_UNTIL_PLAYER_ACTION;
      }
      var WAIT_UNTIL_PLAYER_ACTION: WAIT_UNTIL_PLAYER_ACTION_CONSTRUCTOR;

      namespace SHARE_PROXY_TEMP_TARGET {
        interface Settings {
          group: string;
        }
      }
      interface SHARE_PROXY_TEMP_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
        group: string;
      }
      interface SHARE_PROXY_TEMP_TARGET_CONSTRUCTOR extends ImpactClass<SHARE_PROXY_TEMP_TARGET> {
        new (settings: ig.ACTION_STEP.SHARE_PROXY_TEMP_TARGET.Settings): SHARE_PROXY_TEMP_TARGET;
      }
      var SHARE_PROXY_TEMP_TARGET: SHARE_PROXY_TEMP_TARGET_CONSTRUCTOR;

      namespace WAIT_UNTIL_PROXIES_DONE {
        interface Settings {
          group?: string;
        }
      }
      interface WAIT_UNTIL_PROXIES_DONE extends ig.ActionStepBase {
        _wm: ig.Config;
        group?: string;
      }
      interface WAIT_UNTIL_PROXIES_DONE_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_PROXIES_DONE> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL_PROXIES_DONE.Settings): WAIT_UNTIL_PROXIES_DONE;
      }
      var WAIT_UNTIL_PROXIES_DONE: WAIT_UNTIL_PROXIES_DONE_CONSTRUCTOR;

      namespace WAIT_UNTIL_COMBAT_TRUE {
        interface Settings {
          conditions: sc.CombatConditions.ConditionConfig[];
          maxTime?: number;
        }
      }
      interface WAIT_UNTIL_COMBAT_TRUE extends ig.ActionStepBase {
        _wm: ig.Config;
        conditions: sc.CombatConditions;
        maxTime: number;
      }
      interface WAIT_UNTIL_COMBAT_TRUE_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_COMBAT_TRUE> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL_COMBAT_TRUE.Settings): WAIT_UNTIL_COMBAT_TRUE;
      }
      var WAIT_UNTIL_COMBAT_TRUE: WAIT_UNTIL_COMBAT_TRUE_CONSTRUCTOR;

      namespace WAIT_UNTIL_TRAP_OVER {
        interface Settings {}
      }
      interface WAIT_UNTIL_TRAP_OVER extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface WAIT_UNTIL_TRAP_OVER_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_TRAP_OVER> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL_TRAP_OVER.Settings): WAIT_UNTIL_TRAP_OVER;
      }
      var WAIT_UNTIL_TRAP_OVER: WAIT_UNTIL_TRAP_OVER_CONSTRUCTOR;

      namespace WAIT_UNTIL_TARGET_DEFEATED {
        interface Settings {
          maxTime: number;
        }
      }
      interface WAIT_UNTIL_TARGET_DEFEATED extends ig.ActionStepBase {
        _wm: ig.Config;
        maxTime: number;
      }
      interface WAIT_UNTIL_TARGET_DEFEATED_CONSTRUCTOR
        extends ImpactClass<WAIT_UNTIL_TARGET_DEFEATED> {
        new (
          settings: ig.ACTION_STEP.WAIT_UNTIL_TARGET_DEFEATED.Settings,
        ): WAIT_UNTIL_TARGET_DEFEATED;
      }
      var WAIT_UNTIL_TARGET_DEFEATED: WAIT_UNTIL_TARGET_DEFEATED_CONSTRUCTOR;

      namespace SPAWN_BURSTS {
        interface Settings {
          attack: sc.AttackInfo.AttackSettings;
          offset: Vec3;
          dir?: Vec2;
          dirRotate: number;
          inFaceDir: boolean;
          effect: ig.EffectHandle.Settings;
          moveSpeed?: number;
          spawnCount?: number;
          spawnInterval?: number;
          damageDelay?: number;
          radius?: number;
          zHeight?: number;
          steerDegree?: number;
          adjustTime?: number;
          cancelOnCollision: boolean;
        }
      }
      interface SPAWN_BURSTS extends ig.ActionStepBase {
        dir: Vec2;
        inFaceDir: boolean;
        burstSettings: ig.ACTION_STEP.SPAWN_BURSTS.Settings;
        dirRotate: unknown;
        _wm: ig.Config;
        offset: Vec3;

        clearCached(this: this): void;
      }
      interface SPAWN_BURSTS_CONSTRUCTOR extends ImpactClass<SPAWN_BURSTS> {
        new (settings: ig.ACTION_STEP.SPAWN_BURSTS.Settings): SPAWN_BURSTS;
      }
      var SPAWN_BURSTS: SPAWN_BURSTS_CONSTRUCTOR;

      namespace DIRECT_HIT {
        interface Settings {
          selectType: unknown;
          attack: sc.AttackInfo.AttackSettings;
          effect?: ig.EffectHandle.Settings;
          hitDir: keyof typeof sc.DIRECT_HIT_DIR;
          align: keyof typeof ig.ENTITY_ALIGN;
          hitCount?: number;
          hitDelay: number;
        }
      }
      interface DIRECT_HIT extends ig.ActionStepBase {
        directHitSettings: ig.ACTION_STEP.DIRECT_HIT.Settings;
        effect: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface DIRECT_HIT_CONSTRUCTOR extends ImpactClass<DIRECT_HIT> {
        new (settings: ig.ACTION_STEP.DIRECT_HIT.Settings): DIRECT_HIT;
      }
      var DIRECT_HIT: DIRECT_HIT_CONSTRUCTOR;

      namespace CLEAR_STUN_LOCKED {
        interface Settings {}
      }
      interface CLEAR_STUN_LOCKED extends ig.ActionStepBase {
        directHitSettings: unknown;
        effect: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface CLEAR_STUN_LOCKED_CONSTRUCTOR extends ImpactClass<CLEAR_STUN_LOCKED> {
        new (settings: ig.ACTION_STEP.CLEAR_STUN_LOCKED.Settings): CLEAR_STUN_LOCKED;
      }
      var CLEAR_STUN_LOCKED: CLEAR_STUN_LOCKED_CONSTRUCTOR;

      namespace REGEN_HP {
        interface Settings {
          value: number;
          target?: unknown;
          hideNumbers: boolean;
        }
      }
      interface REGEN_HP extends ig.ActionStepBase {
        _wm: ig.Config;
        hideNumbers: boolean;
      }
      interface REGEN_HP_CONSTRUCTOR extends ImpactClass<REGEN_HP> {
        new (settings: ig.ACTION_STEP.REGEN_HP.Settings): REGEN_HP;
      }
      var REGEN_HP: REGEN_HP_CONSTRUCTOR;

      namespace HEAL_STATUS {
        interface Settings {}
      }
      interface HEAL_STATUS extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface HEAL_STATUS_CONSTRUCTOR extends ImpactClass<HEAL_STATUS> {
        new (settings: ig.ACTION_STEP.HEAL_STATUS.Settings): HEAL_STATUS;
      }
      var HEAL_STATUS: HEAL_STATUS_CONSTRUCTOR;

      namespace CLEAR_STATUS_BAR {
        interface Settings {}
      }
      interface CLEAR_STATUS_BAR extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_STATUS_BAR_CONSTRUCTOR extends ImpactClass<CLEAR_STATUS_BAR> {
        new (settings: ig.ACTION_STEP.CLEAR_STATUS_BAR.Settings): CLEAR_STATUS_BAR;
      }
      var CLEAR_STATUS_BAR: CLEAR_STATUS_BAR_CONSTRUCTOR;

      namespace SET_ENEMY_STATUS_VISIBILITY {
        interface Settings {
          hpBar?: keyof typeof sc.ENEMY_HP_BAR;
          analyzable?: boolean;
        }
      }
      interface SET_ENEMY_STATUS_VISIBILITY extends ig.ActionStepBase {
        _wm: ig.Config;
        analyzable?: boolean;
      }
      interface SET_ENEMY_STATUS_VISIBILITY_CONSTRUCTOR
        extends ImpactClass<SET_ENEMY_STATUS_VISIBILITY> {
        new (
          settings: ig.ACTION_STEP.SET_ENEMY_STATUS_VISIBILITY.Settings,
        ): SET_ENEMY_STATUS_VISIBILITY;
      }
      var SET_ENEMY_STATUS_VISIBILITY: SET_ENEMY_STATUS_VISIBILITY_CONSTRUCTOR;

      namespace SET_HP_CRITICAL {
        interface Settings {}
      }
      interface SET_HP_CRITICAL extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface SET_HP_CRITICAL_CONSTRUCTOR extends ImpactClass<SET_HP_CRITICAL> {
        new (settings: ig.ACTION_STEP.SET_HP_CRITICAL.Settings): SET_HP_CRITICAL;
      }
      var SET_HP_CRITICAL: SET_HP_CRITICAL_CONSTRUCTOR;

      namespace REDUCE_HP {
        interface Settings {
          basedOn: unknown;
          factor?: number;
          hitNumberFactor?: number;
        }
      }
      interface REDUCE_HP extends ig.ActionStepBase {
        _wm: ig.Config;
        factor: number;
        hitNumberFactor: number;
      }
      interface REDUCE_HP_CONSTRUCTOR extends ImpactClass<REDUCE_HP> {
        new (settings: ig.ACTION_STEP.REDUCE_HP.Settings): REDUCE_HP;
      }
      var REDUCE_HP: REDUCE_HP_CONSTRUCTOR;

      namespace SET_HIT_IGNORE {
        interface Settings {
          value: boolean;
        }
      }
      interface SET_HIT_IGNORE extends ig.ActionStepBase {
        _wm: ig.Config;
        value: boolean;
      }
      interface SET_HIT_IGNORE_CONSTRUCTOR extends ImpactClass<SET_HIT_IGNORE> {
        new (settings: ig.ACTION_STEP.SET_HIT_IGNORE.Settings): SET_HIT_IGNORE;
      }
      var SET_HIT_IGNORE: SET_HIT_IGNORE_CONSTRUCTOR;

      namespace WAIT_UNTIL_GUARDED {
        interface Settings {
          maxTime: number;
          meleeOnly: boolean;
        }
      }
      interface WAIT_UNTIL_GUARDED extends ig.ActionStepBase {
        _wm: ig.Config;
        maxTime: number;
        meleeOnly: boolean;
      }
      interface WAIT_UNTIL_GUARDED_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_GUARDED> {
        new (settings: ig.ACTION_STEP.WAIT_UNTIL_GUARDED.Settings): WAIT_UNTIL_GUARDED;
      }
      var WAIT_UNTIL_GUARDED: WAIT_UNTIL_GUARDED_CONSTRUCTOR;

      namespace ABSORB_BLOCKED_DAMAGE {
        interface Settings {
          factor: number;
        }
      }
      interface ABSORB_BLOCKED_DAMAGE extends ig.ActionStepBase {
        _wm: ig.Config;
        factor: number;
      }
      interface ABSORB_BLOCKED_DAMAGE_CONSTRUCTOR extends ImpactClass<ABSORB_BLOCKED_DAMAGE> {
        new (settings: ig.ACTION_STEP.ABSORB_BLOCKED_DAMAGE.Settings): ABSORB_BLOCKED_DAMAGE;
      }
      var ABSORB_BLOCKED_DAMAGE: ABSORB_BLOCKED_DAMAGE_CONSTRUCTOR;

      namespace ABSORB_DAMAGE {
        interface Settings {
          factor: number;
        }
      }
      interface ABSORB_DAMAGE extends ig.ActionStepBase {
        _wm: ig.Config;
        factor: number;
      }
      interface ABSORB_DAMAGE_CONSTRUCTOR extends ImpactClass<ABSORB_DAMAGE> {
        new (settings: ig.ACTION_STEP.ABSORB_DAMAGE.Settings): ABSORB_DAMAGE;
      }
      var ABSORB_DAMAGE: ABSORB_DAMAGE_CONSTRUCTOR;

      namespace ABSORB_DAMAGE_VIA_SUM {
        interface Settings {
          factor: number;
          multiEnemyScale: number;
        }
      }
      interface ABSORB_DAMAGE_VIA_SUM extends ig.ActionStepBase {
        _wm: ig.Config;
        factor: number;
        multiEnemyScale: number;
      }
      interface ABSORB_DAMAGE_VIA_SUM_CONSTRUCTOR extends ImpactClass<ABSORB_DAMAGE_VIA_SUM> {
        new (settings: ig.ACTION_STEP.ABSORB_DAMAGE_VIA_SUM.Settings): ABSORB_DAMAGE_VIA_SUM;
      }
      var ABSORB_DAMAGE_VIA_SUM: ABSORB_DAMAGE_VIA_SUM_CONSTRUCTOR;

      namespace CONSUME_SP {
        interface Settings {
          sp: number;
        }
      }
      interface CONSUME_SP extends ig.ActionStepBase {
        _wm: ig.Config;
        sp: number;
      }
      interface CONSUME_SP_CONSTRUCTOR extends ImpactClass<CONSUME_SP> {
        new (settings: ig.ACTION_STEP.CONSUME_SP.Settings): CONSUME_SP;
      }
      var CONSUME_SP: CONSUME_SP_CONSTRUCTOR;

      namespace SET_FREE_LINE_CMD {
        interface Settings {
          time: number;
        }
      }
      interface SET_FREE_LINE_CMD extends ig.ActionStepBase {
        time: number;
        _wm: ig.Config;
      }
      interface SET_FREE_LINE_CMD_CONSTRUCTOR extends ImpactClass<SET_FREE_LINE_CMD> {
        new (settings: ig.ACTION_STEP.SET_FREE_LINE_CMD.Settings): SET_FREE_LINE_CMD;
      }
      var SET_FREE_LINE_CMD: SET_FREE_LINE_CMD_CONSTRUCTOR;

      namespace ADD_SHIELD {
        interface Settings {
          name?: string;
          shield: sc.CombatShield.Setting;
          actionDetached: boolean;
          perfectGuardTime?: number;
          target?: unknown;
        }
      }
      interface ADD_SHIELD extends ig.ActionStepBase {
        name?: string;
        shield: sc.CombatShield;
        actionDetached: boolean;
        perfectGuardTime: number;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface ADD_SHIELD_CONSTRUCTOR extends ImpactClass<ADD_SHIELD> {
        new (settings: ig.ACTION_STEP.ADD_SHIELD.Settings): ADD_SHIELD;
      }
      var ADD_SHIELD: ADD_SHIELD_CONSTRUCTOR;

      namespace REMOVE_SHIELD {
        interface Settings {
          name: string;
          target?: unknown;
        }
      }
      interface REMOVE_SHIELD extends ig.ActionStepBase {
        name: string;
        _wm: ig.Config;
      }
      interface REMOVE_SHIELD_CONSTRUCTOR extends ImpactClass<REMOVE_SHIELD> {
        new (settings: ig.ACTION_STEP.REMOVE_SHIELD.Settings): REMOVE_SHIELD;
      }
      var REMOVE_SHIELD: REMOVE_SHIELD_CONSTRUCTOR;

      namespace SPAWN_ASSAULT {
        interface Settings {
          baseStrength: number;
          element?: keyof typeof sc.ELEMENT;
        }
      }
      interface SPAWN_ASSAULT extends ig.ActionStepBase {
        _wm: ig.Config;
        baseStrength: number;
      }
      interface SPAWN_ASSAULT_CONSTRUCTOR extends ImpactClass<SPAWN_ASSAULT> {
        new (settings: ig.ACTION_STEP.SPAWN_ASSAULT.Settings): SPAWN_ASSAULT;
      }
      var SPAWN_ASSAULT: SPAWN_ASSAULT_CONSTRUCTOR;

      namespace SHOW_COMBAT_MSG {
        interface Settings {
          msgType: keyof typeof sc.COMBAT_MSG_TYPE;
        }
      }
      interface SHOW_COMBAT_MSG extends ig.ActionStepBase {
        _wm: ig.Config;
        msgType: sc.COMBAT_MSG_TYPE;
      }
      interface SHOW_COMBAT_MSG_CONSTRUCTOR extends ImpactClass<SHOW_COMBAT_MSG> {
        new (settings: ig.ACTION_STEP.SHOW_COMBAT_MSG.Settings): SHOW_COMBAT_MSG;
      }
      var SHOW_COMBAT_MSG: SHOW_COMBAT_MSG_CONSTRUCTOR;

      namespace ADD_TARGET_STUN_LOCK {
        interface Settings {}
      }
      interface ADD_TARGET_STUN_LOCK extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface ADD_TARGET_STUN_LOCK_CONSTRUCTOR extends ImpactClass<ADD_TARGET_STUN_LOCK> {
        new (settings: ig.ACTION_STEP.ADD_TARGET_STUN_LOCK.Settings): ADD_TARGET_STUN_LOCK;
      }
      var ADD_TARGET_STUN_LOCK: ADD_TARGET_STUN_LOCK_CONSTRUCTOR;

      namespace THROW_ENERGY_DROPS {
        interface Settings {
          dropType: keyof typeof sc.DROP_TYPE;
          healValue: number;
          align: keyof typeof ig.ENTITY_ALIGN;
          target?: ig.Event.GetEntity;
          partyToo: boolean;
        }
      }
      interface THROW_ENERGY_DROPS extends ig.ActionStepBase {
        target?: ig.Event.GetEntity;
        dropType: keyof typeof sc.DROP_TYPE;
        healValue: number;
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
        partyToo: boolean;
      }
      interface THROW_ENERGY_DROPS_CONSTRUCTOR extends ImpactClass<THROW_ENERGY_DROPS> {
        new (settings: ig.ACTION_STEP.THROW_ENERGY_DROPS.Settings): THROW_ENERGY_DROPS;
      }
      var THROW_ENERGY_DROPS: THROW_ENERGY_DROPS_CONSTRUCTOR;

      namespace THROW_GENERIC_DROP {
        interface Settings {
          dropType: keyof typeof sc.DROP_TYPE;
          align: keyof typeof ig.ENTITY_ALIGN;
          minVal: string;
          maxVal: string;
          varIncrease?: string;
          target?: ig.Event.GetEntity;
          circleEffect: string;
          pickupEffect: string;
        }
      }
      interface THROW_GENERIC_DROP extends ig.ActionStepBase {
        target?: ig.Event.GetEntity;
        dropType: keyof typeof sc.DROP_TYPE;
        minVal: string;
        maxVal: string;
        varIncrease?: string;
        circleEffect: string;
        pickupEffect: string;
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
      }
      interface THROW_GENERIC_DROP_CONSTRUCTOR extends ImpactClass<THROW_GENERIC_DROP> {
        new (settings: ig.ACTION_STEP.THROW_GENERIC_DROP.Settings): THROW_GENERIC_DROP;
      }
      var THROW_GENERIC_DROP: THROW_GENERIC_DROP_CONSTRUCTOR;

      namespace NAVIGATE_TO_SPAWN_POINT {
        interface Settings {
          maxTime: number;
          maxDistance: number;
          precise: boolean;
        }
      }
      interface NAVIGATE_TO_SPAWN_POINT extends ig.ActionStepBase {
        maxTime: number;
        maxDistance: number;
        precise: boolean;
        _wm: ig.Config;
      }
      interface NAVIGATE_TO_SPAWN_POINT_CONSTRUCTOR extends ImpactClass<NAVIGATE_TO_SPAWN_POINT> {
        new (settings: ig.ACTION_STEP.NAVIGATE_TO_SPAWN_POINT.Settings): NAVIGATE_TO_SPAWN_POINT;
      }
      var NAVIGATE_TO_SPAWN_POINT: NAVIGATE_TO_SPAWN_POINT_CONSTRUCTOR;

      namespace DO_DAMAGE_MOVEMENT {
        interface Settings {
          flyLevel: keyof typeof sc.COMBAT_FLY_LEVEL;
          breaking: boolean;
          stable: boolean;
          wait: boolean;
          direction?: unknown;
        }
      }
      interface DO_DAMAGE_MOVEMENT extends ig.ActionStepBase {
        flyLevel: keyof typeof sc.COMBAT_FLY_LEVEL;
        breaking: boolean;
        stable: boolean;
        wait: boolean;
        _wm: ig.Config;
      }
      interface DO_DAMAGE_MOVEMENT_CONSTRUCTOR extends ImpactClass<DO_DAMAGE_MOVEMENT> {
        new (settings: ig.ACTION_STEP.DO_DAMAGE_MOVEMENT.Settings): DO_DAMAGE_MOVEMENT;
      }
      var DO_DAMAGE_MOVEMENT: DO_DAMAGE_MOVEMENT_CONSTRUCTOR;

      namespace COMBAT_IF {
        interface Settings {
          conditions: sc.CombatConditions.ConditionConfig[];
          withElse: boolean;
        }
      }
      interface COMBAT_IF extends ig.ActionStepBase {
        conditions: sc.CombatConditions;
        withElse: boolean;
        _wm: ig.Config;
      }
      interface COMBAT_IF_CONSTRUCTOR extends ImpactClass<COMBAT_IF> {
        new (settings: ig.ACTION_STEP.COMBAT_IF.Settings): COMBAT_IF;
      }
      var COMBAT_IF: COMBAT_IF_CONSTRUCTOR;

      namespace CHANGE_COLLAB_VAR {
        interface Settings {
          varName: string;
          changeType: unknown;
          value: ig.Event.NumberExpression;
        }
      }
      interface CHANGE_COLLAB_VAR extends ig.ActionStepBase {
        varName: string;
        changeOperator: unknown;
        value: ig.Event.NumberExpression;
        _wm: ig.Config;
      }
      interface CHANGE_COLLAB_VAR_CONSTRUCTOR extends ImpactClass<CHANGE_COLLAB_VAR> {
        new (settings: ig.ACTION_STEP.CHANGE_COLLAB_VAR.Settings): CHANGE_COLLAB_VAR;
      }
      var CHANGE_COLLAB_VAR: CHANGE_COLLAB_VAR_CONSTRUCTOR;

      namespace SET_COLLAB_BREAK_TYPE {
        interface Settings {
          breakType: keyof typeof sc.ENEMY_COLLAB_BREAK;
        }
      }
      interface SET_COLLAB_BREAK_TYPE extends ig.ActionStepBase {
        _wm: ig.Config;
        breakType: sc.ENEMY_COLLAB_BREAK;
      }
      interface SET_COLLAB_BREAK_TYPE_CONSTRUCTOR extends ImpactClass<SET_COLLAB_BREAK_TYPE> {
        new (settings: ig.ACTION_STEP.SET_COLLAB_BREAK_TYPE.Settings): SET_COLLAB_BREAK_TYPE;
      }
      var SET_COLLAB_BREAK_TYPE: SET_COLLAB_BREAK_TYPE_CONSTRUCTOR;

      namespace ASSIGN_COLLAB_POINTS {
        interface Settings {
          targetType: unknown;
          targetLabel: string;
          labelFilter?: string[];
          pointPattern: unknown;
          distance?: number;
          circularAngle: number;
        }
      }
      interface ASSIGN_COLLAB_POINTS extends ig.ActionStepBase {
        _wm: ig.Config;
        targetLabel: string;
        labelFilter: string[];
        distance: number;
        circularAngle: number;
      }
      interface ASSIGN_COLLAB_POINTS_CONSTRUCTOR extends ImpactClass<ASSIGN_COLLAB_POINTS> {
        new (settings: ig.ACTION_STEP.ASSIGN_COLLAB_POINTS.Settings): ASSIGN_COLLAB_POINTS;
      }
      var ASSIGN_COLLAB_POINTS: ASSIGN_COLLAB_POINTS_CONSTRUCTOR;

      namespace SET_ATTRIB_TARGET_VALUE {
        interface Settings {
          attribName: string;
          valueType: unknown;
        }
      }
      interface SET_ATTRIB_TARGET_VALUE extends ig.ActionStepBase {
        _wm: ig.Config;
        attribName: string;
      }
      interface SET_ATTRIB_TARGET_VALUE_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_TARGET_VALUE> {
        new (settings: ig.ACTION_STEP.SET_ATTRIB_TARGET_VALUE.Settings): SET_ATTRIB_TARGET_VALUE;
      }
      var SET_ATTRIB_TARGET_VALUE: SET_ATTRIB_TARGET_VALUE_CONSTRUCTOR;

      namespace SET_COLLAB_ENTITY {
        interface Settings {
          entityType: unknown;
          entityLabel: string;
          labelFilter?: string[];
        }
      }
      interface SET_COLLAB_ENTITY extends ig.ActionStepBase {
        entityType: unknown;
        entityLabel: string;
        labelFilter?: string[];
        _wm: ig.Config;
      }
      interface SET_COLLAB_ENTITY_CONSTRUCTOR extends ImpactClass<SET_COLLAB_ENTITY> {
        new (settings: ig.ACTION_STEP.SET_COLLAB_ENTITY.Settings): SET_COLLAB_ENTITY;
      }
      var SET_COLLAB_ENTITY: SET_COLLAB_ENTITY_CONSTRUCTOR;

      namespace STORE_IN_COLLAB_PARTNER {
        interface Settings {
          label: string;
        }
      }
      interface STORE_IN_COLLAB_PARTNER extends ig.ActionStepBase {
        label: string;
        _wm: ig.Config;
      }
      interface STORE_IN_COLLAB_PARTNER_CONSTRUCTOR extends ImpactClass<STORE_IN_COLLAB_PARTNER> {
        new (settings: ig.ACTION_STEP.STORE_IN_COLLAB_PARTNER.Settings): STORE_IN_COLLAB_PARTNER;
      }
      var STORE_IN_COLLAB_PARTNER: STORE_IN_COLLAB_PARTNER_CONSTRUCTOR;

      namespace CONNECT_HP_TO_STORED_ENEMIES {
        interface Settings {}
      }
      interface CONNECT_HP_TO_STORED_ENEMIES extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CONNECT_HP_TO_STORED_ENEMIES_CONSTRUCTOR
        extends ImpactClass<CONNECT_HP_TO_STORED_ENEMIES> {
        new (
          settings: ig.ACTION_STEP.CONNECT_HP_TO_STORED_ENEMIES.Settings,
        ): CONNECT_HP_TO_STORED_ENEMIES;
      }
      var CONNECT_HP_TO_STORED_ENEMIES: CONNECT_HP_TO_STORED_ENEMIES_CONSTRUCTOR;

      namespace CONNECT_HP_TO_TYPES_ENEMIES {
        interface Settings {
          enemyType: string;
        }
      }
      interface CONNECT_HP_TO_TYPES_ENEMIES extends ig.EventStepBase {
        target: unknown;
        _wm: ig.Config;
        enemyType: string;
      }
      interface CONNECT_HP_TO_TYPES_ENEMIES_CONSTRUCTOR
        extends ImpactClass<CONNECT_HP_TO_TYPES_ENEMIES> {
        new (
          settings: ig.ACTION_STEP.CONNECT_HP_TO_TYPES_ENEMIES.Settings,
        ): CONNECT_HP_TO_TYPES_ENEMIES;
      }
      var CONNECT_HP_TO_TYPES_ENEMIES: CONNECT_HP_TO_TYPES_ENEMIES_CONSTRUCTOR;

      namespace UPDATE_RESPAWN_POINT {
        interface Settings {}
      }
      interface UPDATE_RESPAWN_POINT extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface UPDATE_RESPAWN_POINT_CONSTRUCTOR extends ImpactClass<UPDATE_RESPAWN_POINT> {
        new (settings: ig.ACTION_STEP.UPDATE_RESPAWN_POINT.Settings): UPDATE_RESPAWN_POINT;
      }
      var UPDATE_RESPAWN_POINT: UPDATE_RESPAWN_POINT_CONSTRUCTOR;

      namespace SEND_ENEMY_MSG {
        interface Settings {
          key: string;
        }
      }
      interface SEND_ENEMY_MSG extends ig.ActionStepBase {
        _wm: ig.Config;
        key: string;
      }
      interface SEND_ENEMY_MSG_CONSTRUCTOR extends ImpactClass<SEND_ENEMY_MSG> {
        new (settings: ig.ACTION_STEP.SEND_ENEMY_MSG.Settings): SEND_ENEMY_MSG;
      }
      var SEND_ENEMY_MSG: SEND_ENEMY_MSG_CONSTRUCTOR;

      namespace RESET_TRACKER {
        interface Settings {
          tracker: string;
          forceValue?: number;
        }
      }
      interface RESET_TRACKER extends ig.ActionStepBase {
        tracker: string;
        forceValue?: number;
        _wm: ig.Config;
      }
      interface RESET_TRACKER_CONSTRUCTOR extends ImpactClass<RESET_TRACKER> {
        new (settings: ig.ACTION_STEP.RESET_TRACKER.Settings): RESET_TRACKER;
      }
      var RESET_TRACKER: RESET_TRACKER_CONSTRUCTOR;

      namespace RESET_FREQUENCY {
        interface Settings {
          frequency: keyof typeof sc.ATTACK_FREQUENCY;
        }
      }
      interface RESET_FREQUENCY extends ig.ActionStepBase {
        tracker: unknown;
        forceValue: unknown;
        _wm: ig.Config;
        frequency: keyof typeof sc.ATTACK_FREQUENCY;
      }
      interface RESET_FREQUENCY_CONSTRUCTOR extends ImpactClass<RESET_FREQUENCY> {
        new (settings: ig.ACTION_STEP.RESET_FREQUENCY.Settings): RESET_FREQUENCY;
      }
      var RESET_FREQUENCY: RESET_FREQUENCY_CONSTRUCTOR;

      namespace RELEASE_STORED_ENEMIES {
        interface Settings {
          align: keyof typeof ig.ENTITY_ALIGN;
          distance: number;
          centralAngle: number;
          startAngle?: number;
          uniformRandom: number;
        }
      }
      interface RELEASE_STORED_ENEMIES extends ig.ActionStepBase {
        align: ig.ENTITY_ALIGN;
        distance: number;
        centralAngle: number;
        startAngle?: number;
        actionName: unknown;
        uniformRandom: number;
        _wm: ig.Config;
      }
      interface RELEASE_STORED_ENEMIES_CONSTRUCTOR extends ImpactClass<RELEASE_STORED_ENEMIES> {
        new (settings: ig.ACTION_STEP.RELEASE_STORED_ENEMIES.Settings): RELEASE_STORED_ENEMIES;
      }
      var RELEASE_STORED_ENEMIES: RELEASE_STORED_ENEMIES_CONSTRUCTOR;

      namespace REASSIGN_TARGET {
        interface Settings {}
      }
      interface REASSIGN_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface REASSIGN_TARGET_CONSTRUCTOR extends ImpactClass<REASSIGN_TARGET> {
        new (settings: ig.ACTION_STEP.REASSIGN_TARGET.Settings): REASSIGN_TARGET;
      }
      var REASSIGN_TARGET: REASSIGN_TARGET_CONSTRUCTOR;

      namespace DESTROY_DESTRUCTIBLES {
        interface Settings {}
      }
      interface DESTROY_DESTRUCTIBLES extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface DESTROY_DESTRUCTIBLES_CONSTRUCTOR extends ImpactClass<DESTROY_DESTRUCTIBLES> {
        new (settings: ig.ACTION_STEP.DESTROY_DESTRUCTIBLES.Settings): DESTROY_DESTRUCTIBLES;
      }
      var DESTROY_DESTRUCTIBLES: DESTROY_DESTRUCTIBLES_CONSTRUCTOR;

      namespace SPAWN_ENEMIES {
        interface Settings {
          enemyInfo: string;
          offset: Vec3;
          align: keyof typeof ig.ENTITY_ALIGN;
          dir?: Vec2;
          pushVel?: ig.Event.NumberVary;
          pushZVel?: ig.Event.NumberVary;
          centralAngle: number;
          startAngle?: number;
          angleVary: number;
          startDist?: number;
          startDistCollide: keyof typeof sc.SPAWN_START_DIST_COLLIDE;
          random: boolean;
          count: ig.Event.NumberExpression;
          duration: number;
          clockwise: boolean;
          flipLeftFace: number;
          offsetArea?: Vec2;
          circularArea: boolean;
          uniformDir: number;
          delay: number;
          repeat: boolean;
          attachProxy?: sc.ProxyTools.PrepareSrcProxySetting;
        }
      }
      interface SPAWN_ENEMIES extends ig.ActionStepBase {
        forceSettings: ig.ACTION_STEP.SPAWN_ENEMIES.Settings;
        enemyInfo: unknown;
        enemyType: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SPAWN_ENEMIES_CONSTRUCTOR extends ImpactClass<SPAWN_ENEMIES> {
        new (settings: ig.ACTION_STEP.SPAWN_ENEMIES.Settings): SPAWN_ENEMIES;
      }
      var SPAWN_ENEMIES: SPAWN_ENEMIES_CONSTRUCTOR;

      namespace SPAWN_ENEMY_CLOSEBY {
        interface Settings {
          enemyInfo: string;
          radius: number;
          spawnCondition?: string;
        }
      }
      interface SPAWN_ENEMY_CLOSEBY extends ig.ActionStepBase {
        forceSettings: unknown;
        enemyInfo: unknown;
        enemyType: unknown;
        _wm: ig.Config;
        radius: number;
        spawnCondition: string;

        clearCached(this: this): void;
      }
      interface SPAWN_ENEMY_CLOSEBY_CONSTRUCTOR extends ImpactClass<SPAWN_ENEMY_CLOSEBY> {
        new (settings: ig.ACTION_STEP.SPAWN_ENEMY_CLOSEBY.Settings): SPAWN_ENEMY_CLOSEBY;
      }
      var SPAWN_ENEMY_CLOSEBY: SPAWN_ENEMY_CLOSEBY_CONSTRUCTOR;

      namespace KILL_ENEMIES {
        interface Settings {
          enemyType?: string;
          noRumble?: boolean;
        }
      }
      interface KILL_ENEMIES extends ig.ActionStepBase {
        enemyType?: string;
        noRumble?: boolean;
        _wm: ig.Config;
      }
      interface KILL_ENEMIES_CONSTRUCTOR extends ImpactClass<KILL_ENEMIES> {
        new (settings: ig.ACTION_STEP.KILL_ENEMIES.Settings): KILL_ENEMIES;
      }
      var KILL_ENEMIES: KILL_ENEMIES_CONSTRUCTOR;

      namespace SELF_DESTRUCT {
        interface Settings {
          noReward: boolean;
        }
      }
      interface SELF_DESTRUCT extends ig.ActionStepBase {
        entity: unknown;
        _wm: ig.Config;
        noRewards: boolean;
      }
      interface SELF_DESTRUCT_CONSTRUCTOR extends ImpactClass<SELF_DESTRUCT> {
        new (settings: ig.ACTION_STEP.SELF_DESTRUCT.Settings): SELF_DESTRUCT;
      }
      var SELF_DESTRUCT: SELF_DESTRUCT_CONSTRUCTOR;

      namespace SET_TEMP_TARGET {
        interface Settings {
          kind:
            | 'PLAYER'
            | 'PARTY_0'
            | 'PARTY_1'
            | 'COLLAB_ENTITY'
            | 'COLLAB_LABELED_ENTITY'
            | 'CLOSEST_ENEMY'
            | 'GUARDED_ATTACKER'
            | 'FIRST_HIT'
            | 'PROXY_OWNER'
            | 'ENEMY_OWNER'
            | 'ENEMY_OWNER_ACTION_PROXY'
            | 'PROXY_SRC'
            | 'ACTION_PROXY'
            | 'PROXY'
            | 'PROXY_OWNER_ACTION_PROXY'
            | 'PROXY_SRC_ACTION_PROXY'
            | 'NAMED_ENTITY'
            | 'ATTRIB_ENTITY'
            | 'THREAT'
            | 'ENTITY_VIA_ID'
            | 'PART_TARGET_ROOT';
          key?: ig.Event.StringExpression;
        }

        type TargetFunction = (combatant: sc.BasicCombatant, key?: string) => sc.BasicCombatant;
      }
      interface SET_TEMP_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
        kind: SET_TEMP_TARGET.TargetFunction;
        key?: ig.Event.StringExpression;
      }
      interface SET_TEMP_TARGET_CONSTRUCTOR extends ImpactClass<SET_TEMP_TARGET> {
        new (settings: ig.ACTION_STEP.SET_TEMP_TARGET.Settings): SET_TEMP_TARGET;
      }
      var SET_TEMP_TARGET: SET_TEMP_TARGET_CONSTRUCTOR;

      namespace SET_ATTRIB_TARGET_ENTITY {
        interface Settings {
          attrib: string;
        }
      }
      interface SET_ATTRIB_TARGET_ENTITY extends ig.ActionStepBase {
        _wm: ig.Config;
        attrib: string;
      }
      interface SET_ATTRIB_TARGET_ENTITY_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_TARGET_ENTITY> {
        new (settings: ig.ACTION_STEP.SET_ATTRIB_TARGET_ENTITY.Settings): SET_ATTRIB_TARGET_ENTITY;
      }
      var SET_ATTRIB_TARGET_ENTITY: SET_ATTRIB_TARGET_ENTITY_CONSTRUCTOR;

      namespace SET_CLOSE_TEMP_TARGET {
        interface Settings {
          searchType?: SearchTypeKeys;
          distance?: number;
          ignoreCurrentTarget?: boolean;
          prevHitBehavior?: PrevHitBehaviorKeys;
        }

        type PrevHitBehaviorKeys = 'NONE' | 'PREFER_NON_HIT' | 'ONLY_NON_HIT';

        type SearchTypeKeys =
          | 'IN_VIEW'
          | 'CLOSE_RANGE '
          | 'MEDIUM_RANGE'
          | 'LONG_RANGE'
          | 'SCREEN_RANGE';

        interface SearchType {
          angle: number;
          radius: number;
          facePriority?: boolean;
        }
      }
      interface SET_CLOSE_TEMP_TARGET extends ig.ActionStepBase {
        searchType: SET_CLOSE_TEMP_TARGET.SearchType;
        distance: number;
        ignoreCurrentTarget: boolean;
        prevHitBehavior: number;
      }
      interface SET_CLOSE_TEMP_TARGET_CONSTRUCTOR extends ImpactClass<SET_CLOSE_TEMP_TARGET> {
        new (settings: SET_CLOSE_TEMP_TARGET.Settings): SET_CLOSE_TEMP_TARGET;
      }
      var SET_CLOSE_TEMP_TARGET: SET_CLOSE_TEMP_TARGET_CONSTRUCTOR;

      namespace SET_OWNER_REPLACE_TARGET {
        interface Settings {}
      }
      interface SET_OWNER_REPLACE_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface SET_OWNER_REPLACE_TARGET_CONSTRUCTOR extends ImpactClass<SET_OWNER_REPLACE_TARGET> {
        new (settings: ig.ACTION_STEP.SET_OWNER_REPLACE_TARGET.Settings): SET_OWNER_REPLACE_TARGET;
      }
      var SET_OWNER_REPLACE_TARGET: SET_OWNER_REPLACE_TARGET_CONSTRUCTOR;

      namespace SET_TARGET_REPLACE_TARGET {
        interface Settings {}
      }
      interface SET_TARGET_REPLACE_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface SET_TARGET_REPLACE_TARGET_CONSTRUCTOR
        extends ImpactClass<SET_TARGET_REPLACE_TARGET> {
        new (
          settings: ig.ACTION_STEP.SET_TARGET_REPLACE_TARGET.Settings,
        ): SET_TARGET_REPLACE_TARGET;
      }
      var SET_TARGET_REPLACE_TARGET: SET_TARGET_REPLACE_TARGET_CONSTRUCTOR;

      namespace SET_POI_TEMP_TARGET {
        interface Settings {
          poiFilter?: sc.COMBAT_POI.Setting;
          distance: number;
          furthest: boolean;
        }
      }
      interface SET_POI_TEMP_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
        distance: number;
        furthest: boolean;
      }
      interface SET_POI_TEMP_TARGET_CONSTRUCTOR extends ImpactClass<SET_POI_TEMP_TARGET> {
        new (settings: ig.ACTION_STEP.SET_POI_TEMP_TARGET.Settings): SET_POI_TEMP_TARGET;
      }
      var SET_POI_TEMP_TARGET: SET_POI_TEMP_TARGET_CONSTRUCTOR;
    }
  }
  namespace sc {
    namespace PROXY_SELECT_TYPE {
      type Func = (
        proxy: sc.CombatProxyEntity,
        sourceEntity: sc.BasicCombatant,
        group: string,
      ) => Nullable<ig.Entity>;
    }
    interface PROXY_SELECT_TYPE {
      PREV_ACTION_PROXY: sc.PROXY_SELECT_TYPE.Func;
      NEXT_ACTION_PROXY: sc.PROXY_SELECT_TYPE.Func;
      PROXY_SOURCE: sc.PROXY_SELECT_TYPE.Func;
    }
    var PROXY_SELECT_TYPE: PROXY_SELECT_TYPE;
  }
  namespace ig {
    namespace ACTION_STEP {
      namespace SET_PROXY_TEMP_TARGET {
        interface Settings {
          selectType: keyof typeof sc.PROXY_SELECT_TYPE;
          group?: string;
        }
      }
      interface SET_PROXY_TEMP_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
        selectType: sc.PROXY_SELECT_TYPE;
        group?: string;
      }
      interface SET_PROXY_TEMP_TARGET_CONSTRUCTOR extends ImpactClass<SET_PROXY_TEMP_TARGET> {
        new (settings: ig.ACTION_STEP.SET_PROXY_TEMP_TARGET.Settings): SET_PROXY_TEMP_TARGET;
      }
      var SET_PROXY_TEMP_TARGET: SET_PROXY_TEMP_TARGET_CONSTRUCTOR;

      namespace REDUCE_PROXY_HP {
        interface Settings {
          damage: number;
        }
      }
      interface REDUCE_PROXY_HP extends ig.ActionStepBase {
        _wm: ig.Config;
        damage: number;
      }
      interface REDUCE_PROXY_HP_CONSTRUCTOR extends ImpactClass<REDUCE_PROXY_HP> {
        new (settings: ig.ACTION_STEP.REDUCE_PROXY_HP.Settings): REDUCE_PROXY_HP;
      }
      var REDUCE_PROXY_HP: REDUCE_PROXY_HP_CONSTRUCTOR;

      namespace CLEAR_TEMP_TARGET {
        interface Settings {}
      }
      interface CLEAR_TEMP_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_TEMP_TARGET_CONSTRUCTOR extends ImpactClass<CLEAR_TEMP_TARGET> {
        new (settings: ig.ACTION_STEP.CLEAR_TEMP_TARGET.Settings): CLEAR_TEMP_TARGET;
      }
      var CLEAR_TEMP_TARGET: CLEAR_TEMP_TARGET_CONSTRUCTOR;

      namespace CLEAR_PREV_HIT {
        interface Settings {}
      }
      interface CLEAR_PREV_HIT extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_PREV_HIT_CONSTRUCTOR extends ImpactClass<CLEAR_PREV_HIT> {
        new (settings: ig.ACTION_STEP.CLEAR_PREV_HIT.Settings): CLEAR_PREV_HIT;
      }
      var CLEAR_PREV_HIT: CLEAR_PREV_HIT_CONSTRUCTOR;

      namespace CLEAR_TARGET {
        interface Settings {}
      }
      interface CLEAR_TARGET extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_TARGET_CONSTRUCTOR extends ImpactClass<CLEAR_TARGET> {
        new (settings: ig.ACTION_STEP.CLEAR_TARGET.Settings): CLEAR_TARGET;
      }
      var CLEAR_TARGET: CLEAR_TARGET_CONSTRUCTOR;

      namespace DETOUR_COMPRESSOR_THREAT {
        interface Settings {}
      }
      interface DETOUR_COMPRESSOR_THREAT extends ig.ActionStepBase {
        _wm: ig.Config;
      }
      interface DETOUR_COMPRESSOR_THREAT_CONSTRUCTOR extends ImpactClass<DETOUR_COMPRESSOR_THREAT> {
        new (settings: ig.ACTION_STEP.DETOUR_COMPRESSOR_THREAT.Settings): DETOUR_COMPRESSOR_THREAT;
      }
      var DETOUR_COMPRESSOR_THREAT: DETOUR_COMPRESSOR_THREAT_CONSTRUCTOR;

      namespace ADD_ACTION_BUFF {
        type TargetFunction = (entity: ig.ENTITY.Combatant) => ig.ENTITY.Combatant | null;

        type TargetKeys = 'SELF' | 'PROXY_OWNER' | 'PROXY_SRC' | 'TARGET';

        interface Settings {
          target: TargetKeys;
          stats: string[];
          name?: string;
          hacked?: boolean;
        }
      }
      interface ADD_ACTION_BUFF extends ig.ActionStepBase {
        _wm: ig.Config;
        target: ig.ACTION_STEP.ADD_ACTION_BUFF.TargetFunction;
        stats: string[];
        name?: string;
        hacked?: boolean;
      }
      interface ADD_ACTION_BUFF_CONSTRUCTOR extends ImpactClass<ADD_ACTION_BUFF> {
        new (settings: ADD_ACTION_BUFF.Settings): ADD_ACTION_BUFF;
      }
      var ADD_ACTION_BUFF: ADD_ACTION_BUFF_CONSTRUCTOR;

      namespace MOD_ACTION_BUFF_PARAM {
        interface Settings {
          target: unknown;
          name: string;
          param: unknown;
          changeType: unknown;
          value: number;
        }
      }
      interface MOD_ACTION_BUFF_PARAM extends ig.ActionStepBase {
        _wm: ig.Config;
        name: string;
        value: number;
      }
      interface MOD_ACTION_BUFF_PARAM_CONSTRUCTOR extends ImpactClass<MOD_ACTION_BUFF_PARAM> {
        new (settings: ig.ACTION_STEP.MOD_ACTION_BUFF_PARAM.Settings): MOD_ACTION_BUFF_PARAM;
      }
      var MOD_ACTION_BUFF_PARAM: MOD_ACTION_BUFF_PARAM_CONSTRUCTOR;

      namespace SET_VAR_COMBAT_STAT {
        interface Settings {
          varName: string;
          stat: unknown;
        }
      }
      interface SET_VAR_COMBAT_STAT extends ig.ActionStepBase {
        varName: string;
        stat: unknown;
        _wm: ig.Config;
      }
      interface SET_VAR_COMBAT_STAT_CONSTRUCTOR extends ImpactClass<SET_VAR_COMBAT_STAT> {
        new (settings: ig.ACTION_STEP.SET_VAR_COMBAT_STAT.Settings): SET_VAR_COMBAT_STAT;
      }
      var SET_VAR_COMBAT_STAT: SET_VAR_COMBAT_STAT_CONSTRUCTOR;

      namespace SET_ATTRIB_POS_COMBAT {
        interface Settings {
          attrib: string;
          posType: unknown;
        }
      }
      interface SET_ATTRIB_POS_COMBAT extends ig.ActionStepBase {
        _wm: ig.Config;
        attrib: string;
      }
      interface SET_ATTRIB_POS_COMBAT_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_POS_COMBAT> {
        new (settings: ig.ACTION_STEP.SET_ATTRIB_POS_COMBAT.Settings): SET_ATTRIB_POS_COMBAT;
      }
      var SET_ATTRIB_POS_COMBAT: SET_ATTRIB_POS_COMBAT_CONSTRUCTOR;
    }
  }
}
