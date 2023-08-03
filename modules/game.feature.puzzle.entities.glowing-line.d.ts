// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    namespace GlowingLine {
      interface Settings extends sc.MapModel.MapEntity.Settings {
        size: Vec2;
        condition: string;
      }
    }
  }
}
