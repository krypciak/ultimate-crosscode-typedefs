// requires impact.base.entity
// requires impact.feature.effect.effect-sheet
// requires game.feature.combat.combat-target-event
// requires impact.base.actor-entity

export {};

declare global {
  namespace ig {
    namespace ENTITY {
      namespace Magnet {
        interface Settings extends ig.Entity.Settings {
          dir: keyof typeof ig.ActorEntity.FACE4;
          altDirs?: string[]; // array of conditions
        }
      }
      interface Magnet extends ig.AnimatedEntity {
        dir: number;
        targetDir: number;
        defaultDir: number;
        face: Vec2;
        altDirs: { condition: ig.VarCondition; dir: ig.ActorEntity.FACE4 }[];
        pull: {
          timer: number;
          entities: ig.Entity[];
          pulling: ig.Entity[];
          moved: ig.Entity[];
          done: boolean;
        };
        effects: { sheet: ig.EffectSheet; handle: ig.ENTITY.Effect };
        _wm: ig.Config;

        onHideRequest(this: this): void;
        onEffectEvent(this: this, effect: ig.ENTITY.Effect): void;
        startPull(this: this): void;
        fetchPullEntities(this: this): void;
        isPullActive(this: this): boolean;
        pullEntities(this: this): void;
        varsChanged(this: this): void;
        updateDir(this: this, forceSet?: boolean): void;
        ballHit(this: this, entity: ig.Entity): boolean;
      }
      interface MagnetConstructor extends ImpactClass<Magnet> {
        new (x: number, y: number, z: number, settings: ig.ENTITY.Magnet.Settings): Magnet;
      }
      var Magnet: MagnetConstructor;
    }
  }
}
