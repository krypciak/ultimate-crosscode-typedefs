// requires impact.base.game
// requires impact.base.loader

export {};

declare global {
  namespace sc {
    namespace CreditSectionLoadable {
      interface Data {}
    }
    interface CreditSectionLoadable extends ig.Loadable {
      cacheType: 'Credit';
      data: sc.CreditSectionLoadable.Data;
      lowestFloor: number;

      loadInternal(this: this, name: string): void;
      onerror(this: this): void;
      onload(this: this, data: sc.CreditSectionLoadable.Data): void;
    }
    interface CreditSectionLoadableConstructor extends ImpactClass<CreditSectionLoadable> {
      new (pathOrData: string): CreditSectionLoadable;
    }
    var CreditSectionLoadable: CreditSectionLoadableConstructor;

    interface CreditsManager extends ig.GameAddon {
      speed: number;
      reset(this: this): void;
      onTeleport(this: this): void;
      onReset(this: this): void;
    }
    interface CreditsManagerConstructor extends ImpactClass<CreditsManager> {
      new (): CreditsManager;
    }
    var CreditsManager: CreditsManagerConstructor;
    var credits: CreditsManager;
  }
}
