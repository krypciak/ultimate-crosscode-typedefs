// requires impact.feature.gui.gui
// requires game.feature.gui.base.boxes
// requires game.feature.gui.base.text
// requires game.feature.gui.base.slick-box
// requires game.feature.msg.gui.msg-skip-hud

export {}

declare global {
    namespace sc {
        function getMessageTime(textLike: sc.TextLike): number

        interface SideMessageHudGui extends ig.GuiElementBase {
            showNextSideMessage(this: this): void
        }
        interface SideMessageHudGuiConstructor extends ImpactClass<SideMessageHudGui> {
            new (): SideMessageHudGui
        }
        var SideMessageHudGui: SideMessageHudGuiConstructor
    }
}
