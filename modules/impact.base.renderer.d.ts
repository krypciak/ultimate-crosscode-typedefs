// requires impact.base.image
// requires impact.base.sprite

export {};

/** RENAME: drawMaps */
declare function b(game: ig.Game, levelName: string): void;

/** RENAME: drawSpriteShadows */
declare function a(spriteSlot: ig.Renderer2d.SpriteDrawSlot, minZ: number, maxZ: number): void;

/** RENAME: createOrDeleteSpriteSlot */
declare function d(
  sprite: ig.CubeSprite,
  create: boolean,
  slotName: string,
  ground: boolean,
  spriteIdx: number,
): void;

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

      prepareDraw(this: this, shownEntities: ig.Entity[], forceDraw?: boolean): void;
      drawLayers(this: this, force?: boolean, noClear?: boolean): void;
      drawLight(this: this): void;
      drawPostLayerSprites(this: this): void;
      drawEntities(this: this, level: number): void;
      drawAnimation(
        this: this,
        anim: ig.Animation,
        x: number,
        y: number,
        time: number,
        alpha: number,
        rotate: number,
        scaleX: number,
        scaleY: number,
      ): void;
      mapCleared(this: this): void;
    }
    interface Renderer2dConstructor extends ImpactClass<Renderer2d> {
      SpriteDrawSlot: ig.Renderer2d.SpriteDrawSlotConstructor;
      new (): Renderer2d;
    }
    var Renderer2d: Renderer2dConstructor;
  }
}
