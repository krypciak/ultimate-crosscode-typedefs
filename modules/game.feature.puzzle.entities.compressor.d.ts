// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace Compressor {
        interface Settings extends sc.MapModel.MapEntity.Settings {
          followCamera: boolean;
          basllSpeed?: number;
          fastMode?: boolean;
        }
      }
    }
  }
}
