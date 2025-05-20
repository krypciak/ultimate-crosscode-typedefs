// requires impact.base.action
// requires impact.base.event
// requires impact.base.entity

export {};

declare global {
  namespace ig {
    namespace FX_FIRST_TARGET_OPTION {
      type Func = (actor: ig.ActorEntity) => Nullable<ig.ActorEntity>;
    }
    interface FX_FIRST_TARGET_OPTION {
      SELF: ig.FX_FIRST_TARGET_OPTION.Func;
      TARGET: ig.FX_FIRST_TARGET_OPTION.Func;
    }
    var FX_FIRST_TARGET_OPTION: FX_FIRST_TARGET_OPTION;

    namespace FX_SECOND_TARGET_OPTION {
      type Func = (
        settings: Nullable<ig.EffectSheet.SpawnSettings>,
        actor: ig.ActorEntity,
        target2Key: Nullable<string>,
      ) => Nullable<ig.ActorEntity>;
    }
    interface FX_SECOND_TARGET_OPTION {
      SELF: ig.FX_SECOND_TARGET_OPTION.Func;
      ATTRIB_ENTITY: ig.FX_SECOND_TARGET_OPTION.Func;
      ATTRIB_POINT: ig.FX_SECOND_TARGET_OPTION.Func;
      ATTRIB_TARGET: ig.FX_SECOND_TARGET_OPTION.Func;
    }
    var FX_SECOND_TARGET_OPTION: FX_SECOND_TARGET_OPTION;

    namespace ACTION_STEP {
      namespace SHOW_EFFECT {
        interface Settings {
          effect: ig.EffectHandle.Settings;
          duration: number;
          offset: Vec3;
          rotOffset?: Vec2;
          target?: keyof typeof ig.FX_FIRST_TARGET_OPTION;
          align: keyof typeof ig.ENTITY_ALIGN;
          rotateFace: number;
          flipLeftFace: boolean;
          wait: boolean;
          waitSkip: number;
          actionDetached: boolean;
          group?: string;
          partName?: string;
          target2?: keyof typeof ig.FX_SECOND_TARGET_OPTION;
          target2Key?: string;
          target2Offset?: Vec3;
          target2Align?: keyof typeof ig.ENTITY_ALIGN;
          noMultiGroup?: boolean;
          fixPos: boolean;
          spriteFilter?: number[];
          ignoreSlowMo?: boolean;
        }
      }
      interface SHOW_EFFECT extends ig.ActionStepBase {
        effect: ig.EffectHandle;
        duration: number;
        offset: Vec3;
        align: ig.ENTITY_ALIGN;
        rotateFace: number;
        wait: boolean;
        waitSkip: number;
        group: string;
        partName: Nullable<string>;
        _wm: ig.Config;
        rotOffset?: Vec2;
        actionDetached: boolean;
        flipLeftFace: boolean;
        target: ig.FX_FIRST_TARGET_OPTION;
        target2: ig.FX_SECOND_TARGET_OPTION;
        target2Align: ig.ENTITY_ALIGN;
        noMultiGroup: boolean;
        target2Offset?: Vec3;
        target2Key: Nullable<string>;
        fixPos: boolean;
        spriteFilter: Nullable<number[]>;
        ignoreSlowMo: boolean;

        clearCached(this: this): void;
      }
      interface SHOW_EFFECT_CONSTRUCTOR extends ImpactClass<SHOW_EFFECT> {
        new (settings: ig.ACTION_STEP.SHOW_EFFECT.Settings): SHOW_EFFECT;
      }
      var SHOW_EFFECT: SHOW_EFFECT_CONSTRUCTOR;

      namespace CLEAR_EFFECTS {
        interface Settings {
          entity?: keyof typeof ig.FX_SECOND_TARGET_OPTION;
          group?: string;
        }
      }
      interface CLEAR_EFFECTS extends ig.ActionStepBase {
        entity: ig.FX_SECOND_TARGET_OPTION;
        group: Nullable<string>;
        _wm: ig.Config;

        entityAttachedCondition(this: this, a: unknown): unknown;
        actionAttachedCondition(this: this, a: unknown): unknown;
      }
      interface CLEAR_EFFECTS_CONSTRUCTOR extends ImpactClass<CLEAR_EFFECTS> {
        new (settings: ig.ACTION_STEP.CLEAR_EFFECTS.Settings): CLEAR_EFFECTS;
      }
      var CLEAR_EFFECTS: CLEAR_EFFECTS_CONSTRUCTOR;
    }
    namespace EVENT_STEP {
      namespace SHOW_EFFECT {
        interface Settings {
          entity: ig.Event.GetEntity;
          effect: ig.EffectHandle.Settings;
          duration: number;
          offset: Vec3;
          align: keyof typeof ig.ENTITY_ALIGN;
          group: string;
          wait: boolean;
          waitSkip: number;
          target2?: ig.Event.GetEntity;
          target2Offset?: Vec3;
          target2Align?: keyof typeof ig.ENTITY_ALIGN;
          ignoreSlowMo?: boolean;
        }
      }
      interface SHOW_EFFECT extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        effect: ig.EffectHandle;
        duration: number;
        offset: Nullable<Vec3>;
        group: Nullable<string>;
        wait: boolean;
        waitSkip: number;
        target2?: ig.Event.GetEntity;
        target2Offset?: Vec3;
        target2Align: ig.ENTITY_ALIGN;
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
        ignoreSlowMo: boolean;

        clearCached(this: this): void;
      }
      interface SHOW_EFFECT_CONSTRUCTOR extends ImpactClass<SHOW_EFFECT> {
        new (settings: ig.EVENT_STEP.SHOW_EFFECT.Settings): SHOW_EFFECT;
      }
      var SHOW_EFFECT: SHOW_EFFECT_CONSTRUCTOR;

      namespace CLEAR_EFFECTS {
        interface Settings {
          entity: ig.Event.GetEntity;
          group?: string;
        }
      }
      interface CLEAR_EFFECTS extends ig.EventStepBase {
        entity: ig.Event.GetEntity;
        group: Nullable<string>;
        _wm: ig.Config;

        entityAttachedCondition(this: this, a: unknown): unknown;
      }
      interface CLEAR_EFFECTS_CONSTRUCTOR extends ImpactClass<CLEAR_EFFECTS> {
        new (settings: ig.EVENT_STEP.CLEAR_EFFECTS.Settings): CLEAR_EFFECTS;
      }
      var CLEAR_EFFECTS: CLEAR_EFFECTS_CONSTRUCTOR;
    }
  }
}
