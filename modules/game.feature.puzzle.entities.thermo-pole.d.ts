// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.combat-poi

export {};

declare global {
  namespace sc {
    namespace ElementPoleGroups {
      interface Group {
        dests: PartialRecord<sc.ELEMENT, ig.ENTITY.ElementPoleDest>;
        poles: ig.ENTITY.ElementPole[];
        currentBall: Nullable<ig.ENTITY.Ball>;
        currentDest: Nullable<ig.ENTITY.ElementPoleDest>;
        hitCount: number;
      }
    }

    interface ElementPoleGroups {
      groups: Record<string, sc.ElementPoleGroups.Group>;

      registerDest(pole: ig.ENTITY.ElementPoleDest, active: boolean): unknown;
      registerPole(pole: ig.ENTITY.ElementPole): void;
      getGroup(group: string): ElementPoleGroups.Group;
      deleteGroup(group: string): void;
      onPoleHit(pole: ig.ENTITY.ElementPole, ball: ig.ENTITY.Ball, alreadyHit: boolean): boolean;
      getChargeState(pole: ig.ENTITY.ElementPole): ig.ENTITY.ElementPole.State;
      onFinalizeGroup(pole: ig.ENTITY.ElementPole): void;
      onCancelCheck(pole: ig.ENTITY.ElementPole): boolean;
      onGroupChargeCancel(pole: ig.ENTITY.ElementPole): void;
    }
    let ElementPoleGroups: ElementPoleGroups;

    interface TermoPoleType {
      size: Vec3;
      src: Vec2;
      changeHeight?: number;
    }
    interface TERMO_POLE_TYPE {
      LONG: TermoPoleType;
      LONG64: TermoPoleType;
      SHORT: TermoPoleType;
    }
    var TERMO_POLE_TYPE: TERMO_POLE_TYPE;
  }

  namespace ig.ENTITY {
    namespace ElementPole {
      interface State {
        timed: boolean;
        blink?: boolean;
      }
      interface Charge {
        state: State;
        element: sc.ELEMENT;
        prevElement: sc.ELEMENT;
        timer: ig.WeightTimer;
        lightHandles: ig.LightHandle[];
      }
      interface Settings extends ig.Entity.Settings {
        group?: string;
        poleType?: keyof typeof sc.TERMO_POLE_TYPE;
      }
    }
    interface ElementPole extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      data: sc.TermoPoleType;
      gfx?: ig.Image;
      group: string;
      active: boolean;
      charge: ElementPole.Charge;
      effects: { sheet: ig.EffectSheet; handle: ig.EffectHandle; hideHandle: ig.EffectHandle };

      onHideRequest(this: this): void;
      chargeElement(
        this: this,
        element: sc.ELEMENT,
        top: boolean,
        state: ig.ENTITY.ElementPole.Charge,
        ignoreEffects?: boolean,
      ): void;
      resetTimer(this: this, remainingTime: number): void;
      addLight(this: this, z: number): void;
      discharge(this: this, noShowFx?: boolean): void;
      showEffect(
        this: this,
        effectPrefix: string,
        down: boolean,
        state: ig.ENTITY.ElementPole.State,
      ): void;
      ballHit(this: this, ballLike: ig.BallLike, blockDir?: Vec2): boolean;
      onComplete(this: this): void;
      onDestInit(this: this, element: sc.ELEMENT): void;
      onFinalize(this: this): void;
      onCancel(this: this): void;
      isBallAdjust(this: this): boolean;
      doBallAdjust(this: this, pos: Vec3, dir: Vec2, size: Vec3, maxBounce: number): number;
      isBallDestroyer(this: this): boolean;
    }
    interface ElementPoleConstructor extends ImpactClass<ElementPole> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.ElementPole.Settings): ElementPole;
    }
    let ElementPole: ElementPoleConstructor;

    namespace ElementPoleDest {
      interface Settings extends ig.AnimatedEntity.Settings {
        group: string;
        element?: 'HEAT' | 'COLD' | 'SHOCK' | 'WAVE';
        variable?: string;
        activeTime?: number;
      }

      interface State {
        OFF: 1;
        CHARGING: 2;
        ON: 3;
      }
      type StateValue = State[keyof State];
    }
    interface ElementPoleDest extends ig.AnimatedEntity, ig.EffectSheet.EventCallback {
      group: string;
      element: sc.ELEMENT;
      state: ig.ENTITY.ElementPoleDest.StateValue;
      _wm: ig.Config;
      effects: { sheet: ig.EffectSheet; handle: ig.EffectHandle; lightHandle: ig.LightHandle };
      variable?: string;
      activeTime?: number;

      isOn(this: this): boolean;
      onPoleHit(pole: ig.ENTITY.ElementPole, ball: ig.ENTITY.Ball, alreadyHit: boolean): boolean;
      onCancel(this: this): void;
      turnOn(this: this): void;
      turnOnGfx(this: this): void;
      turnOff(this: this): void;
    }
    interface ElementPoleDestConstructor extends ImpactClass<ElementPoleDest> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.ElementPoleDest.Settings,
      ): ElementPoleDest;
    }
    var ElementPoleDest: ElementPoleDestConstructor;
  }
  namespace sc {
    namespace COMBAT_POI {
      namespace ELEMENT_POLE {
        interface Settings {}
      }
      interface ELEMENT_POLE extends sc.COMBAT_POI.Base<sc.COMBAT_POI.ELEMENT_POLE.Settings> {
        _wm: ig.Config;
      }
      var ELEMENT_POLE: ELEMENT_POLE;
    }
  }
}
