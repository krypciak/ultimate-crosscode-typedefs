// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    enum WALL_HORIZONTAL_ENDS {
      CONTINUE = 0,
      STOP = 1
    }
    enum WALL_VERTICAL_ENDS {
      CONTINUE = 0,
      STOP = 1,
      CORNER_LEFT = 2,
      CORNER_RIGHT = 3,
    }
  }
  namespace ig.ENTITY {
    namespace WallBase {
      interface Settings extends ig.Entity.Settings {
        size?: Vec2;
        noNavMapBlock?: boolean;
        collType?: keyof typeof ig.COLLTYPE;
        wallZHeight?: number;
        condition?: string;
        skipRender?: boolean;
      }
    }
    namespace WallVertical {
      interface Settings extends ig.ENTITY.WallBase.Settings {
        topEnd: keyof typeof sc.WALL_VERTICAL_ENDS;
        bottomEnd: keyof typeof sc.WALL_VERTICAL_ENDS 
      }
    }
    namespace WallHorizontal {
      interface Settings extends ig.ENTITY.WallBase.Settings {
        topEnd: keyof typeof sc.WALL_HORIZONTAL_ENDS;
        bottomEnd: keyof typeof sc.WALL_HORIZONTAL_ENDS;
      }
    }
  }
}
