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
    interface AutoControl extends ig.GameAddon {
      get(this: this, type: string): boolean;
      isActive(this: this): boolean;
      setActive(this: this, value: boolean): void;
    }
    interface AutoControlConstructor extends ImpactClass<AutoControl> {
      new (): AutoControl;
    }
    var AutoControl: AutoControlConstructor;
  }
}
