export {};

declare global {
  namespace sc {
    interface ProxySpawnerBase extends ig.Class {
      spawn(
        this: this,
        x: number,
        y: number,
        z: number,
        entity: sc.BasicCombatant,
        dir: Vec2,
      ): sc.CombatProxyEntity | ig.ENTITY.Ball | void;
    }
    interface ProxySpawnerBaseConstructor extends ImpactClass<ProxySpawnerBase> {}
    var ProxySpawnerBase: ProxySpawnerBaseConstructor;

    namespace PROXY_TYPE {}

    namespace ProxyTools {
      type AllPrepareSrcProxySettings = {
        [K in keyof typeof sc.PROXY_TYPE]: {
          type: K;
        } & ConstructorParameters<(typeof sc.PROXY_TYPE)[K]>[0];
      };
      type PrepareSrcProxySetting = AllPrepareSrcProxySettings[keyof typeof sc.PROXY_TYPE];

      function prepareSrc(settings: undefined | null): undefined | null;
      function prepareSrc(settings: sc.ProxyTools.PrepareSrcProxySetting): sc.ProxySpawnerBase;
      function getProxy(src: sc.ProxySpawnerBase): sc.ProxySpawnerBase;
      function getProxy(src: string, entity: sc.GetCombatantRoot): sc.ProxySpawnerBase;
    }

    namespace COMBAT_HIT_PROXY_POS {
      type Func = (
        destVec: Vec3,
        combatant: sc.BasicCombatant,
        entity: ig.Entity,
        align: ig.ENTITY_ALIGN,
        alignDestVec: Vec3,
      ) => Vec3 | void;
    }
    interface COMBAT_HIT_PROXY_POS {
      SELF: sc.COMBAT_HIT_PROXY_POS.Func;
      TARGET: sc.COMBAT_HIT_PROXY_POS.Func;
      HIT_POS: sc.COMBAT_HIT_PROXY_POS.Func;
    }
    var COMBAT_HIT_PROXY_CONNECT: COMBAT_HIT_PROXY_POS;

    interface HitProxyConnect extends ig.Class {
      proxy: sc.ProxySpawnerBase;
      pos: sc.COMBAT_HIT_PROXY_POS.Func;
      align: number;
      offset: Vec3;

      spawn(
        this: this,
        target: sc.BasicCombatant,
        combatant: sc.BasicCombatant,
        face: Vec2,
        entity: Nullable<sc.BasicCombatant>,
        dir: Vec2,
      ): void;
    }
    interface HitProxyConnectConstructor extends ImpactClass<HitProxyConnect> {
      new (
        proxy: sc.ProxySpawnerBase,
        pos?: sc.COMBAT_HIT_PROXY_POS,
        align?: ig.ENTITY_ALIGN,
        offset?: Vec3,
      ): HitProxyConnect;
    }
    var HitProxyConnect: HitProxyConnectConstructor;
  }
}
