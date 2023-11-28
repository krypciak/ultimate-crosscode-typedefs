// requires impact.base.entity
// requires game.feature.interact.map-interact
// requires impact.base.actor-entity

export { }

declare global {
    namespace ig {
        namespace ENTITY {
            namespace Elevator {
                interface Settings { }
            }
            interface Elevator extends ig.Entity { }
            interface ElevatorConstructor extends ImpactClass<Elevator> {
                new(x: number, y: number, z: number, settings: ig.ENTITY.Elevator.Settings): Elevator
            }
            var Elevator: ElevatorConstructor
        }
    }
}
