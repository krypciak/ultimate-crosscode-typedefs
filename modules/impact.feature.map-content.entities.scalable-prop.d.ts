// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    namespace ScalableProp {
      namespace Settings {
        interface PropConfig {
          name: string;
          sheet: string;
          ends: { west?: string; east?: string; north?: string; south?: string } | null;
        }
      }
      interface Settings extends sc.MapModel.MapEntity.Settings {
        size?: Vec2;
        patternOffset?: Vec2;
        timeOffset?: number;
        blockNavMap: boolean;
        hideCondition?: string;
        propConfig?: ig.ENTITY.ScalableProp.Settings.PropConfig;
      }
    }
  }
}

