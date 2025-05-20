// requires impact.base.utils
// requires impact.base.event
// requires impact.base.action

export {};

declare global {
  namespace ig {
    namespace EVENT_STEP {
      namespace SELECT_RANDOM {
        interface Settings {
          options: ig.ACTION_STEP.SELECT_RANDOM.OptionConfig[];
        }
      }
      interface SELECT_RANDOM extends ig.EventStepBase {
        options: ig.ACTION_STEP.SELECT_RANDOM.Option;
        _wm: ig.Config;
      }
      interface SELECT_RANDOM_CONSTRUCTOR extends ImpactClass<SELECT_RANDOM> {
        new (settings: ig.EVENT_STEP.SELECT_RANDOM.Settings): SELECT_RANDOM;
      }
      var SELECT_RANDOM: SELECT_RANDOM_CONSTRUCTOR;

      namespace SELECT_FIRST {
        interface Settings {
          options: string[];
        }
      }
      interface SELECT_FIRST extends ig.EventStepBase {
        options: unknown;
        _wm: ig.Config;
      }
      interface SELECT_FIRST_CONSTRUCTOR extends ImpactClass<SELECT_FIRST> {
        new (settings: ig.EVENT_STEP.SELECT_FIRST.Settings): SELECT_FIRST;
      }
      var SELECT_FIRST: SELECT_FIRST_CONSTRUCTOR;

      namespace LABEL {
        interface Settings {
          name: string;
        }
      }
      interface LABEL extends ig.EventStepBase {
        name: string;
        _wm: ig.Config;
      }
      interface LABEL_CONSTRUCTOR extends ImpactClass<LABEL> {
        new (settings: ig.EVENT_STEP.LABEL.Settings): LABEL;
      }
      var LABEL: LABEL_CONSTRUCTOR;

      namespace GOTO_LABEL {
        interface Settings {
          name: string;
        }
      }
      interface GOTO_LABEL extends ig.EventStepBase {
        name: string;
        _wm: ig.Config;
      }
      interface GOTO_LABEL_CONSTRUCTOR extends ImpactClass<GOTO_LABEL> {
        new (settings: ig.EVENT_STEP.GOTO_LABEL.Settings): GOTO_LABEL;
      }
      var GOTO_LABEL: GOTO_LABEL_CONSTRUCTOR;

      namespace GOTO_LABEL_WHILE {
        interface Settings {
          name: string;
          condition: string;
        }
      }
      interface GOTO_LABEL_WHILE extends ig.EventStepBase {
        name: string;
        condition: ig.VarCondition;
        _wm: ig.Config;
      }
      interface GOTO_LABEL_WHILE_CONSTRUCTOR extends ImpactClass<GOTO_LABEL_WHILE> {
        new (settings: ig.EVENT_STEP.GOTO_LABEL_WHILE.Settings): GOTO_LABEL_WHILE;
      }
      var GOTO_LABEL_WHILE: GOTO_LABEL_WHILE_CONSTRUCTOR;

      namespace WAIT {
        interface Settings {
          time: ig.Event.NumberExpression;
          ignoreSlowDown: boolean;
        }
      }
      interface WAIT extends ig.EventStepBase {
        time: ig.Event.NumberExpression;
        _timer: unknown;
        ignoreSlowDown: boolean;
        _wm: ig.Config;
      }
      interface WAIT_CONSTRUCTOR extends ImpactClass<WAIT> {
        new (settings: ig.EVENT_STEP.WAIT.Settings): WAIT;
      }
      var WAIT: WAIT_CONSTRUCTOR;

      namespace WAIT_RANDOM {
        interface Settings {
          minTime: ig.Event.NumberExpression;
          maxTime: ig.Event.NumberExpression;
          ignoreSlowDown: boolean;
        }
      }
      interface WAIT_RANDOM extends ig.EventStepBase {
        maxTime: ig.Event.NumberExpression;
        minTime: ig.Event.NumberExpression;
        _wm: ig.Config;
        ignoreSlowDown: boolean;
      }
      interface WAIT_RANDOM_CONSTRUCTOR extends ImpactClass<WAIT_RANDOM> {
        new (settings: ig.EVENT_STEP.WAIT_RANDOM.Settings): WAIT_RANDOM;
      }
      var WAIT_RANDOM: WAIT_RANDOM_CONSTRUCTOR;

      namespace WAIT_UNTIL_TRUE {
        interface Settings {
          condition: string;
          maxTime?: ig.Event.NumberExpression;
        }
      }
      interface WAIT_UNTIL_TRUE extends ig.EventStepBase {
        condition: ig.VarCondition;
        _timer: unknown;
        ignoreSlowDown: unknown;
        _wm: ig.Config;
        maxTime?: ig.Event.NumberExpression;
      }
      interface WAIT_UNTIL_TRUE_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_TRUE> {
        new (settings: ig.EVENT_STEP.WAIT_UNTIL_TRUE.Settings): WAIT_UNTIL_TRUE;
      }
      var WAIT_UNTIL_TRUE: WAIT_UNTIL_TRUE_CONSTRUCTOR;

      namespace WAIT_UNTIL_ACTION_DONE {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface WAIT_UNTIL_ACTION_DONE extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface WAIT_UNTIL_ACTION_DONE_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_ACTION_DONE> {
        new (settings: ig.EVENT_STEP.WAIT_UNTIL_ACTION_DONE.Settings): WAIT_UNTIL_ACTION_DONE;
      }
      var WAIT_UNTIL_ACTION_DONE: WAIT_UNTIL_ACTION_DONE_CONSTRUCTOR;

      namespace STOP_SKIP_MODE {
        interface Settings {}
      }
      interface STOP_SKIP_MODE extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface STOP_SKIP_MODE_CONSTRUCTOR extends ImpactClass<STOP_SKIP_MODE> {
        new (settings: ig.EVENT_STEP.STOP_SKIP_MODE.Settings): STOP_SKIP_MODE;
      }
      var STOP_SKIP_MODE: STOP_SKIP_MODE_CONSTRUCTOR;

      namespace SET_ENTITY_STATIC_TIME {
        interface Settings {
          entity: ig.Event.GetEntity;
          value: boolean;
          global: boolean;
        }
      }
      interface SET_ENTITY_STATIC_TIME extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        value: boolean;
        global: boolean;
        _wm: ig.Config;
      }
      interface SET_ENTITY_STATIC_TIME_CONSTRUCTOR extends ImpactClass<SET_ENTITY_STATIC_TIME> {
        new (settings: ig.EVENT_STEP.SET_ENTITY_STATIC_TIME.Settings): SET_ENTITY_STATIC_TIME;
      }
      var SET_ENTITY_STATIC_TIME: SET_ENTITY_STATIC_TIME_CONSTRUCTOR;

      namespace SET_ENTITY_POS {
        interface Settings {
          entity: ig.Event.GetEntity;
          position: Vec3;
        }
      }
      interface SET_ENTITY_POS extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        position: Vec3;
        _wm: ig.Config;
      }
      interface SET_ENTITY_POS_CONSTRUCTOR extends ImpactClass<SET_ENTITY_POS> {
        new (settings: ig.EVENT_STEP.SET_ENTITY_POS.Settings): SET_ENTITY_POS;
      }
      var SET_ENTITY_POS: SET_ENTITY_POS_CONSTRUCTOR;

      namespace SET_ENTITY_POS_TO_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
          refEntity: ig.Event.GetEntity;
          offset: Vec3;
        }
      }
      interface SET_ENTITY_POS_TO_ENTITY extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        position: unknown;
        _wm: ig.Config;
        refEntity: ig.Event.GetEntity;
        offset: Vec3;
      }
      interface SET_ENTITY_POS_TO_ENTITY_CONSTRUCTOR extends ImpactClass<SET_ENTITY_POS_TO_ENTITY> {
        new (settings: ig.EVENT_STEP.SET_ENTITY_POS_TO_ENTITY.Settings): SET_ENTITY_POS_TO_ENTITY;
      }
      var SET_ENTITY_POS_TO_ENTITY: SET_ENTITY_POS_TO_ENTITY_CONSTRUCTOR;

      namespace SET_ENTITY_ON_TOP_OTHER {
        interface Settings {
          entity: ig.Event.GetEntity;
          groundEntity: ig.Event.GetEntity;
        }
      }
      interface SET_ENTITY_ON_TOP_OTHER extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        groundEntity: ig.Event.GetEntity;
        _wm: ig.Config;
      }
      interface SET_ENTITY_ON_TOP_OTHER_CONSTRUCTOR extends ImpactClass<SET_ENTITY_ON_TOP_OTHER> {
        new (settings: ig.EVENT_STEP.SET_ENTITY_ON_TOP_OTHER.Settings): SET_ENTITY_ON_TOP_OTHER;
      }
      var SET_ENTITY_ON_TOP_OTHER: SET_ENTITY_ON_TOP_OTHER_CONSTRUCTOR;

      namespace ADJUST_ENTITY_POS {
        interface Settings {
          entity: ig.Event.GetEntity;
          offset: Vec3;
        }
      }
      interface ADJUST_ENTITY_POS extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        offset: Vec3;
        _wm: ig.Config;
      }
      interface ADJUST_ENTITY_POS_CONSTRUCTOR extends ImpactClass<ADJUST_ENTITY_POS> {
        new (settings: ig.EVENT_STEP.ADJUST_ENTITY_POS.Settings): ADJUST_ENTITY_POS;
      }
      var ADJUST_ENTITY_POS: ADJUST_ENTITY_POS_CONSTRUCTOR;

      namespace HIDE_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
          skipEffects: boolean;
        }
      }
      interface HIDE_ENTITY extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
        skipEffects: boolean;
      }
      interface HIDE_ENTITY_CONSTRUCTOR extends ImpactClass<HIDE_ENTITY> {
        new (settings: ig.EVENT_STEP.HIDE_ENTITY.Settings): HIDE_ENTITY;
      }
      var HIDE_ENTITY: HIDE_ENTITY_CONSTRUCTOR;

      namespace SHOW_ENTITY {
        interface Settings {
          entity: ig.Event.GetEntity;
          skipEffects: boolean;
        }
      }
      interface SHOW_ENTITY extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        _wm: ig.Config;
        skipEffects: boolean;
      }
      interface SHOW_ENTITY_CONSTRUCTOR extends ImpactClass<SHOW_ENTITY> {
        new (settings: ig.EVENT_STEP.SHOW_ENTITY.Settings): SHOW_ENTITY;
      }
      var SHOW_ENTITY: SHOW_ENTITY_CONSTRUCTOR;

      namespace SHOW_ANIMATION {
        interface Settings {
          entity: ig.Event.GetEntity;
          anim: string;
          reset: boolean;
          followUp?: string;
        }
      }
      interface SHOW_ANIMATION extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        anim: string;
        reset: boolean;
        followUp: Nullable<string>;
        _wm: ig.Config;
      }
      interface SHOW_ANIMATION_CONSTRUCTOR extends ImpactClass<SHOW_ANIMATION> {
        new (settings: ig.EVENT_STEP.SHOW_ANIMATION.Settings): SHOW_ANIMATION;
      }
      var SHOW_ANIMATION: SHOW_ANIMATION_CONSTRUCTOR;

      namespace SHOW_EXTERN_ANIM {
        interface Settings {
          entity: ig.Event.GetEntity;
          anim: ig.EffectHandle.Settings;
          followUp?: ig.EffectHandle.Settings;
        }
      }
      interface SHOW_EXTERN_ANIM extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        animSheet: ig.AnimationSheet;
        animName: unknown;
        followUpSheet: unknown;
        followUpName: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface SHOW_EXTERN_ANIM_CONSTRUCTOR extends ImpactClass<SHOW_EXTERN_ANIM> {
        new (settings: ig.EVENT_STEP.SHOW_EXTERN_ANIM.Settings): SHOW_EXTERN_ANIM;
      }
      var SHOW_EXTERN_ANIM: SHOW_EXTERN_ANIM_CONSTRUCTOR;

      namespace CLEAR_ANIMATION {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface CLEAR_ANIMATION extends ig.EventStepBase {
        _wm: ig.Config;
        entity: ig.Event.GetEntity;
      }
      interface CLEAR_ANIMATION_CONSTRUCTOR extends ImpactClass<CLEAR_ANIMATION> {
        new (settings: ig.EVENT_STEP.CLEAR_ANIMATION.Settings): CLEAR_ANIMATION;
      }
      var CLEAR_ANIMATION: CLEAR_ANIMATION_CONSTRUCTOR;

      namespace DO_ACTION {
        interface Settings {
          entity: ig.Event.GetEntity;
          action: ig.Action.Step[];
          repeating: boolean;
          wait: boolean;
          keepState: boolean;
          immediately: boolean;
        }
      }
      interface DO_ACTION extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        action: ig.Action;
        wait: boolean;
        keepState: boolean;
        _actionEntity: unknown;
        _wm: ig.Config;
        immediately: boolean;

        clearCached(this: this): void;
      }
      interface DO_ACTION_CONSTRUCTOR extends ImpactClass<DO_ACTION> {
        new (settings: ig.EVENT_STEP.DO_ACTION.Settings): DO_ACTION;
      }
      var DO_ACTION: DO_ACTION_CONSTRUCTOR;

      namespace WAIT_UNTIL_ON_GROUND {
        interface Settings {
          entity: ig.Event.GetEntity;
        }
      }
      interface WAIT_UNTIL_ON_GROUND extends ig.EventStepBase {
        _wm: ig.Config;
        entity: ig.Event.GetEntity;
      }
      interface WAIT_UNTIL_ON_GROUND_CONSTRUCTOR extends ImpactClass<WAIT_UNTIL_ON_GROUND> {
        new (settings: ig.EVENT_STEP.WAIT_UNTIL_ON_GROUND.Settings): WAIT_UNTIL_ON_GROUND;
      }
      var WAIT_UNTIL_ON_GROUND: WAIT_UNTIL_ON_GROUND_CONSTRUCTOR;

      namespace GROUP_FACE_TO_ENTITY {
        interface Settings {
          group: ig.Event.GetEntity[];
          entity: ig.Event.GetEntity;
          wait: number;
          minWait?: number;
          repeating?: boolean;
        }
      }
      interface GROUP_FACE_TO_ENTITY extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        action: ig.Action;
        wait: unknown;
        keepState: unknown;
        _actionEntity: unknown;
        _wm: ig.Config;
        group: ig.Event.GetEntity[];

        clearCached(this: this): void;
      }
      interface GROUP_FACE_TO_ENTITY_CONSTRUCTOR extends ImpactClass<GROUP_FACE_TO_ENTITY> {
        new (settings: ig.EVENT_STEP.GROUP_FACE_TO_ENTITY.Settings): GROUP_FACE_TO_ENTITY;
      }
      var GROUP_FACE_TO_ENTITY: GROUP_FACE_TO_ENTITY_CONSTRUCTOR;

      namespace MASS_AVATAR_MOVE {
        interface Settings {
          pointA: Vec3;
          pointB: Vec3;
          relativeSpeed: number;
          postFace: Vec2;
          forwardTime: number;
          waitPerDistance: number;
        }
      }
      interface MASS_AVATAR_MOVE extends ig.EventStepBase {
        pointA: Vec3;
        pointB: Vec3;
        relativeSpeed: number;
        postFace: Vec2;
        forwardTime: number;
        waitPerDistance: number;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface MASS_AVATAR_MOVE_CONSTRUCTOR extends ImpactClass<MASS_AVATAR_MOVE> {
        new (settings: ig.EVENT_STEP.MASS_AVATAR_MOVE.Settings): MASS_AVATAR_MOVE;
      }
      var MASS_AVATAR_MOVE: MASS_AVATAR_MOVE_CONSTRUCTOR;

      namespace MASS_AVATAR_FACE {
        interface Settings {
          entity: ig.Event.GetEntity;
          minWait: number;
          maxWait: number;
        }
      }
      interface MASS_AVATAR_FACE extends ig.EventStepBase {
        action: ig.Action;
        jumpDensity: unknown;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface MASS_AVATAR_FACE_CONSTRUCTOR extends ImpactClass<MASS_AVATAR_FACE> {
        new (settings: ig.EVENT_STEP.MASS_AVATAR_FACE.Settings): MASS_AVATAR_FACE;
      }
      var MASS_AVATAR_FACE: MASS_AVATAR_FACE_CONSTRUCTOR;

      namespace MASS_AVATAR_JUMP {
        interface Settings {
          jumpHeight: unknown;
          minWait: number;
          maxWait: number;
          jumpDensity: number;
        }
      }
      interface MASS_AVATAR_JUMP extends ig.EventStepBase {
        action: ig.Action;
        jumpDensity: number;
        _wm: ig.Config;

        clearCached(this: this): void;
      }
      interface MASS_AVATAR_JUMP_CONSTRUCTOR extends ImpactClass<MASS_AVATAR_JUMP> {
        new (settings: ig.EVENT_STEP.MASS_AVATAR_JUMP.Settings): MASS_AVATAR_JUMP;
      }
      var MASS_AVATAR_JUMP: MASS_AVATAR_JUMP_CONSTRUCTOR;

      namespace TELEPORT {
        interface Settings {
          map: string;
          marker?: Nullable<string>;
        }
      }
      interface TELEPORT extends ig.EventStepBase {
        map: string;
        marker: Nullable<string>;
        _wm: ig.Config;
      }
      interface TELEPORT_CONSTRUCTOR extends ImpactClass<TELEPORT> {
        new (settings: ig.EVENT_STEP.TELEPORT.Settings): TELEPORT;
      }
      var TELEPORT: TELEPORT_CONSTRUCTOR;

      namespace IF {
        interface Settings {
          condition: string;
          withElse: boolean;
        }
      }
      interface IF extends ig.EventStepBase {
        condition: ig.VarCondition;
        withElse: boolean;
        _wm: ig.Config;
      }
      interface IF_CONSTRUCTOR extends ImpactClass<IF> {
        new (settings: ig.EVENT_STEP.IF.Settings): IF;
      }
      var IF: IF_CONSTRUCTOR;

      namespace ChangeVarBase {
        type ChangeType = 'set' | 'add' | 'sub' | 'mul' | 'div' | 'mod' | 'and' | 'or' | 'xor';
        interface Settings<T extends ig.VarValue> {
          varName: ig.Event.VarExpression<T>;
          changeType: ChangeVarBase.ChangeType;
          value: T;
        }
      }
      interface ChangeVarBase<T extends ig.VarValue> {
        varName: ig.Event.VarExpression<T>;
        changeType: ChangeVarBase.ChangeType;
        value: T;
      }
      interface ChangeVarBaseConstructor<Instance, Type extends ig.VarValue>
        extends ImpactClass<Instance> {
        new (settings: ChangeVarBase.Settings<Type>): Instance;
      }

      interface CHANGE_VAR_NUMBER extends ig.EventStepBase, ChangeVarBase<number> {}
      interface CHANGE_VAR_NUMBER_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_NUMBER, number> {}
      var CHANGE_VAR_NUMBER: CHANGE_VAR_NUMBER_CONSTRUCTOR;

      namespace SET_RANDOM_VAR_NUMBER {
        interface Settings {
          varName: string;
          min: number;
          max: number;
        }
      }
      interface SET_RANDOM_VAR_NUMBER extends ig.EventStepBase {
        varName: string;
        min: number;
        max: number;
        _wm: ig.Config;
      }
      interface SET_RANDOM_VAR_NUMBER_CONSTRUCTOR extends ImpactClass<SET_RANDOM_VAR_NUMBER> {
        new (settings: ig.EVENT_STEP.SET_RANDOM_VAR_NUMBER.Settings): SET_RANDOM_VAR_NUMBER;
      }
      var SET_RANDOM_VAR_NUMBER: SET_RANDOM_VAR_NUMBER_CONSTRUCTOR;

      namespace ROUND_VAR_NUMBER {
        interface Settings {
          varName: string;
          roundType: unknown;
          digits: number;
        }
      }
      interface ROUND_VAR_NUMBER extends ig.EventStepBase {
        varName: string;
        _wm: ig.Config;
        digits: number;
      }
      interface ROUND_VAR_NUMBER_CONSTRUCTOR extends ImpactClass<ROUND_VAR_NUMBER> {
        new (settings: ig.EVENT_STEP.ROUND_VAR_NUMBER.Settings): ROUND_VAR_NUMBER;
      }
      var ROUND_VAR_NUMBER: ROUND_VAR_NUMBER_CONSTRUCTOR;

      namespace SET_VAR_TIME {
        interface Settings {
          varName: string;
        }
      }
      interface SET_VAR_TIME extends ig.EventStepBase {
        varName: string;
        changeType: unknown;
        value: unknown;
        _wm: ig.Config;
      }
      interface SET_VAR_TIME_CONSTRUCTOR extends ImpactClass<SET_VAR_TIME> {
        new (settings: ig.EVENT_STEP.SET_VAR_TIME.Settings): SET_VAR_TIME;
      }
      var SET_VAR_TIME: SET_VAR_TIME_CONSTRUCTOR;

      interface CHANGE_VAR_VEC2 extends ig.EventStepBase, ChangeVarBase<Vec2> {}
      interface CHANGE_VAR_VEC2_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_VEC2, Vec2> {}
      var CHANGE_VAR_VEC2: CHANGE_VAR_VEC2_CONSTRUCTOR;

      interface CHANGE_VAR_VEC3 extends ig.EventStepBase, ChangeVarBase<Vec3> {}
      interface CHANGE_VAR_VEC3_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_VEC3, Vec3> {}
      var CHANGE_VAR_VEC3: CHANGE_VAR_VEC3_CONSTRUCTOR;

      interface CHANGE_VAR_BOOL extends ig.EventStepBase, ChangeVarBase<boolean> {}
      interface CHANGE_VAR_BOOL_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_BOOL, boolean> {}
      var CHANGE_VAR_BOOL: CHANGE_VAR_BOOL_CONSTRUCTOR;

      namespace CLEAR_TEMP_STORAGE {
        interface Settings {}
      }
      interface CLEAR_TEMP_STORAGE extends ig.EventStepBase {
        _wm: ig.Config;
      }
      interface CLEAR_TEMP_STORAGE_CONSTRUCTOR extends ImpactClass<CLEAR_TEMP_STORAGE> {
        new (settings: ig.EVENT_STEP.CLEAR_TEMP_STORAGE.Settings): CLEAR_TEMP_STORAGE;
      }
      var CLEAR_TEMP_STORAGE: CLEAR_TEMP_STORAGE_CONSTRUCTOR;

      interface CHANGE_VAR_STRING extends ig.EventStepBase, ChangeVarBase<string> {}
      interface CHANGE_VAR_STRING_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_STRING, string> {}
      var CHANGE_VAR_STRING: CHANGE_VAR_STRING_CONSTRUCTOR;

      interface CHANGE_VAR_LANG extends ig.EventStepBase, ChangeVarBase<ig.LangLabel.Data> {}
      interface CHANGE_VAR_LANG_CONSTRUCTOR
        extends ChangeVarBaseConstructor<CHANGE_VAR_LANG, ig.LangLabel.Data> {}
      var CHANGE_VAR_LANG: CHANGE_VAR_LANG_CONSTRUCTOR;

      namespace SET_ATTRIB_VEC2 {
        interface Settings {
          actor: ig.Event.GetEntity;
          name: string;
          value: ig.Event.Vec2Expression;
        }
      }
      interface SET_ATTRIB_VEC2 extends ig.EventStepBase {
        actor: ig.Event.GetEntity;
        name: string;
        value: ig.Event.Vec2Expression;
        _wm: ig.Config;
      }
      interface SET_ATTRIB_VEC2_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_VEC2> {
        new (settings: ig.EVENT_STEP.SET_ATTRIB_VEC2.Settings): SET_ATTRIB_VEC2;
      }
      var SET_ATTRIB_VEC2: SET_ATTRIB_VEC2_CONSTRUCTOR;

      namespace SET_ATTRIB_VEC3 {
        interface Settings {
          actor: ig.Event.GetEntity;
          name: string;
          value: ig.Event.Vec3Expression;
        }
      }
      interface SET_ATTRIB_VEC3 extends ig.EventStepBase {
        actor: ig.Event.GetEntity;
        name: string;
        value: ig.Event.Vec3Expression;
        _wm: ig.Config;
      }
      interface SET_ATTRIB_VEC3_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_VEC3> {
        new (settings: ig.EVENT_STEP.SET_ATTRIB_VEC3.Settings): SET_ATTRIB_VEC3;
      }
      var SET_ATTRIB_VEC3: SET_ATTRIB_VEC3_CONSTRUCTOR;

      namespace SET_ATTRIB_STRING {
        interface Settings {
          actor: ig.Event.GetEntity;
          name: string;
          value: ig.Event.StringExpression;
        }
      }
      interface SET_ATTRIB_STRING extends ig.EventStepBase {
        actor: ig.Event.GetEntity;
        name: string;
        value: ig.Event.StringExpression;
        _wm: ig.Config;
      }
      interface SET_ATTRIB_STRING_CONSTRUCTOR extends ImpactClass<SET_ATTRIB_STRING> {
        new (settings: ig.EVENT_STEP.SET_ATTRIB_STRING.Settings): SET_ATTRIB_STRING;
      }
      var SET_ATTRIB_STRING: SET_ATTRIB_STRING_CONSTRUCTOR;

      namespace PLAY_SOUND {
        interface Settings {
          sound: string;
          volume?: number;
          variance?: number;
          position?: Vec2;
          name: string;
          loop: boolean;
          offset: number;
          startTime: number;
          speed?: number;
        }
      }
      interface PLAY_SOUND extends ig.EventStepBase {
        sound: ig.Sound;
        loop: boolean;
        settings: { offset: number; startTime: number; speed: number };
        name: Nullable<string>;
        speed: null;
        _wm: ig.Config;
        position: Nullable<Vec2>;

        clearCached(this: this): void;
      }
      interface PLAY_SOUND_CONSTRUCTOR extends ImpactClass<PLAY_SOUND> {
        new (settings: ig.EVENT_STEP.PLAY_SOUND.Settings): PLAY_SOUND;
      }
      var PLAY_SOUND: PLAY_SOUND_CONSTRUCTOR;

      namespace STOP_SOUND {
        interface Settings {
          name: string;
        }
      }
      interface STOP_SOUND extends ig.EventStepBase {
        name: Nullable<string>;
        _wm: ig.Config;
      }
      interface STOP_SOUND_CONSTRUCTOR extends ImpactClass<STOP_SOUND> {
        new (settings: ig.EVENT_STEP.STOP_SOUND.Settings): STOP_SOUND;
      }
      var STOP_SOUND: STOP_SOUND_CONSTRUCTOR;

      namespace SET_MOVING_LAYER_STOP {
        interface Settings {
          stopped: boolean;
        }
      }
      interface SET_MOVING_LAYER_STOP extends ig.EventStepBase {
        _wm: ig.Config;
        stopped: boolean;
      }
      interface SET_MOVING_LAYER_STOP_CONSTRUCTOR extends ImpactClass<SET_MOVING_LAYER_STOP> {
        new (settings: ig.EVENT_STEP.SET_MOVING_LAYER_STOP.Settings): SET_MOVING_LAYER_STOP;
      }
      var SET_MOVING_LAYER_STOP: SET_MOVING_LAYER_STOP_CONSTRUCTOR;
    }

    namespace ConsoleType {
      type Func = (msg: string) => void;
    }
    interface ConsoleType {
      LOG: ig.ConsoleType.Func;
      WARN: ig.ConsoleType.Func;
      DEBUG: ig.ConsoleType.Func;
    }
    var ConsoleType: ConsoleType;

    namespace EVENT_STEP {
      namespace CONSOLE_LOG {
        interface Settings {
          text: string;
          consoleType: keyof typeof ig.ConsoleType;
        }
      }
      interface CONSOLE_LOG extends ig.EventStepBase {
        text: Nullable<string>;
        consoleType: keyof typeof ig.ConsoleType;
        _wm: ig.Config;
      }
      interface CONSOLE_LOG_CONSTRUCTOR extends ImpactClass<CONSOLE_LOG> {
        new (settings: ig.EVENT_STEP.CONSOLE_LOG.Settings): CONSOLE_LOG;
      }
      var CONSOLE_LOG: CONSOLE_LOG_CONSTRUCTOR;
    }
  }
}
