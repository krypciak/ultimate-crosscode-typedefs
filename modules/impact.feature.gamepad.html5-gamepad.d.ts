// requires impact.feature.gamepad.gamepad

export {};

declare global {
  namespace ig {
    interface Html5GamepadHandler extends ig.Class {
      update(this: this, gamepads: Record<string, ig.Gamepad>): void;
    }
    interface Html5GamepadHandlerConstructor extends ImpactClass<Html5GamepadHandler> {
      new (): Html5GamepadHandler;
    }
    var Html5GamepadHandler: Html5GamepadHandlerConstructor;
  }
}
