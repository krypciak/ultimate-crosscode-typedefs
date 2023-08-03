export {};

declare global {
  namespace ig {
    enum COLLTYPE {
      NONE = 0,
      IGNORE = 1,
      PROJECTILE = 2,
      VIRTUAL = 3,
      PBLOCK = 4,
      NPBLOCK = 5,
      BLOCK = 6,
      TRIGGER = 7,
      PASSIVE = 8,
      SEMI_IGNORE = 9,
      FENCE = 10,
      NPFENCE = 11
    }
    enum COLL_HEIGHT_SHAPE {
      NONE = 0,
      NORTH_UP = 1,
      EAST_UP = 2,
      WEST_UP = 3,
      SOUTH_UP = 4
    }
    enum COLL_SHADOW_TYPE {
      DEFAULT = 0,
      STATIC_SIZE = 1,
      RECTANGULAR = 2, 
    }
    interface CollEntry extends ig.Class {
      pos: Vec3;
      size: Vec3;
      relativeVel: Vec2;
    }
    interface CollEntryConstructor extends ImpactClass<CollEntry> {
      new (entity: ig.Entity): CollEntry;
    }
    var CollEntry: CollEntryConstructor;
  }
}
