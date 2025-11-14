// requires impact.base.steps

export {};

declare global {
  namespace ig {
    namespace ACTION_STEP {}

    namespace ActionStepBase {
      interface Settings {
        type: keyof typeof ig.ACTION_STEP;
        [key: string]: any;
      }
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

    interface Action extends ig.Class {
      name: string;
      rootStep: ig.ActionStepBase;
      labeledSteps: Record<string, ig.ActionStepBase>;
      parallelMove: boolean;
      repeating: boolean;
      hint?: Nullable<string>;
      
      cleanCached(this: this): void
      inlineStart(this: this, actor: ig.ActorEntity, step: ig.ActionStepBase): void
      run(this: this, actor: ig.ActorEntity): void
    }
    interface ActionConstructor extends ImpactClass<Action> {
      new (
        name: string,
        steps: ig.ActionStepBase.Settings[],
        parallelMove?: Nullable<boolean>,
        repeating?: Nullable<boolean>,
      ): Action;

      getVec3(value: Vec3, actor: ig.ActorEntity, dest: Vec3): Vec3;
    }
    var Action: ActionConstructor;
  }
}
