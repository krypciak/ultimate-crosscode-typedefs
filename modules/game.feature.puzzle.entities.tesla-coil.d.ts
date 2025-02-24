// requires impact.base.entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace sc {
    enum TESLA_COIL_TYPE {
      SOURCE,
      SOURCE_FAST,
      SOURCE_LOOSE,
      SOURCE_LOOST_FLIP,
      EXTENDER,
      EXTENDER_LOOSE,
      EXTENDER_LOOSE_FLIP,
      EXTENDER_IGNORE,
      GROUND_DISCHARGE,
      WHALE_DISCHARGE,
      GROUND_DISCHARGE_FISH,
    }
  }
  namespace ig {
    namespace ENTITY {
      namespace TeslaCoil {
        interface Settings extends ig.Entity.Settings {
          coilType?: keyof typeof sc.TESLA_COIL_TYPE;
          varOnCharge?: string;
          varOnDischarge?: string;
          align?: string;
        }
        type DischargeAction = (
          entity: (ig.ENTITY.TeslaCoil | ig.ENTITY.OneTimeSwitch)[],
          align: ig.ENTITY_ALIGN.BOTTOM,
        ) => void;
      }
      interface TeslaCoil extends ig.AnimatedEntity, sc.Combat.ActionAttached, ig.EffectSheet.EventCallback {
        chargeTimer: number;
        chargeHitExceptions: Nullable<ig.ENTITY.TeslaCoil | ig.ENTITY.OneTimeSwitch>;
        source: boolean;
        fast: boolean;
        effects: { sheet: ig.EffectSheet; handle: Nullable<ig.ENTITY.Effect> };
        effectAlign?: string;
        _wm: ig.Config;
        dischargeAction: Nullable<ig.ENTITY.TeslaCoil.DischargeAction>;

        onHideRequest(this: this): void;
        extendCharge(this: this, chargeHitExceptions: this['chargeHitExceptions']): void;
        discharge(this: this, entities: (ig.ENTITY.TeslaCoil | ig.ENTITY.OneTimeSwitch)[]): void;
        ballHit(this: this, entity: ig.Entity): boolean;
      }
      interface TeslaCoilConstructor extends ImpactClass<TeslaCoil> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.TeslaCoil.Settings): TeslaCoil;
      }
      var TeslaCoil: TeslaCoilConstructor;
    }
  }
}
