// requires impact.base.game

export {};

declare global {
  namespace sc {
    var AUTO_CTRL_AXIS: ['left', 'right'];
    var AUTO_INPUT_DEVICE: {
      MOUSE: ig.INPUT_DEVICES.KEYBOARD_AND_MOUSE;
      GAMEPAD: ig.INPUT_DEVICES.GAMEPAD;
    };
    var AUTO_CTRL_ACTION: [
      'menu',
      'quickmenu',
      'menuConfirm',
      'menuBack',
      'menuDown',
      'menuUp',
      'menuLeft',
      'menuRight',
      'rightPressed',
      'menuHotkeyHelp',
      'menuHotkeyHelp2',
      'menuHotkeyHelp3',
      'menuCircleLeft',
      'menuCircleRight',
      'questCircleLeft',
      'questCircleRight',
      'heatMode',
      'coldMode',
      'shockMode',
      'waveMode',
      'moveDirX',
      'moveDirY',
      'aiming',
      'thrown',
      'charge',
      'melee',
      'dashing',
      'guarding',
    ];
    namespace AutoControl {
      type KnownTypes =
        | 'mouseX'
        | 'mouseY'
        | 'axisLeftX'
        | 'axisLeftY'
        | 'axisRightX'
        | 'axisRightY'
        | 'leftStickDown'
        | 'rightStickDown';
      type Type = LiteralUnion<KnownTypes>;

      interface Mouse {
        current: Vec2;
        start: Vec2;
        target: Vec2;
        timer: number;
        duration: number;
      }
      type Axis = Record<(typeof sc.AUTO_CTRL_AXIS)[number], Vec2 & { timer: number }>;

      type ActionKey = (typeof sc.AUTO_CTRL_ACTION)[number];

      interface Action {
        target: undefined;
        value: Nullable<number>;
        hold: boolean;
      }
    }
    interface AutoControl extends ig.GameAddon {
      mouse: sc.AutoControl.Mouse;
      axis: sc.AutoControl.Axis;
      actions: Record<sc.AutoControl.ActionKey, sc.AutoControl.Action>;
      preUpdateOrder: number;
      active?: boolean;

      get(this: this, type: sc.AutoControl.Type): number;
      isActive(this: this): boolean | undefined;
      setActive(this: this, value: boolean): void;
      onPreUpdate(this: this): void;
      setMouse(this: this, x: number, y: number, transitionTime?: number): void;
      setStick(
        this: this,
        axis: keyof sc.AutoControl.Axis,
        x: number,
        y: number,
        timer: number,
      ): void;
      setAction(this: this, type: sc.AutoControl.ActionKey, target: number, hold?: boolean): void;
      clearAction(this: this, type: sc.AutoControl.ActionKey): void;
    }
    interface AutoControlConstructor extends ImpactClass<AutoControl> {
      new (): AutoControl;
    }
    var AutoControl: AutoControlConstructor;
  }
}
