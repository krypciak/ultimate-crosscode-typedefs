// requires impact.base.steps

export {};

declare global {
  namespace ig {
    enum EventRunType {
      INTERRUPTABLE = 0,
      PARALLEL = 1,
      BLOCKING = 2,
    }

    interface EventManager extends ig.Class {
      runningEventCalls: ig.EventCall[];
      blockingEventCall: ig.EventCall;

      callEvent(
        this: this,
        event: ig.Event,
        runType: ig.EventRunType,
        onStart?: Nullable<() => void>,
        onEnd?: Nullable<() => void>,
        input?: unknown,
        callEntity?: ig.Entity,
        data?: unknown,
      ): ig.EventCall;
      getBlockingEventCall(this: this): ig.EventCall;
      update(this: this): void;
      clear(this: this): void;
      _startEventCall(this: this, event: ig.EventCall): void;
      _endEventCall(this: this, event: ig.EventCall): void;
    }
    interface EventManagerConstructor extends ImpactClass<EventManager> {
      new (): EventManager;
    }
    let EventManager: EventManagerConstructor;

    namespace EventCall {
      interface StackEntry {
        event: ig.Event;
        currentStep: Nullable<ig.EventStepBase>;
        stepData: Record<any, any>;
        vars: ReturnType<ig.Event['setupInput']>;
      }
    }
    interface EventCall extends ig.Class {
      runType: ig.EventRunType;
      done: boolean;
      blocked: boolean;
      stack: ig.EventCall.StackEntry[];
      pauseParallel: boolean;

      callInLineEvent(
        this: this,
        event: ig.Event,
        callData: { runCount: number },
      ): ig.EventCall.StackEntry;
      setDone(this: this): void;
      isRunning(this: this): boolean;
      update(this: this): boolean;
    }
    interface EventCallConstructor extends ImpactClass<EventCall> {}
    var EventCall: EventCallConstructor;

    namespace EventStepBase {
      interface Settings {
        type: string;
        [key: string]: any;
      }
    }
    interface EventStepBase extends ig.StepBase {
      _nextStep: Nullable<ig.EventStepBase>;
      branches: Record<string, ig.EventStepBase> | null | undefined;

      start(this: this, data?: unknown, eventCall?: ig.EventCall): void;
      run(this: this, data?: unknown): boolean;
      getNext(this: this, data?: unknown): Nullable<ig.EventStepBase>;
    }
    interface EventStepBaseConstructor extends ImpactClass<EventStepBase> {}
    var EventStepBase: EventStepBaseConstructor;

    namespace EVENT_STEP {}

    namespace Event {
      interface Settings {
        name: string;
        steps: ig.EventStepBase.Settings[];
      }

      interface VarObject {
        indirect?: string;
        varName?: string;
      }

      type VarExpression<T = ig.VarValue> = T | VarObject;

      type NumberExpression = VarExpression<number>;
      type BooleanExpression = VarExpression<boolean>;
      type StringExpression = VarExpression<string>;
    }
    interface Event extends ig.Class {
      name: string;
      rootStep: ig.EventStepBase;
      /* not complete */
      inputSignature: Record<
        string,
        {
          _type:
            | 'StringExpression'
            | 'String'
            | 'BooleanExpression'
            | 'Boolean'
            | 'NumberExpression'
            | 'Number'
            | 'Vec2'
            | 'Vec3'
            | 'VarName'
            | 'Entity'
            | 'LangLabel';
        }
      >;

      /* i give up - krypek */
      setupInput<T extends Record<string, unknown>>(this: this, b: T): Record<keyof T, any>;
    }
    interface EventConstructor extends ImpactClass<Event> {
      new (settings: ig.Event.Settings): Event;

      getVec2(input: Event.VarExpression<Vec2>, dest: Vec2): Vec2;
      getVec3(input: Event.VarExpression<Vec3>, dest: Vec3): Vec3;
      getVarName(varName: string | ig.Event.VarObject): string | null;
      getExpressionValue<T>(expression: ig.Event.VarExpression<T>): T;
    }
    var Event: EventConstructor;
  }
}
