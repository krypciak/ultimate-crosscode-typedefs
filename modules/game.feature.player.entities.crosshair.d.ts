// requires impact.base.entity

export {};

declare global {
  namespace ig.ENTITY {
    namespace Crosshair {
      interface Settings extends ig.Entity.Settings {}
    }
    interface Crosshair extends ig.Entity {
      offset: Vec3;
      tileSheet: ig.TileSheet;
      thrower: ig.ENTITY.Player;
      controller: sc.PlayerCrossHairController;
      rangeStart: number;
      aimTime: number;
      maxAngleMove: number;
      chargeActive: boolean;
      rangeCurrent: number;
      currentCharge: number;
      speedFactor: number;
      baseSpeedFactor: number;
      doBlink: boolean;
      gamepadMode: boolean;
      active: boolean;
      special: boolean;
      circleGlow: number;
      _lastDir: Vec2;
      _aimDir: Vec2;
      _dots: ig.ENTITY.CrosshairDot[];
      _currentDot: number;
      sounds: { charged: ig.Sound };
      soundTimer: number;
      dirHelperDrawInfo: Vec2 & { tile: number; flipX: number; flipY: number }[];

      deferredUpdate(this: this): void;
      _updateCrossHair(
        this: this,
        pos: Vec3,
        dir: Vec2,
        size: Vec3,
        alpha: number,
        tile: string,
        bouncePoints: number,
        maxPoint: number,
        maxBounce: number,
        s?: ig.Entity,
      ): void;
    }
    interface CrosshairConstructor extends ImpactClass<Crosshair> {
      new (x: number, y: number, z: number, settings: ig.ENTITY.Crosshair.Settings): Crosshair;
    }
    var Crosshair: CrosshairConstructor;

    namespace CrosshairDot {
      interface Settings extends ig.Entity.Settings {}
    }
    interface CrosshairDot extends ig.AnimatedEntity {}
    interface CrosshairDotConstructor extends ImpactClass<CrosshairDot> {
      new (
        x: number,
        y: number,
        z: number,
        settings: ig.ENTITY.CrosshairDot.Settings,
      ): CrosshairDot;
    }
    var CrosshairDot: CrosshairDotConstructor;
  }
  namespace sc {
    interface PlayerCrossHairController extends ig.Class {
      gamepadMode: boolean;

      isAiming(this: this): boolean;
      getAimingDistance(this: this, currentDir: Vec2, offsetDir: Vec2): unknown;
      onActiveChange(this: this, crosshair: ig.ENTITY.Crosshair): void;
      updatePos(this: this, crosshair: ig.ENTITY.Crosshair): void;
    }
    interface PlayerCrossHairControllerConstructor extends ImpactClass<PlayerCrossHairController> {
      new (): PlayerCrossHairController;
    }
    var PlayerCrossHairController: PlayerCrossHairControllerConstructor;
  }
}
