// requires game.feature.voice-acting.voice-acting

export {}

declare global {
    namespace sc {
        namespace VA_CONFIG {
            type Entry = {
                sounds: ({
                    src: string
                    volume: number
                })[]
                filter: {
                    text: string,
                    expressions?: string[]
                }
            }
        }
        interface VA_CONFIG {
            "main.lea": sc.VA_CONFIG.Entry
            "main.shizuka": sc.VA_CONFIG.Entry
            "main.sergey": sc.VA_CONFIG.Entry
            "main.schneider": sc.VA_CONFIG.Entry
            "main.emilie": sc.VA_CONFIG.Entry
            "main.carla": sc.VA_CONFIG.Entry
            "main.captain": sc.VA_CONFIG.Entry
            "main.genius": sc.VA_CONFIG.Entry
            "antagonists.designer": sc.VA_CONFIG.Entry
            "antagonists.gautham": sc.VA_CONFIG.Entry
            "antagonists.fancyguy": sc.VA_CONFIG.Entry
        }
    }
}
