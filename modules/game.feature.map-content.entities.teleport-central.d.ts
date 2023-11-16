// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.interact.map-interact
// requires game.feature.npc.entities.npc-waypoint

export { };

declare global {
    namespace ig.ENTITY {
        namespace TeleportField {
            interface Settings extends ig.Entity.Settings {
                central?: { global: boolean, name: string };
                map: string;
                marker: string;
                dir?: keyof typeof ig.ActorEntity.FACE4;
                pseudoExit?: boolean;
                longTelCond?: string;
                gfxType: 'AR' | 'AR_FINAL' | 'BERGEN_LEFT' | 'HEAT_RIGHT' | 'RHOMBUS_SQR_LEFT' | 'RHOMBUS_SQR_RIGHT' |
                'RHOMBUS_SQR_STATION' | 'RHOMBUS_SQR_STATION_START' | 'SOLID' | 'WAVE_DOWN' | 'WAVE_UP'
                blockEvent?: unknown; // steps: d.blockEvent
                blockEventCondition?: string;
                teleportLabel: ig.LangLabel.Data;
            }
        }
        interface TeleportField extends ig.AnimatedEntity {
            map: string
            marker: string
            dir: keyof typeof ig.ActorEntity.FACE4
            blockEventCondition: string
        }
        interface TeleportFieldConstructor extends ImpactClass<TeleportField> {
            new(x: number, y: number, z: number, settings: ig.ENTITY.TeleportField.Settings): TeleportField
        }
        var TeleportField: TeleportFieldConstructor
    }
}
