// requires impact.base.entity
// requires impact.base.actor-entity
// requires impact.feature.effect.effect-sheet

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace Compressor {
        interface Settings extends ig.Entity.Settings {
          followCamera: boolean;
          basllSpeed?: number;
          fastMode?: boolean;
        }
      }
      namespace AntiCompressor {
        interface Settings extends ig.Entity.Settings { }
      }
    }
  }
}
