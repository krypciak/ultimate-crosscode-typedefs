// requires impact.feature.gui.gui

export {};

declare global {
  namespace sc {
    enum AR_BOX_MODE {
      NO_LINE = 0,
      LINE_FILL = 1,
      LINE_EMPTY = 2,
    }
    interface ArColor {
      rgb: string;
      yOff: number;
    }
    interface AR_COLOR {
      GREEN: sc.ArColor;
      RED: sc.ArColor;
    }
    var AR_COLOR: AR_COLOR;
  }
  namespace ig {
    namespace GUI {
      interface ARBox
        extends ig.GuiElementBase, ig.Entity.Attachable, ig.ActorEntity.ActionAttachedListener {
        gfx: ig.Image;
        target: ig.Entity;
        attachEntity: Nullable<ig.Entity>;
        text: sc.TextLike;
        timer: number;
        maxTime: number;
        prevMove: Vec2;
        delta: Vec2;
        arrowX: number;
        mode: sc.AR_BOX_MODE | false;
        color: sc.AR_COLOR;
        finished: boolean;
        hideOutsideOfScreen: boolean;
        tracker: Nullable<sc.EnemyTracker>;
        varName: Nullable<string>;
        varMaxFill: Nullable<number>;
        varRefEntity: Nullable<ig.Entity>;

        setVarFill(
          this: this,
          varName: string,
          varMaxFill: number,
          varRefEntity?: Nullable<ig.Entity>,
        ): void;
        setTracker(this: this, trackerKey: string): void;
        remove(this: this): void;
        isFinished(this: this): boolean;
        _getCurrentNumber(this: this): number;
        _updatePos(this: this, interpolate: boolean): void;
        setAttachedEntity(this: this, entity: ig.Entity): void;
      }
      interface ARBoxConstructor extends ImpactClass<ARBox> {
        new (
          target: ig.Entity,
          text: sc.TextLike,
          time?: number,
          mode?: sc.AR_BOX_MODE,
          color?: sc.ArColor,
        ): ARBox;
      }
      var ARBox: ARBoxConstructor;
    }
  }
}
