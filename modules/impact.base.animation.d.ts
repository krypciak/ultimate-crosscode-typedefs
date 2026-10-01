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
        ignoreShadow?: boolean,
      ): void;
    }
    interface AnimationConstructor extends ImpactClass<Animation> {
      new (sheet: ig.TileSheet, settings: ig.Animation.Settings): Animation;
    }
    var Animation: AnimationConstructor;

    namespace MultiEntityAnimationPart {
      interface Settings {
        group: string;
        collType?: keyof typeof ig.COLLTYPE;
        heightShape?: keyof typeof ig.COLL_HEIGHT_SHAPE;
        size: Vec3;
        pos: Vec3;
        padding?: Vec2;
        persistAnim?: boolean;
        anims: ig.AnimationSheet.Settings;
      }
    }
    interface MultiEntityAnimationPart extends ig.Class {
      name: string;
      group: string;
      persistAnim?: boolean;
      collType: number;
      heightShape: number;
      padding: Vec2;
      size: Vec3;
      pos: Vec3;
      animSheet: ig.AnimationSheet;
      synced: boolean;

      createSubEntity(
        this: this,
        owner: ig.Entity,
        baseSize: Vec3,
      ): ig.AnimationPartEntity | sc.CombatantAnimPartEntity;
    }
    interface MultiEntityAnimationPartConstructor extends ImpactClass<MultiEntityAnimationPart> {
      new (
        name: string,
        namedSheets: Record<string, ig.TileSheet>,
        partSettings: ig.MultiEntityAnimationPart.Settings,
      ): MultiEntityAnimationPart;

      initSubEntities(
        entity: ig.Entity,
        parts: Record<string, ig.MultiEntityAnimationPart>,
        baseSize: Vec3,
      ): void;
    }
    var MultiEntityAnimationPart: MultiEntityAnimationPartConstructor;

    enum MULTI_ANIM_FLIP {
      NONE = 0,
      LEFT = 1,
      RIGHT = 2,
    }

    namespace MultiEntityAnimation {
      interface Settings {
        time: number;
        frameCount: number;
        repeat?: boolean;
        anchor?: Vec3;
        flipDir?: keyof typeof ig.MULTI_ANIM_FLIP;
        partAnims: Record<string, PartAnimSettings>;
      }
      interface PartAnimSettings {
        anim: string;
        posFrames: number;
        reset?: boolean;
        collType?: keyof typeof ig.COLLTYPE;
      }
      interface PartAnim {
        anim: string;
        posFrames: number;
        reset?: boolean;
        collType: Nullable<ig.COLLTYPE>;
      }
    }
    interface MultiEntityAnimation extends ig.Class {
      parts: Record<string, ig.MultiEntityAnimationPart>;
      baseSize: Vec3;
      anchor: Nullable<Vec3>;
      frameTime: number;
      frameCount: number;
      stop: boolean;
      flipDir: boolean;
      partAnims: Record<string, ig.MultiEntityAnimation.PartAnim>;

      getAnchorOffset(this: this, faceX: number, faceY: number): Vec3;
      getDuration(this: this): number;
      getFrameCount(this: this): number;
      onAnimationStart(this: this, entity: ig.AnimatedEntity): void;
      onUpdate(
        this: this,
        entity: ig.AnimatedEntity,
        animState: ig.AnimationState,
        speedFactor: number,
      ): void;
      updateSprite(
        this: this,
        entity: ig.AnimatedEntity,
        cubeSprite: ig.CubeSprite,
        animState: ig.AnimationState,
        ignoreShadow?: boolean,
      ): void;
    }
    interface MultiEntityAnimationConstructor extends ImpactClass<MultiEntityAnimation> {
      new (
        baseSize: Vec3,
        parts: Record<string, ig.MultiEntityAnimationPart>,
        settings: ig.MultiEntityAnimation.Settings,
      ): MultiEntityAnimation;
    }
    var MultiEntityAnimation: MultiEntityAnimationConstructor;

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
      setAnimation(this: this, entity: ig.AnimatedEntity, animations: ig.AnimationUnion[]): void;
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

    type AnimationUnion = ig.Animation | ig.MultiEntityAnimation;

    interface SingleDirAnimationSet extends ig.Class {
      animations: ig.AnimationUnion[];

      getAnimations(this: this): ig.AnimationUnion[];
      getAnchorOffset(this: this, faceX: number, faceY: number): Nullable<Vec3>;
      getDuration(this: this): number;
      merge(this: this, animations: ig.AnimationUnion[]): void;
    }
    interface SingleDirAnimationSetConstructor extends ImpactClass<SingleDirAnimationSet> {
      new (animation: ig.AnimationUnion): SingleDirAnimationSet;
    }
    var SingleDirAnimationSet: SingleDirAnimationSetConstructor;

    namespace MultiDirAnimationSet {
      interface Settings {
        DOCTYPE: 'MULTI_DIR_ANIMATION';
        name: string;
        shapeType: keyof typeof ig.ANIM_SHAPE_TYPE;
        pivot: Vec2;
        dirs: number | string;
        anchorOffsetX: number;
        anchorOffsetY: number;
        anchorOffsetZ: number;
        flipX: number[];
        tileOffsets: number[];
        time: number;
        faceRotate?: boolean;
        frames: number[];
        sheet: ig.TileSheet.Data | ig.TileSheet;
      }
    }
    interface MultiDirAnimationSet extends ig.Class {
      numDirs: number;
      animations: ig.Animation[][];
      anchorOffsetX: number;
      anchorOffsetY: number;
      anchorOffsetZ: number;

      setAnimations(this: this, tileSheet: ig.TileSheet, settings: unknown): void;
      addAnimation(this: this, animation: ig.Animation): void;
      merge(this: this, animations: ig.Animation[]): void;
      getAnchorOffset(this: this, faceX: number, faceY: number): Nullable<Vec3>;
      getAnimations(this: this, entity: ig.AnimatedEntity): ig.Animation[];
      getDuration(this: this): number;
    }
    interface MultiDirAnimationSetConstructor extends ImpactClass<MultiDirAnimationSet> {
      new (settings: ig.MultiDirAnimationSet.Settings): MultiDirAnimationSet;
    }
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
      namedSheets: Record<string, ig.TileSheet>;
      createdSheets: ig.TileSheet[];
      anims: Record<string, ig.MultiDirAnimationSet | ig.SingleDirAnimationSet>;
      sharedAnimData: Nullable<{
        baseSize: Vec3;
        parts: Record<string, ig.MultiEntityAnimationPart>;
      }>;

      replaceAnimationSet(
        this: this,
        name: string,
        anim: ig.MultiDirAnimationSet | ig.SingleDirAnimationSet,
      ): void;
      removeAnimSet(this: this, name: string): void;
      hasAnimation(this: this, name: string): boolean;
      addAnimationSet(
        this: this,
        key: string,
        anim: ig.MultiDirAnimationSet | ig.SingleDirAnimationSet,
      ): void;
      clearCached(this: this): void;
      onload(this: this, b: unknown): void;
      _getSheet(this: this, name: string | ig.TileSheet): ig.TileSheet;
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
