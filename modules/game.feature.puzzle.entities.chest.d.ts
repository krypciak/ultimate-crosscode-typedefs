// requires impact.base.actor-entity
// requires impact.base.entity
// requires game.feature.interact.map-interact
// requires game.feature.inventory.inventory
// requires game.feature.menu.menu-model

export {};

declare global {
    namespace sc {
        enum CHEST_TYPE {
            Default,
            Bronze,
            Silver,
            Gold,
            Key,
            MasterKey,
        }
        enum CHEST_KEY {
            BRONZE = 154,
            SILVER = 155,
            GOLD = 156,
        }
    }
    namespace ig.ENTITY {
        namespace Chest {
            interface Settings extends ig.Entity.Settings {
                trigger?: string
                noTrack?: boolean
                chestType?: keyof typeof sc.CHEST_TYPE
                variable?: string
                item: number
                amount?: number
                hideCondition?: string
                detectCondition?: string
            }
        }
    }
}
