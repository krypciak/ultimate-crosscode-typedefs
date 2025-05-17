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

    namespace PROXY_TYPE {
      namespace GENERIC {
        interface DataConfig extends sc.CombatProxyEntity.DataBase {
          animation?: ig.AnimationSheet.Settings;
          faceAnims?: ig.AnimationSheet.Settings;
          config?: ig.AnimationSheet.Settings;
          action: ig.Action.Step[];
          breakType?: keyof typeof sc.PROXY_BREAK_TYPE;
          stickToSource?: keyof typeof sc.PROXY_STICK_TYPE;
          killEffect?: ig.EffectHandle.Settings;
        }
      }
      interface GENERIC extends sc.ProxySpawnerBase {
        data: sc.CombatProxyEntity.Data;
        _wm: ig.Config;

        clearCached(this: this): void;
        getSize(this: this, dest: Vec3): Vec3;
        spawn(
          this: this,
          x: number,
          y: number,
          z: number,
          entity: sc.BasicCombatant,
          dir: Vec2,
          noAddStats?: boolean,
        ): sc.CombatProxyEntity;
      }
      interface GENERICConstructor extends ImpactClass<GENERIC> {
        new (data: sc.PROXY_TYPE.GENERIC.DataConfig): GENERIC;
      }
      var GENERIC: GENERICConstructor;
    }

    namespace CombatProxyEntity {
      interface DataBase {
        size?: Vec3;
        padding?: Vec2;
        timeDisconnect?: boolean;
        terrain?: ig.TERRAIN;
        stickFaceAlign?: boolean;
        group: string;
        invisible?: boolean;
        copyOwnerAnims?: boolean;
        startAnim?: string;
        hp: number;
      }
      interface Data extends DataBase {
        config: ig.ActorConfig;
        stickToSource?: sc.PROXY_STICK_TYPE;
        breakType: sc.PROXY_BREAK_TYPE;
        faceAnims?: ig.AnimationSheet;
        animation?: ig.AnimationSheet;
        walkAnims?: ig.AnimationSheet;
        action: ig.Action;
        killEffect?: ig.EffectHandle;
      }

      interface Settings extends sc.BasicCombatant.Settings {
        data: sc.CombatProxyEntity.Data;
        combatant: sc.BasicCombatant;
        dir: Vec2;
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
      effects: { onKill: Nullable<ig.EffectHandle>; handle: Nullable<ig.ENTITY.Effect> };
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

      createActorConfig(data: ig.ActorConfig.Data): ig.ActorConfig;
    }
    var CombatProxyEntity: CombatProxyEntityConstructor;
  }
}
