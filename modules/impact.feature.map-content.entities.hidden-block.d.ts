// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    namespace HiddenBlock {
      interface Settings extends ig.Entity.Settings {
        collType?: keyof typeof ig.COLLTYPE;
        size?: Vec2;
        shape?: keyof typeof ig.COLLSHAPE;
        heightShape?: keyof typeof ig.COLL_HEIGHT_SHAPE;
        terrain?: keyof typeof ig.TERRAIN;
        zHeight?: number;
        blockNavMap?: boolean;
      }
    }

    namespace HiddenSkyBlock {
      interface Settings extends ig.Entity.Settings {}
    }
    interface HiddenSkyBlock extends ig.Entity {}
    interface HiddenSkyBlockConstructor extends ImpactClass<HiddenSkyBlock> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.HiddenSkyBlock.Settings,
      ): HiddenSkyBlock;
    }
    var HiddenSkyBlock: HiddenSkyBlockConstructor;
  }
}
