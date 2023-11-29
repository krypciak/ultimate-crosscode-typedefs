// requires impact.base.image
// requires impact.feature.gui.gui
// requires impact.feature.gui.base.basic-gui
// requires impact.feature.gui.base.box
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.menu.gui.menu-misc

export {}

declare global {
    namespace sc {
        interface NewGameModeSelectDialog extends ig.GuiElementBase {

        }
        interface NewGameModeSelectDialogConstructor extends ImpactClass<NewGameModeSelectDialog> {
            new (): NewGameModeSelectDialog
        }
        var NewGameModeSelectDialog: NewGameModeSelectDialogConstructor
    }
}
