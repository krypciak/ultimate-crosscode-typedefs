// requires impact.base.font
// requires impact.base.game
// requires game.feature.combat.stat-change

export {};

declare global {
  namespace sc {
    enum FONT_COLORS {
      RED,
      GREEN,
      PURPLE,
      GREY,
      ORANGE,
    }
    enum GAMEPAD_ICON_STYLE {
      XBOX = 0,
      PS3 = 1,
    }

    interface FontSystem extends ig.GameAddon {
      gamepadIcons: boolean;
      icons: Record<
        | 'global'
        | 'globalSmall'
        | 'keyboard'
        | 'gamepad'
        | 'items'
        | 'stats'
        | 'stats_large'
        | 'langs',
        ig.Font
      >;
      colors: Record<
        | 'red'
        | 'green'
        | 'purple'
        | 'grey'
        | 'orange_mid'
        | 'orange_tiny'
        | 'purple_mid'
        | 'grey_mid'
        | 'grey_tiny'
        | 'red_mid'
        | 'red_tiny'
        | 'green_mid'
        | 'green_tiny',
        ig.Image
      >;
      font: ig.MultiFont;
      smallFont: ig.MultiFont;
      tinyFont: ig.MultiFont;
      switchIndex: number;
      gamepadIconStyle: sc.GAMEPAD_ICON_STYLE;

      changeKeyCodeIcon(this: this, action: LiteralUnion<ig.Input.KnownAction>, key: ig.KEY): void;
      changeGamepadIcon(this: this, action: LiteralUnion<ig.Input.KnownAction>, icon: string): void;
      setGamepadIconStyle(this: this, style: sc.GAMEPAD_ICON_STYLE): void;
      updateGamepadSwapMap(this: this): void;
      hasIcon(this: this, icon: string): boolean;
      onVarsChanged(this: this): void
    }
    interface FontSystemConstructor extends ImpactClass<FontSystem> {
      new (): FontSystem;
    }
    var FontSystem: FontSystemConstructor;
    var fontsystem: sc.FontSystem;
  }
}
