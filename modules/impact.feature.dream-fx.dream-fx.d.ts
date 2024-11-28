// requires impact.base.event
// requires impact.base.game
// requires impact.feature.gui.gui
// requires impact.base.utils

export {};

declare global {
  namespace ig {
    interface DreamAssets extends ig.Class {
      shadowGfx: ig.Image;
      sideGfx: ig.Image;
      edgeGfx: ig.Image;
      dotGfx: ig.Image;

      clone(this: this): ig.DreamAssets;
      clearCached(this: this): void;
    }
    interface DreamAssetsConstructor extends ImpactClass<DreamAssets> {
      new (): DreamAssets;
    }
    var DreamAssets: DreamAssetsConstructor;

    interface DreamCircleShadowGui extends ig.GuiElementBase {
      assets: Nullable<ig.DreamAssets>;
      centerColor: { old: ig.RGBColor; new: ig.RGBColor };
      borderColor: { old: ig.RGBColor; new: ig.RGBColor };
      colorTimer: number;
      colorDuration: number;
      circleSize: { old: number; new: number; timer: number; duration: number };
      wobbleTimer: number;

      setColors(
        this: this,
        centerColor: ig.RGBColorData,
        borderColor: ig.RGBColorData,
        colorDuration: number,
      ): void;
      _getCurrentColor(
        this: this,
        color1: ig.RGBColor,
        obj: { old: ig.RGBColor; new: ig.RGBColor },
      ): ig.RGBColor;
      _getCurrentSize(this: this): number;
      setCircleSize(this: this, newSize: number, duration: number): void;
    }
    interface DreamCircleShadowGuiConstructor extends ImpactClass<DreamCircleShadowGui> {
      new (): DreamCircleShadowGui;
    }
    var DreamCircleShadowGui: DreamCircleShadowGuiConstructor;

    namespace DreamSideGui {
      interface Particle {
        duration: number;
        timer: number;
        right: boolean;
        y: number;
        speedY: number;
      }
    }
    interface DreamSideGui extends ig.GuiElementBase {
      assets: Nullable<ig.DreamAssets>;
      particles: ig.DreamSideGui.Particle[];
      spawnTimer: number;
      lastRight: boolean;
      rng: { left: ig.UniformRNG; righr: ig.UniformRNG };

      spawnParticle(this: this): void;
    }
    interface DreamSideGuiConstructor extends ImpactClass<DreamSideGui> {
      new (): DreamSideGui;
    }
    var DreamSideGui: DreamSideGuiConstructor;

    namespace DreamDotGui {
      interface Particle {
        duration: number;
        timer: number;
        y: number;
        x: number;
        maxSize: number;
      }
    }
    interface DreamDotGui extends ig.GuiElementBase {
      assets: Nullable<ig.DreamAssets>;
      particles: ig.DreamDotGui.Particle[];
      spawnTimer: number;
      rng: ig.UniformRNG;
      rotate: number;

      spawnParticle(this: this): void;
    }
    interface DreamDotGuiConstructor extends ImpactClass<DreamDotGui> {
      new (): DreamDotGui;
    }
    var DreamDotGui: DreamDotGuiConstructor;

    interface DreamFx extends ig.GameAddon {
      assets: Nullable<ig.DreamAssets>;
      circleShadowGui: ig.DreamCircleShadowGui;
      sideGui: ig.DreamSideGui;
      dotGui: ig.DreamDotGui;

      onReset(this: this): void;
      start(this: this, assets: ig.DreamAssets, showTransition?: boolean): void;
      clear(this: this): void;
      setColors(
        this: this,
        centerColor: ig.RGBColorData,
        borderColor: ig.RGBColorData,
        colorDuration: number,
      ): void;
      setCircleSize(this: this, newSize: number, duration: number): void;
      isActive(this: this): boolean;
    }
    interface DreamFxConstructor extends ImpactClass<DreamFx> {
      new (): DreamFx;
    }
    var DreamFx: DreamFxConstructor;
    var dreamFx: ig.DreamFx;
  }
}
