// requires impact.base.worker
// requires impact.base.loader

export {};

declare global {
  namespace ig {
    interface Drawable {
      draw(
        this: this,
        targetX: number,
        targetY: number,
        sourceX?: number,
        sourceY?: number,
        width?: number,
        height?: number,
        flipX?: boolean,
        flipY?: boolean,
        offsetY?: number,
        offsetHeight?: number,
        fragment?: unknown,
        fragmentAlpha?: number,
        filtered?: unknown,
      ): void;
    }

    namespace Image {
      type Data = Exclude<CanvasImageSource, SVGImageElement>;
      type Callback = () => void;
    }

    interface Image extends ig.Loadable, Drawable {
      data: HTMLImageElement;
      width: number;
      height: number;
      additionalCallbacks: Image.Callback[];

      addCallback(this: this, callback: Image.Callback): void;
      onload(this: this): void;
      onerror(this: this): void;
      resize(this: this, scale: number): void;
      createPattern(
        this: this,
        x: number,
        y: number,
        width: number,
        height: number,
        optimization: ig.ImagePattern.OPT,
      ): ig.ImagePattern;
    }
    interface ImageConstructor extends ImpactClass<Image> {
      drawCount: number;
      new (pathOrData: string): Image;
    }
    var Image: ImageConstructor;

    enum ImagePattern$OPT {
      NONE,
      REPEAT_X,
      REPEAT_Y,
      REPEAT_X_OR_Y,
      REPEAT_X_AND_Y,
    }
    namespace ImagePattern {
      type OPT = ImagePattern$OPT;
    }
    interface ImagePattern extends ig.Class, Drawable {
      image1: Nullable<HTMLCanvasElement | HTMLImageElement>;
      image2: Nullable<HTMLCanvasElement | HTMLImageElement>;
      pattern: CanvasPattern;
      sourceImage: ig.Image;
      optMode: ig.ImagePattern.OPT;
      sourceX: number;
      sourceY: number;
      width: number;
      height: number;
      totalWidth: number;
      totalHeight: number;
      usePatternDraw: boolean;

      initBuffer(this: this): void;
      clearCached(this: this): void;
    }
    interface ImagePatternConstructor extends ImpactClass<ImagePattern> {
      OPT: typeof ImagePattern$OPT;
      new (
        path: string | ig.Image,
        sourceX: number,
        sourceY: number,
        width: number,
        height: number,
        patternType?: ImagePattern$OPT,
      ): ig.ImagePattern;
    }
    var ImagePattern: ImagePatternConstructor;

    interface SimpleColor extends ig.Class, Drawable {
      color: string;
    }
    interface SimpleColorConstructor extends ImpactClass<SimpleColor> {
      new (color: string): SimpleColor;
    }
    let SimpleColor: SimpleColorConstructor;

    interface TransitionColor extends ig.Class, Drawable {
      colorA: string;
      colorB: string;
      colorBWeight: number;

      setColorBWeight(this: this, weight: number): void;
    }
    interface TransitionColorConstructor extends ImpactClass<TransitionColor> {
      new (colorA: string, colorB?: string, colorBWeight?: number): TransitionColor;
    }
    let TransitionColor: TransitionColorConstructor;

    interface DoubleColor extends ig.Class {
      color1: ig.TransitionColor;
      color2: ig.TransitionColor;
    }
    interface DoubleColorConstructor extends ImpactClass<DoubleColor> {
      new (color1: ig.TransitionColor, color2: ig.TransitionColor): DoubleColor;
    }
    let DoubleColor: DoubleColorConstructor;

    interface ImagePatternSheet extends ig.Cacheable {
      image: ig.Image;
      patternTileWidth: number;
      patternTileHeight: number;
      offX: number;
      offY: number;
      xCount: number;
      yCount: number;
      optimization: ig.ImagePattern.OPT;
      patterns: ig.ImagePattern[];

      getCacheKey(
        this: this,
        path: string,
        optimization: ig.ImagePattern.OPT,
        tileWidth: number,
        tileHeight: number,
        offX: number,
        offY: number,
        xCount: number,
        yCount: number,
      ): string;
      onCacheCleared(this: this): void;
      onImageLoaded(this: this): void;
      getPattern(this: this, index: number): ig.ImagePattern;
    }
    interface ImagePatternSheetConstructor extends ImpactClass<ImagePatternSheet> {
      new (
        path: string,
        optimalization: ig.ImagePattern.OPT,
        patternTileWidth: number,
        patternTileHeight?: number,
        offX?: number,
        offY?: number,
        xCount?: number,
        yCount?: number,
      ): ImagePatternSheet;
    }
    var ImagePatternSheet: ImagePatternSheetConstructor;

    interface ImageAtlas extends ig.Class {
      scale: number;

      getFragment(
        this: this,
        width: number,
        height: number,
        fillCallback: () => void,
      ): ig.ImageAtlasFragment;
      defragment(this: this, clearBuffers?: boolean): void;
      _getFragment(
        this: this,
        width: number,
        height: number,
        fillCallback: () => void,
      ): ig.ImageAtlasFragment;
    }
    interface ImageAtlasConstructor extends ImpactClass<ImageAtlas> {
      new (): ImageAtlas;
    }
    var ImageAtlas: ImageAtlasConstructor;
    var imageAtlas: ig.ImageAtlas;

    interface ImageAtlasFragment extends ig.Class {
      offX: number;
      offY: number;
      width: number;
      height: number;
    }
    interface ImageAtlasFragmentConstructor extends ImpactClass<ImageAtlasFragment> {}
    var ImageAtlasFragment: ImageAtlasFragmentConstructor;

    interface ScreenBuffer extends ig.Class {
      width: number;
      height: number;
      buffer: Nullable<HTMLCanvasElement>;
      scroll: Vec2;
      off: Vec2;
      shift: Vec2 & { full: boolean };
      redrawFull: boolean;
      ownerMap: Nullable<ig.ChunkedMap>;

      clearCached(this: this): void;
      resetBuffer(this: this): void;
      fetchBuffer(this: this): void;
      update(this: this, map: ig.ChunkedMap): void;
      draw(
        this: this,
        x: number,
        y: number,
        offX: number,
        offfY: number,
        width: number,
        height: number,
      ): void;
      setGridTile(this: this, x: number, y: number, tile: number, map: ig.ChunkedMap): void;
      _redrawFull(this: this, map: ig.ChunkedMap): void;
      _redrawShift(this: this, map: ig.ChunkedMap): void;
      _splitDraw(
        this: this,
        map: ig.ChunkedMap,
        x: number,
        y: number,
        scrollX: number,
        scrollY: number,
        absX: number,
        height: number,
      ): void;
    }
    interface ScreenBufferConstructor extends ImpactClass<ScreenBuffer> {
      new (ownerMap: ig.ChunkedMap): ScreenBuffer;
    }
    var ScreenBuffer: ScreenBufferConstructor;
  }
}
