// requires game.feature.combat.entities.ball
// requires game.feature.combat.entities.combatant
// requires game.feature.player.entities.crosshair
// requires game.feature.player.player-level-notifier
// requires game.feature.player.item-consumption

export {};

declare global {
  namespace sc {
    namespace PlayerBaseEntity {
      interface Guard {
        damage: number;
        timer: number;
        fxSheet: ig.EffectSheet;
        fxHandle: ig.ENTITY.Effect;
        currentKey: string;
      }
      interface Settings extends ig.ENTITY.Combatant.Settings {}
    }
    interface PlayerBaseEntity extends ig.ENTITY.Combatant {
      configs: {
        normal: ig.ActorConfig;
        aiming: ig.ActorConfig;
      };
      maxJumpHeight: number;
      guard: PlayerBaseEntity.Guard;
      stunEscapeReady: boolean;
      playerTrack: { startedAction: Nullable<ig.Action>; trackTimer: number };

      doPlayerAction(this: this, action: keyof typeof sc.PLAYER_ACTION): void;
      startGuardEffect(this: this): void;
      endGuardEffect(this: this): void;
      damageShield(this: this, damage: number): boolean;
      regenShield(this: this, isGuarding?: boolean): void;
      updateCombatMode(this: this): void;
    }
    interface PlayerBaseEntityConstructor extends ImpactClass<PlayerBaseEntity> {
      new (
        x: number,
        y: number,
        z: number,
        settings: sc.PlayerBaseEntity.Settings,
      ): PlayerBaseEntity;
    }
    var PlayerBaseEntity: PlayerBaseEntityConstructor;
  }
}
