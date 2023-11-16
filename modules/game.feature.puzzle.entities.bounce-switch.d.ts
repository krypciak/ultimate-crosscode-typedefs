// requires impact.base.entity
// requires impact.base.game
// requires impact.feature.effect.effect-sheet

export { }

declare global {
    namespace sc {
        namespace BounceSwitchGroups {
            interface Group {
                endSwitch: null,
                variable: string,
                blocks: unknown[],
                blockHitCount: number,
                finalHit: boolean,
                currentBall: null,
                cameraHandle: null,
                overrideHandle: null
            }
        }
        interface BounceSwitchGroups extends ig.GameAddon {
            groups: Record<string, sc.BounceSwitchGroups.Group>

            isGroupBallConflict(this: this, groupName: string, entity: ig.Entity): boolean
            getGroup(this: this, groupName: string): sc.BounceSwitchGroups.Group
        }
        interface BounceSwitchGroupsConstructor extends ImpactClass<BounceSwitchGroups> {
            new (): BounceSwitchGroups
        }
        var BounceSwitchGroups: BounceSwitchGroupsConstructor
        var bounceSwitchGroups: BounceSwitchGroups
    }
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
