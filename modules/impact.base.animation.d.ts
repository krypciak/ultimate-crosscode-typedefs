// requires impact.base.loader
// requires impact.base.timer
// requires impact.base.image
// requires impact.base.sprite-fx

export {};

declare global {
  namespace ig {
    namespace TileSheet {
      interface Data {
        imageSrc: string;
        width: number;
        height: number;
        offX?: Nullable<number>;
        offY?: Nullable<number>;
        xCount?: Nullable<number>;
      }
    }
    interface TileSheet extends ig.Class {
      width: number;
      height: number;
      offX: number;
      offY: number;
      xCount: number;
      image: ig.Image;

      generateHit(this: this): void;
      getTileSrc(this: this, dest: Vec2, tileId: number): Vec2;
      clearCached(this: this): void;
    }
    interface TileSheetConstructor extends ImpactClass<TileSheet> {
      new (
        imageSrc: string,
        width: number,
        height: number,
        offX?: Nullable<number>,
        offY?: Nullable<number>,
        xCount?: Nullable<number>,
      ): TileSheet;

      createFromJson(json: ig.TileSheet.Data): ig.TileSheet;
    }
    var TileSheet: TileSheetConstructor;

    namespace Animation {
      interface Settings {
        sheet: ig.TileSheet | string;
        shapeType?: keyof typeof ig.ANIM_SHAPE_TYPE;
        pivot?: Vec2;
        flipX?: boolean;
        flipY?: boolean;
        offset?: Vec3;
        angle?: number;
        size?: Vec3;
        gfxOffset?: Vec2;
        centerPivot?: boolean;
        guiSprites?: boolean;
        wallY?: number;
        aboveZ?: number;
        renderMode?: string;
        globalTiming?: boolean;
        faceRotate?: boolean;
        time?: number;
        frames: number[];
        tileOffset?: number;
        fx?: ig.SPRITE_FX.SLIDE & { type: keyof typeof ig.SPRITE_FX }[];
        frameSpriteOffset?: number[];
        framesGfxOffset?: number[];
        framesAlpha?: number[];
        framesAngle?: number[];
        framesFlipX?: number[];
        repeat?: boolean;
      }
    }
    interface Animation extends ig.Class {
      sheet: ig.TileSheet;
      shapeType: ig.ANIM_SHAPE_TYPE;
      frameTime: number;
      stop: boolean;
      flip: Vec2;
      pivot: Vec2;
      centerPivot: boolean;
      wallY: number;
      aboveZ?: number;
      sequence: number[];
      sequenceSpriteOff?: number[];
      framesGfxOffset?: number[];
      framesAlpha?: number[];
      framesAngle?: number[];
      framesFlipX?: number[];
      angle: number;
      offset?: Vec3;
      gfxOffset?: Vec2;
      size?: Vec3;
      renderMode?: string;
      guiSprites: boolean;
      globalTiming: boolean;
      fx?: ig.SpriteEffectBase[];
      onAnimationStart?: (entity: ig.AnimatedEntity) => void;
      onUpdate?: (entity: ig.AnimatedEntity, state: ig.AnimationState, speedFactor: number) => void;

      getDuration(this: this): number;
      getFrameCount(this: this): number;
      updateSprite(
        this: this,
        entity: ig.AnimatedEntity,
        cubeSprite: ig.CubeSprite,
        animState: ig.AnimationState,
        ignoreShadow: boolean,
      ): void;
    }
    interface AnimationConstructor extends ImpactClass<Animation> {
      new (sheet: ig.TileSheet, settings: ig.Animation.Settings): Animation;
    }

    var Animation: AnimationConstructor;
    interface AnimationState extends ig.Class {
      animations: ig.Animation[];
      followUp?: string;
      timer: number;
      loopCount: number;
      alpha: number;
      angle: number;
      scaleX: number;
      scaleY: number;
      flipX: boolean;
      colorOverlays: ig.ColorOverlay[];
      animMods: ig.AnimModification[];

      reset(this: this): void;
      shuffleTime(this: this): void;
      hasAnimations(this: this): boolean;
      setAnimation(this: this, entity: ig.AnimatedEntity, animations: ig.Animation[]): void;
      addColorOverlay(this: this, colorOverlay: ig.ColorOverlay): void;
      getFrame(this: this): number;
      isStatic(this: this): boolean;
      isRepeat(this: this): boolean;
      hasStopped(this: this): boolean;
      rewind(this: this): ig.AnimationState;
      update(this: this, entity: ig.AnimatedEntity, speedFactor: number): void;
      updateSprite(this: this, entity: ig.Entity): void;
      updateSpriteColor(this: this, entity: ig.Entity): void;
    }
    interface AnimationStateConstructor extends ImpactClass<AnimationState> {
      new (): AnimationState;
    }
    var AnimationState: AnimationStateConstructor;

    interface AnimModification extends ig.Class {
      entity: ig.AnimatedEntity;
      name: string;
      spriteIdx: number;
      tileOffset: number;

      remove(this: this): void;
      onActionEndDetach(this: this): void;
    }
    interface AnimModificationConstructor extends ImpactClass<AnimModification> {
      new (entity: ig.AnimatedEntity, spriteIdx: number, name?: string): AnimModification;
    }
    var AnimModification: AnimModificationConstructor;

    interface ColorOverlay extends ig.Class {
      color?: ig.RGBColor;
      alpha: number;
      spriteFilter?: number[];
      lighter?: boolean;

      clear(this: this): void;
    }
    interface ColorOverlayConstructor extends ImpactClass<ColorOverlay> {
      new (
        color: ig.RGBColorData | string,
        alpha: number,
        spriteFilter?: number[],
        lighter?: boolean,
      ): ColorOverlay;
    }
    var ColorOverlay: ColorOverlayConstructor;

    interface SingleDirAnimationSet extends ig.Class {
      animations: ig.Animation[];
    }
    interface SingleDirAnimationSetConstructor extends ImpactClass<SingleDirAnimationSet> {}
    var SingleDirAnimationSet: SingleDirAnimationSetConstructor;

    interface MultiDirAnimationSet extends ig.Class {
      animations: ig.Animation.Settings[];
    }
    interface MultiDirAnimationSetConstructor extends ImpactClass<MultiDirAnimationSet> {}
    var MultiDirAnimationSet: MultiDirAnimationSetConstructor;

    function getRoundedFaceDir(faceX: number, faceY: number, numDirs: number, dest: Vec2): Vec2;

    namespace AnimationSheet {
      interface Sheet {
        src: string;
        width: number;
        height: number;
        offY: number;
        offX: number;
      }
      type Sub = Omit<ig.Animation.Settings, 'sheet'> & {
        name: string;
        sheet?: ig.AnimationSheet.Sheet;
      };
      type Settings = Omit<ig.Animation.Settings, 'sheet' | 'frames'> & {
        sheet?: ig.AnimationSheet.Sheet;
        frames?: number[];
        SUB: ig.AnimationSheet.Sub[];
      };
    }
    interface AnimationSheet extends ig.JsonLoadable {
      anims: Array<ig.MultiDirAnimationSet | ig.SingleDirAnimationSet>;
    }
    interface AnimationSheetConstructor extends ImpactClass<AnimationSheet> {
      new (pathOrData: string | ig.AnimationSheet.Settings): ig.AnimationSheet;
    }
    var AnimationSheet: AnimationSheetConstructor;

    enum ANIM_SHAPE_TYPE {
      NO_EXPAND = 1,
      Y_EXPAND = 2,
      Z_EXPAND = 3,
      YZ_EXPAND = 4,
      Y_FLAT = 5,
      Z_FLAT = 6,
    }
  }
}
