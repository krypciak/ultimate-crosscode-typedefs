// requires impact.base.image
// requires impact.base.sprite

export {};

declare global {
  namespace ig {
    namespace Renderer2d {
      interface SpriteDrawSlot extends ig.Class {
        cubeSprite: ig.CubeSprite;
        ground: boolean;
        yIndex: number;
        zMin: number;
        zMax: number;
        spriteIdx: number;
        drawShadow: boolean;

        update(this: this, drawShadow: boolean): void;
        draw(this: this, zMin: number, zMax: number): void;
      }
      interface SpriteDrawSlotConstructor extends ImpactClass<SpriteDrawSlot> {
        new (cubeSprite: ig.CubeSprite, ground: boolean, spriteIdx: number): SpriteDrawSlot;
      }
    }
    interface Renderer2d extends ig.Class {
      spriteSlots: ig.Renderer2d.SpriteDrawSlot[];
      guiSpriteSlots: ig.Renderer2d.SpriteDrawSlot[];

      prepareDraw(this: this, shownEntities: ig.Entity[], forceDraw?: boolean): void
      drawPostLayerSprites(this: this): void;
      mapCleared(this: this): void;
    }
    interface Renderer2dConstructor extends ImpactClass<Renderer2d> {
      Renderer2d: ig.Renderer2d.SpriteDrawSlotConstructor;
      new (): Renderer2d;
    }
    var Renderer2d: Renderer2dConstructor;
  }
}
