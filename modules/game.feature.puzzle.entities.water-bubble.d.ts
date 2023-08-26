// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace WaterBubblePanel {
      }
    }
  }
}
    namespace ig.ENTITY {
        interface WaterBubblePanel extends ig.AnimatedEntity {
            interface Settings extends ig.Entity.Settings {
              coalCoolTime?: number;
            }
        }
        interface WaterBubblePanelConstructor extends ImpactClass<WaterBubblePanel> {}
        let WaterBubblePanel: WaterBubblePanelConstructor;
    }
}
