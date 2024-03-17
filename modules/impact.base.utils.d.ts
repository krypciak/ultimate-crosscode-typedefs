export {};

declare global {
  namespace ig {
    interface RGBColorData {
      r: number;
      g: number;
      b: number;
    }
    interface RGBColor extends RGBColorData {
      ok: boolean;

      toRGB(this: this): string;
      toHex(this: this): string;
      assign(this: this, color: ig.RGBColorData): void;
      addColor(this: this, color: ig.RGBColorData, strenght: number): void;
    }
    interface RGBColorConstructor {
      interpolate(
        this: this,
        color1: ig.RGBColorData,
        color2: ig.RGBColorData,
        strenght: number,
      ): void;

      new (color: ig.RGBColorData | string): RGBColor;
    }
    var RGBColor: RGBColorConstructor;
  }
}
