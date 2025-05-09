// requires impact.base.entity
// requires impact.base.actor-entity

export {};

declare global {
  namespace sc {
    interface CombatStun extends ig.Class {
      run?(this: this, entity1: ig.ActorEntity, entity2?: ig.ActorEntity): void;
      preHit?(this: this, entity1: ig.ActorEntity, entity2?: ig.ActorEntity): void;
      start?(this: this, entity1: ig.ActorEntity, entity2?: ig.ActorEntity): void;
    }
    interface CombatStunConstructor extends ImpactClass<CombatStun> {
      new (): CombatStun;
    }
    var CombatStun: CombatStunConstructor;

    namespace COMBAT_STUN {
      interface START_LOCK extends sc.CombatStun {
        _wm: ig.Config;

        preHit(this: this, entity1: ig.ActorEntity, entity2?: ig.ActorEntity): void;
      }
      interface START_LOCKConstructor extends ImpactClass<START_LOCK> {
        new (): START_LOCK;
      }

      interface END_LOCK extends sc.CombatStun {
        _wm: ig.Config;

        preHit(this: this, entity1: ig.ActorEntity, entity2?: ig.ActorEntity): void;
      }
      interface END_LOCKConstructor extends ImpactClass<END_LOCK> {
        new (): END_LOCK;
      }

      interface BLOCK_XY extends sc.CombatStun {
        _wm: ig.Config;

        run(this: this, entity1: ig.ActorEntity): void;
      }
      interface BLOCK_XYConstructor extends ImpactClass<BLOCK_XY> {
        new (): BLOCK_XY;
      }

      namespace BLOCK_FALL {
        interface Settings {
          maxTime: number;
        }
      }
      interface BLOCK_FALL extends sc.CombatStun {
        maxTime: number;
        _wm: ig.Config;

        run(this: this, entity1: ig.ActorEntity): void;
      }
      interface BLOCK_FALLConstructor extends ImpactClass<BLOCK_FALL> {
        new (settings: sc.COMBAT_STUN.BLOCK_FALL): BLOCK_FALL;
      }

      namespace PULL {
        interface Settings {
          speed: number;
          distance?: number;
          maxTime?: number;
        }
      }
      interface PULL extends sc.CombatStun {
        speed: number;
        distance: number;
        maxTime: number;
        _wm: ig.Config;

        start(this: this, entity1: ig.ActorEntity, entity2?: ig.ActorEntity): void;
        run(this: this, entity1: ig.ActorEntity, entity2?: ig.ActorEntity): void;
      }
      interface PULLConstructor extends ImpactClass<PULL> {
        new (settings: sc.COMBAT_STUN.PULL.Settings): PULL;
      }

      namespace Z_PULL {
        interface Settings {
          maxSpeed?: number;
          accel?: number;
          offZ?: number;
          maxTime?: number;
        }
      }
      interface Z_PULL extends sc.CombatStun {
        maxSpeed: number;
        accel: number;
        offZ: number;
        _wm: ig.Config;

        start(this: this): void;
        run(this: this, entity1: ig.ActorEntity, entity2?: ig.ActorEntity): void;
      }
      interface Z_PULLConstructor extends ImpactClass<Z_PULL> {
        new (settings: sc.COMBAT_STUN.Z_PULL): Z_PULL;
      }

      namespace FORCE_POS {
        interface Settings {
          align?: keyof typeof ig.ENTITY_ALIGN;
          offset?: Nullable<Vec3>;
          maxTime?: number;
          interpolateFactor?: number;
        }
      }
      interface FORCE_POS extends sc.CombatStun {
        _wm: ig.Config;
        align: ig.ENTITY_ALIGN;
        offset: Nullable<Vec3>;
        maxTime: number;
        interpolateFactor: number;

        start(this: this): void;
        run(this: this, entity1: ig.ActorEntity, entity2?: ig.ActorEntity): void;
      }
      interface FORCE_POSConstructor extends ImpactClass<FORCE_POS> {
        new (settings: sc.COMBAT_STUN.FORCE_POS.Settings): FORCE_POS;
      }

      namespace Z_VEL {
        interface Settings {
          value?: number;
        }
      }
      interface Z_VEL extends sc.CombatStun {
        value: number;
        _wm: ig.Config;

        start(this: this, entity1: ig.ActorEntity): void;
      }
      interface Z_VELConstructor extends ImpactClass<Z_VEL> {
        new (settings: sc.COMBAT_STUN.Z_VEL.Settings): Z_VEL;
      }

      namespace Z_BOUNCINESS {
        interface Settings {
          value?: number;
        }
      }
      interface Z_BOUNCINESS extends sc.CombatStun {
        value: number;
        _wm: ig.Config;

        start(this: this, entity1: ig.ActorEntity): void;
      }
      interface Z_BOUNCINESSConstructor extends ImpactClass<Z_BOUNCINESS> {
        new (settings: sc.COMBAT_STUN.Z_BOUNCINESS.Settings): Z_BOUNCINESS;
      }

      namespace SET_FACE {
        interface Settings {
          faces: (keyof typeof ig.ActorEntity.FACE8)[];
          invert?: boolean;
        }
      }
      interface SET_FACE extends sc.CombatStun {
        value: number;
        _wm: ig.Config;
        faces: (keyof typeof ig.ActorEntity.FACE8)[];
        invert: boolean;

        start(this: this, entity1: ig.ActorEntity, entity2?: ig.ActorEntity): void;
      }
      interface SET_FACEConstructor extends ImpactClass<SET_FACE> {
        new (settings: sc.COMBAT_STUN.SET_FACE.Settings): SET_FACE;
      }
    }
    interface COMBAT_STUN {
      START_LOCK: sc.COMBAT_STUN.START_LOCKConstructor;
      END_LOCK: sc.COMBAT_STUN.END_LOCKConstructor;
      BLOCK_XY: sc.COMBAT_STUN.BLOCK_XYConstructor;
      BLOCK_FALL: sc.COMBAT_STUN.BLOCK_FALLConstructor;
      PULL: sc.COMBAT_STUN.PULLConstructor;
      Z_PULL: sc.COMBAT_STUN.Z_PULLConstructor;
      FORCE_POS: sc.COMBAT_STUN.FORCE_POSConstructor;
      Z_VEL: sc.COMBAT_STUN.Z_VELConstructor;
      Z_BOUNCINESS: sc.COMBAT_STUN.Z_BOUNCINESSConstructor;
      SET_FACE: sc.COMBAT_STUN.SET_FACEConstructor;
    }
    var COMBAT_STUN: COMBAT_STUN;
  }
}
