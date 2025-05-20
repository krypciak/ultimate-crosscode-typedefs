// requires impact.base.action
// requires impact.base.event
// requires game.feature.credits.credit-loadable

export {};

declare global {
  namespace ig.EVENT_STEP.WAIT_UNTIL_CREDIT_TRIGGER {
    interface CreditsTriggerSelect {
      trigger: string;
    }
  }
}
