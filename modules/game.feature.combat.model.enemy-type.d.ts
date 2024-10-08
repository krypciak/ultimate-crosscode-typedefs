// requires impact.base.loader
// requires game.feature.combat.model.combat-params
// requires game.feature.combat.model.combat-condition
// requires impact.base.animation

export {};

declare global {
  namespace sc {
    namespace EnemyType {
      interface ItemDrop {
        item: sc.ItemID;
        prob: number;
        min: number;
        max: number;
        rank: sc.CombatRankLabel | '';
        boosted?: Nullable<boolean>;
        condition?: Nullable<string>;
      }
    }
    interface EnemyType extends ig.JsonLoadable {
      enduranceScale: number;
      level: number;
      boss: boolean;
      itemDrops: sc.EnemyType.ItemDrop[];
      bossLabel: ig.LangLabel.Data | string;
      boostedLevel: number;
      actions: Record<string, ig.Action>;
      reactions: Record<string, EnemyReactionBase>;
      size: Vec2;

      getAppearAction(this: this, enemy: ig.ENTITY.Enemy): ig.Action;
      updateAction(this: this, enemy: ig.ENTITY.Enemy): void;
      postActionUpdate(this: this, enemy: ig.ENTITY.Enemy): void;
      resolveItemDrops(this: this, enemyEntity: ig.ENTITY.Enemy): void;
    }
    interface EnemyTypeConstructor extends ImpactClass<EnemyType> {
      cache: Record<string, EnemyType>;

      new (name: string): EnemyType;
    }
    var EnemyType: EnemyTypeConstructor;

    namespace EnemyInfo {
      interface Settings {
        type: string;
        group?: string;
        party?: keyof typeof sc.COMBATANT_PARTY;
        level?: number;
      }
    }
    interface EnemyInfo extends ig.Class {
      settings: EnemyInfo.Settings;
      enemyType: EnemyType;
      getSettings(): EnemyInfo.Settings;
      clearCached(): void;
    }
    interface EnemyInfoConstructor extends ImpactClass<EnemyInfo> {
      new (settings: EnemyInfo.Settings): EnemyInfo;
    }
    var EnemyInfo: EnemyInfoConstructor;

    interface EnemyState extends ig.Class {
      name: string;
      entityConfig: ig.ActorConfig;

      selectAction(this: this, enemy: ig.ENTITY.Enemy): Nullable<unknown>;
    }
    interface EnemyStateConstructor extends ImpactClass<EnemyState> {
      new (name: string, b: unknown, d: unknown): EnemyState;
    }
    var EnemyState: EnemyStateConstructor;
  }
}
