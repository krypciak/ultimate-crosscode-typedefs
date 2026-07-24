// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {}

declare global {
    namespace sc {
        interface SteamPipeType {
            scaleX?: boolean
            scaleY?: boolean
            size: Vec3
            renderHeight: number
            points: Vec2[]
            gfx: Vec2 & { w?: number; h?: number }
        }
        interface STEAM_PIPE_TYPES {
            HORIZONTAL: sc.SteamPipeType
            VERTICAL: sc.SteamPipeType
            CURVE_SE: sc.SteamPipeType
            CURVE_SW: sc.SteamPipeType
            CURVE_NE: sc.SteamPipeType
            CURVE_NW: sc.SteamPipeType
            END_NORTH: sc.SteamPipeType
            OVEN_EAST: sc.SteamPipeType
            OVEN_WEST: sc.SteamPipeType
            UPPER_PIPE: sc.SteamPipeType
        }
        var STEAM_PIPE_TYPES: STEAM_PIPE_TYPES

        interface SteamTools {
            propagateSteam(
                pipe: ig.ENTITY.SteamPipe,
                relativePoint: Vec2,
                fastMode: boolean,
                glowingEntity?: sc.SteamGlowEntity
            ): boolean
            getClosestPoint(pipe: ig.ENTITY.SteamPipe, points: Vec2[], startPoint: Vec2, maxDist: number): number
            getGlobalPoint(dest: Vec2, pipe: ig.ENTITY.SteamPipe, relativePoint: Vec2): Vec2
        }
        var SteamTools: SteamTools

        namespace SteamGlowEntity {
            interface Settings extends ig.Entity.Settings {}
        }
        interface SteamGlowEntity extends ig.Entity {
            lightHandle: ig.LightHandle

            stop(this: this, pos: Vec2, z: number): void
        }
        interface SteamGlowEntityConstructor extends ImpactClass<SteamGlowEntity> {
            new (x: number, y: number, z: number, settings: sc.SteamGlowEntity.Settings): SteamGlowEntity
        }
        var SteamGlowEntity: SteamGlowEntityConstructor
    }

    namespace ig.ENTITY {
        namespace SteamPipe {
            interface SteamReceiver {
                receiveSteam(this: this, point: Vec2, fastMode: boolean, glowEntity?: sc.SteamGlowEntity): boolean
            }

            interface Settings extends ig.Entity.Settings {
                pipeType: keyof typeof sc.STEAM_PIPE_TYPES
            }
            interface Steam {
                startPoint: number
                duration: number
                startTimer: number
                endTimer: number
                lightTimer: number
                propagated: boolean
                glowEntity: Nullable<sc.SteamGlowEntity>
            }
        }
        interface SteamPipe extends ig.Entity, ig.ENTITY.SteamPipe.SteamReceiver {
            pipeType: sc.SteamPipeType
            gfx?: { pattern: ig.ImagePatternSheet; glowPattern: ig.ImagePatternSheet }
            steam: ig.ENTITY.SteamPipe.Steam
            _wm: ig.Config

            _cutSprite(this: this, sprite: ig.CubeSprite, point: Vec2, factor: number): void
        }
        interface SteamPipeConstructor extends ImpactClass<SteamPipe> {
            new (x: number, y: number, z: number, settings: ig.ENTITY.SteamPipe.Settings): SteamPipe
        }
        var SteamPipe: SteamPipeConstructor

        namespace SteamTurnout {
            interface Settings extends ig.AnimatedEntity.Settings {
                turnDefault: keyof typeof sc.STEAM_TURNOUT_TYPES
                turnAlt: keyof typeof sc.STEAM_TURNOUT_TYPES
                condition: string
            }
        }
        interface SteamTurnout extends ig.AnimatedEntity, ig.ENTITY.SteamPipe.SteamReceiver {
            turnDefault: sc.SteamTurnoutType
            turnAlt: sc.SteamTurnoutType
            condition: ig.VarCondition
            points: Vec2[]
            isOn: boolean
            effects: { sheet: ig.EffectSheet }
            _wm: ig.Config

            varsChanged(this: this): void
        }
        interface SteamTurnoutConstructor extends ImpactClass<SteamTurnout> {
            new (x: number, y: number, z: number, settings: ig.ENTITY.SteamTurnout.Settings): SteamTurnout
        }
        var SteamTurnout: SteamTurnoutConstructor
    }
    namespace sc {
        interface SteamTurnoutType {
            tile: number
            points: Vec2[]
        }
        interface STEAM_TURNOUT_TYPES {
            HORIZONTAL: SteamTurnoutType
            VERTICAL: SteamTurnoutType
            CURVE_SE: SteamTurnoutType
            CURVE_SW: SteamTurnoutType
            CURVE_NE: SteamTurnoutType
            CURVE_NW: SteamTurnoutType
        }
        var STEAM_TURNOUT_TYPES: STEAM_TURNOUT_TYPES
    }
    namespace ig.ENTITY {
        namespace SteamOven {
            interface Settings extends ig.AnimatedEntity.Settings {
                fastMode?: boolean
            }
        }
        interface SteamOven extends ig.AnimatedEntity {
            effects: { sheet: ig.EffectSheet }
            _wm: ig.Config

            startSteam(this: this): void
        }
        interface SteamOvenConstructor extends ImpactClass<SteamOven> {
            new (x: number, y: number, z: number, settings: ig.ENTITY.SteamOven.Settings): SteamOven
        }
        var SteamOven: SteamOvenConstructor
    }
}
