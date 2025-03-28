// requires impact.base.image

export {};

declare global {
  namespace ig {
    interface CubeSprite extends ig.Class {
      pos: Vec2;
      size: Vec3;
      shadow: Vec3 & { diameter: number; scaleY: number };
      gfxOffset: Vec2;
      gfxCut: { top: number; bottom: number; left: number; right: number };
      tmpOffset: Vec3;
      wallY: number;
      image: Nullable<ig.Drawable | ig.DoubleColor>;
      src: Vec2;
      alpha: number;
      flip: { x: boolean; y: boolean };
      scale: Vec2;
      rotate: number;
      pivot: Vec2;
      overlay: { color: Nullable<string>; alpha: number };
      lighterOverlay: { color: Nullable<string>; alpha: number };
      aboveZ: number;
      mergeTop: boolean;
      renderData: Record<string, unknown>;
      gui: boolean;
      renderMode: Nullable<GlobalCompositeOperation>;
      alwaysRender: boolean;
      noOverlapSolving: boolean;

      setPos(this: this, x: number, y: number, z: number): void;
      setGfxOffset(this: this, x: number, y: number): void;
      setGfxCut(this: this, top: number, bottom: number, left: number, right: number): void;
      setShadow(
        this: this,
        x: number,
        y: number,
        z: number,
        diameter: number,
        type?: ig.COLL_SHADOW_TYPE,
        scaleY?: number,
      ): void;
      setImageSrc(
        this: this,
        image: ig.Drawable | ig.DoubleColor,
        offsetX?: Nullable<number>,
        offsetY?: Nullable<number>,
      ): void;
      setOverlayColor(this: this, color: string, alpha: number): void;
      setLighterOverlayColor(this: this, color: string, alpha: number): void;
      setInvisible(this: this): void;
      setEntityDefault(
        this: this,
        entity: ig.Entity,
        tileWidth: number,
        tileHeight: number,
        shapeType: ig.ANIM_SHAPE_TYPE | keyof typeof ig.ANIM_SHAPE_TYPE,
        wallY: number,
        offset: Vec3 | null,
        image: ig.Image,
        srcX: number,
        srcY: number,
      ): void;
    }
    interface CubeSpriteConstructor extends ImpactClass<CubeSprite> {
      new (gui: boolean): CubeSprite;
    }
    var CubeSprite: CubeSpriteConstructor;
  }
}
