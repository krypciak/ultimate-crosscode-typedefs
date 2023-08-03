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
        interface Settings extends sc.MapModel.MapEntity.Settings {
          coilType?: keyof typeof sc.TESLA_COIL_TYPE;
          varOnCharge?: string;
          varOnDischarge?: string;
          align?: string;
        }
      }
    }
  }
}
