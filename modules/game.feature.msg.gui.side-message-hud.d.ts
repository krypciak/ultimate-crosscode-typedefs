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
        interface SideMessageFaceGui extends ig.GuiElementBase {
            charExpression: sc.CharacterExpression
            timer: number

            setFace(this: this, expression: sc.CharacterExpression, height: number): void
        }
        interface SideMessageFaceGuiConstructor extends ImpactClass<SideMessageFaceGui> {
            new(): SideMessageFaceGui
        }
        var SideMessageFaceGui: SideMessageFaceGuiConstructor
        interface SideMessageLabelGui extends ig.GuiElementBase {
            iconText: sc.TextGui
            currentIconDevice: ig.INPUT_DEVICES
        }
        interface SideMessageLabelGuiConstructor extends ImpactClass<SideMessageLabelGui> {
            new(): SideMessageLabelGui
        }
        var SideMessageLabelGui: SideMessageLabelGuiConstructor
    }
}
