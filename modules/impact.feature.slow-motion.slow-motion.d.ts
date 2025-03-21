// requires impact.base.event
// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface SlowMotion extends ig.GameAddon {
      slowMotions: ig.SlowMotionHandle[];
      namedSlowMotions: Record<string, ig.SlowMotionHandle>;
      postUpdateOrder: number;

      forceUpdate(this: this): void;
      update(this: this): void;
      hasSlowMotion(this: this, name: string): boolean;
      getNonInvertSlowDown(this: this): number;
      onPostUpdate(this: this): void;
      onLevelLoadStart(this: this): void;
      onReset(this: this): void;
      add(this: this, factor: number, timer: number, name?: Nullable<string>): ig.SlowMotionHandle;
      clearNamed(this: this, name: string, time?: number): void;
    }
    interface SlowMotionConstructor extends ImpactClass<SlowMotion> {
      new (): SlowMotion;
    }
    var SlowMotion: SlowMotionConstructor;
    var slowMotion: SlowMotion;

    interface SlowMotionHandle extends ig.Class {
      factor: number;
      transitionTime: number;
      name?: Nullable<string>;
      timer: number;
      cleared: boolean;
      inverers: ig.InfluenceConnection[];

      clear(this: this, time?: number): void;
      update(this: this): boolean;
      addInverseEntity(this: this, entity: sc.ActorEntity): void;
      getFactor(this: this): number;
      onActionEndDetach(this: this): void;
    }
    interface SlowMotionHandleConstructor extends ImpactClass<SlowMotionHandle> {
      new (factor: number, timer: number, name?: Nullable<string>): SlowMotionHandle;
    }
    var SlowMotionHandle: SlowMotionHandleConstructor;
  }
}
