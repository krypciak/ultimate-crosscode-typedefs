// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace WaterBubblePanel {
        interface Settings extends sc.MapModel.MapEntity.Settings {
          coalCoolTime?: number;
        }
      }
    }
  }
}
