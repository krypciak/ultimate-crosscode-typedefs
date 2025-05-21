// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace EFFECT_ENTRY {
      namespace WAIT {
        interface Settings {
          time: number;
        }
      }
      interface WAIT extends ig.EffectStepBase {
        _wm: ig.EffectConfig;
      }
      interface WAIT_CONSTRUCTOR extends ImpactClass<WAIT> {
        new (): WAIT;
      }
      var WAIT: WAIT_CONSTRUCTOR;

      namespace LOOP_START {
        interface Settings {}
      }
      interface LOOP_START extends ig.EffectStepBase {
        _wm: ig.EffectConfig;
      }
      interface LOOP_START_CONSTRUCTOR extends ImpactClass<LOOP_START> {
        new (): LOOP_START;
      }
      var LOOP_START: LOOP_START_CONSTRUCTOR;

      namespace LOOP_END {
        interface Settings {}
      }
      interface LOOP_END extends ig.EffectStepBase {
        _wm: ig.EffectConfig;
      }
      interface LOOP_END_CONSTRUCTOR extends ImpactClass<LOOP_END> {
        new (): LOOP_END;
      }
      var LOOP_END: LOOP_END_CONSTRUCTOR;

      namespace PLAY_ANIM {
        interface Settings extends ig.EffectStepBase.Settings {
          useTargetAngle: boolean;
          keepAngleSync: boolean;
        }
      }
      interface PLAY_ANIM extends ig.EffectStepBase {
        _wm: ig.EffectConfig;
        particleData: ig.ParticleData;
        offset: Vec3;
        rotOffset: Nullable<Vec3>;
        useTargetAngle: boolean;
        keepAngleSync: boolean;
      }
      interface PLAY_ANIM_CONSTRUCTOR extends ImpactClass<PLAY_ANIM> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.PLAY_ANIM.Settings): PLAY_ANIM;
      }
      var PLAY_ANIM: PLAY_ANIM_CONSTRUCTOR;

      namespace PLAY_FACE_ANIM {
        interface Settings extends ig.EffectStepBase.Settings {
          offset?: Vec3;
        }
      }
      interface PLAY_FACE_ANIM extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        _wm: ig.EffectConfig;
      }
      interface PLAY_FACE_ANIM_CONSTRUCTOR extends ImpactClass<PLAY_FACE_ANIM> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.PLAY_FACE_ANIM.Settings,
        ): PLAY_FACE_ANIM;
      }
      var PLAY_FACE_ANIM: PLAY_FACE_ANIM_CONSTRUCTOR;

      namespace PLAY_ANIM_RANGE {
        interface Settings extends ig.EffectStepBase.Settings {
          radius: number;
          useTargetAngle: boolean;
          numParticles?: number;
          duration: number;
          offset?: Vec3;
          alongY: boolean;
          moveZDist?: number;
          keySpline?: keyof typeof KeySpline;
        }
      }
      interface PLAY_ANIM_RANGE extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        offset: Vec3;
        radius: number;
        duration: number;
        numParticles: number;
        useTargetAngle: boolean;
        _wm: ig.EffectConfig;
        alongY: boolean;
        moveZDist: number;
        keySpline: KeySpline;

        start(this: this): { duration: number; particles: number };
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
        ): void;
      }
      interface PLAY_ANIM_RANGE_CONSTRUCTOR extends ImpactClass<PLAY_ANIM_RANGE> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.PLAY_ANIM_RANGE.Settings,
        ): PLAY_ANIM_RANGE;
      }
      var PLAY_ANIM_RANGE: PLAY_ANIM_RANGE_CONSTRUCTOR;

      namespace PLAY_ANIMS_OVER_ENTITY {
        interface Settings extends ig.EffectStepBase {
          numParticles?: number;
          duration: number;
          circular: boolean;
          xScale?: number;
          yScale?: number;
          moveZDist?: number;
          keySpline?: unknown;
          offset?: Vec3;
        }
        interface Data {
          duration: number;
          particles: number;
          offX: number;
          offY: number;
          offZ: number;
          radius: number;
          aspectRatio: number;
        }
      }
      interface PLAY_ANIMS_OVER_ENTITY extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        duration: number;
        xScale: number;
        yScale: number;
        circular: boolean;
        numParticles: number;
        keySpline: KeySpline;
        moveZDist: number;
        _wm: ig.EffectConfig;

        start(this: this, entity: ig.ENTITY.Effect): ig.EFFECT_ENTRY.PLAY_ANIMS_OVER_ENTITY.Data;
        update(
          this: this,
          entity: ig.ENTITY.Effect,
          lastParticle: number,
          currentParticle: number,
          data: ig.EFFECT_ENTRY.PLAY_ANIMS_OVER_ENTITY.Data,
        ): void;
      }
      interface PLAY_ANIMS_OVER_ENTITY_CONSTRUCTOR extends ImpactClass<PLAY_ANIMS_OVER_ENTITY> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.PLAY_ANIMS_OVER_ENTITY.Settings,
        ): PLAY_ANIMS_OVER_ENTITY;
      }
      var PLAY_ANIMS_OVER_ENTITY: PLAY_ANIMS_OVER_ENTITY_CONSTRUCTOR;

      namespace DEBRIS_OVER_ENTITY {
        interface Settings extends ig.EffectStepBase.Settings {
          numParticles?: number;
          circular: boolean;
          xScale?: number;
          yScale?: number;
          minSpeed?: number;
          maxSpeed?: number;
          minZSpeed: number;
          maxZSpeed: number;
          debrisSize?: Vec3;
          zGravityFactor?: number;
          zBounciness?: number;
          minZVel?: number;
          offset?: Vec3;
        }
      }
      interface DEBRIS_OVER_ENTITY extends ig.EffectStepBase {
        particleData: ig.ParticleData;
        xScale: number;
        yScale: number;
        circular: boolean;
        numParticles: number;
        debrisSize: Vec3;
        _wm: ig.EffectConfig;
        minSpeed: number;
        maxSpeed: number;
        minZSpeed: number;
        maxZSpeed: number;
        zGravityFactor: Nullable<number>;
      }
      interface DEBRIS_OVER_ENTITY_CONSTRUCTOR extends ImpactClass<DEBRIS_OVER_ENTITY> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.DEBRIS_OVER_ENTITY.Settings,
        ): DEBRIS_OVER_ENTITY;
      }
      var DEBRIS_OVER_ENTITY: DEBRIS_OVER_ENTITY_CONSTRUCTOR;

      namespace PLAY_SOUND {
        interface Settings {
          sound: string;
          group?: string;
          volume?: number;
          global: boolean;
          loop: boolean;
          variance?: number;
          speed?: number;
          fadeDuration?: number;
          radius?: number;
          attachHandle?: boolean;
        }
      }
      interface PLAY_SOUND extends ig.EffectStepBase {
        sound: unknown;
        global: boolean;
        loop: boolean;
        attachHandle: boolean;
        settings: unknown;
        _wm: ig.EffectConfig;
        radius: number;

        clearCached(this: this): void;
      }
      interface PLAY_SOUND_CONSTRUCTOR extends ImpactClass<PLAY_SOUND> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.PLAY_SOUND.Settings): PLAY_SOUND;
      }
      var PLAY_SOUND: PLAY_SOUND_CONSTRUCTOR;

      namespace PLAY_RANDOM_SOUND {
        interface Settings {
          sounds: undefined[];
          global: boolean;
          loop: boolean;
          speed?: number;
          fadeDuration?: number;
          radius?: number;
        }
      }
      interface PLAY_RANDOM_SOUND extends ig.EffectStepBase {
        sounds: unknown;
        global: boolean;
        loop: boolean;
        settings: unknown;
        _wm: ig.EffectConfig;
        radius: number;

        clearCached(this: this): void;
      }
      interface PLAY_RANDOM_SOUND_CONSTRUCTOR extends ImpactClass<PLAY_RANDOM_SOUND> {
        new (
          sheet: ig.EffectSheet,
          settings: ig.EFFECT_ENTRY.PLAY_RANDOM_SOUND.Settings,
        ): PLAY_RANDOM_SOUND;
      }
      var PLAY_RANDOM_SOUND: PLAY_RANDOM_SOUND_CONSTRUCTOR;

      namespace STOP_SOUNDS {
        interface Settings {}
      }
      interface STOP_SOUNDS extends ig.EffectStepBase {
        _wm: ig.EffectConfig;
      }
      interface STOP_SOUNDS_CONSTRUCTOR extends ImpactClass<STOP_SOUNDS> {
        new (sheet: ig.EffectSheet, settings: ig.EFFECT_ENTRY.STOP_SOUNDS.Settings): STOP_SOUNDS;
      }
      var STOP_SOUNDS: STOP_SOUNDS_CONSTRUCTOR;
    }
  }
}
