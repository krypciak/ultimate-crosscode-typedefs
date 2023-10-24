// requires impact.base.image
// requires impact.feature.interact.gui.focus-gui
// requires game.feature.interact.button-group

export {}

declare global {
    namespace sc {
        interface CenterMsgBoxGui extends ig.GuiElementBase {
            bgColor: string
            msgBox: unknown
            textGui: sc.TextGui
            textDone: boolean
            sccreenInteract: unknown
            callback: unknown

            setBoxOffset(this: this, x: number, y: number): void
            _onTextFinish(this: this): void
            onInteraction(this: this): void
            _close(this: this): void
        }
        interface CenterMsgBoxGuiConstructor extends ImpactClass<CenterMsgBoxGui> {
            new (text: string, settings: sc.TextGui.Settings, bgColor: string, localAlpha: unknown, callback: unknown, pauseGui: unknown): CenterMsgBoxGui
        }
        var CenterMsgBoxGui: CenterMsgBoxGuiConstructor
    }
}
