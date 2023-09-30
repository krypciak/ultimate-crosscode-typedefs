// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
    namespace sc {
        enum DESTRUCTIBLE_TYPE {
            autumnWall,
            autumnWall2,
            autumnWall3,
            bombBlock,
            bombWallEast,
            bombWallNorth,
            bombWallWest,
            boxLarge,
            boxMedEast,
            boxMedNorth,
            boxMedSouth,
            boxMedWest,
            boxMedium,
            iceBlock,
            keyPillar,
            keyPillarAR,
            keyWallNorth,
            masterKeyWallColdDungeon,
            masterKeyWallHeatDungeon,
            masterKeyWallTreeDungeon,
        }
    }
    namespace ig.ENTITY {
        namespace Destructible {
            interface Settings extends ig.Entity.Settings {
                permaDestruct?: boolean
                onDestructIncrease?: string
                onPreDestructIncrease?: string
                desType: keyof typeof sc.DESTRUCTIBLE_TYPE
                enemyInfo?: sc.EnemyInfo
                blockNavMap?: boolean
            }
        }
    }
}
