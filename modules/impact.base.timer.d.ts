
export { }

declare global {
    namespace ig {
        enum TIMER_MODE { ONCE = 0, REPEAT = 1, BLINK = 2, SINUS = 3, SINUS_RND = 4 }
        interface WeightTimer extends ig.Class {
            duration: number
            timer: number
            actualTick: boolean
            mode: ig.TIMER_MODE
            repeatCount: number
            _rndBool: boolean
        }
        interface WeightTimerConstructor extends ImpactClass<WeightTimer> {
            new(actualTick: boolean, duration: number, mode: ig.TIMER_MODE): WeightTimer
        }
        var WeightTimer: WeightTimerConstructor
    }
}
