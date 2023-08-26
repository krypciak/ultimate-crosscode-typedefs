// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace WaterBubblePanel {
        interface Settings extends ig.Entity.Settings {
          coalCoolTime?: number;
        }
      }
    }
  }
}
