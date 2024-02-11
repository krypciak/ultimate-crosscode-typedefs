// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.base.image

export {};

declare global {
  namespace ig {
    interface Parallax extends ig.JsonLoadable {
      cacheType: 'Parallax';
      gfx: Record<string, ig.Image>;
      gui: Record<string, unknown>;
      timeLine: unknown;
      cancelSkip: boolean;
      skipBlock: boolean;

      onCacheCleared(this: this): void;
      onload(this: this, data: unknown): void;
      _convertEntries(this: this, entries: unknown[], points?: unknown): void;
      _convertSequence(this: this, sequence: unknown[]): void;
      _copyStateValues(this: this, state: unknown, entry: unknown): void;
    }
    interface ParallaxConstructor extends ImpactClass<Parallax> {
      new (item: string): Parallax;
    }
    var Parallax: ParallaxConstructor;

    interface ParallaxGui extends ig.SequenceGui {
      parallax: unknown;
      keepOnEnd: boolean;

      clearCached(this: this): void;
      onLoadableComplete(this: this): void;
      start(this: this, keepOnEnd?: boolean): void;
    }
    interface ParallaxGuiConstructor extends ImpactClass<ParallaxGui> {
      new (
        settings: { parallax: string },
        callback: (msg: ig.SEQUENCE_MSG, labelReached?: String) => void,
      ): ParallaxGui;
    }
    var ParallaxGui: ParallaxGuiConstructor;

    namespace GUI {
      type Parallax = ig.ParallaxGui;
      var Parallax: ig.ParallaxGuiConstructor;
    }
  }
}
