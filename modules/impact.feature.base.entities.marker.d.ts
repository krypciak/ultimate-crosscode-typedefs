// requires impact.base.actor-entity

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace Marker {
        interface Settings extends ig.Entity.Settings {
          dir: keyof typeof ig.ActorEntity.FACE8;
        }
      }
    }
  }
}
