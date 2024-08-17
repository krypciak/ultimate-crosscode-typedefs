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
      interface Marker extends ig.Entity {
        name: string;
        dir: unknown;
        face: Vec2;
        _wm: ig.Config;

        applyMarkerPosition(this: this, entity: ig.Entity): void;
      }
      interface MarkerConstructor extends ImpactClass<Marker> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.Marker.Settings): Marker;
      }
      var Marker: MarkerConstructor;
    }
  }
}
