export {};

declare global {
  namespace sc {
    interface INFLUENCE_PUSH {
      PULL: ig.InfluenceEntry.InfluencePush;
      PUSH: ig.InfluenceEntry.InfluencePush;
      DIR: ig.InfluenceEntry.InfluencePush;
    }
    var INFLUENCE_PUSH: INFLUENCE_PUSH;
  }
  namespace ig {
    interface Influencer extends ig.Class {
      entity: ig.Entity;
      entries: ig.InfluenceEntry[];
      callbacks: unknown[];

      onUpdate(this: this): void;
    }
    interface InfluencerConstructor extends ImpactClass<Influencer> {
      new (entity: ig.Entity): Influencer;
    }
    var Influencer: InfluencerConstructor;

    namespace InfluenceEntry {
      interface StateEnum {
        NORMAL: 0;
        FADE_OUT: 1;
        REMOVED: 2;
      }
      type State = StateEnum[keyof StateEnum];

      interface PushType {
        type: InfluencePush;
        range: number;
        fadeRange: number;
        speed: number;
        vec: Vec2;
      }
      type InfluencePush = (
        destVec: Vec2,
        coll: ig.CollEntry,
        vec: Vec2,
        range: number,
        fadeRange: number,
        speed: number,
        factor: number,
      ) => void;
    }
    interface InfluenceEntry extends ig.Class {
      fadeTimer: ig.WeightTimer;
      timeScale: number;
      slowmoScale: number;
      logicTimeScale: number;
      moveXYScale: number;
      groundSinkZ: number;
      updateInfluencer: Nullable<ig.Influencer>;
      state: ig.InfluenceEntry.State;
      push: Nullable<ig.InfluenceEntry.PushType>;

      setPushType(
        this: this,
        type: ig.InfluenceEntry.InfluencePush,
        range: number,
        fadeRange: number,
        speed: number,
      ): void;
      setPushEntityCenter(this: this, entity: ig.Entity): void;
      setPushCenter(this: this, destVec: Vec2): void;
      getPush(this: this, coll: ig.CollEntry, factor: number): Vec2;
      setFadeOut(this: this, duration: number): void;
      getFactor(this: this): number;
    }
    interface InfluenceEntryConstructor extends ImpactClass<InfluenceEntry> {
      new (): InfluenceEntry;
    }
    var InfluenceEntry: InfluenceEntryConstructor;

    interface InfluenceConnection extends ig.Class {
      influencer: ig.Influencer;
      influenceEntry: ig.InfluenceEntry;

      updateImmediately(this: this): void;
      clear(this: this): void;
      onActionEndDetach(this: this): void;
    }
    interface InfluenceConnectionConstructor extends ImpactClass<InfluenceConnection> {
      new (influencer: ig.Influencer, influenceEntry: ig.InfluenceEntry): InfluenceConnection;
    }
    var InfluenceConnection: InfluenceConnectionConstructor;
  }
}
