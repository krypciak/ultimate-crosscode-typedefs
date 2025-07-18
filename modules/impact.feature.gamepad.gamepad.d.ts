// requires impact.base.game
// requires impact.base.vars

export {};

declare global {
  namespace ig {
    enum BUTTONS {
      /** XBox A */
      FACE0 = 0,
      /** XBox B */
      FACE1 = 1,
      /** XBox X */
      FACE2 = 2,
      /** XBox Y */
      FACE3 = 3,
      LEFT_SHOULDER = 4,
      RIGHT_SHOULDER = 5,
      LEFT_TRIGGER = 6,
      RIGHT_TRIGGER = 7,
      SELECT = 8,
      START = 9,
      LEFT_STICK = 10,
      RIGHT_STICK = 11,
      DPAD_UP = 12,
      DPAD_DOWN = 13,
      DPAD_LEFT = 14,
      DPAD_RIGHT = 15,
    }
    enum AXES {
      LEFT_STICK_X = 0,
      LEFT_STICK_Y = 1,
      RIGHT_STICK_X = 2,
      RIGHT_STICK_Y = 3,
    }
    interface GamepadManager extends ig.GameAddon {
      gamepads: Record<string, ig.Gamepad>;
      activeGamepads: ig.Gamepad[];

      onPreUpdate(this: this): void;
      onDeferredUpdate(this: this): void;

      isButtonPressed(this: this, button: ig.BUTTONS): boolean;
      isButtonReleased(this: this, button: ig.BUTTONS): boolean;
      isButtonDown(this: this, button: ig.BUTTONS): boolean;
      getButtonValue(this: this, button: ig.BUTTONS): number;

      getAxesValue(this: this, axis: ig.AXES, clipDeadZone?: boolean): number;
      isAxesDown(this: this, axis: ig.AXES): boolean;
      isLeftStickDown(this: this): boolean;
      isRightStickDown(this: this): boolean;

      isSupported(this: this): boolean;
    }
    interface GamepadManagerConstructor extends ImpactClass<GamepadManager> {
      new (): GamepadManager;
    }

    let gamepad: GamepadManager;
    let GamepadManager: GamepadManagerConstructor;

    interface Gamepad extends ig.Class {
      buttonDeadzones: number[];
      axesDeadzones: number[];
      buttonStates: number[];
      axesStates: number[];
      pressedStates: boolean[];
      releasedStates: boolean[];

      updateButton(this: this, buttonId: ig.BUTTONS, value: number): void;
      updateAxes(this: this, axesId: ig.AXES, value: number): void;
    }
    interface GamepadConstructor extends ImpactClass<Gamepad> {
      new (): Gamepad;
    }
    var Gamepad: GamepadConstructor;
  }
}
