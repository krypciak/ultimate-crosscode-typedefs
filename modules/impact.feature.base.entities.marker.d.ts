// requires impact.base.actor-entity

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace Marker {
        interface Settings extends sc.MapModel.MapEntity.Settings {
          dir: keyof typeof ig.ActorEntity.FACE8;
        }
      }
    }
  }
}
