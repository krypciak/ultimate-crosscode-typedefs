// requires impact.base.entity
// requires impact.base.game
// requires impact.feature.effect.effect-sheet

export { }

declare global {
    namespace ig {
        namespace ENTITY {
            namespace BounceBlock {
                interface Settings {}
            }
            interface BounceBlock extends ig.AnimatedEntity {
                blockState: number
            }
            interface BounceBlockConstructor extends ImpactClass<BounceBlock> {
                new(x: number, y: number, z: number, settings: ig.ENTITY.BounceBlock.Settings): BounceBlock
            }
            var BounceBlock: BounceBlockConstructor
        }
    }
}
