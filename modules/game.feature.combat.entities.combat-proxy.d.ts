// requires game.feature.npc.entities.sc-actor
// requires game.feature.combat.model.proxy
// requires game.feature.combat.entities.combatant
// requires game.feature.combat.combat-poi

export {};

declare global {
  namespace sc {
    enum PROXY_STICK_TYPE {
      NONE = 0,
      OWNER = 1,
      TARGET = 2,
    }

    namespace CombatProxyEntity {
      namespace Settings {
        interface Data {
          size?: Vec3;
          padding?: Vec2;
          config: ig.ActorConfig;
          timeDisconnect?: boolean;
          terrain?: ig.TERRAIN;
          stickToSource?: sc.PROXY_STICK_TYPE;
          stickFaceAlign?: boolean;
          group: string;
          breakType: sc.PROXY_BREAK_TYPE;
          invisible?: boolean;
          copyOwnerAnims?: boolean;
          startAnim?: string;
          faceAnims?: ig.AnimationSheet;
          animation?: ig.AnimationSheet;
          walkAnims?: ig.AnimationSheet;
          action: ig.Action;
          hp: number;
          killEffect?: ig.EffectSheet;
        }
      }
      interface Settings extends sc.BasicCombatant.Settings {
        data: Settings.Data;
        combatant: sc.BasicCombatant;
      }

      interface DESTROY_TYPE_INTERFACE {
        ACTION_END_DESTROYED: 1;
        HIT_DESTROYED: 2;
      }
      type DESTROY_TYPE = DESTROY_TYPE_INTERFACE[keyof DESTROY_TYPE_INTERFACE];
    }
    interface CombatProxyEntity
      extends sc.BasicCombatant,
        ig.ActorEntity.ActionAttachedListener,
        ig.Entity.Attachable,
        ig.EffectSheet.EventCallback,
        ig.Vars.Accessor {
      hp: number;
      maxHp: number;
      breakType: sc.PROXY_BREAK_TYPE;
      combatant: sc.BasicCombatant;
      sourceEntity: sc.BasicCombatant;
      externalEntity: Nullable<sc.BasicCombatant>;
      party: sc.COMBATANT_PARTY;
      collaboration: Nullable<sc.EnemyCollab>;
      animSheet: ig.AnimationSheet;
      params: sc.CombatParams;
      group: string;
      effects: { onKill: Nullable<ig.EffectSheet>; handle: Nullable<ig.ENTITY.Effect> };
      stickToSource: sc.PROXY_STICK_TYPE;
      wasHit: boolean;
      isThreat: boolean;
      destroyType: Nullable<sc.CombatProxyEntity.DESTROY_TYPE>;

      getSourceEntity(this: this): sc.BasicCombatant;
      connectExternal(this: this, entity: Nullable<sc.BasicCombatant>): void;
      onCollabEndDetach(this: this, collab: sc.EnemyCollab): void;
      postActionUpdate(this: this): void;
      detach(this: this): void;
      destroy(this: this, type?: sc.CombatProxyEntity.DESTROY_TYPE): void;
      ballHit(this: this, entity: ig.Entity): boolean;
      setMaxHp(this: this, hp: number): void;
      reduceHp(this: this, amount: number): void;
    }
    interface CombatProxyEntityConstructor extends ImpactClass<CombatProxyEntity> {
      new (
        x: number,
        y: number,
        z: number,
        settings: CombatProxyEntity.Settings,
      ): CombatProxyEntity;
    }
    var CombatProxyEntity: CombatProxyEntityConstructor;
  }
}
