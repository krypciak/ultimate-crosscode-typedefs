// requires impact.feature.gui.gui

export {}

declare global {
    namespace sc {
        enum AR_BOX_MODE {
            NO_LINE = 0,
            LINE_FILL = 1,
            LINE_EMPTY = 2
        }
        interface AR_COLOR {
            GREEN: { rgb: string, yOff: number }
            RED: { rgb: string, yOff: number }
        }
    }
}
