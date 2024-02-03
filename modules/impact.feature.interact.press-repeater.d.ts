export {};

declare global {
  namespace ig {
    interface PressRepeater extends ig.Class {
      currentPressed: string;
      lastPressed: string;
      timer: number;
      firstDelay: number;
      repeatDelay: number;

      setDown(this: this, key: string): void;
      getPressed(this: this): string | null;
    }
    interface PressRepeaterConstructor extends ImpactClass<PressRepeater> {
      new (firstDelay?: number, repeatDelay?: number): PressRepeater;
    }
    var PressRepeater: PressRepeaterConstructor;
  }
}
