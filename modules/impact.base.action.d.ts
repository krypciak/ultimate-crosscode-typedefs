// requires impact.base.steps

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {}

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
      type Step = any;
    }
    interface Action extends ig.Class {
      name: string;
      rootStep: ig.ActionStepBase;
      labeledSteps: Record<string, ig.ActionStepBase>;
      parallelMove: boolean;
      repeating: boolean;
      hint?: string;
    }
    interface ActionConstructor extends ImpactClass<Action> {
      new (
        name: string,
        steps: ig.Action.Step[],
        parallelMove?: Nullable<boolean>,
        repeating?: Nullable<boolean>,
      ): Action;

      getVec3(value: Vec3, actor: ig.ActorEntity, dest: Vec3): Vec3;
    }
    var Action: ActionConstructor;
  }
}
