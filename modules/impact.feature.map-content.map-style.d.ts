// requires impact.base.game

export {};

declare global {
  namespace ig {
    namespace MapStyle {
      interface DoorVariation {
        x: number;
        y: number;
        doorMat: boolean;
        doorGlow?: { x: number; y: number; xCount: number };
      }
    }
    interface MapStyle extends ig.GameAddon {
      registerStyle(mapStyleName: string, styleType: string, style: {
        sheet?: string;
        hasDoorMat?: boolean;
        teleportField?: { x: number; y: number; xCount: number; zHeight: number; };
        colors?: {
          blockFront: string; blockTop: string; pBlockFront: string;
          pBlockTop: string; npBlockFront: string; npBlockTop: string;
        };
        doorGlow?: { x: number; y: number; xCount: number; sideX?: number; sideY?: number; }
        doorVariations?: { 
          glass?: MapStyle.DoorVariation;
          bright?: MapStyle.DoorVariation;
          transparent: MapStyle.DoorVariation;
          brick?: MapStyle.DoorVariation;
          stairDoor?: MapStyle.DoorVariation;
          wood?: MapStyle.DoorVariation;
          dark?: MapStyle.DoorVariation;
          blue?: MapStyle.DoorVariation;
          metal?: MapStyle.DoorVariation;
          elevator?: MapStyle.DoorVariation;
        };
        railX?: number;
        railY?: number;
        lorryX?: number;
        lorryY?: number;
        doorSound?: boolean;
        x?: number;
        y?: number;
        stairDoor?: Vec2;
        puddleX?: number;
        puddleY?: number;
        space?: boolean;
      }): void
    }
    var MapStyle: MapStyle;
  }
}
