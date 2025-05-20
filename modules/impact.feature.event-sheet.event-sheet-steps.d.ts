// requires impact.base.action
// requires impact.base.event

export {};

declare global {
  namespace ig.EVENT_STEP.CALL_EVENT_FROM_SHEET {
    interface Input {
      cornerPos: Vec2;
      targetPos: Vec2;
      wait: number;
      postCondition: string;
      variable: string;
    }
    interface EventSheetCall {
      path: string;
      name: string;
      input: Input;
    }
  }
}
