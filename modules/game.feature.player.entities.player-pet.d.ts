// requires game.feature.npc.entities.sc-actor

export {};

declare global {
  namespace sc {
    namespace PlayerPetEntity {
      interface Settings {
        petSkin: PetSkin;
      }
      interface PetSkin {}
    }
    interface PlayerPetEntity extends sc.ActorEntity {
      npcEffects: ig.EffectSheet;
      petSkin: sc.PlayerPetEntity.PetSkin;
      configs: unknown;
      pushTimer: number;
      posOffset: Vec2;
      state: number;
      respawnPos: Vec3;
      idleTimer: number;
      idleSpecials: number;
      tempHidden: boolean;
      effects: { water: ig.EffectSheet };

      resetIdleTimer(this: this, additional?: number): void;
      shouldTempHide(this: this): boolean;
      resetStartPos(this: this): void;
      resetPos(this: this, transition?: boolean, assignRespawnPos?: boolean): void;
      onNavigationFailed(this: this, retryAttempt: number): void;
      remove(this: this): void;
    }
    interface PlayerPetEntityConstructor extends ImpactClass<PlayerPetEntity> {
      new (x: number, y: number, z: number, settings: sc.PlayerPetEntity.Settings): PlayerPetEntity;
    }
    var PlayerPetEntity: PlayerPetEntityConstructor;
  }
}
