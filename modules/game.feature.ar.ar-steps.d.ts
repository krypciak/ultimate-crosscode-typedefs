// requires impact.base.action
// requires impact.base.event
// requires game.feature.ar.gui.ar-box

export {}

declare global {
    namespace ig {
        namespace EVENT_STEP {
            namespace SHOW_AR_MSG {
                interface Settings {
                    entity: { player?: boolean }
                    text: ig.LangLabel
                    time: number
                    mode: sc.AR_BOX_MODE
                    color: keyof sc.AR_COLOR
                    hideOutsideOfScreen: boolean
                    partName?: string
                    varFill?: string
                    varFillMax?: number
                }
            }
            interface SHOW_AR_MSG extends ig.EventStepBase {
                entity: ig.EVENT_STEP.SHOW_AR_MSG.Settings['entity']
                text: ig.LangLabel
                time: number
                mode: boolean
                color: string
                partName?: string
                varFill?: string
                varFillMax?: number
            }
            interface SHOW_AR_MSGConstructor extends ImpactClass<SHOW_AR_MSG> {
                new (settings: ig.EVENT_STEP.SHOW_AR_MSG.Settings): SHOW_AR_MSG
            }
            var SHOW_AR_MSG: SHOW_AR_MSGConstructor
        }
    }
}
