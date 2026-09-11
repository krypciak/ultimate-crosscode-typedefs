// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires game.feature.gui.base.numbers
// requires game.feature.menu.gui.menu-misc

export {};

declare global {
  namespace sc {
    enum MAP_STAMPS {
      DEFAULT,
      CHEST,
      ENEMY,
      GREEN,
      SECRET,
      QUEST,
      UNKNOWN,
      XXX,
      ARROW_RIGHT,
      ARROW_LEFT,
      ARROW_UP,
      ARROW_DOWN,
      ARROW_DOWN_RIGHT,
      ARROW_DOWN_LEFT,
      ARROW_UP_RIGHT,
      ARROW_UP_LEFT,
    }
    interface StampGui extends ig.FocusGui {
      gfx: ig.Image;
      key: sc.MAP_STAMPS;
      icon: Vec2;
      floor: number;
      floorGui: sc.MapFloor;
      name: string;
      index: number;
      activated: boolean;

      setKey(this: this, key: sc.MAP_STAMPS): void;
      getDistanceToCursor(this: this): number;
    }
    interface StampGuiConstructor extends ImpactClass<StampGui> {
      new (
        key: sc.MAP_STAMPS,
        x: number,
        y: number,
        floor: number,
        index: number,
        floorGui: sc.MapFloor,
      ): StampGui;
    }
    var StampGui: StampGuiConstructor;

    interface StampEditMenu extends ig.BoxGui {
      ninepatch: ig.NinePatch;
      delete: sc.ButtonGui;
      anchor: sc.StampGui;
      stamps: sc.StampMenuButton[];
      buttongroup: sc.ButtonGroup;
      _active: boolean;

      show(this: this, stampGui: sc.StampGui): void;
      hide(this: this, popBackCallback?: boolean): void;
      createStamps(this: this): void;
      limitPosition(this: this, x: number, y: number): void;
      unPressAllButtons(this: this): void;
      pressCurrentStamp(this: this, key: keyof typeof sc.MAP_STAMPS): void;
      onBackPressed(this: this): void;
    }
    interface StampEditMenuConstructor extends ImpactClass<StampEditMenu> {
      new (): StampEditMenu;
    }
    var StampEditMenu: StampEditMenuConstructor;

    interface StampMenuButton extends sc.ButtonGui {
      icons: ig.Image;
      key: string;
      icon: Vec2;
      iconGui: ig.ImageGui;
    }
    interface StampMenuButtonConstructor extends ImpactClass<StampMenuButton> {
      new (key: string): StampMenuButton;
    }
    var StampMenuButton: StampMenuButtonConstructor;
  }
}
