// requires impact.base.game
// requires game.config
// requires impact.base.entity

export {};

declare global {
  namespace ig {
    interface MapImageManager extends ig.GameAddon {
      images: Record<string, ig.MapImageEntity>;

      showMapImage(this: this, name: string, settings: ig.MapImageEntity.Settings): void;
      removeMapImage(this: this, name: string): void;
    }
    interface MapImageManagerConstructor extends ImpactClass<MapImageManager> {
      new (): MapImageManager;
    }
    var MapImageManager: MapImageManagerConstructor;
    var mapImage: ig.MapImageManager;

    namespace MapImageEntity {
      interface Settings extends ig.AnimatedEntity.Settings {
        tileSheet: ig.TileSheet.Data;
        guiSprite: boolean;
        position: ig.Event.Vec3Expression;
      }
    }
    interface MapImageEntity extends ig.AnimatedEntity {
      img: null;
      _wm: ig.Config;
      tileSheet: ig.TileSheet.Data;
      guiSprite: boolean;
      wallY: number;

      remove(this: this): void;
    }
    interface MapImageEntityConstructor extends ImpactClass<MapImageEntity> {
      new (x: number, y: number, z: number, settings: ig.MapImageEntity.Settings): MapImageEntity;
    }
    var MapImageEntity: MapImageEntityConstructor;
  }
}
