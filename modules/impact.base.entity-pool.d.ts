// requires impact.base.game

export {};

declare global {
  namespace ig {
    interface EntityPool {
      pools: Record<number, ig.Entity[]>;
      mixin: {
        staticInstantiate(
          x: number,
          y: number,
          z: number,
          settings: ig.Entity.Settings,
        ): Nullable<ig.Entity>;
        erase(): void;
      };
      enableFor(clazz: ig.ClassConstructor): void;
      getFromPool(
        classId: number,
        x: number,
        y: number,
        z: number,
        settings: ig.Entity.Settings,
      ): Nullable<ig.Entity>;
      putInPool(clazz: ig.Class): void;
      drainPool(classId: number): void;
      drainAllPools(): void;
    }
    var EntityPool: EntityPool;
  }
}
