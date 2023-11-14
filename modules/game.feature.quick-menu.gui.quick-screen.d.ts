// requires impact.base.image
// requires impact.feature.gui.gui
// requires game.feature.quick-menu.gui.quick-screen-types
// requires game.feature.menu.gui.menu-misc
// requires game.feature.quick-menu.gui.quick-misc

export { }

declare global {
    namespace sc {
        interface QuickMenuAnalysis extends ig.GuiElementBase {
            entities: sc.QuickMenuTypesBase[]

            show(this: this): void
        }
        interface QuickMenuAnalysisConstructor extends ImpactClass<QuickMenuAnalysis> {
            new(): QuickMenuAnalysis
        }
        var QuickMenuAnalysis: QuickMenuAnalysisConstructor
    }
}
