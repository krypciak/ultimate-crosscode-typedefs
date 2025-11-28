// requires impact.base.steps

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {}

    namespace ActionStepBase {
      type Settings = {
        [TYPE in keyof typeof ig.ACTION_STEP]: {
          type: TYPE;
        } & ConstructorParameters<(typeof ig.ACTION_STEP)[TYPE]>[0];
      }[keyof typeof ig.ACTION_STEP];
    }
    interface ActionStepBase extends ig.StepBase {
      _nextStep: Nullable<ig.ActionStepBase>;
      branches: Nullable<Record<string, ig.ActionStepBase>>;

      start(this: this, target: ig.ActorEntity): void;
      run(this: this, target: ig.ActorEntity): boolean;
      getNext(this: this, target: ig.ActorEntity): Nullable<ig.ActionStepBase>;
    }
    interface ActionStepBaseConstructor extends ImpactClass<ActionStepBase> {}
    var ActionStepBase: ActionStepBaseConstructor;

    namespace Action {
      type Face = keyof typeof ig.ActorEntity.FACE8 | { actorAttrib?: string };
    }
    interface Action extends ig.Class {
      name: string;
      rootStep: ig.ActionStepBase;
      labeledSteps: Record<string, ig.ActionStepBase>;
      parallelMove: boolean;
      repeating: boolean;
      hint?: Nullable<string>;

      cleanCached(this: this): void;
      inlineStart(this: this, actor: ig.ActorEntity, step: ig.ActionStepBase): void;
      run(this: this, actor: ig.ActorEntity): void;
    }
    interface ActionConstructor extends ImpactClass<Action> {
      new (
        name: string,
        steps: ig.ActionStepBase.Settings[],
        parallelMove?: Nullable<boolean>,
        repeating?: Nullable<boolean>,
      ): Action;

      getVec3(value: ig.Event.Vec3Expression, actor: ig.ActorEntity, dest: Vec3): Vec3;
      getFace(value: ig.Action.Face, dest: Vec2): void;
    }
    var Action: ActionConstructor;
  }
}
