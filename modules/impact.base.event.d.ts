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
      blockingEventCall: Nullable<ig.EventCall>;
      blockedEventCallQueue: ig.EventCall[];

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
      getBlockingEventCallHint(this: this, hint: string): Nullable<boolean>;
      isInterruptible(this: this): boolean;
      update(this: this): void;
      clearQueue(this: this): void;
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
        vars: ig.Event.Vars;
      }

      interface EventAttached {
        onEventEndDetach(eventCall: ig.EventCall): void;
      }
    }
    interface EventCall extends ig.Class {
      runType: ig.EventRunType;
      done: boolean;
      blocked: boolean;
      stack: ig.EventCall.StackEntry[];
      eventAttached: ig.EventCall.EventAttached[];
      pauseParallel: boolean;
      onStart?: Nullable<() => void>;
      onEnd?: Nullable<() => void>;
      callEntity?: ig.Entity;
      data?: unknown;

      hasHint(this: this, hint: string): boolean;
      callInlineEvent(
        this: this,
        event: ig.Event,
        callData: { runCount: number },
      ): ig.EventCall.StackEntry;
      addEventAttached(this: this, eventAttached: ig.EventCall.EventAttached): void;
      setDone(this: this): void;
      isBlocked(this: this): boolean;
      isRunning(this: this): boolean;
      performStep(this: this, stackEntry: ig.EventCall.StackEntry): ig.EventCall.StackEntry;
      update(this: this): boolean;
    }
    interface EventCallConstructor extends ImpactClass<EventCall> {
      new (
        event: ig.Event,
        input: unknown | undefined,
        runType: ig.EventRunType,
        onStart?: Nullable<() => void>,
        onEnd?: Nullable<() => void>,
        callEntity?: ig.Entity,
        data?: unknown,
      ): ig.EventCall;
    }
    var EventCall: EventCallConstructor;

    namespace EventStepBase {
      interface Settings {
        type: keyof typeof ig.EVENT_STEP;
        [key: string]: any;
      }
    }
    interface EventStepBase extends ig.StepBase {
      _nextStep: Nullable<ig.EventStepBase>;
      branches: Record<string, ig.EventStepBase> | null | undefined;

      start(this: this, data?: unknown, eventCall?: ig.EventCall): void;
      run(this: this, data?: unknown): boolean;
      getNext(this: this, data?: unknown): Nullable<ig.EventStepBase>;
      getInlineEvent?(this: this): ig.Event;
      getInlineEventInput?(this: this): unknown;
    }
    interface EventStepBaseConstructor extends ImpactClass<EventStepBase> {}
    var EventStepBase: EventStepBaseConstructor;

    namespace EVENT_STEP {}

    namespace Event {
      interface Settings {
        name?: string;
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
      type Vec2Expression = VarExpression<Vec2>;
      type Vec3Expression = VarExpression<Vec3>;

      type NumberVary = number | { base: number; vary?: number };

      type GetEntity =
        | ig.Entity
        | {
            player?: boolean;
            self?: boolean;
            name?: string;
            varName?: string;
            party?: string;
          };

      type Vars = Record<string, any>;
    }
    interface Event extends ig.Class {
      name: string;
      rootStep: ig.EventStepBase;
      labeledSteps: Record<string, ig.EventStepBase>;
      hints: string[];
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

      addHint(this: this, hint: string): void;
      hasHint(this: this, hint: string): void;
      clearCached(this: this): void;
      /* i give up - krypek */
      setupInput<T extends Record<string, unknown>>(this: this, b: T): ig.Event.Vars;
    }
    interface EventConstructor extends ImpactClass<Event> {
      new (settings: ig.Event.Settings): Event;

      getNumberVary(numberVary: ig.Event.NumberVary): number;
      getEntity(
        entity: Nullable<ig.Event.GetEntity>,
        eventCall?: ig.EventCall,
      ): Nullable<ig.Entity>;
      getVec2(input: Event.VarExpression<Vec2>, dest: Vec2): Vec2;
      getVec3(input: Event.VarExpression<Vec3>, dest: Vec3): Vec3;
      getVarName(varName: string | ig.Event.VarObject): string | null;
      getExpressionValue<T>(expression: ig.Event.VarExpression<T>): T;
    }
    var Event: EventConstructor;
  }
}
