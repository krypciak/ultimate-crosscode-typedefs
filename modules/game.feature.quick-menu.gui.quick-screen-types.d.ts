// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.gui.base.numbers
// requires game.feature.combat.combat
// requires game.feature.quick-menu.gui.quick-misc

export {}

declare global {
    namespace sc {
        enum ANALYSIS_COLORS { RED = 0, BLUE = 1, GREEN = 2, ORANGE = 3, YELLOW = 4, GREY = 5, PURPLE = 6 }

        enum SHOW_TYPE { DEFAULT = 0, INSTANT = 1 }

        interface QuickMenuTypesBase extends ig.FocusGui {
            type: string
            entity: ig.Entity
            screen: sc.QuickFocusScreen
            focusable: boolean
            showType: sc.SHOW_TYPE
            color: sc.ANALYSIS_COLORS
            typeIcon: ig.ImageGui

            setIconColor(this: this, color: sc.ANALYSIS_COLORS): void
            alignGuiPosition(this: this): void
            onAnalysisEnter(this: this): void
            onAnalysisExit(this: this): void
        }
        interface QuickMenuTypesBaseSettings {
            type: string
            entity: ig.Entity
            displayName?: string
            displayTrigger?: unknown
            randomName?: string
            disabled?: boolean
            color?: sc.ANALYSIS_COLORS
            showType?: sc.SHOW_TYPE
            text?: string
        }
        interface QuickMenuTypesBaseConstructor extends ImpactClass<sc.QuickMenuTypesBase> {
            new (type: string, settings: Omit<QuickMenuTypesBaseSettings, 'entity'>, screen: sc.QuickFocusScreen): sc.QuickMenuTypesBase
        }
        var QuickMenuTypesBase: sc.QuickMenuTypesBaseConstructor


        namespace QUICK_MENU_TYPES {
            interface Analyzable extends sc.QuickMenuTypesBase { }
            interface NPC extends sc.QuickMenuTypesBase { }
            interface Enemy extends sc.QuickMenuTypesBase { }
        }
        var QUICK_MENU_TYPES: {
            Analyzable: sc.QUICK_MENU_TYPES.Analyzable
            NPC: sc.QUICK_MENU_TYPES.NPC
            Enemy: sc.QUICK_MENU_TYPES.Enemy
        }
    }
}
