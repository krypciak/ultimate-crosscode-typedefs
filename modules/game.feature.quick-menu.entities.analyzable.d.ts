// requires impact.base.entity
// requires game.feature.quick-menu.gui.quick-screen-types

export {};

declare global {
  namespace ig.ENTITY {
    namespace Analyzable {
      interface Settings {
        analType?: 'DEFAULT' | 'QUEST' | 'SPECIAL';
        visible?: boolean;
        text: ig.LangLabel.Data;
        distance?: number;
      }
    }
    interface Analyzable extends ig.Entity {
      color: sc.ANALYSIS_COLORS;
      text: ig.LangLabel.Data;
      visible: boolean;
      distance?: number;

      isQuickMenuVisible(this: this): boolean;
      getQuickMenuSettings(this: this): Omit<sc.QuickMenuTypesBaseSettings, 'entity'>;
    }
    interface AnalyzableConstructor extends ImpactClass<Analyzable> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.Analyzable.Settings): Analyzable;
    }
    var Analyzable: AnalyzableConstructor;
  }
}
